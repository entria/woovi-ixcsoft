/**
 * Manually enqueues the IXC poll job.
 * Requires `pnpm dev` (or any worker process) to be running so the job is consumed.
 *
 * Usage:
 *   # enqueue the orchestrator (all active applications)
 *   node --env-file=.env --experimental-strip-types scripts/triggerPoll.ts
 *
 *   # enqueue for a specific application (accepts wooviAppId or Mongo _id)
 *   node --env-file=.env --experimental-strip-types scripts/triggerPoll.ts <id>
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { BULL_MQ_JOBS } from '../src/jobs/bullMqJobs.ts';
import { defaultJobOptions, ixcsoftQueue } from '../src/jobs/queues.ts';

const arg = process.argv[2];

if (!arg) {
  const job = await ixcsoftQueue.add(
    BULL_MQ_JOBS.IXCSOFT.CRON.POLL_OPEN_INVOICES,
    {},
    defaultJobOptions,
  );
  console.log('enqueued orchestrator', { jobId: job.id, name: job.name });
} else {
  await connectDatabase();

  const isMongoId = /^[a-f0-9]{24}$/i.test(arg);
  const application = isMongoId
    ? await ApplicationModel.findById(arg)
    : await ApplicationModel.findOne({ wooviAppId: arg });

  if (!application) {
    console.error('application not found:', arg);
    await mongoose.disconnect();
    await ixcsoftQueue.close();
    process.exit(1);
  }

  const job = await ixcsoftQueue.add(
    BULL_MQ_JOBS.IXCSOFT.POLL_INVOICES_FOR_APPLICATION,
    { applicationId: application._id.toString() },
    defaultJobOptions,
  );

  console.log('enqueued for application', {
    jobId: job.id,
    applicationId: application._id.toString(),
    wooviAppId: application.wooviAppId,
  });

  await mongoose.disconnect();
}

await ixcsoftQueue.close();
process.exit(0);

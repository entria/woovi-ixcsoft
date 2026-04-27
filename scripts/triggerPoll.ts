/**
 * Manually enqueues the IXC poll cron job.
 * Requires `pnpm dev` (or any worker process) to be running so the job is consumed.
 *
 * Usage:
 *   node --env-file=.env --experimental-strip-types scripts/triggerPoll.ts
 */
import { BULL_MQ_JOBS } from '../src/jobs/bullMqJobs.ts';
import { defaultJobOptions, ixcsoftQueue } from '../src/jobs/queues.ts';

const job = await ixcsoftQueue.add(
  BULL_MQ_JOBS.IXCSOFT.CRON.POLL_OPEN_INVOICES,
  {},
  defaultJobOptions,
);

console.log('enqueued', { jobId: job.id, name: job.name });

await ixcsoftQueue.close();
process.exit(0);

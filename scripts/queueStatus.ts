/**
 * Inspects BullMQ queue state for the IXCSOFT queue.
 *
 * Usage:
 *   node --env-file=.env --experimental-transform-types scripts/queueStatus.ts
 */
import { ixcsoftQueue } from '../src/jobs/queues.ts';

const counts = await ixcsoftQueue.getJobCounts(
  'waiting',
  'active',
  'completed',
  'failed',
  'delayed',
  'paused',
);
console.log('counts:', counts);

const recentCompleted = await ixcsoftQueue.getJobs(['completed'], 0, 5, false);
console.log('\nrecent completed:', recentCompleted.map((j) => ({
  id: j.id,
  name: j.name,
  data: j.data,
  finishedOn: j.finishedOn ? new Date(j.finishedOn).toISOString() : null,
})));

const recentFailed = await ixcsoftQueue.getJobs(['failed'], 0, 5, false);
console.log('\nrecent failed:', recentFailed.map((j) => ({
  id: j.id,
  name: j.name,
  data: j.data,
  failedReason: j.failedReason,
  attemptsMade: j.attemptsMade,
})));

const waiting = await ixcsoftQueue.getJobs(['waiting'], 0, 5, false);
console.log('\nwaiting:', waiting.map((j) => ({ id: j.id, name: j.name })));

await ixcsoftQueue.close();
process.exit(0);

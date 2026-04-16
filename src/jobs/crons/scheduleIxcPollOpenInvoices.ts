import { ixcsoftQueue } from '../queues.ts';
import { BULL_MQ_JOBS } from '../bullMqJobs.ts';
import { config } from '../../common/config.ts';

export const scheduleIxcPollOpenInvoices = async (): Promise<void> => {
  await ixcsoftQueue.upsertJobScheduler(
    BULL_MQ_JOBS.IXCSOFT.CRON.POLL_OPEN_INVOICES,
    { pattern: config.POLL_INTERVAL_CRON }, // default: every hour
    { name: BULL_MQ_JOBS.IXCSOFT.CRON.POLL_OPEN_INVOICES },
  );
};

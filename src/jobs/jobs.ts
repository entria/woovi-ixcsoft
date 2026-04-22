import { BULL_MQ_JOBS } from './bullMqJobs.ts';
import { ixcsoftPollOpenInvoicesJob } from './ixcsoftPollOpenInvoicesJob.ts';
import { ixcsoftProcessChargeJob } from './ixcsoftProcessChargeJob.ts';

export const jobs: Record<string, (data: unknown) => Promise<void>> = {
  [BULL_MQ_JOBS.IXCSOFT.CRON.POLL_OPEN_INVOICES]: ixcsoftPollOpenInvoicesJob,
  [BULL_MQ_JOBS.IXCSOFT.PROCESS_INVOICE]: ixcsoftProcessChargeJob,
};

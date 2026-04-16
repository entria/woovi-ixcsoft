import { BULL_MQ_JOBS } from './bullMqJobs.ts';
import { ixcsoftPollOpenInvoicesJob } from './ixcsoftPollOpenInvoicesJob.ts';

export const jobs: Record<string, () => Promise<void>> = {
  [BULL_MQ_JOBS.IXCSOFT.CRON.POLL_OPEN_INVOICES]: ixcsoftPollOpenInvoicesJob,
};

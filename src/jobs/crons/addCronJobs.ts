import logger from '../../common/logger.ts';
import { scheduleIxcPollOpenInvoices } from './scheduleIxcPollOpenInvoices.ts';

export const addCronJobs = async (): Promise<void> => {
  logger.info('initializing cron jobs');
  await scheduleIxcPollOpenInvoices();
};

import { ApplicationModel } from '../application/ApplicationModel.ts';
import { APPLICATION_TYPE } from '../application/ApplicationType.ts';
import logger from '../common/logger.ts';
import { defaultJobOptions, ixcsoftQueue } from './queues.ts';
import { BULL_MQ_JOBS } from './bullMqJobs.ts';

/**
 * Orchestrator cron job.
 * Fetches all active IXCSOFT applications and enqueues one polling job per application.
 */
export const ixcsoftPollOpenInvoicesJob = async (_data: unknown): Promise<void> => {
  logger.info('ixcsoft poll open invoices cron started');

  const applications = await ApplicationModel.find({
    type: APPLICATION_TYPE.IXCSOFT,
    isActive: true,
    removedAt: null,
  }).lean();

  logger.info({ count: applications.length }, 'ixcsoft active applications found');

  for (const application of applications) {
    await ixcsoftQueue.add(
      BULL_MQ_JOBS.IXCSOFT.POLL_INVOICES_FOR_APPLICATION,
      { applicationId: application._id.toString() },
      defaultJobOptions,
    );
  }
};

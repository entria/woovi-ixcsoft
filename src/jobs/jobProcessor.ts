import type { Job } from 'bullmq';

import logger from '../common/logger.ts';

export const jobProcessor =
  (jobs: Record<string, (data: unknown) => Promise<void>>) =>
  async (job: Job): Promise<void> => {
    const jobHandler = jobs[job.name];

    if (!jobHandler) {
      logger.warn({ jobName: job.name }, 'unknown job name');
      return;
    }

    logger.info({ jobName: job.name, jobId: job.id }, 'job started');

    try {
      await jobHandler(job.data);
      logger.info({ jobName: job.name, jobId: job.id }, 'job completed');
    } catch (err) {
      logger.error({ error: err, jobName: job.name, jobId: job.id }, 'job failed');
      throw err;
    }
  };

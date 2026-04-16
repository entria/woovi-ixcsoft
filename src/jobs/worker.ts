import { Worker } from 'bullmq';
import Redis from 'ioredis';

import { config } from '../common/config.ts';
import { jobProcessor } from './jobProcessor.ts';
import { jobs } from './jobs.ts';
import logger from '../common/logger.ts';

const getDevPrefix = (): object => {
  if (process.env.BULL_DEV_PREFIX) {
    return { prefix: process.env.BULL_DEV_PREFIX };
  }
  return {};
};

export const initializeWorkers = (): void => {
  logger.info('initializing workers...');

  const connection = new Redis(config.REDIS_HOST, {
    maxRetriesPerRequest: null,
  });

  const worker = new Worker('IXCSOFT', jobProcessor(jobs), {
    connection,
    ...getDevPrefix(),
  });

  worker.on('failed', (job, err) => {
    logger.error({ jobId: job?.id, error: err }, 'job failed');
  });

  worker.on('completed', (job) => {
    logger.info({ jobId: job?.id, jobName: job?.name }, 'job completed');
  });

  worker.on('error', (err) => {
    logger.error({ error: err }, 'worker error');
  });
};

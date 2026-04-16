import { Queue } from 'bullmq';
import Redis from 'ioredis';

import { config } from '../common/config.ts';
import { APP_ENVIRONMENT_ENUM } from '../common/AppEnvironmentEnum.ts';

const isDev = config.APP_ENV === APP_ENVIRONMENT_ENUM.DEVELOPMENT;

export const defaultJobOptions = {
  removeOnComplete: !isDev,
  removeOnFail: 100,
  timeout: 1000 * 60 * 60, // 1 hour
};

const getDevPrefix = (): object => {
  if (process.env.BULL_DEV_PREFIX) {
    return { prefix: process.env.BULL_DEV_PREFIX };
  }
  return {};
};

const redisClient = new Redis(config.REDIS_HOST);

export const ixcsoftQueue = new Queue('IXCSOFT', {
  connection: redisClient,
  ...getDevPrefix(),
  defaultJobOptions,
});

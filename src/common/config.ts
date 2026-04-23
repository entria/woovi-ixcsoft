import dotenvSafe from 'dotenv-safe';
import path from 'path';

import { APP_ENVIRONMENT_ENUM } from './AppEnvironmentEnum.ts';

const cwd = process.cwd();

const getEnvFile = (): string => {
  if (process.env.ENV_FILE !== undefined) {
    return process.env.ENV_FILE;
  }
  return '.env';
};

const envFile = getEnvFile();

dotenvSafe.config({
  path: path.join(cwd, envFile),
  sample: path.join(cwd, '.env.example'),
  allowEmptyValues: true,
});

if (process.env.APP_ENV === APP_ENVIRONMENT_ENUM.DEVELOPMENT) {
  console.log('.env: ', path.join(cwd, envFile));
}

export const config = {
  APP_ENV: process.env.APP_ENV ?? 'development',
  PORT: process.env.PORT ?? '7777',
  REDIS_HOST: process.env.REDIS_HOST ?? 'redis://localhost:6379',
  MONGO_URI: process.env.MONGO_URI ?? 'mongodb://localhost:27017/woovi',

  // Woovi
  WOOVI_API_URL: process.env.WOOVI_API_URL ?? 'https://api.woovi.com.br',
  WOOVI_WEBHOOK_PUBLIC_KEY: process.env.WOOVI_WEBHOOK_PUBLIC_KEY
    ? Buffer.from(process.env.WOOVI_WEBHOOK_PUBLIC_KEY, 'base64').toString('utf8')
    : '',

  // Public URL (used when registering webhooks on Woovi)
  PUBLIC_BASE_URL: process.env.PUBLIC_BASE_URL ?? '',

  // Config
  POLL_INTERVAL_CRON: process.env.POLL_INTERVAL_CRON ?? '0 * * * *', // every hour

  ELASTIC_APM_SERVICE_NAME: process.env.ELASTIC_APM_SERVICE_NAME ?? 'service-ixcsoft',
};

export const config = {
  APP_ENV: process.env.APP_ENV ?? 'development',
  REDIS_HOST: process.env.REDIS_HOST ?? 'redis://localhost:6379',
  MONGO_URI: process.env.MONGO_URI ?? 'mongodb://localhost:27017/woovi',

  // Woovi
  WOOVI_API_URL: process.env.WOOVI_API_URL ?? 'https://api.woovi.com.br',
  WOOVI_WEBHOOK_PUBLIC_KEY: process.env.WOOVI_WEBHOOK_PUBLIC_KEY
    ? Buffer.from(process.env.WOOVI_WEBHOOK_PUBLIC_KEY, 'base64').toString('utf8')
    : '',

  // Public URL (used when registering webhooks on Woovi)
  PUBLIC_BASE_URL: process.env.PUBLIC_BASE_URL ?? '',

  // Pre-fills the home screen input so reconciliation links work without manual setup
  DEFAULT_WOOVI_APP_ID: process.env.DEFAULT_WOOVI_APP_ID ?? '',

  // Config
  POLL_INTERVAL_CRON: process.env.POLL_INTERVAL_CRON ?? '0 * * * *', // every hour

  ELASTIC_APM_SERVICE_NAME: process.env.ELASTIC_APM_SERVICE_NAME ?? 'service-ixcsoft',
};

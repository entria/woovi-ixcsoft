export const config = {
  APP_ENV: process.env.APP_ENV ?? 'development',
  PORT: process.env.PORT ?? '3000',
  REDIS_HOST: process.env.REDIS_HOST ?? 'redis://localhost:6379',

  // IXC Soft
  IXCSOFT_BASE_URL: process.env.IXCSOFT_BASE_URL ?? '',
  IXCSOFT_TOKEN: process.env.IXCSOFT_TOKEN ?? '', // format: "user_id:token"
  IXCSOFT_FILIAL_ID: process.env.IXCSOFT_FILIAL_ID ?? '1',
  IXCSOFT_CONTA_ID: process.env.IXCSOFT_CONTA_ID ?? '1',

  // Woovi
  WOOVI_APP_ID: process.env.WOOVI_APP_ID ?? '',
  WOOVI_API_URL: process.env.WOOVI_API_URL ?? 'https://api.woovi.com.br',

  // Config
  POLL_INTERVAL_CRON: process.env.POLL_INTERVAL_CRON ?? '0 * * * *', // every hour

  ELASTIC_APM_SERVICE_NAME: process.env.ELASTIC_APM_SERVICE_NAME ?? 'service-ixcsoft',
};

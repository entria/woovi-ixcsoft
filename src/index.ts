import { createServer } from 'http';

import { config } from './common/config.ts';
import logger from './common/logger.ts';
import { serviceApp } from './serviceApp.ts';
import { initializeWorkers } from './jobs/worker.ts';
import { addCronJobs } from './jobs/crons/addCronJobs.ts';

process.title = 'service-ixcsoft';

const PORT = config.PORT;

(async () => {
  logger.info(
    {
      APP_ENV: config.APP_ENV,
      PORT: config.PORT,
      REDIS_HOST: config.REDIS_HOST,
      IXCSOFT_BASE_URL: config.IXCSOFT_BASE_URL,
      WOOVI_API_URL: config.WOOVI_API_URL,
      POLL_INTERVAL_CRON: config.POLL_INTERVAL_CRON,
    },
    'starting service-ixcsoft',
  );

  const server = createServer(serviceApp.callback());

  initializeWorkers();
  await addCronJobs();

  server.listen(PORT, () => {
    logger.info(`server started on port :${PORT}`);
  });
})();

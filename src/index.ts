import { createServer } from 'http';

import { config } from './common/config.ts';
import logger from './common/logger.ts';
import { connectDatabase } from './database/connectDatabase.ts';
import { serviceApp } from './serviceApp.ts';
import { initializeWorkers } from './jobs/worker.ts';
import { scheduleIxcPollOpenInvoices } from './jobs/crons/scheduleIxcPollOpenInvoices.ts';

process.title = 'service-ixcsoft';

const PORT = config.PORT;

(async () => {
  logger.info(
    {
      APP_ENV: config.APP_ENV,
      PORT: config.PORT,
      REDIS_HOST: config.REDIS_HOST,
      MONGO_URI: config.MONGO_URI,
      WOOVI_API_URL: config.WOOVI_API_URL,
      PUBLIC_BASE_URL: config.PUBLIC_BASE_URL,
      POLL_INTERVAL_CRON: config.POLL_INTERVAL_CRON,
    },
    'starting service-ixcsoft',
  );

  await connectDatabase();

  const server = createServer(serviceApp.callback());

  initializeWorkers();
  await scheduleIxcPollOpenInvoices();

  server.listen(PORT, () => {
    logger.info(`server started on port :${PORT}`);
  });
})();

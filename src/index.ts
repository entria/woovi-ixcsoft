import { createServer } from 'http';

import { config } from './common/config.ts';
import logger from './common/logger.ts';
import { serviceApp } from './serviceApp.ts';
import { initializeWorkers } from './jobs/worker.ts';
import { addCronJobs } from './jobs/crons/addCronJobs.ts';

process.title = 'service-ixcsoft';

const PORT = config.PORT;

(async () => {
  logger.info({ APP_ENV: config.APP_ENV }, 'starting service-ixcsoft');

  const server = createServer(serviceApp.callback());

  initializeWorkers();
  await addCronJobs();

  server.listen(PORT, () => {
    logger.info(`server started on port :${PORT}`);
  });
})();

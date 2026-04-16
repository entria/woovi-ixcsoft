import pino from 'pino';
import 'pino-pretty';

import { config } from './config.ts';
import { APP_ENVIRONMENT_ENUM } from './AppEnvironmentEnum.ts';

const isDevelopment = config.APP_ENV === APP_ENVIRONMENT_ENUM.DEVELOPMENT;

const loggerConfig: pino.LoggerOptions = {
  level: 'info',
  base: {
    service: config.ELASTIC_APM_SERVICE_NAME,
    environment: config.APP_ENV,
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (label) => ({ level: label }),
  },
  serializers: {
    error: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
  },
};

if (isDevelopment) {
  loggerConfig.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  };
}

const logger = pino(loggerConfig);

export { logger };
export default logger;

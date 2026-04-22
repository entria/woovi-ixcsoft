import mongoose from 'mongoose';

import { config } from '../common/config.ts';
import logger from '../common/logger.ts';

export const connectDatabase = async (): Promise<void> => {
  logger.info({ uri: config.MONGO_URI }, 'connecting to database...');
  await mongoose.connect(config.MONGO_URI);
  logger.info('database connected');
};

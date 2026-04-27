import logger from './common/logger.ts';
import type { HandlerResult } from './application/registerApplicationHandler.ts';

export const getStatus = async (): Promise<HandlerResult> => {
  try {
    return {
      status: 200,
      body: {
        message: 'service-ixcsoft working',
        version: process.env.npm_package_version ?? '0.1.0',
        commitSha: process.env.COMMIT_SHA,
        buildTimestamp: process.env.BUILD_TIMESTAMP,
      },
    };
  } catch (err) {
    logger.error({ error: err }, 'status check error');
    return { status: 400, body: String(err) };
  }
};

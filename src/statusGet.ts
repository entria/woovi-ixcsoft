import type { Context } from 'koa';

import logger from './common/logger.ts';

export const statusGet = async (ctx: Context): Promise<void> => {
  try {
    ctx.body = {
      message: 'service-ixcsoft working',
      version: process.env.npm_package_version ?? '0.1.0',
      commitSha: process.env.COMMIT_SHA,
      buildTimestamp: process.env.BUILD_TIMESTAMP,
    };
    ctx.status = 200;
  } catch (err) {
    logger.error({ error: err }, 'status check error');
    ctx.body = String(err);
    ctx.status = 400;
  }
};

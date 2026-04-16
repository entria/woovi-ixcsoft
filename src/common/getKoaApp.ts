import cors from '@koa/cors';
import type Router from '@koa/router';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import logger from './logger.ts';

export const getKoaApp = (...args: Router[]): Koa => {
  const app = new Koa({ proxy: true });

  app.use(
    bodyParser({
      onerror(err, ctx) {
        ctx.throw(err, 422);
      },
    }),
  );

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;

    if (ctx.url.startsWith('/status') && ctx.status < 500) {
      return;
    }

    logger.info({
      message: 'HTTP request',
      method: ctx.method,
      url: ctx.url,
      status: ctx.status,
      responseTime: ms,
      ip: ctx.ip,
    });
  });

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      logger.error({ error: err }, 'koa error');
      ctx.status = (err as { status?: number }).status ?? 500;
      ctx.body = { error: (err as Error).message };
    }
  });

  app.use(cors({ maxAge: 86400 }));

  for (const router of args) {
    app.use(router.routes()).use(router.allowedMethods());
  }

  return app;
};

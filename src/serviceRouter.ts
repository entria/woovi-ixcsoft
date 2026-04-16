import Router from '@koa/router';

import { statusGet } from './statusGet.ts';
import { wooviWebhookHandler } from './webhook/wooviWebhookHandler.ts';

export const serviceRouter = new Router();

serviceRouter.get('/status', statusGet);

serviceRouter.post('/service-ixcsoft/v1/webhooks/woovi/charge/completed', wooviWebhookHandler);

import Router from '@koa/router';

import { statusGet } from './statusGet.ts';
import { chargeCompletedHandler } from './charges/chargeCompletedHandler.ts';
import { registerApplicationHandler } from './application/registerApplicationHandler.ts';

export const serviceRouter = new Router();

serviceRouter.get('/status', statusGet);

serviceRouter.post('/service-ixcsoft/v1/applications', registerApplicationHandler);
serviceRouter.post('/service-ixcsoft/v1/webhooks/charges/completed/:applicationId', chargeCompletedHandler);

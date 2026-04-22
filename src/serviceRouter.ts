import Router from '@koa/router';

import { statusGet } from './statusGet.ts';
import { chargeCompletedHandler } from './charges/chargeCompletedHandler.ts';

export const serviceRouter = new Router();

serviceRouter.get('/status', statusGet);

serviceRouter.post('/service-ixcsoft/v1/charges/completed', chargeCompletedHandler);

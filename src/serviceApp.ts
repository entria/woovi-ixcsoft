import { getKoaApp } from './common/getKoaApp.ts';
import { serviceRouter } from './serviceRouter.ts';

export const serviceApp = getKoaApp(serviceRouter);

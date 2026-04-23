import type { Context } from 'koa';

import { ixcsoftQueue, defaultJobOptions } from '../jobs/queues.ts';
import { BULL_MQ_JOBS } from '../jobs/bullMqJobs.ts';
import type { ProcessChargeJobData } from '../jobs/ixcsoftProcessChargeJob.ts';
import logger from '../common/logger.ts';

export const chargeCompletedHandler = async (ctx: Context): Promise<void> => {
  const { applicationId } = ctx.params as { applicationId: string };
  const { correlationID, value, paidAt } = (ctx.request.body ?? {}) as Omit<
    ProcessChargeJobData,
    'applicationId'
  >;

  if (!applicationId) {
    ctx.status = 400;
    ctx.body = { error: 'missing applicationId' };
    return;
  }

  if (!correlationID) {
    ctx.status = 400;
    ctx.body = { error: 'missing correlationID' };
    return;
  }

  await ixcsoftQueue.add(
    BULL_MQ_JOBS.IXCSOFT.PROCESS_INVOICE,
    { applicationId, correlationID, value, paidAt } satisfies ProcessChargeJobData,
    defaultJobOptions,
  );

  logger.info({ applicationId, correlationID }, 'charge completed: job enqueued');

  ctx.status = 200;
  ctx.body = { ok: true };
};

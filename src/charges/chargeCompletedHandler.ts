import type { Context } from 'koa';

import { ixcsoftQueue, defaultJobOptions } from '../jobs/queues.ts';
import { BULL_MQ_JOBS } from '../jobs/bullMqJobs.ts';
import type { ProcessChargeJobData } from '../jobs/ixcsoftProcessChargeJob.ts';
import { verifyWooviWebhookSignature } from '../woovi/verifyWooviWebhookSignature.ts';
import logger from '../common/logger.ts';

type WebhookBody = Partial<Omit<ProcessChargeJobData, 'applicationId'>> & {
  evento?: string;
};

export const chargeCompletedHandler = async (ctx: Context): Promise<void> => {
  const { applicationId } = ctx.params as { applicationId: string };
  const signature = ctx.get('x-webhook-signature');
  const rawBody = (ctx.request as unknown as { rawBody?: string }).rawBody ?? '';

  const valid = verifyWooviWebhookSignature({
    rawBody,
    signatureBase64: signature,
  });

  if (!valid) {
    logger.warn({ applicationId }, 'charge completed: invalid signature');
    ctx.status = 401;
    ctx.body = { error: 'invalid signature' };
    return;
  }

  const body = (ctx.request.body ?? {}) as WebhookBody;

  // Woovi sends a signed test ping when registering the webhook.
  // Must return 200 so the webhook gets registered.
  if (body.evento === 'teste_webhook') {
    logger.info({ applicationId }, 'charge completed: received woovi test ping');
    ctx.status = 200;
    ctx.body = { ok: true };
    return;
  }

  if (!applicationId) {
    ctx.status = 400;
    ctx.body = { error: 'missing applicationId' };
    return;
  }

  const { correlationID, value, paidAt } = body;

  if (!correlationID) {
    ctx.status = 400;
    ctx.body = { error: 'missing correlationID' };
    return;
  }

  if (typeof value !== 'number') {
    ctx.status = 400;
    ctx.body = { error: 'missing value' };
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

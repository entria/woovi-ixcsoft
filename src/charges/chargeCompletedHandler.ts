import { ixcsoftQueue, defaultJobOptions } from '../jobs/queues.ts';
import { BULL_MQ_JOBS } from '../jobs/bullMqJobs.ts';
import type { ProcessChargeJobData } from '../jobs/ixcsoftProcessChargeJob.ts';
import { verifyWooviWebhookSignature } from '../woovi/verifyWooviWebhookSignature.ts';
import logger from '../common/logger.ts';
import type { HandlerResult } from '../application/registerApplicationHandler.ts';

type WebhookBody = Partial<Omit<ProcessChargeJobData, 'applicationId'>> & {
  evento?: string;
};

type ProcessChargeWebhookInput = {
  applicationId: string;
  signature: string | undefined;
  rawBody: string;
};

export const processChargeWebhook = async (
  input: ProcessChargeWebhookInput,
): Promise<HandlerResult> => {
  const { applicationId, signature, rawBody } = input;

  const valid = verifyWooviWebhookSignature({
    rawBody,
    signatureBase64: signature,
  });

  if (!valid) {
    logger.warn({ applicationId }, 'charge completed: invalid signature');
    return { status: 401, body: { error: 'invalid signature' } };
  }

  let body: WebhookBody;
  try {
    body = (rawBody ? JSON.parse(rawBody) : {}) as WebhookBody;
  } catch {
    return { status: 400, body: { error: 'invalid json body' } };
  }

  // Woovi sends a signed test ping when registering the webhook.
  // Must return 200 so the webhook gets registered.
  if (body.evento === 'teste_webhook') {
    logger.info({ applicationId }, 'charge completed: received woovi test ping');
    return { status: 200, body: { ok: true } };
  }

  if (!applicationId) {
    return { status: 400, body: { error: 'missing applicationId' } };
  }

  const { correlationID, value, paidAt } = body;

  if (!correlationID) {
    return { status: 400, body: { error: 'missing correlationID' } };
  }

  if (typeof value !== 'number') {
    return { status: 400, body: { error: 'missing value' } };
  }

  await ixcsoftQueue.add(
    BULL_MQ_JOBS.IXCSOFT.PROCESS_INVOICE,
    { applicationId, correlationID, value, paidAt } satisfies ProcessChargeJobData,
    defaultJobOptions,
  );

  logger.info({ applicationId, correlationID }, 'charge completed: job enqueued');

  return { status: 200, body: { ok: true } };
};

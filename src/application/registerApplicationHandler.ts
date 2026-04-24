import type { Context } from 'koa';
import { Types } from 'mongoose';

import { ApplicationModel, type IxcsoftConfig } from './ApplicationModel.ts';
import { APPLICATION_TYPE } from './ApplicationType.ts';
import { config } from '../common/config.ts';
import logger from '../common/logger.ts';
import { ixcsoftPing } from '../ixcsoft/ixcsoftPing.ts';
import {
  WOOVI_WEBHOOK_EVENT,
  wooviCreateWebhook,
} from '../woovi/wooviCreateWebhook.ts';

type RegisterApplicationBody = {
  wooviAppId?: string;
  ixcsoft?: Partial<IxcsoftConfig>;
};

const validateBody = (body: RegisterApplicationBody): string | null => {
  if (!body.wooviAppId) return 'missing wooviAppId';
  if (!body.ixcsoft) return 'missing ixcsoft';
  if (!body.ixcsoft.baseUrl) return 'missing ixcsoft.baseUrl';
  if (!body.ixcsoft.token) return 'missing ixcsoft.token';
  return null;
};

const validateBaseUrlFormat = (raw: string): string | null => {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return 'ixcsoft.baseUrl is not a valid URL';
  }
  if (url.protocol !== 'https:') return 'ixcsoft.baseUrl must use https';
  if (!url.pathname.includes('/webservice/v1')) {
    return 'ixcsoft.baseUrl must include /webservice/v1';
  }
  return null;
};

export const registerApplicationHandler = async (ctx: Context): Promise<void> => {
  const body = (ctx.request.body ?? {}) as RegisterApplicationBody;

  const validationError = validateBody(body);
  if (validationError) {
    ctx.status = 400;
    ctx.body = { error: validationError };
    return;
  }

  const baseUrlError = validateBaseUrlFormat(body.ixcsoft!.baseUrl!);
  if (baseUrlError) {
    ctx.status = 400;
    ctx.body = { error: baseUrlError };
    return;
  }

  if (!config.PUBLIC_BASE_URL) {
    logger.error('PUBLIC_BASE_URL is not configured');
    ctx.status = 500;
    ctx.body = { error: 'server misconfigured: PUBLIC_BASE_URL missing' };
    return;
  }

  const wooviAppId = body.wooviAppId as string;
  const ixcsoft = body.ixcsoft as IxcsoftConfig;

  const existing = await ApplicationModel.findOne({ wooviAppId });
  if (existing) {
    ctx.status = 409;
    ctx.body = { error: 'application already registered', applicationId: existing._id.toString() };
    return;
  }

  const ping = await ixcsoftPing(ixcsoft);
  if (!ping.ok) {
    logger.warn({ baseUrl: ixcsoft.baseUrl, error: ping.error }, 'ixcsoft ping failed');
    ctx.status = 400;
    ctx.body = { error: `ixcsoft validation failed: ${ping.error}` };
    return;
  }

  const applicationObjectId = new Types.ObjectId();
  const applicationId = applicationObjectId.toString();

  const webhookUrl = `${config.PUBLIC_BASE_URL.replace(/\/$/, '')}/service-ixcsoft/v1/webhooks/charges/completed/${applicationId}`;

  const webhook = await wooviCreateWebhook({
    appId: wooviAppId,
    name: 'service-ixcsoft charge completed',
    event: WOOVI_WEBHOOK_EVENT.CHARGE_COMPLETED,
    url: webhookUrl,
  });

  await ApplicationModel.create({
    _id: applicationObjectId,
    type: APPLICATION_TYPE.IXCSOFT,
    isActive: true,
    wooviAppId,
    ixcsoft,
  });

  logger.info(
    { applicationId, webhookId: webhook.id },
    'application registered',
  );

  ctx.status = 201;
  ctx.body = {
    applicationId,
    webhookId: webhook.id,
  };
};

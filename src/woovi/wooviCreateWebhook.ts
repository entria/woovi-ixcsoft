import { wooviRequest } from './wooviClient.ts';
import logger from '../common/logger.ts';

export const WOOVI_WEBHOOK_EVENT = {
  CHARGE_COMPLETED: 'OPENPIX:CHARGE_COMPLETED',
} as const;

export type WooviWebhookEventName =
  (typeof WOOVI_WEBHOOK_EVENT)[keyof typeof WOOVI_WEBHOOK_EVENT];

type WooviWebhookResource = {
  id: string;
  name: string;
  event: WooviWebhookEventName;
  url: string;
  authorization?: string;
  isActive: boolean;
};

type WooviCreateWebhookOptions = {
  appId: string;
  name: string;
  event: WooviWebhookEventName;
  url: string;
};

export const wooviCreateWebhook = async (
  options: WooviCreateWebhookOptions,
): Promise<WooviWebhookResource> => {
  const { appId, name, event, url } = options;

  logger.info({ name, event, url }, 'woovi creating webhook');

  const response = await wooviRequest<{ webhook: WooviWebhookResource }>({
    method: 'POST',
    path: '/webhook/',
    appId,
    body: {
      webhook: {
        name,
        event,
        url,
        isActive: true,
      },
    },
  });

  logger.info({ webhookId: response.webhook.id, event }, 'woovi webhook created');

  return response.webhook;
};

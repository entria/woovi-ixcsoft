import { fetch } from 'undici';

import { config } from '../common/config.ts';
import logger from '../common/logger.ts';

type WooviRequestOptions = {
  method: 'GET' | 'POST' | 'DELETE';
  path: string;
  body?: unknown;
};

export const wooviRequest = async <T>(options: WooviRequestOptions): Promise<T> => {
  const { method, path, body } = options;

  const url = `${config.WOOVI_API_URL}/api/v1${path}`;

  logger.info({ method, path }, 'woovi request');

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: config.WOOVI_APP_ID,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as T;

  if (!response.ok) {
    logger.error({ status: response.status, data, path }, 'woovi request failed');
    throw new Error(`Woovi request failed: ${response.status}`);
  }

  return data;
};

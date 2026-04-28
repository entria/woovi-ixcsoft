import { fetch } from 'undici';

import { config } from '../common/config.ts';
import logger from '../common/logger.ts';

type WooviRequestOptions = {
  method: 'GET' | 'POST' | 'DELETE';
  path: string;
  appId: string;
  body?: unknown;
};

export class WooviRequestError extends Error {
  readonly status: number;
  readonly body: string;

  constructor(status: number, body: string) {
    super(`Woovi request failed: ${status}`);
    this.name = 'WooviRequestError';
    this.status = status;
    this.body = body;
  }
}

export const wooviRequest = async <T>(options: WooviRequestOptions): Promise<T> => {
  const { method, path, appId, body } = options;

  const url = `${config.WOOVI_API_URL}/api/v1${path}`;

  logger.info({ method, path }, 'woovi request');

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: appId,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();

  if (!response.ok) {
    logger.error(
      { status: response.status, body: text.slice(0, 500), path },
      'woovi request failed',
    );
    throw new WooviRequestError(response.status, text);
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    logger.error({ path, body: text.slice(0, 500) }, 'woovi response was not JSON');
    throw new Error('Woovi response was not JSON');
  }
};

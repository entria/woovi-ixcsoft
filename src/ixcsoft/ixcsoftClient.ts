import { fetch } from 'undici';

import { config } from '../common/config.ts';
import logger from '../common/logger.ts';

const getAuthHeader = (): string => {
  const encoded = Buffer.from(config.IXCSOFT_TOKEN).toString('base64');
  return `Basic ${encoded}`;
};

type IxcsoftRequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  body?: unknown;
  header?: 'listar' | 'Provedor';
};

export const ixcsoftRequest = async <T>(options: IxcsoftRequestOptions): Promise<T> => {
  const { method, path, body, header = method === 'GET' ? 'listar' : 'Provedor' } = options;

  const url = `${config.IXCSOFT_BASE_URL}${path}`;

  logger.info({ method, path }, 'ixcsoft request');

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: getAuthHeader(),
      ixcsoft: header,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as T;

  if (!response.ok) {
    logger.error({ status: response.status, data, path }, 'ixcsoft request failed');
    throw new Error(`IXC Soft request failed: ${response.status}`);
  }

  return data;
};

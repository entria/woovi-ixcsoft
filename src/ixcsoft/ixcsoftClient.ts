import { fetch } from 'undici';

import type { IxcsoftCredentials } from '../application/getApplicationIxcsoftCredentials.ts';
import logger from '../common/logger.ts';

type IxcsoftRequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  body?: unknown;
  header?: 'listar' | 'Provedor';
  credentials: IxcsoftCredentials;
};

export const ixcsoftRequest = async <T>(options: IxcsoftRequestOptions): Promise<T> => {
  const { method, path, body, header = method === 'GET' ? 'listar' : 'Provedor', credentials } = options;

  const encoded = Buffer.from(credentials.token).toString('base64');
  const url = `${credentials.baseUrl}${path}`;

  logger.info({ method, path }, 'ixcsoft request');

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Basic ${encoded}`,
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

import { request } from 'undici';

import type { IxcsoftConfig } from '../application/ApplicationModel.ts';
import logger from '../common/logger.ts';

type IxcsoftRequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  body?: unknown;
  header?: 'listar' | 'Provedor';
  credentials: IxcsoftConfig;
};

// IXC Soft expects a JSON body even on GET (filters via qtype/grid_param).
// Standards-compliant fetch rejects bodies on GET — use undici's lower-level
// request() which permits it.
export const ixcsoftRequest = async <T>(options: IxcsoftRequestOptions): Promise<T> => {
  const { method, path, body, header = method === 'GET' ? 'listar' : 'Provedor', credentials } = options;

  const encoded = Buffer.from(credentials.token).toString('base64');
  const url = `${credentials.baseUrl}${path}`;

  logger.info({ method, path }, 'ixcsoft request');

  const response = await request(url, {
    method,
    headers: {
      Authorization: `Basic ${encoded}`,
      ixcsoft: header,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.body.text();

  if (response.statusCode >= 400) {
    logger.error(
      { status: response.statusCode, body: text.slice(0, 500), path },
      'ixcsoft request failed',
    );
    throw new Error(`IXC Soft request failed: ${response.statusCode}`);
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    logger.error({ path, body: text.slice(0, 500) }, 'ixcsoft response was not JSON');
    throw new Error('IXC Soft response was not JSON');
  }
};

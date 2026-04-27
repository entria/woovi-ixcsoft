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

export class IxcsoftRequestError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: string,
    detail: string,
  ) {
    super(`IXC Soft request failed: ${detail}`);
    this.name = 'IxcsoftRequestError';
  }
}

const looksLikeHtml = (text: string): boolean => text.trimStart().startsWith('<');

// IXC sometimes returns HTML with HTTP 200 on validation failures
// (e.g. `<div ...>Ocorreu um erro ao processar...</div>`). Pull plain text out
// so the thrown error carries IXC's actual message instead of "not JSON".
export const extractHtmlMessage = (html: string): string =>
  html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

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
    throw new IxcsoftRequestError(response.statusCode, text, `HTTP ${response.statusCode}`);
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    if (looksLikeHtml(text)) {
      const message = extractHtmlMessage(text).slice(0, 300) || 'unknown HTML error';
      logger.error({ path, message, body: text.slice(0, 500) }, 'ixcsoft returned HTML error');
      throw new IxcsoftRequestError(response.statusCode, text, message);
    }
    logger.error({ path, body: text.slice(0, 500) }, 'ixcsoft response was not JSON');
    throw new IxcsoftRequestError(response.statusCode, text, 'response was not JSON');
  }
};

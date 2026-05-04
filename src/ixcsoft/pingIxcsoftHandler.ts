import type { IxcsoftConfig } from '../application/ApplicationModel.ts';
import logger from '../common/logger.ts';
import { ixcsoftPing } from './ixcsoftPing.ts';

type PingIxcsoftBody = Partial<IxcsoftConfig>;

export type HandlerResult = {
  status: number;
  body: unknown;
};

const validateBody = (body: PingIxcsoftBody): string | null => {
  if (!body.baseUrl) return 'missing baseUrl';
  if (!body.token) return 'missing token';
  return null;
};

const validateBaseUrlFormat = (raw: string): string | null => {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return 'baseUrl is not a valid URL';
  }
  if (url.protocol !== 'https:') return 'baseUrl must use https';
  if (!url.pathname.includes('/webservice/v1')) {
    return 'baseUrl must include /webservice/v1';
  }
  return null;
};

export const pingIxcsoftHandler = async (input: { body: unknown }): Promise<HandlerResult> => {
  const body = (input.body ?? {}) as PingIxcsoftBody;

  const validationError = validateBody(body);
  if (validationError) {
    return { status: 400, body: { ok: false, error: validationError } };
  }

  const baseUrlError = validateBaseUrlFormat(body.baseUrl!);
  if (baseUrlError) {
    return { status: 400, body: { ok: false, error: baseUrlError } };
  }

  const credentials: IxcsoftConfig = {
    baseUrl: body.baseUrl!,
    token: body.token!,
  };

  const result = await ixcsoftPing(credentials);
  if (!result.ok) {
    logger.warn({ baseUrl: credentials.baseUrl, error: result.error }, 'ixcsoft ping failed');
    return { status: 400, body: { ok: false, error: result.error } };
  }

  return { status: 200, body: { ok: true } };
};

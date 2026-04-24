import type { Context } from 'koa';
import { beforeEach, expect, it, vi } from 'vitest';

vi.mock('../ApplicationModel.ts', () => ({
  ApplicationModel: {
    findOne: vi.fn(),
    create: vi.fn(),
  },
}));

vi.mock('../../woovi/wooviCreateWebhook.ts', () => ({
  WOOVI_WEBHOOK_EVENT: { CHARGE_COMPLETED: 'OPENPIX:CHARGE_COMPLETED' },
  wooviCreateWebhook: vi.fn(),
}));

vi.mock('../../ixcsoft/ixcsoftPing.ts', () => ({
  ixcsoftPing: vi.fn(),
}));

vi.mock('../../common/config.ts', () => ({
  config: { PUBLIC_BASE_URL: 'https://public.example.com' },
}));

vi.mock('../../common/logger.ts', () => {
  const stub = { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() };
  return { default: stub, logger: stub };
});

import { ApplicationModel } from '../ApplicationModel.ts';
import { config } from '../../common/config.ts';
import { ixcsoftPing } from '../../ixcsoft/ixcsoftPing.ts';
import { wooviCreateWebhook } from '../../woovi/wooviCreateWebhook.ts';
import { registerApplicationHandler } from '../registerApplicationHandler.ts';

type MockCtx = {
  request: { body?: unknown };
  status?: number;
  body?: unknown;
};

const runHandler = async (body?: unknown): Promise<MockCtx> => {
  const ctx: MockCtx = { request: { body } };
  await registerApplicationHandler(ctx as unknown as Context);
  return ctx;
};

const validBody = () => ({
  wooviAppId: 'app_123',
  ixcsoft: {
    baseUrl: 'https://ixc.example.com/webservice/v1',
    token: 'tok_abc',
  },
});

const findOneMock = ApplicationModel.findOne as unknown as ReturnType<typeof vi.fn>;
const createMock = ApplicationModel.create as unknown as ReturnType<typeof vi.fn>;
const webhookMock = wooviCreateWebhook as unknown as ReturnType<typeof vi.fn>;
const pingMock = ixcsoftPing as unknown as ReturnType<typeof vi.fn>;

beforeEach(() => {
  vi.clearAllMocks();
  findOneMock.mockResolvedValue(null);
  createMock.mockResolvedValue(undefined);
  pingMock.mockResolvedValue({ ok: true });
  webhookMock.mockResolvedValue({
    id: 'wh_1',
    name: 'service-ixcsoft charge completed',
    event: 'OPENPIX:CHARGE_COMPLETED',
    url: 'https://irrelevant',
    isActive: true,
  });
  config.PUBLIC_BASE_URL = 'https://public.example.com';
});

it('POST /service-ixcsoft/v1/applications returns 400 when request body is undefined', async () => {
  const ctx = await runHandler(undefined);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing wooviAppId' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when request body is null', async () => {
  const ctx = await runHandler(null);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing wooviAppId' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when body is an empty object', async () => {
  const ctx = await runHandler({});
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing wooviAppId' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when wooviAppId is an empty string', async () => {
  const ctx = await runHandler({ ...validBody(), wooviAppId: '' });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing wooviAppId' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when ixcsoft block is missing', async () => {
  const ctx = await runHandler({ wooviAppId: 'app_1' });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing ixcsoft' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when ixcsoft.baseUrl is missing', async () => {
  const body = validBody();
  body.ixcsoft.baseUrl = '';
  const ctx = await runHandler(body);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing ixcsoft.baseUrl' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when ixcsoft.token is missing', async () => {
  const body = validBody();
  body.ixcsoft.token = '';
  const ctx = await runHandler(body);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'missing ixcsoft.token' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when baseUrl is not a valid URL', async () => {
  const body = validBody();
  body.ixcsoft.baseUrl = 'ixc.example.com';
  const ctx = await runHandler(body);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'ixcsoft.baseUrl is not a valid URL' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when baseUrl uses http instead of https', async () => {
  const body = validBody();
  body.ixcsoft.baseUrl = 'http://ixc.example.com/webservice/v1';
  const ctx = await runHandler(body);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'ixcsoft.baseUrl must use https' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when baseUrl does not include /webservice/v1', async () => {
  const body = validBody();
  body.ixcsoft.baseUrl = 'https://ixc.example.com';
  const ctx = await runHandler(body);
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'ixcsoft.baseUrl must include /webservice/v1' });
});

it('POST /service-ixcsoft/v1/applications returns 400 when ixcsoftPing fails (unreachable, bad token, IP blocked)', async () => {
  pingMock.mockResolvedValue({ ok: false, error: 'IXC Soft request failed: 401' });
  const ctx = await runHandler(validBody());
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ error: 'ixcsoft validation failed: IXC Soft request failed: 401' });
  expect(webhookMock).not.toHaveBeenCalled();
  expect(createMock).not.toHaveBeenCalled();
});

it('POST /service-ixcsoft/v1/applications short-circuits before touching DB or Woovi when validation fails', async () => {
  await runHandler({});
  expect(findOneMock).not.toHaveBeenCalled();
  expect(pingMock).not.toHaveBeenCalled();
  expect(webhookMock).not.toHaveBeenCalled();
  expect(createMock).not.toHaveBeenCalled();
});

it('POST /service-ixcsoft/v1/applications returns 500 when PUBLIC_BASE_URL is empty', async () => {
  config.PUBLIC_BASE_URL = '';
  const ctx = await runHandler(validBody());
  expect(ctx.status).toBe(500);
  expect(ctx.body).toEqual({
    error: 'server misconfigured: PUBLIC_BASE_URL missing',
  });
  expect(findOneMock).not.toHaveBeenCalled();
  expect(webhookMock).not.toHaveBeenCalled();
  expect(createMock).not.toHaveBeenCalled();
});

it('POST /service-ixcsoft/v1/applications returns 409 when wooviAppId is already registered', async () => {
  findOneMock.mockResolvedValue({
    _id: { toString: () => '60f000000000000000000001' },
  });
  const ctx = await runHandler(validBody());
  expect(ctx.status).toBe(409);
  expect(ctx.body).toEqual({
    error: 'application already registered',
    applicationId: '60f000000000000000000001',
  });
  expect(findOneMock).toHaveBeenCalledWith({ wooviAppId: 'app_123' });
  expect(pingMock).not.toHaveBeenCalled();
  expect(webhookMock).not.toHaveBeenCalled();
  expect(createMock).not.toHaveBeenCalled();
});

it('POST /service-ixcsoft/v1/applications creates the application and registers the webhook with 201', async () => {
  const ctx = await runHandler(validBody());

  expect(ctx.status).toBe(201);
  const resBody = ctx.body as { applicationId: string; webhookId: string };
  expect(resBody.webhookId).toBe('wh_1');
  expect(resBody.applicationId).toMatch(/^[a-f0-9]{24}$/);

  expect(findOneMock).toHaveBeenCalledWith({ wooviAppId: 'app_123' });
  expect(pingMock).toHaveBeenCalledWith({
    baseUrl: 'https://ixc.example.com/webservice/v1',
    token: 'tok_abc',
  });
  expect(webhookMock).toHaveBeenCalledTimes(1);
  expect(createMock).toHaveBeenCalledTimes(1);
});

it('POST /service-ixcsoft/v1/applications composes the webhook URL with the generated applicationId when PUBLIC_BASE_URL has no trailing slash', async () => {
  config.PUBLIC_BASE_URL = 'https://public.example.com';
  const ctx = await runHandler(validBody());
  const resBody = ctx.body as { applicationId: string };

  expect(webhookMock).toHaveBeenCalledWith({
    appId: 'app_123',
    name: 'service-ixcsoft charge completed',
    event: 'OPENPIX:CHARGE_COMPLETED',
    url: `https://public.example.com/service-ixcsoft/v1/webhooks/charges/completed/${resBody.applicationId}`,
  });
});

it('POST /service-ixcsoft/v1/applications strips a single trailing slash from PUBLIC_BASE_URL before composing the webhook URL', async () => {
  config.PUBLIC_BASE_URL = 'https://public.example.com/';
  const ctx = await runHandler(validBody());
  const resBody = ctx.body as { applicationId: string };

  const [callArg] = webhookMock.mock.calls[0] as [{ url: string }];
  expect(callArg.url).toBe(
    `https://public.example.com/service-ixcsoft/v1/webhooks/charges/completed/${resBody.applicationId}`,
  );
  expect(callArg.url).not.toContain('.com//');
});

it('POST /service-ixcsoft/v1/applications persists IXCSoft config, marks the app active and reuses the generated _id', async () => {
  const ctx = await runHandler(validBody());
  const resBody = ctx.body as { applicationId: string };

  expect(createMock).toHaveBeenCalledTimes(1);
  const createArg = createMock.mock.calls[0][0] as {
    _id: { toString: () => string };
    type: string;
    isActive: boolean;
    wooviAppId: string;
    ixcsoft: Record<string, string>;
  };

  expect(createArg.type).toBe('IXCSOFT');
  expect(createArg.isActive).toBe(true);
  expect(createArg.wooviAppId).toBe('app_123');
  expect(createArg.ixcsoft).toEqual({
    baseUrl: 'https://ixc.example.com/webservice/v1',
    token: 'tok_abc',
  });
  expect(createArg._id.toString()).toBe(resBody.applicationId);
});

it('POST /service-ixcsoft/v1/applications does not persist the application when wooviCreateWebhook rejects', async () => {
  webhookMock.mockRejectedValue(new Error('woovi down'));
  await expect(runHandler(validBody())).rejects.toThrow('woovi down');
  expect(createMock).not.toHaveBeenCalled();
});

it('POST /service-ixcsoft/v1/applications propagates database errors from ApplicationModel.create', async () => {
  createMock.mockRejectedValue(new Error('mongo down'));
  await expect(runHandler(validBody())).rejects.toThrow('mongo down');
  expect(webhookMock).toHaveBeenCalledTimes(1);
});

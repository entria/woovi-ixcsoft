import { beforeEach, expect, it, vi } from 'vitest';

vi.mock('../ixcsoftPing.ts', () => ({
  ixcsoftPing: vi.fn(),
}));

vi.mock('../../common/logger.ts', () => {
  const stub = { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() };
  return { default: stub, logger: stub };
});

import { ixcsoftPing } from '../ixcsoftPing.ts';
import { pingIxcsoftHandler } from '../pingIxcsoftHandler.ts';

const pingMock = ixcsoftPing as unknown as ReturnType<typeof vi.fn>;

const validBody = () => ({
  baseUrl: 'https://ixc.example.com/webservice/v1',
  token: 'user:tok_abc',
});

beforeEach(() => {
  vi.clearAllMocks();
  pingMock.mockResolvedValue({ ok: true });
});

it('POST /api/v1/ixcsoft/ping returns 400 when body is undefined', async () => {
  const ctx = await pingIxcsoftHandler({ body: undefined });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'missing baseUrl' });
  expect(pingMock).not.toHaveBeenCalled();
});

it('POST /api/v1/ixcsoft/ping returns 400 when body is null', async () => {
  const ctx = await pingIxcsoftHandler({ body: null });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'missing baseUrl' });
});

it('POST /api/v1/ixcsoft/ping returns 400 when baseUrl is empty', async () => {
  const ctx = await pingIxcsoftHandler({ body: { ...validBody(), baseUrl: '' } });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'missing baseUrl' });
});

it('POST /api/v1/ixcsoft/ping returns 400 when token is empty', async () => {
  const ctx = await pingIxcsoftHandler({ body: { ...validBody(), token: '' } });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'missing token' });
});

it('POST /api/v1/ixcsoft/ping returns 400 when baseUrl is not a valid URL', async () => {
  const ctx = await pingIxcsoftHandler({ body: { ...validBody(), baseUrl: 'ixc.example.com' } });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'baseUrl is not a valid URL' });
});

it('POST /api/v1/ixcsoft/ping returns 400 when baseUrl uses http instead of https', async () => {
  const ctx = await pingIxcsoftHandler({
    body: { ...validBody(), baseUrl: 'http://ixc.example.com/webservice/v1' },
  });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'baseUrl must use https' });
});

it('POST /api/v1/ixcsoft/ping returns 400 when baseUrl is missing /webservice/v1', async () => {
  const ctx = await pingIxcsoftHandler({
    body: { ...validBody(), baseUrl: 'https://ixc.example.com' },
  });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({ ok: false, error: 'baseUrl must include /webservice/v1' });
});

it('POST /api/v1/ixcsoft/ping short-circuits before pinging when validation fails', async () => {
  await pingIxcsoftHandler({ body: {} });
  expect(pingMock).not.toHaveBeenCalled();
});

it('POST /api/v1/ixcsoft/ping forwards baseUrl and token to ixcsoftPing', async () => {
  await pingIxcsoftHandler({ body: validBody() });
  expect(pingMock).toHaveBeenCalledTimes(1);
  expect(pingMock).toHaveBeenCalledWith({
    baseUrl: 'https://ixc.example.com/webservice/v1',
    token: 'user:tok_abc',
  });
});

it('POST /api/v1/ixcsoft/ping returns 200 with ok:true on success and no extra fields', async () => {
  const ctx = await pingIxcsoftHandler({ body: validBody() });
  expect(ctx.status).toBe(200);
  expect(ctx.body).toEqual({ ok: true });
});

it('POST /api/v1/ixcsoft/ping returns 400 with the IXC error message when ping fails', async () => {
  pingMock.mockResolvedValue({ ok: false, error: 'IXC Soft request failed: HTTP 401' });
  const ctx = await pingIxcsoftHandler({ body: validBody() });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({
    ok: false,
    error: 'IXC Soft request failed: HTTP 401',
  });
});

it('POST /api/v1/ixcsoft/ping returns 400 when host is unreachable (network error from ping)', async () => {
  pingMock.mockResolvedValue({
    ok: false,
    error: 'getaddrinfo ENOTFOUND ixc.example.com',
  });
  const ctx = await pingIxcsoftHandler({ body: validBody() });
  expect(ctx.status).toBe(400);
  expect(ctx.body).toEqual({
    ok: false,
    error: 'getaddrinfo ENOTFOUND ixc.example.com',
  });
});

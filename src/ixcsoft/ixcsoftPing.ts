import type { IxcsoftCredentials } from '../application/getApplicationIxcsoftCredentials.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';

export type IxcsoftPingResult = { ok: true } | { ok: false; error: string };

/**
 * Probes a tenant's IXC Soft instance by hitting `GET /empresa` with the
 * lightest possible body. Validates that the host is reachable, TLS/cert is
 * valid, the token is accepted and the IP is whitelisted — all in one round
 * trip. IXC doesn't expose `/status` or any health endpoint, and every
 * install has exactly one empresa row, so this is the cheapest probe.
 */
export const ixcsoftPing = async (
  credentials: IxcsoftCredentials,
): Promise<IxcsoftPingResult> => {
  try {
    await ixcsoftRequest({
      method: 'GET',
      path: '/empresa',
      credentials,
      body: {
        qtype: 'empresa.id',
        query: '1',
        oper: '>=',
        page: '1',
        rp: '1',
      },
    });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
};

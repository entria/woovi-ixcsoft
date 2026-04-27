import { wooviRequest, WooviRequestError } from './wooviClient.ts';
import type { WooviCharge } from './wooviTypes.ts';

type GetChargeOptions = {
  appId: string;
  correlationID: string;
};

// Woovi returns 400 with `{"error":"Cobrança não encontrada"}` for unknown charges,
// not 404. Match on that to distinguish "not found" from real failures (auth, etc.).
const isNotFoundError = (err: unknown): boolean => {
  if (!(err instanceof WooviRequestError)) return false;
  if (err.status === 404) return true;
  if (err.status === 400 && /n[aã]o encontrada|not found/i.test(err.body)) return true;
  return false;
};

/**
 * Fetches a Woovi charge by correlationID. Returns null when not found.
 */
export const wooviGetCharge = async (
  options: GetChargeOptions,
): Promise<WooviCharge | null> => {
  const { appId, correlationID } = options;

  try {
    const response = await wooviRequest<{ charge: WooviCharge }>({
      method: 'GET',
      path: `/charge/${encodeURIComponent(correlationID)}`,
      appId,
    });
    return response.charge ?? null;
  } catch (err) {
    if (isNotFoundError(err)) return null;
    throw err;
  }
};

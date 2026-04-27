import { wooviRequest } from './wooviClient.ts';
import type { WooviCharge } from './wooviTypes.ts';

type GetChargeOptions = {
  appId: string;
  correlationID: string;
};

/**
 * Fetches a Woovi charge by correlationID. Returns null on 404.
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
    if (err instanceof Error && /404/.test(err.message)) return null;
    throw err;
  }
};

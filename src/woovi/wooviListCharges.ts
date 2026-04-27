import { wooviRequest } from './wooviClient.ts';
import type { WooviCharge, WooviListChargesResponse } from './wooviTypes.ts';
import logger from '../common/logger.ts';

const PAGE_SIZE = 100;
const MAX_CHARGES = 1000;

type ListChargesOptions = {
  appId: string;
  start: Date;
  end: Date;
};

/**
 * Lists Woovi charges within a date range.
 * Paginates until exhausted or until MAX_CHARGES is reached.
 */
export const wooviListCharges = async (
  options: ListChargesOptions,
): Promise<WooviCharge[]> => {
  const { appId, start, end } = options;

  const all: WooviCharge[] = [];
  let skip = 0;

  while (all.length < MAX_CHARGES) {
    const params = new URLSearchParams({
      start: start.toISOString(),
      end: end.toISOString(),
      limit: String(PAGE_SIZE),
      skip: String(skip),
    });

    const response = await wooviRequest<WooviListChargesResponse>({
      method: 'GET',
      path: `/charge?${params.toString()}`,
      appId,
    });

    const batch = response.charges ?? [];
    all.push(...batch);

    if (batch.length < PAGE_SIZE) break;
    if (response.pageInfo?.hasNextPage === false) break;

    skip += PAGE_SIZE;
  }

  logger.info({ fetched: all.length, start, end }, 'woovi charges listed');

  return all.slice(0, MAX_CHARGES);
};

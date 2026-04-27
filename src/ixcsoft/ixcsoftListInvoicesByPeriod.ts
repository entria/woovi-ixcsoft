import type { IxcsoftConfig } from '../application/ApplicationModel.ts';
import logger from '../common/logger.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftInvoice, IxcsoftListResponse } from './ixcsoftTypes.ts';

const PAGE_SIZE = 200;
const MAX_INVOICES = 2000;

type ListInvoicesByPeriodOptions = {
  start: Date;
  end: Date;
  credentials: IxcsoftConfig;
};

const formatIxcDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

/**
 * Lists ALL `fn_areceber` rows within a period, regardless of status or pix_txid.
 * Used by the reconciliation screen — distinct from `ixcsoftListOpenInvoices`,
 * which is the cron's filter (only open invoices without a Woovi charge yet).
 */
export const ixcsoftListInvoicesByPeriod = async (
  options: ListInvoicesByPeriodOptions,
): Promise<IxcsoftInvoice[]> => {
  const { start, end, credentials } = options;

  const all: IxcsoftInvoice[] = [];
  let page = 1;

  while (all.length < MAX_INVOICES) {
    const data = await ixcsoftRequest<IxcsoftListResponse<IxcsoftInvoice>>({
      method: 'GET',
      path: '/fn_areceber',
      credentials,
      body: {
        qtype: 'fn_areceber.data_vencimento',
        query: `${formatIxcDate(start)},${formatIxcDate(end)}`,
        oper: 'BE',
        page: String(page),
        rp: String(PAGE_SIZE),
        sortname: 'fn_areceber.data_vencimento',
        sortorder: 'desc',
      },
    });

    const batch = data.registros ?? [];
    all.push(...batch);

    if (batch.length < PAGE_SIZE) break;
    page++;
  }

  logger.info({ fetched: all.length, start, end }, 'ixcsoft invoices listed by period');

  return all.slice(0, MAX_INVOICES);
};

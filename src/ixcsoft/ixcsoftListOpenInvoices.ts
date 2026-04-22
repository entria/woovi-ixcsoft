import type { IxcsoftCredentials } from '../application/getApplicationIxcsoftCredentials.ts';
import logger from '../common/logger.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftInvoice, IxcsoftListResponse } from './ixcsoftTypes.ts';

type ListOpenInvoicesOptions = {
  page?: number;
  rp?: number;
  credentials: IxcsoftCredentials;
};

/**
 * Lists open invoices (status=A) that don't have a Woovi charge yet (pix_txid empty).
 */
export const ixcsoftListOpenInvoices = async (
  options: ListOpenInvoicesOptions,
): Promise<IxcsoftInvoice[]> => {
  const { page = 1, rp = 100, credentials } = options;

  const data = await ixcsoftRequest<IxcsoftListResponse<IxcsoftInvoice>>({
    method: 'GET',
    path: '/fn_areceber',
    credentials,
    body: {
      qtype: 'fn_areceber.status',
      query: 'A',
      oper: '=',
      page: String(page),
      rp: String(rp),
      sortname: 'fn_areceber.data_vencimento',
      sortorder: 'asc',
      // Only invoices without a Woovi charge linked
      grid_param: JSON.stringify([
        { TB: 'fn_areceber.pix_txid', OP: '=', P: '' },
        { TB: 'fn_areceber.liberado', OP: '=', P: 'S' },
      ]),
    },
  });

  const total = Number(data.total);
  const invoices = data.registros ?? [];

  logger.info({ total, fetched: invoices.length, page }, 'ixcsoft open invoices fetched');

  return invoices;
};

import type { IxcsoftConfig } from '../application/ApplicationModel.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftInvoice, IxcsoftListResponse } from './ixcsoftTypes.ts';

type FindInvoiceByIdOptions = {
  invoiceId: string;
  credentials: IxcsoftConfig;
};

/**
 * Finds an IXC invoice by its primary `id` (not by `pix_txid`).
 * Used by the reconciliation detail screen to resolve a row regardless of
 * whether it has a Woovi charge linked.
 */
export const ixcsoftFindInvoiceById = async (
  options: FindInvoiceByIdOptions,
): Promise<IxcsoftInvoice | null> => {
  const { invoiceId, credentials } = options;

  const data = await ixcsoftRequest<IxcsoftListResponse<IxcsoftInvoice>>({
    method: 'GET',
    path: '/fn_areceber',
    credentials,
    body: {
      qtype: 'fn_areceber.id',
      query: invoiceId,
      oper: '=',
      page: '1',
      rp: '1',
      sortname: 'fn_areceber.id',
      sortorder: 'asc',
    },
  });

  return data.registros?.[0] ?? null;
};

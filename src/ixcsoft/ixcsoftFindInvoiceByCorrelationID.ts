import type { IxcsoftCredentials } from '../application/getApplicationIxcsoftCredentials.ts';
import logger from '../common/logger.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftInvoice, IxcsoftListResponse } from './ixcsoftTypes.ts';

type FindInvoiceOptions = {
  correlationID: string;
  credentials: IxcsoftCredentials;
};

/**
 * Finds an IXC invoice by the Woovi correlationID stored in the pix_txid field.
 * Used during webhook processing to identify which invoice to mark as paid.
 */
export const ixcsoftFindInvoiceByCorrelationID = async (
  options: FindInvoiceOptions,
): Promise<IxcsoftInvoice | null> => {
  const { correlationID, credentials } = options;

  logger.info({ correlationID }, 'ixcsoft looking up invoice by correlationID');

  const data = await ixcsoftRequest<IxcsoftListResponse<IxcsoftInvoice>>({
    method: 'GET',
    path: '/fn_areceber',
    credentials,
    body: {
      qtype: 'fn_areceber.pix_txid',
      query: correlationID,
      oper: '=',
      page: '1',
      rp: '1',
      sortname: 'fn_areceber.id',
      sortorder: 'desc',
    },
  });

  const invoice = data.registros?.[0] ?? null;

  if (!invoice) {
    logger.warn({ correlationID }, 'ixcsoft invoice not found for correlationID');
    return null;
  }

  logger.info({ invoiceId: invoice.id, correlationID }, 'ixcsoft invoice found');
  return invoice;
};

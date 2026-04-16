import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftSuccessResponse } from './ixcsoftTypes.ts';
import logger from '../common/logger.ts';

type UpdateInvoicePixOptions = {
  invoiceId: string;
  correlationID: string;
};

/**
 * Stores the Woovi correlationID in the IXC Soft invoice pix_txid field.
 * This is what links the two systems — used to find the invoice on webhook receipt.
 *
 * Note: use PUT /fn_areceber/{id}, NOT fn_areceber_altera (returns 500).
 */
export const ixcsoftUpdateInvoicePix = async (
  options: UpdateInvoicePixOptions,
): Promise<void> => {
  const { invoiceId, correlationID } = options;

  logger.info({ invoiceId, correlationID }, 'ixcsoft linking invoice to woovi charge');

  await ixcsoftRequest<IxcsoftSuccessResponse>({
    method: 'PUT',
    path: `/fn_areceber/${invoiceId}`,
    body: {
      pix_txid: correlationID,
      tipo_recebimento: 'Pix',
      liberado: 'S',
    },
  });

  logger.info({ invoiceId, correlationID }, 'ixcsoft invoice pix_txid updated');
};

import type { IxcsoftConfig } from '../application/ApplicationModel.ts';
import logger from '../common/logger.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftInvoice, IxcsoftSuccessResponse } from './ixcsoftTypes.ts';

type UpdateInvoicePixOptions = {
  invoice: IxcsoftInvoice;
  correlationID: string;
  credentials: IxcsoftConfig;
};

/**
 * Stores the Woovi correlationID in the IXC Soft invoice pix_txid field.
 * This is what links the two systems — used to find the invoice on webhook receipt.
 *
 * IXC's PUT requires the FULL invoice payload, not just the changed fields:
 * partial bodies trigger a generic HTML error ("Ocorreu um erro ao processar").
 * We spread the whole invoice and override only pix_txid / tipo_recebimento / liberado.
 *
 * Note: use PUT /fn_areceber/{id}, NOT fn_areceber_altera (returns 500).
 */
export const ixcsoftUpdateInvoicePix = async (
  options: UpdateInvoicePixOptions,
): Promise<void> => {
  const { invoice, correlationID, credentials } = options;

  logger.info(
    { invoiceId: invoice.id, correlationID },
    'ixcsoft linking invoice to woovi charge',
  );

  await ixcsoftRequest<IxcsoftSuccessResponse>({
    method: 'PUT',
    path: `/fn_areceber/${invoice.id}`,
    credentials,
    body: {
      ...invoice,
      pix_txid: correlationID,
      tipo_recebimento: 'Pix',
      liberado: 'S',
    },
  });

  logger.info(
    { invoiceId: invoice.id, correlationID },
    'ixcsoft invoice pix_txid updated',
  );
};

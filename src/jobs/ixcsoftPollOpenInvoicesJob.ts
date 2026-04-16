import { ixcsoftListOpenInvoices } from '../ixcsoft/ixcsoftListOpenInvoices.ts';
import { wooviCreateCharge } from '../woovi/wooviCreateCharge.ts';
import { ixcsoftUpdateInvoicePix } from '../ixcsoft/ixcsoftUpdateInvoicePix.ts';
import logger from '../common/logger.ts';

/**
 * Polls IXC Soft for open invoices without a Woovi charge.
 * For each invoice:
 *  1. Creates a Woovi PIX charge
 *  2. Stores the correlationID in IXC's pix_txid field
 */
export const ixcsoftPollOpenInvoicesJob = async (): Promise<void> => {
  logger.info('ixcsoft poll open invoices job started');

  const invoices = await ixcsoftListOpenInvoices({ rp: 200 });

  logger.info({ count: invoices.length }, 'ixcsoft invoices to process');

  let success = 0;
  let errors = 0;

  for (const invoice of invoices) {
    try {
      const charge = await wooviCreateCharge(invoice);

      await ixcsoftUpdateInvoicePix({
        invoiceId: invoice.id,
        correlationID: charge.correlationID,
      });

      success++;
    } catch (err) {
      logger.error(
        { error: err, invoiceId: invoice.id },
        'ixcsoft failed to process invoice',
      );
      errors++;
    }
  }

  logger.info({ success, errors }, 'ixcsoft poll open invoices job finished');
};

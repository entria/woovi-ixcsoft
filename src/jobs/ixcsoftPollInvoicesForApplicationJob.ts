import { ApplicationModel } from '../application/ApplicationModel.ts';
import { ixcsoftListOpenInvoices } from '../ixcsoft/ixcsoftListOpenInvoices.ts';
import { ixcsoftUpdateInvoicePix } from '../ixcsoft/ixcsoftUpdateInvoicePix.ts';
import { wooviCreateCharge } from '../woovi/wooviCreateCharge.ts';
import logger from '../common/logger.ts';

export type PollInvoicesForApplicationJobData = {
  applicationId: string;
};

export const ixcsoftPollInvoicesForApplicationJob = async (
  data: PollInvoicesForApplicationJobData,
): Promise<void> => {
  const { applicationId } = data;

  const application = await ApplicationModel.findById(applicationId);

  if (!application) {
    logger.warn({ applicationId }, 'ixcsoft application not found, skipping');
    return;
  }

  logger.info({ applicationId }, 'ixcsoft poll invoices for application started');

  const credentials = application.ixcsoft;
  const invoices = await ixcsoftListOpenInvoices({ rp: 200, credentials });

  logger.info({ applicationId, count: invoices.length }, 'ixcsoft invoices to process');

  let success = 0;
  let errors = 0;

  for (const invoice of invoices) {
    try {
      const charge = await wooviCreateCharge({ invoice, appId: application.wooviAppId });

      await ixcsoftUpdateInvoicePix({
        invoiceId: invoice.id,
        correlationID: charge.correlationID,
        credentials,
      });

      success++;
    } catch (err) {
      logger.error({ error: err, invoiceId: invoice.id, applicationId }, 'ixcsoft failed to process invoice');
      errors++;
    }
  }

  logger.info({ applicationId, success, errors }, 'ixcsoft poll invoices for application finished');
};

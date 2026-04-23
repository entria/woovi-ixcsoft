import { ApplicationModel } from '../application/ApplicationModel.ts';
import { getApplicationIxcsoftCredentials } from '../application/getApplicationIxcsoftCredentials.ts';
import { ixcsoftFindInvoiceByCorrelationID } from '../ixcsoft/ixcsoftFindInvoiceByCorrelationID.ts';
import { ixcsoftRegisterPayment } from '../ixcsoft/ixcsoftRegisterPayment.ts';
import logger from '../common/logger.ts';

export type ProcessChargeJobData = {
  applicationId: string;
  correlationID: string;
  value: number;
  paidAt?: string;
};

export const ixcsoftProcessChargeJob = async (data: unknown): Promise<void> => {
  const { applicationId, correlationID, value, paidAt } = data as ProcessChargeJobData;

  const application = await ApplicationModel.findById(applicationId);

  if (!application) {
    logger.warn({ applicationId, correlationID }, 'ixcsoft process charge: application not found, skipping');
    return;
  }

  const credentials = getApplicationIxcsoftCredentials(application);

  const invoice = await ixcsoftFindInvoiceByCorrelationID({ correlationID, credentials });

  if (!invoice) {
    logger.warn({ correlationID }, 'ixcsoft process charge: invoice not found, skipping');
    return;
  }

  if (invoice.status === 'R') {
    logger.info({ invoiceId: invoice.id }, 'ixcsoft process charge: invoice already paid, skipping');
    return;
  }

  await ixcsoftRegisterPayment({
    invoiceId: invoice.id,
    valueCents: value,
    paidAt: paidAt ? new Date(paidAt) : new Date(),
    credentials,
  });

  logger.info({ invoiceId: invoice.id, correlationID }, 'ixcsoft process charge: payment registered');
};

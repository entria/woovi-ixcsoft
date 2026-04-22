import { ixcsoftFindInvoiceByCorrelationID } from '../ixcsoft/ixcsoftFindInvoiceByCorrelationID.ts';
import { ixcsoftRegisterPayment } from '../ixcsoft/ixcsoftRegisterPayment.ts';
import logger from '../common/logger.ts';

export type ProcessChargeJobData = {
  correlationID: string;
  value: number;
  paidAt?: string;
};

export const ixcsoftProcessChargeJob = async (data: unknown): Promise<void> => {
  const { correlationID, value, paidAt } = data as ProcessChargeJobData;

  const invoice = await ixcsoftFindInvoiceByCorrelationID(correlationID);

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
  });

  logger.info({ invoiceId: invoice.id, correlationID }, 'ixcsoft process charge: payment registered');
};

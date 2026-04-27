import { ApplicationModel } from '../application/ApplicationModel.ts';
import { ixcsoftListInvoicesByPeriod } from '../ixcsoft/ixcsoftListInvoicesByPeriod.ts';
import type { IxcsoftInvoice } from '../ixcsoft/ixcsoftTypes.ts';
import { wooviListCharges } from '../woovi/wooviListCharges.ts';
import type { WooviCharge } from '../woovi/wooviTypes.ts';
import type { HandlerResult } from '../application/registerApplicationHandler.ts';
import logger from '../common/logger.ts';
import {
  correlationIDForInvoice,
  type ReconciliationApplicationInfo,
  type ReconciliationListResponse,
  type ReconciliationRow,
  type ReconciliationStatus,
} from './reconciliationTypes.ts';

const RANGE_DAYS = 30;

const buildAppInfo = (app: {
  _id: { toString(): string };
  wooviAppId: string;
  ixcsoft: { baseUrl: string };
}): ReconciliationApplicationInfo => ({
  _id: app._id.toString(),
  wooviAppId: app.wooviAppId,
  ixcsoft: { baseUrl: app.ixcsoft.baseUrl },
});

const classify = (
  invoice: IxcsoftInvoice,
  charge: WooviCharge | null,
): ReconciliationStatus => {
  if (charge) return 'matched';
  if (invoice.status === 'R' && !invoice.pix_txid) return 'paid_outside_woovi';
  return 'ixc_only';
};

export const buildRows = (
  invoices: IxcsoftInvoice[],
  charges: WooviCharge[],
): ReconciliationRow[] => {
  const chargesByCorrelationID = new Map<string, WooviCharge>();
  for (const charge of charges) {
    chargesByCorrelationID.set(charge.correlationID, charge);
  }

  return invoices.map((invoice) => {
    const correlationID = invoice.pix_txid || correlationIDForInvoice(invoice.id);
    const charge = chargesByCorrelationID.get(correlationID) ?? null;

    return {
      correlationID,
      status: classify(invoice, charge),
      ixcInvoice: invoice,
      wooviCharge: charge,
    };
  });
};

export const getReconciliation = async (input: {
  wooviAppId: string;
}): Promise<HandlerResult> => {
  const { wooviAppId } = input;

  if (!wooviAppId) {
    return { status: 400, body: { error: 'missing wooviAppId' } };
  }

  const application = await ApplicationModel.findOne({ wooviAppId });
  if (!application) {
    return { status: 404, body: { error: 'application not found' } };
  }

  const end = new Date();
  const start = new Date(end.getTime() - RANGE_DAYS * 24 * 60 * 60 * 1000);

  const [invoices, charges] = await Promise.all([
    ixcsoftListInvoicesByPeriod({ start, end, credentials: application.ixcsoft }),
    wooviListCharges({ appId: application.wooviAppId, start, end }),
  ]);

  const rows = buildRows(invoices, charges);

  logger.info(
    { wooviAppId, invoices: invoices.length, charges: charges.length, rows: rows.length },
    'reconciliation built',
  );

  const body: ReconciliationListResponse = {
    application: buildAppInfo(application),
    rows,
    fetchedAt: new Date().toISOString(),
    rangeStart: start.toISOString(),
    rangeEnd: end.toISOString(),
  };

  return { status: 200, body };
};

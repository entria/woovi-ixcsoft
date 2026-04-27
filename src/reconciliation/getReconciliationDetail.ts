import { ApplicationModel } from '../application/ApplicationModel.ts';
import { ixcsoftFindInvoiceById } from '../ixcsoft/ixcsoftFindInvoiceById.ts';
import { wooviGetCharge } from '../woovi/wooviGetCharge.ts';
import type { HandlerResult } from '../application/registerApplicationHandler.ts';
import logger from '../common/logger.ts';
import {
  correlationIDForInvoice,
  invoiceIdFromCorrelationID,
  type ReconciliationApplicationInfo,
  type ReconciliationDetailResponse,
  type ReconciliationRow,
  type ReconciliationStatus,
} from './reconciliationTypes.ts';

const buildAppInfo = (app: {
  _id: { toString(): string };
  wooviAppId: string;
  ixcsoft: { baseUrl: string };
}): ReconciliationApplicationInfo => ({
  _id: app._id.toString(),
  wooviAppId: app.wooviAppId,
  ixcsoft: { baseUrl: app.ixcsoft.baseUrl },
});

const classify = (row: Pick<ReconciliationRow, 'ixcInvoice' | 'wooviCharge'>): ReconciliationStatus => {
  if (row.wooviCharge) return 'matched';
  if (row.ixcInvoice && row.ixcInvoice.status === 'R' && !row.ixcInvoice.pix_txid) {
    return 'paid_outside_woovi';
  }
  return 'ixc_only';
};

export const getReconciliationDetail = async (input: {
  wooviAppId: string;
  correlationID: string;
}): Promise<HandlerResult> => {
  const { wooviAppId, correlationID } = input;

  if (!wooviAppId) return { status: 400, body: { error: 'missing wooviAppId' } };
  if (!correlationID) return { status: 400, body: { error: 'missing correlationID' } };

  const invoiceId = invoiceIdFromCorrelationID(correlationID);
  if (!invoiceId) {
    return { status: 400, body: { error: 'unsupported correlationID format' } };
  }

  const application = await ApplicationModel.findOne({ wooviAppId });
  if (!application) {
    return { status: 404, body: { error: 'application not found' } };
  }

  const [invoice, charge] = await Promise.all([
    ixcsoftFindInvoiceById({ invoiceId, credentials: application.ixcsoft }),
    wooviGetCharge({ appId: application.wooviAppId, correlationID }),
  ]);

  if (!invoice && !charge) {
    return { status: 404, body: { error: 'no invoice or charge found for correlationID' } };
  }

  const row: ReconciliationRow = {
    correlationID: invoice?.pix_txid || correlationIDForInvoice(invoiceId),
    status: classify({ ixcInvoice: invoice, wooviCharge: charge }),
    ixcInvoice: invoice,
    wooviCharge: charge,
  };

  logger.info({ wooviAppId, correlationID, status: row.status }, 'reconciliation detail built');

  const body: ReconciliationDetailResponse = {
    application: buildAppInfo(application),
    row,
    fetchedAt: new Date().toISOString(),
  };

  return { status: 200, body };
};

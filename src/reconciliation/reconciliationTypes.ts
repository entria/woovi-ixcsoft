import type { IxcsoftInvoice } from '../ixcsoft/ixcsoftTypes.ts';
import type { WooviCharge } from '../woovi/wooviTypes.ts';

export type ReconciliationStatus =
  | 'matched'
  | 'ixc_only'
  | 'paid_outside_woovi';

export type ReconciliationRow = {
  correlationID: string;
  status: ReconciliationStatus;
  ixcInvoice: IxcsoftInvoice | null;
  wooviCharge: WooviCharge | null;
};

export type ReconciliationApplicationInfo = {
  _id: string;
  wooviAppId: string;
  ixcsoft: { baseUrl: string };
};

export type ReconciliationListResponse = {
  application: ReconciliationApplicationInfo;
  rows: ReconciliationRow[];
  fetchedAt: string;
  rangeStart: string;
  rangeEnd: string;
};

export type ReconciliationDetailResponse = {
  application: ReconciliationApplicationInfo;
  row: ReconciliationRow;
  fetchedAt: string;
};

export const correlationIDForInvoice = (invoiceId: string): string => `ixc-${invoiceId}`;

export const invoiceIdFromCorrelationID = (correlationID: string): string | null => {
  const match = /^ixc-(\d+)$/.exec(correlationID);
  return match ? match[1] : null;
};

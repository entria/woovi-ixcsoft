export type WooviChargeStatus =
  | 'ACTIVE'
  | 'COMPLETED'
  | 'EXPIRED'
  | 'ERROR_ON_CREATE_CHARGE';

export type WooviCharge = {
  correlationID: string;
  status: WooviChargeStatus;
  value: number; // in cents
  brCode?: string;
  qrCodeImage?: string;
  paymentLinkUrl?: string;
  createdAt?: string;
  expiresAt?: string;
  paidAt?: string;
  comment?: string;
};

export type WooviListChargesResponse = {
  charges: WooviCharge[];
  pageInfo?: {
    skip: number;
    limit: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
};

export type WooviCreateChargeInput = {
  correlationID: string;
  value: number; // in cents
  comment?: string;
  expiresIn?: number; // seconds
  customer?: {
    name?: string;
    taxID?: string;
    email?: string;
    phone?: string;
  };
};

export type WooviWebhookEvent = {
  event: string;
  charge: {
    correlationID: string;
    status: WooviChargeStatus;
    value: number;
    paidAt?: string;
  };
};

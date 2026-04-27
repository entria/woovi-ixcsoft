import { wooviRequest } from './wooviClient.ts';
import type { WooviCharge, WooviCreateChargeInput } from './wooviTypes.ts';
import type { IxcsoftInvoice } from '../ixcsoft/ixcsoftTypes.ts';
import logger from '../common/logger.ts';

const ONE_DAY_IN_SECONDS = 86400;

const buildCorrelationID = (invoice: IxcsoftInvoice): string =>
  `ixc-${invoice.id}`;

const centsFromDecimal = (decimal: string): number =>
  Math.round(parseFloat(decimal) * 100);

type WooviCreateChargeOptions = {
  invoice: IxcsoftInvoice;
  appId: string;
};

/**
 * Creates a Woovi PIX charge for an IXC Soft invoice.
 * The correlationID follows the pattern `ixc-{invoice_id}` for easy lookup.
 */
export const wooviCreateCharge = async (options: WooviCreateChargeOptions): Promise<WooviCharge> => {
  const { invoice, appId } = options;

  const correlationID = buildCorrelationID(invoice);
  const valueCents = centsFromDecimal(invoice.valor_aberto || invoice.valor);

  const input: WooviCreateChargeInput = {
    correlationID,
    value: valueCents,
    comment: `Fatura #${invoice.id}`,
    expiresIn: ONE_DAY_IN_SECONDS,
  };

  logger.info({ correlationID, valueCents, invoiceId: invoice.id }, 'woovi creating charge');

  // `return_existing=true` makes the endpoint idempotent: when a charge with
  // this correlationID already exists, Woovi returns it instead of 400-ing
  // with "Já existe uma cobrança com este Correlação ID".
  const response = await wooviRequest<{ charge: WooviCharge }>({
    method: 'POST',
    path: '/charge?return_existing=true',
    appId,
    body: input,
  });

  logger.info(
    { correlationID, status: response.charge.status },
    'woovi charge created',
  );

  return response.charge;
};

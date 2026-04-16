import type { Context } from 'koa';

import { ixcsoftFindInvoiceByCorrelationID } from '../ixcsoft/ixcsoftFindInvoiceByCorrelationID.ts';
import { ixcsoftRegisterPayment } from '../ixcsoft/ixcsoftRegisterPayment.ts';
import type { WooviWebhookEvent } from '../woovi/wooviTypes.ts';
import logger from '../common/logger.ts';

const CHARGE_COMPLETED_EVENT = 'OPENPIX:CHARGE_COMPLETED';

/**
 * Handles Woovi webhook events.
 *
 * On charge:completed:
 *  1. Extracts correlationID from the event
 *  2. Finds the IXC invoice by pix_txid = correlationID
 *  3. Registers the payment (baixa) in IXC Soft
 */
export const wooviWebhookHandler = async (ctx: Context): Promise<void> => {
  const body = ctx.request.body as WooviWebhookEvent;

  logger.info({ event: body?.event }, 'woovi webhook received');

  if (body?.event !== CHARGE_COMPLETED_EVENT) {
    ctx.status = 200;
    ctx.body = { ok: true };
    return;
  }

  const { correlationID, value, paidAt } = body.charge;

  if (!correlationID) {
    logger.warn({ body }, 'woovi webhook missing correlationID');
    ctx.status = 400;
    ctx.body = { error: 'missing correlationID' };
    return;
  }

  const invoice = await ixcsoftFindInvoiceByCorrelationID(correlationID);

  if (!invoice) {
    logger.warn({ correlationID }, 'woovi webhook: invoice not found, skipping');
    ctx.status = 200;
    ctx.body = { ok: true, skipped: true };
    return;
  }

  if (invoice.status === 'R') {
    logger.info({ invoiceId: invoice.id }, 'woovi webhook: invoice already paid, skipping');
    ctx.status = 200;
    ctx.body = { ok: true, alreadyPaid: true };
    return;
  }

  await ixcsoftRegisterPayment({
    invoiceId: invoice.id,
    valueCents: value,
    paidAt: paidAt ? new Date(paidAt) : new Date(),
  });

  logger.info({ invoiceId: invoice.id, correlationID }, 'woovi webhook: payment registered');

  ctx.status = 200;
  ctx.body = { ok: true };
};

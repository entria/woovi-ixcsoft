/**
 * Runs the cron's per-invoice flow for a single invoiceId, without the
 * try/catch wrapper — so any error surfaces immediately.
 *
 * Usage:
 *   node --env-file=.env --experimental-transform-types scripts/processOneInvoice.ts <invoiceId>
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftFindInvoiceById } from '../src/ixcsoft/ixcsoftFindInvoiceById.ts';
import { ixcsoftUpdateInvoicePix } from '../src/ixcsoft/ixcsoftUpdateInvoicePix.ts';
import { wooviCreateCharge } from '../src/woovi/wooviCreateCharge.ts';

const invoiceId = process.argv[2];
if (!invoiceId) {
  console.error('usage: processOneInvoice.ts <invoiceId>');
  process.exit(1);
}

await connectDatabase();
const application = await ApplicationModel.findOne({ isActive: true, type: 'IXCSOFT' });
if (!application) {
  console.error('no application');
  process.exit(1);
}

const invoice = await ixcsoftFindInvoiceById({ invoiceId, credentials: application.ixcsoft });
if (!invoice) {
  console.error('invoice not found:', invoiceId);
  process.exit(1);
}

console.log('invoice:', { id: invoice.id, status: invoice.status, pix_txid: invoice.pix_txid });

console.log('\n--- step 1: wooviCreateCharge ---');
const charge = await wooviCreateCharge({ invoice, appId: application.wooviAppId });
console.log('charge created:', { correlationID: charge.correlationID, status: charge.status });

console.log('\n--- step 2: ixcsoftUpdateInvoicePix ---');
await ixcsoftUpdateInvoicePix({ invoice, correlationID: charge.correlationID, credentials: application.ixcsoft });
console.log('pix_txid updated');

await mongoose.disconnect();
process.exit(0);

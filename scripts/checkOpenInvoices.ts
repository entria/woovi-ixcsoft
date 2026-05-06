/**
 * Runs the same filter the cron uses (`ixcsoftListOpenInvoices`) and checks
 * whether a given invoiceId is present in the result.
 *
 * Usage:
 *   node --env-file=.env --experimental-transform-types scripts/checkOpenInvoices.ts <invoiceId>
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftListOpenInvoices } from '../src/ixcsoft/ixcsoftListOpenInvoices.ts';

const invoiceId = process.argv[2];
if (!invoiceId) {
  console.error('usage: checkOpenInvoices.ts <invoiceId>');
  process.exit(1);
}

await connectDatabase();
const application = await ApplicationModel.findOne({ isActive: true, type: 'IXCSOFT' });
if (!application) {
  console.error('no application');
  process.exit(1);
}

const invoices = await ixcsoftListOpenInvoices({ rp: 200, credentials: application.ixcsoft });
const found = invoices.find((i) => i.id === invoiceId);

console.log('total fetched (rp=200, page=1):', invoices.length);
console.log(`invoice ${invoiceId} present in cron filter:`, found ? 'YES' : 'NO');

if (!found) {
  const first = invoices[0];
  const last = invoices[invoices.length - 1];
  console.log('\nfirst returned:', first && { id: first.id, data_vencimento: first.data_vencimento });
  console.log('last  returned:', last && { id: last.id, data_vencimento: last.data_vencimento });
  console.log('\n→ 145684 has data_vencimento 2026-05-29 (future). With sort=asc, it sits near the END of the list.');
  console.log('  If there are >200 open invoices, it falls off page 1.');
}

await mongoose.disconnect();
process.exit(0);

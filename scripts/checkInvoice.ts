/**
 * Probes a single fn_areceber by id and checks whether it passes the
 * reconciliation list filter (BE on data_vencimento, last 30 days).
 *
 * Usage:
 *   node --env-file=.env --experimental-strip-types scripts/checkInvoice.ts <invoiceId> [wooviAppId]
 *   node --env-file=.env --experimental-strip-types scripts/checkInvoice.ts 145684
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftFindInvoiceById } from '../src/ixcsoft/ixcsoftFindInvoiceById.ts';
import { ixcsoftListInvoicesByPeriod } from '../src/ixcsoft/ixcsoftListInvoicesByPeriod.ts';

const invoiceId = process.argv[2];
const wooviAppId = process.argv[3];

if (!invoiceId) {
  console.error('usage: checkInvoice.ts <invoiceId> [wooviAppId]');
  process.exit(1);
}

await connectDatabase();

const application = wooviAppId
  ? await ApplicationModel.findOne({ wooviAppId })
  : await ApplicationModel.findOne({ isActive: true, type: 'IXCSOFT' });

if (!application) {
  console.error('no application found');
  await mongoose.disconnect();
  process.exit(1);
}

console.log('using application:', {
  _id: application._id.toString(),
  wooviAppId: application.wooviAppId,
  baseUrl: application.ixcsoft.baseUrl,
});

console.log('\n--- 1) direct GET by id ---');
const direct = await ixcsoftFindInvoiceById({ invoiceId, credentials: application.ixcsoft });
if (!direct) {
  console.log('NOT FOUND by id');
} else {
  console.log({
    id: direct.id,
    status: direct.status,
    liberado: direct.liberado,
    pix_txid: direct.pix_txid,
    data_emissao: direct.data_emissao,
    data_vencimento: direct.data_vencimento,
    valor: direct.valor,
    valor_aberto: direct.valor_aberto,
  });
}

console.log('\n--- 2) reconciliation filter (BE last 30d) ---');
const end = new Date();
const start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);
console.log('range:', start.toISOString().slice(0, 10), '→', end.toISOString().slice(0, 10));

const list = await ixcsoftListInvoicesByPeriod({ start, credentials: application.ixcsoft });
const inList = list.find((i) => i.id === invoiceId);
console.log('total fetched:', list.length);
console.log('returned:', list.map((i) => ({ id: i.id, data_emissao: i.data_emissao, data_vencimento: i.data_vencimento })));
console.log(`invoice ${invoiceId} present in BE filter:`, inList ? 'YES' : 'NO');

if (!inList && direct) {
  console.log('\n→ direct GET found it but BE filter did NOT. data_vencimento was:', JSON.stringify(direct.data_vencimento));
}

await mongoose.disconnect();
process.exit(0);

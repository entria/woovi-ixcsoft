/**
 * Probe whether `fn_areceber.id_cobranca` is a viable replacement for `pix_txid`
 * as the field that holds our correlationID.
 *
 * Steps (non-destructive — restores the original value at the end):
 *   1. GET the invoice and capture current `id_cobranca`
 *   2. PUT a sentinel (`probe-{timestamp}`) into `id_cobranca` (full payload)
 *   3. GET back and confirm the sentinel persisted
 *   4. Filter via `qtype=fn_areceber.id_cobranca` to confirm the field is queryable
 *   5. PUT again to restore the original `id_cobranca`
 *
 * Caveats:
 *   - IXC may emit notifications on PUT (email/SMS); pick a low-impact invoice
 *   - If step 5 fails, the sentinel is left behind — see the printed value to
 *     fix it manually
 *
 * Usage:
 *   node --env-file=.env --experimental-strip-types \
 *     scripts/probeIdCobranca.ts <wooviAppIdOrMongoId> <invoiceId>
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftRequest } from '../src/ixcsoft/ixcsoftClient.ts';
import { ixcsoftFindInvoiceById } from '../src/ixcsoft/ixcsoftFindInvoiceById.ts';
import type { IxcsoftInvoice, IxcsoftListResponse } from '../src/ixcsoft/ixcsoftTypes.ts';

type FullInvoice = IxcsoftInvoice & { id_cobranca?: string };

const [arg, invoiceId] = process.argv.slice(2);

if (!arg || !invoiceId) {
  console.error('Usage: scripts/probeIdCobranca.ts <wooviAppIdOrMongoId> <invoiceId>');
  process.exit(1);
}

await connectDatabase();

const isMongoId = /^[a-f0-9]{24}$/i.test(arg);
const application = isMongoId
  ? await ApplicationModel.findById(arg)
  : await ApplicationModel.findOne({ wooviAppId: arg });

if (!application) {
  console.error('application not found:', arg);
  await mongoose.disconnect();
  process.exit(1);
}

const credentials = application.ixcsoft;
const sentinel = `probe-${Date.now()}`;

const fail = async (label: string, err: unknown): Promise<never> => {
  console.error(`✗ ${label}:`, err instanceof Error ? err.message : err);
  await mongoose.disconnect();
  process.exit(1);
};

console.log(`probing invoice ${invoiceId} on app ${application._id} (sentinel=${sentinel})\n`);

// 1. read
console.log('1. reading current invoice...');
const before = (await ixcsoftFindInvoiceById({ invoiceId, credentials })) as FullInvoice | null;
if (!before) await fail('invoice not found', invoiceId);
const originalIdCobranca = before!.id_cobranca ?? '';
console.log('   id_cobranca before:', JSON.stringify(originalIdCobranca));
console.log('   pix_txid before   :', JSON.stringify(before!.pix_txid));
console.log('   status            :', before!.status);

// 2. set sentinel
console.log(`\n2. PUT id_cobranca = ${sentinel}`);
try {
  await ixcsoftRequest({
    method: 'PUT',
    path: `/fn_areceber/${invoiceId}`,
    credentials,
    body: { ...before, id_cobranca: sentinel },
  });
  console.log('   ✓ PUT accepted');
} catch (err) {
  await fail('PUT id_cobranca failed', err);
}

// 3. read back
console.log('\n3. reading back...');
const after = (await ixcsoftFindInvoiceById({ invoiceId, credentials })) as FullInvoice | null;
const idCobrancaAfter = after?.id_cobranca ?? '';
const persisted = idCobrancaAfter === sentinel;
console.log('   id_cobranca after :', JSON.stringify(idCobrancaAfter));
console.log('   matches sentinel  :', persisted ? '✓ yes' : '✗ NO');

// 4. filter probe
console.log('\n4. filtering by qtype=fn_areceber.id_cobranca...');
let queryable = false;
try {
  const data = await ixcsoftRequest<IxcsoftListResponse<IxcsoftInvoice>>({
    method: 'GET',
    path: '/fn_areceber',
    credentials,
    body: {
      qtype: 'fn_areceber.id_cobranca',
      query: sentinel,
      oper: '=',
      page: '1',
      rp: '1',
      sortname: 'fn_areceber.id',
      sortorder: 'desc',
    },
  });
  const found = data.registros?.[0];
  queryable = found?.id === invoiceId;
  console.log('   found via filter  :', found ? `✓ yes (id ${found.id})` : '✗ NO');
} catch (err) {
  console.error('   ✗ filter failed:', err instanceof Error ? err.message : err);
}

// 5. restore
console.log('\n5. restoring original id_cobranca...');
try {
  await ixcsoftRequest({
    method: 'PUT',
    path: `/fn_areceber/${invoiceId}`,
    credentials,
    body: { ...before, id_cobranca: originalIdCobranca },
  });
  console.log('   ✓ restored');
} catch (err) {
  console.error('   ✗ restore FAILED — sentinel still on invoice:');
  console.error(`     PUT /fn_areceber/${invoiceId} with id_cobranca = ${JSON.stringify(originalIdCobranca)}`);
  console.error('     details:', err instanceof Error ? err.message : err);
}

console.log('\n=== verdict ===');
console.log(`  writable  : ${persisted ? 'yes' : 'no'}`);
console.log(`  queryable : ${queryable ? 'yes' : 'no'}`);
console.log(
  `  conclusion: ${persisted && queryable ? 'id_cobranca is a viable replacement for pix_txid' : 'STAY on pix_txid'}`,
);

await mongoose.disconnect();
process.exit(0);

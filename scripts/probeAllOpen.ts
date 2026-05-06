/**
 * Tries the PUT (linking pix_txid) on every open invoice and reports per-id result.
 */
import mongoose from 'mongoose';
import { request } from 'undici';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftListOpenInvoices } from '../src/ixcsoft/ixcsoftListOpenInvoices.ts';

await connectDatabase();
const application = await ApplicationModel.findOne({ isActive: true, type: 'IXCSOFT' });
if (!application) process.exit(1);

const credentials = application.ixcsoft;
const encoded = Buffer.from(credentials.token).toString('base64');

const invoices = await ixcsoftListOpenInvoices({ rp: 200, credentials });
console.log(`testing PUT on ${invoices.length} open invoices\n`);

for (const inv of invoices) {
  const body = { ...inv, pix_txid: `probe-${inv.id}`, tipo_recebimento: 'Pix', liberado: 'S' };
  const res = await request(`${credentials.baseUrl}/fn_areceber/${inv.id}`, {
    method: 'PUT',
    headers: { Authorization: `Basic ${encoded}`, ixcsoft: 'Provedor', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await res.body.text();
  let parsed: unknown;
  try { parsed = JSON.parse(text); } catch { parsed = { raw: text.slice(0, 100) }; }

  const tag = parsed && typeof parsed === 'object' && 'type' in parsed ? (parsed as { type: string }).type : '?';
  const msg =
    parsed && typeof parsed === 'object' && 'message' in parsed
      ? String((parsed as { message: unknown }).message).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').slice(0, 120)
      : '';

  console.log(`  id=${inv.id} venc=${inv.data_vencimento} → http=${res.statusCode} type=${tag} :: ${msg}`);
}

await mongoose.disconnect();
process.exit(0);

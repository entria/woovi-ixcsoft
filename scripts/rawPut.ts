/**
 * Sends a raw PUT to fn_areceber and prints the IXC response.
 * Bypasses ixcsoftRequest's JSON parser so we see exactly what comes back.
 */
import { request } from 'undici';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftFindInvoiceById } from '../src/ixcsoft/ixcsoftFindInvoiceById.ts';
import mongoose from 'mongoose';

const invoiceId = process.argv[2];
if (!invoiceId) {
  console.error('usage: rawPut.ts <invoiceId>');
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
  console.error('not found');
  process.exit(1);
}

const credentials = application.ixcsoft;
const encoded = Buffer.from(credentials.token).toString('base64');
const url = `${credentials.baseUrl}/fn_areceber/${invoiceId}`;

const body = {
  ...invoice,
  pix_txid: `ixc-${invoiceId}`,
  tipo_recebimento: 'Pix',
  liberado: 'S',
};

console.log('PUT', url);
console.log('body keys:', Object.keys(body));
console.log('pix_txid being sent:', body.pix_txid);

const response = await request(url, {
  method: 'PUT',
  headers: {
    Authorization: `Basic ${encoded}`,
    ixcsoft: 'Provedor',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

console.log('\nstatus:', response.statusCode);
const text = await response.body.text();
console.log('response body:\n', text);

await mongoose.disconnect();
process.exit(0);

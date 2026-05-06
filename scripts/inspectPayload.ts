/**
 * Lists every date-looking field in the PUT payload to find which one
 * triggers the IXC "Financeiros 2027" block.
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftFindInvoiceById } from '../src/ixcsoft/ixcsoftFindInvoiceById.ts';

const invoiceId = process.argv[2];
if (!invoiceId) {
  console.error('usage: inspectPayload.ts <invoiceId>');
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

console.log('all fields with their values:\n');
const entries = Object.entries(invoice as Record<string, unknown>);

const looksLikeDate = (v: unknown): boolean => typeof v === 'string' && /\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}/.test(v);

console.log('--- date-looking fields ---');
for (const [k, v] of entries) {
  if (looksLikeDate(v)) {
    console.log(`  ${k}:`, JSON.stringify(v));
  }
}

console.log('\n--- fields containing "2027" ---');
for (const [k, v] of entries) {
  if (typeof v === 'string' && v.includes('2027')) {
    console.log(`  ${k}:`, JSON.stringify(v));
  }
}

console.log('\n--- fields containing "27" (any) ---');
for (const [k, v] of entries) {
  if (typeof v === 'string' && /\b27\b/.test(v)) {
    console.log(`  ${k}:`, JSON.stringify(v));
  }
}

console.log('\n--- full payload ---');
console.log(JSON.stringify(invoice, null, 2));

await mongoose.disconnect();
process.exit(0);

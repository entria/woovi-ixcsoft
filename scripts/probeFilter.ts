/**
 * Probes different IXC filter formats on fn_areceber.data_emissao to find
 * which one actually narrows the result set.
 */
import mongoose from 'mongoose';

import { ApplicationModel } from '../src/application/ApplicationModel.ts';
import { connectDatabase } from '../src/database/connectDatabase.ts';
import { ixcsoftRequest } from '../src/ixcsoft/ixcsoftClient.ts';
import type { IxcsoftInvoice, IxcsoftListResponse } from '../src/ixcsoft/ixcsoftTypes.ts';

await connectDatabase();
const application = await ApplicationModel.findOne({ isActive: true, type: 'IXCSOFT' });
if (!application) {
  console.error('no application');
  process.exit(1);
}
const credentials = application.ixcsoft;

const probes = [
  { label: 'no filter (just id>=1)',         body: { qtype: 'fn_areceber.id', query: '1', oper: '>=' } },
  { label: 'BE YYYY-MM-DD on data_emissao',  body: { qtype: 'fn_areceber.data_emissao', query: '2026-04-06,2026-05-06', oper: 'BE' } },
  { label: 'BE DD/MM/YYYY on data_emissao',  body: { qtype: 'fn_areceber.data_emissao', query: '06/04/2026,06/05/2026', oper: 'BE' } },
  { label: '>= YYYY-MM-DD on data_emissao',  body: { qtype: 'fn_areceber.data_emissao', query: '2026-04-06', oper: '>=' } },
  { label: '>= DD/MM/YYYY on data_emissao',  body: { qtype: 'fn_areceber.data_emissao', query: '06/04/2026', oper: '>=' } },
];

for (const p of probes) {
  const res = await ixcsoftRequest<IxcsoftListResponse<IxcsoftInvoice>>({
    method: 'GET',
    path: '/fn_areceber',
    credentials,
    body: { ...p.body, page: '1', rp: '20', sortname: 'fn_areceber.id', sortorder: 'desc' },
  });
  const ids = (res.registros ?? []).map((r) => `${r.id}(${r.data_emissao})`);
  console.log(`\n[${p.label}]  total=${res.total}  fetched=${(res.registros ?? []).length}`);
  console.log('  ids:', ids.join(', '));
}

await mongoose.disconnect();
process.exit(0);

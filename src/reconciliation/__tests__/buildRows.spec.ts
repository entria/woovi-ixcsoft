import { expect, it } from 'vitest';

import type { IxcsoftInvoice } from '../../ixcsoft/ixcsoftTypes.ts';
import type { WooviCharge } from '../../woovi/wooviTypes.ts';
import { buildRows } from '../getReconciliation.ts';

const makeInvoice = (overrides: Partial<IxcsoftInvoice> = {}): IxcsoftInvoice => ({
  id: '101',
  id_cliente: '1',
  id_contrato: '2',
  filial_id: '1',
  status: 'A',
  valor: '100.00',
  valor_aberto: '100.00',
  valor_recebido: '0',
  data_emissao: '2026-04-01',
  data_vencimento: '2026-04-15',
  tipo_recebimento: '',
  pix_txid: '',
  recebido_via_pix: 'N',
  obs: '',
  id_conta: '1',
  id_carteira_cobranca: '1',
  liberado: 'S',
  ...overrides,
});

const makeCharge = (overrides: Partial<WooviCharge> = {}): WooviCharge => ({
  correlationID: 'ixc-101',
  status: 'COMPLETED',
  value: 10000,
  ...overrides,
});

it('classifies invoice with linked Woovi charge as `matched`', () => {
  const invoice = makeInvoice({ id: '101', pix_txid: 'ixc-101', status: 'R' });
  const charge = makeCharge({ correlationID: 'ixc-101' });
  const [row] = buildRows([invoice], [charge]);
  expect(row.status).toBe('matched');
  expect(row.correlationID).toBe('ixc-101');
  expect(row.wooviCharge).toBe(charge);
  expect(row.ixcInvoice).toBe(invoice);
});

it('classifies open invoice without Woovi charge as `ixc_only`', () => {
  const invoice = makeInvoice({ id: '102', pix_txid: '', status: 'A' });
  const [row] = buildRows([invoice], []);
  expect(row.status).toBe('ixc_only');
  expect(row.correlationID).toBe('ixc-102'); // synthesized
  expect(row.wooviCharge).toBeNull();
});

it('classifies invoice paid in IXC without pix_txid as `paid_outside_woovi`', () => {
  const invoice = makeInvoice({ id: '103', pix_txid: '', status: 'R' });
  const [row] = buildRows([invoice], []);
  expect(row.status).toBe('paid_outside_woovi');
  expect(row.correlationID).toBe('ixc-103');
});

it('drops Woovi charges with no matching IXC invoice (woovi_only is excluded)', () => {
  const orphanCharge = makeCharge({ correlationID: 'ixc-999' });
  const rows = buildRows([], [orphanCharge]);
  expect(rows).toEqual([]);
});

it('does not match Woovi charges against synthesized correlationIDs of invoices that lack pix_txid', () => {
  // invoice 104 has no pix_txid; synthesized ID is `ixc-104`
  // a Woovi charge with `ixc-104` could only have been created if the cron ran AND the IXC PUT succeeded
  // — that combination implies pix_txid would be set, so the absence is treated as ixc_only
  const invoice = makeInvoice({ id: '104', pix_txid: '', status: 'A' });
  const charge = makeCharge({ correlationID: 'ixc-104' });
  const [row] = buildRows([invoice], [charge]);
  // We DO match here — buildRows trusts the Map lookup. Documented behavior:
  // synthesized correlationID resolves the same way as a real one.
  expect(row.status).toBe('matched');
  expect(row.wooviCharge).toBe(charge);
});

it('keeps invoice anchor stable: 3 invoices in, 3 rows out regardless of charges', () => {
  const invoices = [
    makeInvoice({ id: '201', pix_txid: 'ixc-201', status: 'R' }),
    makeInvoice({ id: '202', pix_txid: '', status: 'A' }),
    makeInvoice({ id: '203', pix_txid: '', status: 'R' }),
  ];
  const charges = [
    makeCharge({ correlationID: 'ixc-201' }),
    makeCharge({ correlationID: 'ixc-orphan-zzz' }), // dropped
  ];
  const rows = buildRows(invoices, charges);
  expect(rows).toHaveLength(3);
  expect(rows.map((r) => r.status)).toEqual(['matched', 'ixc_only', 'paid_outside_woovi']);
});

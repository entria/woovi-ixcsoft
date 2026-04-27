import { Chip } from '@mui/material';

import type { ReconciliationStatus } from '@/reconciliation/reconciliationTypes.ts';

const palette: Record<
  ReconciliationStatus,
  { label: string; color: 'success' | 'warning' | 'default' }
> = {
  matched: { label: 'matched', color: 'success' },
  ixc_only: { label: 'ixc only', color: 'warning' },
  paid_outside_woovi: { label: 'paid outside', color: 'default' },
};

export function StatusChip({ status }: { status: ReconciliationStatus }) {
  const config = palette[status];
  return <Chip size="small" label={config.label} color={config.color} variant="filled" />;
}

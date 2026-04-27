import {
  Alert,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Link from 'next/link';

import { getReconciliation } from '@/reconciliation/getReconciliation.ts';
import type { ReconciliationListResponse, ReconciliationRow } from '@/reconciliation/reconciliationTypes.ts';
import { ApplicationHeader } from './ApplicationHeader';
import { StatusChip } from './StatusChip';

type SearchParams = Promise<{ appId?: string }>;

const formatBRL = (cents?: number): string => {
  if (typeof cents !== 'number') return '—';
  return (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatBRLFromIXC = (decimal?: string): string => {
  if (!decimal) return '—';
  const value = Number(decimal);
  if (Number.isNaN(value)) return '—';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatIxcDate = (yyyymmdd?: string): string => {
  if (!yyyymmdd) return '—';
  const [yyyy, mm, dd] = yyyymmdd.split('-');
  if (!yyyy || !mm || !dd) return yyyymmdd;
  return `${dd}/${mm}/${yyyy}`;
};

const ErrorState = ({ message }: { message: string }) => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Alert severity="error">{message}</Alert>
    <Box sx={{ mt: 2 }}>
      <Link href="/">← voltar</Link>
    </Box>
  </Container>
);

const Row = ({ row, appId }: { row: ReconciliationRow; appId: string }) => {
  const href = `/reconciliation/${encodeURIComponent(row.correlationID)}?appId=${encodeURIComponent(appId)}`;
  return (
    <TableRow
      hover
      sx={{ '& a': { color: 'inherit', textDecoration: 'none', display: 'block' } }}
    >
      <TableCell>
        <Link href={href}>{row.ixcInvoice?.id ?? '—'}</Link>
      </TableCell>
      <TableCell>
        <Link href={href}>
          <StatusChip status={row.status} />
        </Link>
      </TableCell>
      <TableCell>
        <Link href={href}>{formatIxcDate(row.ixcInvoice?.data_vencimento)}</Link>
      </TableCell>
      <TableCell align="right">
        <Link href={href}>{formatBRLFromIXC(row.ixcInvoice?.valor_aberto || row.ixcInvoice?.valor)}</Link>
      </TableCell>
      <TableCell align="right">
        <Link href={href}>{formatBRL(row.wooviCharge?.value)}</Link>
      </TableCell>
      <TableCell>
        <Link href={href}>{row.wooviCharge?.status ?? '—'}</Link>
      </TableCell>
      <TableCell>
        <Link href={href}>
          <code>{row.correlationID}</code>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default async function ReconciliationListPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { appId } = await searchParams;

  if (!appId) {
    return <ErrorState message="missing ?appId=..." />;
  }

  const result = await getReconciliation({ wooviAppId: appId });
  if (result.status !== 200) {
    const errBody = result.body as { error?: string };
    return <ErrorState message={errBody.error ?? `HTTP ${result.status}`} />;
  }

  const data = result.body as ReconciliationListResponse;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ApplicationHeader
        application={data.application}
        fetchedAt={data.fetchedAt}
        rangeStart={data.rangeStart}
        rangeEnd={data.rangeEnd}
      />
      {data.rows.length === 0 ? (
        <Paper variant="outlined" sx={{ p: 4 }}>
          <Typography textAlign="center" color="text.secondary">
            Nenhum a receber nos últimos 30 dias.
          </Typography>
        </Paper>
      ) : (
        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Invoice IXC</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Vencimento</TableCell>
                <TableCell align="right">Valor IXC</TableCell>
                <TableCell align="right">Valor Woovi</TableCell>
                <TableCell>Charge Woovi</TableCell>
                <TableCell>correlationID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.rows.map((row) => (
                <Row key={row.correlationID} row={row} appId={appId} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

import { getReconciliationDetail } from '@/reconciliation/getReconciliationDetail.ts';
import type { ReconciliationDetailResponse } from '@/reconciliation/reconciliationTypes.ts';
import { ApplicationHeader } from '../ApplicationHeader';
import { StatusChip } from '../StatusChip';

type Params = Promise<{ correlationID: string }>;
type SearchParams = Promise<{ appId?: string }>;

const Field = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <Grid size={{ xs: 12, sm: 6 }}>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
      {value || '—'}
    </Typography>
  </Grid>
);

const ErrorState = ({ message, appId }: { message: string; appId?: string }) => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Alert severity="error">{message}</Alert>
    <Box sx={{ mt: 2 }}>
      <Link href={appId ? `/reconciliation?appId=${encodeURIComponent(appId)}` : '/'}>
        ← voltar
      </Link>
    </Box>
  </Container>
);

export default async function ReconciliationDetailPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { correlationID } = await params;
  const { appId } = await searchParams;

  if (!appId) return <ErrorState message="missing ?appId=..." />;

  const result = await getReconciliationDetail({
    wooviAppId: appId,
    correlationID: decodeURIComponent(correlationID),
  });

  if (result.status !== 200) {
    const errBody = result.body as { error?: string };
    return <ErrorState message={errBody.error ?? `HTTP ${result.status}`} appId={appId} />;
  }

  const data = result.body as ReconciliationDetailResponse;
  const { row } = data;
  const invoice = row.ixcInvoice;
  const charge = row.wooviCharge;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ApplicationHeader application={data.application} fetchedAt={data.fetchedAt} />

      <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
          <Typography variant="h6">
            <code>{row.correlationID}</code>
          </Typography>
          <StatusChip status={row.status} />
        </Stack>
        <Box>
          <Link href={`/reconciliation?appId=${encodeURIComponent(appId)}`}>
            ← voltar para a lista
          </Link>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="overline" color="text.secondary">
              IXC Soft (fn_areceber)
            </Typography>
            {invoice ? (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Field label="id" value={<code>{invoice.id}</code>} />
                <Field label="status" value={invoice.status} />
                <Field label="id_cliente" value={invoice.id_cliente} />
                <Field label="id_contrato" value={invoice.id_contrato} />
                <Field label="filial_id" value={invoice.filial_id} />
                <Field label="id_conta" value={invoice.id_conta} />
                <Field label="data_emissao" value={invoice.data_emissao} />
                <Field label="data_vencimento" value={invoice.data_vencimento} />
                <Field label="valor" value={invoice.valor} />
                <Field label="valor_aberto" value={invoice.valor_aberto} />
                <Field label="valor_recebido" value={invoice.valor_recebido} />
                <Field label="tipo_recebimento" value={invoice.tipo_recebimento} />
                <Field label="recebido_via_pix" value={invoice.recebido_via_pix} />
                <Field label="liberado" value={invoice.liberado} />
                <Field label="pix_txid" value={<code>{invoice.pix_txid || '—'}</code>} />
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Field label="obs" value={invoice.obs} />
              </Grid>
            ) : (
              <Alert severity="info" sx={{ mt: 1 }}>
                Não existe `fn_areceber` correspondente para este correlationID.
              </Alert>
            )}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="overline" color="text.secondary">
              Woovi (charge)
            </Typography>
            {charge ? (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Field label="correlationID" value={<code>{charge.correlationID}</code>} />
                <Field label="status" value={charge.status} />
                <Field label="value (cents)" value={charge.value} />
                <Field label="createdAt" value={charge.createdAt} />
                <Field label="expiresAt" value={charge.expiresAt} />
                <Field label="paidAt" value={charge.paidAt} />
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Field label="comment" value={charge.comment} />
                <Field label="paymentLinkUrl" value={
                  charge.paymentLinkUrl ? (
                    <a href={charge.paymentLinkUrl} target="_blank" rel="noreferrer">
                      {charge.paymentLinkUrl}
                    </a>
                  ) : '—'
                } />
                <Field label="brCode" value={<code>{charge.brCode}</code>} />
              </Grid>
            ) : (
              <Alert severity="info" sx={{ mt: 1 }}>
                Nenhuma charge Woovi para este correlationID.
              </Alert>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

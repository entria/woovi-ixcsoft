import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

import type { ReconciliationApplicationInfo } from '@/reconciliation/reconciliationTypes.ts';

type ApplicationHeaderProps = {
  application: ReconciliationApplicationInfo;
  fetchedAt?: string;
  rangeStart?: string;
  rangeEnd?: string;
};

const formatDateTime = (iso?: string): string => {
  if (!iso) return '';
  return new Date(iso).toLocaleString('pt-BR');
};

const formatDate = (iso?: string): string => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('pt-BR');
};

export function ApplicationHeader({ application, fetchedAt, rangeStart, rangeEnd }: ApplicationHeaderProps) {
  return (
    <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between">
        <Box>
          <Typography variant="overline" color="text.secondary">
            Application
          </Typography>
          <Typography variant="h6">{application.wooviAppId}</Typography>
          <Typography variant="body2" color="text.secondary">
            id: <code>{application._id}</code>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            IXC: <code>{application.ixcsoft.baseUrl}</code>
          </Typography>
        </Box>
        <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
          {rangeStart && rangeEnd && (
            <Chip
              size="small"
              label={`${formatDate(rangeStart)} – ${formatDate(rangeEnd)}`}
              variant="outlined"
            />
          )}
          {fetchedAt && (
            <Typography variant="caption" color="text.secondary">
              fetched {formatDateTime(fetchedAt)}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}

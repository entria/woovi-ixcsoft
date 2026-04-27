import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import { config } from '@/common/config.ts';
import { HomeForm } from './HomeForm';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#ffffff', display: 'grid', placeItems: 'center', py: 4 }}>
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center">
          <Image src="/woovi.svg" alt="Woovi" width={160} height={80} priority />
          <Typography variant="h4" textAlign="center">
            Reconciliação IXC × Woovi
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Informe o wooviAppId do tenant para listar os a receber dos últimos 30 dias.
          </Typography>
          <HomeForm defaultAppId={config.DEFAULT_WOOVI_APP_ID} />
        </Stack>
      </Container>
    </Box>
  );
}

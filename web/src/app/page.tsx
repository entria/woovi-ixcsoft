import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#ffffff', display: 'grid', placeItems: 'center', py: 4 }}>
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center">
          <Image src="/woovi.svg" alt="Woovi" width={160} height={80} priority />
          <Typography variant="h3" textAlign="center">
            Muito bem vindo
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            service-ixcsoft
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

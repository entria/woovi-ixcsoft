'use client';

import { Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type HomeFormProps = {
  defaultAppId: string;
};

export function HomeForm({ defaultAppId }: HomeFormProps) {
  const router = useRouter();
  const [appId, setAppId] = useState(defaultAppId);

  return (
    <Stack
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (!appId.trim()) return;
        const params = new URLSearchParams({ appId: appId.trim() });
        router.push(`/reconciliation?${params.toString()}`);
      }}
      spacing={2}
      sx={{ width: '100%' }}
    >
      <TextField
        label="wooviAppId"
        value={appId}
        onChange={(event) => setAppId(event.target.value)}
        fullWidth
        autoFocus
        autoComplete="off"
        spellCheck={false}
      />
      <Button type="submit" variant="contained" size="large" disabled={!appId.trim()}>
        OK
      </Button>
    </Stack>
  );
}

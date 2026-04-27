export const register = async (): Promise<void> => {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  const g = globalThis as unknown as { __serviceIxcsoftBooted?: boolean };
  if (g.__serviceIxcsoftBooted) return;
  g.__serviceIxcsoftBooted = true;

  const { connectDatabase } = await import('./src/database/connectDatabase.ts');
  const { initializeWorkers } = await import('./src/jobs/worker.ts');
  const { scheduleIxcPollOpenInvoices } = await import('./src/jobs/crons/scheduleIxcPollOpenInvoices.ts');

  await connectDatabase();
  initializeWorkers();
  await scheduleIxcPollOpenInvoices();
};

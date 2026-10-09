import type { Instrumentation } from 'next';

/**
 * Sentry (errors only; GlitchTip speaks the Sentry protocol). Off unless the
 * pod has SENTRY_DSN (runtime env).
 *
 * Server side only: the Docker image is built once and promoted across
 * environments with no per-environment build env, so there is no
 * NEXT_PUBLIC_ DSN to bake into the browser bundle.
 *
 * Tracing is not Sentry's job here: no `tracesSampleRate`, and
 * `enableOpenTelemetrySetup: false` (it defaults to true on @sentry/nextjs v11)
 * so Sentry does not register a tracer provider next to elastic-apm-node.
 */
const initSentry = async (): Promise<void> => {
  if (!process.env.SENTRY_DSN) return;

  const Sentry = await import('@sentry/nextjs');
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.SENTRY_ENVIRONMENT ?? process.env.APP_ENV,
    release: process.env.SENTRY_RELEASE ?? process.env.COMMIT_SHA,
    enableOpenTelemetrySetup: false,
    // v11 defaults collect request bodies, cookies, user info and DB query
    // data; keep the restrictive v10 baseline.
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpHeaders: {
        request: { deny: ['forwarded', '-ip', 'remote-', 'via', '-user'] },
        response: { deny: ['forwarded', '-ip', 'remote-', 'via', '-user'] },
      },
      httpBodies: [],
      urlQueryParams: { deny: ['forwarded', '-ip', 'remote-', 'via', '-user'] },
      genAI: { inputs: false, outputs: false },
      databaseQueryData: false,
      queues: false,
      graphQL: { document: false, variables: false },
    },
  });
};

export const register = async (): Promise<void> => {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  const g = globalThis as unknown as { __serviceIxcsoftBooted?: boolean };
  if (g.__serviceIxcsoftBooted) return;
  g.__serviceIxcsoftBooted = true;

  // First, so a failing boot step below is still reported; a Sentry failure
  // must never keep the DB, workers and cron from starting.
  try {
    await initSentry();
  } catch (err) {
    console.error('[instrumentation] failed to start Sentry:', err);
  }

  const { connectDatabase } = await import('./src/database/connectDatabase.ts');
  const { initializeWorkers } = await import('./src/jobs/worker.ts');
  const { scheduleIxcPollOpenInvoices } = await import('./src/jobs/crons/scheduleIxcPollOpenInvoices.ts');

  await connectDatabase();
  initializeWorkers();
  await scheduleIxcPollOpenInvoices();
};

/**
 * Errors thrown while rendering or in route handlers: Next catches them and
 * answers 500, so they never reach a global handler. Hand them to Sentry.
 */
export const onRequestError: Instrumentation.onRequestError = async (err, request, context) => {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  if (!process.env.SENTRY_DSN) return;

  const Sentry = await import('@sentry/nextjs');
  Sentry.captureRequestError(err, request, context);
};

import { NextResponse } from 'next/server';

import { processChargeWebhook } from '@/charges/chargeCompletedHandler.ts';

export const runtime = 'nodejs';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ applicationId: string }> },
): Promise<NextResponse> {
  const { applicationId } = await params;
  const rawBody = await request.text();
  const signature = request.headers.get('x-webhook-signature') ?? undefined;

  const result = await processChargeWebhook({ applicationId, signature, rawBody });
  return NextResponse.json(result.body, { status: result.status });
}

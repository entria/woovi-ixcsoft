import { NextResponse } from 'next/server';

import { getReconciliation } from '@/reconciliation/getReconciliation.ts';

export const runtime = 'nodejs';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const wooviAppId = searchParams.get('appId') ?? '';

  const result = await getReconciliation({ wooviAppId });
  return NextResponse.json(result.body, { status: result.status });
}

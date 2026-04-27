import { NextResponse } from 'next/server';

import { getReconciliationDetail } from '@/reconciliation/getReconciliationDetail.ts';

export const runtime = 'nodejs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ correlationID: string }> },
): Promise<NextResponse> {
  const { correlationID } = await params;
  const { searchParams } = new URL(request.url);
  const wooviAppId = searchParams.get('appId') ?? '';

  const result = await getReconciliationDetail({ wooviAppId, correlationID });
  return NextResponse.json(result.body, { status: result.status });
}

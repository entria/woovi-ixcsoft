import { NextResponse } from 'next/server';

import { getStatus } from '@/statusGet.ts';

export const runtime = 'nodejs';

export async function GET(): Promise<NextResponse> {
  const result = await getStatus();
  return NextResponse.json(result.body, { status: result.status });
}

import { NextResponse } from 'next/server';

import { pingIxcsoftHandler } from '@/ixcsoft/pingIxcsoftHandler.ts';

export const runtime = 'nodejs';

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const result = await pingIxcsoftHandler({ body });
  return NextResponse.json(result.body, { status: result.status });
}

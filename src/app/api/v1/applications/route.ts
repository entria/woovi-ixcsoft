import { NextResponse } from 'next/server';

import { registerApplication } from '@/application/registerApplicationHandler.ts';

export const runtime = 'nodejs';

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const result = await registerApplication({ body });
  return NextResponse.json(result.body, { status: result.status });
}

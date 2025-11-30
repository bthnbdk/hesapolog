import { NextResponse } from 'next/server';
import { getAllTools } from '@/data/tools';

export async function GET() {
  const tools = getAllTools();
  return NextResponse.json(tools);
}

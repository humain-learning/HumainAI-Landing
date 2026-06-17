import { NextResponse } from 'next/server';
import { z } from 'zod';
import { submitLead } from '@/app/lib/crmClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Single endpoint for all forms: infer teacher flow from leadType
    const teacher = body?.leadType === 'teacher';

    const result = await submitLead(body, teacher);

    return NextResponse.json(
      { ok: true, message: 'Lead submitted successfully.', data: result },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Validation failed.',
          errors: z.treeifyError(error),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, message: 'Failed to submit lead.' },
      { status: 500 }
    );
  }
}
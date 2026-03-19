import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { contactSchema, sanitize } from '@/lib/validations';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 3 per hour per IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    const rateLimitResult = rateLimit(`contact:${ip}`, 3, 60 * 60 * 1000);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Validierungsfehler', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Sanitize all string inputs
    const sanitized = {
      name: sanitize(result.data.name),
      email: result.data.email,
      nachricht: sanitize(result.data.nachricht),
    };

    const supabase = createServerClient();
    const { error } = await supabase.from('contact_messages').insert(sanitized);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, message: 'Fehler beim Senden der Nachricht.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
      { status: 201, headers: { 'X-RateLimit-Remaining': String(rateLimitResult.remaining) } }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}

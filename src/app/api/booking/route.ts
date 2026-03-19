import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { bookingSchema, sanitize } from '@/lib/validations';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 per hour per IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    const rateLimitResult = rateLimit(ip, 5, 60 * 60 * 1000);

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
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Validierungsfehler', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Sanitize all string inputs
    const sanitized = {
      ...result.data,
      name: sanitize(result.data.name),
      email: result.data.email,
      telefon: result.data.telefon ? sanitize(result.data.telefon) : null,
      paket: result.data.paket ? sanitize(result.data.paket) : null,
      nachricht: result.data.nachricht ? sanitize(result.data.nachricht) : null,
    };

    const supabase = createServerClient();
    const { error } = await supabase.from('bookings').insert(sanitized);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, message: 'Fehler beim Speichern der Buchung.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Ihre Buchungsanfrage wurde erfolgreich gesendet!' },
      { status: 201, headers: { 'X-RateLimit-Remaining': String(rateLimitResult.remaining) } }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}

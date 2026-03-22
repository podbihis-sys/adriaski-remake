import { NextRequest, NextResponse } from 'next/server';
import { loginUser, validateAdminPassword, generateToken, validateOrigin } from '@/lib/admin-auth';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  if (!validateOrigin(request)) {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const { success, remaining } = rateLimit(ip, 5, 60 * 1000); // 5 attempts per minute

  if (!success) {
    return NextResponse.json(
      { error: 'Previše pokušaja. Pokušajte ponovno za minutu.' },
      { status: 429, headers: { 'X-RateLimit-Remaining': String(remaining) } }
    );
  }

  try {
    const body = await request.json();
    const password = typeof body.password === 'string' ? body.password.trim() : '';
    const username = typeof body.username === 'string' ? body.username.trim().toLowerCase() : '';

    if (!password) {
      return NextResponse.json({ error: 'Lozinka je obavezna.' }, { status: 400 });
    }

    // New flow: username + password login
    const loginName = username || 'admin';
    try {
      const result = await loginUser(loginName, password);
      if (!result) {
        return NextResponse.json({ error: 'Pogrešno korisničko ime ili lozinka.' }, { status: 401 });
      }
      return NextResponse.json({ token: result.token, user: result.user });
    } catch (err) {
      // Account locked error from authenticateUser
      if (err instanceof Error) {
        return NextResponse.json({ error: err.message }, { status: 423 });
      }
    }

    return NextResponse.json({ error: 'Pogrešna lozinka.' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Neispravan zahtjev.' }, { status: 400 });
  }
}

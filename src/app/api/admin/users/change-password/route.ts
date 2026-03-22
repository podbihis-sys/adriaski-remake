import { NextRequest, NextResponse } from 'next/server';
import { getUserFromRequest } from '@/lib/admin-auth';
import { getUsers, saveUsers, hashPassword, validatePassword } from '@/lib/users-store';

export async function POST(request: NextRequest) {
  const currentUser = await getUserFromRequest(request);
  if (!currentUser) {
    return NextResponse.json({ error: 'Neautorizirano.' }, { status: 401 });
  }

  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Oba polja su obavezna.' }, { status: 400 });
    }

    // Verify current password
    const currentHash = hashPassword(currentPassword);
    if (currentHash !== currentUser.passwordHash) {
      return NextResponse.json({ error: 'Trenutna lozinka nije ispravna.' }, { status: 400 });
    }

    // Validate new password
    const validation = validatePassword(newPassword);
    if (validation) {
      return NextResponse.json({ error: validation }, { status: 400 });
    }

    // Update password
    const users = await getUsers();
    const user = users.find(u => u.id === currentUser.id);
    if (!user) {
      return NextResponse.json({ error: 'Korisnik nije pronađen.' }, { status: 404 });
    }

    user.passwordHash = hashPassword(newPassword);
    await saveUsers(users);

    // Generate new token
    const token = Buffer.from(JSON.stringify({ username: user.username, hash: user.passwordHash })).toString('base64');

    return NextResponse.json({ success: true, token });
  } catch {
    return NextResponse.json({ error: 'Neispravan zahtjev.' }, { status: 400 });
  }
}

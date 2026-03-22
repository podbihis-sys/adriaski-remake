import { NextRequest } from 'next/server';
import { authenticateUser, getUsers, User, Permission, hashPassword } from './users-store';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'adriaski2026';

export async function validateAdminSession(request: NextRequest): Promise<boolean> {
  const user = await getUserFromRequest(request);
  return user !== null;
}

export async function getUserFromRequest(request: NextRequest): Promise<User | null> {
  const authHeader = request.headers.get('x-admin-token');
  if (!authHeader) return null;
  try {
    // Try new token format: base64 of JSON { username, hash }
    const decoded = JSON.parse(Buffer.from(authHeader, 'base64').toString());
    if (decoded.username && decoded.hash) {
      const users = await getUsers();
      return users.find(u => u.username === decoded.username && u.passwordHash === decoded.hash) || null;
    }
    return null;
  } catch {
    // Backward compat: old token format is base64(password)
    try {
      const decodedPassword = Buffer.from(authHeader, 'base64').toString();
      if (decodedPassword === ADMIN_PASSWORD) {
        // Return the default admin user
        const users = await getUsers();
        return users.find(u => u.username === 'admin') || null;
      }
    } catch { /* invalid token */ }
    return null;
  }
}

export function hasPermission(user: User, category: keyof Permission, action: string): boolean {
  const perm = user.permissions[category];
  if (!perm) return false;
  return (perm as Record<string, boolean>)[action] === true;
}

export async function loginUser(username: string, password: string): Promise<{ token: string; user: User } | null> {
  const user = await authenticateUser(username, password);
  if (!user) return null;
  const token = Buffer.from(JSON.stringify({ username: user.username, hash: user.passwordHash })).toString('base64');
  return { token, user: { ...user, passwordHash: '' } }; // Don't send hash to client
}

// Keep backward compat
export function validateAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function generateToken(password: string): string {
  return Buffer.from(password).toString('base64');
}

export function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (!origin || !host) return true;
  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

export type { Permission, User };
export { hashPassword };

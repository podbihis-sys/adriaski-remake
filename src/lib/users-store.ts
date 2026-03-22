import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

export interface Permission {
  events: { create: boolean; edit: boolean; delete: boolean };
  pages: { edit: boolean };
  skijaliste: { manage: boolean };
  cameras: { manage: boolean };
  settings: { manage: boolean };
  users: { manage: boolean };
}

export interface User {
  id: string;
  username: string;
  passwordHash: string;
  role: string;
  permissions: Permission;
  createdAt: string;
  lastLogin?: string;
}

const DEFAULT_PERMISSIONS: Record<string, Permission> = {
  'Super Admin': {
    events: { create: true, edit: true, delete: true },
    pages: { edit: true },
    skijaliste: { manage: true },
    cameras: { manage: true },
    settings: { manage: true },
    users: { manage: true },
  },
  'Editor': {
    events: { create: true, edit: true, delete: false },
    pages: { edit: true },
    skijaliste: { manage: false },
    cameras: { manage: false },
    settings: { manage: false },
    users: { manage: false },
  },
  'Moderator': {
    events: { create: true, edit: true, delete: true },
    pages: { edit: false },
    skijaliste: { manage: true },
    cameras: { manage: true },
    settings: { manage: false },
    users: { manage: false },
  },
};

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password + 'adriaski-salt-2026').digest('hex');
}

// Common passwords and patterns to block
const COMMON_PASSWORDS = [
  'password', 'passwort', 'qwerty', 'letmein', 'welcome', 'monkey', 'dragon',
  'master', 'login', 'princess', 'football', 'shadow', 'sunshine', 'trustno1',
  'iloveyou', 'batman', 'access', 'hello', 'charlie', 'admin', 'administrator',
  'adriaski', 'kupres', 'hotel', 'tikvice', 'skijanje', 'skijaliste',
];

const SEQUENTIAL_PATTERNS = [
  '0123456789', '9876543210', 'abcdefghij', 'qwertyuiop', 'asdfghjkl',
];

export function validatePassword(password: string): string | null {
  if (password.length < 10) return 'Lozinka mora imati najmanje 10 znakova.';
  if (/[\sß]/.test(password)) return 'Lozinka ne smije sadržavati razmak ili ß.';
  if (!/[A-Z]/.test(password)) return 'Lozinka mora sadržavati najmanje jedno veliko slovo.';
  if (!/[a-z]/.test(password)) return 'Lozinka mora sadržavati najmanje jedno malo slovo.';
  if (!/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
    return 'Lozinka mora sadržavati najmanje jedan broj ili poseban znak.';

  const lower = password.toLowerCase();
  for (const common of COMMON_PASSWORDS) {
    if (lower.includes(common)) return `Lozinka ne smije sadržavati "${common}".`;
  }

  // Check sequential patterns (4+ consecutive chars)
  for (const seq of SEQUENTIAL_PATTERNS) {
    for (let i = 0; i <= seq.length - 4; i++) {
      if (lower.includes(seq.substring(i, i + 4))) return 'Lozinka ne smije sadržavati uzastopne znakove (npr. 1234, abcd).';
    }
  }

  // Check repeated chars (4+ same char)
  if (/(.)\1{3,}/.test(password)) return 'Lozinka ne smije sadržavati 4+ uzastopna ista znaka.';

  return null; // Valid
}

// Account lockout tracking
const loginAttempts: Map<string, { count: number; lockedUntil: number }> = new Map();

export function checkAccountLock(username: string): string | null {
  const entry = loginAttempts.get(username);
  if (!entry) return null;
  if (entry.lockedUntil > Date.now()) {
    const remaining = Math.ceil((entry.lockedUntil - Date.now()) / 60000);
    return `Račun je zaključan. Pokušajte ponovo za ${remaining} minuta.`;
  }
  if (entry.lockedUntil > 0 && entry.lockedUntil <= Date.now()) {
    loginAttempts.delete(username);
  }
  return null;
}

export function recordFailedLogin(username: string): void {
  const entry = loginAttempts.get(username) || { count: 0, lockedUntil: 0 };
  entry.count++;
  if (entry.count >= 6) {
    entry.lockedUntil = Date.now() + 60 * 60 * 1000; // 1 hour
    entry.count = 0;
  }
  loginAttempts.set(username, entry);
}

export function clearLoginAttempts(username: string): void {
  loginAttempts.delete(username);
}

async function ensureDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch { /* dir exists */ }
}

export async function getUsers(): Promise<User[]> {
  try {
    await ensureDir();
    const data = await readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    // Create default super admin from env
    const adminPassword = process.env.ADMIN_PASSWORD || 'adriaski2026';
    const defaultUsers: User[] = [{
      id: 'admin-1',
      username: 'admin',
      passwordHash: hashPassword(adminPassword),
      role: 'Super Admin',
      permissions: DEFAULT_PERMISSIONS['Super Admin'],
      createdAt: new Date().toISOString(),
    }];
    await saveUsers(defaultUsers);
    return defaultUsers;
  }
}

export async function saveUsers(users: User[]): Promise<void> {
  await ensureDir();
  await writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function authenticateUser(username: string, password: string): Promise<User | null> {
  // Check account lock
  const lockError = checkAccountLock(username);
  if (lockError) throw new Error(lockError);

  const users = await getUsers();
  const hash = hashPassword(password);
  const user = users.find(u => u.username === username && u.passwordHash === hash);
  if (user) {
    clearLoginAttempts(username);
    user.lastLogin = new Date().toISOString();
    await saveUsers(users);
    return user;
  }
  // Record failed attempt
  recordFailedLogin(username);
  return null;
}

export async function createUser(username: string, password: string, role: string, permissions: Permission): Promise<User> {
  const users = await getUsers();
  if (users.find(u => u.username === username)) {
    throw new Error('Korisničko ime već postoji.');
  }
  const pwError = validatePassword(password);
  if (pwError) throw new Error(pwError);
  const newUser: User = {
    id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
    username: username.trim().toLowerCase(),
    passwordHash: hashPassword(password),
    role,
    permissions,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  await saveUsers(users);
  return newUser;
}

export async function deleteUser(id: string): Promise<boolean> {
  const users = await getUsers();
  // Prevent deleting last super admin
  const superAdmins = users.filter(u => u.role === 'Super Admin');
  const userToDelete = users.find(u => u.id === id);
  if (userToDelete?.role === 'Super Admin' && superAdmins.length <= 1) {
    throw new Error('Nije moguće obrisati zadnjeg Super Admina.');
  }
  const filtered = users.filter(u => u.id !== id);
  if (filtered.length === users.length) return false;
  await saveUsers(filtered);
  return true;
}

export async function updateUserPermissions(id: string, role: string, permissions: Permission): Promise<User | null> {
  const users = await getUsers();
  const user = users.find(u => u.id === id);
  if (!user) return null;
  user.role = role;
  user.permissions = permissions;
  await saveUsers(users);
  return user;
}

export function getDefaultPermissions(): Record<string, Permission> {
  return DEFAULT_PERMISSIONS;
}

// hashPassword already exported at definition

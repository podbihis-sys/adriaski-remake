import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

export interface SiteSettings {
  piste_status: { open: boolean };
  cameras: Record<string, { name: string; url: string; active: boolean; visible: boolean }>;
}

const DEFAULT_SETTINGS: SiteSettings = {
  piste_status: { open: false },
  cameras: {
    adriaski: { name: "Hotel Adria Ski", url: "https://g0.ipcamlive.com/player/player.php?alias=adriaski", active: false, visible: true },
    sidrokamera: { name: "Sidro / Vučnica", url: "https://g0.ipcamlive.com/player/player.php?alias=sidrokamera", active: false, visible: true },
    tikvice: { name: "Motel Tikvice", url: "https://g0.ipcamlive.com/player/player.php?alias=tikvice", active: false, visible: true },
  },
};

async function ensureDir() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {}
}

export async function getSettings(): Promise<SiteSettings> {
  try {
    await ensureDir();
    const data = await readFile(SETTINGS_FILE, 'utf-8');
    return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function updateSettings(key: string, value: unknown): Promise<SiteSettings> {
  await ensureDir();
  const current = await getSettings();
  const updated = { ...current, [key]: value };
  await writeFile(SETTINGS_FILE, JSON.stringify(updated, null, 2));
  return updated;
}

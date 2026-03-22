import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');

interface PageView {
  path: string;
  count: number;
  label: string;
}

interface AnalyticsData {
  pageViews: PageView[];
  totalVisits: number;
  lastUpdated: string;
}

async function ensureDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch {}
}

const DEFAULT_DATA: AnalyticsData = {
  pageViews: [
    { path: "/", count: 0, label: "Pocetna" },
    { path: "/skijalista", count: 0, label: "Skijalista" },
    { path: "/kamera-live", count: 0, label: "Kamera live" },
    { path: "/cjenik", count: 0, label: "Cjenik" },
    { path: "/hotel-adria-ski", count: 0, label: "Hotel Adria Ski" },
    { path: "/kontakt", count: 0, label: "Kontakt" },
    { path: "/dogadanja", count: 0, label: "Dogadanja" },
    { path: "/bazen", count: 0, label: "Bazen" },
    { path: "/motel-tikvice", count: 0, label: "Motel Tikvice" },
    { path: "/restoran-ognjista", count: 0, label: "Restoran Ognjista" },
    { path: "/gastro-ponuda", count: 0, label: "Gastro ponuda" },
    { path: "/skola-skijanja", count: 0, label: "Skola skijanja" },
    { path: "/fitness", count: 0, label: "Fitness" },
    { path: "/svadbeni-salon", count: 0, label: "Svadbeni salon" },
    { path: "/sportske-pripreme", count: 0, label: "Sportske pripreme" },
    { path: "/seminari", count: 0, label: "Seminari" },
    { path: "/brdski-biciklizam", count: 0, label: "Brdski biciklizam" },
    { path: "/planinarenje", count: 0, label: "Planinarenje" },
    { path: "/ramsko-jezero", count: 0, label: "Ramsko jezero" },
    { path: "/jahanje", count: 0, label: "Jahanje" },
    { path: "/enduro-turizam", count: 0, label: "Enduro turizam" },
  ],
  totalVisits: 0,
  lastUpdated: new Date().toISOString(),
};

export async function getAnalytics(): Promise<AnalyticsData> {
  try {
    await ensureDir();
    const data = await readFile(ANALYTICS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    await saveAnalytics(DEFAULT_DATA);
    return DEFAULT_DATA;
  }
}

export async function trackPageView(pagePath: string): Promise<void> {
  const data = await getAnalytics();
  // Normalize path
  const normalized = pagePath === '' ? '/' : pagePath.replace(/\/$/, '') || '/';

  const existing = data.pageViews.find(p => p.path === normalized);
  if (existing) {
    existing.count++;
  } else {
    // Auto-create entry for new paths
    const label = normalized.replace(/^\//, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Pocetna';
    data.pageViews.push({ path: normalized, count: 1, label });
  }
  data.totalVisits++;
  data.lastUpdated = new Date().toISOString();
  await saveAnalytics(data);
}

async function saveAnalytics(data: AnalyticsData): Promise<void> {
  await ensureDir();
  await writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2));
}

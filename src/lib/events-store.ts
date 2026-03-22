import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { events as defaultEvents, Event } from './events';

const DATA_DIR = path.join(process.cwd(), 'data');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

export interface StoredEvent extends Event {
  id: string;
  created_at: string;
  updated_at: string;
}

async function ensureDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch {}
}

export async function getEvents(): Promise<StoredEvent[]> {
  try {
    await ensureDir();
    const data = await readFile(EVENTS_FILE, 'utf-8');
    const events: StoredEvent[] = JSON.parse(data);
    // Sort by date descending (parse dates)
    return events.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  } catch {
    // Initialize with default events
    const stored = defaultEvents.map((e, i) => ({
      ...e,
      id: `evt-${i}-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
    await saveAllEvents(stored);
    return stored;
  }
}

export async function saveAllEvents(events: StoredEvent[]): Promise<void> {
  await ensureDir();
  await writeFile(EVENTS_FILE, JSON.stringify(events, null, 2));
}

export async function addEvent(event: Omit<StoredEvent, 'id' | 'created_at' | 'updated_at'>): Promise<StoredEvent> {
  const events = await getEvents();
  const newEvent: StoredEvent = {
    ...event,
    id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  events.push(newEvent);
  await saveAllEvents(events);
  return newEvent;
}

export async function updateEvent(id: string, data: Partial<StoredEvent>): Promise<StoredEvent | null> {
  const events = await getEvents();
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return null;
  events[index] = { ...events[index], ...data, updated_at: new Date().toISOString() };
  await saveAllEvents(events);
  return events[index];
}

export async function deleteEvent(id: string): Promise<boolean> {
  const events = await getEvents();
  const filtered = events.filter(e => e.id !== id);
  if (filtered.length === events.length) return false;
  await saveAllEvents(filtered);
  return true;
}

function parseDate(dateStr: string): Date {
  // Parse dates like "30. prosinac 2025." or "5. kolovoz 2024."
  const months: Record<string, number> = {
    'siječanj': 0, 'veljača': 1, 'ožujak': 2, 'travanj': 3, 'svibanj': 4, 'lipanj': 5,
    'srpanj': 6, 'kolovoz': 7, 'rujan': 8, 'listopad': 9, 'studeni': 10, 'prosinac': 11,
  };
  const match = dateStr.match(/(\d+)\.\s*(\w+)\s*(\d{4})/);
  if (match) {
    const day = parseInt(match[1]);
    const monthName = match[2].toLowerCase().replace('.', '');
    const year = parseInt(match[3]);
    const month = months[monthName] ?? 0;
    return new Date(year, month, day);
  }
  return new Date(0);
}

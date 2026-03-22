import { readFile, writeFile, mkdir, readdir } from 'fs/promises';
import path from 'path';

const PAGES_DIR = path.join(process.cwd(), 'data', 'pages');

export interface PageSection {
  id: string;
  type: 'text' | 'image' | 'heading' | 'gallery';
  content: string;
  label: string;
}

export interface PageContent {
  slug: string;
  title: string;
  sections: PageSection[];
  updatedAt: string;
}

async function ensureDir() {
  try {
    await mkdir(PAGES_DIR, { recursive: true });
  } catch {}
}

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    await ensureDir();
    const filePath = path.join(PAGES_DIR, `${slug}.json`);
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data) as PageContent;
  } catch {
    return null;
  }
}

export async function savePageContent(slug: string, content: PageContent): Promise<void> {
  await ensureDir();
  const filePath = path.join(PAGES_DIR, `${slug}.json`);
  content.updatedAt = new Date().toISOString();
  await writeFile(filePath, JSON.stringify(content, null, 2));
}

export async function listPages(): Promise<{ slug: string; title: string; updatedAt: string }[]> {
  await ensureDir();
  try {
    const files = await readdir(PAGES_DIR);
    const pages: { slug: string; title: string; updatedAt: string }[] = [];

    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      try {
        const filePath = path.join(PAGES_DIR, file);
        const data = await readFile(filePath, 'utf-8');
        const content = JSON.parse(data) as PageContent;
        pages.push({
          slug: content.slug,
          title: content.title,
          updatedAt: content.updatedAt,
        });
      } catch {
        // skip invalid files
      }
    }

    return pages.sort((a, b) => a.title.localeCompare(b.title));
  } catch {
    return [];
  }
}

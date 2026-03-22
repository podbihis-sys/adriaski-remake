import { getRedis } from "./redis";

const PAGES_KEY = "adriaski:pages";

export interface PageSection {
  id: string;
  type: "text" | "image" | "heading" | "gallery";
  content: string;
  label: string;
}

export interface PageContent {
  slug: string;
  title: string;
  sections: PageSection[];
  updatedAt: string;
}

// Store all pages as a hash: adriaski:pages -> { slug: PageContent }

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    const redis = getRedis();
    const data = await redis.hget<PageContent>(PAGES_KEY, slug);
    return data || null;
  } catch {
    return null;
  }
}

export async function savePageContent(slug: string, content: PageContent): Promise<void> {
  const redis = getRedis();
  content.updatedAt = new Date().toISOString();
  await redis.hset(PAGES_KEY, { [slug]: content });
}

export async function listPages(): Promise<{ slug: string; title: string; updatedAt: string }[]> {
  try {
    const redis = getRedis();
    const all = await redis.hgetall<Record<string, PageContent>>(PAGES_KEY);
    if (!all) return [];

    return Object.values(all)
      .map((content) => ({
        slug: content.slug,
        title: content.title,
        updatedAt: content.updatedAt,
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  } catch {
    return [];
  }
}

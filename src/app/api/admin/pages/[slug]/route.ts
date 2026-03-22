import { NextRequest, NextResponse } from 'next/server';
import { validateAdminSession, validateOrigin } from '@/lib/admin-auth';
import { getPageContent, savePageContent, PageContent, PageSection } from '@/lib/page-store';

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!await validateAdminSession(request)) {
    return NextResponse.json({ error: 'Neautorizirano.' }, { status: 401 });
  }

  const { slug } = await params;

  // Validate slug format
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: 'Neispravan slug.' }, { status: 400 });
  }

  try {
    const content = await getPageContent(slug);
    if (!content) {
      return NextResponse.json({ error: 'Stranica nije pronađena.' }, { status: 404 });
    }
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: 'Greška pri dohvaćanju stranice.' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!validateOrigin(request)) {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  if (!await validateAdminSession(request)) {
    return NextResponse.json({ error: 'Neautorizirano.' }, { status: 401 });
  }

  const { slug } = await params;

  // Validate slug format
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: 'Neispravan slug.' }, { status: 400 });
  }

  try {
    const existing = await getPageContent(slug);
    if (!existing) {
      return NextResponse.json({ error: 'Stranica nije pronađena.' }, { status: 404 });
    }

    const body = await request.json();

    if (!body.sections || !Array.isArray(body.sections)) {
      return NextResponse.json({ error: 'Sekcije su obavezne.' }, { status: 400 });
    }

    // Sanitize sections
    const sanitizedSections: PageSection[] = body.sections.map((section: PageSection) => ({
      id: String(section.id || '').slice(0, 100),
      type: ['text', 'image', 'heading', 'gallery'].includes(section.type) ? section.type : 'text',
      content: section.type === 'image' || section.type === 'gallery'
        ? String(section.content || '').slice(0, 2000)
        : stripHtml(String(section.content || '')).slice(0, 10000),
      label: stripHtml(String(section.label || '')).slice(0, 200),
    }));

    const updatedContent: PageContent = {
      slug,
      title: existing.title,
      sections: sanitizedSections,
      updatedAt: new Date().toISOString(),
    };

    await savePageContent(slug, updatedContent);
    return NextResponse.json(updatedContent);
  } catch {
    return NextResponse.json({ error: 'Neispravan zahtjev.' }, { status: 400 });
  }
}

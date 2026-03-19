# Adria Ski – Premium Ski & Wellness Resort

Moderna web stranica za Hotel Adria Ski, Kupres, Bosna i Hercegovina.

## Tech Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Supabase (PostgreSQL), Next.js API Routes
- **Sigurnost:** RLS na svim tablicama, Zod validacija, Rate Limiting, Security Headers

## Setup

```bash
# 1. Instalirajte dependencies
npm install

# 2. Konfigurirajte environment varijable
cp .env.example .env.local
# Unesite Supabase URL i ključeve

# 3. Pokrenite SQL schema u Supabase
# Kopirajte sadržaj supabase/schema.sql u Supabase SQL Editor

# 4. Pokrenite development server
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

## Sigurnost
- Row Level Security (RLS) na svim Supabase tablicama
- Zod validacija i sanitizacija na svim formularima
- Rate Limiting na API endpointima (5 booking/h, 3 contact/h)
- Security Headers (X-Frame-Options, CSP, etc.)
- Nema API ključeva u kodu (.env.local only)

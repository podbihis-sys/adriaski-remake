-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Helper function for admin check
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (SELECT COALESCE(
    current_setting('request.jwt.claims', true)::json->>'role',
    ''
  ) = 'admin');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  telefon TEXT,
  reisedatum_von DATE NOT NULL,
  reisedatum_bis DATE NOT NULL,
  personen INTEGER NOT NULL CHECK (personen > 0 AND personen <= 50),
  paket TEXT,
  nachricht TEXT,
  status TEXT DEFAULT 'neu' CHECK (status IN ('neu', 'bestätigt', 'storniert')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies: anyone can insert, only admin can read/update/delete
CREATE POLICY "Öffentliche Buchungen erstellen" ON bookings
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admin kann Buchungen lesen" ON bookings
  FOR SELECT TO authenticated USING (is_admin());

CREATE POLICY "Admin kann Buchungen aktualisieren" ON bookings
  FOR UPDATE TO authenticated USING (is_admin());

CREATE POLICY "Admin kann Buchungen löschen" ON bookings
  FOR DELETE TO authenticated USING (is_admin());

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  nachricht TEXT NOT NULL CHECK (char_length(nachricht) <= 5000),
  gelesen BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Öffentliche Nachrichten erstellen" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admin kann Nachrichten lesen" ON contact_messages
  FOR SELECT TO authenticated USING (is_admin());

CREATE POLICY "Admin kann Nachrichten aktualisieren" ON contact_messages
  FOR UPDATE TO authenticated USING (is_admin());

CREATE POLICY "Admin kann Nachrichten löschen" ON contact_messages
  FOR DELETE TO authenticated USING (is_admin());

-- Packages table
CREATE TABLE IF NOT EXISTS packages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  beschreibung TEXT,
  preis NUMERIC CHECK (preis >= 0),
  dauer TEXT,
  highlights TEXT[],
  aktiv BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Öffentliche Pakete lesen" ON packages
  FOR SELECT TO anon, authenticated USING (aktiv = true);

CREATE POLICY "Admin kann Pakete erstellen" ON packages
  FOR INSERT TO authenticated WITH CHECK (is_admin());

CREATE POLICY "Admin kann Pakete aktualisieren" ON packages
  FOR UPDATE TO authenticated USING (is_admin());

CREATE POLICY "Admin kann Pakete löschen" ON packages
  FOR DELETE TO authenticated USING (is_admin());

-- Indexes
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_gelesen ON contact_messages(gelesen);
CREATE INDEX IF NOT EXISTS idx_packages_aktiv ON packages(aktiv);

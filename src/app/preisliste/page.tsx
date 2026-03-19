"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Data ───────────────────────────────────────────────────── */

const smjestaj = [
  { kat: "Jednokrevetna s doru\u010Dkom", km: "126,00", eur: "64,94" },
  { kat: "Dvokrevetna s doru\u010Dkom", km: "100,00", eur: "51,54" },
  { kat: "Jednokrevetna polupansion", km: "147,00", eur: "75,77" },
  { kat: "Dvokrevetna polupansion", km: "121,00", eur: "62,37" },
  { kat: "Jednokrevetna puni pansion", km: "167,00", eur: "86,08" },
  { kat: "Dvokrevetna puni pansion", km: "140,00", eur: "72,16" },
  { kat: "Apartman", km: "260,00", eur: "134,02" },
];

const sezonskiPaketi = [
  { razdoblje: "01.12. - 27.12.2025", km: "87,00", eur: "44,84" },
  { razdoblje: "27.12. - 03.01.2026", km: "114,00", eur: "58,76" },
  { razdoblje: "03.01. - 11.01.2026", km: "114,00", eur: "58,76" },
  { razdoblje: "11.01. - 01.04.2026", km: "96,00", eur: "49,48" },
  { razdoblje: "01.04. - 01.12.2026", km: "87,00", eur: "44,84" },
];

const popusti = [
  { opis: "Dijete do 4 godine", popust: "100% popust" },
  { opis: "Dijete 4-14 godina", popust: "40% popust" },
  { opis: "Osoba 14-99 godina", popust: "20% popust" },
];

const motelTikvice = [
  { tip: "Apartman (6 osoba)", cijena: "180,50 \u20AC/dan s doru\u010Dkom" },
  { tip: "Trokrevetna soba", cijena: "51,54 \u20AC/osoba s doru\u010Dkom" },
  { tip: "Dvokrevetna soba", cijena: "51,54 \u20AC/osoba s doru\u010Dkom" },
];

const skiKarte = [
  { trajanje: "Pojedina\u010Dna vo\u017Enja", oKm: "5", oEur: "-", dKm: "5", dEur: "-" },
  { trajanje: "Dnevna", oKm: "44", oEur: "23", dKm: "32", dEur: "16,50" },
  { trajanje: "Poludnevna (od 13h)", oKm: "32", oEur: "16,50", dKm: "26", dEur: "13,50" },
  { trajanje: "2 dana", oKm: "75", oEur: "38,50", dKm: "55", dEur: "28,50" },
  { trajanje: "3 dana", oKm: "112", oEur: "57,50", dKm: "80", dEur: "41" },
  { trajanje: "4 dana", oKm: "150", oEur: "77,50", dKm: "105", dEur: "54,50" },
  { trajanje: "5 dana", oKm: "187", oEur: "96,50", dKm: "130", dEur: "67" },
  { trajanje: "6 dana", oKm: "230", oEur: "118,50", dKm: "158", dEur: "81,50" },
  { trajanje: "7 dana", oKm: "262", oEur: "135", dKm: "185", dEur: "95,50" },
  { trajanje: "Sezonska", oKm: "650", oEur: "336", dKm: "420", dEur: "217" },
];

const skiOprema = [
  { trajanje: "1 dan", oKm: "22", oEur: "11,50", dKm: "16,50", dEur: "8,50" },
  { trajanje: "2 dana", oKm: "39,60", oEur: "20,50", dKm: "27,50", dEur: "14" },
  { trajanje: "3 dana", oKm: "55", oEur: "28,50", dKm: "38,50", dEur: "20" },
  { trajanje: "6 dana", oKm: "88", oEur: "45,50", dKm: "66", dEur: "34" },
];

const skolaSkijanja = [
  { tip: "Grupna nastava (7-10 polaznika)", trajanje: "1 dan", cijena: "31 \u20AC" },
  { tip: "", trajanje: "2 dana", cijena: "57 \u20AC" },
  { tip: "", trajanje: "3 dana", cijena: "82,50 \u20AC" },
  { tip: "", trajanje: "4 dana", cijena: "98 \u20AC" },
  { tip: "", trajanje: "5 dana", cijena: "113,50 \u20AC" },
  { tip: "Privatni sat", trajanje: "60 min (1:1)", cijena: "30 \u20AC" },
];

const boravisnaPristojba = [
  { opis: "Djeca do 12 godina", cijena: "besplatno" },
  { opis: "12-26 godina", cijena: "1 \u20AC/dan" },
  { opis: "Iznad 26 godina", cijena: "2 \u20AC/dan" },
];

/* ─── Helpers ────────────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeInUp}
      className="font-heading text-3xl md:text-4xl text-[#0F172A] mb-8"
    >
      {children}
    </motion.h2>
  );
}

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl overflow-hidden shadow-lg border-l-4 border-[#F59E0B] mb-16"
    >
      <div className="overflow-x-auto">{children}</div>
    </motion.div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-4 text-left font-accent uppercase tracking-wide text-sm">
      {children}
    </th>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PreislistePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-[#0F172A] via-[#1B3A6B] to-[#1B3A6B]/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-accent tracking-widest text-[#F59E0B] text-sm uppercase mb-4"
          >
            CJENIK
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-white mb-6"
          >
            Cjenik 2025/26
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Sezona 2025/26
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          {/* ── Smje\u0161taj ────────────────────────────────────────── */}
          <SectionTitle>Cijene smje&scaron;taja</SectionTitle>
          <motion.p variants={fadeInUp} className="text-gray-500 text-sm mb-4 -mt-4">
            (po osobi)
          </motion.p>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Kategorija</Th>
                  <Th>KM</Th>
                  <Th>EUR</Th>
                </tr>
              </thead>
              <tbody>
                {smjestaj.map((r, i) => (
                  <tr
                    key={r.kat}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">{r.kat}</td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.km}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.eur}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-500 -mt-10 mb-16 italic"
          >
            U cijenu uklju&ccaron;eno: sauna, bazen, fitness, stolni tenis
          </motion.p>

          {/* ── Sezonski paketi ──────────────────────────────────── */}
          <SectionTitle>Sezonski paketi</SectionTitle>
          <motion.p variants={fadeInUp} className="text-gray-500 text-sm mb-4 -mt-4">
            (5-7 dana, dvokrevetna, polupansion)
          </motion.p>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Razdoblje</Th>
                  <Th>KM</Th>
                  <Th>EUR</Th>
                </tr>
              </thead>
              <tbody>
                {sezonskiPaketi.map((r, i) => (
                  <tr
                    key={r.razdoblje}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">
                      {r.razdoblje}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.km}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.eur}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          {/* ── Popusti za djecu ─────────────────────────────────── */}
          <SectionTitle>Popusti za djecu</SectionTitle>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Opis</Th>
                  <Th>Popust</Th>
                </tr>
              </thead>
              <tbody>
                {popusti.map((r, i) => (
                  <tr
                    key={r.opis}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">{r.opis}</td>
                    <td className="px-6 py-3.5 font-semibold text-[#F59E0B]">
                      {r.popust}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          {/* ── Motel Tikvice ────────────────────────────────────── */}
          <SectionTitle>Motel Tikvice</SectionTitle>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Tip</Th>
                  <Th>Cijena</Th>
                </tr>
              </thead>
              <tbody>
                {motelTikvice.map((r, i) => (
                  <tr
                    key={r.tip}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">{r.tip}</td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.cijena}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          {/* ── Ski karte ────────────────────────────────────────── */}
          <SectionTitle>Ski karte</SectionTitle>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Trajanje</Th>
                  <Th>Odrasli KM</Th>
                  <Th>Odrasli EUR</Th>
                  <Th>Djeca KM</Th>
                  <Th>Djeca EUR</Th>
                </tr>
              </thead>
              <tbody>
                {skiKarte.map((r, i) => (
                  <tr
                    key={r.trajanje}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">
                      {r.trajanje}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.oKm}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.oEur}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.dKm}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.dEur}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-500 -mt-10 mb-16 italic"
          >
            Instruktor: 450 KM / 232,50 EUR
          </motion.p>

          {/* ── Iznajmljivanje ski opreme ─────────────────────── */}
          <SectionTitle>Iznajmljivanje ski opreme</SectionTitle>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Trajanje</Th>
                  <Th>Odrasli KM / EUR</Th>
                  <Th>Djeca KM / EUR</Th>
                </tr>
              </thead>
              <tbody>
                {skiOprema.map((r, i) => (
                  <tr
                    key={r.trajanje}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">
                      {r.trajanje}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.oKm} / {r.oEur}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.dKm} / {r.dEur}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          {/* ── \u0160kola skijanja ──────────────────────────────────── */}
          <SectionTitle>&Scaron;kola skijanja</SectionTitle>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Tip</Th>
                  <Th>Trajanje</Th>
                  <Th>Cijena</Th>
                </tr>
              </thead>
              <tbody>
                {skolaSkijanja.map((r, i) => (
                  <tr
                    key={`${r.tip}-${r.trajanje}`}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">{r.tip}</td>
                    <td className="px-6 py-3.5 text-[#0F172A]">
                      {r.trajanje}
                    </td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.cijena}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          {/* ── Boravi\u0161na pristojba ──────────────────────────────── */}
          <SectionTitle>Boravi&scaron;na pristojba</SectionTitle>
          <TableWrapper>
            <table className="w-full text-left">
              <thead className="bg-[#1B3A6B] text-white">
                <tr>
                  <Th>Opis</Th>
                  <Th>Cijena</Th>
                </tr>
              </thead>
              <tbody>
                {boravisnaPristojba.map((r, i) => (
                  <tr
                    key={r.opis}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F59E0B]/5 transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[#0F172A]">{r.opis}</td>
                    <td className="px-6 py-3.5 font-semibold text-[#0F172A]">
                      {r.cijena}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1B3A6B] to-[#1B3A6B]/80"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-white mb-4">
            Rezervirajte sada
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Kontaktirajte nas za rezervaciju ili dodatne informacije
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#0F172A] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#F59E0B]/25 hover:shadow-xl"
          >
            Rezervirajte sada
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

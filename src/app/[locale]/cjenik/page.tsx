"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bed, Mountain, Wrench, Home } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function PriceTable({ headers, rows, className = "" }: { headers: string[]; rows: (string | React.ReactNode)[][]; className?: string }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <thead>
          <tr className="bg-gradient-to-r from-[#163c6f] to-[#23507a]">
            {headers.map((h, i) => (
              <th key={h} className={`py-4 px-5 text-white text-sm font-semibold ${i === 0 ? "text-left" : "text-right"}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[#163c6f]/5 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`py-3 px-5 text-sm ${j === 0 ? "text-[#3d3d3d]" : "text-right font-medium text-[#163c6f]"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Cjenik() {
  const t = useTranslations("pricing");
  const tc = useTranslations("common");
  const locale = useLocale();

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] min-h-[280px] md:h-[45vh] overflow-hidden">
        <Image src="/images/headerHotel.jpg" alt="Cjenik" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("title")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("subtitle")}</h1>
              <p className="mt-3 text-lg text-white/70">{t("season")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NAV TABS ===== */}
      <section className="bg-white sticky top-0 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {[
              { icon: Bed, label: t("accommodation"), href: "#smjestaj" },
              { icon: Mountain, label: t("ski_resort"), href: "#skijaliste" },
              { icon: Wrench, label: t("equipment"), href: "#oprema" },
              { icon: Home, label: t("tikvice"), href: "#tikvice" },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <a key={tab.label} href={tab.href} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#163c6f] hover:bg-[#163c6f]/5 transition-colors whitespace-nowrap">
                  <Icon className="w-4 h-4" /> {tab.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SMJEŠTAJ ===== */}
      <section id="smjestaj" className="py-16 bg-[#f2f3f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("accommodation")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{t("season")}</h2>
            <p className="mt-2 text-gray-500 text-sm">Pansionske usluge – Cjene po osobi (višekrevetna soba sa TV, telefon, WC)</p>
          </motion.div>

          <PriceTable
            headers={["Usluga", "KM", "EUR"]}
            rows={[
              ["Noćenje s doručkom u 1/1 sobi", "126,00", "64,94"],
              ["Noćenje s doručkom u 1/2 sobi", "100,00", "51,54"],
              ["Polupansion u 1/1 sobi", "147,00", "75,77"],
              ["Polupansion u 1/2 sobi", "121,00", "62,37"],
              ["Puni pansion u 1/1 sobi", "167,00", "86,08"],
              ["Puni pansion u 1/2 sobi", "140,00", "72,16"],
              ["Noćenje u apartmanu", "260,00", "134,02"],
            ]}
          />

          <h3 className="text-xl font-heading font-bold text-[#163c6f] mt-12 mb-4">Nadoplata za obroke u apartmanu</h3>
          <PriceTable
            headers={["Obrok", "KM", "EUR"]}
            rows={[
              ["Doručak", "15,00", "7,74"],
              ["Ručak", "25,00", "12,89"],
              ["Večera", "25,00", "12,89"],
              ["Puni pansion nadoplata", "25,00", "12,89"],
            ]}
          />
          <p className="text-gray-500 text-sm mt-3 italic">Uključeno: sauna, bazen, teretana, stoni tenis</p>

          <h3 className="text-xl font-heading font-bold text-[#163c6f] mt-12 mb-4">Polupansioni (5-7 dana, 1/2 soba po osobi)</h3>
          <PriceTable
            headers={["Period", "KM", "EUR"]}
            rows={[
              ["01.12.25 – 27.12.25", "87,00", "44,84"],
              ["27.12.25 – 03.01.26 *", "114,00", "58,76"],
              ["03.01.26 – 11.01.26", "114,00", "58,76"],
              ["11.01.26 – 01.04.26", "96,00", "49,48"],
              ["01.04.26 – 01.12.26", "87,00", "44,84"],
            ]}
          />
          <p className="text-gray-500 text-sm mt-3">* Novogodišnja nadoplata sa svečanom večerom: 120,00 KM (61,85 EUR) odrasli; djeca 6-14 godina 40% popusta</p>

          {/* Popusti */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg font-bold text-[#163c6f] mb-4">Popusti na treći/četvrti krevet</h3>
              <div className="space-y-2 text-sm text-[#3d3d3d]">
                <div className="flex justify-between"><span>Do 4 godine</span><span className="font-bold text-green-600">100%</span></div>
                <div className="flex justify-between"><span>4-14 godina</span><span className="font-bold text-[#163c6f]">40%</span></div>
                <div className="flex justify-between"><span>14-99 godina</span><span className="font-bold text-[#163c6f]">20%</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg font-bold text-[#163c6f] mb-4">Boravišna pristojba</h3>
              <div className="space-y-2 text-sm text-[#3d3d3d]">
                <div className="flex justify-between"><span>Do 12 godina</span><span className="font-bold text-green-600">Besplatno</span></div>
                <div className="flex justify-between"><span>12-26 godina</span><span className="font-bold text-[#163c6f]">1,00 KM/dan</span></div>
                <div className="flex justify-between"><span>Preko 26 godina</span><span className="font-bold text-[#163c6f]">2,00 KM/dan</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIKVICE ===== */}
      <section id="tikvice" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Na vrhu staza</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">Motel Tikvice</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl p-6 text-white">
              <h3 className="font-heading text-lg font-bold mb-2">Apartmani sa kuhinjom</h3>
              <p className="text-white/60 text-sm mb-3">Do 6 osoba</p>
              <p className="text-3xl font-heading font-bold text-[#00c0f7]">180,50 <span className="text-lg text-white/60">€/dan</span></p>
              <p className="text-white/50 text-xs mt-1">+ doručak</p>
            </div>
            <div className="bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl p-6 text-white">
              <h3 className="font-heading text-lg font-bold mb-2">Sobe</h3>
              <p className="text-white/60 text-sm mb-3">Dvokrevetna / Trokrevetna</p>
              <p className="text-3xl font-heading font-bold text-[#00c0f7]">51,54 <span className="text-lg text-white/60">€/osoba</span></p>
              <p className="text-white/50 text-xs mt-1">Noćenje s doručkom</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKIJALIŠTE ===== */}
      <section id="skijaliste" className="py-16 bg-[#f2f3f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Ski karte</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">Cjenik skijališta</h2>
          </motion.div>
          <PriceTable
            headers={["Ski karta", "Odrasli", "Djeca do 14"]}
            rows={[
              ["Jedna vožnja", "5 KM", "5 KM"],
              ["Dnevna", "44 KM / 23 €", "32 KM / 16,50 €"],
              ["Poludnevna (od 13h)", "32 KM / 16,50 €", "26 KM / 13,50 €"],
              ["2 dana", "75 KM / 38,50 €", "55 KM / 28,50 €"],
              ["3 dana", "112 KM / 57,50 €", "80 KM / 41 €"],
              ["4 dana", "150 KM / 77,50 €", "105 KM / 54,50 €"],
              ["5 dana", "187 KM / 96,50 €", "130 KM / 67 €"],
              ["6 dana", "230 KM / 118,50 €", "158 KM / 81,50 €"],
              ["7 dana", "262 KM / 135 €", "185 KM / 95,50 €"],
              ["Sezonska", "650 KM / 336 €", "420 KM / 217 €"],
              ["Ski učitelj/Trener", "450 KM / 232,50 €", "–"],
              ["Natjecatelji", "480 KM / 248 €", "–"],
            ]}
          />
        </div>
      </section>

      {/* ===== OPREMA ===== */}
      <section id="oprema" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Najam</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">Iznajmljivanje ski opreme</h2>
          </motion.div>
          <PriceTable
            headers={["Period", "Odrasli", "Djeca"]}
            rows={[
              ["Dnevno (9-16:30)", "22 KM / 11,50 €", "16,50 KM / 8,50 €"],
              ["2 dana", "39,60 KM / 20,50 €", "27,50 KM / 14 €"],
              ["3 dana", "55 KM / 28,50 €", "38,50 KM / 20 €"],
              ["6 dana", "88 KM / 45,50 €", "66 KM / 34 €"],
            ]}
          />
          <p className="text-gray-500 text-sm mt-3 italic">Kompletna oprema: skije, pancerice, štapovi</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-[#163c6f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Rezervirajte sada</h2>
            <p className="text-white/60 mb-8">Kontaktirajte nas za posebne ponude i grupne popuste</p>
            <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
              {tc("contact_us")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

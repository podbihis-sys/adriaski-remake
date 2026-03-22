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
            <p className="mt-2 text-gray-500 text-sm">{t("board_services")}</p>
          </motion.div>

          <PriceTable
            headers={[t("service"), "KM", "EUR"]}
            rows={[
              [t("night_breakfast_single"), "126,00", "64,94"],
              [t("night_breakfast_double"), "100,00", "51,54"],
              [t("half_board_single"), "147,00", "75,77"],
              [t("half_board_double"), "121,00", "62,37"],
              [t("full_board_single"), "167,00", "86,08"],
              [t("full_board_double"), "140,00", "72,16"],
              [t("night_apartment"), "260,00", "134,02"],
            ]}
          />

          <h3 className="text-xl font-heading font-bold text-[#163c6f] mt-12 mb-4">{t("meal_surcharge")}</h3>
          <PriceTable
            headers={[t("meal"), "KM", "EUR"]}
            rows={[
              [t("breakfast"), "15,00", "7,74"],
              [t("lunch"), "25,00", "12,89"],
              [t("dinner"), "25,00", "12,89"],
              [t("full_board_surcharge"), "25,00", "12,89"],
            ]}
          />
          <p className="text-gray-500 text-sm mt-3 italic">{t("included_note")}</p>

          <h3 className="text-xl font-heading font-bold text-[#163c6f] mt-12 mb-4">{t("half_board_periods")}</h3>
          <PriceTable
            headers={[t("period"), "KM", "EUR"]}
            rows={[
              ["01.12.25 – 27.12.25", "87,00", "44,84"],
              ["27.12.25 – 03.01.26 *", "114,00", "58,76"],
              ["03.01.26 – 11.01.26", "114,00", "58,76"],
              ["11.01.26 – 01.04.26", "96,00", "49,48"],
              ["01.04.26 – 01.12.26", "87,00", "44,84"],
            ]}
          />
          <p className="text-gray-500 text-sm mt-3">* {t("nye_note")}</p>

          {/* Popusti */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg font-bold text-[#163c6f] mb-4">{t("discount_bed_title")}</h3>
              <div className="space-y-2 text-sm text-[#3d3d3d]">
                <div className="flex justify-between"><span>{t("up_to_4_years")}</span><span className="font-bold text-green-600">100%</span></div>
                <div className="flex justify-between"><span>{t("4_to_14_years")}</span><span className="font-bold text-[#163c6f]">40%</span></div>
                <div className="flex justify-between"><span>{t("14_to_99_years")}</span><span className="font-bold text-[#163c6f]">20%</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg font-bold text-[#163c6f] mb-4">{t("tourist_tax_title")}</h3>
              <div className="space-y-2 text-sm text-[#3d3d3d]">
                <div className="flex justify-between"><span>{t("up_to_12_years")}</span><span className="font-bold text-green-600">{t("free")}</span></div>
                <div className="flex justify-between"><span>{t("12_to_26_years")}</span><span className="font-bold text-[#163c6f]">1,00 {t("per_day")}</span></div>
                <div className="flex justify-between"><span>{t("over_26_years")}</span><span className="font-bold text-[#163c6f]">2,00 {t("per_day")}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIKVICE ===== */}
      <section id="tikvice" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("tikvice_label")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{t("tikvice")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl p-6 text-white">
              <h3 className="font-heading text-lg font-bold mb-2">{t("tikvice_apartments")}</h3>
              <p className="text-white/60 text-sm mb-3">{t("tikvice_up_to_6")}</p>
              <p className="text-3xl font-heading font-bold text-[#00c0f7]">180,50 <span className="text-lg text-white/60">€/dan</span></p>
              <p className="text-white/50 text-xs mt-1">{t("tikvice_plus_breakfast")}</p>
            </div>
            <div className="bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl p-6 text-white">
              <h3 className="font-heading text-lg font-bold mb-2">{t("tikvice_rooms")}</h3>
              <p className="text-white/60 text-sm mb-3">{t("tikvice_rooms_type")}</p>
              <p className="text-3xl font-heading font-bold text-[#00c0f7]">51,54 <span className="text-lg text-white/60">€/osoba</span></p>
              <p className="text-white/50 text-xs mt-1">{t("tikvice_night_breakfast")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKIJALIŠTE ===== */}
      <section id="skijaliste" className="py-16 bg-[#f2f3f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("ski_cards_label")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{t("ski_pricing_heading")}</h2>
          </motion.div>
          <PriceTable
            headers={[t("ski_card"), t("adults"), t("children_14")]}
            rows={[
              [t("single_ride"), "5 KM", "5 KM"],
              [t("daily"), "44 KM / 23 €", "32 KM / 16,50 €"],
              [t("half_day"), "32 KM / 16,50 €", "26 KM / 13,50 €"],
              [t("two_days"), "75 KM / 38,50 €", "55 KM / 28,50 €"],
              [t("three_days"), "112 KM / 57,50 €", "80 KM / 41 €"],
              [t("four_days"), "150 KM / 77,50 €", "105 KM / 54,50 €"],
              [t("five_days"), "187 KM / 96,50 €", "130 KM / 67 €"],
              [t("six_days"), "230 KM / 118,50 €", "158 KM / 81,50 €"],
              [t("seven_days"), "262 KM / 135 €", "185 KM / 95,50 €"],
              [t("seasonal"), "650 KM / 336 €", "420 KM / 217 €"],
              [t("ski_teacher"), "450 KM / 232,50 €", "–"],
              [t("competitors"), "480 KM / 248 €", "–"],
            ]}
          />
        </div>
      </section>

      {/* ===== OPREMA ===== */}
      <section id="oprema" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("rental_label")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{t("rental_heading")}</h2>
          </motion.div>
          <PriceTable
            headers={[t("period"), t("adults"), t("children_14")]}
            rows={[
              [t("rental_daily"), "22 KM / 11,50 €", "16,50 KM / 8,50 €"],
              [t("two_days"), "39,60 KM / 20,50 €", "27,50 KM / 14 €"],
              [t("three_days"), "55 KM / 28,50 €", "38,50 KM / 20 €"],
              [t("six_days"), "88 KM / 45,50 €", "66 KM / 34 €"],
            ]}
          />
          <p className="text-gray-500 text-sm mt-3 italic">{t("rental_equipment_note")}</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-[#163c6f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{t("cta_heading")}</h2>
            <p className="text-white/60 mb-8">{t("cta_subtitle")}</p>
            <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
              {tc("contact_us")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

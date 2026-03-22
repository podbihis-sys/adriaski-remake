"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Footprints, Mountain, Clock, Ruler, MapPin, TrendingUp } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const routes = [
  {
    name: "Hotel \"Adria ski\" – Tikvice",
    duration: "5-6 sati",
    departure: "09:00 h",
    distance: "4,0 km",
    altitude: "1550 m",
    description:
      "Staza dugačka 4 km vodi kroz šumu do vrha Tikvica (1550 m), sa ručkom u prirodi. Sa Tikvica puca prekrasan pogled na Livanjsku, Glamočku regiju, Cincar, Stožer, Plazenicu i hercegovačke vrhove. Opcija za dodatnu šetnju do Jrama (1658 m) sa dodatnih 14 km pješačenja.",
  },
  {
    name: "\"Pločata vrila-Vran\"",
    duration: "40 minuta uspon",
    departure: "09:00 h",
    distance: "5 km",
    altitude: "1758 m",
    description:
      "Polazak u 09:00 h do Kupreške kuće. 40-minutni strmi uspon s mnogo stepenica do pločatih vrila na 1550 m nadmorske visine. Zatim prema vrhu Vrana (1758 m) s panoramskim pogledom. Ukupna dužina 5 km, sa alternativnom rutom od 3,5 km kroz bukovu šumu do Škrilja (1530 m).",
  },
  {
    name: "Hotel \"Adria ski\" – Veliki Malovan",
    duration: "4 sata",
    departure: "09:00 h",
    distance: "7 km",
    altitude: "1826 m",
    description:
      "Mješavina makadamskog puta i šumskih staza do Velikog Malovana (1826 m) sa ručkom u prirodi i panoramskim pogledom. Opcija spuštanja preko Donjeg Malovana ili povratak istim putem. Alternativna strmija ruta iz Donjeg Malovana (3 km, 3 sata).",
  },
];

const galleryImages = [
  { src: "/images/planinarenjeStozer-1.jpg", alt: "Planinarenje Stožer 1" },
  { src: "/images/planinarenjeStozer-3.jpg", alt: "Planinarenje Stožer 3" },
  { src: "/images/planinarenjeStozer-4.jpg", alt: "Planinarenje Stožer 4" },
  { src: "/images/planinarenjeStozer-5.jpg", alt: "Planinarenje Stožer 5" },
  { src: "/images/planinarenjeStozer-6.jpg", alt: "Planinarenje Stožer 6" },
  { src: "/images/planinarenjeStozer-7.jpg", alt: "Planinarenje Stožer 7" },
  { src: "/images/planinarenjeStozer-8.jpg", alt: "Planinarenje Stožer 8" },
];

export default function Planinarenje() {
  const t = useTranslations("hiking");
  const tc = useTranslations("common");
  const tn = useTranslations("nav");
  const locale = useLocale();
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerPlaninarenje.jpg" alt="Planinarenje" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-emerald-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("hero_label")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("title")}</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">&quot;{t("hero_desc")}&quot;</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, value: "3", label: t("highlight_routes") },
              { icon: Mountain, value: "1.826m", label: t("highlight_max_alt") },
              { icon: Clock, value: "3 dana", label: t("highlight_program") },
              { icon: Footprints, value: t("guides_value"), label: t("highlight_guides") },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 mb-2">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#163c6f]">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PROGRAM ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/images/planinarenjeStozer-1.jpg" alt="Planinarenje Stožer" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-emerald-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <MapPin className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">3 {t("highlight_routes").toLowerCase()}</p>
              </div>
            </motion.div>

            {/* Program */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-emerald-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("program_label")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">{t("program_heading")}</h2>

              <div className="space-y-5">
                {/* Dan 1 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D1</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">{t("day1_title")}</h3>
                  </div>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">
                    {t("day1_desc")}
                  </p>
                </div>

                {/* Dan 2 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D2</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">{t("day2_title")}</h3>
                  </div>
                  <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                    <p><span className="font-semibold">08:00 – 09:00 h</span> {t("day2_breakfast")}</p>
                    <p><span className="font-semibold">09:00 – 13:00 h</span> {t("day2_options")}</p>
                    <p><span className="font-semibold">13:00 – 14:30 h</span> {t("day2_lunch")}</p>
                    <p><span className="font-semibold">15:00 – 18:00 h</span> {t("day2_free")}</p>
                    <p><span className="font-semibold">19:00 – 20:30 h</span> {t("day2_dinner")}</p>
                    <p><span className="font-semibold">20.30 h –</span> {t("day2_entertainment")}</p>
                  </div>
                </div>

                {/* Dan 3 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D3</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">{t("day3_title")}</h3>
                  </div>
                  <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                    <p><span className="font-semibold">08:00 – 09:00 h</span> – {t("day3_breakfast")}</p>
                    <p className="font-semibold">{t("day3_departure")}</p>
                  </div>
                </div>

                {/* Prijevoz */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <h3 className="font-heading font-bold text-emerald-700 mb-1">{t("transport_title")}</h3>
                  <p className="text-[#3d3d3d] text-sm">{t("transport_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ROUTES ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-emerald-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("routes_label")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{t("routes_heading")}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {routes.map((route, i) => (
              <motion.div
                key={route.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#163c6f] to-[#23507a] px-5 py-4">
                  <h3 className="text-sm font-bold text-white">{t("route_walking")} {route.name}</h3>
                </div>
                {/* Stats */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">{t("route_duration")}</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">{t("route_departure")}</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.departure}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">{t("route_distance")}</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">{t("route_altitude")}</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.altitude}</p>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div className="px-5 pb-5">
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">{route.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-emerald-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("photos")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("gallery")}</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerPlaninarenje.jpg" alt="Planinarenje" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{t("cta_heading")}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{t("cta_subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                {tc("reserve")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`/${locale}/brdski-biciklizam`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                {tn("cycling")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Dumbbell, Waves, TreePine, Trophy, Users } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = [
  { src: "/images/20170701_094613.jpg", alt: "Sportski tereni 1" },
  { src: "/images/20170701_094605.jpg", alt: "Sportski tereni 2" },
  { src: "/images/20170619_174347.jpg", alt: "Sportski tereni 3" },
  { src: "/images/20170619_174336.jpg", alt: "Sportski tereni 4" },
  { src: "/images/20170619_174331.jpg", alt: "Sportski tereni 5" },
  { src: "/images/20170701_094613-1.jpg", alt: "Sportski tereni 6" },
  { src: "/images/20170701_094605-1.jpg", alt: "Sportski tereni 7" },
  { src: "/images/20170619_174347-1.jpg", alt: "Sportski tereni 8" },
  { src: "/images/20170619_174336-1.jpg", alt: "Sportski tereni 9" },
];

export default function SportskePripremePage() {
  const t = useTranslations("sports");
  const tc = useTranslations("common");
  const locale = useLocale();

  const highlights = [
    { icon: Mountain, label: t("highlight_altitude") },
    { icon: TreePine, label: t("highlight_air") },
    { icon: Dumbbell, label: t("highlight_fitness") },
    { icon: Waves, label: t("highlight_pool") },
    { icon: Trophy, label: t("highlight_field") },
    { icon: Users, label: t("highlight_athletes") },
  ];

  const sportCategories = [
    {
      sport: t("football"),
      clubs: "FC INGOLSTADT, ZAGREB, ŽELJEZNIČAR, CROATIA SESVETE, HRVATSKI DRAGOVOLJAC, ŠIROKI BRIJEG, LUČKO, SPLIT, ZRINJSKI, POSUŠJE, OLIMPIK, JUNAK, MOSOR, SLAVEN BELUPO, SARAJEVO, DUGOPOLJE, ŠIBENIK, TROGIR, GOŠK-GABELA, SOLIN, HAJDUK",
      color: "bg-green-500",
    },
    {
      sport: t("basketball"),
      clubs: "ŠIROKI, TROGIR, GRUDE",
      color: "bg-orange-500",
    },
    {
      sport: t("handball"),
      clubs: "IZVIĐAČ, LJUBUŠKI, SOKOLOVI-IMOTSKI, ZAGORJE, KOTEX, GRUDE",
      color: "bg-blue-500",
    },
    {
      sport: t("swimming"),
      clubs: "ŠIBENIK, SARAJEVO, JADERA, JADRAN, MORNAR",
      color: "bg-cyan-500",
    },
    {
      sport: t("martial_arts"),
      clubs: "HRVATSKI KARATE SAVEZ, Karate klub LJUBUŠKI, ZRINJSKI, TEAKWANDO SAVEZ BIH",
      color: "bg-red-500",
    },
    {
      sport: t("bowling"),
      clubs: "MERTOJAK",
      color: "bg-purple-500",
    },
  ];

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerPripreme.jpg"
          alt="Sportske pripreme"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-green-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                {t("hero_label")}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                {t("title")}
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                {t("hero_desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS BAR ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 mb-2">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PLANINSKI ZRAK ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/images/20170701_094613.jpg" alt="Sportski tereni" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-green-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Mountain className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">{t("altitude_label")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-green-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                {t("conditions_label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                {t("conditions_heading")}
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>{t("conditions_desc")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SPORTSKI KLUBOVI ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-green-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {t("clubs_label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {t("clubs_heading")}
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              {t("clubs_subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sportCategories.map((cat, i) => (
              <motion.div
                key={cat.sport}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-3 h-3 rounded-full ${cat.color} flex-shrink-0`} />
                  <h3 className="font-heading font-bold text-[#163c6f]">{cat.sport}</h3>
                </div>
                <p className="text-sm text-[#3d3d3d]/70 leading-relaxed">{cat.clubs}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UGOVORI ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-green-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                {t("contracts_label")}
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#163c6f] mb-6">
                {t("contracts_heading")}
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>{t("contracts_p1")}</p>
                <p>{t("contracts_p2")}</p>
                <p>{t("contracts_p3")}</p>
                <p>{t("contracts_p4")}</p>
                <p>{t("contracts_p5")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/oOf_ASa5yD0?rel=0"
                  title="Sportski tereni Kupres"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-green-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {tc("photos")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {tc("gallery")}
            </h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerPripreme.jpg" alt="Sportske pripreme" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t("cta_heading")}
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              {t("cta_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/kontakt`}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {tc("contact_us")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/fitness`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {t("cta_fitness")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

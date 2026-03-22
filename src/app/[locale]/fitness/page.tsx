"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Users, Target, Heart } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = [
  { src: "/images/fitness-1.jpg", alt: "Fitness 1" },
  { src: "/images/fitness-2.jpg", alt: "Fitness 2" },
  { src: "/images/fitness-3.jpg", alt: "Fitness 3" },
  { src: "/images/fitness-4.jpg", alt: "Fitness 4" },
];

export default function FitnessPage() {
  const t = useTranslations("fitness_page");
  const tc = useTranslations("common");
  const locale = useLocale();

  const highlights = [
    { icon: Dumbbell, label: t("highlight_equipment") },
    { icon: Users, label: t("highlight_group") },
    { icon: Target, label: t("highlight_personal") },
    { icon: Heart, label: t("highlight_levels") },
  ];

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerFitness.jpg" alt="Fitness" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-orange-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("hero_label")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("title")}</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">{t("hero_desc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 mb-2">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
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
                <Image src="/images/fitness-1.jpg" alt="Fitness centar" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-orange-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Dumbbell className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">{t("machines_label")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("section_label")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">{t("section_heading")}</h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>{t("desc_p1")}</p>
                <p>{t("desc_p2")}</p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href={`/${locale}/bazen`} className="inline-flex items-center gap-2 text-sm text-cyan-600 font-semibold hover:gap-3 transition-all duration-300">
                  {t("link_pool")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`/${locale}/sportske-pripreme`} className="inline-flex items-center gap-2 text-sm text-green-600 font-semibold hover:gap-3 transition-all duration-300">
                  {t("link_sports")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-orange-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("photos")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("gallery")}</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerFitness.jpg" alt="Fitness" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{t("cta_heading")}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{t("cta_subtitle")}</p>
            <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
              {tc("reserve")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

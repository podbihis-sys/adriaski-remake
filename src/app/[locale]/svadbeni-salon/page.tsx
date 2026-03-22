"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, UtensilsCrossed, Wine, Music, Star } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = Array.from({ length: 32 }, (_, i) => ({
  src: `/images/svadbeniSalon-${i + 1}.jpg`,
  alt: `Svadbeni salon ${i + 1}`,
}));

export default function SvadbeniSalonPage() {
  const t = useTranslations("wedding");
  const tc = useTranslations("common");
  const locale = useLocale();

  const highlights = [
    { icon: Heart, label: t("highlight_weddings") },
    { icon: UtensilsCrossed, label: t("highlight_menus") },
    { icon: Wine, label: t("highlight_wine") },
    { icon: Music, label: t("highlight_entertainment") },
    { icon: Star, label: t("highlight_premium") },
  ];

  const menus = [
    {
      title: t("menu1_title"),
      items: [
        { label: t("meza"), desc: "pršut, sir, kajmak, francuska salata i domaći kruh" },
        { label: t("soup"), desc: "goveđa juha" },
        { label: t("meat_plates"), desc: "pečena junetina u umaku, zagrebački odrezak, medaljoni u šampinjon umaku" },
        { label: t("side_dish"), desc: "njoke, brokoli i pekarski krumpir" },
        { label: t("roast"), desc: "janjetina i prasetina sa pekarskim krumpirom" },
        { label: "", desc: "miješana salata, čorbanac, voće" },
      ],
    },
    {
      title: t("menu2_title"),
      items: [
        { label: t("meza"), desc: "pršut, sir, kajmak, francuska salata i domaći kruh" },
        { label: t("soup"), desc: "goveđa juha" },
        { label: t("meat_plates"), desc: "zagrebački odrezak, puretina u špeku, pohane šnicle u umaku od vrhnja" },
        { label: t("side_dish"), desc: "pekarski krumpir, bijela riža i kroketi" },
        { label: t("roast"), desc: "janjetina i prasetina" },
        { label: "", desc: "miješana salata, čorbanac, voće" },
      ],
    },
    {
      title: t("menu3_title"),
      items: [
        { label: t("meza"), desc: "pršut, sir, kajmak, francuska salata i domaći kruh" },
        { label: t("soup"), desc: "goveđa juha" },
        { label: t("meat_plates"), desc: "bečka šnicla, svinjski medaljoni (lungić) u špeku, pileća pariška šnicla u umaku od povrća" },
        { label: t("side_dish"), desc: "buter riža u umaku od šampinjona, kroketi i povrće" },
        { label: "", desc: "miješana salata, čorbanac i voće" },
      ],
    },
  ];

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerSvadbeniSalon.jpg"
          alt="Svadbeni salon"
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
              <span className="inline-block text-rose-300 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-5 gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-rose-50 mb-2">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/svadbeniSalon-1.jpg"
                  alt="Svadbeni salon interijer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-rose-500 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Heart className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">{t("unforgettable")}</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-rose-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                {t("section_label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                {t("section_heading")}
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>{t("desc_p1")}</p>
                <p>{t("desc_p2")}</p>
                <p>{t("desc_p3")}</p>
                <p className="text-rose-600 font-medium italic">{t("desc_note")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MENUS ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block text-rose-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {t("menus_label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {t("menus_heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menus.map((menu, mi) => (
              <motion.div
                key={menu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: mi * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#163c6f] to-[#23507a] px-6 py-4">
                  <h3 className="text-xl font-heading font-bold text-white">{menu.title}</h3>
                </div>

                {/* Items */}
                <div className="p-6 space-y-3">
                  {menu.items.map((item, i) => (
                    <div key={i} className={`${item.label ? "pb-3 border-b border-gray-100 last:border-0" : "pt-2"}`}>
                      {item.label && (
                        <p className="text-sm font-bold text-[#163c6f] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                      )}
                      <p className="text-sm text-[#3d3d3d] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
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
            <span className="inline-block text-rose-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
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
        <Image
          src="/images/headerSvadbeniSalon.jpg"
          alt="Svadbeni salon"
          fill
          className="object-cover"
        />
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
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {tc("contact_us")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/gastro-ponuda`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {t("cta_gastro")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

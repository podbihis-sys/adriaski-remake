"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Home, Users, UtensilsCrossed, TreePine, Eye } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/motelTikvice-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Motel Tikvice ${i + 1}`,
}));

export default function MotelTikvice() {
  const t = useTranslations("tikvice");
  const tc = useTranslations("common");
  const locale = useLocale();

  const highlights = [
    { icon: Mountain, value: "1.560m", label: t("highlight_altitude") },
    { icon: Home, value: "4", label: t("highlight_apartments") },
    { icon: Users, value: "3", label: t("highlight_rooms") },
    { icon: UtensilsCrossed, value: "1", label: t("highlight_restaurant") },
    { icon: TreePine, value: "\u221E", label: t("highlight_forest") },
    { icon: Eye, value: "360\u00B0", label: t("highlight_view") },
  ];

  const pricing = [
    {
      type: t("apartment"),
      capacity: t("apartment_capacity"),
      price: "180,50",
      unit: t("per_day"),
      featured: true,
    },
    {
      type: t("triple_room"),
      capacity: t("triple_capacity"),
      price: "51,54",
      unit: t("per_person_day"),
      featured: false,
    },
    {
      type: t("double_room"),
      capacity: t("double_capacity"),
      price: "51,54",
      unit: t("per_person_day"),
      featured: false,
    },
  ];

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerTikvice.jpg"
          alt="Motel Tikvice"
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
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#163c6f]/10 mb-2">
                    <Icon className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#163c6f]">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== NA VRHU STAZA ===== */}
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
                  src="/images/motelTikvice-05.jpg"
                  alt="Motel Tikvice exterior"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating altitude card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#163c6f] text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <p className="text-3xl font-heading font-bold">1.560m</p>
                <p className="text-sm text-white/70">{t("altitude_label")}</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                {t("section_label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                {t("section_heading")}
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>{t("desc_p1")}</p>
                <p>{t("desc_p2")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {t("pricing_label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {t("pricing_heading")}
            </h2>
            <p className="mt-3 text-gray-500">{t("pricing_subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  item.featured
                    ? "bg-[#163c6f] text-white shadow-xl scale-[1.02]"
                    : "bg-white text-[#163c6f] shadow-lg border border-gray-100"
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00c0f7] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {t("popular")}
                  </span>
                )}
                <h3 className={`text-lg font-heading font-bold mb-1 ${item.featured ? "text-white" : "text-[#163c6f]"}`}>
                  {item.type}
                </h3>
                <p className={`text-sm mb-4 ${item.featured ? "text-white/60" : "text-gray-500"}`}>
                  {item.capacity}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-heading font-bold ${item.featured ? "text-[#00c0f7]" : "text-[#163c6f]"}`}>
                    {item.price}
                  </span>
                  <span className={`text-lg ml-1 ${item.featured ? "text-white/70" : "text-gray-500"}`}>&euro;</span>
                </div>
                <p className={`text-sm ${item.featured ? "text-white/60" : "text-gray-500"}`}>
                  {item.unit}
                </p>
                <Link
                  href={`/${locale}/kontakt`}
                  className={`inline-flex items-center justify-center gap-2 mt-5 font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 ${
                    item.featured
                      ? "bg-[#00c0f7] hover:bg-[#00a8d6] text-white"
                      : "bg-[#163c6f]/5 hover:bg-[#163c6f]/10 text-[#163c6f]"
                  }`}
                >
                  {t("reserve")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t("feature_restaurant_title"), desc: t("feature_restaurant_desc"), img: "/images/motelTikvice-01.jpg" },
              { title: t("feature_terrace_title"), desc: t("feature_terrace_desc"), img: "/images/motelTikvice-06.jpg" },
              { title: t("feature_slopes_title"), desc: t("feature_slopes_desc"), img: "/images/motelTikvice-03.jpg" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
              >
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42]/80 via-[#0b1d42]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-white/70">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
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
          src="/images/headerTikvice.jpg"
          alt="Motel Tikvice"
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
                className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {tc("contact_us")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/cjenik`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {t("cta_full_pricing")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Mountain, Hotel, ChevronDown, Calendar } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";


import { events as allEvents } from "@/lib/events";
import { JsonLd, hotelJsonLd, localBusinessJsonLd } from "@/components/seo/JsonLd";

const latestNews = allEvents.slice(0, 3).map((e) => ({
  title: e.title,
  date: e.date,
  image: e.image,
  text: e.summary,
  href: `/dogadanja/${e.slug}`,
}));

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// features array moved inside component to use translations

// galleryImages moved inside component to use translations

export default function HomePage() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale();

  const galleryImages = [
    { src: "/images/hotel-01.jpg", alt: "Hotel Adria Ski", label: t("gallery_hotel") },
    { src: "/images/staze-1.jpg", alt: "Ski staze", label: t("gallery_slopes") },
    { src: "/images/bazen.jpg", alt: "Bazen", label: t("gallery_pool") },
    { src: "/images/ognjista-1.jpg", alt: "Restoran", label: t("gallery_restaurant") },
    { src: "/images/headerTikvice.jpg", alt: "Motel Tikvice", label: t("gallery_tikvice") },
    { src: "/images/headerSkolaSkijanja.jpg", alt: "Škola skijanja", label: t("gallery_ski_school") },
  ];

  const features = [
    {
      icon: "/images/icon_ski.png",
      title: t("feature_slopes_title"),
      description: t("feature_slopes_desc"),
      link: "/skijalista",
    },
    {
      icon: "/images/icon_climbing.png",
      title: t("feature_hiking_title"),
      description: t("feature_hiking_desc"),
      link: "/planinarenje",
    },
    {
      icon: "/images/icon_hotel2.png",
      title: t("feature_hotel_title"),
      description: t("feature_hotel_desc"),
      link: "/hotel-adria-ski",
    },
  ];

  const stats = [
    { value: "256", label: t("beds"), icon: Hotel },
    { value: "13km", label: t("ski_slopes"), icon: Mountain },
    { value: "1.200m", label: t("altitude"), icon: Mountain },
    { value: "25m", label: t("olympic_pool"), icon: Waves },
  ];

  return (
    <main>
      <JsonLd data={hotelJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/Wc2caR9qWeM?autoplay=1&mute=1&loop=1&playlist=Wc2caR9qWeM&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
            title="Hotel Adria Ski Background"
            allow="autoplay"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
            style={{ border: 0, aspectRatio: '16/9', width: 'max(100%, 177.78vh)', height: 'max(100%, 56.25vw)' }}
          />
        </div>
        {/* Fallback Image for slow connections */}
        <Image
          src="/images/hotel-adria-ski.jpg"
          alt="Hotel Adria Ski"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d42]/60 via-[#163c6f]/30 to-[#0b1d42]/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#00c0f7] text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-4 mt-6 md:mt-0 px-4 py-1.5 border border-[#00c0f7]/30 rounded-full backdrop-blur-sm bg-white/5">
              {t("hero_badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight max-w-4xl"
          >
            {t("hero_title")}
            <br />
            <span className="text-[#00c0f7]">Hotel Adria ski</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="backdrop-blur-md bg-white/10 border border-white/15 rounded-xl px-5 py-4 text-center hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-2xl md:text-3xl font-heading font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 mt-1 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00c0f7]/25"
            >
              {tc("book_now")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/hotel-adria-ski`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
            >
              {tc("learn_more")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/hotel-01.jpg"
                  alt="Hotel Adria Ski"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-[#163c6f] text-white rounded-xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-heading font-bold">256</p>
                <p className="text-sm text-white/70">{t("about_beds_label")}</p>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                {t("about_hotel")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] leading-tight mb-2">
                {t("about_heading")}
              </h2>
              <h3 className="text-xl font-heading text-[#163c6f]/70 mb-6">
                {t("hero_subtitle")}.
              </h3>

              <div className="text-[#3d3d3d] leading-relaxed space-y-4">
                <p>{t("about_p1")}</p>
                <p>{t("about_p2")}</p>
              </div>

              <Link
                href={`/${locale}/hotel-adria-ski`}
                className="inline-flex items-center gap-2 mt-6 text-[#00c0f7] font-semibold hover:gap-3 transition-all duration-300"
              >
                {tc("learn_more")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {t("our_offer")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {t("offer_heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  href={`/${locale}${feature.link}`}
                  className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 text-center"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-[#163c6f]/5 flex items-center justify-center group-hover:bg-[#163c6f]/10 transition-colors duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#163c6f] mb-2 group-hover:text-[#00c0f7] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#3d3d3d]/70 leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-[#00c0f7] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tc("learn_more")} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {t("gallery")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {t("meet_us")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  i === 0 ? "md:row-span-2 md:aspect-auto aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-sm">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                {t("news")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
                {t("latest_news")}
              </h2>
            </div>
            <Link
              href={`/${locale}/dogadanja`}
              className="hidden md:inline-flex items-center gap-2 text-[#00c0f7] font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              {tc("all_events")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news, i) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/${locale}${news.href}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#163c6f]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-[#163c6f] mb-2 group-hover:text-[#00c0f7] transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-[#3d3d3d]/70 text-sm leading-relaxed">
                      {news.text}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-[#00c0f7] text-sm font-semibold">
                      {tc("read_more")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            href={`/${locale}/dogadanja`}
            className="md:hidden inline-flex items-center gap-2 mt-8 text-[#00c0f7] font-semibold text-sm"
          >
            {tc("all_events")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/headerSkijalista.jpg"
          alt="Ski staze"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              {tc("ready_for_adventure")}
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              {t("cta_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/kontakt`}
                className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg shadow-[#00c0f7]/20"
              >
                {tc("contact_us")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/cjenik`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-lg transition-all duration-300 text-lg"
              >
                {tc("view_pricing")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

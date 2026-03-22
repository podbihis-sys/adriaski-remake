"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Wine, Beef, CakeSlice, Soup, Salad, ChefHat, PartyPopper } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = [
  { src: "/images/gastoPonuda-1.jpg", alt: "Gastro ponuda 1" },
  { src: "/images/gastoPonuda-2.jpg", alt: "Gastro ponuda 2" },
  { src: "/images/gastoPonuda-3.jpg", alt: "Gastro ponuda 3" },
  { src: "/images/gastoPonuda-4.jpg", alt: "Gastro ponuda 4" },
];

interface MenuSectionProps {
  icon: React.ReactNode;
  title: string;
  items?: string[];
  text?: string;
  accent?: string;
  delay?: number;
}

function MenuSection({ icon, title, items, text, accent = "amber", delay = 0 }: MenuSectionProps) {
  const bgColor = accent === "amber" ? "bg-amber-50" : accent === "red" ? "bg-red-50" : "bg-blue-50";
  const borderColor = accent === "amber" ? "border-amber-200" : accent === "red" ? "border-red-200" : "border-blue-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl ${bgColor} border ${borderColor} p-6 md:p-8`}
    >
      <div className="flex items-center gap-3 mb-5">
        {icon}
        <h2 className="text-xl md:text-2xl font-heading font-bold text-[#163c6f]">
          {title}
        </h2>
      </div>
      {items && (
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#3d3d3d] text-[15px] leading-relaxed">
              <span className="text-amber-500 mt-1.5 flex-shrink-0">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {text && (
        <p className="text-[#3d3d3d] text-[15px] leading-relaxed">{text}</p>
      )}
    </motion.div>
  );
}

export default function GastroPonudaPage() {
  const t = useTranslations("gastro");
  const tc = useTranslations("common");
  const locale = useLocale();

  const breakfastItems: string[] = t.raw("breakfast_items");
  const lunchDinnerItems: string[] = t.raw("lunch_dinner_items");
  const piesItems: string[] = t.raw("pies_items");
  const sacItems: string[] = t.raw("sac_items");
  const lesoItems: string[] = t.raw("leso_items");
  const specialBusiness: string[] = t.raw("special_business");
  const specialEvents: string[] = t.raw("special_events");

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerGastro.jpg"
          alt="Gastro ponuda"
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
              <span className="inline-block text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
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

      {/* ===== MENU SECTIONS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Intro */}
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              {t("menu_label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              {t("menu_heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Doručak */}
            <MenuSection
              icon={<CakeSlice className="w-6 h-6 text-amber-600" />}
              title={t("breakfast_title")}
              items={breakfastItems}
              delay={0}
            />

            {/* Ručak i večera */}
            <MenuSection
              icon={<Soup className="w-6 h-6 text-amber-600" />}
              title={t("lunch_dinner_title")}
              items={lunchDinnerItems}
              delay={0.1}
            />

            {/* Pite */}
            <MenuSection
              icon={<Salad className="w-6 h-6 text-amber-600" />}
              title={t("pies_title")}
              items={piesItems}
              delay={0}
            />

            {/* Jela ispod sača */}
            <MenuSection
              icon={<Flame className="w-6 h-6 text-red-600" />}
              title={t("sac_title")}
              items={sacItems}
              accent="red"
              delay={0.1}
            />

            {/* Lešo meso */}
            <MenuSection
              icon={<Beef className="w-6 h-6 text-amber-600" />}
              title={t("leso_title")}
              items={lesoItems}
              delay={0}
            />

            {/* Specijaliteti */}
            <MenuSection
              icon={<ChefHat className="w-6 h-6 text-red-600" />}
              title={t("specialties_title")}
              text={t("specialties_text")}
              accent="red"
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* ===== A LA CARTE & POSEBNA PONUDA ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* A la carte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Wine className="w-6 h-6 text-amber-600" />
                <span className="text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold">{t("alacarte_label")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                {t("alacarte_heading")}
              </h2>
              <p className="text-[#3d3d3d] leading-relaxed text-[15px]">
                {t("alacarte_desc")}
              </p>
            </motion.div>

            {/* Posebna ponuda */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <PartyPopper className="w-6 h-6 text-amber-600" />
                <span className="text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold">{t("special_label")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                {t("special_heading")}
              </h2>
              <p className="text-[#3d3d3d] leading-relaxed text-[15px] mb-4">
                {t("special_intro")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {specialBusiness.map((item) => (
                  <span key={item} className="inline-block bg-white text-[#163c6f] text-sm px-3 py-1.5 rounded-full border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-[#3d3d3d] leading-relaxed text-[15px] mb-3">
                {t("special_events_intro")}
              </p>
              <div className="flex flex-wrap gap-2">
                {specialEvents.map((item) => (
                  <span key={item} className="inline-block bg-amber-50 text-amber-700 text-sm px-3 py-1.5 rounded-full border border-amber-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE FEATURE ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t("card_ognjista_title"), desc: t("card_ognjista_desc"), img: "/images/headerOgnjista.jpg", link: "/restoran-ognjista" },
              { title: t("card_wedding_title"), desc: t("card_wedding_desc"), img: "/images/headerSvadbeniSalon.jpg", link: "/svadbeni-salon" },
              { title: t("card_hotel_title"), desc: t("card_hotel_desc"), img: "/images/headerHotel.jpg", link: "/hotel-adria-ski" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={card.link} className="group block relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg">
                  <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42]/80 via-[#0b1d42]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-white/70">{card.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-amber-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tc("learn_more")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
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
          src="/images/headerGastro.jpg"
          alt="Gastro ponuda"
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
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {t("cta_reserve")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/svadbeni-salon`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {t("cta_wedding")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

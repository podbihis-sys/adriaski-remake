"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Ruler, Mountain, Clock, MapPin, Anchor } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = [
  { src: "/images/ramaObilazak-1.jpg", alt: "Obilazak Rame 1" },
  { src: "/images/ramaObilazak-2.jpg", alt: "Obilazak Rame 2" },
  { src: "/images/ramaObilazak-3.jpg", alt: "Obilazak Rame 3" },
  { src: "/images/ramaObilazak-4.jpg", alt: "Obilazak Rame 4" },
  { src: "/images/ramaObilazak-5.jpg", alt: "Obilazak Rame 5" },
  { src: "/images/ramaObilazak-6.jpg", alt: "Obilazak Rame 6" },
  { src: "/images/ramaObilazak-7-1.jpg", alt: "Obilazak Rame 7" },
  { src: "/images/ramaObilazak-9.jpg", alt: "Obilazak Rame 9" },
  { src: "/images/ramaObilazak-10.jpg", alt: "Obilazak Rame 10" },
  { src: "/images/ramaObilazak-11.jpg", alt: "Obilazak Rame 11" },
  { src: "/images/ramaObilazak-12.jpg", alt: "Obilazak Rame 12" },
  { src: "/images/ramskoJezero2.jpg", alt: "Ramsko jezero" },
  { src: "/images/kukavicjeJezero.jpg", alt: "Kukavičje jezero" },
  { src: "/images/jezero.jpg", alt: "Jezero" },
];

export default function RamskoJezero() {
  const t = useTranslations("lake");
  const tc = useTranslations("common");
  const tn = useTranslations("nav");
  const locale = useLocale();
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerJezero.jpg" alt="Ramsko jezero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-sky-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("hero_label")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("title")}</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">{t("hero_desc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Ruler, value: "12 km", label: t("highlight_length") },
              { icon: Anchor, value: "95m", label: t("highlight_depth") },
              { icon: Waves, value: "1500 ha", label: t("highlight_area") },
              { icon: Clock, value: "3 dana", label: t("highlight_program") },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 mb-2">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#163c6f]">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== STRME PLANINE - 2 column ===== */}
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
                <Image src="/images/jezero.jpg" alt="Ramsko jezero" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-sky-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Waves className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">12 km</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sky-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("about_label")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">{t("about_heading")}</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-4">
                {t("about_p1")}
              </p>
              <p className="text-[#3d3d3d] leading-relaxed">
                {t("about_p2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NESTVARNA LJEPOTA - 2 column reversed ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sky-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("beauty_label")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">{t("beauty_heading")}</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                {t("beauty_desc")}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href={`/${locale}/planinarenje`} className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-semibold transition-colors">
                  <Mountain className="w-4 h-4" /> {tn("hiking")} <ArrowRight className="w-3 h-3" />
                </Link>
                <Link href={`/${locale}/brdski-biciklizam`} className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-semibold transition-colors">
                  <MapPin className="w-4 h-4" /> {tn("cycling")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image src="/images/ramskoJezero2.jpg" alt="Ramsko jezero" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image src="/images/kukavicjeJezero.jpg" alt="Kukavičje jezero" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAM ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-sky-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("program_label")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{t("program_heading")}</h2>
          </motion.div>

          <div className="space-y-5">
            {/* Dan 1 */}
            <motion.div {...fadeInUp} className="bg-[#f2f3f4] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D1</span>
                <h3 className="font-heading font-bold text-[#163c6f]">{t("day1_title")}</h3>
              </div>
              <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                <p>Polazak iz Splita u 06:30 h. Dolazak u hotel &quot;Adriaski&quot; do 08:30 h</p>
                <p><span className="font-semibold">08:30 – 10:00 h</span> – Doručak</p>
                <p><span className="font-semibold">10:00 – 13:00 h</span> – Panoramski obilazak Kupresa (posjet etnografskom muzeju, kupreškoj &quot;katedrali&quot;, obilazak Kukavičjeg jezera) obilazak jahališta na &quot;Ćevićima&quot; gdje će gosti imati priliku vidjeti prekrasne konje pa i jahati u krugu jahališta ukoliko se odluče na to, a isto tako će imati priliku okrijepiti se u brvnari na jahalištu, dok uživaju u predivnom pogledu na Kupres i kupreško polje.</p>
                <p><span className="font-semibold">13:30 – 15:00 h</span> – Ručak u hotelu &quot;Adria ski&quot;</p>
                <p><span className="font-semibold">15:00 – 19:00 h</span> – Odmor i slobodne aktivnosti</p>
                <p><span className="font-semibold">19:00 h</span> – Večera – mogućnost aktivnog uključivanja gostiju u pripremu večere u restoranu &quot;Ognjišta&quot;. Zabava uz karaoke show.</p>
              </div>
            </motion.div>

            {/* Dan 2 */}
            <motion.div {...fadeInUp} className="bg-[#f2f3f4] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D2</span>
                <h3 className="font-heading font-bold text-[#163c6f]">{t("day2_title")}</h3>
              </div>
              <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                <p><span className="font-semibold">08:00 – 09:00 h</span> Doručak</p>
                <p><span className="font-semibold">10:00 – 18:00 h</span> – Cjelodnevni program: odlazak na Ramsko jezero, program aktivnosti (obilazak crkve i muzeja na Šćitu, veslanje, panoramski obilazak brodicom, biciklizam, planinarenje) – gosti sami odlučuju koju će od navedenih aktivnosti izabrati.</p>
                <p><span className="font-semibold">13:00 – 14:30 h</span> – Ručak u Rami</p>
                <p><span className="font-semibold">18:00 h</span> – Povratak u hotel &quot;Adria ski&quot;</p>
                <p><span className="font-semibold">19:00 – 20:30 h</span> Večera – restoran hotela &quot;Adria ski&quot;</p>
                <p><span className="font-semibold">20:30 h</span> – zabava uz nastup folklornih skupina iz Kupresa.</p>
              </div>
            </motion.div>

            {/* Dan 3 */}
            <motion.div {...fadeInUp} className="bg-[#f2f3f4] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D3</span>
                <h3 className="font-heading font-bold text-[#163c6f]">{t("day3_title")}</h3>
              </div>
              <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                <p><span className="font-semibold">08:30 – 10:00 h</span> – Doručak</p>
                <p><span className="font-semibold">10:00 h</span> – Odlazak u ECO SELO &quot;GRABOVICA&quot;</p>
                <p><span className="font-semibold">11:00 – 13:00 h</span> – Razgledanje ECO SELA &quot;GRABOVICA&quot;</p>
                <p><span className="font-semibold">13:00 – 15:00 h</span> – Ručak</p>
                <p><span className="font-semibold">15:00 h</span> – Polazak za Split</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-sky-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("photos")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("gallery")}</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerJezero.jpg" alt="Ramsko jezero" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{t("cta_heading")}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{t("cta_subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                {tc("reserve")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`/${locale}/planinarenje`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                {tn("hiking")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

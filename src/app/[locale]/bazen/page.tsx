"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Thermometer, ShieldCheck, Droplets, Clock, Sparkles } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/bazen-${i + 1}.jpg`,
  alt: `Bazen ${i + 1}`,
}));

export default function BazenPage() {
  const t = useTranslations("pool");
  const tc = useTranslations("common");

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerBazen.jpg" alt="Bazen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("title")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("subtitle")}</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">Olimpijski bazen 25m x 8m u sklopu wellness centra</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { icon: Waves, label: "25m x 8m" },
              { icon: Thermometer, label: `2 ${t("saunas")}` },
              { icon: Sparkles, label: t("massages") },
              { icon: Droplets, label: t("showers") },
              { icon: ShieldCheck, label: t("hygiene") },
              { icon: Clock, label: "08-20h" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-50 mb-2">
                    <Icon className="w-5 h-5 text-cyan-600" />
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
                <Image src="/images/bazen-1.jpg" alt="Bazen Adria Ski" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-cyan-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Waves className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">25m x 8m</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-cyan-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("relaxation")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Bazen 25m x 8m</h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Bazenska voda za kupanje zahtjeva punu funkcionalnost i pouzdanost u radu svih sustava strojarskog pogona, svih sustava elektro pogona i svih sustava mjerno regulacionog pogona. Adria ski za korisnike bazena osigurava korištenje tuševa i nogopera, što uključuje higijenu prije ulaska u bazenski prostor. Svi korisnici koji ulaze na bazen moraju se obavezno istuširati i u sanitarnom propusniku dezinficirati noge.
                </p>
                <p>
                  Sva ugrađena oprema u normalnim uvjetima korištenja održava fizikalna, kemijska i mikrobiološka svojstva bazenske vode za kupanje u propisanim vrijednostima zdravstvene ispravnosti prema analitičkim zahtjevima Zavoda za javno zdravstvo. Kontinuirano se vrše mjerenja temperature, slobodnog klora, redoks potencijala i pH vrijednosti bazenske vode, a automatskim uređajima za doziranje vrši se kontinuirana korekcija svih vrijednosti unutar zadanih parametara. Bazenskom tehnikom ispiru se pješčani filteri nakon svakih četrdesetosam sati kontinuiranog rada.
                </p>
                <p>
                  Nakon aktivno provedenog dana u skijanju itekako će Vam dobro doći opuštanje i plivanje u bazenu koji se nalazi u sklopu wellness centra hotela &quot;Adria ski&quot;.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-cyan-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("photos")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("gallery")}</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerBazen.jpg" alt="Bazen" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Opustite se u bazenu</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Rezervirajte boravak i uživajte u wellness centru</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Rezervirajte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/fitness" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Fitness centar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

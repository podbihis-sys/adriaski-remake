"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bike, Ruler, Mountain, Clock, TrendingUp, MapPin } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const routes = [
  { name: "ADRIA SKI – ŠUJICA", distance: "55 km", elevation: "970 m", minAlt: "909 m", maxAlt: "1.462 m", duration: "6 h", difficulty: "Zahtjevna", color: "bg-red-500" },
  { name: "GAJ – KOLJEVKA – GATER", distance: "14 km", elevation: "370 m", minAlt: "891 m", maxAlt: "1.081 m", duration: "2 h", difficulty: "Lagana", color: "bg-green-500" },
  { name: "ADRIA SKI – KUKAVIČJE JEZERO", distance: "71 km", elevation: "517 m", minAlt: "1.134 m", maxAlt: "1.326 m", duration: "7 h", difficulty: "Zahtjevna", color: "bg-red-500" },
  { name: "RAMSKO JEZERO", distance: "37 km", elevation: "597 m", minAlt: "605 m", maxAlt: "940 m", duration: "4 h", difficulty: "Srednja", color: "bg-amber-500" },
  { name: "SMILJANIĆ – KUKAVIČJE JEZERO", distance: "55 km", elevation: "460 m", minAlt: "1.134 m", maxAlt: "1.325 m", duration: "6 h", difficulty: "Zahtjevna", color: "bg-red-500" },
];

const galleryImages = [
  { src: "/images/bicikisti-1.jpg", alt: "Biciklisti 1" },
  { src: "/images/bicikisti-2.jpg", alt: "Biciklisti 2" },
  { src: "/images/bicikisti-3.jpg", alt: "Biciklisti 3" },
  { src: "/images/bicikisti-4.jpg", alt: "Biciklisti 4" },
  { src: "/images/biciklisti2.jpg", alt: "Biciklisti na stazi" },
  { src: "/images/Gaj-biciklističke-staze.jpg", alt: "Gaj biciklističke staze" },
  { src: "/images/Gaj_biciklističke_staze.jpg", alt: "Gaj biciklističke staze 2" },
];

export default function BrdskiBiciklizam() {
  const tc = useTranslations("common");
  const locale = useLocale();
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerBiciklizam.jpg" alt="Brdski biciklizam" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-lime-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">Ljetna ponuda</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Brdski biciklizam</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">5 biciklističkih tura kroz prekrasne krajobraze Kupresa</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Bike, value: "5", label: "Tura" },
              { icon: Ruler, value: "232 km", label: "Ukupno staza" },
              { icon: Mountain, value: "1.462m", label: "Max visina" },
              { icon: Clock, value: "3 dana", label: "Program" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-lime-50 mb-2">
                    <Icon className="w-5 h-5 text-lime-600" />
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
                <Image src="/images/bicikisti-1.jpg" alt="Brdski biciklizam Kupres" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-lime-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Bike className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">5 tura</p>
              </div>
            </motion.div>

            {/* Program */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-lime-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Raspored</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Program</h2>

              <div className="space-y-5">
                {/* Dan 1 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D1</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">Dan 1.</h3>
                  </div>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">
                    Dolazak u hotel &quot;Adriaski&quot;, u poslijepodnevnim satima. Večera dobrodošlice na bazi švedskog stola s domaćim specijalitetima. Za večernju zabavu (ovisno o dogovoru) gosti će imati priliku birati između: folklornog nastupa lokalnih skupina, zabavu uz harmonikaša ili glazbu uživo.
                  </p>
                </div>

                {/* Dan 2 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D2</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">Dan 2.</h3>
                  </div>
                  <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                    <p><span className="font-semibold">08:00 – 09:00 h</span> Doručak</p>
                    <p><span className="font-semibold">09:00 – 13:00 h</span> Biciklističke ture – 5 različitih tura, shodno interesu i fizičkim mogućnostima</p>
                    <p><span className="font-semibold">13:00 – 14:30 h</span> Ručak u prirodi</p>
                    <p><span className="font-semibold">15:00 – 18:00 h</span> Slobodne aktivnosti</p>
                    <p><span className="font-semibold">19:00 – 20:30 h</span> Večera – domaća zdrava hrana, mogućnost aktivnog uključivanja gostiju u pripremu večere u restoranu &quot;Ognjišta&quot;</p>
                    <p><span className="font-semibold">20:30 h –</span> Zabava uz karaoke show</p>
                  </div>
                </div>

                {/* Dan 3 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D3</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">Dan 3.</h3>
                  </div>
                  <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                    <p><span className="font-semibold">08:00 – 09:00 h</span> Doručak – domaća zdrava hrana</p>
                    <p className="font-semibold">Odlazak iz hotela poslije doručka</p>
                  </div>
                </div>

                {/* Prijevoz */}
                <div className="bg-lime-50 border border-lime-200 rounded-xl p-5">
                  <h3 className="font-heading font-bold text-lime-700 mb-1">Prijevoz</h3>
                  <p className="text-[#3d3d3d] text-sm">Program ne uključuje: Prijevoz (organizira se na upit).</p>
                  <p className="text-[#3d3d3d] text-sm mt-1">Napomena: gosti mogu donijeti svoje bicikle ili ih mogu iznajmiti u hotelu u sklopu aranžmana.</p>
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
            <span className="inline-block text-lime-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Ture</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">Biciklističke ture</h2>
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
                <div className="bg-gradient-to-r from-[#163c6f] to-[#23507a] px-5 py-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{route.name}</h3>
                  <span className={`${route.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                    {route.difficulty}
                  </span>
                </div>
                {/* Stats */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-lime-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Dužina</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-lime-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Trajanje</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-lime-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Uspon</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.elevation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-lime-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Visina</p>
                      <p className="text-sm font-bold text-[#163c6f]">{route.minAlt} – {route.maxAlt}</p>
                    </div>
                  </div>
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
            <span className="inline-block text-lime-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("photos")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("gallery")}</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerBiciklizam.jpg" alt="Brdski biciklizam" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Spremni za avanturu na dva kotača?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Rezervirajte biciklistički paket i istražite Kupres</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Rezervirajte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`/${locale}/planinarenje`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Planinarenje
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

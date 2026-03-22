"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Footprints, Mountain, Clock, Ruler, MapPin } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/jahanje-${i + 1}.jpg`,
  alt: `Jahanje ${i + 1}`,
}));

export default function Jahanje() {
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerJahaci.jpg" alt="Jahanje" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">Ljetna ponuda</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Jahanje</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">Obilježene jahaće staze kroz prekrasne krajobraze Kupresa</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Ruler, value: "25-30 km", label: "Staza" },
              { icon: MapPin, value: "50 KM", label: "Tura" },
              { icon: Mountain, value: "1.200-1.800m", label: "Visina" },
              { icon: Clock, value: "3 dana", label: "Program" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50 mb-2">
                    <Icon className="w-5 h-5 text-amber-600" />
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
                <Image src="/images/jahanje-1.jpg" alt="Jahanje Kupres" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-amber-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Footprints className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">Jahaće staze</p>
              </div>
            </motion.div>

            {/* Program */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Raspored</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Program</h2>

              <div className="space-y-5">
                {/* Dan 1 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D1</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">Dan 1.</h3>
                  </div>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed">
                    Dolazak u hotel &quot;Adriaski&quot; u poslijepodnevnim satima. Večera dobrodošlice na bazi švedskog stola s domaćim specijalitetima. Za večernju zabavu (ovisno o dogovoru) gosti će imati priliku birati između: zabave uz harmonikaša, karaoke show ili zabavu uz glazbu uživo.
                  </p>
                </div>

                {/* Dan 2 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D2</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">Dan 2.</h3>
                  </div>
                  <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                    <p><span className="font-semibold">08:00 – 09:00 h</span> – Doručak</p>
                    <p><span className="font-semibold">09:00 – 13:00 h</span> – Prijepodnevni program:</p>
                    <p className="font-semibold">ODLAZAK NA JAHALIŠTE NA ĆEVIĆIMA GDJE ĆE SE GOSTI SA VODIČEM DOGOVORITI O JAHAČKOJ RUTI ZA TAJ DAN:</p>

                    {/* Pricing card */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 my-3">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span><span className="font-semibold">Prijepodnevna tura</span> od 09,00-12,00 h</span>
                          <span className="font-bold text-amber-600">50,00 KM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span><span className="font-semibold">Poslijepodnevna tura</span> od 18,00-19,00 h</span>
                          <span className="font-bold text-amber-600">25,00 KM</span>
                        </div>
                      </div>
                    </div>

                    <p><span className="font-semibold">13:00 – 14:30 h</span> Ručak u prirodi</p>
                    <p><span className="font-semibold">15:00 – 18:00 h</span> Slobodne aktivnosti</p>
                    <p><span className="font-semibold">19:00 – 20:30 h</span> Večera u restoranu &quot;Ognjišta&quot; – gosti će moći ukoliko to žele, sudjelovati u pripremi večere – roštilj.</p>
                    <p><span className="font-semibold">20.30 h</span> – Zabava uz karaoke show.</p>
                  </div>
                </div>

                {/* Dan 3 */}
                <div className="bg-[#f2f3f4] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D3</span>
                    <h3 className="font-heading font-bold text-[#163c6f]">Dan 3.</h3>
                  </div>
                  <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                    <p><span className="font-semibold">08:00 – 09:30 h</span> – Doručak</p>
                    <p><span className="font-semibold">10:00 h</span> – Odlazak u <span className="font-semibold">ECO SELO &quot;GRABOVICA&quot;</span> gdje će gosti imati ručak nakon razgledavanja ECO SELA.</p>
                  </div>
                </div>

                {/* Cijena */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h3 className="font-heading font-bold text-amber-700 mb-1">Cijena</h3>
                  <p className="text-[#3d3d3d] text-sm font-semibold">CIJENA UKLJUČUJE: 2 puna pansiona; osigurani su vodiči za sve navedene aktivnosti</p>
                </div>

                {/* Dodatno */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h3 className="font-heading font-bold text-amber-700 mb-1">Dodatno</h3>
                  <p className="text-[#3d3d3d] text-sm">
                    UKOLIKO GOSTI BUDU BORAVILI 3 NOĆI, TREĆI DAN ĆE GOSTI IĆI ILI U RIBOLOV ILI NA KAMPIRANJE U PRIRODI – OVISNO O DOGOVORU, IMATI ĆE RUČAK I /ILI VEČERU U PRIRODI, A NAVEČER UKOLIKO NE BUDU IŠLI NA KAMPIRANJE ĆE IMATI VEČERU I ZABAVU U HOTELU &quot;ADRIA SKI&quot; UZ GLAZBU UŽIVO ILI UZ HARMONIKAŠA.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== LOKALNE STAZE (reversed 2-column) ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Staze</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Lokalne staze</h2>
              <p className="text-[#3d3d3d] leading-relaxed">
                Prilagodili smo i obilježili veći broj jahaćih staza koje se razlikuju po dužini (25 km – 30 km) i visinskoj razlici (1200 m – 1800 m). Također se razlikuju i po nivou težine u smislu gustine raslinja i šume kroz koju se jaše i potrebi prejahivanja prepreka ili provlačenja kroz šumske prepreke. Kombinacijom različitih lokalnih jahaćih staza također možete jahati više sati, ne prolazeći kroz iste krajobraze, a uvijek ćete biti blizu ranča.
              </p>
            </motion.div>

            {/* Images right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image src="/images/jahanje-5.jpg" alt="Jahaće staze" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] mt-8">
                <Image src="/images/jahanje-9.jpg" alt="Jahaće staze" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ZA JAHAČE ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Iskustvo</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Za jahače</h2>
            <p className="text-[#3d3d3d] leading-relaxed text-lg">
              Također ako želite osjetiti samo užitak terenskog jahanja i uz to napraviti novu cool profilku, tu su kratke jahaće ture po prirodi u trajanju od samo 20-tak minuta. Za sve vrste jahača željne novog iskustva imamo što za ponuditi. Naravno, za sve one koji ne žele jahati, ture su prikladne i za šetnju u prirodi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Fotografije</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">Galerija</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerJahaci.jpg" alt="Jahanje" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Spremni za jahanje?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Rezervirajte jahaći paket i istražite Kupres na konju</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Rezervirajte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/brdski-biciklizam" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Brdski biciklizam
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

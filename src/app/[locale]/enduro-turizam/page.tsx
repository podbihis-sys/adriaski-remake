"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bike, Mountain, Clock, Flame, TrendingUp, Gauge } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/enduro-${i + 1}.jpg`,
  alt: `Enduro ${i + 1}`,
}));

export default function EnduroTurizam() {
  const tc = useTranslations("common");
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image src="/images/headerEnduro.jpg" alt="Enduro turizam" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-red-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">Ljetna ponuda</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Enduro turizam</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">Motociklističke avanture kroz divlje šume i brdske staze Kupresa</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Mountain, value: "2.000m", label: "Visina" },
              { icon: Clock, value: "3 dana", label: "Program" },
              { icon: Bike, value: "Motocikli", label: "Enduro ture" },
              { icon: Flame, value: "Adrenalin", label: "Doživljaj" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 mb-2">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#163c6f]">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== ENDURO TURE (2-column) ===== */}
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
                <Image src="/images/enduro-1.jpg" alt="Enduro ture Kupres" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-red-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <TrendingUp className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">2.000m</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-red-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Avantura</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Enduro ture</h2>
              <p className="text-[#3d3d3d] leading-relaxed text-lg">
                Za vozače je to velika avantura i izazov – uspeti se na 2.000 metara nadmorske visine. Na to nisu navikli u svojim podnebljima, niti imaju tu mogućnost. Enduro ture, odnosno vožnje motociklom na otvorenom terenu, u divljim šumama, na brdskim kamenim putevima i blatnjavim stazama.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ZA VOZAČE (reversed 2-column) ===== */}
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
              <span className="inline-block text-red-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Iskustvo</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">Za vozače</h2>
              <p className="text-[#3d3d3d] leading-relaxed text-lg">
                Na enduro motociklu su svi jednaki, vuku i guraju jedni drugima motocikle kada zaglave u blatu, znoje se jednako, što zbog opreme, što zbog straha i adrenalina, a na kraju zajedno i uživaju u pogledu, nakon naporne vožnje.
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
                <Image src="/images/enduro-3.jpg" alt="Enduro vožnja" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] mt-8">
                <Image src="/images/enduro-5.jpg" alt="Enduro vožnja" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAM ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-red-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">Raspored</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">Program</h2>
          </motion.div>

          <div className="space-y-5">
            {/* Dan 1 */}
            <motion.div {...fadeInUp} className="bg-[#f2f3f4] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D1</span>
                <h3 className="font-heading font-bold text-[#163c6f]">Dan 1.</h3>
              </div>
              <p className="text-[#3d3d3d] text-sm leading-relaxed">
                Dolazak u hotel &quot;Adriaski&quot; u poslijepodnevnim satima. Večera dobrodošlice na bazi švedskog stola s domaćim specijalitetima. Za večernju zabavu (ovisno o dogovoru) gosti će imati priliku birati između: zabave uz harmonikaša, karaoke show ili zabavu uz glazbu uživo.
              </p>
            </motion.div>

            {/* Dan 2 */}
            <motion.div {...fadeInUp} className="bg-[#f2f3f4] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D2</span>
                <h3 className="font-heading font-bold text-[#163c6f]">Dan 2.</h3>
              </div>
              <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                <p><span className="font-semibold">08:00 – 09:00 h</span> Doručak</p>
                <p><span className="font-semibold">09:00 – 13:00 h</span> Prijepodnevni program:</p>
                <p className="font-semibold">MOTOCIKLISTIČKE TURE</p>
                <p>Vožnje motociklom – različite ture shodno interesu i fizičkim mogućnostima. Znanje motociklista će se prethodno provjeriti na poligonu prilagođenom vožnjama motorima.</p>
                <p><span className="font-semibold">13:00 – 14:30 h</span> Ručak u prirodi</p>
                <p><span className="font-semibold">15:00 – 18:00 h</span> Slobodne aktivnosti</p>
                <p><span className="font-semibold">19:00 – 20:30 h</span> Večera u restoranu &quot;Ognjišta&quot; – gosti će moći ukoliko to žele sudjelovati u pripremi večere – roštilj</p>
                <p><span className="font-semibold">20.30 h</span> – Zabava uz karaoke show.</p>
              </div>
            </motion.div>

            {/* Dan 3 */}
            <motion.div {...fadeInUp} className="bg-[#f2f3f4] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#163c6f] text-white text-xs font-bold">D3</span>
                <h3 className="font-heading font-bold text-[#163c6f]">Dan 3.</h3>
              </div>
              <div className="text-[#3d3d3d] text-sm leading-relaxed space-y-1.5">
                <p><span className="font-semibold">08:00 – 09:30 h</span> – Doručak</p>
                <p><span className="font-semibold">10:00 h –</span> Motociklistička tura koja će trajati do 16,00 sati</p>
                <p><span className="font-semibold">13,00 – 14,30 h</span> – Ručak u prirodi</p>
                <p><span className="font-semibold">16,00 h</span> – Povratak u hotel i odlazak iz hotela</p>
              </div>
            </motion.div>

            {/* Uključeno */}
            <motion.div {...fadeInUp} className="bg-orange-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-heading font-bold text-red-600 mb-1">Uključeno</h3>
              <p className="text-[#3d3d3d] text-sm font-semibold">
                Ponuda uključuje: BORAVAK NA BAZI DVIJE NOĆI: 2 puna pansiona (u cijenu je uključeni ručak u prirodi);
              </p>
            </motion.div>

            {/* Dodatno */}
            <motion.div {...fadeInUp} className="bg-orange-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-heading font-bold text-red-600 mb-1">Dodatno</h3>
              <p className="text-[#3d3d3d] text-sm">
                UKOLIKO GOSTI BUDU BORAVILI 3 NOĆI – 4 DANA, TREĆI DAN ĆE GOSTI IĆI ILI NA JAHANJE, U RIBOLOV ILI ĆE KAMPIRATI U PRIRODI – OVISNO O DOGOVORU, IMATI ĆE RUČAK I /ILI VEČERU U PRIRODI, A NAVEČER UKOLIKO NE BUDU IŠLI NA KAMPIRANJE ĆE IMATI VEČERU I ZABAVU U HOTELU &quot;ADRIA SKI&quot; UZ GLAZBU UŽIVO ILI UZ HARMONIKAŠA
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-red-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("photos")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("gallery")}</h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerEnduro.jpg" alt="Enduro turizam" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Spremni za enduro avanturu?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Rezervirajte enduro paket i istražite brdske staze Kupresa</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Rezervirajte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/jahanje" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Jahanje
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Wine, Mountain, UtensilsCrossed, Clock, MapPin } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const highlights = [
  { icon: Flame, label: "Otvoreni kamin" },
  { icon: UtensilsCrossed, label: "Domaća jela" },
  { icon: Wine, label: "Kuhano vino" },
  { icon: Mountain, label: "Planinski ambijent" },
  { icon: MapPin, label: "Ispod staza" },
  { icon: Clock, label: "Brza okrijepa" },
];

const galleryImages = [1, 4, 6, 7, 8, 9, 10, 11, 12].map((n) => ({
  src: `/images/ognjista-${n}.jpg`,
  alt: `Restoran Ognjišta ${n}`,
}));

export default function RestoranOgnjista() {
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerOgnjista.jpg"
          alt="Restoran Ognjišta"
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
                Gastronomija
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                Restoran Ognjišta
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                Tradicionalna domaća kuhinja u planinskom ambijentu
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS BAR ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50 mb-2">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== TRADICIONALNA JELA ===== */}
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
                  src="/images/ognjista-1.jpg"
                  alt="Restoran Ognjišta interijer"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-amber-600 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <Flame className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">Otvoreni kamin</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Ponuda
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Tradicionalna jela
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Ispod završetka skijaških staza nalazi se restoran Ognjišta koji u
                  planinskom ambijentu nudi gotova jela za brzu okrijepu i nastavak
                  skijanja bez ulaska u hotel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PLANINSKI AMBIJENT ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-amber-600 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Ambijent
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Planinski ugođaj
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Uz veliki otvoreni kamin koji daje pravi zimski ugođaj restoranu
                  možete uživati u raznovrsnim domaćim jelima, a dodatnu toplinu će
                  osigurati dobra šalica domaćeg kuhanog vina.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/gastro-ponuda"
                  className="inline-flex items-center gap-2 text-sm text-amber-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Pogledajte gastro ponudu <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/hotel-adria-ski"
                  className="inline-flex items-center gap-2 text-sm text-[#00c0f7] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Više o hotelu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-3"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image src="/images/ognjista-7.jpg" alt="Restoran Ognjišta kamin" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] mt-6">
                <Image src="/images/ognjista-4.jpg" alt="Restoran Ognjišta jela" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE CARDS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Gastro ponuda", desc: "Kompletna ponuda jela i specijaliteta", img: "/images/headerGastro.jpg", link: "/gastro-ponuda" },
              { title: "Svadbeni salon", desc: "Za nezaboravne svečanosti", img: "/images/headerSvadbeniSalon.jpg", link: "/svadbeni-salon" },
              { title: "Skijalište", desc: "Direktan pristup stazama iz restorana", img: "/images/headerSkijalista.jpg", link: "/skijalista" },
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
                    <span className="inline-flex items-center gap-1 mt-2 text-[#00c0f7] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saznaj više <ArrowRight className="w-3.5 h-3.5" />
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
              Fotografije
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              Galerija
            </h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/headerOgnjista.jpg"
          alt="Restoran Ognjišta"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Dođite na ručak
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Uživajte u domaćim jelima uz otvoreni kamin i pogled na skijaške staze
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gastro-ponuda"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Pogledajte jelovnik <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

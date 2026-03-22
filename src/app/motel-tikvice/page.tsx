"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Home, Users, UtensilsCrossed, TreePine, Eye } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const highlights = [
  { icon: Mountain, value: "1.560m", label: "Nadmorske visine" },
  { icon: Home, value: "4", label: "Apartmana" },
  { icon: Users, value: "3", label: "Sobe" },
  { icon: UtensilsCrossed, value: "1", label: "Restoran" },
  { icon: TreePine, value: "∞", label: "Borova šuma" },
  { icon: Eye, value: "360°", label: "Pogled" },
];

const pricing = [
  {
    type: "Apartman",
    capacity: "2+2+2 (6 osoba)",
    price: "180,50",
    unit: "po danu",
    featured: true,
  },
  {
    type: "Trokrevetna soba",
    capacity: "3 osobe",
    price: "51,54",
    unit: "po osobi / dan",
    featured: false,
  },
  {
    type: "Dvokrevetna soba",
    capacity: "2 osobe",
    price: "51,54",
    unit: "po osobi / dan",
    featured: false,
  },
];

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/motelTikvice-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Motel Tikvice ${i + 1}`,
}));

export default function MotelTikvice() {
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
                Smještaj
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                Motel Tikvice
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                Na vrhu skijaških staza, 1.560m nadmorske visine
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
                <p className="text-sm text-white/70">nadmorske visine</p>
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
                Na vrhu staza
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Planinski raj
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Dragi gosti, djelatnici hotela Adria Ski nastavljaju sa svojom
                  tradicijom poboljšanja usluga, u sklopu kojih Vam predstavljamo
                  MOTEL TIKVICE, koji se nalazi na 1560 metara nadmorske visine (na
                  vrhu staza), sa restoranom, 4 Apartmana sa kuhinjom, 1 trokrevetnom
                  sobom i 2 dvokrevetne sobe. Osim restorana uređenog u planinskom
                  stilu gdje također možete uživati u domaćim jelima i piću, sa terase
                  smještene ispred motela okruženog borovom šumom, možete uživati u
                  sunčevim zrakama i pogledu na predivno kupreško polje.
                </p>
                <p>
                  S obzirom na
                  to da je motel smješten tik do skijaških staza koje vode u podnožje
                  hotela &quot;Adria ski&quot;, možete ne gubeći vrijeme iskombinirati
                  skijanje sa ručkom u motelu i uživati u izvrsnoj šalici domaćeg
                  kuhanog vina.
                </p>
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
              Cijene
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              Cjenik - Sezona 2025/26
            </h2>
            <p className="mt-3 text-gray-500">Noćenje s doručkom</p>
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
                    Popularan
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
                  <span className={`text-lg ml-1 ${item.featured ? "text-white/70" : "text-gray-500"}`}>€</span>
                </div>
                <p className={`text-sm ${item.featured ? "text-white/60" : "text-gray-500"}`}>
                  {item.unit}
                </p>
                <Link
                  href="/kontakt"
                  className={`inline-flex items-center justify-center gap-2 mt-5 font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 ${
                    item.featured
                      ? "bg-[#00c0f7] hover:bg-[#00a8d6] text-white"
                      : "bg-[#163c6f]/5 hover:bg-[#163c6f]/10 text-[#163c6f]"
                  }`}
                >
                  Rezerviraj <ArrowRight className="w-3.5 h-3.5" />
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
              { title: "Restoran", desc: "Domaća jela u planinskom ambijentu", img: "/images/motelTikvice-01.jpg" },
              { title: "Terasa", desc: "Pogled na kupreško polje iz borove šume", img: "/images/motelTikvice-06.jpg" },
              { title: "Direktan pristup stazama", desc: "Skijaške staze tik do motela", img: "/images/motelTikvice-03.jpg" },
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
          src="/images/headerTikvice.jpg"
          alt="Motel Tikvice"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Rezervirajte boravak na Tikvicama
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Uživajte u planini, snijegu i domaćim jelima na vrhu skijaških staza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Kontaktirajte nas <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cjenik"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Kompletan cjenik
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

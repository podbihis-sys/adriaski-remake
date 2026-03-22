"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bed, Waves, Dumbbell, UtensilsCrossed, Snowflake, Phone } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";
import { useTranslations } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HotelAdriaSki() {
  const t = useTranslations("hotel");
  const tc = useTranslations("common");

  const highlights = [
    { icon: Bed, value: "256", label: t("beds"), color: "from-blue-500 to-blue-600" },
    { icon: Waves, value: "25m", label: t("pool"), color: "from-cyan-500 to-cyan-600" },
    { icon: Dumbbell, value: "30+", label: t("fitness_machines"), color: "from-indigo-500 to-indigo-600" },
    { icon: UtensilsCrossed, value: "2", label: t("restaurants"), color: "from-amber-500 to-amber-600" },
    { icon: Snowflake, value: "2", label: t("saunas"), color: "from-sky-500 to-sky-600" },
    { icon: Phone, value: "24/7", label: t("reception"), color: "from-emerald-500 to-emerald-600" },
  ];

  const galleryImages = Array.from({ length: 18 }, (_, i) => ({
    src: `/images/hotel-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Hotel Adria Ski ${i + 1}`,
  }));

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerHotel.jpg"
          alt="Hotel Adria Ski"
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
                O nama
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                {t("title")}
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                256 ležajeva, wellness, bazen, restoran - sve na jednom mjestu
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
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#163c6f]">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PREKRASAN POGLED ===== */}
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
                  src="/images/hotel-01.jpg"
                  alt="Hotel Adria Ski pogled"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative smaller image */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-36 md:w-48 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <Image
                  src="/images/bazen.jpg"
                  alt="Bazen"
                  fill
                  className="object-cover"
                />
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
                Smještaj
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Prekrasan pogled
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Kapacitet hotela Adria Ski je 256 ležajeva. Sve sobe opremljene su
                  telefonom te TV uređajima sa digitalnim satelitskim sustavom. Svaka
                  soba ima zasebno kupatilo. Hotel je opremljen malim olimpijskim
                  bazenom (25m x 8m) koji zimi pruža jedinstveni pogled na snijegom
                  prekrivenu borovu šumu. U sklopu bazena su dvije saune, usluge
                  masaže i veliki fitness centar u kojem istovremeno može vježbati
                  30-ak osoba. Centar je opremljen spravama za vježbu i rastezanje
                  svih dijelova tijela, a za svaku vježbu na raspolaganju su najmanje
                  tri istovrsne sprave, što omogućuje brzo izmjenično vježbanje većih
                  organiziranih grupa i momčadi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== UDOBNOST ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text (links) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Usluge
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Udobnost
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  U sklopu hotela je restoran koji Vam nudi tradicionalna autohtona
                  jela, te jela po narudžbi. Jela spravljaju vrhunski kuhari uz bogatu
                  ponudu stranih i domaćih vina. Pokraj restorana nalazi se caffe bar
                  u kojem možete uz jutarnju kavu pročitati dnevni tisak.
                </p>
                <p>
                  Netom ispod završetka skijaških staza nalazi se restoran Ognjišta
                  koji u planinskom ambijentu nudi gotova jela za brzu okrijepu i
                  nastavak skijanja bez ulaska u hotel. Odmah preko puta restorana
                  &quot;Ognjišta&quot; se nalazi zasebna zgrada gdje možete iznajmiti
                  komletnu ski opremu, kao i dvije škole skijanja u kojima
                  profesionalno obučeni treneri održavaju satove skijanja za sve
                  zainteresirane.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/restoran-ognjista"
                  className="inline-flex items-center gap-2 text-sm text-[#00c0f7] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Restoran Ognjišta <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/skola-skijanja"
                  className="inline-flex items-center gap-2 text-sm text-[#00c0f7] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Škola skijanja <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Images (rechts) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-3"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image src="/images/hotel-03.jpg" alt="Hotel Interieur" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] mt-6">
                <Image src="/images/ognjista-1.jpg" alt="Restoran Ognjišta" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Bazen & Wellness", desc: "Olimpijski bazen 25m x 8m, saune, masaže", img: "/images/headerBazen.jpg", link: "/bazen" },
              { title: "Motel Tikvice", desc: "Na vrhu staza, 1.560m nadmorske visine", img: "/images/headerTikvice.jpg", link: "/motel-tikvice" },
              { title: "Skijalište", desc: "Preko 13 km staza sa 5 ski liftova", img: "/images/headerSkijalista.jpg", link: "/skijalista" },
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
      <section className="py-16 bg-[#163c6f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Rezervirajte svoj boravak
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Kontaktirajte nas za rezervacije i posebne ponude
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                {tc("contact_us")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cjenik"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
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

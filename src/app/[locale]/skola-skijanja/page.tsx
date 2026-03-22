"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Baby, Users, Clock, Phone, Facebook, User } from "lucide-react";
import { useTranslations } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const groupPricing = [
  { days: "1 dan", label: "Jednodnevni tečaj", price: "31" },
  { days: "2 dana", label: "Dvodnevni tečaj", price: "57" },
  { days: "3 dana", label: "Trodnevni tečaj", price: "82,50" },
  { days: "4 dana", label: "Četverodnevni tečaj", price: "98" },
  { days: "5 dana", label: "Petodnevni tečaj", price: "113,50" },
];

export default function SkolaSkijanja() {
  const tc = useTranslations("common");
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerSkolaSkijanja.jpg"
          alt="Škola skijanja"
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
                Obuka
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                Škola skijanja i snowboarda
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                Kvalificirani instruktori za sve uzraste i nivoe
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS BAR ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              { icon: GraduationCap, value: "5+", label: "Godina starosti" },
              { icon: Users, value: "7-10", label: "Polaznika u grupi" },
              { icon: Baby, value: "3-6", label: "Ski-vrtić (godine)" },
              { icon: User, value: "1:1", label: "Individualna obuka" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

      {/* ===== KVALIFICIRANI INSTRUKTORI ===== */}
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
                  src="/images/headerSkolaSkijanja.jpg"
                  alt="Škola skijanja instruktori"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#163c6f] text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <GraduationCap className="w-8 h-8 mb-1" />
                <p className="text-sm font-semibold">Certificirani</p>
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
                Naš tim
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Kvalificirani ski-instruktori
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  U našoj posebnoj ponudi je i škola skijanja &quot;Adria Ski&quot;. U
                  školi rade kvalificirani ski-instruktori koji će Vas uvesti u sve
                  tajne skijanja. U sklopu škole djeluje i &quot;ski-vrtić&quot;,
                  dodatna pogodnost za djecu i roditelje. Osim učenja prvih koraka na
                  skijama u vrtiću se djeca mogu zabaviti i igrama na snijegu uz
                  prisustvo animatora te sanjkanjem. Ski-vrtiću mogu pristupiti djeca
                  od 3-6 godina starosti.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== DUGOGODIŠNJE ISKUSTVO ===== */}
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
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Iskustvo
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Dugogodišnje iskustvo
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Pristup školi skijanja imaju pravo sve osobe starije od 5 godina.
                  Oboružani dugogodišnjim iskustvom preporučamo Vam da izbor metoda,
                  oblik rada, izbor terena i sve preostalo prepustite Vašem učitelju
                  skijanja čije će Vas znanje i iskustvo idealnim putem (stazom)
                  dovesti do željenog cilja.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-[#3d3d3d]">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Radno vrijeme:</span> Tjedno 09-16h / Vikend 08-19h
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#3d3d3d]">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div className="text-sm">
                    <p><span className="font-semibold">Ured:</span> +387 63 096 520</p>
                    <p><span className="font-semibold">Mario:</span> +387 63 331 800</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#3d3d3d]">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Facebook:</span> škola skijanja i snowboarda adriaski
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-3"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image src="/images/staze-4.jpg" alt="Škola skijanja staza" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] mt-6">
                <Image src="/images/staze-9.jpg" alt="Škola skijanja učenici" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Cijene
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              Cjenik
            </h2>
            <p className="mt-3 text-gray-500">Grupni tečajevi (7 – 10 polaznika)</p>
          </motion.div>

          {/* Group pricing */}
          <div className="space-y-3 mb-8">
            {groupPricing.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#f2f3f4] rounded-xl px-6 py-4 flex items-center justify-between hover:bg-[#e8e9ea] transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#163c6f] text-white text-xs font-bold flex-shrink-0">
                    {item.days}
                  </span>
                  <span className="text-[#3d3d3d] font-medium">{item.label}</span>
                </div>
                <span className="text-xl font-heading font-bold text-[#163c6f]">
                  {item.price} <span className="text-sm font-normal text-gray-500">€</span>
                </span>
              </motion.div>
            ))}
          </div>

          {/* Individual pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#163c6f] rounded-2xl p-6 md:p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <User className="w-5 h-5 text-[#00c0f7]" />
              <span className="text-[#00c0f7] text-sm font-semibold uppercase tracking-wider">Premium</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-1">
              Individualna obuka
            </h3>
            <p className="text-white/60 text-sm mb-4">1 na 1 / 60 minuta</p>
            <p className="text-4xl font-heading font-bold text-[#00c0f7]">
              30 <span className="text-lg text-white/70">€</span>
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 mt-5 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-sm"
            >
              Rezerviraj termin <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-16 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Skijalište", desc: "Preko 13 km uređenih staza", img: "/images/headerSkijalista.jpg", link: "/skijalista" },
              { title: "Cjenik", desc: "Kompletne cijene ski karata i opreme", img: "/images/staze-2.jpg", link: "/cjenik" },
              { title: "Hotel Adria Ski", desc: "Smještaj uz same staze", img: "/images/headerHotel.jpg", link: "/hotel-adria-ski" },
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

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/headerSkolaSkijanja.jpg"
          alt="Škola skijanja"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Naučite skijati s nama
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Rezervirajte tečaj skijanja za sebe ili svoju djecu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+38763096520"
                className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Nazovite nas
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Kontakt obrazac
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mountain,
  Clock,
  Snowflake,
  ArrowRight,
  CableCar,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const lifts = [
  { name: "Baby lift", length: "162 m", difficulty: "-", color: "bg-gray-300" },
  { name: "Sidro vučnica 1", length: "1.150 m", difficulty: "Plava", color: "bg-blue-500" },
  { name: "Sidro vučnica 2", length: "1.070 m", difficulty: "Plava/Crvena", color: "bg-gradient-to-r from-blue-500 to-red-500" },
  { name: "Dvosjed", length: "960 m", difficulty: "Plava", color: "bg-blue-500" },
  { name: "Četverosjed", length: "1.860 m", difficulty: "Plava/Crvena", color: "bg-gradient-to-r from-blue-500 to-red-500" },
];

export default function SkigebietPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/headerSkijaliste.jpg"
          alt="Skijalište Adria Ski"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/70 to-dark/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-6 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              SKIJALIŠTE
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Skijalište
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Preko 13 km uređenih ski staza
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-4">
                Pregled skijaške ponude
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mb-8 rounded-full" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  U sezoni 2023/2024 dodajemo za 2 nova ski lifta. U pitanju su ski liftovi VUCNICE/SIDRO oko 1150 metara dužine.
                </p>
                <p>
                  Skijaši svakodnevno mogu od 09,00-16,00 sati uživati na preko 13 kilometara odlično pripremljenih skijaških staza sa 5 ski-liftova.
                </p>
                <p>
                  Ono što je bitno napomenuti je da su sve staze međusobno povezane i udaljene nekoliko desetaka metara od središnjeg kompleksa hotela.
                </p>
                <p>
                  Staze su raznolike tako da i početnici i skijaši sa višegodišnjim stažom u skijanju mogu pronaći ono što im najviše odgovara.
                </p>
                <p>
                  Ljubazno osoblje na terenu će Vam se u svakom trenutku naći pri ruci bilo da se radi o pomoći pri ulasku na ski lift ili dodatnim objašnjenjima vezanim za ski staze.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Radno vrijeme
                    </p>
                    <p className="font-heading text-xl text-dark">
                      09:00 - 16:00
                    </p>
                  </div>
                </div>
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Staze
                    </p>
                    <p className="font-heading text-xl text-dark">
                      13+ km
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/skijaliste1.jpg"
                  alt="Ski staze Adria Ski"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lift Infrastructure Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Lift infrastruktura
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Četverosjed u dužini od 1850 metara, jedna sjedežnica (dvosjed) u dužini od 980 metara, dvije &ldquo;sidro&rdquo; vucnice u dužini od 1080 i 1150 metara, te jedan baby lift dužine 300 metara.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {lifts.map((lift, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                variants={cardVariants}
              >
                <div className={`h-1 ${lift.color}`} />
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6">
                    <CableCar className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-xl text-dark">
                    {lift.name}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-accent text-sm uppercase tracking-wider">Dužina</span>
                      <span className="font-heading text-lg text-dark">{lift.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-accent text-sm uppercase tracking-wider">Težina</span>
                      <span className="font-heading text-lg text-dark">{lift.difficulty}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/skijaliste2.jpg"
                  alt="Zasnježene staze Adria Ski"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-4">
                Moderna oprema i novosti
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mb-8 rounded-full" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Topovi za umjetni snijeg za čiju su svrhu izgrađena dodatna umjetna jezera, omogućavaju umjetno zasnježivanje kako bi se spriječio nedostatak snijega ili vode.
                </p>
                <p>
                  U sezoni 2023/2024 dodajemo za 2 nova ski lifta. U pitanju su ski liftovi VUCNICE/SIDRO oko 1150 metara dužine.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-light rounded-full px-5 py-3">
                  <Snowflake className="w-5 h-5 text-secondary-500" />
                  <span className="text-dark font-body">Umjetno zasnježavanje</span>
                </div>
                <div className="flex items-center gap-3 bg-light rounded-full px-5 py-3">
                  <Mountain className="w-5 h-5 text-secondary-500" />
                  <span className="text-dark font-body">Noćno osvjetljenje</span>
                </div>
                <div className="flex items-center gap-3 bg-light rounded-full px-5 py-3">
                  <CableCar className="w-5 h-5 text-secondary-500" />
                  <span className="text-dark font-body">Novi liftovi 2023/24</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-16"
            {...fadeInUp}
          >
            Galerija staza
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {[
              { src: "https://www.adriaski.net/wp-content/uploads/staze-1.jpg", alt: "Ski staze 1" },
              { src: "https://www.adriaski.net/wp-content/uploads/staze-5.jpg", alt: "Ski staze 5" },
              { src: "https://www.adriaski.net/wp-content/uploads/staze-8.jpg", alt: "Ski staze 8" },
              { src: "https://www.adriaski.net/wp-content/uploads/staze-12.jpg", alt: "Ski staze 12" },
              { src: "https://www.adriaski.net/wp-content/uploads/staze-15.jpg", alt: "Ski staze 15" },
              { src: "https://www.adriaski.net/wp-content/uploads/staze-20.jpg", alt: "Ski staze 20" },
            ].map((image, i) => (
              <motion.div
                key={i}
                className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 border border-gray-100 group"
                variants={cardVariants}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Pogledajte cijene ski karata
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto mb-6 rounded-full" />
            <p className="text-white/80 text-xl mb-10">
              Dnevne, višednevne i sezonske ski karte za sve uzraste
            </p>
            <Link
              href="/preisliste"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Pogledajte cijene ski karata
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

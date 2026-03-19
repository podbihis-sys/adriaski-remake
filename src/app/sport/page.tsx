"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Waves, CircleDot, Mountain, Trophy } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const facilities = [
  {
    icon: Dumbbell,
    title: "Fitness centar",
    description: "Velika i moderno opremljena dvorana",
  },
  {
    icon: Waves,
    title: "Zatvoreni bazen",
    description: "Olimpijski bazen 25m x 8m",
  },
  {
    icon: CircleDot,
    title: "Nogometni teren",
    description: "Svakodnevno odr\u017Eavan travnjak, cijele godine",
  },
  {
    icon: Mountain,
    title: "Planinski zrak",
    description: "1.200m nadmorske visine, bogat kisikom",
  },
];

const references = [
  {
    sport: "Nogomet",
    teams: "FC INGOLSTADT, ZAGREB, ŽELJEZNIČAR, CROATIA SESVETE, HRVATSKI DRAGOVOLJAC, ŠIROKI BRIJEG, LUČKO, SPLIT, ZRINJSKI, POSUŠJE, OLIMPIK, JUNAK, MOSOR, SLAVEN BELUPO, SARAJEVO, DUGOPOLJE, ŠIBENIK, TROGIR, GOŠK-GABELA, SOLIN, HAJDUK ...",
  },
  {
    sport: "Košarka",
    teams: "ŠIROKI, TROGIR, GRUDE ...",
  },
  {
    sport: "Kuglanje",
    teams: "Kuglački klub MERTOJAK",
  },
  {
    sport: "Karate",
    teams: "HRVATSKI KARATE SAVEZ, Karate klub (LJUBUŠKI, ZRINJSKI ...)",
  },
  {
    sport: "Rukomet",
    teams: "IZVIĐAČ, LJUBUŠKI, SOKOLOVI-IMOTSKI, ZAGORJE, KOTEX, GRUDE ...",
  },
  {
    sport: "Plivanje",
    teams: "ŠIBENIK, SARAJEVO, JADERA, JADRAN, MORNAR ...",
  },
  {
    sport: "Taekwondo",
    teams: "TEAKWANDO SAVEZ BIH",
  },
];

export default function SportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/fitness-1.jpg"
          alt="Sportske pripreme Adria Ski"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/60 to-dark/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-6 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              SPORT
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Sportske pripreme
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Visinski trening na 1.200m nadmorske visine
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl text-dark mb-8">
              Idealni uvjeti za sportske ekipe
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Idealni atmosferski uvjeti, planinski zrak bogat kisikom kojeg dodatno obogaćuje gusta šuma, veliki fitness centar te unutarnji bazen od početka su u našoj ponudi. Novost je veliko nogometno igralište pokraj samog hotela koje sa svakodnevno njegovanom travom (i za vrijeme zime) omogućava nogometnim momčadima rad s loptom u tijeku kondicijskih priprema.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Na\u0161i kapaciteti
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Sve \u0161to je potrebno za profesionalne sportske pripreme
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                  variants={cardVariants}
                >
                  <div className="h-1 bg-gradient-to-r from-[#1B3A6B] to-[#0EA5E9]" />
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-xl text-dark mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-orange-500/10 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-[#F59E0B]" />
            </div>
            <h2 className="font-heading text-4xl text-dark mb-4">
              Na\u0161e reference
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Brojni sportski klubovi i savezi odabrali su nas za svoje pripreme
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {references.map((ref, i) => (
              <motion.div
                key={i}
                className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center gap-4"
                variants={cardVariants}
              >
                <span className="font-accent text-sm uppercase tracking-widest text-[#1B3A6B] font-semibold min-w-[160px]">
                  {ref.sport}
                </span>
                <span className="text-gray-600">{ref.teams}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sport Images Gallery */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Galerija
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Sportski tereni i objekti
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              "https://www.adriaski.net/wp-content/uploads/20170701_094613.jpg",
              "https://www.adriaski.net/wp-content/uploads/20170619_174347.jpg",
              "https://www.adriaski.net/wp-content/uploads/20170619_174336.jpg",
              "https://www.adriaski.net/wp-content/uploads/20170619_174331.jpg",
              "https://www.adriaski.net/wp-content/uploads/20170701_094605.jpg",
              "https://www.adriaski.net/wp-content/uploads/20170701_094613-1.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-lg group ${i === 0 ? "md:col-span-2 h-72" : "h-56"}`}
                variants={cardVariants}
              >
                <Image
                  src={src}
                  alt={`Sportski teren ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sportpark Project */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-1 bg-gradient-to-r from-[#F59E0B] to-orange-500" />
            <div className="p-8 md:p-12">
              <h2 className="font-heading text-3xl text-dark mb-6">
                Caju\u0161a Sports Complex
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2.5 flex-shrink-0" />
                  <span>
                    Ukupna investicija: ~10 mil. KM
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2.5 flex-shrink-0" />
                  <span>
                    Planirano: 6 nogometnih terena + tenis, rukomet
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2.5 flex-shrink-0" />
                  <span>
                    Kapacitet: 10 klubova / ~300 sporta\u0161a istovremeno
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-white mb-6">
              Kontaktirajte nas za sportske pripreme
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Organizirajte trening za va\u0161u ekipu u planinskom ambijentu
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Kontaktirajte nas za sportske pripreme
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Baby,
  Clock,
  Phone,
  ArrowRight,
  GraduationCap,
  Snowflake,
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

const prices = [
  { type: "Grupna nastava (7-10 polaznika)", duration: "1 dan", price: "31 €" },
  { type: "Grupna nastava", duration: "2 dana", price: "57 €" },
  { type: "Grupna nastava", duration: "3 dana", price: "82,50 €" },
  { type: "Grupna nastava", duration: "4 dana", price: "98 €" },
  { type: "Grupna nastava", duration: "5 dana", price: "113,50 €" },
  { type: "Privatni sat", duration: "60 min (1:1)", price: "30 €" },
];

export default function SkischulePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/headerSkijaliste.jpg"
          alt="Škola skijanja Adria Ski"
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
              ŠKOLA SKIJANJA
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Škola skijanja
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Kvalificirani ski-instruktori za sve uzraste
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
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
              <h2 className="font-heading text-4xl text-dark mb-8">
                O školi skijanja
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  U našoj posebnoj ponudi je i škola skijanja &quot;Adria Ski&quot;. U školi rade kvalificirani ski-instruktori koji će Vas uvesti u sve tajne skijanja.
                </p>
                <p>
                  Pristup školi skijanja imaju pravo sve osobe starije od 5 godina. Oboružani dugogodišnjim iskustvom preporučamo Vam da izbor metoda, oblik rada, izbor terena i sve preostalo prepustite Vašem učitelju skijanja čije će Vas znanje i iskustvo idealnim putem dovesti do željenog cilja.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Instruktori
                    </p>
                    <p className="font-heading text-lg text-dark">
                      Kvalificirani i certificirani
                    </p>
                  </div>
                </div>
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Grupe
                    </p>
                    <p className="font-heading text-lg text-dark">
                      7-10 polaznika po grupi
                    </p>
                  </div>
                </div>
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Snowflake className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Uzrast
                    </p>
                    <p className="font-heading text-lg text-dark">
                      Djeca i odrasli
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ski Kindergarten Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-2/5 order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-1 bg-gradient-to-r from-[#F59E0B] to-[#0EA5E9]" />
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6">
                    <Baby className="w-8 h-8 text-accent-500" />
                  </div>
                  <h3 className="font-heading text-2xl text-dark mb-6">
                    Ski-vrtić
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-accent text-sm uppercase tracking-wider text-gray-500">Dob</span>
                        <p className="text-dark font-heading text-lg">3-6 godina</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-accent text-sm uppercase tracking-wider text-gray-500">Aktivnosti</span>
                        <p className="text-gray-600">Igre na snijegu, sanjkanje, nadzirane aktivnosti + obuka skijanja</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-accent text-sm uppercase tracking-wider text-gray-500">Tečajevi</span>
                        <p className="text-gray-600">Minimalna dob za tečajeve: 5 godina</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-3/5 order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-8">
                Program za najmlađe
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  U sklopu škole djeluje i &quot;ski-vrtić&quot;, dodatna pogodnost za djecu i roditelje. Osim učenja prvih koraka na skijama u vrtiću se djeca mogu zabaviti i igrama na snijegu uz prisustvo animatora te sanjkanjem.
                </p>
                <p>
                  Ski-vrtiću mogu pristupiti djeca od 3-6 godina starosti.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Cijene tečajeva
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Grupna i privatna nastava za sve razine znanja
          </motion.p>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-1 bg-gradient-to-r from-[#1B3A6B] to-[#0EA5E9]" />
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 px-8 py-5 bg-light border-b border-gray-100">
                <span className="font-accent text-sm uppercase tracking-widest text-gray-500">Tip</span>
                <span className="font-accent text-sm uppercase tracking-widest text-gray-500">Trajanje</span>
                <span className="font-accent text-sm uppercase tracking-widest text-gray-500 text-right">Cijena</span>
              </div>
              {/* Table Rows */}
              {prices.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 px-8 py-5 ${
                    i < prices.length - 1 ? "border-b border-gray-50" : ""
                  } ${i === prices.length - 1 ? "bg-gradient-to-r from-[#1B3A6B]/5 to-[#0EA5E9]/5" : "hover:bg-gray-50"} transition-colors duration-200`}
                >
                  <span className="text-dark font-body">{row.type}</span>
                  <span className="text-gray-600">{row.duration}</span>
                  <span className="font-heading text-lg text-dark text-right">{row.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working Hours & Contact */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/* Working Hours Card */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              variants={cardVariants}
            >
              <div className="h-1 bg-gradient-to-r from-[#1B3A6B] to-[#0EA5E9]" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-2xl text-dark mb-6">
                  Radno vrijeme
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-600">Radnim danom</span>
                    <span className="font-heading text-lg text-dark">09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Vikend (pet-ned)</span>
                    <span className="font-heading text-lg text-dark">08:00 - 19:00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              variants={cardVariants}
            >
              <div className="h-1 bg-gradient-to-r from-[#F59E0B] to-[#0EA5E9]" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="font-heading text-2xl text-dark mb-6">
                  Kontakt
                </h3>
                <div className="space-y-4">
                  <div className="py-3 border-b border-gray-50">
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Ured škole skijanja
                    </p>
                    <a
                      href="tel:+38763096520"
                      className="font-heading text-lg text-primary-600 hover:text-secondary-500 transition-colors"
                    >
                      +387 63 096 520
                    </a>
                  </div>
                  <div className="py-3">
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Mario
                    </p>
                    <a
                      href="tel:+38763331800"
                      className="font-heading text-lg text-primary-600 hover:text-secondary-500 transition-colors"
                    >
                      +387 63 331 800
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="font-heading text-4xl text-white mb-6">
              Rezervirajte tečaj
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Javite nam se i rezervirajte svoje mjesto u školi skijanja
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Rezervirajte tečaj
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

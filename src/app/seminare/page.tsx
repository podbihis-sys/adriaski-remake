"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Presentation, CheckCircle } from "lucide-react";

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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const halls = [
  {
    title: "Mala sala",
    icon: Users,
    description: "Jedan od segmeneta našeg poslovanja kojim se ponosimo i koji iz dana u dan razvijamo te dižemo na višu razinu je organizacija svih vrsta seminara i tematskih skupova. Za skupove do 60 osoba idealna je mala sala koja se nalazi tik do restorana na nultoj razini hotela. Budući da stolovi nisu fiksni moguće je organizirati predavanje ili panel diskusiju ovisno o potrebama klijenta.",
    features: [
      "Lokacija: nulta razina hotela, tik do restorana",
      "Kapacitet: do 60 osoba",
      "Fleksibilan raspored stolova za predavanja ili panel diskusije",
    ],
  },
  {
    title: "Velika sala",
    icon: Presentation,
    description: "Za veće skupove idealna je sala u podzemnoj razini hotela. Sa smještajnim kapacitetom do 250 osoba, polivalentim rasporedom stolica te oblikom koji omogućava formiranje odvojenih radnih skupina, u potpunosti zadovoljava uvjete za višednevne seminare ili skupove. Sala je u potpunosti opremljena audio i video tehnikom, a u njenom sklopu se nalazi i šank za kratku i brzu okrijepu.",
    features: [
      "Lokacija: podzemna razina hotela",
      "Kapacitet: do 250 osoba",
      "Audio i video oprema",
      "Integriran šank za kratku i brzu okrijepu",
      "Pogodno za višednevne seminare i konferencije",
      "Mogućnost formiranja odvojenih radnih skupina",
    ],
  },
];

const additionalServices = [
  "Catering usluga",
  "Smje\u0161taj za sudionike",
  "Wellness i rekreacija nakon rada",
];

export default function SeminarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/hotel-03.jpg"
          alt="Seminari i konferencije Adria Ski"
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
              POSLOVNI PROSTOR
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Seminari i konferencije
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Poslovni boravak u planinskom ambijentu
          </motion.p>
        </div>
      </section>

      {/* Halls Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Na\u0161e dvorane
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Dva profesionalno opremljena prostora za va\u0161e poslovne potrebe
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {halls.map((hall, i) => {
              const Icon = hall.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                  variants={cardVariants}
                >
                  <div className="h-1 bg-gradient-to-r from-[#1B3A6B] to-[#0EA5E9]" />
                  <div className="p-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-2xl text-dark mb-4">
                      {hall.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {hall.description}
                    </p>
                    <ul className="space-y-3">
                      {hall.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <CheckCircle className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Dodatne usluge
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Sve \u0161to vam je potrebno za uspje\u0161an poslovni doga\u0111aj
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 text-center"
                variants={cardVariants}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <p className="font-heading text-lg text-dark">{service}</p>
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
              Zatražite ponudu za seminar
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto mb-6 rounded-full" />
            <p className="text-white/80 text-xl mb-10">
              Javite nam se s detaljima va\u0161eg doga\u0111aja
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Zatra\u017Eite ponudu za seminar
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

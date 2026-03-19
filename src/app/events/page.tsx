"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Music,
  Trophy,
  Bus,
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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const events = [
  {
    title: "Otvaramo skijašku sezonu 2026",
    date: "30. prosinac 2025.",
    icon: Snowflake,
    image: "https://www.adriaski.net/wp-content/uploads/adriaski-staze-2026.jpg",
    description:
      "U petak 2.1.2026. godine službeno otvaramo skijašku sezonu na Adria Ski. Pripremili smo izvrsne uvjete za sve skijaše i snowboardere.",
    details: [
      "U funkciji: S-staza i dvosjed, četverosjed spreman",
    ],
    accent: "bg-secondary-500",
  },
  {
    title: "Doček Nove godine",
    date: "27. prosinac 2024.",
    icon: Music,
    image: "https://www.adriaski.net/wp-content/uploads/adriaski-docek-2025.jpg",
    description:
      "Rezervacije za novogodišnju zabavu. Proslavite Novu godinu uz nezaboravnu atmosferu na Adria Ski. Glazba uživo uz Romea Nikolića, svečana večera i ponoćna zdravica.",
    details: [
      "Piće dobrodošlice, večera, nagrade, ponoćna zdravica",
      "Kontakt: +387 34 275 100, recepcija@adriaski.net",
    ],
    accent: "bg-accent-500",
  },
  {
    title: "Uskoro počinje turnir za male nogometaše \"Adria Ski Cup 2024.\"",
    date: "5. kolovoz 2024.",
    icon: Trophy,
    image: "https://www.adriaski.net/wp-content/uploads/adriaski-cup-2024.jpeg",
    description:
      "Međunarodni turnir za djecu od 9-11. kolovoza. Natjecanje mladih ekipa iz regije u prekrasnom planinskom okruženju.",
    details: [
      "Mjesto: Kupres, SRC Adria Ski",
    ],
    accent: "bg-green-500",
  },
  {
    title: "Obavijest zbog Fis natjecanja!",
    date: "22. siječanj 2024.",
    icon: Snowflake,
    image: "https://www.adriaski.net/wp-content/uploads/kupres-skijanje_59541773.jpg",
    description:
      "Staza S neće raditi zbog Fis natjecanja.",
    details: [],
    accent: "bg-red-500",
  },
  {
    title: "JEDNODNEVNI IZLETI IZ SPLITA",
    date: "Subotom i nedjeljom (zimska sezona)",
    icon: Bus,
    image: "https://www.adriaski.net/wp-content/uploads/romeo-nikolic-prvi-ples1.jpg",
    description:
      "Organizirani jednodnevni izleti iz Splita na skijalište Adria Ski. Udoban prijevoz autobusom i cijeli dan na stazama.",
    details: [
      "Organizator: Delminium Travel",
      "Cijena: 12 \u20AC/osoba; djeca do 10 god: 10,80 \u20AC",
    ],
    accent: "bg-primary-600",
  },
  {
    title: "Skijalište otvara 13.01.2024. (subota) 9:00",
    date: "11. siječanj 2024.",
    icon: Snowflake,
    image: "https://www.adriaski.net/wp-content/uploads/toni-pecic-1.jpg",
    description:
      "Skijalište će početi sa radom u subotu (13.01.2024.).",
    details: [],
    accent: "bg-secondary-500",
  },
  {
    title: "Doček Nove godine 2024. godine",
    date: "Prosinac 2023.",
    icon: Music,
    image: "https://www.adriaski.net/wp-content/uploads/top-1-22.jpg",
    description:
      "Proslavite doček Nove godine 2024. uz nezaboravnu atmosferu na Adria Ski.",
    details: [],
    accent: "bg-accent-500",
  },
  {
    title: "Dočekajte Novu 2024. godinu u hotelu Jezero",
    date: "Prosinac 2023.",
    icon: Music,
    image: "https://www.adriaski.net/wp-content/uploads/adriaski-docek-2025.jpg",
    description:
      "Novogodišnja proslava u hotelu Jezero uz bogat program i zabavu.",
    details: [],
    accent: "bg-green-500",
  },
  {
    title: "Počinju pripreme za skijašku sezonu na Adria ski",
    date: "Jesen 2023.",
    icon: Snowflake,
    image: "https://www.adriaski.net/wp-content/uploads/adriaski-staze-2026.jpg",
    description:
      "Pripreme za novu skijašku sezonu su u tijeku na Adria Ski.",
    details: [],
    accent: "bg-primary-600",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/headerHotel.jpg"
          alt="Događanja Adria Ski"
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
              DOGAĐANJA
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Događanja
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Aktualni događaji i novosti
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Nadolazeći i nedavni događaji
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Budite u toku s najnovijim aktivnostima i ponudama
          </motion.p>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                  variants={cardVariants}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Event Image */}
                    {event.image && (
                      <div className="relative md:w-80 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute top-4 left-4 ${event.accent} rounded-full p-3 shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1">
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-accent text-base font-semibold">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl text-dark mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {event.details.length > 0 && (
                        <div className="space-y-2">
                          {event.details.map((detail, j) => (
                            <div
                              key={j}
                              className="flex items-start gap-2 text-sm text-gray-500"
                            >
                              <MapPin className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter / Info Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-8">
                Ostanite informirani
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Pratite naše aktualnosti i ne propustite nadolazeće događaje.
                  Za sve dodatne informacije o događajima, cijenama i
                  rezervacijama slobodno nas kontaktirajte.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Telefon
                    </p>
                    <p className="font-heading text-lg text-dark">
                      +387 34 275 100
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Email
                    </p>
                    <p className="font-heading text-lg text-dark">
                      recepcija@adriaski.net
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/headerHotel.jpg"
                  alt="Hotel Adria Ski"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
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
              Kontaktirajte nas za više informacija
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto mb-6 rounded-full" />
            <p className="text-white/80 text-xl mb-10">
              Saznajte više o nadolazećim događajima i rezervirajte svoje
              mjesto
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Kontaktirajte nas za više informacija
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

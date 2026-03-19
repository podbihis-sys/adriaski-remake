"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Waves,
  Flame,
  Dumbbell,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

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
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    icon: Waves,
    title: "Olimpijski bazen",
    description: "25m x 8m, pogled na zimski pejzaž",
  },
  {
    icon: Flame,
    title: "2 saune",
    description: "Finska sauna i parna sauna",
  },
  {
    icon: Dumbbell,
    title: "Fitness centar",
    description: "Moderna oprema, kapacitet do 30 osoba",
  },
  {
    icon: Heart,
    title: "Masaža",
    description: "Profesionalne masaže za opuštanje i relaksaciju",
  },
];

const galleryImages = [
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-1.jpg",
    alt: "Olimpijski bazen Adria Ski",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-2.jpg",
    alt: "Bazen",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-3.jpg",
    alt: "Bazen pogled",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-4.jpg",
    alt: "Bazen zona",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-5.jpg",
    alt: "Wellness zona",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-6.jpg",
    alt: "Bazen detalj",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-7.jpg",
    alt: "Bazen pogled 2",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/bazen-8.jpg",
    alt: "Bazen zona 2",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/fitness-1.jpg",
    alt: "Fitness centar",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/fitness-2.jpg",
    alt: "Fitness oprema",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/fitness-3.jpg",
    alt: "Fitness sprave",
  },
  {
    src: "https://www.adriaski.net/wp-content/uploads/fitness-4.jpg",
    alt: "Fitness dvorana",
  },
];

export default function WellnessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/headerBazen.jpg"
          alt="Bazen i wellness Adria Ski"
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
              WELLNESS
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Bazen & Wellness
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Olimpijski bazen, saune i fitness centar
          </motion.p>
        </div>
      </section>

      {/* Pool Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-8">
                Olimpijski zatvoreni bazen
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Nakon aktivno provedenog dana u skijanju itekako će Vam dobro doći opuštanje i plivanje u bazenu koji se nalazi u sklopu wellness centra hotela &lsquo;Adria ski&rsquo;.
                </p>
                <p>
                  Bazenska voda za kupanje zahtjeva punu funkcionalnost i pouzdanost u radu svih sustava strojarskog pogona. Kvaliteta vode osigurana je kontinuiranim nadzorom koji
                  obuhvaća temperaturu, slobodni klor, redoks potencijal i pH
                  vrijednost. Pješčana filtracija provodi se svakih 48 sati, a
                  automatski sustav doziranja garantira optimalne uvjete u
                  svakom trenutku.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Kontinuirani nadzor: temperatura, slobodni klor, redoks potencijal, pH vrijednost",
                  "Pješčana filtracija (čišćenje svakih 48 sati)",
                  "Automatski sustav doziranja",
                  "Obvezno tuširanje i dezinfekcija stopala prije ulaska",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/bazen-1.jpg"
                  alt="Olimpijski bazen Adria Ski"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Wellness ponuda
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Sve što vam je potrebno za potpunu relaksaciju na jednom mjestu
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                  variants={cardVariants}
                >
                  <div className="h-1 bg-gradient-to-r from-secondary-500 to-accent-500" />
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-xl text-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Fitness Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/fitness-1.jpg"
                  alt="Fitness centar Adria Ski"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-8">
                Fitness centar
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  U velikoj i suvremeno opremljenoj dvorani za fitness možete se zabaviti i rekreirati uz grupne treninge. Fitness je opremljen najmodernijim spravama, koje pojedinačno ili u kombinaciji više njih, nude mogućnost za oblikovanje svakog dijela tijela i dosezanje svakog sportsko-natjecateljskog cilja.
                </p>
                <p>
                  &ldquo;Adria ski&rdquo; je u svim aktivnostima opredjeljen na svoje klijente. Od ulaska u naše prostore i elementarnih uputa koje dajemo početnicima, do izrade specifičnih programa treninga, prilagođenih željama i mogućnostima svakog člana i posjetioca.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-light rounded-full px-5 py-3">
                  <Dumbbell className="w-5 h-5 text-secondary-500" />
                  <span className="text-dark font-body">Individualni treninzi</span>
                </div>
                <div className="flex items-center gap-3 bg-light rounded-full px-5 py-3">
                  <Heart className="w-5 h-5 text-secondary-500" />
                  <span className="text-dark font-body">Grupne vježbe</span>
                </div>
                <div className="flex items-center gap-3 bg-light rounded-full px-5 py-3">
                  <CheckCircle className="w-5 h-5 text-secondary-500" />
                  <span className="text-dark font-body">Programi za početnike</span>
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
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Galerija
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Pogledajte naše wellness i fitness sadržaje
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
                variants={cardVariants}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-white mb-6">
              Rezervirajte wellness odmor
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Opustite se u našem olimpijskom bazenu, saunama i fitness centru
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Rezervirajte wellness odmor
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

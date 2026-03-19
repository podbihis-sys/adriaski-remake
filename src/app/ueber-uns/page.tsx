"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Mountain,
  Waves,
  Flame,
  Dumbbell,
  UtensilsCrossed,
  Coffee,
  ExternalLink,
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
    icon: Mountain,
    title: "Skijalište",
    description: "Preko 13 km uređenih ski staza, 5 ski liftova",
  },
  {
    icon: Waves,
    title: "Olimpijski bazen",
    description: "25m x 8m, pogled na zimski pejzaž",
  },
  {
    icon: Flame,
    title: "2 saune",
    description: "Finska i parna sauna",
  },
  {
    icon: Dumbbell,
    title: "Fitness centar",
    description: "Moderna oprema, do 30 osoba",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoran",
    description: "Tradicionalna bosanska kuhinja",
  },
  {
    icon: Coffee,
    title: "Café bar",
    description: "Dnevni tisak, toplina i ugodnost",
  },
];

interface CounterData {
  target: number;
  label: string;
  suffix: string;
  prefix: string;
}

const counters: CounterData[] = [
  { target: 256, label: "Ležajeva", suffix: "", prefix: "" },
  { target: 13, label: "km staza", suffix: "+", prefix: "" },
  { target: 5, label: "Ski liftova", suffix: "", prefix: "" },
  { target: 1200, label: "m nadmorske visine", suffix: "", prefix: "" },
];

function formatNumber(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString("de-DE");
  }
  return n.toString();
}

function AnimatedCounter({ target, label, suffix, prefix }: CounterData) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(interval);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <div className="text-5xl md:text-6xl font-heading font-bold text-[#F59E0B] mb-2">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-sm font-accent uppercase tracking-widest text-white/70">
        {label}
      </div>
    </div>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/hotel-01.jpg"
          alt="Hotel Adria Ski"
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
              O NAMA
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Hotel Adria Ski
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Premium ski & wellness resort na Kupreškoj visoravni
          </motion.p>
        </div>
      </section>

      {/* Hotel Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text left 60% */}
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-8">
                O hotelu
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Kapacitet hotela Adria Ski je 256 ležajeva. Sve sobe opremljene su telefonom te TV uređajima sa digitalnim satelitskim sustavom. Svaka soba ima zasebno kupatilo. Hotel je opremljen malim olimpijskim bazenom (25m x 8m) koji zimi pruža jedinstveni pogled na snijegom prekrivenu borovu šumu.
                </p>
                <p>
                  U sklopu bazena su dvije saune, usluge masaže i veliki fitness centar u kojem istovremeno može vježbati 30-ak osoba.
                </p>
                <p>
                  U sklopu hotela je restoran koji Vam nudi tradicionalna autohtona jela, te jela po narudžbi. Jela spravljaju vrhunski kuhari uz bogatu ponudu stranih i domaćih vina.
                </p>
                <p>
                  Netom ispod završetka skijaških staza nalazi se restoran Ognjišta koji u planinskom ambijentu nudi gotova jela za brzu okrijepu i nastavak skijanja.
                </p>
              </div>
            </motion.div>

            {/* Image placeholder right 40% */}
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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

      {/* Ausstattung / Features Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-16"
            {...fadeInUp}
          >
            Naši sadržaji
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  variants={cardVariants}
                >
                  <div className="h-1 bg-gradient-to-r from-[#1B3A6B] to-[#0EA5E9]" />
                  <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-xl text-dark mt-6">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-3">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Hotel Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-16"
            {...fadeInUp}
          >
            Galerija hotela
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-01.jpg", alt: "Hotel Adria Ski 1" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-03.jpg", alt: "Hotel Adria Ski 3" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-05.jpg", alt: "Hotel Adria Ski 5" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-08.jpg", alt: "Hotel Adria Ski 8" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-10.jpg", alt: "Hotel Adria Ski 10" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-12.jpg", alt: "Hotel Adria Ski 12" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-15.jpg", alt: "Hotel Adria Ski 15" },
              { src: "https://www.adriaski.net/wp-content/uploads/hotel-18.jpg", alt: "Hotel Adria Ski 18" },
            ].map((image, i) => (
              <motion.div
                key={i}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 border border-gray-100"
                variants={cardVariants}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Counters Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {counters.map((counter, i) => (
              <AnimatedCounter key={i} {...counter} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Motel Tikvice Section */}
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
                  src="https://www.adriaski.net/wp-content/uploads/tikvice-1.jpg"
                  alt="Motel Tikvice"
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
                Motel Tikvice
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Dragi gosti, djelatnici hotela Adria Ski nastavljaju sa svojom tradicijom poboljšanja usluga, u sklopu kojih Vam predstavljamo MOTEL TIKVICE, koji se nalazi na 1560 metara nadmorske visine (na vrhu staza), sa restoranom, 4 Apartmana sa kuhinjom, 1 trokrevetnom sobom i 2 dvokrevetne sobe.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-2">
                    Apartman
                  </p>
                  <p className="font-heading text-2xl text-dark">
                    180,50 &euro;
                    <span className="text-base text-gray-500 font-body">
                      /dan
                    </span>
                  </p>
                </div>
                <div className="bg-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="font-accent text-sm uppercase tracking-widest text-gray-500 mb-2">
                    Sobe od
                  </p>
                  <p className="font-heading text-2xl text-dark">
                    51,54 &euro;
                    <span className="text-base text-gray-500 font-body">
                      /osoba
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel Jezero Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-dark mb-8">
              Hotel Jezero
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Najnoviji objekt Adria Ski kompleksa.
            </p>
            <a
              href="https://www.hotel-jezero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Posjetite Hotel Jezero
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

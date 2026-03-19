"use client";

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
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">
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
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-primary-600 to-primary-800">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary-500/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

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
                  Hotel raspolaže sa 256 ležajeva i to u jednokrevetnim,
                  dvokrevetnim sobama i apartmanima. Sve sobe su opremljene
                  telefonom, digitalnim SAT TV-om, te vlastitim kupatilom.
                </p>
                <p>
                  Wellness centar nudi zatvoreni olimpijski bazen dimenzija 25m x
                  8m, finsku saunu, parnu saunu, fitness centar kapaciteta do 30
                  osoba, te profesionalne masaže za potpuni odmor i relaksaciju.
                </p>
                <p>
                  Skijalište se prostire na preko 13 km uređenih staza svih
                  kategorija težine, s 5 ski liftova i školom skijanja za djecu
                  i odrasle. Staze su opremljene modernim sistemima za
                  umjetno zasnježivanje i noćno osvjetljenje.
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-600/20 to-secondary-500/20 aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Mountain className="w-16 h-16 text-primary-600/40 mx-auto mb-4" />
                    <p className="text-primary-600/60 font-accent text-sm uppercase tracking-widest">
                      Hotel Adria Ski
                    </p>
                  </div>
                </div>
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16 rounded-full bg-primary-600/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-xl text-dark mt-6">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-3">{feature.description}</p>
                </motion.div>
              );
            })}
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Mountain className="w-16 h-16 text-accent-600/40 mx-auto mb-4" />
                    <p className="text-accent-600/60 font-accent text-sm uppercase tracking-widest">
                      Motel Tikvice
                    </p>
                  </div>
                </div>
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
                  Motel Tikvice nalazi se na vrhu ski staza na 1.560 m
                  nadmorske visine. Restoran u brdskom stilu. Terasa okružena
                  borovom šumom s pogledom na Kupreško polje.
                </p>
                <p>
                  4 apartmana (s kuhinjom), 1 trokrevetna soba, 2 dvokrevetne
                  sobe.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-light rounded-2xl p-6">
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
                <div className="bg-light rounded-2xl p-6">
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
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-colors text-lg"
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

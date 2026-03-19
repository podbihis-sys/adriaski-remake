"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const stats = [
  { value: "256", label: "ležajeva" },
  { value: "13km", label: "staza" },
  { value: "1.200m", label: "nadmorske visine" },
  { value: "25m", label: "bazen" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-primary-600 to-primary-800">
      {/* Decorative floating elements */}
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
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-primary-600/20 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-6 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
            PREMIUM SKI & WELLNESS RESORT
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Otkrijte očaravajući Hotel Adria ski
        </motion.h1>

        <motion.p
          className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Predivne ski staze & vrhunsku uslugu
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-heading font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-accent uppercase tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link
            href="/kontakt"
            className="bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-colors text-lg"
          >
            Rezervirajte sada
          </Link>
          <Link
            href="/unterkunft"
            className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 font-accent font-semibold transition-colors text-lg"
          >
            Pogledajte ponudu
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}

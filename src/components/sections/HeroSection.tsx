"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const stats = [
  { value: "256", label: "ležajeva" },
  { value: "13km", label: "staza" },
  { value: "1.200m", label: "nadmorske visine" },
  { value: "25m", label: "bazen" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/images/hotel-adria-ski.jpg" alt="Hotel Adria Ski" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/70 to-dark/90" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-accent-500/10 animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-6 px-6 py-3 rounded-full border border-accent-500/30 bg-white/10 backdrop-blur-sm shadow-lg">
            PREMIUM SKI & WELLNESS RESORT
          </span>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-8" />
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 20 }}
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
            <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="text-4xl font-heading font-bold text-white">
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
            className="bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-10 py-5 font-accent font-semibold transition-all duration-500 text-lg shadow-xl shadow-accent-500/25 hover:shadow-2xl hover:shadow-accent-500/30 hover:scale-105"
          >
            Rezervirajte sada
          </Link>
          <Link
            href="/unterkunft"
            className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-5 font-accent font-semibold transition-all duration-500 text-lg shadow-xl hover:border-white/50 hover:scale-105"
          >
            Pogledajte ponudu
          </Link>
        </motion.div>

        {/* Subtle glow effect */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
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

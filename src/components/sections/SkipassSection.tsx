"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const prices = [
  {
    label: "Dnevna",
    adult: "44 / 23\u20AC",
    child: "32 / 16,50\u20AC",
  },
  {
    label: "7 dana",
    adult: "262 / 135\u20AC",
    child: "185 / 95,50\u20AC",
  },
  {
    label: "Sezona",
    adult: "650 / 336\u20AC",
    child: "420 / 217\u20AC",
  },
];

export default function SkipassSection() {
  return (
    <section className="relative py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/skijaliste2.jpg"
          alt="Ski staze"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-light/90" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Decorative skipass icon */}
        <div className="absolute -top-4 right-8 opacity-5 pointer-events-none">
          <Ticket className="w-48 h-48 text-primary-600 rotate-12" />
        </div>

        <motion.h2
          className="font-heading text-4xl text-dark text-center mb-16"
          {...fadeInUp}
        >
          Cijene ski karata 2025/26
        </motion.h2>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          {...fadeInUp}
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <div className="p-5 font-accent font-semibold" />
            <div className="p-5 font-accent font-semibold text-center">
              Odrasli (KM/EUR)
            </div>
            <div className="p-5 font-accent font-semibold text-center">
              Djeca do 14 (KM/EUR)
            </div>
          </div>

          {/* Rows */}
          {prices.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 hover:bg-accent-500/5 transition-colors duration-300 ${
                i % 2 === 0 ? "bg-white" : "bg-light"
              }`}
            >
              <div className="p-5 font-semibold text-dark font-accent">
                {row.label}
              </div>
              <div className="p-5 text-center text-gray-700 font-mono">{row.adult}</div>
              <div className="p-5 text-center text-gray-700 font-mono">{row.child}</div>
            </div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-8" {...fadeInUp}>
          <Link
            href="/preisliste"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold font-accent hover:gap-3 transition-all duration-500"
          >
            Pogledajte kompletan cjenik
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

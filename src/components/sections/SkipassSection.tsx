"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
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
    <section className="py-24 bg-light">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="font-heading text-4xl text-dark text-center mb-16"
          {...fadeInUp}
        >
          Cijene ski karata 2025/26
        </motion.h2>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          {...fadeInUp}
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-primary-600 text-white">
            <div className="p-4 font-accent font-semibold" />
            <div className="p-4 font-accent font-semibold text-center">
              Odrasli (KM/EUR)
            </div>
            <div className="p-4 font-accent font-semibold text-center">
              Djeca do 14 (KM/EUR)
            </div>
          </div>

          {/* Rows */}
          {prices.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-white" : "bg-light"
              }`}
            >
              <div className="p-4 font-semibold text-dark font-accent">
                {row.label}
              </div>
              <div className="p-4 text-center text-gray-700">{row.adult}</div>
              <div className="p-4 text-center text-gray-700">{row.child}</div>
            </div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-8" {...fadeInUp}>
          <Link
            href="/preisliste"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold font-accent hover:gap-3 transition-all"
          >
            Pogledajte kompletan cjenik
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

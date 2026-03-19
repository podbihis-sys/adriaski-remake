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

const accommodations = [
  {
    title: "Hotel Adria Ski",
    description: "256 ležajeva, wellness, restoran",
    price: "od 51,54 \u20AC/no\u0107",
    gradient: "from-primary-600 to-secondary-500",
    href: "/unterkunft/hotel-adria-ski",
  },
  {
    title: "Hotel Jezero",
    description: "Najnoviji objekt Adria Ski kompleksa",
    price: "Cijene na upit",
    gradient: "from-secondary-500 to-primary-600",
    href: "/unterkunft/hotel-jezero",
  },
  {
    title: "Motel Tikvice",
    description: "Na vrhu ski staza, 1.560m",
    price: "od 51,54 \u20AC/osoba",
    gradient: "from-primary-800 to-primary-600",
    href: "/unterkunft/motel-tikvice",
  },
];

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

export default function AccommodationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="font-heading text-4xl text-dark text-center mb-16"
          {...fadeInUp}
        >
          Naš smještaj
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {accommodations.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              variants={cardVariants}
            >
              {/* Image placeholder with gradient */}
              <div
                className={`relative h-64 bg-gradient-to-br ${item.gradient}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white font-accent font-semibold text-lg transition-colors">
                    Pogledajte slike
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-dark">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-accent-500 font-semibold mt-3 text-lg">
                  {item.price}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold mt-4 group/link hover:gap-3 transition-all"
                >
                  Saznajte više
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mountain, Waves, UtensilsCrossed, GraduationCap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const features = [
  {
    icon: Mountain,
    title: "Prvoklasne staze",
    description:
      "Preko 13 km uređenih ski staza, 5 ski liftova, staze svih kategorija težine",
  },
  {
    icon: Waves,
    title: "Olimpijski bazen",
    description:
      "Zatvoreni bazen 25m x 8m, 2 saune, fitness centar, masaža i wellness",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoran Ognjišta",
    description:
      "Tradicionalna domaća kuhinja u podnožju ski staza",
  },
  {
    icon: GraduationCap,
    title: "Škola skijanja",
    description:
      "Kvalificirani ski-instruktori, škola za djecu od 5 godina",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          className="font-heading text-4xl text-dark text-center mb-16"
          {...fadeInUp}
        >
          Što nas čini posebnima
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-500 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
                variants={cardVariants}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-t-2xl" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600/10 to-secondary-500/10 flex items-center justify-center">
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
  );
}

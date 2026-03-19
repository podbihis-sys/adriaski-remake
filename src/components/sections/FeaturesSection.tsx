"use client";

import { motion } from "framer-motion";
import { Mountain, Waves, UtensilsCrossed, GraduationCap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
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
  );
}

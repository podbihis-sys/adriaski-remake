"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Snowflake,
  Sun,
  Mountain,
  Waves,
  GraduationCap,
  Bike,
  Footprints,
  MapPin,
  Users,
  Hotel,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const winterActivities = [
  { icon: Mountain, label: "Skijanje", image: "https://www.adriaski.net/wp-content/uploads/skijaliste1.jpg" },
  { icon: Snowflake, label: "Snowboard", image: "https://www.adriaski.net/wp-content/uploads/headerSkijaliste.jpg" },
  { icon: GraduationCap, label: "Škola skijanja", image: "https://www.adriaski.net/wp-content/uploads/skijaliste2.jpg" },
  { icon: Waves, label: "Wellness", image: "https://www.adriaski.net/wp-content/uploads/bazen-1.jpg" },
];

const summerActivities = [
  { icon: Bike, label: "Brdski biciklizam", image: "https://www.adriaski.net/wp-content/uploads/2015/09/homeBiciklizam.jpg" },
  { icon: Footprints, label: "Planinarenje", image: "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-1.jpg" },
  { icon: MapPin, label: "Ramsko jezero", image: "https://www.adriaski.net/wp-content/uploads/jezero.jpg" },
  { icon: Users, label: "Jahanje", image: "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-1.jpg" },
  { icon: Hotel, label: "Enduro turizam", image: "https://www.adriaski.net/wp-content/uploads/enduro-1.jpg" },
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

export default function SeasonToggleSection() {
  const [isWinter, setIsWinter] = useState(true);

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-dark">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="font-heading text-4xl text-white text-center mb-12"
          {...fadeInUp}
        >
          Ljeto ili zima – uvijek savršeno
        </motion.h2>

        {/* Toggle switch */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          {...fadeInUp}
        >
          <span
            className={`font-accent font-semibold text-lg transition-colors ${
              isWinter ? "text-white" : "text-white/40"
            }`}
          >
            Zima
          </span>
          <button
            onClick={() => setIsWinter(!isWinter)}
            className="relative w-20 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-500 shadow-lg shadow-white/5 hover:shadow-white/10"
            aria-label="Toggle season"
          >
            <motion.div
              className="absolute top-1.5 w-7 h-7 rounded-full bg-white shadow-lg"
              animate={{ left: isWinter ? 5 : 44 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
            />
          </button>
          <span
            className={`font-accent font-semibold text-lg transition-colors ${
              !isWinter ? "text-white" : "text-white/40"
            }`}
          >
            Ljeto
          </span>
        </motion.div>

        {/* Activities grid */}
        <AnimatePresence mode="wait">
          {isWinter ? (
            <motion.div
              key="winter"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {winterActivities.map((activity, i) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-2xl p-6 min-h-[140px] text-center hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-black/20"
                    variants={cardVariants}
                  >
                    <Image src={activity.image} alt={activity.label} fill className="object-cover" />
                    <div className="absolute inset-0 bg-dark/50 hover:bg-dark/40 transition-colors" />
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 text-accent-500 mx-auto mb-3 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                      <span className="text-white font-accent font-semibold">
                        {activity.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="summer"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {summerActivities.map((activity, i) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-2xl p-6 min-h-[140px] text-center hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-black/20"
                    variants={cardVariants}
                  >
                    <Image src={activity.image} alt={activity.label} fill className="object-cover" />
                    <div className="absolute inset-0 bg-dark/50 hover:bg-dark/40 transition-colors" />
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 text-accent-500 mx-auto mb-3 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                      <span className="text-white font-accent font-semibold">
                        {activity.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

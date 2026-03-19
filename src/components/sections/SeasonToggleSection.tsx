"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const winterActivities = [
  { icon: Mountain, label: "Skijanje" },
  { icon: Snowflake, label: "Snowboard" },
  { icon: GraduationCap, label: "Škola skijanja" },
  { icon: Waves, label: "Wellness" },
];

const summerActivities = [
  { icon: Bike, label: "Brdski biciklizam" },
  { icon: Footprints, label: "Planinarenje" },
  { icon: MapPin, label: "Ramsko jezero" },
  { icon: Users, label: "Jahanje" },
  { icon: Hotel, label: "Enduro turizam" },
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
            className="relative w-16 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/15 transition-colors"
            aria-label="Toggle season"
          >
            <motion.div
              className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
              animate={{ left: isWinter ? 4 : 34 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
                    className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                    variants={cardVariants}
                  >
                    <Icon className="w-10 h-10 text-accent-500 mx-auto mb-3" />
                    <span className="text-white font-accent font-semibold">
                      {activity.label}
                    </span>
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
                    className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                    variants={cardVariants}
                  >
                    <Icon className="w-10 h-10 text-accent-500 mx-auto mb-3" />
                    <span className="text-white font-accent font-semibold">
                      {activity.label}
                    </span>
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

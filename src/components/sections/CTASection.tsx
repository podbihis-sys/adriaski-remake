"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-accent-500 to-accent-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="font-heading text-4xl text-dark mb-6"
          {...fadeInUp}
        >
          Spremni za avanturu?
        </motion.h2>
        <motion.p className="text-dark/80 text-xl mb-10" {...fadeInUp}>
          Rezervirajte svoj boravak i osigurajte najbolje cijene
        </motion.p>
        <motion.div {...fadeInUp}>
          <Link
            href="/kontakt"
            className="inline-block bg-dark text-white rounded-full px-10 py-4 font-accent font-semibold text-lg hover:bg-dark/90 transition-colors"
          >
            Kontaktirajte nas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

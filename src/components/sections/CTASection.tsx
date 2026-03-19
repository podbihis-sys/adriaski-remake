"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-r from-accent-500 to-accent-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <Sparkles className="absolute top-12 left-[15%] w-6 h-6 text-dark/10 pointer-events-none" />
      <Sparkles className="absolute top-20 right-[20%] w-8 h-8 text-dark/10 pointer-events-none" />
      <Sparkles className="absolute bottom-16 left-[25%] w-5 h-5 text-dark/10 pointer-events-none" />
      <Sparkles className="absolute bottom-12 right-[15%] w-7 h-7 text-dark/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="font-heading text-5xl text-dark mb-6"
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
            className="inline-block bg-dark text-white rounded-full px-14 py-5 font-accent font-semibold text-xl hover:bg-dark/90 transition-all duration-500 shadow-xl shadow-dark/20 hover:scale-105 hover:shadow-2xl hover:shadow-dark/30"
          >
            Kontaktirajte nas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

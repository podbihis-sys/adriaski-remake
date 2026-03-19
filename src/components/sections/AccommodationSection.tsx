"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const accommodations = [
  {
    title: "Hotel Adria Ski",
    description: "256 ležajeva, wellness, restoran",
    price: "od 51,54 \u20AC/no\u0107",
    image: "https://www.adriaski.net/wp-content/uploads/headerHotel.jpg",
    href: "/unterkunft/hotel-adria-ski",
  },
  {
    title: "Hotel Jezero",
    description: "Najnoviji objekt Adria Ski kompleksa",
    price: "Cijene na upit",
    image: "https://www.adriaski.net/wp-content/uploads/hotel-09.jpg",
    href: "/unterkunft/hotel-jezero",
  },
  {
    title: "Motel Tikvice",
    description: "Na vrhu ski staza, 1.560m",
    price: "od 51,54 \u20AC/osoba",
    image: "https://www.adriaski.net/wp-content/uploads/tikvice-1.jpg",
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
  hidden: { opacity: 0, y: 20 },
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
          viewport={{ once: true, amount: 0.05 }}
        >
          {accommodations.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-600/10 transition-all duration-500 group border border-gray-100"
              variants={cardVariants}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-accent-500 text-dark rounded-full px-4 py-1 font-accent font-bold text-sm shadow-lg">
                  {item.price}
                </div>
                {/* Title over image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>{item.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600">{item.description}</p>
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const menus = [
  {
    title: "Meni I",
    items: [
      "Predjela",
      "Gove\u0111a juha",
      "Izbor mesa: pe\u010Dena teletina, zagreba\u010Dki odrezak, medaljoni s gljivama",
      "Pe\u010Dena janjetina/svinjetina s krumpirom ispod peke",
    ],
  },
  {
    title: "Meni II",
    items: [
      "Predjela",
      "Juha",
      "\u0160nicl, puretina sa slaninom, pohani odresci",
    ],
  },
  {
    title: "Meni III",
    items: [
      "Predjela",
      "Be\u010Dki \u0161nicl, svinjski medaljoni, piletina na pari\u0161ki na\u010Din",
    ],
  },
];

const galleryImages = [
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-1.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-2.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-3.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-4.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-5.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-6.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-7.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-8.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-9.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-10.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-11.jpg",
  "https://www.adriaski.net/wp-content/uploads/svadbeniSalon-12.jpg",
];

export default function HochzeitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/svadba-1.jpg"
          alt="Svadbeni salon Adria Ski"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/60 to-dark/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-6 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              VJEN\u010CANJA
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Svadbeni salon
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Svako vjen\u010Danje je pri\u010Da za sebe
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl text-dark mb-8">
              Vaš najljepši dan
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Svako vjenčanje je priča za sebe, stoga i mi tako pristupamo svakom vjenčanju.
              </p>
              <p>
                Želite da Vam vaše vjenčanje ili neka druga svečana prigoda ostanu u nezaboravnom sjećanju, obratite nam se s povjerenjem.
              </p>
              <p>
                Ovaj je prelijepo uređeni svadbeni salon mjesto u kojem su mnogi mladi bračni parovi zaplesali svoj prvi zajednički ples i sretni i zadovoljni krenuli u novi život.
              </p>
              <p>
                Nadamo se da će fotografije koje možete vidjeti na stranici našeg svadbenog salona najbolje dočarati što možete očekivati kada dođete u salon gdje ćete doživjeti nezaboravnu i &ldquo;najluđu&rdquo; noć u svom životu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Options */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Opcije menija
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Odaberite jedan od na\u0161ih pa\u017Eljivo sastavljenih menija
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {menus.map((menu, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                variants={cardVariants}
              >
                <div className="h-1 bg-gradient-to-r from-[#F59E0B] to-orange-500" />
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-orange-500/10 flex items-center justify-center mb-6">
                    <UtensilsCrossed className="w-8 h-8 text-[#F59E0B]" />
                  </div>
                  <h3 className="font-heading text-2xl text-dark mb-6">
                    {menu.title}
                  </h3>
                  <ul className="space-y-3">
                    {menu.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div
            className="mt-12 max-w-3xl mx-auto text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg">
              Svi meniji: mije\u0161ane salate, grah varivo, vo\u0107ni deserti
            </p>
            <p className="text-[#F59E0B] font-semibold text-lg">
              Parovi mogu formirati svoj osobni jelovnik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-16"
            {...fadeInUp}
          >
            Galerija
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
                variants={cardVariants}
              >
                <Image
                  src={src}
                  alt={`Svadbeni salon ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-white mb-6">
              Kontaktirajte nas za ponudu
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Ispri\u010Dajte nam svoju viziju savr\u0161enog vjen\u010Danja
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Kontaktirajte nas za ponudu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

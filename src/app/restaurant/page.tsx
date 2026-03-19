"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Coffee,
  Flame,
  Wine,
  Users,
  Clock,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

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

const menuCategories = [
  {
    icon: Coffee,
    title: "Ponuda jela za domaći doručak",
    items: [
      "Domaća pogača i domaći kruh i uštipci",
      "Domaće sušeno meso: pršut, slanina, kobasica i čvarci",
      "Domaća svinjska mast sa paprikom i slaninom na kruhu",
      "Domaći kajmak, jogurt, sir škripavac, kupreški sir, domaće mlado maslo",
      "Domaća jaja",
      "Domaće marmelade: šipak i borovnica",
      "Kupreške debele palačinke -- prevrta",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Domaća jela - Ponuda za ručak i večeru",
    items: [
      "Pura sa kajmakom",
      "Pita uzljivaca",
      "Domaća gibanica (jajuša)",
      "Sarma (kiseli kupus, mljeveno meso sa sušenom domaćom slaninom)",
      "Kiseli kupus sa sušenim mesom po izboru",
      "Dinstani kiseli kupus sa kobasicama",
      "Grah sa kobasicom i slaninom",
      "Pile na kupreški način sa kuhanim geršlom",
      "Musaka sa krumpirom",
    ],
  },
  {
    icon: Flame,
    title: "Pite",
    items: [
      "Zeljanica, sirnica i burek (mljeveno meso)",
      "Kupreski burek kvrgo",
      "Krumpuruša i pita od varenih krumpira",
      "Pita od kiselog kupusa sa kuhanim suhim mesom",
    ],
  },
  {
    icon: Flame,
    title: "Jela ispod sača",
    items: [
      "Prasetina, teletina i janjetina",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Lešo meso i ostala jela",
    items: [
      "Janjetina i teletina",
      "Kupreška kuhana kalja",
      "Teletina sa povrćem i krumpirom",
      "Pečeni krumpir sa kupreškim ovčijim sirom",
      "PODKRIŽA: krumpir sa carskim mesom",
      "POPARA: stari kruh u začinjenoj vodi sa maslacem",
    ],
  },
  {
    icon: Wine,
    title: "Specijaliteti",
    items: [
      "Kupreški pršut i sir",
      "Kupreška plata",
      "Pozivamo Vas da kušate naše specijalitete koji se baziraju na tradicionalnim narodnim jelima",
    ],
  },
];

const services = [
  {
    icon: UtensilsCrossed,
    title: "A la carte",
    description: "Hotel nudi doručak i večeru, cjelodnevnu a la carte uslugu, te bogatu ponudu vina",
  },
  {
    icon: Wine,
    title: "Vinska karta",
    description: "Bogata ponuda stranih i domaćih vina",
  },
  {
    icon: Users,
    title: "Posebna ponuda",
    description: "Poslovni ručkovi, konferencije, seminari, catering, koktel zabave, te posebni događaji (zaruke, svadbe, rođendani, krštenja, krizme, mature, obljetnice)",
  },
];

const galleryImages = [
  { src: "https://www.adriaski.net/wp-content/uploads/ognjista-2.jpg", alt: "Restoran Ognjišta interijer" },
  { src: "https://www.adriaski.net/wp-content/uploads/ognjista-4.jpg", alt: "Kamin u restoranu Ognjišta" },
  { src: "https://www.adriaski.net/wp-content/uploads/ognjista-6.jpg", alt: "Ambijent restorana Ognjišta" },
  { src: "https://www.adriaski.net/wp-content/uploads/ognjista-8.jpg", alt: "Jela u restoranu Ognjišta" },
  { src: "https://www.adriaski.net/wp-content/uploads/ognjista-10.jpg", alt: "Domaća jela Ognjišta" },
  { src: "https://www.adriaski.net/wp-content/uploads/ognjista-12.jpg", alt: "Restoran Ognjišta pogled" },
];

export default function RestaurantPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/ognjista-1.jpg"
          alt="Restoran Ognjišta"
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
              RESTORAN
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Restoran Ognjišta
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Tradicionalna domaća kuhinja u podnožju ski staza
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-4xl text-dark mb-8">
                O restoranu
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Ispod završetka skijaških staza nalazi se restoran Ognjišta koji u planinskom ambijentu nudi gotova jela za brzu okrijepu i nastavak skijanja bez ulaska u hotel. Uz veliki otvoreni kamin koji daje pravi zimski ugođaj restoranu možete uživati u raznovrsnim domaćim jelima, a dodatnu toplinu će osigurati dobra šalica domaćeg kuhanog vina.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/ognjista-6.jpg"
                  alt="Restoran Ognjišta unutrašnjost"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-500" />
                  </div>
                  <h3 className="font-heading text-xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-heading text-4xl text-dark text-center mb-4"
            {...fadeInUp}
          >
            Gastronomska ponuda
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Domaća jela pripremljena s ljubavlju po tradicionalnim receptima
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {menuCategories.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                  variants={cardVariants}
                >
                  <div className="h-1 bg-gradient-to-r from-[#1B3A6B] to-[#0EA5E9]" />
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B]/10 to-[#0EA5E9]/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-xl text-dark mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 border border-gray-100"
                variants={cardVariants}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

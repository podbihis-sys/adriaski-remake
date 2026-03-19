"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const categories = [
  { key: "sve", label: "Sve" },
  { key: "zima", label: "Zima" },
  { key: "ljeto", label: "Ljeto" },
  { key: "wellness", label: "Wellness" },
  { key: "dogadjanja", label: "Događanja" },
];

const packages = [
  {
    title: "Ski & Stay",
    description: "Polupansion u dvokrevetnoj sobi",
    price: "od 49,48 \u20AC/no\u0107",
    category: "zima",
    highlights: [
      "Smje\u0161taj u hotelu",
      "Polupansion",
      "Bazen & sauna",
      "Iznajmljivanje ski opreme (opcija)",
    ],
  },
  {
    title: "Obiteljski paket",
    description: "Savr\u0161eno za obitelji",
    price: null,
    category: "zima",
    highlights: [
      "Djeca do 4 godine besplatno",
      "40% popust za djecu 4-14 god.",
      "\u0160kola skijanja od 31 \u20AC/dan",
      "Iznajmljivanje opreme od 8,50 \u20AC/dan",
    ],
  },
  {
    title: "Ski & Learn",
    description: "Te\u010Daj skijanja",
    price: null,
    category: "zima",
    highlights: [
      "Grupna nastava od 31 \u20AC/dan",
      "Privatni sat 30 \u20AC/60min",
      "Kvalificirani instruktori",
      "Oprema za iznajmljivanje",
    ],
  },
  {
    title: "Brdski biciklizam",
    description: "3-dnevni MTB aran\u017Eman",
    price: null,
    category: "ljeto",
    highlights: [
      "5 ruta (14-71 km)",
      "Ve\u010Dera dobrodo\u0161lice",
      "Piknik u prirodi",
      "Karaoke ve\u010Der",
    ],
  },
  {
    title: "Planinarenje",
    description: "3-dnevni planinarski aran\u017Eman",
    price: null,
    category: "ljeto",
    highlights: [
      "3 rute po te\u017Eini",
      "Vrhovi do 1.826m",
      "Panoramski pogledi",
      "Organizirani piknik",
    ],
  },
  {
    title: "Ramsko jezero",
    description: "Dvodnevni aran\u017Eman",
    price: null,
    category: "ljeto",
    highlights: [
      "Vo\u017Enja \u010Damcem",
      "Samostan Rama-\u0160\u0107it",
      "Eco selo Grabovica",
      "Folklorni program",
    ],
  },
  {
    title: "Jahanje",
    description: "3-dnevni aran\u017Eman",
    price: null,
    category: "ljeto",
    highlights: [
      "Ran\u010D \u010Cevi\u0107i",
      "25-30 km ozna\u010Dene staze",
      "Za po\u010Detnike i iskusne",
      "Restoran Ognji\u0161ta",
    ],
  },
  {
    title: "Enduro turizam",
    description: "3-4 dana off-road avanture",
    price: null,
    category: "ljeto",
    highlights: [
      "Teren do 2.000m",
      "Divlje \u0161ume i staze",
      "Opcija: ribolov & camping",
      "Puni pansion",
    ],
  },
  {
    title: "Wellness odmor",
    description: "Potpuna relaksacija",
    price: null,
    category: "wellness",
    highlights: [
      "Olimpijski bazen 25x8m",
      "2 saune",
      "Masa\u017Ea",
      "Fitness centar",
    ],
  },
  {
    title: "Svadbeni salon",
    description: "Va\u0161 najljep\u0161i dan",
    price: null,
    category: "dogadjanja",
    highlights: [
      "3 opcije menija",
      "Personalizirani jelovnik",
      "Dekorirana dvorana",
      "Profesionalna usluga",
    ],
  },
  {
    title: "Seminari i konferencije",
    description: "Poslovni boravak",
    price: null,
    category: "dogadjanja",
    highlights: [
      "Mala sala (60 osoba)",
      "Velika sala (250 osoba)",
      "Audio/video oprema",
      "Catering usluga",
    ],
  },
  {
    title: "Sportske pripreme",
    description: "Trening na visini",
    price: null,
    category: "dogadjanja",
    highlights: [
      "1.200m nadmorske visine",
      "Nogometni teren",
      "Fitness & bazen",
      "Referenca: FC Ingolstadt",
    ],
  },
];

const gradientMap: Record<string, string> = {
  zima: "from-[#1B3A6B] to-[#0EA5E9]",
  ljeto: "from-green-600 to-emerald-500",
  wellness: "from-[#0EA5E9] to-cyan-400",
  dogadjanja: "from-[#F59E0B] to-orange-500",
};

const categoryLabels: Record<string, string> = {
  zima: "Zima",
  ljeto: "Ljeto",
  wellness: "Wellness",
  dogadjanja: "Doga\u0111anja",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AngebotePage() {
  const [activeFilter, setActiveFilter] = useState("sve");

  const filteredPackages =
    activeFilter === "sve"
      ? packages
      : packages.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-[#0F172A] via-[#1B3A6B] to-[#1B3A6B]/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-accent tracking-widest text-[#F59E0B] text-sm uppercase mb-4"
          >
            PONUDA
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-white mb-6"
          >
            Na&scaron;i paketi i ponude
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Prona&#273;ite savr&scaron;en paket za va&scaron; boravak
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs + Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-[#F59E0B] text-[#0F172A] shadow-lg shadow-[#F59E0B]/25"
                    : "bg-white/10 text-[#1B3A6B] border border-[#1B3A6B]/15 hover:bg-[#1B3A6B]/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Package Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                variants={fadeInUp}
                layout
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Gradient placeholder top */}
                <div
                  className={`h-48 bg-gradient-to-br ${
                    gradientMap[pkg.category]
                  } relative`}
                >
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-accent uppercase tracking-wide px-3 py-1 rounded-full">
                    {categoryLabels[pkg.category]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="font-heading text-xl text-[#0F172A]">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {pkg.description}
                  </p>

                  {pkg.price && (
                    <p className="text-[#F59E0B] font-bold text-lg mt-3">
                      {pkg.price}
                    </p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {pkg.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-1 text-[#1B3A6B] font-semibold hover:text-[#F59E0B] transition-colors mt-4"
                  >
                    Rezervirajte
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1B3A6B] to-[#1B3A6B]/80"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-white mb-4">
            Individualni paket?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Kontaktirajte nas za prilago&#273;enu ponudu
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#0F172A] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#F59E0B]/25 hover:shadow-xl"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

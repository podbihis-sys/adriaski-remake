"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Clock, Ruler, Snowflake, Cable, Baby } from "lucide-react";
import { ImageGallery } from "@/components/layout/ImageGallery";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const highlights = [
  { icon: Ruler, value: "13+ km", label: "Ski staza" },
  { icon: Cable, value: "5", label: "Ski liftova" },
  { icon: Clock, value: "09-16h", label: "Radno vrijeme" },
  { icon: Snowflake, value: "✓", label: "Topovi za snijeg" },
];

const lifts = [
  { name: "Četvorosjed", length: "1.850 m", difficulty: "Plava / Crvena", color: "from-blue-500 to-red-500" },
  { name: "Dvosjed (sjedežnica)", length: "980 m", difficulty: "Plava", color: "from-blue-400 to-blue-600" },
  { name: "Vučnica / Sidro 1", length: "1.150 m", difficulty: "Plava", color: "from-blue-400 to-blue-600" },
  { name: "Vučnica / Sidro 2", length: "1.080 m", difficulty: "Plava / Crvena", color: "from-blue-500 to-red-500" },
  { name: "Baby lift", length: "300 m", difficulty: "Plava", color: "from-sky-400 to-sky-500" },
];

const galleryImages = [
  1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20,
].map((n) => ({
  src: `/images/staze-${n}.jpg`,
  alt: `Skijaške staze ${n}`,
}));

export default function Skijalista() {
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/headerSkijalista.jpg"
          alt="Skijališta Kupres"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Skijalište Kupres
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                Skijališta
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                Preko 13 kilometara staza sa 5 ski liftova
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS BAR ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#163c6f]/10 mb-2">
                    <Icon className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#163c6f]">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PREKO 13 KM STAZA ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/staze-1.jpg"
                  alt="Ski staze Kupres"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#163c6f] text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <p className="text-3xl font-heading font-bold">13+ km</p>
                <p className="text-sm text-white/70">uređenih staza</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Staze
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Preko 13 km staza
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  U sezoni 2023/2024 dodajemo za 2 nova ski lifta. U pitanju su ski
                  liftovi VUČNICE/SIDRO oko 1150 metara dužine. Skijaši svakodnevno
                  mogu od 09,00-16,00 sati uživati na preko 13 kilometara odlično
                  pripremljenih skijaških staza sa 5 ski-liftova. Ono što je bitno
                  napomenuti je da su sve staze međusobno povezane i udaljene nekoliko
                  desetaka metara od liftova i kompleksa hotela. Staze su raznolike tako da
                  i početnici i skijaši sa višegodišnjim stažom u skijanju mogu
                  pronaći ono što im najviše odgovara. Ljubazno osoblje na terenu će
                  Vam se u svakom trenutku naći pri ruci bilo da se radi o pomoći pri
                  ulasku na ski lift ili dodatnim objašnjenjima vezanim za ski staze.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SKI LIFTS TABLE ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Infrastruktura
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              Ski liftovi
            </h2>
          </motion.div>

          <div className="space-y-3">
            {lifts.map((lift, i) => (
              <motion.div
                key={lift.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 hover:shadow-md transition-shadow duration-300"
              >
                {/* Difficulty indicator */}
                <div className="flex items-center gap-3 sm:w-2/5">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${lift.color} flex-shrink-0`} />
                  <span className="font-heading font-bold text-[#163c6f]">{lift.name}</span>
                </div>
                {/* Length */}
                <div className="sm:w-1/5 flex items-center gap-2 pl-6 sm:pl-0">
                  <Ruler className="w-4 h-4 text-gray-400" />
                  <span className="text-[#3d3d3d] font-semibold">{lift.length}</span>
                </div>
                {/* Difficulty */}
                <div className="sm:w-2/5 flex items-center gap-2 pl-6 sm:pl-0 sm:justify-end">
                  <Mountain className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{lift.difficulty}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOPOVI / SNOW CANNONS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Zasnježivanje
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-6">
                Topovi za snijeg
              </h2>
              <div className="text-[#3d3d3d] leading-relaxed space-y-4 text-[15px]">
                <p>
                  Četvorosjed u dužini od 1850 metara, jedna sjedežnica (dvosjed) u
                  dužini od 980 metara, dvije &quot;sidro&quot; vučnice u dužini od
                  1080 i 1150 metara, te jedan baby lift dužine 300 metara. Topovi za
                  umjetni snijeg za čiju su svrhu izgrađena dodatna umjetna jezera,
                  omogućavaju umjetno zasnježivanje kako bi se spriječio nedostatak
                  snijega ili vode.
                </p>
              </div>

              {/* Info badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full">
                  <Snowflake className="w-3.5 h-3.5" /> Umjetni snijeg
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full">
                  <Mountain className="w-3.5 h-3.5" /> Dvosjed &amp; Četvorosjed
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full">
                  <Baby className="w-3.5 h-3.5" /> Baby lift
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image src="/images/staze-3.jpg" alt="Ski staze" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] mt-6">
                <Image src="/images/staze-7.jpg" alt="Ski liftovi" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-16 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Škola skijanja", desc: "Kvalificirani instruktori za sve uzraste", img: "/images/headerSkolaSkijanja.jpg", link: "/skola-skijanja" },
              { title: "Cjenik skijališta", desc: "Dnevne, višednevne i sezonske karte", img: "/images/staze-9.jpg", link: "/cjenik" },
              { title: "Kamera live", desc: "Pogledajte staze uživo", img: "/images/staze-2.jpg", link: "/kamera-live" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={card.link} className="group block relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg">
                  <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42]/80 via-[#0b1d42]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-white/70">{card.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-[#00c0f7] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saznaj više <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Fotografije
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">
              Galerija
            </h2>
          </motion.div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/headerSkijalista.jpg"
          alt="Skijalište Kupres"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Spremni za skijanje?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Pogledajte cjenik ski karata i rezervirajte svoj boravak
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cjenik"
                className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Pogledajte cjenik <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

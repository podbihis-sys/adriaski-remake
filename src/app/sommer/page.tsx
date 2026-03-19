"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Mountain, Bike, TreePine, Waves, PersonStanding, Flame } from "lucide-react";

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

const cyclingRoutes = [
  { name: "ADRIA SKI -- SUJICA", distance: "55 km", climb: "970 m", duration: "6 h" },
  { name: "GAJ -- KOLJEVKA -- GATER", distance: "14 km", climb: "370 m", duration: "2 h" },
  { name: "ADRIA SKI -- KUKAVICJE JEZERO", distance: "71 km", climb: "517 m", duration: "7 h" },
  { name: "RAMSKO JEZERO", distance: "37,04 km", climb: "597 m", duration: "4 h" },
  { name: "SMILJANIC -- KUKAVICJE JEZERO", distance: "55,14 km", climb: "460 m", duration: "6 h" },
];

const hikingRoutes = [
  {
    title: 'Pjesacka ruta hotel "Adria ski" - Tikvice',
    subtitle: "Istrazivacko planinarenje za pocetnike",
    description:
      "Pjesacka tura -- trajanje: 5-6 h za Jarm, 1,5 h za Tikvice. Polazak u 09:00h ispred hotela. Staza vodi kroz sumu do Tikvica (1550 m nadmorske visine) gdje je organiziran rucak u prirodi s pogledom na livanjsku i glamocku opcinu, planinu Cincar, Stozer, Plazenicu i hercegovacke planine.",
    options:
      "Hodanje do vrha Jaram (1658 m) sa mogucnoscu spustanja do ponora Mrtvice, ili ostanak ispred motela Tikvice.",
  },
  {
    title: 'Pjesacka ruta "Plocata vrila-Vran"',
    subtitle: "Zahtejvnije planinarenje -- umjerenije sa kratkim prekidima i mogucnoscu za fotografiranje",
    description:
      "Polazak u 09:00h do Kupreske kuce. 40-minutni naporni uspon do plocatih vrila (1550 m) gdje se gosti mogu odmoriti. Staza nastavlja prema vrhu Vrana (1758 m) s pogledom na brojne planine. Ukupna duzina: 5 km. Alternativna ruta kroz bukovu sumu: 3,5 km.",
  },
  {
    title: 'Pjesacka ruta hotel "Adria ski" - Veliki Malovan',
    subtitle: "Napredno planinarenje za izdrzljive planinare cija ce fizicka sprema biti testirana usponom i spustom sa strmijih terena",
    description:
      "Trajanje: 4h, duzina: 7 km. Polazak u 09:00h. Put vodi makadamskom cestom i stazom kroz sumu. Na Malovanu (1826 m) organiziran je odmor i rucak. Alternativni put iz Donjeg Malovana je ekstremnije (3 km, 3h).",
  },
];

const bikeImages = [
  "https://www.adriaski.net/wp-content/uploads/2015/09/homeBiciklizam.jpg",
  "https://www.adriaski.net/wp-content/uploads/bicikisti-4.jpg",
  "https://www.adriaski.net/wp-content/uploads/bicikisti-3.jpg",
  "https://www.adriaski.net/wp-content/uploads/bicikisti-2.jpg",
  "https://www.adriaski.net/wp-content/uploads/bicikisti-1.jpg",
  "https://www.adriaski.net/wp-content/uploads/biciklisti2.jpg",
];

const hikingImages = [
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-1.jpg",
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-3.jpg",
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-4.jpg",
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-5.jpg",
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-6.jpg",
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-7.jpg",
  "https://www.adriaski.net/wp-content/uploads/planinarenjeStozer-8.jpg",
];

const lakeImages = [
  "https://www.adriaski.net/wp-content/uploads/jezero.jpg",
  "https://www.adriaski.net/wp-content/uploads/ramskoJezero2.jpg",
  "https://www.adriaski.net/wp-content/uploads/kukavicjeJezero.jpg",
  "https://www.adriaski.net/wp-content/uploads/headerJezero.jpg",
  "https://www.adriaski.net/wp-content/uploads/ramaObilazak-1.jpg",
  "https://www.adriaski.net/wp-content/uploads/ramaObilazak-2.jpg",
];

const ridingImages = [
  "https://www.adriaski.net/wp-content/uploads/jahanje-1.jpg",
  "https://www.adriaski.net/wp-content/uploads/jahanje-2.jpg",
  "https://www.adriaski.net/wp-content/uploads/jahanje-3.jpg",
  "https://www.adriaski.net/wp-content/uploads/jahanje-4.jpg",
  "https://www.adriaski.net/wp-content/uploads/jahanje-5.jpg",
  "https://www.adriaski.net/wp-content/uploads/jahanje-6.jpg",
];

const enduroImages = [
  "https://www.adriaski.net/wp-content/uploads/enduro-1.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-2.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-3.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-4.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-5.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-6.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-7.jpg",
  "https://www.adriaski.net/wp-content/uploads/enduro-8.jpg",
];

export default function SommerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/2015/09/homeBiciklizam.jpg"
          alt="Ljetne aktivnosti Adria Ski"
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
              LJETO
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Ljetna ponuda
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Aktivnosti za svaki ukus u srcu bosanskih planina
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl text-dark mb-8">
              Ljeto na Kupreskoj visoravni
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Dragi gosti, za vas smo pripremili razne ponude u sklopu ljetnog
              turizma o kojima individualno mozete vise saznati. Od brdskog
              biciklizma i planinarenja do jahanja i enduro avantura -- Kupres
              je idealno odrediste za sve ljubitelje prirode i aktivnog odmora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== BRDSKI BICIKLIZAM ==================== */}
      <section id="biciklizam" className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-4 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              MTB
            </span>
            <h2 className="font-heading text-4xl text-dark mb-4">
              Brdski biciklizam
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nakon dugih zimskih mjeseci proljece svjezim zelenilom i toplim suncevim zrakama mami ljubitelje biciklizma na kupreske staze i puteve.
            </p>
          </motion.div>

          {/* Bike Images Gallery */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {bikeImages.map((src, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-lg group ${i === 0 ? "md:col-span-2 h-72" : "h-56"}`}
                variants={cardVariants}
              >
                <Image src={src} alt={`Biciklizam ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* 3-Day Program */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-accent-500 to-secondary-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">3-dnevni program</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 1 -- Dolazak</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Dolazak u hotel Adriaski uz veceru dobrodoslice na bazi svedskog stola s domacim specijalitetima i vecernju zabavu (folklor, harmonika ili glazba uzivo).
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 2 -- Biciklisticke ture</h4>
                  <div className="space-y-2">
                    {[
                      "08:00--09:00: Dorucak",
                      "09:00--13:00: Prijepodnevne biciklisticke ture (5 ruta)",
                      "13:00--14:30: Rucak u prirodi",
                      "15:00--18:00: Slobodne aktivnosti",
                      "19:00--20:30: Vecera s mogucnoscu sudjelovanja u pripremi",
                      "20:30+: Karaoke zabava",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 3 -- Odlazak</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Dorucak i odlazak nakon obroka.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5 Bike Routes Table */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-secondary-500 to-accent-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">5 biciklistickih ruta</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 px-4 font-accent text-sm uppercase tracking-widest text-gray-500">Ruta</th>
                      <th className="py-3 px-4 font-accent text-sm uppercase tracking-widest text-gray-500">Udaljenost</th>
                      <th className="py-3 px-4 font-accent text-sm uppercase tracking-widest text-gray-500">Visinska razlika</th>
                      <th className="py-3 px-4 font-accent text-sm uppercase tracking-widest text-gray-500">Trajanje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cyclingRoutes.map((route, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-light transition-colors">
                        <td className="py-4 px-4 font-semibold text-dark">{route.name}</td>
                        <td className="py-4 px-4 text-gray-600">{route.distance}</td>
                        <td className="py-4 px-4 text-gray-600">{route.climb}</td>
                        <td className="py-4 px-4 text-gray-600">{route.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PLANINARENJE ==================== */}
      <section id="planinarenje" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="inline-block font-accent text-xs tracking-widest text-secondary-500 uppercase mb-4 px-4 py-2 rounded-full border border-secondary-500/30 bg-secondary-500/10">
              PLANINARENJE
            </span>
            <h2 className="font-heading text-4xl text-dark mb-4">
              Planinarenje
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Istrazivacko planinarenje za pocetnike sa mogucnoscu biranja rute i odmorom na predivnim mjestima sa kojih puca prekrasan pogled
            </p>
          </motion.div>

          {/* Hiking Images */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {hikingImages.slice(0, 4).map((src, i) => (
              <motion.div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg group"
                variants={cardVariants}
              >
                <Image src={src} alt={`Planinarenje ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* 3 Hiking Routes */}
          <motion.div
            className="space-y-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {hikingRoutes.map((route, i) => (
              <motion.div
                key={i}
                className="bg-light rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                variants={cardVariants}
              >
                <div className={`h-1 ${i === 0 ? "bg-green-500" : i === 1 ? "bg-yellow-500" : "bg-red-500"}`} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-accent uppercase tracking-widest px-3 py-1 rounded-full ${
                      i === 0 ? "bg-green-100 text-green-700" : i === 1 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                    }`}>
                      Ruta {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-dark mb-2">{route.title}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{route.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{route.description}</p>
                  {route.options && (
                    <p className="text-gray-600 leading-relaxed mt-3 italic">{route.options}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hiking Program */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-green-500 to-secondary-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">Program planinarenja (3 dana)</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 1</h4>
                  <p className="text-gray-600">Dolazak popodne, vecera na bazi svedskog stola s domacim specijalitetima. Zabava: folklorni nastup, harmonika ili glazba uzivo.</p>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 2</h4>
                  <div className="space-y-2">
                    {[
                      "08:00-09:00h: Dorucak",
                      "09:00-13:00h: Pjesacke ture (3 opcije)",
                      "13:00-14:30h: Rucak u prirodi",
                      "15:00-18:00h: Slobodne aktivnosti",
                      "19:00-20:30h: Vecera s mogucnoscu sudjelovanja u pripremi",
                      "20:30h: Karaoke show",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-secondary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 3</h4>
                  <p className="text-gray-600">08:00-09:00h: Dorucak. Odlazak nakon dorucka.</p>
                </div>
                <p className="text-sm text-gray-500 italic">Program ne ukljucuje: prijevoz (organizira se na upit).</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== RAMSKO JEZERO ==================== */}
      <section id="ramsko-jezero" className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="inline-block font-accent text-xs tracking-widest text-secondary-500 uppercase mb-4 px-4 py-2 rounded-full border border-secondary-500/30 bg-secondary-500/10">
              JEZERO
            </span>
            <h2 className="font-heading text-4xl text-dark mb-4">
              Ramsko jezero
            </h2>
          </motion.div>

          {/* Lake Images */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {lakeImages.map((src, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-lg group ${i === 0 ? "md:col-span-2 h-72" : "h-56"}`}
                variants={cardVariants}
              >
                <Image src={src} alt={`Ramsko jezero ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* About the Lake */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-secondary-500 to-accent-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">O Ramskom jezeru</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>Ramsko jezero je smjesteno u gornjoramskoj kotlini na sjeveru Hercegovine, na podrucju danasnje opcine Prozor-Rama. Okruzeno je strmim vijencem planinskih masiva Raduse, Makljena, Ljubuse i Vrana.</p>
                <p>Njegova maksimalna duzina je 12 kilometara, povrsina oko 1500 ha, najveca dubina oko 95 metara, dok su oscilacije vode i do 55 metara.</p>
                <p>Posebnu, nestvarnu ljepotu Ramskom jezeru daju otoci i poluotoci, medu kojima je najpoznatiji poluotok Scit, gdje se nalazi Franjevacki samostan Rama-Scit.</p>
                <p>Franjevci, koji u Bosni djeluju od kraja 13. stoljeca, podigli su samostan u Rami najvjerojatnije u 15. stoljecu, prije dolaska Turaka.</p>
                <p>Cestovna komunikacija do Ramskog jezera postoji iz Prozora asfaltiranom cestom, te iz Tomislavgrada, Livna i Splita novom asfaltiranom trasom otvorenom za promet 2006. godine.</p>
              </div>
            </div>
          </motion.div>

          {/* Lake 3-Day Program */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-accent-500 to-secondary-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">Dvodnevni aranzman -- Ramsko jezero</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 1</h4>
                  <div className="space-y-2">
                    {[
                      "Polazak iz Splita u 06:30 h. Dolazak u hotel \"Adriaski\" do 08:30 h",
                      "08:30 -- 10:00 h -- Dorucak",
                      "10:00 -- 13:00 h -- Panoramski obilazak Kupresa (posjet etnografskom muzeju, kupreskoj \"katedrali\", obilazak Kukavicjeg jezera) obilazak jahalista na \"Cevicima\"",
                      "13:30 -- 15:00 h -- Rucak u hotelu \"Adria ski\"",
                      "15:00 -- 19:00 h -- Odmor i slobodne aktivnosti",
                      "19:00 h -- Vecera -- mogucnost aktivnog ukljucivanja gostiju",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-secondary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 2</h4>
                  <div className="space-y-2">
                    {[
                      "08:00 -- 09:00 h Dorucak",
                      "10:00 -- 18:00 h -- Cjelodnevni program: odlazak na Ramsko jezero, program aktivnosti (obilazak crkve i muzeja na Scitu, veslanje, panoramski obilazak brodicom, biciklizam, planinarenje)",
                      "13:00 -- 14:30 h -- Rucak u Rami",
                      "18:00 h -- Povratak u hotel \"Adria ski\"",
                      "19:00 -- 20:30 h Vecera",
                      "20:30 h -- zabava uz nastup folklornih skupina iz Kupresa.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-secondary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 3</h4>
                  <div className="space-y-2">
                    {[
                      "08:30-10:00 h -- Dorucak",
                      "10:00 h -- Odlazak u ECO SELO \"GRABOVICA\"",
                      "11:00 h -- 13:00 h -- Razgledanje ECO SELA \"GRABOVICA\"",
                      "13:00 -- 15:00 h -- Rucak",
                      "15:00 h -- Polazak za Split",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-secondary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== JAHANJE ==================== */}
      <section id="jahanje" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-4 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              JAHANJE
            </span>
            <h2 className="font-heading text-4xl text-dark mb-4">
              Jahanje
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Za jahace koji zele da se prepuste cjelodnevnom iskustvu jahanja kroz prekrasne kupreske krajeve. Organizirano na rancu Cevici.
            </p>
          </motion.div>

          {/* Riding Images */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {ridingImages.map((src, i) => (
              <motion.div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg group"
                variants={cardVariants}
              >
                <Image src={src} alt={`Jahanje ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Riding Program */}
          <motion.div
            className="bg-light rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-accent-500 to-secondary-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">Program jahanja</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 1</h4>
                  <p className="text-gray-600">Dolazak u hotel &ldquo;Adriaski&rdquo; u poslijepodnevnim satima. Vecera dobrodoslice na bazi svedskog stola s domacim specijalitetima. Zabava uz harmonikasa, karaoke show, ili zabavu uz glazbu uzivo.</p>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 2</h4>
                  <div className="space-y-2">
                    {[
                      "08:00 -- 09:00 h -- Dorucak",
                      "09:00 -- 13:00 h -- Prijepodnevni program",
                      "13:00 -- 14:30 h -- Rucak u prirodi",
                      "15:00 -- 18:00 h -- Slobodne aktivnosti",
                      "19:00 -- 20:30 h -- Vecera u restoranu \"Ognjista\"",
                      "20:30 h -- Zabava uz karaoke show",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-white rounded-xl p-4">
                    <p className="font-semibold text-dark mb-2">Opcije jahanja:</p>
                    <div className="space-y-2 text-gray-600">
                      <p>09:00-12:00 h -- Jutarnja tura -- 50,00 KM</p>
                      <p>18:00-19:00 h -- Popodnevna tura -- 25,00 KM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 3</h4>
                  <div className="space-y-2">
                    {[
                      "08:00 -- 09:30 h -- Dorucak",
                      "10:00 h -- Posjet ECO SELO \"GRABOVICA\"",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent-500/10 rounded-xl">
                <p className="text-dark font-semibold">CIJENA UKLJUCUJE: 2 puna pansiona; osigurani su vodici za sve navedene aktivnosti</p>
              </div>
            </div>
          </motion.div>

          {/* Riding Additional Info */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" {...fadeInUp}>
            <div className="bg-light rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="font-heading text-xl text-dark mb-4">Lokalne staze</h4>
              <p className="text-gray-600">Staze duzine 25-30 km s visinskom razlikom 1200-1800 m, razlicitih tezina.</p>
            </div>
            <div className="bg-light rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="font-heading text-xl text-dark mb-4">Za jahace</h4>
              <p className="text-gray-600">Kratke 20-minutne ture za pocetnike; sve vrste jahaca zeljne novog iskustva imamo sto za ponuditi.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== ENDURO TURIZAM ==================== */}
      <section id="enduro" className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-4 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              ENDURO
            </span>
            <h2 className="font-heading text-4xl text-dark mb-4">
              Enduro turizam
            </h2>
          </motion.div>

          {/* Enduro Images */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {enduroImages.slice(0, 4).map((src, i) => (
              <motion.div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg group"
                variants={cardVariants}
              >
                <Image src={src} alt={`Enduro ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enduro Description */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-accent-500 to-red-500" />
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>Za vozace je to velika avantura i izazov -- uspeti se na 2.000 metara nadmorske visine. Enduro ture, odnosno voznje motociklom na otvorenom terenu, u divljim sumama, na brdskim kamenim putevima i blatnjavim stazama.</p>
                <p>Na enduro motociklu su svi jednaki, vuku i guraju jedni drugima motocikle kada zaglave u blatu, znoje se jednako, sto zbog opreme, sto zbog straha i adrenalina.</p>
              </div>
            </div>
          </motion.div>

          {/* More Enduro Images */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {enduroImages.slice(4).map((src, i) => (
              <motion.div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg group"
                variants={cardVariants}
              >
                <Image src={src} alt={`Enduro ${i + 5}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enduro Program */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            {...fadeInUp}
          >
            <div className="h-1 bg-gradient-to-r from-red-500 to-accent-500" />
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl text-dark mb-8">Enduro program (boravak na bazi dvije noci)</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 1</h4>
                  <p className="text-gray-600">Dolazak u hotel &ldquo;Adriaski&rdquo; u poslijepodnevnim satima. Vecera dobrodoslice na bazi svedskog stola s domacim specijalitetima. Za vecernju zabavu (ovisno o dogovoru) gosti ce imati priliku birati izmedu: zabave uz harmonikasa, karaoke show ili zabavu uz glazbu uzivo.</p>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 2</h4>
                  <div className="space-y-2">
                    {[
                      "08:00 -- 09:00 h Dorucak",
                      "09:00 -- 13:00 h Prijepodnevni program",
                      "MOTOCIKLISTICKE TURE: Voznje motociklom -- razlicite ture shodno interesu i fizickim mogucnostima.",
                      "13:00 -- 14:30 h Rucak u prirodi",
                      "15:00 -- 18:00 h Slobodne aktivnosti",
                      "19:00 -- 20:30 h Vecera u restoranu \"Ognjista\"",
                      "20:30 h Zabava uz karaoke show",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-600 mb-3">Dan 3</h4>
                  <div className="space-y-2">
                    {[
                      "08:00 -- 09:30 h Dorucak",
                      "10:00 h Motociklisticka tura do 16:00",
                      "13:00-14:30 h Rucak u prirodi",
                      "16:00 h Povratak u hotel i odlazak",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
              Rezervirajte ljetni aranzman
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Kontaktirajte nas za prilagodenu ponudu ljetnih aktivnosti
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-dark rounded-full px-8 py-4 font-accent font-semibold transition-all duration-300 text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02]"
            >
              Rezervirajte ljetni aranzman
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

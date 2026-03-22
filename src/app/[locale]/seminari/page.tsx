"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Monitor, Coffee, Presentation } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const rooms = [
  {
    title: "Mala sala",
    capacity: "60",
    features: ["Tik do restorana", "Fleksibilan raspored stolova", "Predavanja i panel diskusije"],
    description:
      'Jedan od segmeneta našeg poslovanja kojim se ponosimo i koji iz dana u dan razvijamo te dižemo na višu razinu je organizacija svih vrsta seminara i tematskih skupova. Za skupove do 60 osoba idealna je mala sala koja se nalazi tik do restorana na nultoj razini hotela. Budući da stolovi nisu fiksni moguće je organizirati predavanje ili panel diskusiju ovisno o potrebama klijenta.',
    icon: Presentation,
  },
  {
    title: "Velika sala",
    capacity: "250",
    features: ["Audio i video tehnika", "Šank za okrijepu", "Odvojene radne skupine"],
    description:
      'Za veće skupove idealna je sala u podzemnoj razini hotela. Sa smještajnim kapacitetom do 250 osoba, polivalentim rasporedom stolica te oblikom koji omogućava formiranje odvojenih radnih skupina, u potpunosti zadovoljava uvjete za višednevne seminare ili skupove. Sala je u potpunosti opremljena audio i video tehnikom, a u njenom sklopu se nalazi i šank za kratku i brzu okrijepu.',
    icon: Presentation,
  },
];

export default function SeminariPage() {
  const tc = useTranslations("common");
  const locale = useLocale();
  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[50vh] min-h-[350px] md:h-[55vh] overflow-hidden">
        <Image src="/images/headerRecepcija.jpg" alt="Seminari" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">Poslovni skupovi</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Seminari</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">Profesionalna organizacija seminara i tematskih skupova</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Users, value: "310", label: "Ukupni kapacitet" },
              { icon: Monitor, value: "Audio/Video", label: "Tehnika" },
              { icon: Coffee, value: "Šank", label: "Bar" },
              { icon: Presentation, value: "2", label: "Sale" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

      {/* ===== ROOMS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {rooms.map((room, i) => {
            const Icon = room.icon;
            return (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${i === 1 ? "lg:direction-rtl" : ""}`}
              >
                {/* Info Card */}
                <div className={`lg:col-span-2 ${i === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl p-8 text-white">
                    <Icon className="w-10 h-10 text-[#00c0f7] mb-4" />
                    <h2 className="text-2xl font-heading font-bold mb-2">{room.title}</h2>
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="text-4xl font-heading font-bold text-[#00c0f7]">{room.capacity}</span>
                      <span className="text-white/60 text-sm">osoba</span>
                    </div>
                    <ul className="space-y-2">
                      {room.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00c0f7] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Text */}
                <div className={`lg:col-span-3 ${i === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-[#3d3d3d] leading-relaxed text-[15px]">{room.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/headerRecepcija.jpg" alt="Seminari" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d42]/90 to-[#163c6f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Planirate seminar ili konferenciju?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Kontaktirajte nas za organizaciju vašeg poslovnog skupa</p>
            <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
              {tc("contact_us")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { events } from "@/lib/events";
import { useTranslations, useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Dogadanja() {
  const t = useTranslations("events");
  const tc = useTranslations("common");
  const locale = useLocale();
  const pinnedEvent = events.find((e) => e.pinned);
  const otherEvents = events.filter((e) => !e.pinned);

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[40vh] min-h-[280px] md:h-[45vh] overflow-hidden">
        <Image src="/images/headerHotel.jpg" alt="Događanja" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("title")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("subtitle")}</h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">{t("latest_news")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PINNED EVENT ===== */}
      {pinnedEvent && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href={`/${locale}/dogadanja/${pinnedEvent.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image src={pinnedEvent.image} alt={pinnedEvent.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-[#00c0f7] text-xs tracking-wider uppercase font-semibold mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {t("current")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 group-hover:text-[#00c0f7] transition-colors duration-300">{pinnedEvent.title}</h2>
                  <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {pinnedEvent.date}
                  </div>
                  <p className="text-white/70 text-[15px] leading-relaxed">{pinnedEvent.summary}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-[#00c0f7] font-semibold text-sm">
                    {tc("read_more")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* ===== EVENTS GRID ===== */}
      <section className="py-16 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f]">{tc("all_events")}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEvents.map((event, i) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/${locale}/dogadanja/${event.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#163c6f]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-[#163c6f] mb-2 group-hover:text-[#00c0f7] transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-[#3d3d3d]/70 text-sm leading-relaxed line-clamp-3">
                      {event.summary}
                    </p>
                    {event.contact && (
                      <div className="mt-3 flex items-center gap-2 text-[#00c0f7] text-sm">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{event.contact}</span>
                      </div>
                    )}
                    <span className="inline-flex items-center gap-1 mt-3 text-[#00c0f7] text-sm font-semibold">
                      {tc("read_more")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-[#163c6f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Budite u toku</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Kontaktirajte nas za informacije o nadolazećim događanjima</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/kontakt`} className="inline-flex items-center justify-center gap-2 bg-[#00c0f7] hover:bg-[#00a8d6] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                {tc("contact_us")} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://www.facebook.com/adriaski" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
                Facebook stranica
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

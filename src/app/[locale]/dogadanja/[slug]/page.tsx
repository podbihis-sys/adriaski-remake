"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Phone, Mail, ArrowRight } from "lucide-react";
import { events, getEventBySlug } from "@/lib/events";
import { useTranslations } from "next-intl";

export default function EventArticlePage() {
  const tc = useTranslations("common");
  const params = useParams();
  const slug = params.slug as string;
  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f2f3f4]">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-[#163c6f] mb-4">Članak nije pronađen</h1>
          <Link href="/dogadanja" className="inline-flex items-center gap-2 text-[#00c0f7] font-semibold">
            <ArrowLeft className="w-4 h-4" /> {tc("back")} na događanja
          </Link>
        </div>
      </main>
    );
  }

  // Find prev/next events
  const currentIndex = events.findIndex((e) => e.slug === slug);
  const prevEvent = currentIndex > 0 ? events[currentIndex - 1] : null;
  const nextEvent = currentIndex < events.length - 1 ? events[currentIndex + 1] : null;

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-[45vh] min-h-[300px] md:h-[55vh] overflow-hidden">
        <Image src={event.image} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/60 to-[#0b1d42]/20" />

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link
                href="/dogadanja"
                className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" /> {tc("all_events")}
              </Link>
              <div className="flex items-center gap-2 text-[#00c0f7] text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {event.date}
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
                {event.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Body text - preserve line breaks */}
            <div className="text-[#3d3d3d] text-[16px] leading-relaxed space-y-4">
              {event.body.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Contact info */}
            {event.contact && (
              <div className="mt-10 bg-[#f2f3f4] rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-bold text-[#163c6f] mb-3">Kontakt</h3>
                <div className="flex flex-wrap gap-4">
                  {event.contact.split(",").map((c, i) => {
                    const trimmed = c.trim();
                    const isPhone = trimmed.startsWith("+");
                    const isEmail = trimmed.includes("@");
                    return (
                      <a
                        key={i}
                        href={isPhone ? `tel:${trimmed.replace(/\s/g, "")}` : isEmail ? `mailto:${trimmed}` : "#"}
                        className="inline-flex items-center gap-2 text-[#00c0f7] font-medium text-sm hover:underline"
                      >
                        {isPhone ? <Phone className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                        {trimmed}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>

      {/* ===== PREV/NEXT NAVIGATION ===== */}
      <section className="py-10 bg-[#f2f3f4] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {prevEvent ? (
              <Link
                href={`/dogadanja/${prevEvent.slug}`}
                className="group flex items-center gap-3 text-left hover:text-[#00c0f7] transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#00c0f7] transition-colors flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Prethodni</p>
                  <p className="text-sm font-semibold text-[#163c6f] group-hover:text-[#00c0f7] transition-colors line-clamp-1">{prevEvent.title}</p>
                </div>
              </Link>
            ) : <div />}

            <Link href="/dogadanja" className="text-sm text-gray-500 hover:text-[#00c0f7] transition-colors hidden md:block">
              {tc("all_events")}
            </Link>

            {nextEvent ? (
              <Link
                href={`/dogadanja/${nextEvent.slug}`}
                className="group flex items-center gap-3 text-right hover:text-[#00c0f7] transition-colors"
              >
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Sljedeći</p>
                  <p className="text-sm font-semibold text-[#163c6f] group-hover:text-[#00c0f7] transition-colors line-clamp-1">{nextEvent.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00c0f7] transition-colors flex-shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </main>
  );
}

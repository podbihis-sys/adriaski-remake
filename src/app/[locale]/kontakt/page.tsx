"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef, FormEvent } from "react";
import dynamic from "next/dynamic";
import BookingForm from "@/components/forms/BookingForm";

const HotelMap = dynamic(() => import("@/components/map/HotelMap"), { ssr: false });

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Kontakt() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const tb = useTranslations("booking");

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [formTimestamp, setFormTimestamp] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setFormTimestamp(String(Date.now()));
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const emailVal = fd.get("email") as string;
    const emailConfirm = fd.get("emailConfirm") as string;
    if (emailVal !== emailConfirm) {
      setStatus({ type: "error", message: t("email_mismatch") });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${fd.get("prezime")} ${fd.get("ime")}`.trim(),
          email: emailVal,
          ulica: fd.get("ulica") || undefined,
          postanskiBroj: fd.get("postanskiBroj") || undefined,
          grad: fd.get("grad") || undefined,
          drzava: fd.get("drzava") || undefined,
          nachricht: fd.get("poruka"),
          _hp: fd.get("_hp"),
          _t: fd.get("_t"),
        }),
      });

      const data = await res.json();
      if (res.status === 429) {
        setStatus({ type: "error", message: t("rate_limit_message") });
      } else if (data.success) {
        setStatus({ type: "success", message: t("success_message") });
        form.reset();
        setFormTimestamp(String(Date.now()));
      } else {
        setStatus({ type: "error", message: data.message || t("error_message") });
      }
    } catch {
      setStatus({ type: "error", message: t("error_message") });
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] min-h-[280px] md:h-[45vh] overflow-hidden">
        <Image src="/images/headerRecepcija.jpg" alt="Kontakt" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">{t("hero_label")}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">{t("title")}</h1>
              <p className="mt-3 text-lg text-white/70">{t("subtitle")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="bg-white relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              { icon: MapPin, label: "Čajuša bb", sub: "80 320 Kupres, BiH" },
              { icon: Phone, label: "+387 34 275 100", sub: t("reservations") },
              { icon: Mail, label: "recepcija@adriaski.net", sub: t("email") },
              { icon: Clock, label: t("reception"), sub: t("available") },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#163c6f]/10 mb-2">
                    <Icon className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <p className="text-sm font-bold text-[#163c6f]">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tc("info")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-8">{t("title")}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163c6f] text-sm uppercase tracking-wider mb-1">{t("address")}</h3>
                    <p className="text-[#3d3d3d] text-[15px]">Hotel Adria ski<br />Čajuša bb<br />80 320 Kupres, BiH</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163c6f] text-sm uppercase tracking-wider mb-1">{t("phone_reservations")}</h3>
                    <p className="text-[#3d3d3d] text-[15px]">
                      <a href="tel:+38734275100" className="hover:text-[#00c0f7] transition-colors">T. +387 34 275 100</a><br />
                      F. +387 34 274 951
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163c6f] text-sm uppercase tracking-wider mb-1">{t("email_reservations")}</h3>
                    <p className="text-[15px]">
                      <a href="mailto:recepcija@adriaski.net" className="text-[#00c0f7] hover:underline">recepcija@adriaski.net</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[280px]">
                <HotelMap />
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t("form_title")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-2">{t("form_subtitle")}</h2>
              <p className="text-gray-500 text-sm mb-8">{t("form_description")}</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot — hidden from humans, bots fill it */}
                <input type="text" name="_hp" autoComplete="off" tabIndex={-1} aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }} />
                <input type="hidden" name="_t" value={formTimestamp} />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prezime" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("last_name")} *</label>
                    <input type="text" id="prezime" name="prezime" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                  <div>
                    <label htmlFor="ime" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("first_name")} *</label>
                    <input type="text" id="ime" name="ime" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="ulica" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("street")}</label>
                  <input type="text" id="ulica" name="ulica" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="postanskiBroj" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("postal_code")}</label>
                    <input type="text" id="postanskiBroj" name="postanskiBroj" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                  <div>
                    <label htmlFor="grad" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("city")}</label>
                    <input type="text" id="grad" name="grad" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="drzava" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("country")}</label>
                  <input type="text" id="drzava" name="drzava" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("email_address")} *</label>
                  <input type="email" id="email" name="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div>
                  <label htmlFor="emailConfirm" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("confirm_email")} *</label>
                  <input type="email" id="emailConfirm" name="emailConfirm" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div>
                  <label htmlFor="poruka" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">{t("your_message")} *</label>
                  <textarea id="poruka" name="poruka" rows={5} required minLength={10} className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all resize-none" />
                </div>

                {status && (
                  <div className={`flex items-start gap-2 rounded-lg p-3 text-sm ${status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                    {status.type === "success" ? <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button type="submit" disabled={sending} className="w-full bg-[#163c6f] hover:bg-[#0b1d42] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 text-sm">
                  {sending ? t("sending") : t("send_message")}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING SECTION ===== */}
      <section className="py-20 bg-[#f2f3f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{tb("section_title")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-3">{tb("section_subtitle")}</h2>
            <p className="text-gray-500 text-sm">{tb("section_desc")}</p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <BookingForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

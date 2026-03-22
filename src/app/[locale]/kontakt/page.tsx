"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Kontakt() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] min-h-[280px] md:h-[45vh] overflow-hidden">
        <Image src="/images/headerRecepcija.jpg" alt="Kontakt" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.25em] uppercase font-semibold mb-3">Kontakt</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Kontaktirajte nas</h1>
              <p className="mt-3 text-lg text-white/70">Stojimo vam na raspolaganju 24/7</p>
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
              { icon: Phone, label: "+387 34 275 100", sub: "24/7 Rezervacije" },
              { icon: Mail, label: "recepcija@adriaski.net", sub: "24/7 Email" },
              { icon: Clock, label: "Recepcija", sub: "0 - 24h" },
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
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Info</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-8">Kontaktirajte nas</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163c6f] text-sm uppercase tracking-wider mb-1">Adresa</h3>
                    <p className="text-[#3d3d3d] text-[15px]">Hotel Adria ski<br />Čajuša bb<br />80 320 Kupres, BiH</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#163c6f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163c6f] text-sm uppercase tracking-wider mb-1">24/7 Rezervacije telefonom</h3>
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
                    <h3 className="font-semibold text-[#163c6f] text-sm uppercase tracking-wider mb-1">24/7 Rezervacije mail-om</h3>
                    <p className="text-[15px]">
                      <a href="mailto:recepcija@adriaski.net" className="text-[#00c0f7] hover:underline">recepcija@adriaski.net</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5!2d17.2847!3d43.9614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f9a0e0b0b0001%3A0x0!2sHotel%20Adria%20Ski!5e0!3m2!1sbs!2sba!4v1700000000000!5m2!1sbs!2sba"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Adria Ski lokacija"
                />
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#00c0f7] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Obrazac</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#163c6f] mb-2">Ispunite obrazac</h2>
              <p className="text-gray-500 text-sm mb-8">Ukoliko imate bilo kakvih pitanja ili želite saznati više</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prezime" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Prezime *</label>
                    <input type="text" id="prezime" name="prezime" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                  <div>
                    <label htmlFor="ime" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Ime *</label>
                    <input type="text" id="ime" name="ime" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="ulica" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Ulica *</label>
                  <input type="text" id="ulica" name="ulica" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="postanskiBroj" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Poštanski broj *</label>
                    <input type="text" id="postanskiBroj" name="postanskiBroj" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                  <div>
                    <label htmlFor="grad" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Grad *</label>
                    <input type="text" id="grad" name="grad" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="drzava" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Država *</label>
                  <input type="text" id="drzava" name="drzava" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">E-Mail adresa *</label>
                  <input type="email" id="email" name="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div>
                  <label htmlFor="emailConfirm" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Potvrda E-Mail *</label>
                  <input type="email" id="emailConfirm" name="emailConfirm" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all" />
                </div>

                <div>
                  <label htmlFor="poruka" className="block text-xs font-semibold text-[#163c6f] mb-1.5 uppercase tracking-wider">Vaša poruka *</label>
                  <textarea id="poruka" name="poruka" rows={5} required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#3d3d3d] bg-white focus:outline-none focus:ring-2 focus:ring-[#00c0f7]/30 focus:border-[#00c0f7] transition-all resize-none" />
                </div>

                <button type="submit" className="w-full bg-[#163c6f] hover:bg-[#0b1d42] text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 text-sm">
                  Pošaljite poruku
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

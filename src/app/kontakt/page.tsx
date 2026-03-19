"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Check, AlertCircle } from "lucide-react";

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
      staggerChildren: 0.08,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const contactItems = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Čajuša bb, 80 320 Kupres, BiH",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+387 (0) 34 275 100",
  },
  {
    icon: Phone,
    label: "Fax",
    value: "Fax: +387 (0) 34 274 951",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@adriaski.net",
    href: "mailto:info@adriaski.net",
  },
  {
    icon: Mail,
    label: "Recepcija email",
    value: "recepcija@adriaski.net",
    href: "mailto:recepcija@adriaski.net",
  },
  {
    icon: Clock,
    label: "Radno vrijeme",
    value: "Recepcija: 0-24 (svaki dan)",
  },
];

const inputClasses =
  "w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white text-dark hover:border-gray-300 text-base";

const labelClasses = "block text-sm font-accent font-semibold text-gray-600 mb-2.5 uppercase tracking-wide";

export default function KontaktPage() {
  const [activeTab, setActiveTab] = useState<"booking" | "contact">("booking");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    package: "",
    message: "",
  });

  // Contact form state
  const [contactForm, setContactForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  });

  const handleBookingSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      });

      if (!res.ok) throw new Error("Greška pri slanju rezervacije.");

      setSubmitStatus("success");
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        package: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Nešto je pošlo krivo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (!res.ok) throw new Error("Greška pri slanju poruke.");

      setSubmitStatus("success");
      setContactForm({
        lastName: "",
        firstName: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Nešto je pošlo krivo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.adriaski.net/wp-content/uploads/hotel-03.jpg"
          alt="Hotel Adria Ski"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/70 to-dark/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-accent text-xs tracking-widest text-accent-500 uppercase mb-6 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10">
              KONTAKT
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Kontaktirajte nas
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ispunite obrazac ili nas kontaktirajte direktno
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT SIDE - Form */}
            <motion.div
              className="lg:w-7/12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7 }}
            >
              {/* Tabs */}
              <div className="flex mb-10 bg-light/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm">
                <button
                  onClick={() => {
                    setActiveTab("booking");
                    setSubmitStatus("idle");
                  }}
                  className={`flex-1 py-3 px-6 rounded-lg font-accent font-semibold text-sm transition-all duration-300 ${
                    activeTab === "booking"
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-gray-500 hover:text-dark hover:bg-white/50"
                  }`}
                >
                  Rezervacija
                </button>
                <button
                  onClick={() => {
                    setActiveTab("contact");
                    setSubmitStatus("idle");
                  }}
                  className={`flex-1 py-3 px-6 rounded-lg font-accent font-semibold text-sm transition-all duration-300 ${
                    activeTab === "contact"
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-gray-500 hover:text-dark hover:bg-white/50"
                  }`}
                >
                  Kontakt
                </button>
              </div>

              {/* Success State */}
              {submitStatus === "success" && (
                <motion.div
                  className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-green-800">
                      Uspješno poslano!
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      Javit ćemo Vam se u najkraćem roku.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error State */}
              {submitStatus === "error" && (
                <motion.div
                  className="mb-8 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-red-800">
                      Greška!
                    </p>
                    <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              {/* Booking Form */}
              {activeTab === "booking" && (
                <motion.form
                  onSubmit={handleBookingSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key="booking-form"
                  className="space-y-5"
                >
                  <motion.div variants={fieldVariants}>
                    <label htmlFor="b-name" className={labelClasses}>
                      Ime i prezime
                    </label>
                    <input
                      id="b-name"
                      type="text"
                      required
                      className={inputClasses}
                      value={bookingForm.name}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, name: e.target.value })
                      }
                    />
                  </motion.div>

                  <motion.div
                    variants={fieldVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div>
                      <label htmlFor="b-email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        id="b-email"
                        type="email"
                        required
                        className={inputClasses}
                        value={bookingForm.email}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="b-phone" className={labelClasses}>
                        Telefon
                      </label>
                      <input
                        id="b-phone"
                        type="tel"
                        className={inputClasses}
                        value={bookingForm.phone}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fieldVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div>
                      <label htmlFor="b-checkin" className={labelClasses}>
                        Datum dolaska
                      </label>
                      <input
                        id="b-checkin"
                        type="date"
                        required
                        className={inputClasses}
                        value={bookingForm.checkIn}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            checkIn: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="b-checkout" className={labelClasses}>
                        Datum odlaska
                      </label>
                      <input
                        id="b-checkout"
                        type="date"
                        required
                        className={inputClasses}
                        value={bookingForm.checkOut}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            checkOut: e.target.value,
                          })
                        }
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fieldVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div>
                      <label htmlFor="b-guests" className={labelClasses}>
                        Broj osoba
                      </label>
                      <input
                        id="b-guests"
                        type="number"
                        min="1"
                        className={inputClasses}
                        value={bookingForm.guests}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            guests: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="b-package" className={labelClasses}>
                        Paket
                      </label>
                      <select
                        id="b-package"
                        className={inputClasses}
                        value={bookingForm.package}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            package: e.target.value,
                          })
                        }
                      >
                        <option value="">Odaberite paket</option>
                        <option value="ski-stay">Ski & Stay</option>
                        <option value="family">Obiteljski</option>
                        <option value="wellness">Wellness</option>
                        <option value="summer">Ljetni</option>
                        <option value="enduro">Enduro</option>
                        <option value="other">Ostalo</option>
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label htmlFor="b-message" className={labelClasses}>
                      Poruka
                    </label>
                    <textarea
                      id="b-message"
                      rows={4}
                      className={inputClasses + " resize-none"}
                      value={bookingForm.message}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          message: e.target.value,
                        })
                      }
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-600 text-dark font-semibold py-4.5 rounded-xl font-accent transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg"
                    >
                      {isSubmitting ? "Šalje se..." : "Pošaljite rezervaciju"}
                    </button>
                  </motion.div>
                </motion.form>
              )}

              {/* Contact Form */}
              {activeTab === "contact" && (
                <motion.form
                  onSubmit={handleContactSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key="contact-form"
                  className="space-y-5"
                >
                  <motion.div
                    variants={fieldVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div>
                      <label htmlFor="c-lastname" className={labelClasses}>
                        Prezime
                      </label>
                      <input
                        id="c-lastname"
                        type="text"
                        required
                        className={inputClasses}
                        value={contactForm.lastName}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="c-firstname" className={labelClasses}>
                        Ime
                      </label>
                      <input
                        id="c-firstname"
                        type="text"
                        required
                        className={inputClasses}
                        value={contactForm.firstName}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label htmlFor="c-email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      className={inputClasses}
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label htmlFor="c-message" className={labelClasses}>
                      Poruka
                    </label>
                    <textarea
                      id="c-message"
                      rows={6}
                      required
                      className={inputClasses + " resize-none"}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-600 text-dark font-semibold py-4.5 rounded-xl font-accent transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg"
                    >
                      {isSubmitting ? "Šalje se..." : "Pošaljite poruku"}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>

            {/* RIGHT SIDE - Contact Info */}
            <motion.div
              className="lg:w-5/12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-light to-white border border-gray-100 p-8 shadow-lg">
                <div className="relative h-48 -mx-8 -mt-8 mb-8 rounded-t-2xl overflow-hidden shadow-sm">
                  <Image
                    src="https://www.adriaski.net/wp-content/uploads/hotel-03.jpg"
                    alt="Hotel Adria Ski"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl text-dark mb-8">
                  Kontakt informacije
                </h3>

                <div className="space-y-6">
                  {contactItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-accent uppercase tracking-widest text-gray-400 mb-1">
                            {item.label}
                          </p>
                          {"href" in item && item.href ? (
                            <a
                              href={item.href}
                              className="text-dark hover:text-primary transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-dark font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100"
            {...fadeInUp}
          >
            <div className="h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                <p className="text-gray-500 font-accent text-lg">
                  Google Maps - Čajuša bb, Kupres, BiH
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Karta će biti dostupna kada se postavi API ključ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

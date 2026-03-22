"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#163c6f] text-white rounded-2xl shadow-2xl shadow-black/20 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-6 h-6 text-[#00c0f7] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-sm mb-1">Kolačići (Cookies)</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Ova web stranica koristi kolačiće kako bi poboljšala vaše iskustvo pregledavanja.
              Korištenjem naše stranice pristajete na korištenje kolačića.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto flex-shrink-0">
          <button
            onClick={decline}
            className="flex-1 md:flex-none px-5 py-2.5 border border-white/20 text-white/80 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
          >
            Odbij
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none px-5 py-2.5 bg-[#00c0f7] hover:bg-[#00a8d6] text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Prihvati
          </button>
        </div>
        <button onClick={decline} className="absolute top-3 right-3 md:hidden text-white/40 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

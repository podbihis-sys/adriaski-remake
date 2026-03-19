import Link from "next/link";
import { Mountain, Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Početna", href: "/" },
  { label: "Ponuda", href: "/angebote" },
  { label: "Cjenik", href: "/preisliste" },
  { label: "O nama", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Događanja", href: "/events" },
];

export function Footer() {
  return (
    <footer>
      {/* Top accent line */}
      <div className="h-1 w-full bg-accent" />

      <div className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Logo & Description */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <Mountain className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xl font-heading font-bold text-white tracking-wide">
                  ADRIA SKI
                </span>
              </Link>
              <p className="text-sm font-accent font-medium text-accent-400">
                Premium Ski & Wellness Resort
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Smješten u srcu Kupresa, Hotel Adria Ski nudi nezaboravan odmor
                uz skijalište, wellness, bazen i vrhunsku gastronomiju tokom
                cijele godine.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-6">
                Brzi linkovi
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-6">
                Kontakt
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/60">
                    Čajuša bb, 80 320 Kupres, BiH
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+38734275100"
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    +387 (0) 34 275 100
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:info@adriaski.net"
                      className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                    >
                      info@adriaski.net
                    </a>
                    <a
                      href="mailto:recepcija@adriaski.net"
                      className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                    >
                      recepcija@adriaski.net
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Working Hours */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-6">
                Radno vrijeme
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Recepcija
                    </p>
                    <p className="text-sm text-white/60">0-24</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Skijalište
                    </p>
                    <p className="text-sm text-white/60">09:00 - 16:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white/80">Bazen</p>
                    <p className="text-sm text-white/60">08:00 - 20:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-white/40">
              &copy; 2026 Hotel Adria Ski. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

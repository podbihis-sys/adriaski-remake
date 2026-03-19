import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
      <div className="h-1 w-full bg-gradient-to-r from-accent-500 via-secondary-500 to-accent-500" />

      <div className="bg-dark text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 [&>*+*]:lg:border-l [&>*+*]:lg:border-white/10 [&>*+*]:lg:pl-12">
            {/* Column 1: Logo & Description */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center group">
                <Image
                  src="https://www.adriaski.net/wp-content/uploads/2016/05/logo160x160.png"
                  alt="Adria Ski"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
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
                      className="text-sm text-white/60 hover:text-accent-500 hover:translate-x-1 transition-all duration-200 inline-block"
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
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 flex-shrink-0"><MapPin className="w-4 h-4 text-accent" /></span>
                  <span className="text-sm text-white/60">
                    Čajuša bb, 80 320 Kupres, BiH
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 flex-shrink-0"><Phone className="w-4 h-4 text-accent" /></span>
                  <a
                    href="tel:+38734275100"
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    +387 (0) 34 275 100
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 flex-shrink-0"><Mail className="w-4 h-4 text-accent" /></span>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:info@adriaski.net"
                      className="text-sm text-white/60 hover:text-accent-500 hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      info@adriaski.net
                    </a>
                    <a
                      href="mailto:recepcija@adriaski.net"
                      className="text-sm text-white/60 hover:text-accent-500 hover:translate-x-1 transition-all duration-200 inline-block"
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
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 flex-shrink-0"><Clock className="w-4 h-4 text-accent" /></span>
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Recepcija
                    </p>
                    <p className="text-sm text-white/60">0-24</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 flex-shrink-0"><Clock className="w-4 h-4 text-accent" /></span>
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Skijalište
                    </p>
                    <p className="text-sm text-white/60">09:00 - 16:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 flex-shrink-0"><Clock className="w-4 h-4 text-accent" /></span>
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

import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Kamera live", href: "/kamera-live" },
  { label: "Cjenik", href: "/cjenik" },
  { label: "Kontakt", href: "/kontakt" },
];

const recentPosts = [
  { label: "Otvaramo skijašku sezonu 2026", href: "/dogadanja" },
  { label: "Doček Nove godine", href: "/dogadanja" },
  { label: "Adria Ski Cup 2024", href: "/dogadanja" },
];

export function Footer() {
  return (
    <footer className="bg-[#163c6f] text-white">
      <div className="border-t border-[#dcdcdc]/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/logo-square.png"
                  alt="Adria Ski"
                  width={80}
                  height={80}
                  className="w-16 h-16"
                />
              </Link>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-[#f9f9f9]">
              O nama
            </h3>
            <p className="text-sm text-[#f9f9f9]/70 leading-relaxed">
              Hotel Adria ski<br />
              Čajuša bb<br />
              80 320 Kupres, BiH
            </p>
            <div className="mt-3 text-sm text-[#f9f9f9]/70">
              <p>T. +387 (0) 34 275 100</p>
              <p>F. +387 (0) 34 274 951</p>
              <p>
                M.{" "}
                <a
                  href="mailto:info@adriaski.net"
                  className="text-[#00c0f7] hover:underline"
                >
                  info@adriaski.net
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#f9f9f9]">
              Explore
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#f9f9f9]/70 hover:text-[#00c0f7] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#f9f9f9]">
              Recent
            </h3>
            <ul className="space-y-2">
              {recentPosts.map((post, i) => (
                <li key={i}>
                  <Link
                    href={post.href}
                    className="text-sm text-[#f9f9f9]/70 hover:text-[#00c0f7] transition-colors duration-200"
                  >
                    {post.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#f9f9f9]">
              Kontakt
            </h3>
            <div className="text-sm text-[#f9f9f9]/70 space-y-2">
              <p>Hotel Adria ski</p>
              <p>Čajuša bb, 80 320 Kupres, BiH</p>
              <p>
                <a href="tel:+38734275100" className="hover:text-[#00c0f7] transition-colors">
                  +387 (0) 34 275 100
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@adriaski.net"
                  className="text-[#00c0f7] hover:underline"
                >
                  info@adriaski.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-[#f9f9f9]/50 text-center">
            &copy; 2026 Hotel Adria Ski. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

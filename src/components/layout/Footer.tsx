"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathTranslations, usePathLocale } from "@/lib/use-path-locale";

export function Footer() {
  const tf = usePathTranslations("footer");
  const tn = usePathTranslations("nav");
  const tc = usePathTranslations("common");
  const tck = usePathTranslations("cookies");
  const locale = usePathLocale();
  const p = (path: string) => `/${locale}${path}`;

  const exploreHrefs = [
    { key: "home", href: p("/") },
    { key: "camera_live", href: p("/kamera-live") },
    { key: "pricing", href: p("/cjenik") },
    { key: "contact", href: p("/kontakt") },
  ];

  const recentPosts = [
    { fallback: "Otvaramo skijašku sezonu 2026", href: p("/dogadanja") },
    { fallback: "Doček Nove godine", href: p("/dogadanja") },
    { fallback: "Adria Ski Cup 2024", href: p("/dogadanja") },
  ];

  return (
    <footer className="bg-[#163c6f] text-white">
      <div className="border-t border-[#dcdcdc]/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Link href={p("/")}>
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
              {tf("about")}
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
              {tf("explore")}
            </h3>
            <ul className="space-y-2">
              {exploreHrefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#f9f9f9]/70 hover:text-[#00c0f7] transition-colors duration-200"
                  >
                    {tn(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#f9f9f9]">
              {tf("recent")}
            </h3>
            <ul className="space-y-2">
              {recentPosts.map((post, i) => (
                <li key={i}>
                  <Link
                    href={post.href}
                    className="text-sm text-[#f9f9f9]/70 hover:text-[#00c0f7] transition-colors duration-200"
                  >
                    {post.fallback}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#f9f9f9]">
              {tf("contact")}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#f9f9f9]/50">
            &copy; 2026 Hotel Adria Ski. {tc("all_rights_reserved")}.
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event("show-cookie-settings"))}
            className="text-xs text-[#f9f9f9]/50 hover:text-[#00c0f7] transition-colors cursor-pointer"
          >
            {tck("footer_link")}
          </button>
        </div>
      </div>
    </footer>
  );
}

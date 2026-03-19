"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Početna", href: "/" },
  {
    label: "O nama",
    dropdown: [
      { label: "Hotel Adria Ski", href: "/ueber-uns" },
      { label: "Skijalište", href: "/skigebiet" },
      { label: "Restoran Ognjišta", href: "/restaurant" },
      { label: "Škola skijanja", href: "/skischule" },
      { label: "Bazen & Wellness", href: "/wellness" },
    ],
  },
  {
    label: "Ponuda",
    dropdown: [
      { label: "Zimski paketi", href: "/angebote" },
      { label: "Ljetna ponuda", href: "/sommer" },
      { label: "Cjenik", href: "/preisliste" },
      { label: "Gastro ponuda", href: "/gastro" },
      { label: "Svadbeni salon", href: "/hochzeit" },
      { label: "Seminari", href: "/seminare" },
      { label: "Sportske pripreme", href: "/sport" },
    ],
  },
  { label: "Događanja", href: "/events" },
  { label: "Kontakt", href: "/kontakt" },
];

function DesktopDropdown({
  items,
  isOpen,
}: {
  items: NavDropdownItem[];
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-dark/10 border border-gray-100 overflow-hidden z-50"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 text-sm text-dark/70 hover:text-accent-600 hover:bg-accent-50 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileAccordion({
  label,
  items,
  onLinkClick,
}: {
  label: string;
  items: NavDropdownItem[];
  onLinkClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-2xl font-heading text-white py-3"
      >
        {label}
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pl-4"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className="block py-2 text-lg text-white/70 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group hover:opacity-80 transition">
              <Image
                src="https://www.adriaski.net/wp-content/uploads/2016/05/logo_adria_ski.png"
                alt="Adria Ski"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-accent font-medium text-white/90 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 border-b-2 border-transparent hover:border-accent-500"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-accent font-medium text-white/90 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 border-b-2 border-transparent hover:border-accent-500">
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                  {item.dropdown && (
                    <DesktopDropdown
                      items={item.dropdown}
                      isOpen={openDropdown === item.label}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/kontakt"
                className="hidden lg:inline-flex items-center px-6 py-2.5 bg-accent text-dark font-accent font-semibold text-sm rounded-full hover:bg-accent-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30"
              >
                Rezervacija
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-8 pb-8 overflow-y-auto">
              <div className="flex-1 space-y-2">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <MobileAccordion
                      key={item.label}
                      label={item.label}
                      items={item.dropdown}
                      onLinkClick={closeMobile}
                    />
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href!}
                      onClick={closeMobile}
                      className="block text-2xl font-heading text-white py-3 hover:text-accent transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              <div className="pt-8 border-t border-white/10">
                <Link
                  href="/kontakt"
                  onClick={closeMobile}
                  className="block w-full text-center px-6 py-4 bg-accent text-dark font-accent font-bold text-lg rounded-full hover:bg-accent-400 transition-all duration-300"
                >
                  Rezervacija
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathTranslations, usePathLocale } from "@/lib/use-path-locale";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

interface DynamicMenuItem {
  slug: string;
  title: string;
  menuPosition: string;
  menuOrder: number;
}

const menuGroupMap: Record<string, number> = {
  "o-nama": 1,
  "ponuda": 2,
  "ljetna-ponuda": 3,
};

function getNavItems(t: (key: string) => string, locale: string, dynamicItems: DynamicMenuItem[] = []): NavItem[] {
  const p = (path: string) => `/${locale}${path}`;

  // Collect dynamic items per group
  const dynamicByGroup: Record<string, NavDropdownItem[]> = {};
  const dynamicTop: NavItem[] = [];

  for (const item of dynamicItems) {
    // Skip items that are already hardcoded
    const hardcodedSlugs = [
      "hotel-adria-ski", "motel-tikvice", "skijalista", "restoran-ognjista", "skola-skijanja",
      "kamera-live", "gastro-ponuda", "svadbeni-salon", "sportske-pripreme", "seminari", "bazen", "fitness",
      "brdski-biciklizam", "planinarenje", "ramsko-jezero", "jahanje", "enduro-turizam",
      "dogadanja", "cjenik", "kontakt",
    ];
    if (hardcodedSlugs.includes(item.slug)) continue;

    if (item.menuPosition === "top") {
      dynamicTop.push({ label: item.title, href: p(`/${item.slug}`) });
    } else if (menuGroupMap[item.menuPosition] !== undefined) {
      if (!dynamicByGroup[item.menuPosition]) dynamicByGroup[item.menuPosition] = [];
      dynamicByGroup[item.menuPosition].push({ label: item.title, href: p(`/${item.slug}`) });
    }
  }

  const nav: NavItem[] = [
    { label: t("home"), href: p("/") },
    {
      label: t("about"),
      dropdown: [
        { label: t("hotel"), href: p("/hotel-adria-ski") },
        { label: t("motel_tikvice"), href: p("/motel-tikvice") },
        { label: t("ski_slopes"), href: p("/skijalista") },
        { label: t("restaurant"), href: p("/restoran-ognjista") },
        { label: t("ski_school"), href: p("/skola-skijanja") },
        ...(dynamicByGroup["o-nama"] || []),
      ],
    },
    {
      label: t("offer"),
      dropdown: [
        { label: t("camera_live"), href: p("/kamera-live") },
        { label: t("gastro"), href: p("/gastro-ponuda") },
        { label: t("wedding_hall"), href: p("/svadbeni-salon") },
        { label: t("sports_prep"), href: p("/sportske-pripreme") },
        { label: t("seminars"), href: p("/seminari") },
        { label: t("pool"), href: p("/bazen") },
        { label: t("fitness"), href: p("/fitness") },
        ...(dynamicByGroup["ponuda"] || []),
      ],
    },
    {
      label: t("summer_offer"),
      dropdown: [
        { label: t("cycling"), href: p("/brdski-biciklizam") },
        { label: t("hiking"), href: p("/planinarenje") },
        { label: t("lake"), href: p("/ramsko-jezero") },
        { label: t("horseback"), href: p("/jahanje") },
        { label: t("enduro"), href: p("/enduro-turizam") },
        ...(dynamicByGroup["ljetna-ponuda"] || []),
      ],
    },
    { label: t("events"), href: p("/dogadanja") },
    { label: t("pricing"), href: p("/cjenik") },
    ...dynamicTop,
    { label: t("contact"), href: p("/kontakt") },
  ];

  return nav;
}

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
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg border border-gray-200 z-50"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 text-sm text-[#163c6f] hover:text-[#00c0f7] hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-0"
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
        className="flex items-center justify-between w-full text-lg text-white py-3 border-b border-white/10"
      >
        {label}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
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
                className="block py-2.5 text-sm text-white/70 hover:text-[#00c0f7] transition-colors duration-200"
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
  const t = usePathTranslations("nav");
  const locale = usePathLocale();
  const [dynamicItems, setDynamicItems] = useState<DynamicMenuItem[]>([]);
  const navItems = getNavItems(t, locale, dynamicItems);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch("/api/menu")
      .then((r) => r.ok ? r.json() : [])
      .then(setDynamicItems)
      .catch(() => {});
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <nav className="bg-[#163c6f] relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Adria Ski"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
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
                      className="px-4 py-6 text-sm font-medium text-white hover:text-[#00c0f7] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 px-4 py-6 text-sm font-medium text-white hover:text-[#00c0f7] transition-colors duration-200">
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
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

            {/* Language Switcher */}
            <div className="text-white">
              <LanguageSwitcher />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white"
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#212121] lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
              <div className="flex-1">
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
                      className="block text-lg text-white py-3 border-b border-white/10 hover:text-[#00c0f7] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

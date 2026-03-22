"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function NotFound() {
  const locale = useLocale();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#163c6f] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Stranica nije pronađena.</p>
      <Link
        href={`/${locale}`}
        className="bg-[#163c6f] text-white px-6 py-3 rounded-lg hover:bg-[#1a4a87] transition font-medium"
      >
        Povratak na početnu
      </Link>
    </div>
  );
}

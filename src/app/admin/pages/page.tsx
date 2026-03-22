"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Clock, ArrowRight, Loader2 } from "lucide-react";

interface PageItem {
  slug: string;
  title: string;
  updatedAt: string;
}

export default function AdminPagesPage() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPages() {
      try {
        const token = localStorage.getItem("admin_token") || "";
        const res = await fetch("/api/admin/pages", {
          headers: { "x-admin-token": token },
        });
        if (!res.ok) throw new Error("Greška pri dohvaćanju stranica.");
        const data = await res.json();
        setPages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Greška.");
      } finally {
        setLoading(false);
      }
    }
    fetchPages();
  }, []);

  function formatDate(iso: string) {
    try {
      return new Date(iso).toLocaleDateString("hr-HR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-[#163c6f] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-700 px-6 py-4 rounded-xl">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#163c6f]">Stranice</h1>
        <p className="text-gray-500 mt-1">Uredite sadržaj stranica web stranice</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <div
            key={page.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#163c6f]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-[#163c6f] truncate">{page.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">/{page.slug}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatDate(page.updatedAt)}</span>
            </div>

            <Link
              href={`/admin/pages/${page.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00c0f7] hover:text-[#00a8d6] transition-colors"
            >
              Uredi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {pages.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          Nema stranica za uređivanje.
        </div>
      )}
    </div>
  );
}

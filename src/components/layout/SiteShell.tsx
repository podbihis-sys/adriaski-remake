"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import CookieBanner from "./CookieBanner";
import SkiStatus from "../sections/SkiStatus";
import PageTracker from "./PageTracker";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <SkiStatus />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <PageTracker />
    </>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Adria Ski | Premium Ski & Wellness Resort | Kupres, BiH",
  description:
    "Hotel Adria Ski u Kupresu nudi premium smještaj, skijalište, wellness, bazen i restoran. Idealna destinacija za zimski odmor, ljetni odmor, seminare i sportske pripreme u srcu Bosne i Hercegovine.",
  icons: {
    icon: "/images/logo-square.png",
    apple: "/images/logo-square.png",
  },
  openGraph: {
    title: "Hotel Adria Ski | Premium Ski & Wellness Resort | Kupres, BiH",
    description:
      "Hotel Adria Ski u Kupresu nudi premium smještaj, skijalište, wellness, bazen i restoran. Idealna destinacija za zimski odmor, ljetni odmor, seminare i sportske pripreme u srcu Bosne i Hercegovine.",
    type: "website",
    locale: "bs_BA",
    siteName: "Hotel Adria Ski",
    url: "https://adriaski.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable}`}
    >
      <body className="font-body bg-light text-dark antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

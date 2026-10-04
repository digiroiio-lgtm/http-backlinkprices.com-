import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { INDEXABLE, SITE } from "@/data/site";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
});
const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Compare Backlink Prices, Providers & Link Building Services | BacklinkPrices",
    template: "%s | BacklinkPrices",
  },
  description:
    "Compare backlink prices, link building providers and services side by side. Price, authority, turnaround and guarantees in one place.",
  openGraph: { siteName: SITE.name, type: "website" },
  robots: INDEXABLE ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}

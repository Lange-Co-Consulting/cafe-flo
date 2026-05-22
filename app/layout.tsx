import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business, seo } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://cafe-flo.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: "%s — Café Flo",
  },
  description: seo.description,
  applicationName: business.name,
  authors: [{ name: business.name }],
  keywords: [
    "Café Flo",
    "Mannheim",
    "Friedrichsplatz",
    "Wasserturm",
    "Quiche",
    "französisches Café",
    "Frühstück Mannheim",
    "Brunch Mannheim",
    "Wein Mannheim",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: seo.title,
    description: seo.description,
    siteName: business.name,
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${manrope.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

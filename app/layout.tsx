import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Valles Marineris – Grand Canyon Marsu",
  description: "Průvodce největším kaňonovým systémem na Marsu – Valles Marineris. Historie, geologie, mapy a vizualizace.",
  keywords: ["Mars", "Valles Marineris", "geologie", "mapa", "vesmír"],
  openGraph: {
    title: "Valles Marineris – Grand Canyon Marsu",
    description: "Objevte největší kaňon Sluneční soustavy – Valles Marineris.",
    url: "https://black-river-03d9a9e03.3.azurestaticapps.net/",
    siteName: "Valles Marineris Web",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valles Marineris panorama",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

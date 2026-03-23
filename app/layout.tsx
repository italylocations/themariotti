import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Matteo Mariotti",
    default:
      "Matteo Mariotti — Italian Lifestyle Photographer | Black & White Photography",
  },
  description:
    "Italian lifestyle photographer Matteo Mariotti captures the soul of Italy in black and white. Traditions, coastline, cuisine and everyday beauty.",
  metadataBase: new URL("https://themariotti.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themariotti.com",
    siteName: "Matteo Mariotti",
    title:
      "Matteo Mariotti — Italian Lifestyle Photographer | Black & White Photography",
    description:
      "Italian lifestyle photographer Matteo Mariotti captures the soul of Italy in black and white. Traditions, coastline, cuisine and everyday beauty.",
    images: [
      {
        url: "https://pub-placeholder.r2.dev/themariotti/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matteo Mariotti — Italian Lifestyle Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Matteo Mariotti — Italian Lifestyle Photographer | Black & White Photography",
    description:
      "Italian lifestyle photographer Matteo Mariotti captures the soul of Italy in black and white. Traditions, coastline, cuisine and everyday beauty.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://themariotti.com",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  additionalType: "http://schema.org/Photographer",
  name: "Matteo Mariotti",
  description:
    "Italian lifestyle photographer specializing in black and white photography. Over 30 years capturing traditions, coastline, cuisine and everyday Italian beauty.",
  url: "https://themariotti.com",
  telephone: "+393356232668",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IT",
  },
  areaServed: ["Italy", "Puglia", "Amalfi Coast", "Sicily", "Tuscany"],
  knowsAbout: [
    "Lifestyle Photography",
    "Black and White Photography",
    "Italian Culture",
    "Italian Traditions",
    "Food Photography",
  ],
  availableLanguage: ["English", "Italian"],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

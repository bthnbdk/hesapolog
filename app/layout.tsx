import React from 'react';
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: 'swap', variable: '--font-jakarta', weight: ['500', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hesapolog.com'),
  title: {
    default: "Hesapolog | Tüm Hesaplama Araçları",
    template: "%s | Hesapolog",
  },
  description: "Kredi, vergi, matematik, sağlık ve tarih hesaplamaları için en kapsamlı ve pratik araçlar.",
  openGraph: {
    type: "website",
    title: {
        default: "Hesapolog | Tüm Hesaplama Araçları",
        template: "%s | Hesapolog",
    },
    description: "Kredi, vergi, matematik, sağlık ve tarih hesaplamaları için en kapsamlı ve pratik araçlar.",
    images: ["https://res.cloudinary.com/ddepwjk2w/image/upload/v1764499663/og-image_1_j8fc1j.png"],
    url: "https://hesapolog.com/",
    siteName: "Hesapolog",
  },
  twitter: {
    card: "summary_large_image",
    title: {
        default: "Hesapolog | Tüm Hesaplama Araçları",
        template: "%s | Hesapolog",
    },
    description: "Kredi, vergi, matematik, sağlık ve tarih hesaplamaları için en kapsamlı ve pratik araçlar.",
    images: ["https://res.cloudinary.com/ddepwjk2w/image/upload/v1764499663/og-image_1_j8fc1j.png"],
  },
  manifest: "/manifest.json",
  themeColor: "#452829",
  icons: {
    apple: "https://res.cloudinary.com/ddepwjk2w/image/upload/v1764498989/apple-touch-icon_allncn.png",
    icon: [
        { url: "https://res.cloudinary.com/ddepwjk2w/image/upload/v1764498989/favicon-32x32_rmdhd1.png", sizes: "32x32", type: "image/png" },
        { url: "https://res.cloudinary.com/ddepwjk2w/image/upload/v1764498989/favicon-16x16_eoy7i9.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "https://res.cloudinary.com/ddepwjk2w/image/upload/v1764498989/favicon_lobtrw.ico",
  },
  other: {
    'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://hesapolog.com/',
        name: 'Hesapolog',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://hesapolog.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
        '@graph': [
            {
                '@type': 'Organization',
                name: 'Hesapolog',
                url: 'https://hesapolog.com/',
                logo: 'https://res.cloudinary.com/ddepwjk2w/image/upload/v1764498989/android-chrome-512x512_kuxsy5.png'
            }
        ]
    }),
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <Layout>{children}</Layout>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
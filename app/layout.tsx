export const revalidate = 86400;
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SayfaGuncellemeBilgisi from "@/components/SayfaGuncellemeBilgisi";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hocaileborsa.com"),
  title: {
    default: "Hoca İle Borsa - Borsa, Halka Arz ve Finans Analizi",
    template: "%s | Hoca İle Borsa",
  },
  description:
    "Türkiye borsası, halka arz haberleri, temettü takvimi, yatırım fonları ve mevduat faiz oranlarını takip edebileceğiniz kapsamlı finans platformu.",
  keywords: [
    "borsa",
    "halka arz",
    "temettü",
    "yatırım fonları",
    "mevduat faizi",
    "BIST",
    "hisse senedi",
    "grafik analiz",
    "taslak izahname",
  ],
  authors: [{ name: "Hoca İle Borsa" }],
  creator: "Hoca İle Borsa",
  publisher: "Hoca İle Borsa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.hocaileborsa.com",
    siteName: "Hoca İle Borsa",
    title: "Hoca İle Borsa - Borsa, Halka Arz ve Finans Analizi",
    description:
      "Türkiye borsası, halka arz haberleri, temettü takvimi, yatırım fonları ve mevduat faiz oranlarını takip edebileceğiniz kapsamlı finans platformu.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Hoca İle Borsa - Finans Platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoca İle Borsa - Borsa, Halka Arz ve Finans Analizi",
    description:
      "Türkiye borsası, halka arz haberleri, temettü takvimi, yatırım fonları ve mevduat faiz oranlarını takip edin.",
    images: ["/banner.png"],
  },
  alternates: {
    canonical: "https://www.hocaileborsa.com",
  },
  other: {
    "google-adsense-account": "ca-pub-9613627671991162",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9613627671991162"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className="site-background">
        <SayfaGuncellemeBilgisi />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

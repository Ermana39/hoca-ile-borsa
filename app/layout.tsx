import { serializeJsonLd } from "@/lib/json-ld";
export const revalidate = false;
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { THEME_INITIALIZATION_SCRIPT } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hocaileborsa.com"),
  applicationName: "Hoca İle Borsa",
  title: "Hoca İle Borsa - Borsa, Halka Arz ve Finans Analizi",
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
        url: "/banner.webp",
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
    images: ["/banner.webp"],
  },
  other: {
    "google-adsense-account": "ca-pub-9613627671991162",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.hocaileborsa.com/#organization",
  name: "Hoca İle Borsa",
  alternateName: "hocaileborsa",
  url: "https://www.hocaileborsa.com/",
  logo: "https://www.hocaileborsa.com/icon-512.png",
  sameAs: [
    "https://x.com/HocaileBorsa",
    "https://www.instagram.com/hocaileborsa/",
    "https://t.me/halkaarz_0",
    "https://www.youtube.com/@hocaileborsa",
    "https://www.youtube.com/@HocaileGlobalPiyasalar",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "destekhocaileborsa@gmail.com",
    url: "https://www.hocaileborsa.com/iletisim",
    contactType: "customer support",
    areaServed: "TR",
    availableLanguage: "tr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-theme="dark" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_INITIALIZATION_SCRIPT }} />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-19MBQR2TF3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-19MBQR2TF3');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9613627671991162"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Hoca İle Borsa Haberleri"
          href="https://www.hocaileborsa.com/rss.xml"
        />
      </head>

      <body className="site-background">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SayfaGuncellemeBilgisi from "@/components/SayfaGuncellemeBilgisi";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hocaileborsa.com"),
  title: "Hoca İle Borsa",
  description: "Borsa, halka arz, temettü, fonlar ve finans içerikleri",
  alternates: {
    canonical: "/",
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
    <html lang="tr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9613627671991162"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className="site-background">
        <SayfaGuncellemeBilgisi />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
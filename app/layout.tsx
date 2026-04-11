import type { Metadata } from "next";
import "./globals.css";
import PageViewTracker from "@/components/page-view-tracker";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hoca İle Borsa",
  description: "Borsa, halka arz, temettü, fonlar ve finans içerikleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9613627679911162"
          crossOrigin="anonymous"
        />
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
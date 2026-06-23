"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT = "ca-pub-9613627671991162";

const adFreePages = new Set([
  "/hakkimizda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/kullanim-sartlari",
  "/yasal-uyari",
  "/reklam",
  "/borsa/dip-zirve-analizi",
  "/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar",
  "/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar",
  "/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar",
]);

function shouldShowAds(pathname: string) {
  if (
    adFreePages.has(pathname) ||
    pathname.startsWith("/yonetim") ||
    pathname.startsWith("/borsa/gosterge-taramalari/")
  ) {
    return false;
  }

  const draftBasePath = "/halka-arz/taslak-izahnameler";
  return !pathname.startsWith(`${draftBasePath}/`);
}

export default function AdSenseScript() {
  const pathname = usePathname();

  if (!shouldShowAds(pathname)) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}

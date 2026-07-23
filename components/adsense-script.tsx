"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { reklamGosterilebilirYolMu } from "@/lib/indexleme-politikasi";

const ADSENSE_CLIENT = "ca-pub-9613627671991162";
const ADSENSE_SERVING_ENABLED =
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

export default function AdSenseScript() {
  const pathname = usePathname();

  // Site sahipliği kök metadata'daki google-adsense-account etiketiyle
  // doğrulanır. Reklam betiği onay sonrasında ayrıca etkinleştirilir.
  if (!ADSENSE_SERVING_ENABLED || !reklamGosterilebilirYolMu(pathname)) {
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

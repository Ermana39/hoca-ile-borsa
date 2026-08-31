"use client";

import { useEffect, useRef } from "react";

const ADSENSE_CLIENT = "ca-pub-9613627671991162";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

type AdsenseResponsiveUnitProps = {
  className?: string;
  slot?: string;
};

export default function AdsenseResponsiveUnit({
  className = "",
  slot,
}: AdsenseResponsiveUnitProps) {
  const reklamBaslatildi = useRef(false);
  const temizSlot = slot?.trim();
  const gecerliSlot = Boolean(temizSlot && /^\d+$/.test(temizSlot));

  useEffect(() => {
    if (!gecerliSlot || reklamBaslatildi.current) return;

    reklamBaslatildi.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      reklamBaslatildi.current = false;
    }
  }, [gecerliSlot]);

  if (!gecerliSlot) return null;

  return (
    <aside
      aria-label="Reklam"
      className={`grid min-h-[100px] w-full overflow-hidden border-y border-slate-200 bg-slate-50/60 py-1 ${className}`}
      style={{ minHeight: 100 }}
    >
      <div
        aria-hidden="true"
        className="col-start-1 row-start-1 w-full"
        style={{ height: 100 }}
      />
      <div className="col-start-1 row-start-1 flex w-full items-center">
        <div className="w-full">
          <ins
            className="adsbygoogle min-h-[100px] w-full"
            style={{ display: "block" }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={temizSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </aside>
  );
}

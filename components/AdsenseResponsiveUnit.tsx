"use client";

import { useEffect, useRef, useState } from "react";

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

type AdStatus = "pending" | "filled" | "unfilled";

export default function AdsenseResponsiveUnit({
  className = "",
  slot,
}: AdsenseResponsiveUnitProps) {
  const reklamBaslatildi = useRef(false);
  const reklamRef = useRef<HTMLModElement>(null);
  const [adStatus, setAdStatus] = useState<AdStatus>("pending");
  const temizSlot = slot?.trim();
  const gecerliSlot = Boolean(temizSlot && /^\d+$/.test(temizSlot));

  useEffect(() => {
    if (!gecerliSlot) return;

    const reklam = reklamRef.current;
    if (!reklam) return;

    const durumuGuncelle = () => {
      const yeniDurum = reklam.dataset.adStatus;
      if (yeniDurum === "filled" || yeniDurum === "unfilled") {
        setAdStatus(yeniDurum);
      }
    };

    durumuGuncelle();
    const gozlemci = new MutationObserver(durumuGuncelle);
    gozlemci.observe(reklam, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });

    if (!reklamBaslatildi.current) {
      reklamBaslatildi.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        reklamBaslatildi.current = false;
      }
    }

    return () => gozlemci.disconnect();
  }, [gecerliSlot]);

  if (!gecerliSlot) return null;

  return (
    <aside
      aria-label="Reklam"
      aria-hidden={adStatus === "unfilled" ? true : undefined}
      className={`grid min-h-[100px] w-full overflow-hidden border-y border-slate-200 bg-slate-50/60 py-1 ${className}`}
      style={
        adStatus === "unfilled"
          ? { display: "none", height: 0, minHeight: 0, margin: 0, padding: 0 }
          : { minHeight: 100 }
      }
    >
      <div
        aria-hidden="true"
        className="col-start-1 row-start-1 w-full"
        style={{ height: 100 }}
      />
      <div className="col-start-1 row-start-1 flex w-full items-center">
        <div className="w-full">
          <ins
            ref={reklamRef}
            className="adsbygoogle min-h-[100px] w-full"
            style={
              adStatus === "unfilled"
                ? { display: "none", height: 0, minHeight: 0, margin: 0, padding: 0 }
                : { display: "block" }
            }
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

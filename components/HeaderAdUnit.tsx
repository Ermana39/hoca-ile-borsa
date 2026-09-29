"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeaderAdUnit.module.css";

const ADSENSE_CLIENT = "ca-pub-9613627671991162";
const HEADER_AD_SLOT = "7730442435";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export default function HeaderAdUnit() {
  const reklamBaslatildi = useRef(false);
  const reklamRef = useRef<HTMLModElement>(null);
  const [reklamBos, setReklamBos] = useState(false);

  useEffect(() => {
    const reklam = reklamRef.current;
    if (!reklam) return;

    const durumuGuncelle = () => {
      setReklamBos(reklam.dataset.adStatus === "unfilled");
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
  }, []);

  return (
    <aside
      aria-label="Reklam"
      aria-hidden={reklamBos ? true : undefined}
      className={`${styles.container} ${reklamBos ? styles.empty : ""}`}
    >
      <ins
        ref={reklamRef}
        className={`adsbygoogle ${styles.slot}`}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={HEADER_AD_SLOT}
      />
    </aside>
  );
}

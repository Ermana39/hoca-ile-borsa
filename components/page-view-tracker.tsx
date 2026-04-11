"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DEDUPE_MS = 15000;

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;

    const realPath = window.location.pathname || pathname;
    const storageKey = `pv:${realPath}`;
    const now = Date.now();

    try {
      const lastSent = Number(sessionStorage.getItem(storageKey) || "0");
      if (now - lastSent < DEDUPE_MS) {
        return;
      }

      sessionStorage.setItem(storageKey, String(now));
    } catch {
      // sessionStorage erişimi olmazsa devam et
    }

    fetch("/api/page-view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pathname: realPath,
      }),
      keepalive: true,
      cache: "no-store",
    }).catch(() => {});
  }, [pathname]);

  return null;
}
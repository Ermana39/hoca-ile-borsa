"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageViewTracker() {
  const pathname = usePathname();
  const lastSentRef = useRef<string>("");

  useEffect(() => {
    if (!pathname) return;
    if (lastSentRef.current === pathname) return;

    lastSentRef.current = pathname;

    fetch("/api/page-view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pathname }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);

  return null;
}
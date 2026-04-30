"use client";

import { useEffect, useState } from "react";
import pageUpdates from "@/lib/page-updates.generated.json";

type PageUpdateItem = {
  route: string;
  updatedAt: string;
  file?: string;
};

type PageUpdatesData = {
  generatedAt?: string;
  pages?: PageUpdateItem[];
};

const GUNCELLEME_GIZLENECEK_SAYFALAR = new Set([
  "/",
  "/borsa",
  "/fonlar",
  "/halka-arz",
  "/temettu",
  "/mevduat-kredi-faizleri",
]);

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  const clean = path.split("?")[0].split("#")[0];
  return clean.endsWith("/") && clean !== "/" ? clean.slice(0, -1) : clean;
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function findUpdate(pathname: string) {
  const data = pageUpdates as PageUpdatesData;
  const pages = Array.isArray(data.pages) ? data.pages : [];
  const currentPath = normalizePath(pathname);

  const exact = pages.find((item) => normalizePath(item.route) === currentPath);

  if (exact) return exact;

  return null;
}

export default function SayfaGuncellemeBilgisi() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const currentPath = normalizePath(window.location.pathname);

    if (GUNCELLEME_GIZLENECEK_SAYFALAR.has(currentPath)) {
      setFormattedDate("");
      return;
    }

    const update = findUpdate(currentPath);

    if (!update?.updatedAt) return;

    setFormattedDate(formatDate(update.updatedAt));
  }, []);

  if (!formattedDate) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 999999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          borderRadius: "999px",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid rgba(148,163,184,0.35)",
          boxShadow: "0 8px 24px rgba(15,23,42,0.12)",
          backdropFilter: "blur(10px)",
          padding: "6px 11px",
          fontSize: "11px",
          fontWeight: 700,
          color: "#334155",
          lineHeight: "1",
        }}
      >
        Güncellendi: {formattedDate}
      </div>
    </div>
  );
}
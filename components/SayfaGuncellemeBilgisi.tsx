"use client";

import { usePathname } from "next/navigation";
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

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function routeToRegex(route: string) {
  const normalized = normalizePathname(route);

  if (!normalized.includes("[")) {
    return null;
  }

  const escaped = normalized
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\[\\.\\.\\.([^/]+)\\\]/g, ".+")
    .replace(/\\\[([^/]+)\\\]/g, "[^/]+");

  return new RegExp(`^${escaped}$`);
}

function findPageUpdate(pathname: string) {
  const data = pageUpdates as PageUpdatesData;
  const pages = Array.isArray(data.pages) ? data.pages : [];
  const normalizedPathname = normalizePathname(pathname);

  const exactMatch = pages.find(
    (item) => normalizePathname(item.route) === normalizedPathname
  );

  if (exactMatch) return exactMatch;

  return pages.find((item) => {
    const regex = routeToRegex(item.route);
    return regex ? regex.test(normalizedPathname) : false;
  });
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

export default function SayfaGuncellemeBilgisi() {
  const pathname = usePathname();
  const pageUpdate = findPageUpdate(pathname || "/");
  const formattedDate = pageUpdate ? formatDate(pageUpdate.updatedAt) : "";

  if (!formattedDate) return null;

  return (
    <div className="fixed right-3 top-3 z-50">
      <div className="rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur-md">
        Güncellendi: {formattedDate}
      </div>
    </div>
  );
}
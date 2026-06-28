import "server-only";

import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import haberTarihleri from "@/app/data/haber-tarihleri.generated.json";

const SITE_TIME_ZONE = "Europe/Istanbul";
const TURKIYE_OFFSET = "+03:00";
const kaliciHaberTarihleri = haberTarihleri as Record<string, string>;

function getParts(date: Date) {
  const parts = new Intl.DateTimeFormat("tr-TR", {
    timeZone: SITE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function toSiteIso(date: Date) {
  const parts = getParts(date);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${TURKIYE_OFFSET}`;
}

function getDosyaZamani(filePath: string) {
  const stat = statSync(filePath);
  const created = stat.birthtimeMs > 0 ? stat.birthtime : undefined;
  return toSiteIso(created ?? stat.mtime);
}

export function getHaberDosyaTarihi(importMetaUrl: string) {
  const filePath = fileURLToPath(importMetaUrl);
  const href = getHrefFromFilePath(filePath);
  const kaliciTarih = href ? kaliciHaberTarihleri[href] : undefined;
  return kaliciTarih ?? getDosyaZamani(filePath);
}

export function getHaberDosyaTarihiFromHref(href: string) {
  if (!href.startsWith("/haber/")) return undefined;

  const segments = href
    .split("/")
    .filter(Boolean)
    .slice(1);

  if (segments.length === 0 || segments.some((segment) => segment === "..")) {
    return undefined;
  }

  try {
    const kaliciTarih = kaliciHaberTarihleri[href];
    if (kaliciTarih) return kaliciTarih;

    return getDosyaZamani(path.join(process.cwd(), "app", "haber", ...segments, "page.tsx"));
  } catch {
    return undefined;
  }
}

function getHrefFromFilePath(filePath: string) {
  const relativePath = path.relative(path.join(process.cwd(), "app", "haber"), filePath);
  const normalized = relativePath.split(path.sep);

  if (
    relativePath.startsWith("..") ||
    normalized.length < 2 ||
    normalized.at(-1) !== "page.tsx"
  ) {
    return undefined;
  }

  return `/haber/${normalized.slice(0, -1).join("/")}`;
}

export function getHaberGunIso(iso: string) {
  return iso.slice(0, 10);
}

export function formatHaberTarihi(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  const tarih = new Intl.DateTimeFormat("tr-TR", {
    timeZone: SITE_TIME_ZONE,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const saat = new Intl.DateTimeFormat("tr-TR", {
    timeZone: SITE_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return `${tarih} · ${saat}`;
}

import "server-only";

import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_TIME_ZONE = "Europe/Istanbul";
const TURKIYE_OFFSET = "+03:00";

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
  const gitTarihi = getGitEklenmeTarihi(filePath);
  if (gitTarihi) return gitTarihi;

  const stat = statSync(filePath);
  const created = stat.birthtimeMs > 0 ? stat.birthtime : undefined;
  return toSiteIso(created ?? stat.mtime);
}

function getGitEklenmeTarihi(filePath: string) {
  const cwd = process.cwd();
  const relativePath = path.relative(cwd, filePath);

  if (relativePath.startsWith("..")) return undefined;

  try {
    const output = execFileSync(
      "git",
      ["log", "--diff-filter=A", "--follow", "--format=%aI", "--", relativePath],
      {
        cwd,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }
    )
      .trim()
      .split(/\r?\n/)
      .find(Boolean);

    return output ? toSiteIso(new Date(output)) : undefined;
  } catch {
    return undefined;
  }
}

export function getHaberDosyaTarihi(importMetaUrl: string) {
  return getDosyaZamani(fileURLToPath(importMetaUrl));
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
    return getDosyaZamani(path.join(process.cwd(), "app", "haber", ...segments, "page.tsx"));
  } catch {
    return undefined;
  }
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

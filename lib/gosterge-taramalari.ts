// Gösterge taraması veri okuyucu — tüm tarama sayfaları için TEK kaynak.
// data/<dosya>.json yapısı: { columns, rows, guncellemeTarihi }. Sembol kolonu
// otomatik bulunur. fs ile okunur; böylece Türkçe karakterli dosya adları
// (örn. "Yükselis-trendi.json") da sorunsuz çalışır.
import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(
  process.cwd(),
  "app",
  "borsa",
  "gosterge-taramalari",
  "data"
);

function normalizeText(metin: string) {
  return metin
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .trim();
}

type JsonRow = Record<string, string | number | null>;

export type TaramaVerisi = {
  hisseler: string[];
  guncellemeTarihi?: string;
};

export function okuTarama(dataFile: string): TaramaVerisi {
  let raw: string;
  try {
    raw = fs.readFileSync(path.join(DATA_DIR, dataFile), "utf-8");
  } catch {
    return { hisseler: [] };
  }

  let data: { columns?: string[]; rows?: JsonRow[]; guncellemeTarihi?: string };
  try {
    data = JSON.parse(raw);
  } catch {
    return { hisseler: [] };
  }

  const rows = data.rows || [];
  if (!rows.length) return { hisseler: [], guncellemeTarihi: data.guncellemeTarihi };

  const columns =
    Array.isArray(data.columns) && data.columns.length > 0
      ? data.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    columns.find((c) => normalizeText(c).includes("sembol")) || columns[0];

  const hisseler = rows
    .map((row) => String(row[sembolKolonu] ?? "").trim())
    .filter((s) => s && normalizeText(s) !== "sembol");

  return { hisseler, guncellemeTarihi: data.guncellemeTarihi };
}

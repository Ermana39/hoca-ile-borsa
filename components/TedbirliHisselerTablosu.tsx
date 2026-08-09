"use client";

import { useMemo, useRef, useState } from "react";
import tedbirData from "@/app/borsa/tedbirli-hisseler/data/tedbir.json";

const ILK_SATIR_SAYISI = 20;

type TedbirRow = {
  sembol: string;
  fiyat: number | null;
  degisim: number | null;
  baslangicTarihi: string;
  bitisTarihi: string;
  brutTakas: string;
  acigaSatis: string;
  krediliIslem: string;
  piyasaEmri: string;
  emirIptalAzaltma: string;
  veriYayini: string;
};

type JsonRow = Record<string, string | number | null>;

const columns = [
  ["sembol", "Sembol", "min-w-[130px]"],
  ["fiyat", "Fiyat", "min-w-[110px]"],
  ["degisim", "Değişim %", "min-w-[130px]"],
  ["baslangicTarihi", "Başlangıç Tarihi", "min-w-[160px]"],
  ["bitisTarihi", "Bitiş Tarihi", "min-w-[140px]"],
  ["brutTakas", "Brüt Takas", "min-w-[130px]"],
  ["acigaSatis", "Açığa Satış", "min-w-[140px]"],
  ["krediliIslem", "Kredili İşlem", "min-w-[150px]"],
  ["piyasaEmri", "Piyasa Emri", "min-w-[130px]"],
  ["emirIptalAzaltma", "Emir İptal / Azaltma", "min-w-[180px]"],
  ["veriYayini", "Veri Yayını", "min-w-[130px]"],
] as const;

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const normalized = normalizeText(header);
      return adaylar.some((aday) => normalized.includes(normalizeText(aday)));
    }) || ""
  );
}

function sayiCevir(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isNaN(value) ? null : value;
  const number = Number(String(value).trim().replace(/\s/g, "").replace(/\./g, "").replace(",", "."));
  return Number.isNaN(number) ? null : number;
}

function metinCevir(value: unknown): string {
  return value === null || value === undefined ? "" : String(value).trim();
}

function formatNumber(value: number | null) {
  if (value === null || Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 4 }).format(value);
}

function verileriOku(): TedbirRow[] {
  const rows = (tedbirData.rows || []) as JsonRow[];
  if (!rows.length) return [];
  const headers = tedbirData.columns?.length ? tedbirData.columns : Object.keys(rows[0]);
  const get = (adaylar: string[], fallback: number) => kolonBul(headers, adaylar) || headers[fallback] || "";
  const keys = {
    sembol: get(["sembol", "kod", "hisse", "ticker", "symbol"], 0),
    fiyat: get(["fiyat", "son fiyat", "kapanis", "kapanış"], 1),
    degisim: get(["degisim", "değişim"], 2),
    baslangic: get(["baslangic tarihi", "başlangıç tarihi", "baslangic", "başlangıç"], 3),
    bitis: get(["bitis tarihi", "bitiş tarihi", "bitis", "bitiş"], 4),
    brut: get(["brut takas", "brüt takas"], 5),
    aciga: get(["aciga satis", "açığa satış", "aciga satış", "açığa satis"], 6),
    kredili: get(["kredili islem", "kredili işlem"], 7),
    piyasa: get(["piyasa emri"], 8),
    iptal: get(["emir iptal", "emir iptal azaltma", "emir azaltma"], 9),
    yayin: get(["veri yayini", "veri yayını"], 10),
  };

  return rows
    .map((row) => ({
      sembol: metinCevir(row[keys.sembol]),
      fiyat: sayiCevir(row[keys.fiyat]),
      degisim: sayiCevir(row[keys.degisim]),
      baslangicTarihi: metinCevir(row[keys.baslangic]),
      bitisTarihi: metinCevir(row[keys.bitis]),
      brutTakas: metinCevir(row[keys.brut]) || "-",
      acigaSatis: metinCevir(row[keys.aciga]) || "-",
      krediliIslem: metinCevir(row[keys.kredili]) || "-",
      piyasaEmri: metinCevir(row[keys.piyasa]) || "-",
      emirIptalAzaltma: metinCevir(row[keys.iptal]) || "-",
      veriYayini: metinCevir(row[keys.yayin]) || "-",
    }))
    .filter((item) => item.sembol);
}

export default function TedbirliHisselerTablosu() {
  const rows = useMemo(() => verileriOku(), []);
  const [tumunuGoster, setTumunuGoster] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const gorunenRows = tumunuGoster ? rows : rows.slice(0, ILK_SATIR_SAYISI);

  function scrollSync(source: "header" | "body") {
    const header = headerRef.current;
    const body = bodyRef.current;
    if (!header || !body) return;
    if (source === "header") body.scrollLeft = header.scrollLeft;
    else header.scrollLeft = body.scrollLeft;
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <div className="sticky top-0 z-30 overflow-hidden rounded-t-2xl border-b border-zinc-200 bg-white">
        <div ref={headerRef} onScroll={() => scrollSync("header")} className="overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          <table className="min-w-[1400px] w-full border-collapse text-sm">
            <thead className="bg-zinc-100 text-zinc-800"><tr>{columns.map(([key, label, width]) => <th key={key} className={`${width} border-b border-zinc-200 px-4 py-4 text-left font-semibold`}>{label}</th>)}</tr></thead>
          </table>
        </div>
      </div>
      <div ref={bodyRef} onScroll={() => scrollSync("body")} className="overflow-x-auto rounded-b-2xl">
        <table className="min-w-[1400px] w-full border-collapse text-sm">
          <tbody>
            {gorunenRows.map((item, index) => (
              <tr key={`${item.sembol}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                <td className="min-w-[130px] border-b border-zinc-100 px-4 py-4 font-semibold text-zinc-900">{item.sembol}</td>
                <td className="min-w-[110px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{formatNumber(item.fiyat)}</td>
                <td className={`min-w-[130px] border-b border-zinc-100 px-4 py-4 font-medium ${(item.degisim ?? 0) > 0 ? "text-green-600" : (item.degisim ?? 0) < 0 ? "text-red-600" : "text-zinc-700"}`}>{item.degisim === null ? "-" : `%${formatNumber(item.degisim)}`}</td>
                <td className="min-w-[160px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.baslangicTarihi || "-"}</td>
                <td className="min-w-[140px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.bitisTarihi || "-"}</td>
                <td className="min-w-[130px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.brutTakas}</td>
                <td className="min-w-[140px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.acigaSatis}</td>
                <td className="min-w-[150px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.krediliIslem}</td>
                <td className="min-w-[130px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.piyasaEmri}</td>
                <td className="min-w-[180px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.emirIptalAzaltma}</td>
                <td className="min-w-[130px] border-b border-zinc-100 px-4 py-4 text-zinc-700">{item.veriYayini}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length > ILK_SATIR_SAYISI && (
        <div className="border-t border-zinc-200 p-4 text-center">
          <button type="button" onClick={() => setTumunuGoster((value) => !value)} className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
            {tumunuGoster ? "İlk 20 kaydı göster" : `Tüm ${rows.length} kaydı göster`}
          </button>
        </div>
      )}
    </div>
  );
}

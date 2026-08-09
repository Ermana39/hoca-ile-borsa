"use client";

import { useMemo, useRef, useState } from "react";
import yeniIsData from "@/app/borsa/yeni-is-anlasmalari/data/yeni-is-anlasmalari.json";

const ILK_SATIR_SAYISI = 20;

type Row = {
  sembol: string;
  tarih: string;
  tutar: number | null;
  paraBirimi: string;
  bilanco: string;
  yillikSatislar: number | null;
  oran: number | null;
};

type JsonRow = Record<string, string | number | null>;

function normalizeText(value: string) {
  return value.toLocaleLowerCase("tr-TR").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c").trim();
}

function kolonBul(headers: string[], adaylar: string[]) {
  return headers.find((header) => adaylar.some((aday) => normalizeText(header).includes(normalizeText(aday)))) || "";
}

function sayiCevir(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isNaN(value) ? null : value;
  const number = Number(String(value).trim().replace(/\s/g, "").replace(/\./g, "").replace(",", "."));
  return Number.isNaN(number) ? null : number;
}

function metinCevir(value: unknown) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function formatNumber(value: number | null, digits = 2) {
  if (value === null || Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: digits }).format(value);
}

function verileriOku(): Row[] {
  const rows = (yeniIsData.rows || []) as JsonRow[];
  if (!rows.length) return [];
  const headers = yeniIsData.columns?.length ? yeniIsData.columns : Object.keys(rows[0]);
  const get = (adaylar: string[], fallback: number) => kolonBul(headers, adaylar) || headers[fallback] || "";
  const keys = {
    sembol: get(["sembol", "kod", "hisse", "ticker", "symbol"], 0),
    tarih: get(["tarih", "is iliskisi tarihi", "iş ilişkisi tarihi"], 1),
    tutar: get(["yeni is iliskisi tutari", "yeni iş ilişkisi tutarı", "tutar", "is iliskisi tutari"], 2),
    para: get(["para birimi", "doviz", "döviz", "pb"], 3),
    bilanco: get(["bilanco donemi", "bilanço dönemi", "bilanco", "bilanço"], 4),
    satis: get(["yillik satislar", "yıllık satışlar", "satislar", "satışlar"], 5),
    oran: get(["yeni is iliskisi / yillik satislar", "yeni iş ilişkisi / yıllık satışlar", "oran"], 6),
  };

  return rows.map((row) => ({
    sembol: metinCevir(row[keys.sembol]),
    tarih: metinCevir(row[keys.tarih]),
    tutar: sayiCevir(row[keys.tutar]),
    paraBirimi: metinCevir(row[keys.para]),
    bilanco: metinCevir(row[keys.bilanco]),
    yillikSatislar: sayiCevir(row[keys.satis]),
    oran: sayiCevir(row[keys.oran]),
  })).filter((item) => item.sembol);
}

const columns = [
  ["Sembol", "min-w-[140px]", "text-left"],
  ["Tarih", "min-w-[150px]", "text-left"],
  ["Yeni İş İlişkisi Tutarı", "min-w-[220px]", "text-right"],
  ["Para Birimi", "min-w-[140px]", "text-left"],
  ["Bilanço Dönemi", "min-w-[170px]", "text-left"],
  ["Yıllık Satışlar", "min-w-[170px]", "text-right"],
  ["Yeni İş İlişkisi / Yıllık Satışlar", "min-w-[250px]", "text-right"],
] as const;

export default function YeniIsAnlasmalariTablosu() {
  const rows = useMemo(() => verileriOku(), []);
  const [tumunuGoster, setTumunuGoster] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const gorunenRows = tumunuGoster ? rows : rows.slice(0, ILK_SATIR_SAYISI);

  function scrollSync(source: "header" | "body") {
    if (!headerRef.current || !bodyRef.current) return;
    if (source === "header") bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
    else headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
  }

  return (
    <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <div className="rounded-xl border border-zinc-200 bg-white">
        <div className="sticky top-0 z-30 rounded-t-xl border-b border-zinc-200 bg-white">
          <div ref={headerRef} onScroll={() => scrollSync("header")} className="overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            <table className="min-w-full border-collapse text-sm"><thead className="bg-zinc-100 text-zinc-700"><tr>{columns.map(([label, width, align]) => <th key={label} className={`${width} ${align} px-4 py-3`}>{label}</th>)}</tr></thead></table>
          </div>
        </div>
        <div ref={bodyRef} onScroll={() => scrollSync("body")} className="overflow-x-auto rounded-b-xl">
          <table className="min-w-full border-collapse bg-white text-sm">
            <tbody>
              {gorunenRows.map((item, index) => (
                <tr key={`${item.sembol}-${item.tarih}-${index}`} className={index % 2 === 0 ? "border-t border-zinc-100 bg-white" : "border-t border-zinc-100 bg-sky-50/60"}>
                  <td className="min-w-[140px] px-4 py-3 font-semibold text-zinc-900">{item.sembol}</td>
                  <td className="min-w-[150px] px-4 py-3 text-zinc-700">{item.tarih || "-"}</td>
                  <td className="min-w-[220px] px-4 py-3 text-right font-semibold text-zinc-900">{formatNumber(item.tutar, 0)}</td>
                  <td className="min-w-[140px] px-4 py-3 text-zinc-700">{item.paraBirimi || "-"}</td>
                  <td className="min-w-[170px] px-4 py-3 text-zinc-700">{item.bilanco || "-"}</td>
                  <td className="min-w-[170px] px-4 py-3 text-right text-zinc-700">{formatNumber(item.yillikSatislar, 0)}</td>
                  <td className="min-w-[250px] px-4 py-3 text-right text-zinc-700">{formatNumber(item.oran, 4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows.length > ILK_SATIR_SAYISI && <div className="border-t border-zinc-200 p-4 text-center"><button type="button" onClick={() => setTumunuGoster((value) => !value)} className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">{tumunuGoster ? "İlk 20 kaydı göster" : `Tüm ${rows.length} kaydı göster`}</button></div>}
      </div>
    </section>
  );
}

"use client";

import { useMemo, useRef, useState } from "react";
import geriAlimData from "@/app/borsa/geri-alim-programlari/data/geri-alim.json";

const ILK_SATIR_SAYISI = 20;

type Row = {
  sembol: string;
  ykkTarihi: string;
  geriAlinanAdet: number | null;
  alinacakAdet: number | null;
  ayrilanFon: number | null;
  geriAlinanHacim: number | null;
  alinacakOran: number | null;
  alinanOran: number | null;
  sonFiyat: number | null;
  alisOrtFiyat: number | null;
  sonIslemTarihi: string;
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

function formatPercent(value: number | null) {
  return value === null ? "-" : `%${formatNumber(value, 2)}`;
}

function verileriOku(): Row[] {
  const rows = (geriAlimData.rows || []) as JsonRow[];
  if (!rows.length) return [];
  const headers = geriAlimData.columns?.length ? geriAlimData.columns : Object.keys(rows[0]);
  const get = (adaylar: string[], fallback: number) => kolonBul(headers, adaylar) || headers[fallback] || "";
  const keys = {
    sembol: get(["sembol", "kod", "hisse", "ticker", "symbol"], 0),
    ykk: get(["ykk tarihi", "karar tarihi", "tarih"], 1),
    geriAdet: get(["geri alinan adet", "geri alınan adet", "alinan adet", "geri alım adet"], 2),
    alinacakAdet: get(["alinacak adet", "alınacak adet", "program adet", "hedef adet"], 3),
    fon: get(["ayrilan fon", "ayrılan fon", "fon", "ayrilan tutar"], 4),
    hacim: get(["geri alinan hacim", "geri alınan hacim", "alinan hacim", "tutar"], 5),
    alinacakOran: get(["alinacak oran", "alınacak oran", "hedef oran", "program oran"], 6),
    alinanOran: get(["alinan oran", "alınan oran", "geri alinan oran", "geri alınan oran"], 7),
    sonFiyat: get(["son fiyat", "fiyat", "son kapanis", "son kapanış"], 8),
    ortFiyat: get(["alis ort fiyat", "alış ort fiyat", "ortalama fiyat", "alis ort. fiyat"], 9),
    sonTarih: get(["son islem tarihi", "son işlem tarihi", "islem tarihi", "işlem tarihi"], 10),
  };

  return rows.map((row) => ({
    sembol: metinCevir(row[keys.sembol]),
    ykkTarihi: metinCevir(row[keys.ykk]),
    geriAlinanAdet: sayiCevir(row[keys.geriAdet]),
    alinacakAdet: sayiCevir(row[keys.alinacakAdet]),
    ayrilanFon: sayiCevir(row[keys.fon]),
    geriAlinanHacim: sayiCevir(row[keys.hacim]),
    alinacakOran: sayiCevir(row[keys.alinacakOran]),
    alinanOran: sayiCevir(row[keys.alinanOran]),
    sonFiyat: sayiCevir(row[keys.sonFiyat]),
    alisOrtFiyat: sayiCevir(row[keys.ortFiyat]),
    sonIslemTarihi: metinCevir(row[keys.sonTarih]),
  })).filter((item) => item.sembol);
}

const columns = [
  ["Sembol", "min-w-[140px]", "text-left"], ["YKK Tarihi", "min-w-[160px]", "text-left"],
  ["Geri Alınan Adet", "min-w-[170px]", "text-right"], ["Alınacak Adet", "min-w-[160px]", "text-right"],
  ["Ayrılan Fon", "min-w-[170px]", "text-right"], ["Geri Alınan Hacim", "min-w-[180px]", "text-right"],
  ["Alınacak Oran", "min-w-[150px]", "text-right"], ["Alınan Oran", "min-w-[150px]", "text-right"],
  ["Son Fiyat", "min-w-[130px]", "text-right"], ["Alış Ort. Fiyat", "min-w-[150px]", "text-right"],
  ["Son İşlem Tarihi", "min-w-[170px]", "text-left"],
] as const;

export default function GeriAlimProgramlariTablosu() {
  const rows = useMemo(() => verileriOku(), []);
  const [tumunuGoster, setTumunuGoster] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const gorunenRows = tumunuGoster ? rows : rows.slice(0, ILK_SATIR_SAYISI);

  function sync(source: "header" | "body" | "bottom") {
    const header = headerRef.current;
    const body = bodyRef.current;
    const bottom = bottomRef.current;
    if (!header || !body || !bottom) return;
    const value = source === "header" ? header.scrollLeft : source === "body" ? body.scrollLeft : bottom.scrollLeft;
    if (source !== "header") header.scrollLeft = value;
    if (source !== "body") body.scrollLeft = value;
    if (source !== "bottom") bottom.scrollLeft = value;
  }

  return (
    <>
      <section className="rounded-2xl border border-zinc-200 bg-white">
        <div className="sticky top-0 z-30 rounded-t-2xl border-b border-zinc-200 bg-white">
          <div ref={headerRef} onScroll={() => sync("header")} className="overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            <table className="w-full min-w-[1500px] border-collapse text-sm"><thead className="bg-zinc-100 text-zinc-800"><tr>{columns.map(([label, width, align], index) => <th key={label} className={`${width} ${align} px-4 py-4 font-semibold whitespace-nowrap ${index === 0 ? "sticky left-0 z-40 bg-zinc-100" : ""}`}>{label}</th>)}</tr></thead></table>
          </div>
        </div>
        <div ref={bodyRef} onScroll={() => sync("body")} className="overflow-x-auto rounded-b-2xl">
          <table className="w-full min-w-[1500px] border-collapse text-sm"><tbody>{gorunenRows.map((item, index) => {
            const background = index % 2 === 0 ? "bg-white" : "bg-sky-50/60";
            return <tr key={`${item.sembol}-${item.ykkTarihi}-${index}`} className={background}>
              <td className={`min-w-[140px] px-4 py-3 font-semibold text-zinc-900 whitespace-nowrap sticky left-0 z-10 ${background}`}>{item.sembol}</td>
              <td className="min-w-[160px] px-4 py-3 text-zinc-700 whitespace-nowrap">{item.ykkTarihi || "-"}</td>
              <td className="min-w-[170px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatNumber(item.geriAlinanAdet, 0)}</td>
              <td className="min-w-[160px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatNumber(item.alinacakAdet, 0)}</td>
              <td className="min-w-[170px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatNumber(item.ayrilanFon, 0)}</td>
              <td className="min-w-[180px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatNumber(item.geriAlinanHacim, 0)}</td>
              <td className="min-w-[150px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatPercent(item.alinacakOran)}</td>
              <td className="min-w-[150px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatPercent(item.alinanOran)}</td>
              <td className="min-w-[130px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatNumber(item.sonFiyat, 2)}</td>
              <td className="min-w-[150px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">{formatNumber(item.alisOrtFiyat, 2)}</td>
              <td className="min-w-[170px] px-4 py-3 text-zinc-700 whitespace-nowrap">{item.sonIslemTarihi || "-"}</td>
            </tr>;
          })}</tbody></table>
        </div>
        {rows.length > ILK_SATIR_SAYISI && <div className="border-t border-zinc-200 p-4 text-center"><button type="button" onClick={() => setTumunuGoster((value) => !value)} className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">{tumunuGoster ? "İlk 20 kaydı göster" : `Tüm ${rows.length} kaydı göster`}</button></div>}
      </section>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur"><div className="mx-auto max-w-7xl px-4 md:px-6"><div ref={bottomRef} onScroll={() => sync("bottom")} className="overflow-x-auto"><div className="h-5 min-w-[1500px]" /></div></div></div>
    </>
  );
}

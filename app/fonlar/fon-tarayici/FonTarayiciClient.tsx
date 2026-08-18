"use client";

import { useSearchParams } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import {
  formatCompactTL,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import type { FundPeriodValues, FundReturns } from "@/lib/fon-platform";

export type ScannerFund = {
  kod: string;
  slug: string;
  ad: string;
  kategori: string;
  yonetici: string;
  yoneticiSlug: string;
  aktifMi: boolean;
  riskDegeri: number | null;
  fonToplamDeger: number | null;
  kisiSayisi: number | null;
  gunlukGetiri: number | null;
  paraAkisi: FundPeriodValues;
  getiriler: FundReturns;
};

type Params = Record<string, string>;
const pageSize = 50;

const sortLabels: Record<string, string> = {
  kod: "Fon Kodu",
  ad: "Fon Adı",
  kategori: "Şemsiye Türü",
  yonetici: "Yönetici",
  riskDegeri: "Risk",
  fonToplamDeger: "Fon Toplam Değeri",
  kisiSayisi: "Yatırımcı",
  gunlukAkis: "Günlük Akış",
  besGunAkis: "5 Gün Akış",
  birAyAkis: "1 Ay Akış",
  ucAyAkis: "3 Ay Akış",
  gunlukGetiri: "Günlük Getiri",
  birAyGetiri: "1A",
  ucAyGetiri: "3A",
  altiAyGetiri: "6A",
  yilbasiGetiri: "YBB",
  birYilGetiri: "1Y",
  ucYilGetiri: "3Y",
  besYilGetiri: "5Y",
};

const numericInputs = [
  ["riskMin", "Risk Min"], ["riskMax", "Risk Max"],
  ["buyuklukMin", "Büyüklük Min"], ["buyuklukMax", "Büyüklük Max"],
  ["yatirimciMin", "Yatırımcı Min"], ["yatirimciMax", "Yatırımcı Max"],
  ["gunlukAkisMin", "Günlük Akış Min"], ["besGunAkisMin", "5 Gün Akış Min"],
  ["birAyAkisMin", "1 Ay Akış Min"], ["ucAyAkisMin", "3 Ay Akış Min"],
  ["birAyGetiriMin", "1A Getiri Min"], ["ucAyGetiriMin", "3A Getiri Min"],
  ["altiAyGetiriMin", "6A Getiri Min"], ["yilbasiGetiriMin", "YBB Min"],
  ["birYilGetiriMin", "1Y Getiri Min"], ["ucYilGetiriMin", "3Y Getiri Min"],
  ["besYilGetiriMin", "5Y Getiri Min"],
] as const;

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c").trim();
}

function numberParam(params: Params, key: string) {
  const raw = (params[key] ?? "").replace(",", ".").trim();
  if (!raw) return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function applyRange(
  funds: ScannerFund[],
  getter: (fund: ScannerFund) => number | null,
  min: number | null,
  max: number | null
) {
  return funds.filter((fund) => {
    const value = getter(fund);
    if (min !== null && (value === null || value < min)) return false;
    if (max !== null && (value === null || value > max)) return false;
    return true;
  });
}

function filterFunds(funds: ScannerFund[], params: Params) {
  const query = normalize(params.q ?? "");
  let result = funds.filter((fund) => fund.aktifMi);
  if (query) result = result.filter((fund) => normalize(`${fund.kod} ${fund.ad}`).includes(query));
  if (params.kategori) result = result.filter((fund) => fund.kategori === params.kategori);
  if (params.yonetici) result = result.filter((fund) => fund.yonetici === params.yonetici);

  const filters: [string, string, (fund: ScannerFund) => number | null][] = [
    ["riskMin", "riskMax", (fund) => fund.riskDegeri],
    ["buyuklukMin", "buyuklukMax", (fund) => fund.fonToplamDeger],
    ["yatirimciMin", "yatirimciMax", (fund) => fund.kisiSayisi],
    ["gunlukAkisMin", "gunlukAkisMax", (fund) => fund.paraAkisi.gunluk],
    ["besGunAkisMin", "besGunAkisMax", (fund) => fund.paraAkisi.besGun],
    ["birAyAkisMin", "birAyAkisMax", (fund) => fund.paraAkisi.birAy],
    ["ucAyAkisMin", "ucAyAkisMax", (fund) => fund.paraAkisi.ucAy],
    ["birAyGetiriMin", "birAyGetiriMax", (fund) => fund.getiriler.birAy],
    ["ucAyGetiriMin", "ucAyGetiriMax", (fund) => fund.getiriler.ucAy],
    ["altiAyGetiriMin", "altiAyGetiriMax", (fund) => fund.getiriler.altiAy],
    ["yilbasiGetiriMin", "yilbasiGetiriMax", (fund) => fund.getiriler.yilbasi],
    ["birYilGetiriMin", "birYilGetiriMax", (fund) => fund.getiriler.birYil],
    ["ucYilGetiriMin", "ucYilGetiriMax", (fund) => fund.getiriler.ucYil],
    ["besYilGetiriMin", "besYilGetiriMax", (fund) => fund.getiriler.besYil],
  ];
  for (const [minKey, maxKey, getter] of filters) {
    result = applyRange(result, getter, numberParam(params, minKey), numberParam(params, maxKey));
  }
  return result;
}

function sortValue(fund: ScannerFund, sort: string): string | number | null {
  const values: Record<string, string | number | null> = {
    kod: fund.kod, ad: fund.ad, kategori: fund.kategori, yonetici: fund.yonetici,
    riskDegeri: fund.riskDegeri, fonToplamDeger: fund.fonToplamDeger,
    kisiSayisi: fund.kisiSayisi, gunlukAkis: fund.paraAkisi.gunluk,
    besGunAkis: fund.paraAkisi.besGun, birAyAkis: fund.paraAkisi.birAy,
    ucAyAkis: fund.paraAkisi.ucAy, gunlukGetiri: fund.gunlukGetiri,
    birAyGetiri: fund.getiriler.birAy, ucAyGetiri: fund.getiriler.ucAy,
    altiAyGetiri: fund.getiriler.altiAy, yilbasiGetiri: fund.getiriler.yilbasi,
    birYilGetiri: fund.getiriler.birYil, ucYilGetiri: fund.getiriler.ucYil,
    besYilGetiri: fund.getiriler.besYil,
  };
  return values[sort] ?? fund.fonToplamDeger;
}

function sortFunds(funds: ScannerFund[], sort: string, dir: string) {
  return [...funds].sort((a, b) => {
    const av = sortValue(a, sort);
    const bv = sortValue(b, sort);
    if (typeof av === "string" && typeof bv === "string") {
      return dir === "asc" ? av.localeCompare(bv, "tr") : bv.localeCompare(av, "tr");
    }
    const an = typeof av === "number" && Number.isFinite(av) ? av : null;
    const bn = typeof bv === "number" && Number.isFinite(bv) ? bv : null;
    if (an === null && bn === null) return 0;
    if (an === null) return 1;
    if (bn === null) return -1;
    return dir === "asc" ? an - bn : bn - an;
  });
}

function href(params: Params, updates: Record<string, string | number>) {
  const next = new URLSearchParams(params);
  for (const [key, value] of Object.entries(updates)) next.set(key, String(value));
  const query = next.toString();
  return query ? `/fonlar/fon-tarayici?${query}` : "/fonlar/fon-tarayici";
}

export default function FonTarayiciClient({
  funds,
  categories,
  managers,
}: {
  funds: ScannerFund[];
  categories: string[];
  managers: string[];
}) {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const sort = params.sort || "fonToplamDeger";
  const dir = params.dir === "asc" ? "asc" : "desc";
  const requestedPage = Math.max(1, Number(params.page || 1) || 1);
  const filtered = sortFunds(filterFunds(funds, params), sort, dir);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(requestedPage, totalPages);
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-400";

  const headers = [
    ["kod", "Fon Kodu"], ["ad", "Fon Adı"], ["kategori", "Şemsiye Türü"],
    ["yonetici", "Yönetici"], ["riskDegeri", "Risk"], ["fonToplamDeger", "Fon Toplam Değeri"],
    ["kisiSayisi", "Yatırımcı"], ["gunlukAkis", "Günlük Akış"], ["besGunAkis", "5 Gün Akış"],
    ["birAyAkis", "1 Ay Akış"], ["ucAyAkis", "3 Ay Akış"], ["gunlukGetiri", "Günlük Getiri"],
    ["birAyGetiri", "1A"], ["ucAyGetiri", "3A"], ["altiAyGetiri", "6A"],
    ["yilbasiGetiri", "YBB"], ["birYilGetiri", "1Y"], ["ucYilGetiri", "3Y"], ["besYilGetiri", "5Y"],
  ] as const;

  return (
    <>
      <form action="/fonlar/fon-tarayici" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <label className="text-sm font-semibold text-slate-700">Fon Kodu / Fon Adı<input name="q" defaultValue={params.q ?? ""} className={`${inputClass} mt-1`} /></label>
          <label className="text-sm font-semibold text-slate-700">Şemsiye Türü<select name="kategori" defaultValue={params.kategori ?? ""} className={`${inputClass} mt-1`}><option value="">Tümü</option>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
          <label className="text-sm font-semibold text-slate-700">Yönetici / Kurucu<select name="yonetici" defaultValue={params.yonetici ?? ""} className={`${inputClass} mt-1`}><option value="">Tümü</option>{managers.map((manager) => <option key={manager}>{manager}</option>)}</select></label>
          <label className="text-sm font-semibold text-slate-700">Sıralama<select name="sort" defaultValue={sort} className={`${inputClass} mt-1`}>{Object.entries(sortLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
          {numericInputs.map(([name, label]) => <label key={name} className="text-xs font-semibold text-slate-600">{label}<input name={name} defaultValue={params[name] ?? ""} className={`${inputClass} mt-1`} /></label>)}
          <input type="hidden" name="dir" value={dir} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="submit" className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">Filtrele</button>
          <Link href="/fonlar/fon-tarayici" className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">Temizle</Link>
        </div>
      </form>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
        <p>{formatNumber(filtered.length)} fon listeleniyor · Sayfa {formatNumber(page)} / {formatNumber(totalPages)}</p>
        <div className="flex gap-2">
          <Link href={href(params, { page: Math.max(1, page - 1) })} className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold hover:bg-slate-50">Önceki</Link>
          <Link href={href(params, { page: Math.min(totalPages, page + 1) })} className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold hover:bg-slate-50">Sonraki</Link>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[1680px] text-sm">
          <thead className="bg-slate-100 text-left text-slate-700"><tr>{headers.map(([key, label], index) => {
            const nextDir = sort === key && dir === "desc" ? "asc" : "desc";
            const arrow = sort === key ? (dir === "asc" ? "↑" : "↓") : "↕";
            return <th key={key} className={`px-4 py-3 font-semibold ${index >= 4 ? "text-right" : ""}`}><Link href={href(params, { sort: key, dir: nextDir, page: 1 })}>{label} {arrow}</Link></th>;
          })}</tr></thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((fund) => {
              const cells: [string, number | null][] = [
                [formatNumber(fund.riskDegeri), null], [formatCompactTL(fund.fonToplamDeger), null],
                [formatNumber(fund.kisiSayisi), null], [formatSignedTL(fund.paraAkisi.gunluk), fund.paraAkisi.gunluk],
                [formatSignedTL(fund.paraAkisi.besGun), fund.paraAkisi.besGun], [formatSignedTL(fund.paraAkisi.birAy), fund.paraAkisi.birAy],
                [formatSignedTL(fund.paraAkisi.ucAy), fund.paraAkisi.ucAy], [formatSignedPercent(fund.gunlukGetiri), fund.gunlukGetiri],
                [formatSignedPercent(fund.getiriler.birAy), fund.getiriler.birAy], [formatSignedPercent(fund.getiriler.ucAy), fund.getiriler.ucAy],
                [formatSignedPercent(fund.getiriler.altiAy), fund.getiriler.altiAy], [formatSignedPercent(fund.getiriler.yilbasi), fund.getiriler.yilbasi],
                [formatSignedPercent(fund.getiriler.birYil), fund.getiriler.birYil], [formatSignedPercent(fund.getiriler.ucYil), fund.getiriler.ucYil],
                [formatSignedPercent(fund.getiriler.besYil), fund.getiriler.besYil],
              ];
              return <tr key={fund.kod} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-bold text-slate-950"><Link href={`/fonlar/${fund.slug}`} className="hover:text-blue-700">{fund.kod}</Link></td>
                <td className="px-4 py-3 text-slate-800">{fund.ad}</td><td className="px-4 py-3 text-slate-700">{fund.kategori}</td>
                <td className="px-4 py-3 text-slate-700"><Link href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`} className="hover:text-blue-700">{fund.yonetici}</Link></td>
                {cells.map(([text, value], index) => <td key={index} className={`px-4 py-3 text-right ${value === null ? "text-slate-700" : `font-semibold ${valueColorClass(value)}`}`}>{text}</td>)}
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

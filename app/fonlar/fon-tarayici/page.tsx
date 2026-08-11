import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb } from "../_components/FonUi";
import {
  formatCompactTL,
  formatDate,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import {
  getCurrentFundsData,
  getFundCategories,
  getFundManagersForFilter,
  type Fund,
} from "@/lib/fon-platform";

type SearchParams = Record<string, string | string[] | undefined>;

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

function firstParam(params: SearchParams, key: string) {
  const value = params[key];
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function parseNumberParam(params: SearchParams, key: string) {
  const value = firstParam(params, key).replace(",", ".").trim();
  if (!value) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeSearch(value: string) {
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

function getSortValue(fund: Fund, sort: string) {
  const map: Record<string, string | number | null> = {
    kod: fund.kod,
    ad: fund.ad,
    kategori: fund.kategori,
    yonetici: fund.yonetici,
    riskDegeri: fund.riskDegeri,
    fonToplamDeger: fund.fonToplamDeger,
    kisiSayisi: fund.kisiSayisi,
    gunlukAkis: fund.paraAkisi.gunluk,
    besGunAkis: fund.paraAkisi.besGun,
    birAyAkis: fund.paraAkisi.birAy,
    ucAyAkis: fund.paraAkisi.ucAy,
    gunlukGetiri: fund.gunlukGetiri,
    birAyGetiri: fund.getiriler.birAy,
    ucAyGetiri: fund.getiriler.ucAy,
    altiAyGetiri: fund.getiriler.altiAy,
    yilbasiGetiri: fund.getiriler.yilbasi,
    birYilGetiri: fund.getiriler.birYil,
    ucYilGetiri: fund.getiriler.ucYil,
    besYilGetiri: fund.getiriler.besYil,
  };

  return Object.hasOwn(map, sort) ? map[sort] : fund.fonToplamDeger;
}

function sortFunds(funds: Fund[], sort: string, dir: string) {
  const direction = dir === "asc" ? "asc" : "desc";

  return [...funds].sort((a, b) => {
    const aValue = getSortValue(a, sort);
    const bValue = getSortValue(b, sort);

    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue, "tr")
        : bValue.localeCompare(aValue, "tr");
    }

    const aValid = typeof aValue === "number" && Number.isFinite(aValue);
    const bValid = typeof bValue === "number" && Number.isFinite(bValue);

    if (!aValid && !bValid) return 0;
    if (!aValid) return 1;
    if (!bValid) return -1;

    return direction === "asc" ? aValue - bValue : bValue - aValue;
  });
}

function applyMinMax(
  funds: Fund[],
  getValue: (fund: Fund) => number | null,
  min: number | null,
  max: number | null
) {
  return funds.filter((fund) => {
    const value = getValue(fund);
    if (min !== null && (typeof value !== "number" || value < min)) return false;
    if (max !== null && (typeof value !== "number" || value > max)) return false;
    return true;
  });
}

function filterFunds(funds: Fund[], params: SearchParams) {
  const q = normalizeSearch(firstParam(params, "q"));
  const kategori = firstParam(params, "kategori");
  const yonetici = firstParam(params, "yonetici");

  let filtered = funds.filter((fund) => fund.aktifMi);

  if (q) {
    filtered = filtered.filter((fund) =>
      normalizeSearch(`${fund.kod} ${fund.ad}`).includes(q)
    );
  }

  if (kategori) filtered = filtered.filter((fund) => fund.kategori === kategori);
  if (yonetici) filtered = filtered.filter((fund) => fund.yonetici === yonetici);

  filtered = applyMinMax(
    filtered,
    (fund) => fund.riskDegeri,
    parseNumberParam(params, "riskMin"),
    parseNumberParam(params, "riskMax")
  );
  filtered = applyMinMax(
    filtered,
    (fund) => fund.fonToplamDeger,
    parseNumberParam(params, "buyuklukMin"),
    parseNumberParam(params, "buyuklukMax")
  );
  filtered = applyMinMax(
    filtered,
    (fund) => fund.kisiSayisi,
    parseNumberParam(params, "yatirimciMin"),
    parseNumberParam(params, "yatirimciMax")
  );

  const numericFilters: [string, string, (fund: Fund) => number | null][] = [
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

  for (const [minKey, maxKey, getter] of numericFilters) {
    filtered = applyMinMax(
      filtered,
      getter,
      parseNumberParam(params, minKey),
      parseNumberParam(params, maxKey)
    );
  }

  return filtered;
}

function queryHref(params: SearchParams, updates: Record<string, string | number | null>) {
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    const first = Array.isArray(value) ? value[0] : value;
    if (first) search.set(key, first);
  }

  for (const [key, value] of Object.entries(updates)) {
    if (value === null || value === "") search.delete(key);
    else search.set(key, String(value));
  }

  const text = search.toString();
  return text ? `/fonlar/fon-tarayici?${text}` : "/fonlar/fon-tarayici";
}

function SortLink({
  params,
  sort,
  label,
}: {
  params: SearchParams;
  sort: string;
  label: string;
}) {
  const currentSort = firstParam(params, "sort") || "fonToplamDeger";
  const currentDir = firstParam(params, "dir") || "desc";
  const nextDir = currentSort === sort && currentDir === "desc" ? "asc" : "desc";
  const arrow = currentSort === sort ? (currentDir === "asc" ? "↑" : "↓") : "↕";

  return (
    <Link href={queryHref(params, { sort, dir: nextDir, page: 1 })} className="hover:text-blue-700">
      {label} {arrow}
    </Link>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasQuery = Object.values(params).some((value) =>
    Array.isArray(value) ? value.some(Boolean) : Boolean(value)
  );

  return {
    title: "Fon Tarayıcı: Getiri, Risk ve Para Akışına Göre Fon Bul",
    description:
      "Yatırım fonlarını fon kodu, tür, yönetici, risk seviyesi, büyüklük, yatırımcı sayısı, para akışı ve getiriye göre tarayın.",
    alternates: {
      canonical: "https://www.hocaileborsa.com/fonlar/fon-tarayici",
    },
    robots: hasQuery ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function FonTarayiciPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const data = getCurrentFundsData();
  const categories = getFundCategories();
  const managers = getFundManagersForFilter();
  const sort = firstParam(params, "sort") || "fonToplamDeger";
  const dir = firstParam(params, "dir") || "desc";
  const page = Math.max(1, Number(firstParam(params, "page") || 1) || 1);
  const filtered = sortFunds(filterFunds(data.fonlar, params), sort, dir);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageRows = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-400";

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Fon Tarayıcı" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Tarayıcı
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Yatırım fonlarını risk seviyesi, fon büyüklüğü, yatırımcı sayısı,
            para akışı ve farklı dönem getirilerine göre karşılaştırın. Hisse
            senedi, borçlanma araçları, para piyasası ve diğer fon türleri
            arasında aradığınız ölçütlere uyan seçenekleri inceleyin.
          </p>
        </section>

        <form action="/fonlar/fon-tarayici" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            <label className="text-sm font-semibold text-slate-700">
              Fon Kodu / Fon Adı
              <input name="q" defaultValue={firstParam(params, "q")} className={`${inputClass} mt-1`} />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Şemsiye Türü
              <select name="kategori" defaultValue={firstParam(params, "kategori")} className={`${inputClass} mt-1`}>
                <option value="">Tümü</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Yönetici / Kurucu
              <select name="yonetici" defaultValue={firstParam(params, "yonetici")} className={`${inputClass} mt-1`}>
                <option value="">Tümü</option>
                {managers.map((manager) => (
                  <option key={manager} value={manager}>
                    {manager}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Sıralama
              <select name="sort" defaultValue={sort} className={`${inputClass} mt-1`}>
                {Object.entries(sortLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
            {[
              ["riskMin", "Risk Min"],
              ["riskMax", "Risk Max"],
              ["buyuklukMin", "Büyüklük Min"],
              ["buyuklukMax", "Büyüklük Max"],
              ["yatirimciMin", "Yatırımcı Min"],
              ["yatirimciMax", "Yatırımcı Max"],
              ["gunlukAkisMin", "Günlük Akış Min"],
              ["besGunAkisMin", "5 Gün Akış Min"],
              ["birAyAkisMin", "1 Ay Akış Min"],
              ["ucAyAkisMin", "3 Ay Akış Min"],
              ["birAyGetiriMin", "1A Getiri Min"],
              ["ucAyGetiriMin", "3A Getiri Min"],
              ["altiAyGetiriMin", "6A Getiri Min"],
              ["yilbasiGetiriMin", "YBB Min"],
              ["birYilGetiriMin", "1Y Getiri Min"],
              ["ucYilGetiriMin", "3Y Getiri Min"],
              ["besYilGetiriMin", "5Y Getiri Min"],
            ].map(([name, label]) => (
              <label key={name} className="text-xs font-semibold text-slate-600">
                {label}
                <input name={name} defaultValue={firstParam(params, name)} className={`${inputClass} mt-1`} />
              </label>
            ))}
            <input type="hidden" name="dir" value={dir} />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button type="submit" className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
              Filtrele
            </button>
            <Link href="/fonlar/fon-tarayici" className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">
              Temizle
            </Link>
          </div>
        </form>

        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <p>
            {formatNumber(filtered.length)} fon listeleniyor · Sayfa{" "}
            {formatNumber(safePage)} / {formatNumber(totalPages)}
          </p>
          <div className="flex gap-2">
            <Link
              href={queryHref(params, { page: Math.max(1, safePage - 1) })}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold hover:bg-slate-50"
            >
              Önceki
            </Link>
            <Link
              href={queryHref(params, { page: Math.min(totalPages, safePage + 1) })}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold hover:bg-slate-50"
            >
              Sonraki
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[1680px] text-sm">
            <thead className="bg-slate-100 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">
                  <SortLink params={params} sort="kod" label="Fon Kodu" />
                </th>
                <th className="px-4 py-3 font-semibold">
                  <SortLink params={params} sort="ad" label="Fon Adı" />
                </th>
                <th className="px-4 py-3 font-semibold">
                  <SortLink params={params} sort="kategori" label="Şemsiye Türü" />
                </th>
                <th className="px-4 py-3 font-semibold">
                  <SortLink params={params} sort="yonetici" label="Yönetici" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="riskDegeri" label="Risk" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="fonToplamDeger" label="Fon Toplam Değeri" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="kisiSayisi" label="Yatırımcı" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="gunlukAkis" label="Günlük Akış" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="besGunAkis" label="5 Gün Akış" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="birAyAkis" label="1 Ay Akış" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="ucAyAkis" label="3 Ay Akış" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="gunlukGetiri" label="Günlük Getiri" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="birAyGetiri" label="1A" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="ucAyGetiri" label="3A" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="altiAyGetiri" label="6A" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="yilbasiGetiri" label="YBB" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="birYilGetiri" label="1Y" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="ucYilGetiri" label="3Y" />
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  <SortLink params={params} sort="besYilGetiri" label="5Y" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pageRows.map((fund) => (
                <tr key={fund.kod} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-bold text-slate-950">
                    <Link href={`/fonlar/${fund.slug}`} className="hover:text-blue-700">
                      {fund.kod}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-800">{fund.ad}</td>
                  <td className="px-4 py-3 text-slate-700">{fund.kategori}</td>
                  <td className="px-4 py-3 text-slate-700">
                    <Link href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`} className="hover:text-blue-700">
                      {fund.yonetici}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    {formatNumber(fund.riskDegeri)}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-slate-900">
                    {formatCompactTL(fund.fonToplamDeger)}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    {formatNumber(fund.kisiSayisi)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.paraAkisi.gunluk)}`}>
                    {formatSignedTL(fund.paraAkisi.gunluk)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.paraAkisi.besGun)}`}>
                    {formatSignedTL(fund.paraAkisi.besGun)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.paraAkisi.birAy)}`}>
                    {formatSignedTL(fund.paraAkisi.birAy)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.paraAkisi.ucAy)}`}>
                    {formatSignedTL(fund.paraAkisi.ucAy)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.gunlukGetiri)}`}>
                    {formatSignedPercent(fund.gunlukGetiri)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.birAy)}`}>
                    {formatSignedPercent(fund.getiriler.birAy)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.ucAy)}`}>
                    {formatSignedPercent(fund.getiriler.ucAy)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.altiAy)}`}>
                    {formatSignedPercent(fund.getiriler.altiAy)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.yilbasi)}`}>
                    {formatSignedPercent(fund.getiriler.yilbasi)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.birYil)}`}>
                    {formatSignedPercent(fund.getiriler.birYil)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.ucYil)}`}>
                    {formatSignedPercent(fund.getiriler.ucYil)}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.getiriler.besYil)}`}>
                    {formatSignedPercent(fund.getiriler.besYil)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Fon Tarama Kriterleri Nasıl Yorumlanır?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Fon taraması yaparken ilk adım yatırım yapılacak süreyi ve kabul
                edilebilir risk seviyesini belirlemektir. Kısa vadeli getiri
                sıralamaları güncel piyasa hareketlerinden daha fazla etkilenirken,
                bir yıl ve üzerindeki dönemler fonun stratejisi hakkında daha geniş
                bir görünüm sunabilir.
              </p>
              <p>
                Risk değeri yükseldikçe fon fiyatındaki dalgalanma ihtimali de
                genellikle artar. Bu nedenle yüksek getiri gösteren bir fonu,
                benzer kategorideki fonların risk değerleri ve daha uzun dönem
                performansıyla birlikte değerlendirmek gerekir.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Fon büyüklüğü ve yatırımcı sayısı, fonun piyasadaki ölçeğini ve
                gördüğü ilgiyi anlamaya yardımcı olur. Günlük veya aylık para
                akışı ise bu ilginin hangi yönde değiştiğini gösterir. Tek günlük
                güçlü hareketler yerine farklı dönemlerin aynı yönde ilerleyip
                ilerlemediğine bakmak daha dengeli bir değerlendirme sağlar.
              </p>
              <p>
                Seçtiğiniz fonları ayrıntılı incelemek için fon koduna gidebilir;
                adayları yan yana görmek için <Link href="/fonlar/fon-karsilastirma" className="font-semibold text-blue-700 hover:underline">fon karşılaştırma sayfasını</Link>,
                yönetim şirketi bazında değerlendirmek için <Link href="/fonlar/yoneticiler" className="font-semibold text-blue-700 hover:underline">fon yöneticileri analizini</Link> kullanabilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-slate-950">Risk değeri</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fonun fiyat dalgalanması hakkında karşılaştırmalı bir ölçü sunar;
                yatırım süresi ve fon türüyle birlikte okunmalıdır.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Dönemsel getiri</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Bir ay, altı ay ve bir yıl gibi farklı dönemler fonun kısa ve uzun
                vadeli performansını ayrı ayrı değerlendirmeyi sağlar.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Para akışı</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fona giren ve fondan çıkan net tutarın yönünü göstererek yatırımcı
                ilgisindeki değişimi izlemeye yardımcı olur.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

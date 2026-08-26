import Link from "@/components/NoPrefetchLink";
import {
  formatCompactTL,
  formatDate,
  formatDecimal,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  formatTL,
  valueBgClass,
  valueColorClass,
} from "@/lib/fon-format";
import type {
  Fund,
  FundListItem,
  FundPeriodValues,
  ManagerSummary,
  PeriodKey,
  ReturnKey,
} from "@/lib/fon-platform";
import { getPeriodLabel, getReturnLabel } from "@/lib/fon-labels";

export type FlowFund = Pick<
  Fund,
  | "kod"
  | "slug"
  | "ad"
  | "yonetici"
  | "yoneticiSlug"
  | "paraAkisi"
  | "fonToplamDeger"
  | "gunlukGetiri"
  | "yatirimciDegisimi"
>;

export type ManagerTableItem = Pick<
  ManagerSummary,
  | "slug"
  | "yonetici"
  | "yonetilenFonSayisi"
  | "toplamFonBuyuklugu"
  | "toplamYatirimciSayisi"
> & {
  paraAkisi: FundPeriodValues;
  ortalamaGetiri: ManagerSummary["ortalamaGetiri"];
  enBuyukFon: FundListItem | null;
};

export function FonBreadcrumb({
  current,
  items = [],
}: {
  current: string;
  items?: { href: string; label: string }[];
}) {
  return (
    <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
      <Link href="/" className="transition hover:text-blue-600">
        Ana Sayfa
      </Link>
      <span className="text-slate-300">/</span>
      <Link href="/fonlar" className="transition hover:text-blue-600">
        Fonlar
      </Link>
      {items.map((item) => (
        <span key={item.href} className="contents">
          <span className="text-slate-300">/</span>
          <Link href={item.href} className="transition hover:text-blue-600">
            {item.label}
          </Link>
        </span>
      ))}
      <span className="text-slate-300">/</span>
      <span className="font-medium text-slate-700">{current}</span>
    </nav>
  );
}

export function MetricCard({
  label,
  value,
  href,
  tone = "slate",
  sub,
}: {
  label: string;
  value: string;
  href?: string;
  tone?: "slate" | "green" | "red" | "blue" | "amber";
  sub?: string;
}) {
  const toneClass = {
    slate: "border-slate-200 bg-white",
    green: "border-emerald-200 bg-emerald-50/70",
    red: "border-red-200 bg-red-50/70",
    blue: "border-blue-200 bg-blue-50/70",
    amber: "border-amber-200 bg-amber-50/70",
  }[tone];

  const content = (
    <div className={`h-full rounded-2xl border p-4 shadow-sm ${toneClass}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xl font-bold text-slate-950 md:text-2xl">
        {value}
      </p>
      {sub ? <p className="mt-2 text-sm leading-6 text-slate-600">{sub}</p> : null}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block h-full transition hover:-translate-y-0.5">
      {content}
    </Link>
  );
}

export function ModuleLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-950">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
        <span className="mt-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition group-hover:bg-blue-100">
          Aç
        </span>
      </div>
    </Link>
  );
}

function fundValueByKind(item: FundListItem, kind: "money" | "percent" | "number") {
  if (kind === "percent") return formatSignedPercent(item.value);
  if (kind === "number") return formatNumber(item.value);
  return formatSignedTL(item.value);
}

export function Leaderboard({
  title,
  items,
  href,
  kind = "money",
}: {
  title: string;
  items: FundListItem[];
  href?: string;
  kind?: "money" | "percent" | "number";
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <h2 className="text-sm font-bold text-slate-950">{title}</h2>
        {href ? (
          <Link href={href} className="text-xs font-semibold text-blue-700 hover:text-blue-900">
            Tümünü Gör
          </Link>
        ) : null}
      </div>
      <div className="divide-y divide-slate-100">
        {items.slice(0, 5).map((item) => (
          <Link
            href={`/fonlar/${item.slug}`}
            key={`${title}-${item.kod}`}
            className="grid grid-cols-[48px_1fr_auto] gap-3 px-4 py-3 transition hover:bg-slate-50"
          >
            <span className="rounded-lg bg-slate-100 px-2 py-1 text-center text-xs font-bold text-slate-700">
              {item.kod}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-slate-900">
                {item.ad}
              </span>
              <span className="block truncate text-xs text-slate-500">
                {item.yonetici}
              </span>
            </span>
            <span className={`text-right text-sm font-bold ${valueColorClass(item.value)}`}>
              {fundValueByKind(item, kind)}
            </span>
          </Link>
        ))}
        {items.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-slate-500">
            Veri yok.
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function FlowTable({
  funds,
  period,
  direction,
}: {
  funds: FlowFund[];
  period: PeriodKey;
  direction: "in" | "out";
}) {
  const sorted = [...funds]
    .filter((fund) => {
      const value = fund.paraAkisi[period];
      return typeof value === "number" && (direction === "in" ? value > 0 : value < 0);
    })
    .sort((a, b) =>
      direction === "in"
        ? (b.paraAkisi[period] ?? 0) - (a.paraAkisi[period] ?? 0)
        : (a.paraAkisi[period] ?? 0) - (b.paraAkisi[period] ?? 0)
    )
    .slice(0, 50);

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[980px] text-sm">
        <thead className="bg-slate-100 text-left text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Fon Kodu</th>
            <th className="px-4 py-3 font-semibold">Fon Adı</th>
            <th className="px-4 py-3 font-semibold">Yönetici</th>
            <th className="px-4 py-3 text-right font-semibold">Net Para Akışı</th>
            <th className="px-4 py-3 text-right font-semibold">Fon Toplam Değeri</th>
            <th className="px-4 py-3 text-right font-semibold">Günlük Getiri</th>
            <th className="px-4 py-3 text-right font-semibold">Yatırımcı Değişimi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {sorted.map((fund) => (
            <tr key={`${direction}-${period}-${fund.kod}`} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-bold text-slate-950">
                <Link href={`/fonlar/${fund.slug}`} className="hover:text-blue-700">
                  {fund.kod}
                </Link>
              </td>
              <td className="px-4 py-3 text-slate-800">{fund.ad}</td>
              <td className="px-4 py-3 text-slate-700">
                <Link href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`} className="hover:text-blue-700">
                  {fund.yonetici}
                </Link>
              </td>
              <td className={`px-4 py-3 text-right font-bold ${valueColorClass(fund.paraAkisi[period])}`}>
                {formatSignedTL(fund.paraAkisi[period])}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatCompactTL(fund.fonToplamDeger)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.gunlukGetiri)}`}>
                {formatSignedPercent(fund.gunlukGetiri)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.yatirimciDegisimi.gunluk)}`}>
                {formatNumber(fund.yatirimciDegisimi.gunluk)}
              </td>
            </tr>
          ))}
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                  Seçilen dönem için henüz yeterli tarihsel veri yok.
                </td>
              </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export function PeriodLinks({
  active,
  basePath,
}: {
  active: PeriodKey;
  basePath: string;
}) {
  const periods: PeriodKey[] = ["gunluk", "besGun", "birAy", "ucAy"];

  return (
    <div className="flex flex-wrap gap-2">
      {periods.map((period) => (
        <Link
          key={period}
          href={`${basePath}?period=${period}`}
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${
            active === period
              ? "border-blue-700 bg-blue-700 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          {getPeriodLabel(period)}
        </Link>
      ))}
    </div>
  );
}

export function FundReturnGrid({ fund }: { fund: Fund }) {
  const keys: ReturnKey[] = ["birAy", "ucAy", "altiAy", "yilbasi", "birYil", "ucYil", "besYil"];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
      {keys.map((key) => (
        <div key={key} className={`rounded-xl px-3 py-3 ${valueBgClass(fund.getiriler[key])}`}>
          <p className="text-xs font-semibold">{getReturnLabel(key)}</p>
          <p className="mt-1 text-base font-bold">{formatSignedPercent(fund.getiriler[key])}</p>
        </div>
      ))}
    </div>
  );
}

export function FundPeriodGrid({
  title,
  values,
  format = "money",
}: {
  title: string;
  values: Record<PeriodKey, number | null>;
  format?: "money" | "number";
}) {
  const periods: PeriodKey[] = ["gunluk", "besGun", "birAy", "ucAy"];

  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-slate-950">{title}</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {periods.map((period) => (
          <div key={period} className={`rounded-xl px-3 py-3 ${valueBgClass(values[period])}`}>
            <p className="text-xs font-semibold">{getPeriodLabel(period)}</p>
            <p className="mt-1 text-base font-bold">
              {format === "money" ? formatSignedTL(values[period]) : formatNumber(values[period])}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ManagerTable({ managers }: { managers: ManagerTableItem[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[1120px] text-sm">
        <thead className="bg-slate-100 text-left text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Yönetici</th>
            <th className="px-4 py-3 text-right font-semibold">Fon Sayısı</th>
            <th className="px-4 py-3 text-right font-semibold">Toplam Büyüklük</th>
            <th className="px-4 py-3 text-right font-semibold">Yatırımcı</th>
            <th className="px-4 py-3 text-right font-semibold">Günlük Akış</th>
            <th className="px-4 py-3 text-right font-semibold">1A Getiri Ort.</th>
            <th className="px-4 py-3 text-right font-semibold">En Büyük Fon</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {managers.map((manager) => (
            <tr key={manager.slug} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-semibold text-slate-950">
                <Link href={`/fonlar/yoneticiler/${manager.slug}`} className="hover:text-blue-700">
                  {manager.yonetici}
                </Link>
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatNumber(manager.yonetilenFonSayisi)}
              </td>
              <td className="px-4 py-3 text-right font-semibold text-slate-900">
                {formatCompactTL(manager.toplamFonBuyuklugu)}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatNumber(manager.toplamYatirimciSayisi)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(manager.paraAkisi.gunluk)}`}>
                {formatSignedTL(manager.paraAkisi.gunluk)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(manager.ortalamaGetiri.birAy)}`}>
                {formatSignedPercent(manager.ortalamaGetiri.birAy)}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {manager.enBuyukFon ? (
                  <Link href={`/fonlar/${manager.enBuyukFon.slug}`} className="font-semibold hover:text-blue-700">
                    {manager.enBuyukFon.kod}
                  </Link>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DetailHistoryTable({ rows }: { rows: Fund["sonOtuzIslemGunu"] }) {
  return (
    <div data-nosnippet="true" className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[1080px] text-sm">
        <thead className="bg-slate-100 text-left text-slate-700">
          <tr>
            <th data-nosnippet="true" className="px-4 py-3 font-semibold">Tarih</th>
            <th className="px-4 py-3 text-right font-semibold">Fiyat</th>
            <th className="px-4 py-3 text-right font-semibold">Günlük Getiri</th>
            <th className="px-4 py-3 text-right font-semibold">Tedavüldeki Pay</th>
            <th className="px-4 py-3 text-right font-semibold">Para Giriş/Çıkış</th>
            <th className="px-4 py-3 text-right font-semibold">Yatırımcı</th>
            <th className="px-4 py-3 text-right font-semibold">Yatırımcı Değişimi</th>
            <th className="px-4 py-3 text-right font-semibold">Fon Toplam Değeri</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={`${row.fonKodu}-${row.tarih}`} className="hover:bg-slate-50">
              <td data-nosnippet="true" className="px-4 py-3 font-semibold text-slate-900">
                {formatDate(row.tarih)}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatDecimal(row.fiyat, 6)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(row.gunlukGetiri)}`}>
                {formatSignedPercent(row.gunlukGetiri)}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatNumber(row.tedavuldekiPaySayisi)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(row.paraGirisiCikisi)}`}>
                {formatSignedTL(row.paraGirisiCikisi)}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatNumber(row.kisiSayisi)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(row.yatirimciDegisimi)}`}>
                {formatNumber(row.yatirimciDegisimi)}
              </td>
              <td className="px-4 py-3 text-right text-slate-700">
                {formatTL(row.fonToplamDeger)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

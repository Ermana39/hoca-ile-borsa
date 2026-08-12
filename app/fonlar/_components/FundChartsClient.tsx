"use client";

import { useMemo, useState } from "react";
import MarketChart, { type MarketChartPoint } from "@/components/charts/MarketChart";
import { formatSignedTL } from "@/lib/fon-format";
import type { FundHistoryRow } from "@/lib/fon-platform";

type Period = "1H" | "1A" | "3A" | "6A" | "YBB" | "1Y" | "Maks";
type NumericHistoryKey = "fiyat" | "fonToplamDeger" | "kisiSayisi" | "paraGirisiCikisi";

const periods: Period[] = ["1H", "1A", "3A", "6A", "YBB", "1Y", "Maks"];

function addDays(isoDate: string, days: number) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function addMonths(isoDate: string, months: number) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCMonth(date.getUTCMonth() + months);
  return date.toISOString().slice(0, 10);
}

function periodStartDate(latestDate: string, period: Period) {
  if (period === "1H") return addDays(latestDate, -7);
  if (period === "1A") return addMonths(latestDate, -1);
  if (period === "3A") return addMonths(latestDate, -3);
  if (period === "6A") return addMonths(latestDate, -6);
  if (period === "1Y") return addMonths(latestDate, -12);
  if (period === "YBB") return `${latestDate.slice(0, 4)}-01-01`;
  return "";
}

function normalizeSeries(rows: FundHistoryRow[], key: NumericHistoryKey): MarketChartPoint[] {
  return rows.flatMap((row) => {
    const value = row[key];
    if (typeof value !== "number" || !Number.isFinite(value)) return [];

    return [{ date: row.tarih, value, extra: row.fonToplamDeger }];
  });
}

function filteredSeries(series: MarketChartPoint[], period: Period) {
  const latestDate = series.at(-1)?.date;
  if (!latestDate || period === "Maks") return series;

  const filtered = series.filter((point) => point.date >= periodStartDate(latestDate, period));
  return filtered.length >= 2 ? filtered : series;
}

export default function FundChartsClient({ history }: { history: FundHistoryRow[] }) {
  const [period, setPeriod] = useState<Period>("Maks");
  const charts = useMemo(() => {
    const sorted = [...history].sort((a, b) => a.tarih.localeCompare(b.tarih));
    const price = normalizeSeries(sorted, "fiyat");
    const total = normalizeSeries(sorted, "fonToplamDeger");
    const investors = normalizeSeries(sorted, "kisiSayisi");
    const flow = normalizeSeries(sorted, "paraGirisiCikisi");

    return {
      price: filteredSeries(price, period),
      total: filteredSeries(total, period),
      investors: filteredSeries(investors, period),
      flow: filteredSeries(flow, period),
      latestFlow: flow.at(-1)?.value,
    };
  }, [history, period]);

  return (
    <section className="space-y-4">
      <div
        className="grid w-full grid-cols-4 rounded-md border border-slate-700 bg-slate-900 p-1 sm:w-fit sm:grid-cols-7"
        aria-label="Grafik dönemi"
      >
        {periods.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setPeriod(item)}
            aria-pressed={period === item}
            className={`min-h-9 px-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
              period === item
                ? "rounded-sm bg-blue-600 text-white"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5">
        <MarketChart
          key={`price-${period}`}
          title="Fon Fiyat Grafiği"
          series={charts.price}
          unit="price"
          minWidth={0}
        />
        <MarketChart
          key={`total-${period}`}
          title="Fon Toplam Değer Grafiği"
          series={charts.total}
          unit="money"
          minWidth={0}
        />
        <MarketChart
          key={`investors-${period}`}
          title="Yatırımcı Sayısı Grafiği"
          series={charts.investors}
          unit="number"
          minWidth={0}
        />
        <MarketChart
          key={`flow-${period}`}
          title="Nakit Giriş Çıkış"
          series={charts.flow}
          kind="bar"
          unit="money"
          extraLabel="Portföy"
          minWidth={0}
        />
      </div>

      <p className="text-xs text-slate-500">
        Son hareket: {typeof charts.latestFlow === "number" ? formatSignedTL(charts.latestFlow) : "-"}
      </p>
    </section>
  );
}

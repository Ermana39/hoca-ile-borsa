"use client";

import { useMemo, useState } from "react";
import MarketChart, {
  type MarketChartPoint,
  type MarketChartUnit,
} from "@/components/charts/MarketChart";
import type { FonTarihselVeri } from "../_data/fonEtkiOzetleri";

type GrafikTuru = "yatirimci" | "fonDegeri" | "paraAkisi" | "marj";

const grafikler = {
  yatirimci: {
    etiket: "Yatırımcı",
    baslik: "Yatırımcı Sayısı Grafiği",
    unit: "number",
    kind: "line",
    includeZero: false,
    getValue: (row: FonTarihselVeri) => row.yatirimciSayisi,
  },
  fonDegeri: {
    etiket: "Fon değeri",
    baslik: "Fon Toplam Değer Grafiği",
    unit: "money",
    kind: "line",
    includeZero: false,
    getValue: (row: FonTarihselVeri) => row.fonToplamDeger,
  },
  paraAkisi: {
    etiket: "Para akışı",
    baslik: "Nakit Giriş Çıkış",
    unit: "money",
    kind: "bar",
    includeZero: true,
    getValue: (row: FonTarihselVeri) => row.paraGirisiCikisi,
  },
  marj: {
    etiket: "Marj",
    baslik: "Marj Grafiği",
    unit: "percent",
    kind: "line",
    includeZero: true,
    getValue: (row: FonTarihselVeri) => row.marj,
  },
} satisfies Record<
  GrafikTuru,
  {
    etiket: string;
    baslik: string;
    unit: MarketChartUnit;
    kind: "line" | "bar";
    includeZero: boolean;
    getValue: (row: FonTarihselVeri) => number | null;
  }
>;

function formatLatest(type: GrafikTuru, value: number) {
  if (type === "yatirimci") {
    return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value);
  }
  if (type === "marj") {
    return `%${new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)}`;
  }
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function FonTarihselGrafikler({
  kod,
  veriler,
}: {
  kod: string;
  veriler: FonTarihselVeri[];
}) {
  const [grafikTuru, setGrafikTuru] = useState<GrafikTuru>("yatirimci");
  const kullanilabilirGrafikler = (Object.keys(grafikler) as GrafikTuru[]).filter((type) =>
    veriler.some((row) => typeof grafikler[type].getValue(row) === "number")
  );
  const activeType = kullanilabilirGrafikler.includes(grafikTuru)
    ? grafikTuru
    : (kullanilabilirGrafikler[0] ?? "yatirimci");
  const config = grafikler[activeType];
  const series = useMemo<MarketChartPoint[]>(
    () =>
      veriler.flatMap((row) => {
        const value = config.getValue(row);
        if (typeof value !== "number" || !Number.isFinite(value)) return [];
        return [{ date: row.tarih, value, extra: row.fonToplamDeger }];
      }),
    [config, veriler]
  );
  const latest = series.at(-1)?.value;

  return (
    <section className="mt-6 border-y border-slate-200 bg-white py-6">
      <div className="flex flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="text-sm font-semibold text-blue-700">Tarihsel değişim</p>
          <h3 className="mt-1 text-lg font-bold text-slate-950 md:text-xl">
            {kod} fonu veri grafikleri
          </h3>
        </div>
        <div className="grid grid-cols-2 rounded-md border border-slate-200 bg-slate-100 p-1 sm:grid-cols-4" aria-label="Grafik türü">
          {kullanilabilirGrafikler.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setGrafikTuru(type)}
              aria-pressed={activeType === type}
              className={`min-h-9 px-3 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:text-sm ${
                activeType === type
                  ? "rounded-sm bg-white text-slate-950 shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {grafikler[type].etiket}
            </button>
          ))}
        </div>
      </div>

      <dl className="mt-5 border-y border-slate-100">
        <div className="px-4 py-3 md:px-6">
          <dt className="text-xs font-semibold uppercase text-slate-500">Son değer</dt>
          <dd className="mt-1 text-lg font-bold text-slate-950">
            {typeof latest === "number" ? formatLatest(activeType, latest) : "-"}
          </dd>
        </div>
      </dl>

      <div className="px-4 pt-5 md:px-6">
        <MarketChart
          key={`${activeType}-${series.length}`}
          title={config.baslik}
          series={series}
          kind={config.kind}
          unit={config.unit}
          includeZero={config.includeZero}
          extraLabel={activeType === "paraAkisi" ? "Portföy" : undefined}
          minWidth={820}
        />
      </div>
    </section>
  );
}

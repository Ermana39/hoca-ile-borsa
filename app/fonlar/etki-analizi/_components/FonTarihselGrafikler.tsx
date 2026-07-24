"use client";

import { useState } from "react";
import type { FonTarihselVeri } from "../_data/fonEtkiOzetleri";

type GrafikTuru = "yatirimci" | "fonDegeri" | "paraAkisi";

const WIDTH = 760;
const HEIGHT = 292;
const PADDING = { top: 26, right: 24, bottom: 52, left: 76 };

const grafikler = {
  yatirimci: {
    etiket: "Yatırımcı",
    renk: "#2563EB",
    getValue: (row: FonTarihselVeri) => row.yatirimciSayisi,
  },
  fonDegeri: {
    etiket: "Fon değeri",
    renk: "#0F766E",
    getValue: (row: FonTarihselVeri) => row.fonToplamDeger,
  },
  paraAkisi: {
    etiket: "Para akışı",
    renk: "#16A34A",
    getValue: (row: FonTarihselVeri) => row.paraGirisiCikisi,
  },
} satisfies Record<
  GrafikTuru,
  {
    etiket: string;
    renk: string;
    getValue: (row: FonTarihselVeri) => number;
  }
>;

function tarihEtiketi(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

function tamTarihEtiketi(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

function tamSayi(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value);
}

function para(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

function kisaSayi(value: number, paraBirimi = false) {
  const absolute = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  let result: string;

  if (absolute >= 1_000_000_000) {
    result = `${(absolute / 1_000_000_000).toLocaleString("tr-TR", {
      maximumFractionDigits: 1,
    })} Mr`;
  } else if (absolute >= 1_000_000) {
    result = `${(absolute / 1_000_000).toLocaleString("tr-TR", {
      maximumFractionDigits: 1,
    })} Mn`;
  } else if (absolute >= 1_000) {
    result = `${(absolute / 1_000).toLocaleString("tr-TR", {
      maximumFractionDigits: 1,
    })} bin`;
  } else {
    result = absolute.toLocaleString("tr-TR", { maximumFractionDigits: 0 });
  }

  return `${sign}${result}${paraBirimi ? " TL" : ""}`;
}

function formatValue(type: GrafikTuru, value: number) {
  return type === "yatirimci" ? tamSayi(value) : para(value);
}

function signedValue(type: GrafikTuru, value: number) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${formatValue(type, value)}`;
}

export default function FonTarihselGrafikler({
  kod,
  veriler,
}: {
  kod: string;
  veriler: FonTarihselVeri[];
}) {
  const [grafikTuru, setGrafikTuru] = useState<GrafikTuru>("yatirimci");
  const config = grafikler[grafikTuru];
  const values = veriler.map(config.getValue);
  const latest = values.at(-1) ?? 0;
  const first = values[0] ?? 0;
  const change = latest - first;
  const includeZero = grafikTuru === "paraAkisi";
  const rawMin = Math.min(...values, ...(includeZero ? [0] : []));
  const rawMax = Math.max(...values, ...(includeZero ? [0] : []));
  const rawRange = rawMax - rawMin;
  const buffer = rawRange === 0 ? Math.max(Math.abs(rawMax) * 0.08, 1) : rawRange * 0.12;
  const min = rawMin - buffer;
  const max = rawMax + buffer;
  const range = max - min || 1;
  const chartWidth = WIDTH - PADDING.left - PADDING.right;
  const chartHeight = HEIGHT - PADDING.top - PADDING.bottom;
  const xForIndex = (index: number) =>
    PADDING.left +
    (veriler.length === 1 ? chartWidth / 2 : (index / (veriler.length - 1)) * chartWidth);
  const yForValue = (value: number) =>
    PADDING.top + ((max - value) / range) * chartHeight;
  const points = values.map(
    (value, index) => `${xForIndex(index)},${yForValue(value)}`
  );
  const zeroY = yForValue(0);
  const dateStep = Math.max(1, Math.ceil(veriler.length / 6));
  const yTicks = Array.from({ length: 5 }, (_, index) => {
    const value = max - (range * index) / 4;
    return { value, y: yForValue(value) };
  });

  return (
    <section className="mt-6 border-y border-slate-200 bg-white py-6">
      <div className="flex flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="text-sm font-semibold text-blue-700">Tarihsel değişim</p>
          <h3 className="mt-1 text-lg font-bold text-slate-950 md:text-xl">
            {kod} fonu veri grafikleri
          </h3>
        </div>
        <div
          className="grid grid-cols-3 rounded-md border border-slate-200 bg-slate-100 p-1"
          aria-label="Grafik türü"
        >
          {(Object.keys(grafikler) as GrafikTuru[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setGrafikTuru(type)}
              aria-pressed={grafikTuru === type}
              className={`min-h-9 px-3 text-xs font-semibold transition sm:text-sm ${
                grafikTuru === type
                  ? "rounded-sm bg-white text-slate-950 shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {grafikler[type].etiket}
            </button>
          ))}
        </div>
      </div>

      <dl className="mt-5 grid border-y border-slate-100 sm:grid-cols-3">
        <div className="px-4 py-3 md:px-6">
          <dt className="text-xs font-semibold uppercase text-slate-500">
            Son değer
          </dt>
          <dd className="mt-1 text-lg font-bold text-slate-950">
            {formatValue(grafikTuru, latest)}
          </dd>
        </div>
        <div className="border-t border-slate-100 px-4 py-3 sm:border-l sm:border-t-0 md:px-6">
          <dt className="text-xs font-semibold uppercase text-slate-500">
            Dönem değişimi
          </dt>
          <dd
            className={`mt-1 text-lg font-bold ${
              change >= 0 ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {signedValue(grafikTuru, change)}
          </dd>
        </div>
        <div className="border-t border-slate-100 px-4 py-3 sm:border-l sm:border-t-0 md:px-6">
          <dt className="text-xs font-semibold uppercase text-slate-500">
            Kayıt sayısı
          </dt>
          <dd className="mt-1 text-lg font-bold text-slate-950">
            {veriler.length} gün
          </dd>
        </div>
      </dl>

      <div className="overflow-x-auto px-2 pt-5 md:px-4">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label={`${kod} ${config.etiket.toLocaleLowerCase(
            "tr-TR"
          )} tarihsel değişim grafiği`}
          className="h-auto min-w-[640px] w-full"
        >
          {yTicks.map((tick) => (
            <g key={tick.y}>
              <line
                x1={PADDING.left}
                x2={WIDTH - PADDING.right}
                y1={tick.y}
                y2={tick.y}
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <text
                x={PADDING.left - 10}
                y={tick.y + 4}
                textAnchor="end"
                fontSize="11"
                fill="#64748B"
              >
                {kisaSayi(tick.value, grafikTuru !== "yatirimci")}
              </text>
            </g>
          ))}

          {grafikTuru === "paraAkisi" ? (
            <>
              <line
                x1={PADDING.left}
                x2={WIDTH - PADDING.right}
                y1={zeroY}
                y2={zeroY}
                stroke="#64748B"
                strokeWidth="1.5"
              />
              {veriler.map((row, index) => {
                const value = row.paraGirisiCikisi;
                const y = yForValue(value);
                const barWidth = Math.min(54, chartWidth / Math.max(veriler.length, 2) / 1.8);
                return (
                  <rect
                    key={row.tarih}
                    x={xForIndex(index) - barWidth / 2}
                    y={Math.min(y, zeroY)}
                    width={barWidth}
                    height={Math.max(Math.abs(zeroY - y), 2)}
                    rx="3"
                    fill={value >= 0 ? "#16A34A" : "#DC2626"}
                  >
                    <title>
                      {tamTarihEtiketi(row.tarih)}: {para(value)}
                    </title>
                  </rect>
                );
              })}
            </>
          ) : (
            <>
              <polyline
                points={points.join(" ")}
                fill="none"
                stroke={config.renk}
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {veriler.map((row, index) => {
                const value = config.getValue(row);
                return (
                  <circle
                    key={row.tarih}
                    cx={xForIndex(index)}
                    cy={yForValue(value)}
                    r="5"
                    fill="#FFFFFF"
                    stroke={config.renk}
                    strokeWidth="3"
                  >
                    <title>
                      {tamTarihEtiketi(row.tarih)}: {formatValue(grafikTuru, value)}
                    </title>
                  </circle>
                );
              })}
            </>
          )}

          {veriler.map((row, index) => {
            const show =
              index === 0 ||
              index === veriler.length - 1 ||
              index % dateStep === 0;
            if (!show) return null;
            return (
              <text
                key={row.tarih}
                x={xForIndex(index)}
                y={HEIGHT - 18}
                textAnchor="middle"
                fontSize="11"
                fill="#64748B"
              >
                {tarihEtiketi(row.tarih)}
              </text>
            );
          })}
        </svg>
      </div>

      <p className="px-4 pt-2 text-xs leading-5 text-slate-500 md:px-6">
        Nokta veya sütunların üzerine gelerek tarih ve değeri görebilirsiniz.
        Yeni tarih satırları Excel&apos;e eklendikçe grafik otomatik genişler.
      </p>
    </section>
  );
}

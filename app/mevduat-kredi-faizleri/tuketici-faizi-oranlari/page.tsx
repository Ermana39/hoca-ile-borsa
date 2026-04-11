"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import { IhtiyacKredisiHesaplayici } from "@/components/faiz-hesaplayicilar";

type BankaSatiri = {
  banka: string;
  faiz: string;
};

type GunlukOrtalamaSatiri = {
  tarih: string;
  ortalama: number;
};

const EXCEL_URL = "/data/hoca-ile-borsa-faiz-takip-sablonu-guncel.xlsx";

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function cleanText(value: unknown) {
  return String(value ?? "").trim();
}

function parseRate(value: unknown) {
  const text = cleanText(value);
  if (!text) return NaN;

  const normalized = text.replace("%", "").replace(/\s/g, "").replace(",", ".");
  const num = Number(normalized);

  return Number.isNaN(num) ? NaN : num;
}

function formatRate(value: unknown) {
  const num = parseRate(value);
  if (Number.isNaN(num)) return "-";

  if (Number.isInteger(num)) {
    return `%${num}`;
  }

  return `%${num.toFixed(2).replace(".", ",")}`;
}

function excelSerialToDate(serial: number) {
  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  const dateInfo = new Date(utcValue * 1000);

  const fractionalDay = serial - Math.floor(serial) + 0.0000001;
  const totalSeconds = Math.floor(86400 * fractionalDay);

  dateInfo.setUTCSeconds(totalSeconds);
  return dateInfo;
}

function formatDateLabel(value: unknown) {
  if (value === null || value === undefined || value === "") return "";

  if (typeof value === "number" && !Number.isNaN(value)) {
    const d = excelSerialToDate(value);
    return d.toLocaleDateString("tr-TR");
  }

  const text = cleanText(value);
  if (!text) return "";

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(text)) {
    return text;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    const [y, m, d] = text.split("-");
    return `${d}.${m}.${y}`;
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString("tr-TR");
  }

  return text;
}

function average(values: number[]) {
  if (!values.length) return NaN;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function findHeaderRow(rows: unknown[][]) {
  return rows.findIndex((row) => {
    const normalized = row.map((cell) => cleanText(cell).toLowerCase());
    const hasTarih = normalized.some((cell) => cell.includes("tarih"));
    const hasOrtalama = normalized.some((cell) => cell.includes("ortalama"));
    return hasTarih && hasOrtalama;
  });
}

function TuketiciGrafik({ data }: { data: GunlukOrtalamaSatiri[] }) {
  if (!data.length) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Tüketici Kredisi Faiz Grafiği
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Grafik için yeterli veri bulunamadı.
        </p>
      </section>
    );
  }

  const width = 960;
  const height = 320;
  const padding = 42;

  const minValue = Math.min(...data.map((item) => item.ortalama));
  const maxValue = Math.max(...data.map((item) => item.ortalama));
  const range = Math.max(maxValue - minValue, 1);

  const points = data.map((item, index) => {
    const x =
      data.length === 1
        ? width / 2
        : padding + (index * (width - padding * 2)) / (data.length - 1);

    const y =
      height -
      padding -
      ((item.ortalama - minValue) / range) * (height - padding * 2);

    return {
      x,
      y,
      label: item.tarih,
      value: item.ortalama,
    };
  });

  const pathD = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Tüketici Kredisi Faiz Grafiği
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Günlük ortalama tüketici kredisi faiz değişimini gösterir.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[960px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[320px] w-full">
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#d4d4d8" strokeWidth="1" />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#d4d4d8" strokeWidth="1" />

            <path d={pathD} fill="none" stroke="#111827" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

            {points.map((point, index) => (
              <g key={`${point.label}-${index}`}>
                <circle cx={point.x} cy={point.y} r="4" fill="#111827" />
                <text x={point.x} y={point.y - 12} textAnchor="middle" fontSize="11" fill="#52525b">
                  %{point.value.toFixed(2).replace(".", ",")}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-3 grid grid-cols-5 gap-2 text-center text-[11px] text-zinc-500 md:grid-cols-10">
            {data.map((item, index) => (
              <div key={`${item.tarih}-${index}`}>{item.tarih}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TuketiciFaiziOranlariPage() {
  const [bankaListesi, setBankaListesi] = useState<BankaSatiri[]>([]);
  const [grafikVerisi, setGrafikVerisi] = useState<GunlukOrtalamaSatiri[]>([]);
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function loadExcel() {
      try {
        setYukleniyor(true);
        setHata("");

        const response = await fetch(EXCEL_URL, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Excel dosyası alınamadı. Kod: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, {
          type: "array",
          raw: true,
          cellDates: false,
        });

        const targetSheetName =
          workbook.SheetNames.find((name) => {
            const n = name.trim().toLowerCase();
            return n === "ihtiyaç kredisi" || n === "ihtiyac kredisi";
          }) || workbook.SheetNames[1];

        const sheet = workbook.Sheets[targetSheetName];
        if (!sheet) {
          throw new Error(`Sayfa bulunamadı: ${targetSheetName}`);
        }

        const rawRows = XLSX.utils.sheet_to_json<(string | number | null)[]>(sheet, {
          header: 1,
          defval: "",
          raw: true,
        }) as unknown[][];

        const headerRowIndex = findHeaderRow(rawRows);
        if (headerRowIndex === -1) {
          throw new Error("Başlık satırı bulunamadı.");
        }

        const headerRow = rawRows[headerRowIndex].map((cell) => cleanText(cell));
        const dataRows = rawRows.slice(headerRowIndex + 1);

        const tarihIndex = headerRow.findIndex((cell) => cell.toLowerCase().includes("tarih"));
        const ortalamaIndex = headerRow.findIndex((cell) => cell.toLowerCase().includes("ortalama"));

        if (tarihIndex === -1 || ortalamaIndex === -1) {
          throw new Error("Tarih veya Günlük Ortalama sütunu bulunamadı.");
        }

        const bankaColumns = headerRow
          .map((name, index) => ({ name, index }))
          .filter((item) => item.name && item.index !== tarihIndex && item.index !== ortalamaIndex);

        const preparedRows = dataRows
          .map((row) => {
            const tarih = formatDateLabel(row[tarihIndex]);

            const bankaRates = bankaColumns.map((col) => ({
              banka: col.name,
              rawValue: row[col.index],
              value: parseRate(row[col.index]),
            }));

            const numericRates = bankaRates
              .map((item) => item.value)
              .filter((value) => !Number.isNaN(value));

            const ortalamaHucre = parseRate(row[ortalamaIndex]);
            const ortalamaDegeri = !Number.isNaN(ortalamaHucre)
              ? ortalamaHucre
              : average(numericRates);

            return {
              tarih,
              bankaRates,
              numericCount: numericRates.length,
              ortalama: ortalamaDegeri,
            };
          })
          .filter((row) => row.tarih && row.numericCount > 0);

        if (!preparedRows.length) {
          throw new Error("Dolu veri satırı bulunamadı.");
        }

        const sonSatir = preparedRows[preparedRows.length - 1];

        setBankaListesi(
          sonSatir.bankaRates.map((item) => ({
            banka: item.banka,
            faiz: formatRate(item.rawValue),
          }))
        );

        setGrafikVerisi(
          preparedRows
            .filter((row) => !Number.isNaN(row.ortalama))
            .slice(-30)
            .map((row) => ({
              tarih: row.tarih,
              ortalama: row.ortalama,
            }))
        );
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Bilinmeyen Excel okuma hatası";
        setHata(message);
        setBankaListesi([]);
        setGrafikVerisi([]);
      } finally {
        setYukleniyor(false);
      }
    }

    loadExcel();
  }, []);

  const tabloIcerik = useMemo(() => {
    if (yukleniyor) {
      return (
        <tr>
          <td colSpan={2} className="px-4 py-6 text-center text-zinc-500">
            Veriler yükleniyor...
          </td>
        </tr>
      );
    }

    if (!bankaListesi.length) {
      return (
        <tr>
          <td colSpan={2} className="px-4 py-6 text-center text-zinc-500">
            Gösterilecek veri bulunamadı.
          </td>
        </tr>
      );
    }

    return bankaListesi.map((item, index) => (
      <tr key={item.banka} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
        <td className="px-4 py-3 font-medium text-zinc-800">{item.banka}</td>
        <td className="px-4 py-3 text-right font-semibold text-zinc-900">{item.faiz}</td>
      </tr>
    ));
  }, [bankaListesi, yukleniyor]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Ana Sayfa
          </Link>

          <Link href="/mevduat-kredi-faizleri" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Tüketici Faizi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Güncel tüketici kredisi oranları, banka karşılaştırmaları ve günlük ortalama faiz grafiği.
        </p>

        {hata ? (
          <section className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {hata}
          </section>
        ) : null}

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-sm md:text-base">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-900">Banka</th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-900">Minimum Faiz</th>
                </tr>
              </thead>
              <tbody>{tabloIcerik}</tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-8">
          <TuketiciGrafik data={grafikVerisi} />
        </section>

        <section className="mt-8">
          <IhtiyacKredisiHesaplayici />
        </section>
      </div>
    </main>
  );
}
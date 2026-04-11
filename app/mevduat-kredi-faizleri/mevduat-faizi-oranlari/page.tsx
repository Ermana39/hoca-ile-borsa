import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import * as XLSX from "xlsx";
import { MevduatHesaplayici } from "@/components/faiz-hesaplayicilar";

export const metadata: Metadata = {
  title: "Mevduat Faizi Oranları | Hoca İle Borsa",
  description:
    "Excel dosyasından okunan güncel mevduat faizi oranları ve günlük ortalama grafik görünümü.",
  alternates: {
    canonical: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
  },
};

type SheetRow = Record<string, string | number | null | undefined>;

type BankaSatiri = {
  banka: string;
  faiz: string;
};

type GunlukOrtalamaSatiri = {
  tarih: string;
  ortalama: number;
};

const EXCEL_FILE = path.join(
  process.cwd(),
  "data",
  "hoca-ile-borsa-faiz-takip-sablonu-guncel.xlsx"
);

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

function formatFaiz(value: unknown) {
  if (value === null || value === undefined || value === "") return "-";

  const text = String(value).trim().replace(",", ".");
  const num = Number(text);

  if (Number.isNaN(num)) return String(value);

  const clean = Number.isInteger(num)
    ? `${num}`
    : num.toFixed(2).replace(".", ",");

  return `%${clean}`;
}

function parseNumber(value: unknown) {
  if (value === null || value === undefined || value === "") return NaN;

  const num = Number(String(value).replace("%", "").replace(",", ".").trim());
  return Number.isNaN(num) ? NaN : num;
}

function formatDateLabel(value: unknown) {
  if (!value) return "";

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toLocaleDateString("tr-TR");
  }

  const text = String(value).trim();

  const asDate = new Date(text);
  if (!Number.isNaN(asDate.getTime())) {
    return asDate.toLocaleDateString("tr-TR");
  }

  return text;
}

function loadMevduatData() {
  if (!fs.existsSync(EXCEL_FILE)) {
    return {
      bankaListesi: [] as BankaSatiri[],
      grafikVerisi: [] as GunlukOrtalamaSatiri[],
      hata: "Excel dosyası bulunamadı.",
    };
  }

  const workbook = XLSX.readFile(EXCEL_FILE, { cellDates: true });
  const sheet = workbook.Sheets["Mevduat"];

  if (!sheet) {
    return {
      bankaListesi: [] as BankaSatiri[],
      grafikVerisi: [] as GunlukOrtalamaSatiri[],
      hata: "Excel içinde Mevduat sayfası bulunamadı.",
    };
  }

  const rows = XLSX.utils.sheet_to_json<SheetRow>(sheet, {
    defval: "",
    raw: false,
  });

  if (!rows.length) {
    return {
      bankaListesi: [] as BankaSatiri[],
      grafikVerisi: [] as GunlukOrtalamaSatiri[],
      hata: "Mevduat sayfasında veri bulunamadı.",
    };
  }

  const headers = Object.keys(rows[0]);
  const tarihKey =
    headers.find((h) => h.toLowerCase().includes("tarih")) || headers[0];
  const ortalamaKey =
    headers.find((h) => h.toLowerCase().includes("ortalama")) ||
    headers[headers.length - 1];

  const bankaKeys = headers.filter((h) => h !== tarihKey && h !== ortalamaKey);

  const sonSatir = rows[rows.length - 1];

  const bankaListesi: BankaSatiri[] = bankaKeys.map((key) => ({
    banka: key,
    faiz: formatFaiz(sonSatir[key]),
  }));

  const grafikVerisi: GunlukOrtalamaSatiri[] = rows
    .map((row) => ({
      tarih: formatDateLabel(row[tarihKey]),
      ortalama: parseNumber(row[ortalamaKey]),
    }))
    .filter((item) => item.tarih && !Number.isNaN(item.ortalama))
    .slice(-30);

  return {
    bankaListesi,
    grafikVerisi,
    hata: "",
  };
}

function MevduatGrafik({ data }: { data: GunlukOrtalamaSatiri[] }) {
  if (!data.length) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Mevduat Faizi Grafiği
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
          Günlük Ortalama Mevduat Faizi Grafiği
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Excel dosyasındaki günlük ortalama değerler baz alınır.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[960px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[320px] w-full">
            <line
              x1={padding}
              y1={height - padding}
              x2={width - padding}
              y2={height - padding}
              stroke="#d4d4d8"
              strokeWidth="1"
            />
            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={height - padding}
              stroke="#d4d4d8"
              strokeWidth="1"
            />

            <path
              d={pathD}
              fill="none"
              stroke="#111827"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {points.map((point, index) => (
              <g key={`${point.label}-${index}`}>
                <circle cx={point.x} cy={point.y} r="4" fill="#111827" />
                <text
                  x={point.x}
                  y={point.y - 12}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#52525b"
                >
                  %{point.value.toFixed(2).replace(".", ",")}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-3 grid grid-cols-5 gap-2 text-center text-[11px] text-zinc-500 md:grid-cols-10">
            {data.map((item) => (
              <div key={item.tarih}>{item.tarih}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MevduatFaiziOranlariPage() {
  const { bankaListesi, grafikVerisi, hata } = loadMevduatData();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/mevduat-kredi-faizleri"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Mevduat Faizi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Excel dosyasından okunan banka verileri ve günlük ortalama grafik görünümü.
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
                  <th className="px-4 py-3 text-left font-semibold text-zinc-900">
                    Banka
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-900">
                    Maksimum Faiz
                  </th>
                </tr>
              </thead>

              <tbody>
                {bankaListesi.map((item, index) => (
                  <tr
                    key={item.banka}
                    className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                  >
                    <td className="px-4 py-3 font-medium text-zinc-800">
                      {item.banka}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-zinc-900">
                      {item.faiz}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-8">
          <MevduatGrafik data={grafikVerisi} />
        </section>

        <section className="mt-8">
          <MevduatHesaplayici />
        </section>
      </div>
    </main>
  );
}
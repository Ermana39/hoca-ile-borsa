import Link from "next/link";
import * as FaizAraclari from "@/components/faiz-hesaplayicilar";
import faizData from "../data/hoca-ile-borsa-faiz-takip-sablonu-guncel.json";

export const metadata = {
  title: "Tüketici Faizi Oranları | Hoca İle Borsa",
  description:
    "Güncel tüketici kredisi faiz oranlarını, banka karşılaştırmalarını ve günlük ortalama faiz grafiğini inceleyin.",
};

export const revalidate = 3600;

type BankaSatiri = {
  banka: string;
  faiz: string;
};

type GunlukOrtalamaSatiri = {
  tarih: string;
  ortalama: number;
};

type SheetData = {
  rawRows?: (string | number | null)[][];
};

type FaizJsonData = {
  guncellemeTarihi?: string;
  sheets?: Record<string, SheetData>;
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
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

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(text)) return text;

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
    const normalized = row.map((cell) =>
      cleanText(cell).toLocaleLowerCase("tr-TR")
    );
    const hasTarih = normalized.some((cell) => cell.includes("tarih"));
    const hasOrtalama = normalized.some((cell) => cell.includes("ortalama"));
    return hasTarih && hasOrtalama;
  });
}

function getTuketiciSheetRows() {
  const data = faizData as FaizJsonData;
  const sheets = data.sheets || {};

  const sheetName =
    Object.keys(sheets).find((name) => {
      const n = name.trim().toLocaleLowerCase("tr-TR");
      return n === "ihtiyaç kredisi" || n === "ihtiyac kredisi";
    }) || Object.keys(sheets)[1];

  return sheetName && sheets[sheetName]?.rawRows ? sheets[sheetName].rawRows! : [];
}

function getTuketiciVerileri() {
  try {
    const rawRows = getTuketiciSheetRows();

    const headerRowIndex = findHeaderRow(rawRows);
    if (headerRowIndex === -1) {
      throw new Error("Başlık satırı bulunamadı.");
    }

    const headerRow = rawRows[headerRowIndex].map((cell) => cleanText(cell));
    const dataRows = rawRows.slice(headerRowIndex + 1);

    const tarihIndex = headerRow.findIndex((cell) =>
      cell.toLocaleLowerCase("tr-TR").includes("tarih")
    );
    const ortalamaIndex = headerRow.findIndex((cell) =>
      cell.toLocaleLowerCase("tr-TR").includes("ortalama")
    );

    if (tarihIndex === -1 || ortalamaIndex === -1) {
      throw new Error("Tarih veya Günlük Ortalama sütunu bulunamadı.");
    }

    const bankaColumns = headerRow
      .map((name, index) => ({ name, index }))
      .filter(
        (item) =>
          item.name &&
          item.index !== tarihIndex &&
          item.index !== ortalamaIndex
      );

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

    const bankaListesi: BankaSatiri[] = sonSatir.bankaRates.map((item) => ({
      banka: item.banka,
      faiz: formatRate(item.rawValue),
    }));

    const grafikVerisi: GunlukOrtalamaSatiri[] = preparedRows
      .filter((row) => !Number.isNaN(row.ortalama))
      .slice(-30)
      .map((row) => ({
        tarih: row.tarih,
        ortalama: row.ortalama,
      }));

    return {
      bankaListesi,
      grafikVerisi,
      hata: "",
    };
  } catch (error) {
    return {
      bankaListesi: [] as BankaSatiri[],
      grafikVerisi: [] as GunlukOrtalamaSatiri[],
      hata: error instanceof Error ? error.message : "Veri okuma hatası.",
    };
  }
}

function TuketiciGrafik({ data }: { data: GunlukOrtalamaSatiri[] }) {
  if (!data.length) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Tüketici Faizi Grafiği
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Grafik için yeterli veri bulunamadı.
        </p>
      </section>
    );
  }

  const width = 960;
  const height = 360;
  const padding = 42;
  const bottomSpace = 50;

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
      bottomSpace -
      ((item.ortalama - minValue) / range) *
        (height - padding - bottomSpace - 20);

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
          Günlük Ortalama Tüketici Faizi Grafiği
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Günlük ortalama tüketici oran değişimini gösterir.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[960px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[360px] w-full">
            <line
              x1={padding}
              y1={height - bottomSpace}
              x2={width - padding}
              y2={height - bottomSpace}
              stroke="#d4d4d8"
              strokeWidth="1"
            />
            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={height - bottomSpace}
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
                <text
                  x={point.x}
                  y={height - 18}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#71717a"
                >
                  {point.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

function HesaplayiciAlani() {
  const Comp =
    (FaizAraclari as any).IhtiyacKredisiHesaplayici ??
    (FaizAraclari as any).KrediHesaplayici ??
    null;

  if (!Comp) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Tüketici Faizi Hesaplayıcı
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Hesaplayıcı bileşeni şu anda bulunamadı.
        </p>
      </section>
    );
  }

  return <Comp />;
}

export default function TuketiciFaiziOranlariPage() {
  const { bankaListesi, grafikVerisi, hata } = getTuketiciVerileri();
  const data = faizData as FaizJsonData;
  const guncellemeTarihi = data.guncellemeTarihi || "-";

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/mevduat-kredi-faizleri"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Tüketici Faizi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Güncel tüketici kredisi oranları, banka karşılaştırmaları ve günlük
          ortalama faiz grafiği.
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

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
                    Minimum Faiz
                  </th>
                </tr>
              </thead>
              <tbody>
                {bankaListesi.length > 0 ? (
                  bankaListesi.map((item, index) => (
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="px-4 py-6 text-center text-zinc-500">
                      Gösterilecek veri bulunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
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
          <HesaplayiciAlani />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Tüketici Kredisi Faiz Oranları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Tüketici kredisi faiz oranları, nakit ihtiyaçlarını karşılamak isteyen
            kullanıcılar için aylık taksit tutarı ve toplam geri ödeme maliyetini
            belirleyen en önemli unsurlardan biridir. Bu sayfada bankaların güncel
            tüketici kredisi faiz oranlarını karşılaştırabilir, günlük değişimleri
            inceleyebilir ve bütçenize uygun kredi seçeneğini değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Banka banka listelenen ihtiyaç kredisi oranları düzenli olarak
            güncellenir. Böylece kullanıcılar en düşük tüketici kredisi faizi sunan
            bankaları tek ekranda görebilir. Faiz oranlarının değiştiği dönemlerde
            günlük ortalama grafik bölümü kredi piyasasındaki hareketleri takip
            etmek açısından önemli avantaj sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Tüketici kredisi hesaplayıcı aracını kullanarak kredi tutarı, vade
            süresi ve faiz oranına göre aylık ödeme planınızı hesaplayabilirsiniz.
            Bu sayede ihtiyaç kredisi kullanmadan önce toplam ödeme tutarını,
            taksit miktarını ve bütçenize uygun seçenekleri kolayca görebilirsiniz.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel tüketici kredisi faiz oranları, en uygun ihtiyaç kredisi
            seçenekleri, banka karşılaştırmaları ve ödeme hesaplamaları için bu
            sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";
import * as FaizAraclari from "@/components/faiz-hesaplayicilar";
import { getFaizData } from "@/lib/faiz-data";
import { HesaplaCTA, TabloUstBilgi } from "@/components/IlgiliBolumler";

export const metadata = {
  title: "Taşıt Kredisi Oranları | Hoca İle Borsa",
  description:
    "Güncel taşıt kredisi faiz oranlarını, banka karşılaştırmalarını ve günlük ortalama faiz grafiğini inceleyin.",
};

export const revalidate = 86400;

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

function parseTrDateToUtc(value: string) {
  const match = value.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);

  if (!match) return null;

  const [, day, month, year] = match;

  return Date.UTC(Number(year), Number(month) - 1, Number(day));
}

function getWeeklyLabelDates(dateValues: number[]) {
  const sortedDates = [...new Set(dateValues)].sort((a, b) => a - b);
  const visibleDates = new Set<number>();

  if (!sortedDates.length) return visibleDates;

  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const fixedStart = Date.UTC(2026, 3, 11);
  const maxDate = sortedDates[sortedDates.length - 1];

  let targetDate = fixedStart;
  let cursor = 0;

  while (targetDate <= maxDate) {
    while (cursor < sortedDates.length && sortedDates[cursor] < targetDate) {
      cursor += 1;
    }

    if (cursor < sortedDates.length) {
      visibleDates.add(sortedDates[cursor]);
    }

    targetDate += weekMs;
  }

  return visibleDates;
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

async function getTasitSheetRows() {
  const data = await getFaizData();
  const sheets = data.sheets || {};

  const sheetName =
    Object.keys(sheets).find((name) => {
      const n = name.trim().toLocaleLowerCase("tr-TR");
      return n === "taşıt kredisi" || n === "tasit kredisi";
    }) || Object.keys(sheets)[3];

  return sheetName && sheets[sheetName]?.rawRows ? sheets[sheetName].rawRows! : [];
}

async function getTasitVerileri() {
  try {
    const rawRows = await getTasitSheetRows();

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

function TasitGrafik({ data }: { data: GunlukOrtalamaSatiri[] }) {
  if (!data.length) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Taşıt Kredisi Grafiği
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Grafik için yeterli veri bulunamadı.
        </p>
      </section>
    );
  }

  const width = 960;
  const height = 460;
  const leftPadding = 72;
  const rightPadding = 24;
  const topPadding = 28;
  const bottomPadding = 64;

  const yAxisMin = 3.1;
  const yAxisMax = 3.5;
  const yAxisTicks = [3.1, 3.2, 3.3, 3.4, 3.5];

  const chartInnerWidth = width - leftPadding - rightPadding;
  const chartInnerHeight = height - topPadding - bottomPadding;
  const yRange = yAxisMax - yAxisMin;

  const parsedDates = data.map((item) => parseTrDateToUtc(item.tarih));
  const allDatesValid = parsedDates.every((item) => item !== null);

  const dateNumbers = parsedDates.filter(
    (item): item is number => typeof item === "number"
  );

  const weeklyLabelDates = getWeeklyLabelDates(dateNumbers);

  const useDateScale = allDatesValid && dateNumbers.length > 1;
  const minDate = useDateScale ? Math.min(...dateNumbers) : 0;
  const maxDate = useDateScale ? Math.max(...dateNumbers) : 0;
  const dateRange = Math.max(maxDate - minDate, 1);

  function getXByDate(dateValue: number) {
    return leftPadding + ((dateValue - minDate) / dateRange) * chartInnerWidth;
  }

  function getYByValue(value: number) {
    const normalized = (value - yAxisMin) / yRange;
    return topPadding + (1 - normalized) * chartInnerHeight;
  }

  function formatAxisRate(value: number) {
    return `%${value.toFixed(1).replace(".0", "").replace(".", ",")}`;
  }

  const points = data.map((item, index) => {
    const dateValue = parsedDates[index];

    const x =
      useDateScale && dateValue !== null
        ? getXByDate(dateValue)
        : data.length === 1
          ? leftPadding + chartInnerWidth / 2
          : leftPadding + (index * chartInnerWidth) / (data.length - 1);

    const y = getYByValue(item.ortalama);

    return {
      x,
      y,
      label: item.tarih,
      value: item.ortalama,
      dateValue,
    };
  });

  const pathD = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Taşıt Kredisi Grafiği
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Günlük ortalama taşıt oran değişimini gösterir.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[960px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[460px] w-full">
            {yAxisTicks.map((tick) => {
              const y = getYByValue(tick);

              return (
                <g key={tick}>
                  <line
                    x1={leftPadding}
                    y1={y}
                    x2={width - rightPadding}
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  <text
                    x={leftPadding - 10}
                    y={y + 4}
                    textAnchor="end"
                    fontSize="12"
                    fill="#71717a"
                  >
                    {formatAxisRate(tick)}
                  </text>
                </g>
              );
            })}

            <line
              x1={leftPadding}
              y1={topPadding}
              x2={leftPadding}
              y2={height - bottomPadding}
              stroke="#d4d4d8"
              strokeWidth="1"
            />

            <line
              x1={leftPadding}
              y1={height - bottomPadding}
              x2={width - rightPadding}
              y2={height - bottomPadding}
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

            {points.map((point, index) => {
              const tarihGoster =
                point.dateValue !== null && weeklyLabelDates.has(point.dateValue);

              return (
                <g key={`${point.label}-${index}`}>
                  <circle cx={point.x} cy={point.y} r="4" fill="#111827" />

                  {tarihGoster ? (
                    <>
                      <line
                        x1={point.x}
                        y1={height - bottomPadding}
                        x2={point.x}
                        y2={height - bottomPadding + 6}
                        stroke="#a1a1aa"
                        strokeWidth="1"
                      />
                      <text
                        x={point.x}
                        y={height - 22}
                        textAnchor="middle"
                        fontSize="11"
                        fill="#71717a"
                      >
                        {point.label}
                      </text>
                    </>
                  ) : null}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

function HesaplayiciAlani() {
  const Comp =
    (FaizAraclari as any).TasitKredisiHesaplamaAraci ??
    (FaizAraclari as any).TasitKredisiHesaplayici ??
    (FaizAraclari as any).KrediHesaplayici ??
    null;

  if (!Comp) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Taşıt Kredisi Hesaplayıcı
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Hesaplayıcı bileşeni şu anda bulunamadı.
        </p>
      </section>
    );
  }

  return <Comp />;
}

export default async function TasitKredisiOranlariPage() {
  const { bankaListesi, grafikVerisi, hata } = await getTasitVerileri();

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
          Taşıt Kredisi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Güncel taşıt kredisi oranları, banka karşılaştırmaları ve günlük
          ortalama faiz grafiği.
        </p>

        {hata ? (
          <section className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {hata}
          </section>
        ) : null}

        <TabloUstBilgi>
          Oranları karşılaştırdıktan sonra aşağıdaki hesaplayıcıyla tahmini maliyetinizi hesaplayabilirsiniz.
        </TabloUstBilgi>

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
                    <td
                      colSpan={2}
                      className="px-4 py-6 text-center text-zinc-500"
                    >
                      Gösterilecek veri bulunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <TasitGrafik data={grafikVerisi} />
        </section>

        <HesaplaCTA href="#hesaplayici" label="Bu oranlarla hesaplama yap" />

        <section id="hesaplayici" className="mt-8 scroll-mt-24">
          <HesaplayiciAlani />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Taşıt Kredisi Faiz Oranları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Taşıt kredisi faiz oranları, araç satın almak isteyenler için aylık
            taksit tutarı ve toplam geri ödeme maliyetini doğrudan etkileyen en
            önemli unsurlardan biridir. Bu sayfada bankaların güncel taşıt kredisi
            faiz oranlarını karşılaştırabilir, günlük değişimleri inceleyebilir ve
            bütçenize en uygun kredi seçeneğini değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Banka banka listelenen taşıt kredisi oranları düzenli olarak
            güncellenir. Böylece kullanıcılar en düşük taşıt kredisi faizi sunan
            bankaları tek ekranda görebilir. Özellikle faiz oranlarının sık
            değiştiği dönemlerde günlük ortalama grafik bölümü piyasa hareketlerini
            takip etmek açısından önemli avantaj sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Taşıt kredisi hesaplayıcı aracını kullanarak kredi tutarı, vade süresi
            ve faiz oranına göre aylık ödeme planınızı hesaplayabilirsiniz. Bu
            sayede araç kredisi kullanmadan önce toplam ödeme tutarını ve bütçenize
            uygun taksit seçeneklerini kolayca görebilirsiniz.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel taşıt kredisi faiz oranları, en uygun araç kredisi seçenekleri,
            banka karşılaştırmaları ve ödeme hesaplamaları için bu sayfayı düzenli
            olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
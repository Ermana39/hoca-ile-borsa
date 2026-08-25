import { seoAciklamasi } from "@/lib/seo-metadata";
export const metadata = {
  title: "BIST Pivot Analizi ve Destek Direnç Seviyeleri",
  description:
    seoAciklamasi("Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};

import Link from "@/components/NoPrefetchLink";

type PivotRow = {
  sembol: string;
  fark: number;
  son: number;
  pivot: number;
  destek1: number;
  destek2: number;
  destek3: number;
  direnc1: number;
  direnc2: number;
  direnc3: number;
  yorum: string;
};

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -0.48,
  son: 14473.42,
  pivot: 14543.110,
  destek1: 14436.080,
  destek2: 14370.660,
  destek3: 14263.630,
  direnc1: 14608.530,
  direnc2: 14715.560,
  direnc3: 14780.980,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -1.00, son: 18.85, pivot: 19.04, destek1: 18.83, destek2: 18.72, destek3: 18.51, direnc1: 19.15, direnc2: 19.360, direnc3: 19.470, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: -0.37, son: 72.00, pivot: 72.267, destek1: 71.183, destek2: 70.267, destek3: 69.183, direnc1: 73.183, direnc2: 74.267, direnc3: 75.183, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: 0.39, son: 403.75, pivot: 402.167, destek1: 394.333, destek2: 388.917, destek3: 381.083, direnc1: 407.583, direnc2: 415.417, direnc3: 420.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: -0.97, son: 339.00, pivot: 342.333, destek1: 335.167, destek2: 329.083, destek3: 321.917, direnc1: 348.417, direnc2: 355.583, direnc3: 361.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 1.31, son: 417.50, pivot: 412.083, destek1: 406.667, destek2: 401.083, destek3: 395.667, direnc1: 417.667, direnc2: 423.083, direnc3: 428.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 8.76, son: 2350.00, pivot: 2160.667, destek1: 2121.333, destek2: 2042.667, destek3: 2003.333, direnc1: 2239.333, direnc2: 2278.667, direnc3: 2357.333, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: -2.50, son: 20.04, pivot: 20.553, destek1: 20.307, destek2: 19.893, destek3: 19.647, direnc1: 20.967, direnc2: 21.213, direnc3: 21.627, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: 0.62, son: 83.95, pivot: 83.433, destek1: 82.267, destek2: 81.583, destek3: 80.417, direnc1: 84.117, direnc2: 85.283, direnc3: 85.967, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: -0.35, son: 38.24, pivot: 38.373, destek1: 37.967, destek2: 37.753, destek3: 37.347, direnc1: 38.587, direnc2: 38.993, direnc3: 39.207, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -2.42, son: 78.60, pivot: 80.550, destek1: 79.400, destek2: 78.700, destek3: 77.550, direnc1: 81.250, direnc2: 82.400, direnc3: 83.100, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: 0.05, son: 132.60, pivot: 132.533, destek1: 130.267, destek2: 128.933, destek3: 126.667, direnc1: 133.867, direnc2: 136.133, direnc3: 137.467, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: -1.92, son: 480.50, pivot: 489.917, destek1: 474.833, destek2: 457.417, destek3: 442.333, direnc1: 507.333, direnc2: 522.417, direnc3: 539.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: -1.37, son: 12.48, pivot: 12.653, destek1: 12.457, destek2: 12.323, destek3: 12.127, direnc1: 12.787, direnc2: 12.983, direnc3: 13.117, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -1.75, son: 217.50, pivot: 221.367, destek1: 215.933, destek2: 213.067, destek3: 207.633, direnc1: 224.233, direnc2: 229.667, direnc3: 232.533, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: -1.06, son: 44.90, pivot: 45.38, destek1: 44.72, destek2: 44.24, destek3: 43.58, direnc1: 45.86, direnc2: 46.52, direnc3: 47.00, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: -2.37, son: 555.50, pivot: 569.00, destek1: 561.00, destek2: 557.00, destek3: 549.00, direnc1: 573.00, direnc2: 581.00, direnc3: 585.00, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -4.87, son: 19.73, pivot: 20.740, destek1: 20.400, destek2: 20.000, destek3: 19.660, direnc1: 21.140, direnc2: 21.480, direnc3: 21.880, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: -0.07, son: 150.10, pivot: 150.20, destek1: 148.40, destek2: 147.20, destek3: 145.40, direnc1: 151.40, direnc2: 153.20, direnc3: 154.40, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: -0.90, son: 93.50, pivot: 94.350, destek1: 93.25, destek2: 92.25, destek3: 91.15, direnc1: 95.350, direnc2: 96.450, direnc3: 97.450, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: -1.58, son: 2.31, pivot: 2.347, destek1: 2.303, destek2: 2.277, destek3: 2.233, direnc1: 2.373, direnc2: 2.417, direnc3: 2.443, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SISE", fark: -0.83, son: 39.70, pivot: 40.033, destek1: 39.427, destek2: 39.113, destek3: 38.507, direnc1: 40.347, direnc2: 40.953, direnc3: 41.267, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: 2.39, son: 285.25, pivot: 278.583, destek1: 272.917, destek2: 269.833, destek3: 264.167, direnc1: 281.667, direnc2: 287.333, direnc3: 290.417, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TCELL", fark: -1.15, son: 102.70, pivot: 103.900, destek1: 101.900, destek2: 100.700, destek3: 98.700, direnc1: 105.100, direnc2: 107.100, direnc3: 108.300, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -0.06, son: 302.50, pivot: 302.667, destek1: 297.833, destek2: 295.167, destek3: 290.333, direnc1: 305.333, direnc2: 310.167, direnc3: 312.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -1.70, son: 275.00, pivot: 279.75, destek1: 273.00, destek2: 268.75, destek3: 262.00, direnc1: 284.00, direnc2: 290.75, direnc3: 295.00, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -4.55, son: 53.50, pivot: 56.05, destek1: 54.65, destek2: 52.900, destek3: 51.500, direnc1: 57.80, direnc2: 59.20, direnc3: 60.95, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: -1.54, son: 53.30, pivot: 54.133, destek1: 52.617, destek2: 51.833, destek3: 50.317, direnc1: 54.917, direnc2: 56.433, direnc3: 57.217, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: -7.12, son: 373.75, pivot: 402.417, destek1: 397.333, destek2: 394.167, destek3: 389.083, direnc1: 405.583, direnc2: 410.667, direnc3: 413.833, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "VAKBN", fark: 0.10, son: 31.50, pivot: 31.467, destek1: 31.133, destek2: 30.887, destek3: 30.553, direnc1: 31.713, direnc2: 32.047, direnc3: 32.293, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: 0.55, son: 36.66, pivot: 36.460, destek1: 36.160, destek2: 35.800, destek3: 35.500, direnc1: 36.820, direnc2: 37.120, direnc3: 37.480, yorum: "Pivot değerinin üstünde seyrediyor." },
];

function formatNumber(value: number) {
  const hasDecimal = !Number.isInteger(value);

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 5,
  }).format(value);
}

function getSatirRenk(son: number, pivot: number) {
  if (son > pivot) return "bg-green-100";
  if (son < pivot) return "bg-red-100";
  return "bg-white";
}

export default function PivotAnaliziPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Pivot Analizi</h1>

        <p className="mb-2 max-w-3xl text-base text-zinc-600">
          Pivot, destek ve direnç seviyelerine göre hazırlanan görünüm tablosu.
        </p>

        <section className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Sembol
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Son
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivot
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 3
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 3
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className={getSatirRenk(xu100Pivot.son, xu100Pivot.pivot)}>
                  <td className="border border-sky-200 px-3 py-2 font-semibold">
                    {xu100Pivot.sembol}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.fark)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.son)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.pivot)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek1)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek2)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek3)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc1)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc2)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc3)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1400px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-sky-100 text-zinc-800">
                <tr>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Sembol
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivota Göre Fark %
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Son
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Pivot
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Destek 3
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 1
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 2
                  </th>
                  <th className="border border-sky-200 px-3 py-2 text-left">
                    Direnç 3
                  </th>
                </tr>
              </thead>

              <tbody>
                {pivotVerileri.map((row) => (
                  <tr
                    key={row.sembol}
                    className={getSatirRenk(row.son, row.pivot)}
                  >
                    <td className="border border-sky-200 px-3 py-2 font-semibold">
                      {row.sembol}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.fark)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.son)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.pivot)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek1)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek2)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek3)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc1)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc2)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc3)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Pivot Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Pivot analizi sayfası, Borsa İstanbul’da işlem gören hisselerin günlük
            pivot, destek ve direnç seviyelerini takip etmek isteyen yatırımcılar
            için hazırlanmıştır. Bu sayfada hisselerin pivot noktasına göre mevcut
            fiyat konumu, destek seviyeleri ve direnç seviyeleri detaylı şekilde
            incelenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Pivot noktaları, teknik analizde gün içi yön tayini ve önemli fiyat
            bölgelerini belirlemek için sık kullanılan göstergeler arasında yer alır.
            Hisselerin pivot seviyesinin üstünde veya altında işlem görmesi,
            yatırımcılar tarafından kısa vadeli trend hakkında önemli bir sinyal
            olarak değerlendirilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Destek ve direnç seviyeleri sayesinde fiyatın hangi bölgelerde tepki
            verebileceği daha net görülebilir. Bu sayfadaki pivot analiz tablosu,
            hem XU100 endeksi hem de hisse bazlı teknik görünüm takibi yapmak
            isteyen kullanıcılar için hızlı ve pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel pivot seviyeleri, destek direnç noktaları, hisse bazlı teknik
            görünüm analizleri ve Borsa İstanbul pivot tablosu için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
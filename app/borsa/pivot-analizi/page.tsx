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
  fark: 0.35,
  son: 14467.25,
  pivot: 14416.230,
  destek1: 14262.560,
  destek2: 14131.280,
  destek3: 13977.610,
  direnc1: 14547.510,
  direnc2: 14701.180,
  direnc3: 14832.460,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.80, son: 19.74, pivot: 19.583, destek1: 19.367, destek2: 19.133, destek3: 18.937, direnc1: 19.797, direnc2: 20.013, direnc3: 20.227, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: 0.93, son: 72.70, pivot: 72.033, destek1: 70.667, destek2: 69.233, destek3: 67.867, direnc1: 73.467, direnc2: 74.833, direnc3: 76.267, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASELS", fark: -1.21, son: 393.75, pivot: 398.583, destek1: 390.167, destek2: 381.833, destek3: 373.417, direnc1: 406.917, direnc2: 415.333, direnc3: 423.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: 1.29, son: 294.00, pivot: 290.250, destek1: 278.250, destek2: 271.250, destek3: 259.250, direnc1: 297.250, direnc2: 309.250, direnc3: 316.250, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "BIMAS", fark: 1.60, son: 434.75, pivot: 427.917, destek1: 424.583, destek2: 419.167, destek3: 415.833, direnc1: 433.333, direnc2: 436.667, direnc3: 442.083, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "DSTKF", fark: 4.12, son: 2525.00, pivot: 2425.000, destek1: 2351.000, destek2: 2292.000, destek3: 2218.000, direnc1: 2484.000, direnc2: 2558.000, direnc3: 2617.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: -1.69, son: 20.92, pivot: 21.280, destek1: 20.200, destek2: 19.600, destek3: 18.520, direnc1: 21.880, direnc2: 22.960, direnc3: 23.560, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ENKAI", fark: 1.60, son: 91.25, pivot: 89.817, destek1: 88.783, destek2: 87.817, destek3: 86.783, direnc1: 90.783, direnc2: 91.817, direnc3: 92.783, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EREGL", fark: 1.11, son: 39.40, pivot: 38.967, destek1: 38.333, destek2: 37.727, destek3: 37.113, direnc1: 39.593, direnc2: 40.207, direnc3: 40.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "FROTO", fark: 0.36, son: 82.85, pivot: 82.550, destek1: 80.800, destek2: 79.700, destek3: 77.950, direnc1: 83.650, direnc2: 85.400, direnc3: 86.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: 0.20, son: 134.20, pivot: 133.933, destek1: 131.767, destek2: 130.133, destek3: 127.967, direnc1: 135.567, direnc2: 137.733, direnc3: 139.367, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: -1.18, son: 502.50, pivot: 508.500, destek1: 491.500, destek2: 478.500, destek3: 461.500, direnc1: 521.500, direnc2: 538.500, direnc3: 551.500, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: 1.18, son: 13.93, pivot: 13.767, destek1: 13.493, destek2: 13.247, destek3: 12.973, direnc1: 14.013, direnc2: 14.287, direnc3: 14.533, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: 0.82, son: 225.50, pivot: 223.667, destek1: 221.933, destek2: 219.567, destek3: 217.833, direnc1: 226.033, direnc2: 227.767, direnc3: 230.133, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: -1.64, son: 46.00, pivot: 46.767, destek1: 45.473, destek2: 44.447, destek3: 43.153, direnc1: 47.793, direnc2: 49.087, direnc3: 50.113, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: 1.73, son: 547.50, pivot: 538.167, destek1: 532.333, destek2: 522.667, destek3: 516.833, direnc1: 547.833, direnc2: 553.667, direnc3: 563.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: -3.09, son: 24.68, pivot: 25.467, destek1: 24.133, destek2: 23.287, destek3: 21.953, direnc1: 26.313, direnc2: 27.647, direnc3: 28.493, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: 0.39, son: 154.20, pivot: 153.600, destek1: 151.400, destek2: 149.500, destek3: 147.300, direnc1: 155.500, direnc2: 157.700, direnc3: 159.600, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: 0.30, son: 95.30, pivot: 95.017, destek1: 93.433, destek2: 92.067, destek3: 90.483, direnc1: 96.383, direnc2: 97.967, direnc3: 99.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 1.92, son: 2.82, pivot: 2.767, destek1: 2.623, destek2: 2.477, destek3: 2.333, direnc1: 2.913, direnc2: 3.057, direnc3: 3.203, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: 1.38, son: 44.98, pivot: 44.367, destek1: 43.473, destek2: 42.887, destek3: 41.993, direnc1: 44.953, direnc2: 45.847, direnc3: 46.433, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TAVHL", fark: -0.12, son: 274.50, pivot: 274.833, destek1: 271.917, destek2: 268.583, destek3: 265.667, direnc1: 278.167, direnc2: 281.083, direnc3: 284.417, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: 2.40, son: 103.70, pivot: 101.267, destek1: 100.333, destek2: 99.067, destek3: 98.133, direnc1: 102.533, direnc2: 103.467, direnc3: 104.733, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "THYAO", fark: 0.06, son: 300.25, pivot: 300.083, destek1: 296.167, destek2: 293.083, destek3: 289.167, direnc1: 303.167, direnc2: 307.083, direnc3: 310.167, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TOASO", fark: 3.33, son: 299.75, pivot: 290.083, destek1: 286.667, destek2: 282.583, destek3: 279.167, direnc1: 294.167, direnc2: 297.583, direnc3: 301.667, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TRALT", fark: 1.10, son: 53.65, pivot: 53.067, destek1: 50.983, destek2: 49.517, destek3: 47.433, direnc1: 54.533, direnc2: 56.617, direnc3: 58.083, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TTKOM", fark: 10.57, son: 60.85, pivot: 55.033, destek1: 54.517, destek2: 53.683, destek3: 53.167, direnc1: 55.867, direnc2: 56.383, direnc3: 57.217, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "TUPRS", fark: -0.74, son: 413.50, pivot: 416.583, destek1: 410.167, destek2: 403.583, destek3: 397.167, direnc1: 423.167, direnc2: 429.583, direnc3: 436.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: 9.07, son: 38.08, pivot: 34.913, destek1: 33.987, destek2: 33.353, destek3: 32.427, direnc1: 35.547, direnc2: 36.473, direnc3: 37.107, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "YKBNK", fark: 1.18, son: 36.70, pivot: 36.273, destek1: 35.647, destek2: 35.093, destek3: 34.467, direnc1: 36.827, direnc2: 37.453, direnc3: 38.007, yorum: "Pivot değerinin üstünde seyrediyor." },
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Son</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 3</th>
                </tr>
              </thead>

              <tbody>
                <tr className={getSatirRenk(xu100Pivot.son, xu100Pivot.pivot)}>
                  <td className="border border-sky-200 px-3 py-2 font-semibold">{xu100Pivot.sembol}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.fark)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.son)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.pivot)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.destek1)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.destek2)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.destek3)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.direnc1)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.direnc2)}</td>
                  <td className="border border-sky-200 px-3 py-2">{formatNumber(xu100Pivot.direnc3)}</td>
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
                  <th className="border border-sky-200 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivota Göre Fark %</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Son</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-sky-200 px-3 py-2 text-left">Direnç 3</th>
                </tr>
              </thead>

              <tbody>
                {pivotVerileri.map((row) => (
                  <tr key={row.sembol} className={getSatirRenk(row.son, row.pivot)}>
                    <td className="border border-sky-200 px-3 py-2 font-semibold">{row.sembol}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.fark)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.son)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.pivot)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek1)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek2)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.destek3)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc1)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc2)}</td>
                    <td className="border border-sky-200 px-3 py-2">{formatNumber(row.direnc3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Pivot Analizi Hakkında</h2>

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
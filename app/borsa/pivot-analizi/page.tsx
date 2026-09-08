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
  fark: 0.77,
  son: 14405.25,
  pivot: 14295.470,
  destek1: 14185.690,
  destek2: 13966.130,
  destek3: 13856.350,
  direnc1: 14515.030,
  direnc2: 14624.810,
  direnc3: 14844.370,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 3.07, son: 19.26, pivot: 18.687, destek1: 18.503, destek2: 18.217, destek3: 18.033, direnc1: 18.973, direnc2: 19.157, direnc3: 19.443, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "AKBNK", fark: 3.17, son: 74.95, pivot: 72.650, destek1: 72.050, destek2: 71.050, destek3: 70.450, direnc1: 73.650, direnc2: 74.250, direnc3: 75.250, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "ASELS", fark: -0.97, son: 390.00, pivot: 393.833, destek1: 388.917, destek2: 385.333, destek3: 380.417, direnc1: 397.417, direnc2: 402.333, direnc3: 405.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -0.08, son: 300.75, pivot: 301.000, destek1: 297.000, destek2: 293.000, destek3: 289.000, direnc1: 305.000, direnc2: 309.000, direnc3: 313.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 0.70, son: 420.50, pivot: 417.583, destek1: 414.667, destek2: 408.833, destek3: 405.917, direnc1: 423.417, direnc2: 426.333, direnc3: 432.167, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 5.53, son: 2460.00, pivot: 2331.000, destek1: 2266.000, destek2: 2142.000, destek3: 2077.000, direnc1: 2455.000, direnc2: 2520.000, direnc3: 2644.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 3.76, son: 20.44, pivot: 19.700, destek1: 19.440, destek2: 18.920, destek3: 18.660, direnc1: 20.220, direnc2: 20.480, direnc3: 21.000, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ENKAI", fark: 1.20, son: 89.65, pivot: 88.583, destek1: 87.917, destek2: 86.833, destek3: 86.167, direnc1: 89.667, direnc2: 90.333, direnc3: 91.417, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: 5.02, son: 39.92, pivot: 38.013, destek1: 37.467, destek2: 36.613, destek3: 36.067, direnc1: 38.867, direnc2: 39.413, direnc3: 40.267, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "FROTO", fark: 4.26, son: 82.80, pivot: 79.417, destek1: 78.633, destek2: 77.617, destek3: 76.833, direnc1: 80.433, direnc2: 81.217, direnc3: 82.233, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "GARAN", fark: 2.56, son: 136.00, pivot: 132.600, destek1: 131.700, destek2: 129.900, destek3: 129.000, direnc1: 134.400, direnc2: 135.300, direnc3: 137.100, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "GUBRF", fark: 3.31, son: 504.00, pivot: 487.833, destek1: 479.167, destek2: 467.083, destek3: 458.417, direnc1: 499.917, direnc2: 508.583, direnc3: 520.667, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: 10.16, son: 14.35, pivot: 13.027, destek1: 12.933, destek2: 12.817, destek3: 12.723, direnc1: 13.143, direnc2: 13.237, direnc3: 13.353, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "KCHOL", fark: 3.01, son: 224.80, pivot: 218.233, destek1: 216.767, destek2: 213.833, destek3: 212.367, direnc1: 221.167, direnc2: 222.633, direnc3: 225.567, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "KRDMD", fark: 2.99, son: 45.98, pivot: 44.647, destek1: 43.933, destek2: 42.667, destek3: 41.953, direnc1: 45.913, direnc2: 46.627, direnc3: 47.893, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "MGROS", fark: 2.24, son: 539.00, pivot: 527.167, destek1: 523.333, destek2: 518.667, destek3: 514.833, direnc1: 531.833, direnc2: 535.667, direnc3: 540.333, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "PETKM", fark: 13.05, son: 24.26, pivot: 21.460, destek1: 20.860, destek2: 19.660, destek3: 19.060, direnc1: 22.660, direnc2: 23.260, direnc3: 24.460, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "PGSUS", fark: 4.32, son: 155.50, pivot: 149.067, destek1: 148.133, destek2: 146.867, destek3: 145.933, direnc1: 150.333, direnc2: 151.267, direnc3: 152.533, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "SAHOL", fark: 3.28, son: 96.50, pivot: 93.433, destek1: 92.817, destek2: 91.583, destek3: 90.967, direnc1: 94.667, direnc2: 95.283, direnc3: 96.517, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "SASA", fark: 13.27, son: 2.76, pivot: 2.4366, destek1: 2.3633, destek2: 2.2166, destek3: 2.1433, direnc1: 2.5833, direnc2: 2.6566, direnc3: 2.8033, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: 11.14, son: 45.82, pivot: 41.227, destek1: 39.473, destek2: 37.287, destek3: 35.533, direnc1: 43.413, direnc2: 45.167, direnc3: 47.353, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TAVHL", fark: 0.82, son: 275.25, pivot: 273.000, destek1: 270.750, destek2: 266.250, destek3: 264.000, direnc1: 277.500, direnc2: 279.750, direnc3: 284.250, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 2.82, son: 101.60, pivot: 98.817, destek1: 97.983, destek2: 96.917, destek3: 96.083, direnc1: 99.883, direnc2: 100.717, direnc3: 101.783, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "THYAO", fark: 3.24, son: 305.00, pivot: 295.417, destek1: 293.583, destek2: 290.417, destek3: 288.583, direnc1: 298.583, direnc2: 300.417, direnc3: 303.583, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "TOASO", fark: 3.06, son: 291.75, pivot: 283.083, destek1: 278.167, destek2: 268.333, destek3: 263.417, direnc1: 292.917, direnc2: 297.833, direnc3: 307.667, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 4.16, son: 53.00, pivot: 50.883, destek1: 50.417, destek2: 49.533, destek3: 49.067, direnc1: 51.767, direnc2: 52.233, direnc3: 53.117, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 1.33, son: 54.50, pivot: 53.783, destek1: 52.917, destek2: 51.333, destek3: 50.467, direnc1: 55.367, direnc2: 56.233, direnc3: 57.817, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: -0.13, son: 394.50, pivot: 395.000, destek1: 388.750, destek2: 383.250, destek3: 377.000, direnc1: 400.500, direnc2: 406.750, direnc3: 412.250, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: 3.06, son: 36.64, pivot: 35.553, destek1: 34.467, destek2: 32.293, destek3: 31.207, direnc1: 37.727, direnc2: 38.813, direnc3: 40.987, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: 1.44, son: 37.62, pivot: 37.087, destek1: 36.533, destek2: 35.487, destek3: 34.953, direnc1: 38.133, direnc2: 38.687, direnc3: 39.753, yorum: "Pivot değerinin üstünde seyrediyor." },
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
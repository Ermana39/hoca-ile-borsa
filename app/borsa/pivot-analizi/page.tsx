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
  fark: -1.81,
  son: 14334.06,
  pivot: 14598.050,
  destek1: 14554.550,
  destek2: 14467.530,
  destek3: 14424.030,
  direnc1: 14685.070,
  direnc2: 14728.570,
  direnc3: 14815.590,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -3.40, son: 17.84, pivot: 18.467, destek1: 18.263, destek2: 18.117, destek3: 17.913, direnc1: 18.613, direnc2: 18.817, direnc3: 18.963, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: -1.62, son: 71.85, pivot: 73.033, destek1: 72.667, destek2: 72.133, destek3: 71.767, direnc1: 73.567, direnc2: 73.933, direnc3: 74.467, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ASELS", fark: -4.79, son: 386.25, pivot: 405.667, destek1: 400.333, destek2: 396.667, destek3: 391.333, direnc1: 409.333, direnc2: 414.667, direnc3: 418.333, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ASTOR", fark: -6.42, son: 325.75, pivot: 348.083, destek1: 342.917, destek2: 336.583, destek3: 331.417, direnc1: 354.417, direnc2: 359.583, direnc3: 365.917, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: -2.23, son: 405.50, pivot: 414.750, destek1: 412.000, destek2: 408.500, destek3: 405.750, direnc1: 418.250, direnc2: 421.000, direnc3: 424.500, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "DSTKF", fark: 5.90, son: 2081.00, pivot: 1965.000, destek1: 1965.000, destek2: 1965.000, destek3: 1965.000, direnc1: 1965.000, direnc2: 1965.000, direnc3: 1965.000, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: -2.34, son: 20.00, pivot: 20.480, destek1: 20.280, destek2: 19.940, destek3: 19.740, direnc1: 20.820, direnc2: 21.020, direnc3: 21.360, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -1.47, son: 87.40, pivot: 88.700, destek1: 87.050, destek2: 85.100, destek3: 83.450, direnc1: 90.650, direnc2: 92.300, direnc3: 94.250, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -0.79, son: 38.78, pivot: 39.087, destek1: 38.653, destek2: 38.147, destek3: 37.713, direnc1: 39.593, direnc2: 40.027, direnc3: 40.533, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -1.91, son: 76.95, pivot: 78.450, destek1: 78.000, destek2: 77.600, destek3: 77.150, direnc1: 78.850, direnc2: 79.300, direnc3: 79.700, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -2.05, son: 130.90, pivot: 133.633, destek1: 132.767, destek2: 131.733, destek3: 130.867, direnc1: 134.667, direnc2: 135.533, direnc3: 136.567, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "GUBRF", fark: -3.31, son: 481.75, pivot: 498.250, destek1: 488.500, destek2: 479.250, destek3: 469.500, direnc1: 507.500, direnc2: 517.250, direnc3: 526.500, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "ISCTR", fark: -1.07, son: 12.64, pivot: 12.777, destek1: 12.713, destek2: 12.637, destek3: 12.573, direnc1: 12.853, direnc2: 12.917, direnc3: 12.993, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "KCHOL", fark: 0.09, son: 214.90, pivot: 214.700, destek1: 212.600, destek2: 211.200, destek3: 209.100, direnc1: 216.100, direnc2: 218.200, direnc3: 219.600, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: 1.27, son: 47.38, pivot: 46.787, destek1: 45.873, destek2: 45.127, destek3: 44.213, direnc1: 47.533, direnc2: 48.447, direnc3: 49.193, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -4.90, son: 533.50, pivot: 561.000, destek1: 554.000, destek2: 550.000, destek3: 543.000, direnc1: 565.000, direnc2: 572.000, direnc3: 576.000, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -0.06, son: 20.06, pivot: 20.073, destek1: 19.867, destek2: 19.693, destek3: 19.487, direnc1: 20.247, direnc2: 20.453, direnc3: 20.627, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: -2.56, son: 147.00, pivot: 150.867, destek1: 150.133, destek2: 149.467, destek3: 148.733, direnc1: 151.533, direnc2: 152.267, direnc3: 152.933, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -0.66, son: 93.20, pivot: 93.817, destek1: 93.283, destek2: 92.917, destek3: 92.383, direnc1: 94.183, direnc2: 94.717, direnc3: 95.083, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SASA", fark: -1.80, son: 2.35, pivot: 2.393, destek1: 2.367, destek2: 2.343, destek3: 2.317, direnc1: 2.417, direnc2: 2.443, direnc3: 2.467, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -1.47, son: 39.62, pivot: 40.213, destek1: 39.947, destek2: 39.753, destek3: 39.487, direnc1: 40.407, direnc2: 40.673, direnc3: 40.867, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -6.74, son: 265.00, pivot: 284.167, destek1: 281.333, destek2: 279.667, destek3: 276.833, direnc1: 285.833, direnc2: 288.667, direnc3: 290.333, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TCELL", fark: -7.96, son: 95.05, pivot: 103.267, destek1: 102.633, destek2: 101.767, destek3: 101.133, direnc1: 104.133, direnc2: 104.767, direnc3: 105.633, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "THYAO", fark: -1.49, son: 302.25, pivot: 306.833, destek1: 305.417, destek2: 303.333, destek3: 301.917, direnc1: 308.917, direnc2: 310.333, direnc3: 312.417, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -0.70, son: 271.25, pivot: 273.167, destek1: 269.833, destek2: 267.667, destek3: 264.333, direnc1: 275.333, direnc2: 278.667, direnc3: 280.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -2.73, son: 52.90, pivot: 54.383, destek1: 52.967, destek2: 51.983, destek3: 50.567, direnc1: 55.367, direnc2: 56.783, direnc3: 57.767, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: -4.31, son: 51.10, pivot: 53.400, destek1: 53.150, destek2: 52.800, destek3: 52.550, direnc1: 53.750, direnc2: 54.000, direnc3: 54.350, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TUPRS", fark: 2.39, son: 400.25, pivot: 390.917, destek1: 385.833, destek2: 375.667, destek3: 370.583, direnc1: 401.083, direnc2: 406.167, direnc3: 416.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -5.23, son: 31.74, pivot: 33.493, destek1: 32.247, destek2: 30.913, destek3: 29.667, direnc1: 34.827, direnc2: 36.073, direnc3: 37.407, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -1.58, son: 36.52, pivot: 37.107, destek1: 36.753, destek2: 36.287, destek3: 35.933, direnc1: 37.573, direnc2: 37.927, direnc3: 38.393, yorum: "İlk destek seviyesinin altına indi." },
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
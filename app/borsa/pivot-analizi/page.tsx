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
  fark: -1.37,
  son: 14229.01,
  pivot: 14426.370,
  destek1: 14189.860,
  destek2: 14045.650,
  destek3: 13809.140,
  direnc1: 14570.580,
  direnc2: 14807.090,
  direnc3: 14951.300,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.35, son: 18.08, pivot: 18.017, destek1: 17.593, destek2: 17.347, destek3: 16.923, direnc1: 18.263, direnc2: 18.687, direnc3: 18.933, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -0.30, son: 71.95, pivot: 72.167, destek1: 70.933, destek2: 70.017, destek3: 68.783, direnc1: 73.083, direnc2: 74.317, direnc3: 75.233, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -2.10, son: 384.50, pivot: 392.750, destek1: 378.750, destek2: 371.250, destek3: 357.250, direnc1: 400.250, direnc2: 414.250, direnc3: 421.750, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -4.78, son: 316.75, pivot: 332.667, destek1: 310.083, destek2: 294.417, destek3: 271.833, direnc1: 348.333, direnc2: 370.917, direnc3: 386.583, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 0.06, son: 408.25, pivot: 408.000, destek1: 399.000, destek2: 392.500, destek3: 383.500, direnc1: 414.500, direnc2: 423.500, direnc3: 430.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 9.46, son: 2190.00, pivot: 2000.667, destek1: 1853.333, destek2: 1625.667, destek3: 1478.333, direnc1: 2228.333, direnc2: 2375.667, direnc3: 2603.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: -2.55, son: 19.75, pivot: 20.267, destek1: 19.653, destek2: 19.307, destek3: 18.693, direnc1: 20.613, direnc2: 21.227, direnc3: 21.573, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ENKAI", fark: 1.02, son: 88.90, pivot: 88.000, destek1: 86.200, destek2: 85.000, destek3: 83.200, direnc1: 89.200, direnc2: 91.000, direnc3: 92.200, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: -3.57, son: 37.78, pivot: 39.180, destek1: 38.260, destek2: 37.740, destek3: 36.820, direnc1: 39.700, direnc2: 40.620, direnc3: 41.140, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -0.11, son: 77.25, pivot: 77.333, destek1: 75.967, destek2: 74.983, destek3: 73.617, direnc1: 78.317, direnc2: 79.683, direnc3: 80.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GARAN", fark: 0.96, son: 132.90, pivot: 131.633, destek1: 129.267, destek2: 127.633, destek3: 125.267, direnc1: 133.267, direnc2: 135.633, direnc3: 137.267, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: -2.53, son: 471.00, pivot: 483.250, destek1: 469.750, destek2: 457.750, destek3: 444.250, direnc1: 495.250, direnc2: 508.750, direnc3: 520.750, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: 0.71, son: 12.75, pivot: 12.660, destek1: 12.520, destek2: 12.400, destek3: 12.260, direnc1: 12.780, direnc2: 12.920, direnc3: 13.040, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: -0.36, son: 214.70, pivot: 215.467, destek1: 213.133, destek2: 211.367, destek3: 209.033, direnc1: 217.233, direnc2: 219.567, direnc3: 221.333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: -6.13, son: 44.40, pivot: 47.300, destek1: 46.640, destek2: 45.900, destek3: 45.240, direnc1: 48.040, direnc2: 48.700, direnc3: 49.440, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "MGROS", fark: -2.37, son: 529.00, pivot: 541.833, destek1: 525.167, destek2: 516.833, destek3: 500.167, direnc1: 550.167, direnc2: 566.833, direnc3: 575.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PETKM", fark: 1.48, son: 20.42, pivot: 20.123, destek1: 19.847, destek2: 19.633, destek3: 19.357, direnc1: 20.337, direnc2: 20.613, direnc3: 20.827, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "PGSUS", fark: 2.84, son: 151.90, pivot: 147.700, destek1: 145.300, destek2: 143.600, destek3: 141.200, direnc1: 149.400, direnc2: 151.800, direnc3: 153.500, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "SAHOL", fark: -0.43, son: 93.20, pivot: 93.600, destek1: 92.100, destek2: 91.000, destek3: 89.500, direnc1: 94.700, direnc2: 96.200, direnc3: 97.300, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: 0.00, son: 2.36, pivot: 2.360, destek1: 2.320, destek2: 2.290, destek3: 2.250, direnc1: 2.390, direnc2: 2.430, direnc3: 2.460, yorum: "Pivot değerine eşit." },
  { sembol: "SISE", fark: -0.65, son: 39.56, pivot: 39.820, destek1: 39.260, destek2: 38.900, destek3: 38.340, direnc1: 40.180, direnc2: 40.740, direnc3: 41.100, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -3.85, son: 260.25, pivot: 270.667, destek1: 259.333, destek2: 253.667, destek3: 242.333, direnc1: 276.333, direnc2: 287.667, direnc3: 293.333, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -0.82, son: 96.55, pivot: 97.350, destek1: 91.200, destek2: 87.350, destek3: 81.200, direnc1: 101.200, direnc2: 107.350, direnc3: 111.200, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -0.69, son: 301.50, pivot: 303.583, destek1: 300.667, destek2: 299.083, destek3: 296.167, direnc1: 305.167, direnc2: 308.083, direnc3: 309.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -1.26, son: 268.00, pivot: 271.417, destek1: 267.833, destek2: 264.417, destek3: 260.833, direnc1: 274.833, direnc2: 278.417, direnc3: 281.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -6.63, son: 49.36, pivot: 52.867, destek1: 52.333, destek2: 51.767, destek3: 51.233, direnc1: 53.433, direnc2: 53.967, direnc3: 54.533, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: -0.67, son: 51.55, pivot: 51.900, destek1: 50.150, destek2: 49.200, destek3: 47.450, direnc1: 52.850, direnc2: 54.600, direnc3: 55.550, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 0.37, son: 402.75, pivot: 401.250, destek1: 396.250, destek2: 392.250, destek3: 387.250, direnc1: 405.250, direnc2: 410.250, direnc3: 414.250, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: 1.12, son: 32.56, pivot: 32.200, destek1: 31.160, destek2: 30.580, destek3: 29.540, direnc1: 32.780, direnc2: 33.820, direnc3: 34.400, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "YKBNK", fark: 0.22, son: 36.82, pivot: 36.740, destek1: 36.080, destek2: 35.640, destek3: 34.980, direnc1: 37.180, direnc2: 37.840, direnc3: 38.280, yorum: "Pivot değerinin üstünde seyrediyor." },
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
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
  fark: -1.57,
  son: 14050.56,
  pivot: 14274.060,
  destek1: 14106.890,
  destek2: 13984.760,
  destek3: 13817.590,
  direnc1: 14396.190,
  direnc2: 14563.360,
  direnc3: 14685.490,
  yorum: "İlk destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -0.39, son: 17.99, pivot: 18.060, destek1: 17.880, destek2: 17.680, destek3: 17.500, direnc1: 18.260, direnc2: 18.440, direnc3: 18.640, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: -1.11, son: 71.50, pivot: 72.300, destek1: 71.000, destek2: 70.050, destek3: 68.750, direnc1: 73.250, direnc2: 74.550, direnc3: 75.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: -1.83, son: 380.75, pivot: 387.833, destek1: 379.167, destek2: 373.833, destek3: 365.167, direnc1: 393.167, direnc2: 401.833, direnc3: 407.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -2.79, son: 316.00, pivot: 325.083, destek1: 307.917, destek2: 299.083, destek3: 281.917, direnc1: 333.917, direnc2: 351.083, direnc3: 359.917, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: -0.06, son: 406.25, pivot: 406.500, destek1: 401.000, destek2: 393.750, destek3: 388.250, direnc1: 413.750, direnc2: 419.250, direnc3: 426.500, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: 6.28, son: 2216.00, pivot: 2085.000, destek1: 1978.000, destek2: 1766.000, destek3: 1659.000, direnc1: 2297.000, direnc2: 2404.000, direnc3: 2616.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 0.47, son: 20.06, pivot: 19.967, destek1: 19.473, destek2: 19.197, destek3: 18.703, direnc1: 20.243, direnc2: 20.737, direnc3: 21.013, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -1.98, son: 86.80, pivot: 88.550, destek1: 87.800, destek2: 86.700, destek3: 85.950, direnc1: 89.650, direnc2: 90.400, direnc3: 91.500, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "EREGL", fark: -1.54, son: 37.60, pivot: 38.187, destek1: 37.273, destek2: 36.767, destek3: 35.853, direnc1: 38.693, direnc2: 39.607, direnc3: 40.113, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -1.82, son: 76.25, pivot: 77.667, destek1: 76.683, destek2: 76.117, destek3: 75.133, direnc1: 78.233, direnc2: 79.217, direnc3: 79.783, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -0.40, son: 132.00, pivot: 132.533, destek1: 131.267, destek2: 129.633, destek3: 128.367, direnc1: 134.167, direnc2: 135.433, direnc3: 137.067, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: 0.39, son: 475.75, pivot: 473.917, destek1: 468.333, destek2: 455.667, destek3: 450.083, direnc1: 481.583, direnc2: 492.167, direnc3: 499.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ISCTR", fark: 0.13, son: 12.78, pivot: 12.763, destek1: 12.637, destek2: 12.523, destek3: 12.397, direnc1: 12.877, direnc2: 13.003, direnc3: 13.117, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KCHOL", fark: -1.90, son: 213.00, pivot: 217.133, destek1: 211.667, destek2: 208.633, destek3: 203.167, direnc1: 220.167, direnc2: 225.633, direnc3: 228.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: -1.63, son: 44.60, pivot: 45.340, destek1: 43.260, destek2: 42.120, destek3: 40.040, direnc1: 46.480, direnc2: 48.560, direnc3: 49.700, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "MGROS", fark: -1.13, son: 525.00, pivot: 531.000, destek1: 524.000, destek2: 519.000, destek3: 512.000, direnc1: 536.000, direnc2: 543.000, direnc3: 548.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PETKM", fark: -2.78, son: 19.95, pivot: 20.520, destek1: 19.980, destek2: 19.540, destek3: 19.000, direnc1: 20.960, direnc2: 21.500, direnc3: 21.940, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: -0.97, son: 149.00, pivot: 150.467, destek1: 148.433, destek2: 144.967, destek3: 142.933, direnc1: 153.933, direnc2: 155.967, direnc3: 159.433, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: -1.53, son: 92.50, pivot: 93.933, destek1: 92.467, destek2: 91.733, destek3: 90.267, direnc1: 94.667, direnc2: 96.133, direnc3: 96.867, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: -3.81, son: 2.27, pivot: 2.360, destek1: 2.330, destek2: 2.300, destek3: 2.270, direnc1: 2.390, direnc2: 2.420, direnc3: 2.450, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -1.59, son: 39.10, pivot: 39.733, destek1: 39.247, destek2: 38.933, destek3: 38.447, direnc1: 40.047, direnc2: 40.533, direnc3: 40.847, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -0.60, son: 261.00, pivot: 262.583, destek1: 254.667, destek2: 249.083, destek3: 241.167, direnc1: 268.167, direnc2: 276.083, direnc3: 281.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: 1.18, son: 97.20, pivot: 96.067, destek1: 95.383, destek2: 94.217, destek3: 93.533, direnc1: 97.233, direnc2: 97.917, direnc3: 99.083, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -3.58, son: 291.50, pivot: 302.333, destek1: 299.167, destek2: 296.833, destek3: 293.667, direnc1: 304.667, direnc2: 307.833, direnc3: 310.167, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -3.55, son: 260.50, pivot: 270.083, destek1: 264.667, destek2: 261.333, destek3: 255.917, direnc1: 273.417, direnc2: 278.833, direnc3: 282.167, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TRALT", fark: -0.22, son: 50.30, pivot: 50.413, destek1: 47.827, destek2: 46.293, destek3: 43.707, direnc1: 51.947, direnc2: 54.533, direnc3: 56.067, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: -1.17, son: 50.80, pivot: 51.400, destek1: 51.000, destek2: 50.450, destek3: 50.050, direnc1: 51.950, direnc2: 52.350, direnc3: 52.900, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TUPRS", fark: -3.55, son: 392.25, pivot: 406.667, destek1: 396.083, destek2: 389.417, destek3: 378.833, direnc1: 413.333, direnc2: 423.917, direnc3: 430.583, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "VAKBN", fark: 5.42, son: 34.08, pivot: 32.327, destek1: 31.933, destek2: 31.307, destek3: 30.913, direnc1: 32.953, direnc2: 33.347, direnc3: 33.973, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "YKBNK", fark: -1.82, son: 36.08, pivot: 36.747, destek1: 36.133, destek2: 35.447, destek3: 34.833, direnc1: 37.433, direnc2: 38.047, direnc3: 38.733, yorum: "İlk destek seviyesinin altına indi." },
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
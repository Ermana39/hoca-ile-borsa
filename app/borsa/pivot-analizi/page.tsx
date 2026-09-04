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
  fark: 0.15,
  son: 14012.42,
  pivot: 13991.650,
  destek1: 13916.590,
  destek2: 13820.750,
  destek3: 13745.690,
  direnc1: 14087.490,
  direnc2: 14162.550,
  direnc3: 14258.390,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.51, son: 18.45, pivot: 18.357, destek1: 18.263, destek2: 18.077, destek3: 17.983, direnc1: 18.543, direnc2: 18.637, direnc3: 18.823, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: -0.09, son: 71.85, pivot: 71.917, destek1: 71.083, destek2: 70.317, destek3: 69.483, direnc1: 72.683, direnc2: 73.517, direnc3: 74.283, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: 0.26, son: 388.25, pivot: 387.250, destek1: 380.750, destek2: 373.250, destek3: 366.750, direnc1: 394.750, direnc2: 401.250, direnc3: 408.750, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: -2.40, son: 295.00, pivot: 302.250, destek1: 284.750, destek2: 276.000, destek3: 258.500, direnc1: 311.000, direnc2: 328.500, direnc3: 337.250, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 0.18, son: 415.75, pivot: 415.000, destek1: 412.250, destek2: 408.750, destek3: 406.000, direnc1: 418.500, direnc2: 421.250, direnc3: 424.750, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 0.93, son: 2320.00, pivot: 2298.667, destek1: 2258.333, destek2: 2196.667, destek3: 2156.333, direnc1: 2360.333, direnc2: 2400.667, direnc3: 2462.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 0.14, son: 19.44, pivot: 19.413, destek1: 19.237, destek2: 19.033, destek3: 18.857, direnc1: 19.617, direnc2: 19.793, direnc3: 19.997, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -0.15, son: 87.25, pivot: 87.383, destek1: 86.567, destek2: 85.883, destek3: 85.067, direnc1: 88.067, direnc2: 88.883, direnc3: 89.567, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: 0.61, son: 37.20, pivot: 36.973, destek1: 36.687, destek2: 36.173, destek3: 35.887, direnc1: 37.487, direnc2: 37.773, direnc3: 38.287, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "FROTO", fark: 0.56, son: 77.20, pivot: 76.767, destek1: 76.133, destek2: 75.067, destek3: 74.433, direnc1: 77.833, direnc2: 78.467, direnc3: 79.533, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: -0.25, son: 131.40, pivot: 131.733, destek1: 130.067, destek2: 128.733, destek3: 127.067, direnc1: 133.067, direnc2: 134.733, direnc3: 136.067, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: -0.42, son: 478.75, pivot: 480.750, destek1: 471.250, destek2: 463.750, destek3: 454.250, direnc1: 488.250, direnc2: 497.750, direnc3: 505.250, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ISCTR", fark: -0.31, son: 13.01, pivot: 13.050, destek1: 12.880, destek2: 12.750, destek3: 12.580, direnc1: 13.180, direnc2: 13.350, direnc3: 13.480, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -0.22, son: 215.10, pivot: 215.567, destek1: 212.433, destek2: 209.767, destek3: 206.633, direnc1: 218.233, direnc2: 221.367, direnc3: 224.033, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: 0.48, son: 43.52, pivot: 43.313, destek1: 43.047, destek2: 42.573, destek3: 42.307, direnc1: 43.787, direnc2: 44.053, direnc3: 44.527, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: 0.76, son: 527.00, pivot: 523.000, destek1: 518.500, destek2: 510.000, destek3: 505.500, direnc1: 531.500, direnc2: 536.000, direnc3: 544.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: -0.10, son: 20.06, pivot: 20.080, destek1: 19.760, destek2: 19.460, destek3: 19.140, direnc1: 20.380, direnc2: 20.700, direnc3: 21.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: 0.07, son: 148.70, pivot: 148.600, destek1: 147.000, destek2: 145.800, destek3: 144.200, direnc1: 149.800, direnc2: 151.400, direnc3: 152.600, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: -0.30, son: 92.60, pivot: 92.883, destek1: 91.467, destek2: 90.333, destek3: 88.917, direnc1: 94.017, direnc2: 95.433, direnc3: 96.567, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: 0.44, son: 2.29, pivot: 2.280, destek1: 2.240, destek2: 2.190, destek3: 2.150, direnc1: 2.330, direnc2: 2.370, direnc3: 2.420, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SISE", fark: 0.38, son: 39.08, pivot: 38.933, destek1: 38.647, destek2: 38.213, destek3: 37.927, direnc1: 39.367, direnc2: 39.653, direnc3: 40.087, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: 0.66, son: 268.25, pivot: 266.500, destek1: 264.000, destek2: 259.750, destek3: 257.250, direnc1: 270.750, direnc2: 273.250, direnc3: 277.500, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 1.01, son: 98.15, pivot: 97.167, destek1: 96.033, destek2: 93.917, destek3: 92.783, direnc1: 99.283, direnc2: 100.417, direnc3: 102.533, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: 0.08, son: 296.00, pivot: 295.750, destek1: 292.500, destek2: 289.000, destek3: 285.750, direnc1: 299.250, direnc2: 302.500, direnc3: 306.000, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TOASO", fark: 1.70, son: 274.25, pivot: 269.667, destek1: 264.333, destek2: 254.417, destek3: 249.083, direnc1: 279.583, direnc2: 284.917, direnc3: 294.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: -1.04, son: 50.80, pivot: 51.333, destek1: 49.917, destek2: 49.033, destek3: 47.617, direnc1: 52.217, direnc2: 53.633, direnc3: 54.517, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: 0.84, son: 51.90, pivot: 51.467, destek1: 51.033, destek2: 50.167, destek3: 49.733, direnc1: 52.333, direnc2: 52.767, direnc3: 53.633, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: 0.09, son: 388.50, pivot: 388.167, destek1: 382.833, destek2: 377.167, destek3: 371.833, direnc1: 393.833, direnc2: 399.167, direnc3: 404.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -0.83, son: 33.62, pivot: 33.900, destek1: 33.260, destek2: 32.900, destek3: 32.260, direnc1: 34.260, direnc2: 34.900, direnc3: 35.260, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -0.04, son: 35.90, pivot: 35.913, destek1: 35.467, destek2: 35.033, destek3: 34.587, direnc1: 36.347, direnc2: 36.793, direnc3: 37.227, yorum: "Pivot değerinin altında seyrediyor." },
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
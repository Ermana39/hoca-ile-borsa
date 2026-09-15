import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { seoAciklamasi } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  title: "BIST Pivot Analizi ve Destek Direnç Seviyeleri",
  description:
    seoAciklamasi("Pivot, destek ve direnç seviyelerine göre hisselerin teknik görünümünü tablo halinde inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/pivot-analizi",
  },
};


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
  fark: -2.65,
  son: 13892.30,
  pivot: 14270.600,
  destek1: 14185.730,
  destek2: 14135.640,
  destek3: 14050.770,
  direnc1: 14320.690,
  direnc2: 14405.560,
  direnc3: 14455.650,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -3.65, son: 18.98, pivot: 19.700, destek1: 19.550, destek2: 19.400, destek3: 19.250, direnc1: 19.850, direnc2: 20.000, direnc3: 20.150, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: -4.18, son: 69.55, pivot: 72.583, destek1: 71.717, destek2: 70.883, destek3: 70.017, direnc1: 73.417, direnc2: 74.283, direnc3: 75.117, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ASELS", fark: -0.29, son: 377.00, pivot: 378.083, destek1: 365.167, destek2: 357.833, destek3: 344.917, direnc1: 385.417, direnc2: 398.333, direnc3: 405.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -4.50, son: 272.25, pivot: 285.083, destek1: 279.417, destek2: 276.333, destek3: 270.667, direnc1: 288.167, direnc2: 293.833, direnc3: 296.917, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: -3.50, son: 415.75, pivot: 430.833, destek1: 426.917, destek2: 424.083, destek3: 420.167, direnc1: 433.667, direnc2: 437.583, direnc3: 440.417, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "DSTKF", fark: 6.33, son: 2720.00, pivot: 2558.000, destek1: 2511.000, destek2: 2417.000, destek3: 2370.000, direnc1: 2652.000, direnc2: 2699.000, direnc3: 2793.000, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: -4.35, son: 19.80, pivot: 20.700, destek1: 20.380, destek2: 20.180, destek3: 19.860, direnc1: 20.900, direnc2: 21.220, direnc3: 21.420, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -4.37, son: 85.80, pivot: 89.717, destek1: 88.383, destek2: 87.467, destek3: 86.133, direnc1: 90.633, direnc2: 91.967, direnc3: 92.883, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "EREGL", fark: -1.95, son: 38.26, pivot: 39.020, destek1: 38.840, destek2: 38.280, destek3: 37.620, direnc1: 39.380, direnc2: 39.900, direnc3: 40.260, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -4.83, son: 78.40, pivot: 82.383, destek1: 81.017, destek2: 80.283, destek3: 78.917, direnc1: 83.117, direnc2: 84.483, direnc3: 85.217, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -4.65, son: 127.80, pivot: 134.033, destek1: 132.867, destek2: 131.833, destek3: 130.667, direnc1: 135.067, direnc2: 136.233, direnc3: 137.267, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "GUBRF", fark: -4.80, son: 461.00, pivot: 484.250, destek1: 471.750, destek2: 464.750, destek3: 452.250, direnc1: 491.250, direnc2: 503.750, direnc3: 510.750, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ISCTR", fark: -3.84, son: 13.36, pivot: 13.893, destek1: 13.737, destek2: 13.633, destek3: 13.477, direnc1: 13.997, direnc2: 14.153, direnc3: 14.257, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "KCHOL", fark: -2.96, son: 218.80, pivot: 225.467, destek1: 223.333, destek2: 221.167, destek3: 219.033, direnc1: 227.633, direnc2: 229.767, direnc3: 231.933, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "KRDMD", fark: -3.17, son: 44.00, pivot: 45.440, destek1: 45.040, destek2: 44.580, destek3: 44.180, direnc1: 45.900, direnc2: 46.300, direnc3: 46.760, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "MGROS", fark: -5.35, son: 513.00, pivot: 542.000, destek1: 535.000, destek2: 531.500, destek3: 524.500, direnc1: 545.500, direnc2: 552.500, direnc3: 556.000, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -6.02, son: 22.68, pivot: 24.133, destek1: 23.107, destek2: 22.553, destek3: 21.527, direnc1: 24.687, direnc2: 25.713, direnc3: 26.267, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: -3.78, son: 150.00, pivot: 155.900, destek1: 151.800, destek2: 147.000, destek3: 142.900, direnc1: 160.700, direnc2: 164.800, direnc3: 169.600, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -5.05, son: 90.30, pivot: 95.100, destek1: 94.050, destek2: 93.150, destek3: 92.100, direnc1: 96.000, direnc2: 97.050, direnc3: 97.950, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "SASA", fark: -3.11, son: 2.80, pivot: 2.890, destek1: 2.820, destek2: 2.700, destek3: 2.630, direnc1: 3.010, direnc2: 3.080, direnc3: 3.200, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -3.50, son: 42.40, pivot: 43.940, destek1: 43.100, destek2: 42.680, destek3: 41.840, direnc1: 44.360, direnc2: 45.200, direnc3: 45.620, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -5.47, son: 254.75, pivot: 269.500, destek1: 266.250, destek2: 264.000, destek3: 260.750, direnc1: 271.750, direnc2: 275.000, direnc3: 277.250, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TCELL", fark: -3.46, son: 99.40, pivot: 102.967, destek1: 101.733, destek2: 101.067, destek3: 99.833, direnc1: 103.633, direnc2: 104.867, direnc3: 105.533, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "THYAO", fark: -4.09, son: 285.25, pivot: 297.417, destek1: 293.333, destek2: 291.167, destek3: 287.083, direnc1: 299.583, direnc2: 303.667, direnc3: 305.833, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -1.42, son: 284.25, pivot: 288.333, destek1: 280.167, destek2: 276.083, destek3: 267.917, direnc1: 292.417, direnc2: 300.583, direnc3: 304.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -3.84, son: 50.45, pivot: 52.467, destek1: 51.733, destek2: 51.217, destek3: 50.483, direnc1: 52.983, direnc2: 53.717, direnc3: 54.233, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: -6.19, son: 54.85, pivot: 58.467, destek1: 56.333, destek2: 55.267, destek3: 53.133, direnc1: 59.533, direnc2: 61.667, direnc3: 62.733, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TUPRS", fark: -0.84, son: 412.50, pivot: 416.000, destek1: 411.500, destek2: 407.250, destek3: 402.750, direnc1: 420.250, direnc2: 424.750, direnc3: 429.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: -6.70, son: 33.88, pivot: 36.313, destek1: 35.127, destek2: 34.513, destek3: 33.327, direnc1: 36.927, direnc2: 38.113, direnc3: 38.727, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -5.28, son: 34.68, pivot: 36.613, destek1: 36.327, destek2: 36.013, destek3: 35.727, direnc1: 36.927, direnc2: 37.213, direnc3: 37.527, yorum: "Üçüncü destek seviyesinin altına indi." },
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
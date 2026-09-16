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
  fark: -6.35,
  son: 13122.58,
  pivot: 14012.280,
  destek1: 13772.320,
  destek2: 13652.350,
  destek3: 13412.390,
  direnc1: 14132.250,
  direnc2: 14372.210,
  direnc3: 14492.180,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -5.78, son: 18.14, pivot: 19.253, destek1: 18.707, destek2: 18.433, destek3: 17.887, direnc1: 19.527, direnc2: 20.073, direnc3: 20.347, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: -7.76, son: 65.20, pivot: 70.683, destek1: 68.367, destek2: 67.183, destek3: 64.867, direnc1: 71.867, direnc2: 74.183, direnc3: 75.367, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ASELS", fark: -3.98, son: 360.00, pivot: 374.917, destek1: 370.333, destek2: 363.667, destek3: 359.083, direnc1: 381.583, direnc2: 386.167, direnc3: 392.833, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "ASTOR", fark: -10.86, son: 245.50, pivot: 275.417, destek1: 267.583, destek2: 262.917, destek3: 255.083, direnc1: 280.083, direnc2: 287.917, direnc3: 292.583, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: -3.10, son: 405.50, pivot: 418.468, destek1: 408.031, destek2: 402.813, destek3: 392.376, direnc1: 423.687, direnc2: 434.124, direnc3: 439.342, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "DSTKF", fark: -8.74, son: 2448.00, pivot: 2682.5, destek1: 2645, destek2: 2570, destek3: 2532.5, direnc1: 2757.5, direnc2: 2795, direnc3: 2870, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "EKGYO", fark: -9.26, son: 18.20, pivot: 20.057, destek1: 19.493, destek2: 19.187, destek3: 18.623, direnc1: 20.363, direnc2: 20.927, direnc3: 21.233, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ENKAI", fark: -5.88, son: 81.95, pivot: 87.067, destek1: 84.533, destek2: 83.267, destek3: 80.733, direnc1: 88.333, direnc2: 90.867, direnc3: 92.133, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "EREGL", fark: -9.91, son: 34.78, pivot: 38.607, destek1: 37.913, destek2: 37.567, destek3: 36.873, direnc1: 38.953, direnc2: 39.647, direnc3: 39.993, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "FROTO", fark: -6.30, son: 74.65, pivot: 79.667, destek1: 77.133, destek2: 75.867, destek3: 73.333, direnc1: 80.933, direnc2: 83.467, direnc3: 84.733, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -6.95, son: 120.90, pivot: 129.933, destek1: 125.667, destek2: 123.533, destek3: 119.267, direnc1: 132.067, direnc2: 136.333, direnc3: 138.467, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "GUBRF", fark: -11.13, son: 415.00, pivot: 467.000, destek1: 454.25, destek2: 444.75, destek3: 434.75, direnc1: 473.75, direnc2: 486.5, direnc3: 493.25, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "ISCTR", fark: -9.77, son: 12.22, pivot: 13.543, destek1: 13.177, destek2: 12.993, destek3: 12.627, direnc1: 13.727, direnc2: 14.093, direnc3: 14.277, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "KCHOL", fark: -6.66, son: 206.50, pivot: 221.233, destek1: 215.567, destek2: 212.333, destek3: 206.667, direnc1: 224.467, direnc2: 230.133, direnc3: 233.367, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "KRDMD", fark: -7.04, son: 41.56, pivot: 44.707, destek1: 43.293, destek2: 42.587, destek3: 41.173, direnc1: 45.413, direnc2: 46.827, direnc3: 47.533, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "MGROS", fark: -4.75, son: 498.00, pivot: 522.833, destek1: 503.167, destek2: 493.333, destek3: 473.667, direnc1: 532.667, direnc2: 552.333, direnc3: 562.167, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "PETKM", fark: -8.89, son: 20.98, pivot: 23.027, destek1: 22.213, destek2: 21.747, destek3: 20.933, direnc1: 23.493, direnc2: 24.307, direnc3: 24.773, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "PGSUS", fark: -4.54, son: 145.20, pivot: 152.1, destek1: 147.600, destek2: 145.200, destek3: 140.700, direnc1: 154.5, direnc2: 159.000, direnc3: 161.4, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "SAHOL", fark: -8.30, son: 84.30, pivot: 91.933, destek1: 88.667, destek2: 87.033, destek3: 83.767, direnc1: 93.567, direnc2: 96.833, direnc3: 98.467, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "SASA", fark: -12.71, son: 2.52, pivot: 2.887, destek1: 2.713, destek2: 2.627, destek3: 2.453, direnc1: 2.973, direnc2: 3.147, direnc3: 3.233, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "SISE", fark: -10.98, son: 38.22, pivot: 42.933, destek1: 41.847, destek2: 41.293, destek3: 40.207, direnc1: 43.487, direnc2: 44.573, direnc3: 45.127, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TAVHL", fark: -2.57, son: 252.50, pivot: 259.167, destek1: 250.333, destek2: 245.917, destek3: 237.083, direnc1: 263.583, direnc2: 272.417, direnc3: 276.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -4.73, son: 95.75, pivot: 100.5, destek1: 98.2, destek2: 97.000, destek3: 94.7, direnc1: 101.7, direnc2: 104.000, direnc3: 105.2, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "THYAO", fark: -5.54, son: 273.00, pivot: 289.000, destek1: 281.5, destek2: 277.75, destek3: 270.25, direnc1: 292.75, direnc2: 300.25, direnc3: 304.000, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: -5.08, son: 272.25, pivot: 286.833, destek1: 281.417, destek2: 278.583, destek3: 273.167, direnc1: 289.667, direnc2: 295.083, direnc3: 297.917, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TRALT", fark: -7.42, son: 47.34, pivot: 51.133, destek1: 49.567, destek2: 48.683, destek3: 47.117, direnc1: 52.017, direnc2: 53.583, direnc3: 54.467, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "TTKOM", fark: -10.89, son: 49.84, pivot: 55.933, destek1: 53.767, destek2: 52.683, destek3: 50.517, direnc1: 57.017, direnc2: 59.183, direnc3: 60.267, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "TUPRS", fark: -2.29, son: 401.75, pivot: 411.167, destek1: 404.083, destek2: 395.667, destek3: 388.583, direnc1: 419.583, direnc2: 426.667, direnc3: 435.083, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "VAKBN", fark: -10.65, son: 30.86, pivot: 34.54, destek1: 33.22, destek2: 32.56, destek3: 31.24, direnc1: 35.2, direnc2: 36.52, direnc3: 37.18, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "YKBNK", fark: -9.20, son: 32.12, pivot: 35.373, destek1: 33.987, destek2: 33.293, destek3: 31.907, direnc1: 36.067, direnc2: 37.453, direnc3: 38.147, yorum: "İkinci destek seviyesinin altına indi." },
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

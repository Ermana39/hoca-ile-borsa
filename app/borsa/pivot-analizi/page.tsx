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
  fark: 1.10,
  son: 14610.92,
  pivot: 14452.35,
  destek1: 14363.00,
  destek2: 14252.58,
  destek3: 14163.23,
  direnc1: 14562.77,
  direnc2: 14652.12,
  direnc3: 14762.54,
  yorum: "İlk direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -0.11, son: 18.90, pivot: 18.92, destek1: 18.68, destek2: 18.51, destek3: 18.27, direnc1: 19.09, direnc2: 19.33, direnc3: 19.50, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "AKBNK", fark: 1.43, son: 73.15, pivot: 72.117, destek1: 71.333, destek2: 70.667, destek3: 69.883, direnc1: 72.783, direnc2: 73.567, direnc3: 74.233, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ASELS", fark: -1.50, son: 398.25, pivot: 404.333, destek1: 395.917, destek2: 388.083, destek3: 379.667, direnc1: 412.167, direnc2: 420.583, direnc3: 428.417, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASTOR", fark: -0.29, son: 338.75, pivot: 339.75, destek1: 333.25, destek2: 327.50, destek3: 321.00, direnc1: 345.50, direnc2: 352.00, direnc3: 357.75, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "BIMAS", fark: 0.80, son: 418.25, pivot: 414.917, destek1: 412.333, destek2: 407.167, destek3: 404.583, direnc1: 420.083, direnc2: 422.667, direnc3: 427.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "DSTKF", fark: 5.68, son: 2425.00, pivot: 2294.667, destek1: 2239.333, destek2: 2128.667, destek3: 2073.333, direnc1: 2405.333, direnc2: 2460.667, direnc3: 2571.333, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "EKGYO", fark: 2.08, son: 20.60, pivot: 20.18, destek1: 19.70, destek2: 19.36, destek3: 18.88, direnc1: 20.52, direnc2: 21.00, direnc3: 21.34, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ENKAI", fark: 5.11, son: 87.75, pivot: 83.483, destek1: 82.917, destek2: 81.883, destek3: 81.317, direnc1: 84.517, direnc2: 85.083, direnc3: 86.117, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "EREGL", fark: 1.24, son: 38.70, pivot: 38.227, destek1: 37.893, destek2: 37.547, destek3: 37.213, direnc1: 38.573, direnc2: 38.907, direnc3: 39.253, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "FROTO", fark: 0.74, son: 79.55, pivot: 78.967, destek1: 77.633, destek2: 76.667, destek3: 75.333, direnc1: 79.933, direnc2: 81.267, direnc3: 82.233, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: 0.55, son: 133.30, pivot: 132.567, destek1: 131.533, destek2: 130.467, destek3: 129.433, direnc1: 133.633, direnc2: 134.667, direnc3: 135.733, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GUBRF", fark: 0.59, son: 484.50, pivot: 481.667, destek1: 471.333, destek2: 462.167, destek3: 451.833, direnc1: 490.833, direnc2: 501.167, direnc3: 510.333, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ISCTR", fark: 3.01, son: 12.91, pivot: 12.533, destek1: 12.407, destek2: 12.333, destek3: 12.207, direnc1: 12.607, direnc2: 12.733, direnc3: 12.807, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "KCHOL", fark: -1.02, son: 214.20, pivot: 216.40, destek1: 213.50, destek2: 209.50, destek3: 206.60, direnc1: 220.40, direnc2: 223.30, direnc3: 227.30, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: 1.30, son: 45.60, pivot: 45.013, destek1: 44.267, destek2: 43.633, destek3: 42.887, direnc1: 45.647, direnc2: 46.393, direnc3: 47.027, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "MGROS", fark: -0.09, son: 558.50, pivot: 559.00, destek1: 550.50, destek2: 545.50, destek3: 537.00, direnc1: 564.00, direnc2: 572.50, direnc3: 577.50, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PETKM", fark: 1.12, son: 20.22, pivot: 19.997, destek1: 19.213, destek2: 18.697, destek3: 17.913, direnc1: 20.513, direnc2: 21.297, direnc3: 21.813, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PGSUS", fark: 2.20, son: 153.30, pivot: 150.00, destek1: 149.20, destek2: 148.30, destek3: 147.50, direnc1: 150.90, direnc2: 151.70, direnc3: 152.60, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "SAHOL", fark: 0.37, son: 93.95, pivot: 93.60, destek1: 92.75, destek2: 92.00, destek3: 91.15, direnc1: 94.35, direnc2: 95.20, direnc3: 95.95, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 1.17, son: 2.34, pivot: 2.313, destek1: 2.287, destek2: 2.263, destek3: 2.237, direnc1: 2.337, direnc2: 2.363, direnc3: 2.387, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: 1.11, son: 40.24, pivot: 39.80, destek1: 39.22, destek2: 38.74, destek3: 38.16, direnc1: 40.28, direnc2: 40.86, direnc3: 41.34, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TAVHL", fark: 0.74, son: 284.25, pivot: 282.167, destek1: 279.083, destek2: 272.917, destek3: 269.833, direnc1: 288.333, direnc2: 291.417, direnc3: 297.583, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TCELL", fark: 0.49, son: 103.50, pivot: 103.00, destek1: 102.20, destek2: 101.70, destek3: 100.90, direnc1: 103.50, direnc2: 104.30, direnc3: 104.80, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: 2.12, son: 308.50, pivot: 302.083, destek1: 299.917, destek2: 297.333, destek3: 295.167, direnc1: 304.667, direnc2: 306.833, direnc3: 309.417, yorum: "İkinci direnç seviyesinin üstüne çıktı." },
  { sembol: "TOASO", fark: 0.21, son: 275.25, pivot: 274.667, destek1: 270.833, destek2: 266.667, destek3: 262.833, direnc1: 278.833, direnc2: 282.667, direnc3: 286.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 0.46, son: 54.45, pivot: 54.20, destek1: 52.00, destek2: 50.50, destek3: 48.30, direnc1: 55.70, direnc2: 57.90, direnc3: 59.40, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TTKOM", fark: 1.16, son: 53.85, pivot: 53.233, destek1: 52.767, destek2: 52.233, destek3: 51.767, direnc1: 53.767, direnc2: 54.233, direnc3: 54.767, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TUPRS", fark: -0.83, son: 380.00, pivot: 383.167, destek1: 364.333, destek2: 354.917, destek3: 336.083, direnc1: 392.583, direnc2: 411.417, direnc3: 420.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "VAKBN", fark: 1.88, son: 32.10, pivot: 31.507, destek1: 31.173, destek2: 30.847, destek3: 30.513, direnc1: 31.833, direnc2: 32.167, direnc3: 32.493, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "YKBNK", fark: 1.24, son: 37.08, pivot: 36.627, destek1: 36.373, destek2: 36.087, destek3: 35.833, direnc1: 36.913, direnc2: 37.167, direnc3: 37.453, yorum: "İlk direnç seviyesinin üstüne çıktı." },
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
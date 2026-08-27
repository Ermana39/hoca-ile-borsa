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
  fark: -0.30,
  son: 14575.51,
  pivot: 14618.870,
  destek1: 14507.530,
  destek2: 14404.150,
  destek3: 14292.810,
  direnc1: 14722.250,
  direnc2: 14833.590,
  direnc3: 14936.970,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: -2.25, son: 18.53, pivot: 18.957, destek1: 18.773, destek2: 18.647, destek3: 18.463, direnc1: 19.083, direnc2: 19.267, direnc3: 19.393, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "AKBNK", fark: -0.84, son: 72.85, pivot: 73.467, destek1: 72.083, destek2: 71.017, destek3: 69.633, direnc1: 74.533, direnc2: 75.917, direnc3: 76.983, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ASELS", fark: 0.98, son: 403.75, pivot: 399.833, destek1: 394.417, destek2: 390.583, destek3: 385.167, direnc1: 403.667, direnc2: 409.083, direnc3: 412.917, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "ASTOR", fark: 1.90, son: 349.00, pivot: 342.500, destek1: 335.000, destek2: 331.250, destek3: 323.750, direnc1: 346.250, direnc2: 353.750, direnc3: 357.500, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "BIMAS", fark: -1.06, son: 413.75, pivot: 418.167, destek1: 413.583, destek2: 408.917, destek3: 404.333, direnc1: 422.833, direnc2: 427.417, direnc3: 432.083, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "DSTKF", fark: -9.47, son: 2183.00, pivot: 2411.333, destek1: 2368.667, destek2: 2312.333, destek3: 2269.667, direnc1: 2467.667, direnc2: 2510.333, direnc3: 2566.667, yorum: "Üçüncü destek seviyesinin altına indi." },
  { sembol: "EKGYO", fark: -0.45, son: 20.52, pivot: 20.613, destek1: 20.147, destek2: 19.693, destek3: 19.227, direnc1: 21.067, direnc2: 21.533, direnc3: 21.987, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "ENKAI", fark: 0.54, son: 87.45, pivot: 86.983, destek1: 84.717, destek2: 81.683, destek3: 79.417, direnc1: 90.017, direnc2: 92.283, direnc3: 95.317, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EREGL", fark: -0.41, son: 38.60, pivot: 38.760, destek1: 38.200, destek2: 37.700, destek3: 37.140, direnc1: 39.260, direnc2: 39.820, direnc3: 40.320, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: -1.61, son: 78.45, pivot: 79.733, destek1: 78.567, destek2: 77.583, destek3: 76.417, direnc1: 80.717, direnc2: 81.883, direnc3: 82.867, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "GARAN", fark: -1.16, son: 133.00, pivot: 134.567, destek1: 131.833, destek2: 130.367, destek3: 127.633, direnc1: 136.033, direnc2: 138.767, direnc3: 140.233, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: 0.86, son: 488.00, pivot: 483.833, destek1: 479.417, destek2: 474.333, destek3: 469.917, direnc1: 488.917, direnc2: 493.333, direnc3: 498.417, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ISCTR", fark: -1.49, son: 12.75, pivot: 12.943, destek1: 12.497, destek2: 12.083, destek3: 11.637, direnc1: 13.357, direnc2: 13.803, direnc3: 14.217, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: -0.93, son: 214.20, pivot: 216.200, destek1: 212.200, destek2: 210.200, destek3: 206.200, direnc1: 218.200, direnc2: 222.200, direnc3: 224.200, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KRDMD", fark: 2.27, son: 46.56, pivot: 45.527, destek1: 44.853, destek2: 44.107, destek3: 43.433, direnc1: 46.273, direnc2: 46.947, direnc3: 47.693, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "MGROS", fark: 0.60, son: 563.00, pivot: 559.667, destek1: 553.833, destek2: 549.167, destek3: 543.333, direnc1: 564.333, direnc2: 570.167, direnc3: 574.833, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "PETKM", fark: -0.59, son: 19.88, pivot: 19.997, destek1: 19.733, destek2: 19.247, destek3: 18.983, direnc1: 20.483, direnc2: 20.747, direnc3: 21.233, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: -0.42, son: 151.50, pivot: 152.133, destek1: 149.867, destek2: 148.233, destek3: 145.967, direnc1: 153.767, direnc2: 156.033, direnc3: 157.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SAHOL", fark: -1.02, son: 93.75, pivot: 94.717, destek1: 92.933, destek2: 91.917, destek3: 90.133, direnc1: 95.733, direnc2: 97.517, direnc3: 98.533, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "SASA", fark: 1.58, son: 2.38, pivot: 2.343, destek1: 2.317, destek2: 2.293, destek3: 2.267, direnc1: 2.367, direnc2: 2.393, direnc3: 2.417, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: -0.69, son: 40.04, pivot: 40.320, destek1: 39.780, destek2: 39.320, destek3: 38.780, direnc1: 40.780, direnc2: 41.320, direnc3: 41.780, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -1.37, son: 283.00, pivot: 286.917, destek1: 280.833, destek2: 277.417, destek3: 271.333, direnc1: 290.333, direnc2: 296.417, direnc3: 299.833, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TCELL", fark: -0.96, son: 102.80, pivot: 103.800, destek1: 102.500, destek2: 101.500, destek3: 100.200, direnc1: 104.800, direnc2: 106.100, direnc3: 107.100, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "THYAO", fark: -0.43, son: 307.25, pivot: 308.583, destek1: 304.667, destek2: 300.833, destek3: 296.917, direnc1: 312.417, direnc2: 316.333, direnc3: 320.167, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TOASO", fark: -1.00, son: 273.50, pivot: 276.250, destek1: 272.000, destek2: 268.750, destek3: 264.500, direnc1: 279.500, direnc2: 283.750, direnc3: 287.000, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TRALT", fark: -0.24, son: 54.30, pivot: 54.433, destek1: 53.417, destek2: 52.383, destek3: 51.367, direnc1: 55.467, direnc2: 56.483, direnc3: 57.517, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TTKOM", fark: -0.74, son: 53.45, pivot: 53.850, destek1: 53.250, destek2: 52.650, destek3: 52.050, direnc1: 54.450, direnc2: 55.050, direnc3: 55.650, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TUPRS", fark: 1.15, son: 380.75, pivot: 376.417, destek1: 370.083, destek2: 360.167, destek3: 353.833, direnc1: 386.333, direnc2: 392.667, direnc3: 402.583, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "VAKBN", fark: -0.74, son: 32.20, pivot: 32.440, destek1: 31.660, destek2: 31.220, destek3: 30.440, direnc1: 32.880, direnc2: 33.660, direnc3: 34.100, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -1.21, son: 36.86, pivot: 37.313, destek1: 36.607, destek2: 36.133, destek3: 35.427, direnc1: 37.787, direnc2: 38.493, direnc3: 38.967, yorum: "Pivot değerinin altında seyrediyor." },
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
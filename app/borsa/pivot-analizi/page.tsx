import Link from "next/link";

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

const guncellemeTarihi = "16.04.2026";

const bist100Pivot = {
  sembol: "BIST100",
  fark: 0.24,
  son: 14253.05,
  pivot: 14218.92,
  destek1: 14081.67,
  destek2: 13961.09,
  destek3: 13823.84,
  direnc1: 14339.5,
  direnc2: 14476.75,
  direnc3: 14597.33,
};

const pivotVerileri: PivotRow[] = [
  { sembol: "AEFES", fark: 0.37, son: 18.82, pivot: 18.75, destek1: 18.52, destek2: 18.14, destek3: 17.91, direnc1: 19.13, direnc2: 19.36, direnc3: 19.74, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "AKBNK", fark: 0.0, son: 78.9, pivot: 78.9, destek1: 76.7, destek2: 74.95, destek3: 72.75, direnc1: 80.65, direnc2: 82.85, direnc3: 84.6, yorum: "Pivot değerine eşit." },
  { sembol: "ASELS", fark: 0.38, son: 416.75, pivot: 415.167, destek1: 405.083, destek2: 398.417, destek3: 388.333, direnc1: 421.833, direnc2: 431.917, direnc3: 438.583, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ASTOR", fark: -4.29, son: 195.0, pivot: 203.733, destek1: 200.167, destek2: 196.633, destek3: 193.067, direnc1: 207.267, direnc2: 210.833, direnc3: 214.367, yorum: "İkinci destek seviyesinin altına indi." },
  { sembol: "BIMAS", fark: 0.0, son: 753.0, pivot: 753.0, destek1: 742.5, destek2: 733.0, destek3: 722.5, direnc1: 762.5, direnc2: 773.0, direnc3: 782.5, yorum: "Pivot değerine eşit." },
  { sembol: "DSTKF", fark: 1.53, son: 2130.0, pivot: 2098.0, destek1: 2074.0, destek2: 2033.0, destek3: 2009.0, direnc1: 2139.0, direnc2: 2163.0, direnc3: 2204.0, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "EKGYO", fark: 0.03, son: 21.2, pivot: 21.193, destek1: 20.867, destek2: 20.573, destek3: 20.247, direnc1: 21.487, direnc2: 21.813, direnc3: 22.107, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "ENKAI", fark: -0.48, son: 104.2, pivot: 104.7, destek1: 101.4, destek2: 98.2, destek3: 94.9, direnc1: 107.9, direnc2: 111.2, direnc3: 114.4, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "EREGL", fark: -0.19, son: 31.64, pivot: 31.7, destek1: 30.96, destek2: 30.46, destek3: 29.72, direnc1: 32.2, direnc2: 32.94, direnc3: 33.44, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "FROTO", fark: 0.82, son: 106.8, pivot: 105.933, destek1: 104.267, destek2: 102.433, destek3: 100.767, direnc1: 107.767, direnc2: 109.433, direnc3: 111.267, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "GARAN", fark: -1.37, son: 138.8, pivot: 140.733, destek1: 137.267, destek2: 134.533, destek3: 131.067, direnc1: 143.467, direnc2: 146.933, direnc3: 149.667, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "GUBRF", fark: 8.21, son: 529.5, pivot: 489.333, destek1: 484.417, destek2: 476.333, destek3: 471.417, direnc1: 497.417, direnc2: 502.333, direnc3: 510.417, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "ISCTR", fark: -0.68, son: 14.55, pivot: 14.65, destek1: 14.18, destek2: 13.81, destek3: 13.34, direnc1: 15.02, direnc2: 15.49, direnc3: 15.86, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "KCHOL", fark: 0.27, son: 207.8, pivot: 207.233, destek1: 205.067, destek2: 203.833, destek3: 201.667, direnc1: 208.467, direnc2: 210.633, direnc3: 211.867, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "KRDMD", fark: 1.79, son: 36.46, pivot: 35.82, destek1: 34.8, destek2: 34.2, destek3: 33.18, direnc1: 36.42, direnc2: 37.44, direnc3: 38.04, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "MGROS", fark: 0.84, son: 656.5, pivot: 651.0, destek1: 644.0, destek2: 639.0, destek3: 632.0, direnc1: 656.0, direnc2: 663.0, direnc3: 668.0, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "PETKM", fark: -0.45, son: 22.0, pivot: 22.1, destek1: 21.76, destek2: 21.46, destek3: 21.12, direnc1: 22.4, direnc2: 22.74, direnc3: 23.04, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "PGSUS", fark: 0.62, son: 188.3, pivot: 187.133, destek1: 185.467, destek2: 183.833, destek3: 182.167, direnc1: 188.767, direnc2: 190.433, direnc3: 192.067, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SAHOL", fark: 0.02, son: 100.6, pivot: 100.583, destek1: 99.267, destek2: 98.033, destek3: 96.717, direnc1: 101.817, direnc2: 103.133, direnc3: 104.367, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "SASA", fark: 11.44, son: 2.99, pivot: 2.683, destek1: 2.627, destek2: 2.533, destek3: 2.477, direnc1: 2.777, direnc2: 2.833, direnc3: 2.927, yorum: "Üçüncü direnç seviyesinin üstüne çıktı." },
  { sembol: "SISE", fark: -0.21, son: 48.22, pivot: 48.32, destek1: 47.56, destek2: 47.04, destek3: 46.28, direnc1: 48.84, direnc2: 49.6, direnc3: 50.12, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "TAVHL", fark: -2.67, son: 321.5, pivot: 330.333, destek1: 325.667, destek2: 321.083, destek3: 316.417, direnc1: 334.917, direnc2: 339.583, direnc3: 344.167, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TCELL", fark: 0.2, son: 117.1, pivot: 116.867, destek1: 115.233, destek2: 114.167, destek3: 112.533, direnc1: 117.933, direnc2: 119.567, direnc3: 120.633, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "THYAO", fark: -1.26, son: 319.25, pivot: 323.333, destek1: 320.167, destek2: 316.333, destek3: 313.167, direnc1: 327.167, direnc2: 330.333, direnc3: 334.167, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "TOASO", fark: 1.18, son: 299.0, pivot: 295.5, destek1: 289.0, destek2: 280.0, destek3: 273.5, direnc1: 304.5, direnc2: 311.0, direnc3: 320.0, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TRALT", fark: 5.32, son: 47.48, pivot: 45.08, destek1: 43.74, destek2: 41.78, destek3: 40.44, direnc1: 47.04, direnc2: 48.38, direnc3: 50.34, yorum: "İlk direnç seviyesinin üstüne çıktı." },
  { sembol: "TTKOM", fark: 0.08, son: 62.95, pivot: 62.9, destek1: 62.05, destek2: 61.4, destek3: 60.55, direnc1: 63.55, direnc2: 64.4, direnc3: 65.05, yorum: "Pivot değerinin üstünde seyrediyor." },
  { sembol: "TUPRS", fark: -2.12, son: 261.25, pivot: 266.917, destek1: 261.333, destek2: 255.167, destek3: 249.583, direnc1: 273.083, direnc2: 278.667, direnc3: 284.833, yorum: "İlk destek seviyesinin altına indi." },
  { sembol: "VAKBN", fark: -0.79, son: 34.12, pivot: 34.393, destek1: 33.627, destek2: 32.993, destek3: 32.227, direnc1: 35.027, direnc2: 35.793, direnc3: 36.427, yorum: "Pivot değerinin altında seyrediyor." },
  { sembol: "YKBNK", fark: -1.16, son: 37.58, pivot: 38.02, destek1: 36.78, destek2: 35.88, destek3: 34.64, direnc1: 38.92, direnc2: 40.16, direnc3: 41.06, yorum: "Pivot değerinin altında seyrediyor." },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function formatNumber(value: number) {
  const hasDecimal = !Number.isInteger(value);
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 3,
  }).format(value);
}

function getDurumClass(yorum: string) {
  if (
    yorum.includes("üstünde seyrediyor") ||
    yorum.includes("İlk direnç seviyesinin üstüne çıktı") ||
    yorum.includes("Üçüncü direnç seviyesinin üstüne çıktı")
  ) {
    return "bg-green-600 text-white";
  }

  if (yorum.includes("eşit")) {
    return "bg-zinc-500 text-white";
  }

  return "bg-red-600 text-white";
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
        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid gap-px bg-zinc-200 md:grid-cols-8">
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">PIVOT</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.pivot)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Destek 1</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.destek1)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Destek 2</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.destek2)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Destek 3</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.destek3)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Pivota Göre Fark %</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.fark)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Direnç 1</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.direnc1)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Direnç 2</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.direnc2)}</div>
            </div>
            <div className="bg-zinc-900 px-4 py-3 text-white">
              <div className="text-xs text-zinc-300">Direnç 3</div>
              <div className="text-xl font-bold">{formatNumber(bist100Pivot.direnc3)}</div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1480px] w-full border-collapse text-sm text-zinc-900">
              <thead className="bg-zinc-900 text-white">
                <tr>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Sembol</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Pivota Göre Fark %</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Son</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Pivot</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Destek 1</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Destek 2</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Destek 3</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 1</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 2</th>
                  <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 3</th>
                </tr>
              </thead>

              <tbody>
                {pivotVerileri.map((row) => (
                  <tr key={`${row.sembol}-values`} className="bg-zinc-50">
                    <td className="border border-zinc-200 px-3 py-2 font-semibold">{row.sembol}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.fark)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.son)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.pivot)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.destek1)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.destek2)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.destek3)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.direnc1)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.direnc2)}</td>
                    <td className="border border-zinc-200 px-3 py-2">{formatNumber(row.direnc3)}</td>
                  </tr>
                ))}
                {pivotVerileri.map((row) => (
                  <tr key={`${row.sembol}-yorum`}>
                    <td
                      colSpan={10}
                      className={`px-3 py-2 text-center text-sm font-semibold ${getDurumClass(
                        row.yorum
                      )}`}
                    >
                      {row.yorum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Pivot Analizi Hakkında
          </h2>

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
            hem BIST 100 endeksi hem de hisse bazlı teknik görünüm takibi yapmak
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
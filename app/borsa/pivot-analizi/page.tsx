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

const guncellemeTarihi = "21.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 1.75,
  son: 14459.18,
  pivot: 14343.48,
  destek1: 14277.88,
  destek2: 14146.7,
  destek3: 14081.1,
  direnc1: 14474.66,
  direnc2: 14540.26,
  direnc3: 14671.44,
  yorum: "İkinci direnç seviyesinin üstüne çıktı.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.21,
    son: 19.24,
    pivot: 19.01,
    destek1: 18.76,
    destek2: 18.41,
    destek3: 18.16,
    direnc1: 19.36,
    direnc2: 19.61,
    direnc3: 19.96,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.66,
    son: 77.7,
    pivot: 78.217,
    destek1: 77.283,
    destek2: 76.667,
    destek3: 75.733,
    direnc1: 78.833,
    direnc2: 79.767,
    direnc3: 80.383,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: 4.91,
    son: 415,
    pivot: 395.583,
    destek1: 386.667,
    destek2: 381.333,
    destek3: 372.417,
    direnc1: 400.917,
    direnc2: 409.833,
    direnc3: 415.167,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ASTOR",
    fark: 11.49,
    son: 243.6,
    pivot: 218.5,
    destek1: 212,
    destek2: 202.5,
    destek3: 196,
    direnc1: 228,
    direnc2: 234.5,
    direnc3: 244,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: -0.48,
    son: 752.5,
    pivot: 756.167,
    destek1: 750.833,
    destek2: 741.667,
    destek3: 736.333,
    direnc1: 765.333,
    direnc2: 770.667,
    direnc3: 779.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "DSTKF",
    fark: 8.7,
    son: 2810,
    pivot: 2585,
    destek1: 2537.5,
    destek2: 2442.5,
    destek3: 2395,
    direnc1: 2680,
    direnc2: 2727.5,
    direnc3: 2822.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.66,
    son: 21,
    pivot: 21.14,
    destek1: 20.88,
    destek2: 20.58,
    destek3: 20.32,
    direnc1: 21.44,
    direnc2: 21.7,
    direnc3: 22,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.44,
    son: 106.3,
    pivot: 106.767,
    destek1: 105.333,
    destek2: 104.167,
    destek3: 102.733,
    direnc1: 107.933,
    direnc2: 109.367,
    direnc3: 110.533,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 2.59,
    son: 33.6,
    pivot: 32.753,
    destek1: 32.447,
    destek2: 31.893,
    destek3: 31.587,
    direnc1: 33.307,
    direnc2: 33.613,
    direnc3: 34.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -1.47,
    son: 102.6,
    pivot: 104.133,
    destek1: 102.467,
    destek2: 100.433,
    destek3: 98.767,
    direnc1: 106.167,
    direnc2: 107.833,
    direnc3: 109.867,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: -1.01,
    son: 136.7,
    pivot: 138.1,
    destek1: 136.3,
    destek2: 134.6,
    destek3: 132.8,
    direnc1: 139.8,
    direnc2: 141.6,
    direnc3: 143.3,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GUBRF",
    fark: 3.62,
    son: 544.5,
    pivot: 525.5,
    destek1: 518,
    destek2: 503,
    destek3: 495.5,
    direnc1: 540.5,
    direnc2: 548,
    direnc3: 563,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "ISCTR",
    fark: -1.43,
    son: 14.31,
    pivot: 14.517,
    destek1: 14.283,
    destek2: 14.117,
    destek3: 13.883,
    direnc1: 14.683,
    direnc2: 14.917,
    direnc3: 15.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KCHOL",
    fark: -0.15,
    son: 205,
    pivot: 205.3,
    destek1: 203.6,
    destek2: 200.2,
    destek3: 198.5,
    direnc1: 208.7,
    direnc2: 210.4,
    direnc3: 213.8,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 1.12,
    son: 36.9,
    pivot: 36.493,
    destek1: 36.107,
    destek2: 35.353,
    destek3: 34.967,
    direnc1: 37.247,
    direnc2: 37.633,
    direnc3: 38.387,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -1.07,
    son: 634,
    pivot: 640.833,
    destek1: 626.167,
    destek2: 613.833,
    destek3: 599.167,
    direnc1: 653.167,
    direnc2: 667.833,
    direnc3: 680.167,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 2.36,
    son: 23.74,
    pivot: 23.193,
    destek1: 22.847,
    destek2: 22.533,
    destek3: 22.187,
    direnc1: 23.507,
    direnc2: 23.853,
    direnc3: 24.167,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -1.43,
    son: 186,
    pivot: 188.7,
    destek1: 187,
    destek2: 184.9,
    destek3: 183.2,
    direnc1: 190.8,
    direnc2: 192.5,
    direnc3: 194.6,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -0.37,
    son: 98.15,
    pivot: 98.517,
    destek1: 97.683,
    destek2: 96.567,
    destek3: 95.733,
    direnc1: 99.633,
    direnc2: 100.467,
    direnc3: 101.583,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: 6.97,
    son: 3.33,
    pivot: 3.113,
    destek1: 3.027,
    destek2: 2.893,
    destek3: 2.807,
    direnc1: 3.247,
    direnc2: 3.333,
    direnc3: 3.467,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "SISE",
    fark: -1.2,
    son: 47.2,
    pivot: 47.773,
    destek1: 47.307,
    destek2: 46.733,
    destek3: 46.267,
    direnc1: 48.347,
    direnc2: 48.813,
    direnc3: 49.387,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -1.74,
    son: 302,
    pivot: 307.333,
    destek1: 302.667,
    destek2: 297.083,
    destek3: 292.417,
    direnc1: 312.917,
    direnc2: 317.583,
    direnc3: 323.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 2.52,
    son: 116.6,
    pivot: 113.733,
    destek1: 112.567,
    destek2: 110.833,
    destek3: 109.667,
    direnc1: 115.467,
    direnc2: 116.633,
    direnc3: 118.367,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "THYAO",
    fark: -0.9,
    son: 320.5,
    pivot: 323.417,
    destek1: 320.583,
    destek2: 316.167,
    destek3: 313.333,
    direnc1: 327.833,
    direnc2: 330.667,
    direnc3: 335.083,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: 0.82,
    son: 297,
    pivot: 294.583,
    destek1: 289.417,
    destek2: 283.333,
    destek3: 278.167,
    direnc1: 300.667,
    direnc2: 305.833,
    direnc3: 311.917,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -2.02,
    son: 45.7,
    pivot: 46.64,
    destek1: 45.88,
    destek2: 45.12,
    destek3: 44.36,
    direnc1: 47.4,
    direnc2: 48.16,
    direnc3: 48.92,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: 0.73,
    son: 64.3,
    pivot: 63.833,
    destek1: 63.117,
    destek2: 61.983,
    destek3: 61.267,
    direnc1: 64.967,
    direnc2: 65.683,
    direnc3: 66.817,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 1.8,
    son: 274,
    pivot: 269.167,
    destek1: 265.833,
    destek2: 262.667,
    destek3: 259.333,
    direnc1: 272.333,
    direnc2: 275.667,
    direnc3: 278.833,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -0.98,
    son: 32.92,
    pivot: 33.247,
    destek1: 33.013,
    destek2: 32.547,
    destek3: 32.313,
    direnc1: 33.713,
    direnc2: 33.947,
    direnc3: 34.413,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: 0.13,
    son: 37.6,
    pivot: 37.553,
    destek1: 37.227,
    destek2: 36.813,
    destek3: 36.487,
    direnc1: 37.967,
    direnc2: 38.293,
    direnc3: 38.707,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
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
        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

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
                  <td className="border border-sky-200 px-3 py-2 font-semibold">
                    {xu100Pivot.sembol}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.fark)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.son)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.pivot)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek1)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek2)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.destek3)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc1)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc2)}
                  </td>
                  <td className="border border-sky-200 px-3 py-2">
                    {formatNumber(xu100Pivot.direnc3)}
                  </td>
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
                  <tr
                    key={row.sembol}
                    className={getSatirRenk(row.son, row.pivot)}
                  >
                    <td className="border border-sky-200 px-3 py-2 font-semibold">
                      {row.sembol}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.fark)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.son)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.pivot)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek1)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek2)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.destek3)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc1)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc2)}
                    </td>
                    <td className="border border-sky-200 px-3 py-2">
                      {formatNumber(row.direnc3)}
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
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

const guncellemeTarihi = "27.04.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: 0.68,
  son: 14442.09,
  pivot: 14344.55,
  destek1: 14212.89,
  destek2: 14114.6,
  destek3: 13982.94,
  direnc1: 14442.84,
  direnc2: 14574.5,
  direnc3: 14672.79,
  yorum: "Pivot değerinin üstünde seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: 1.44,
    son: 18.98,
    pivot: 18.71,
    destek1: 18.31,
    destek2: 18.01,
    destek3: 17.61,
    direnc1: 19.01,
    direnc2: 19.41,
    direnc3: 19.71,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -2.07,
    son: 73.2,
    pivot: 74.75,
    destek1: 72.6,
    destek2: 71.5,
    destek3: 69.35,
    direnc1: 75.85,
    direnc2: 78,
    direnc3: 79.1,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASELS",
    fark: -1.14,
    son: 420.25,
    pivot: 425.083,
    destek1: 415.917,
    destek2: 406.333,
    destek3: 397.167,
    direnc1: 434.667,
    direnc2: 443.833,
    direnc3: 453.417,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: 9.23,
    son: 284,
    pivot: 260,
    destek1: 256,
    destek2: 248,
    destek3: 244,
    direnc1: 268,
    direnc2: 272,
    direnc3: 280,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "BIMAS",
    fark: 1.69,
    son: 741.5,
    pivot: 729.167,
    destek1: 719.333,
    destek2: 711.667,
    destek3: 701.833,
    direnc1: 736.833,
    direnc2: 746.667,
    direnc3: 754.333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "DSTKF",
    fark: 3.64,
    son: 2730,
    pivot: 2634.1666,
    destek1: 2488.3333,
    destek2: 2404.1666,
    destek3: 2258.3333,
    direnc1: 2718.3333,
    direnc2: 2864.1666,
    direnc3: 2948.3333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: 0.82,
    son: 20.58,
    pivot: 20.413,
    destek1: 19.827,
    destek2: 19.473,
    destek3: 18.887,
    direnc1: 20.767,
    direnc2: 21.353,
    direnc3: 21.707,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -0.57,
    son: 104.6,
    pivot: 105.2,
    destek1: 103.7,
    destek2: 102.5,
    destek3: 101,
    direnc1: 106.4,
    direnc2: 107.9,
    direnc3: 109.1,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: 4.03,
    son: 35.12,
    pivot: 33.76,
    destek1: 33.2,
    destek2: 32.68,
    destek3: 32.12,
    direnc1: 34.28,
    direnc2: 34.84,
    direnc3: 35.36,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "FROTO",
    fark: -0.88,
    son: 98,
    pivot: 98.867,
    destek1: 97.233,
    destek2: 96.417,
    destek3: 94.783,
    direnc1: 99.683,
    direnc2: 101.317,
    direnc3: 102.133,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "GARAN",
    fark: 0,
    son: 133.8,
    pivot: 133.8,
    destek1: 131.2,
    destek2: 129.7,
    destek3: 127.1,
    direnc1: 135.3,
    direnc2: 137.9,
    direnc3: 139.4,
    yorum: "Pivot değerine eşit.",
  },
  {
    sembol: "GUBRF",
    fark: 0.16,
    son: 530.5,
    pivot: 529.667,
    destek1: 522.333,
    destek2: 516.667,
    destek3: 509.333,
    direnc1: 535.333,
    direnc2: 542.667,
    direnc3: 548.333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: 2.19,
    son: 14.34,
    pivot: 14.033,
    destek1: 13.887,
    destek2: 13.753,
    destek3: 13.607,
    direnc1: 14.167,
    direnc2: 14.313,
    direnc3: 14.447,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "KCHOL",
    fark: -0.31,
    son: 202.2,
    pivot: 202.833,
    destek1: 200.467,
    destek2: 198.633,
    destek3: 196.267,
    direnc1: 204.667,
    direnc2: 207.033,
    direnc3: 208.867,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "KRDMD",
    fark: 2.47,
    son: 38.52,
    pivot: 37.593,
    destek1: 37.107,
    destek2: 36.513,
    destek3: 36.027,
    direnc1: 38.187,
    direnc2: 38.673,
    direnc3: 39.267,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "MGROS",
    fark: 2.78,
    son: 641.5,
    pivot: 624.1666,
    destek1: 621.333,
    destek2: 616.6666,
    destek3: 613.8333,
    direnc1: 628.8333,
    direnc2: 631.6666,
    direnc3: 636.3333,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PETKM",
    fark: -2.79,
    son: 23.9,
    pivot: 24.587,
    destek1: 24.273,
    destek2: 23.727,
    destek3: 23.413,
    direnc1: 25.133,
    direnc2: 25.447,
    direnc3: 25.993,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: 0.35,
    son: 180.6,
    pivot: 179.967,
    destek1: 177.733,
    destek2: 176.367,
    destek3: 174.133,
    direnc1: 181.333,
    direnc2: 183.567,
    direnc3: 184.933,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SAHOL",
    fark: -1.03,
    son: 95.65,
    pivot: 96.65,
    destek1: 95.4,
    destek2: 94.65,
    destek3: 93.4,
    direnc1: 97.4,
    direnc2: 98.65,
    direnc3: 99.4,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "SASA",
    fark: -2.39,
    son: 3.14,
    pivot: 3.217,
    destek1: 3.143,
    destek2: 3.087,
    destek3: 3.013,
    direnc1: 3.273,
    direnc2: 3.347,
    direnc3: 3.403,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: 3.82,
    son: 47.86,
    pivot: 46.1,
    destek1: 45.32,
    destek2: 44.76,
    destek3: 43.98,
    direnc1: 46.66,
    direnc2: 47.44,
    direnc3: 48,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "TAVHL",
    fark: -1.21,
    son: 278.5,
    pivot: 281.917,
    destek1: 275.083,
    destek2: 271.417,
    destek3: 264.583,
    direnc1: 285.583,
    direnc2: 292.417,
    direnc3: 296.083,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TCELL",
    fark: -0.62,
    son: 112.1,
    pivot: 112.8,
    destek1: 110.7,
    destek2: 109.3,
    destek3: 107.2,
    direnc1: 114.2,
    direnc2: 116.3,
    direnc3: 117.7,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -2.17,
    son: 308.25,
    pivot: 315.083,
    destek1: 312.417,
    destek2: 310.333,
    destek3: 307.667,
    direnc1: 317.167,
    direnc2: 319.833,
    direnc3: 321.917,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -0.48,
    son: 294.5,
    pivot: 295.917,
    destek1: 290.833,
    destek2: 284.917,
    destek3: 279.833,
    direnc1: 301.833,
    direnc2: 306.917,
    direnc3: 312.833,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TRALT",
    fark: -1.74,
    son: 41.38,
    pivot: 42.113,
    destek1: 40.307,
    destek2: 39.213,
    destek3: 37.407,
    direnc1: 43.207,
    direnc2: 45.013,
    direnc3: 46.107,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -0.77,
    son: 62.15,
    pivot: 62.633,
    destek1: 62.117,
    destek2: 61.483,
    destek3: 60.967,
    direnc1: 63.267,
    direnc2: 63.783,
    direnc3: 64.417,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: -1.16,
    son: 271,
    pivot: 274.167,
    destek1: 271.833,
    destek2: 268.167,
    destek3: 265.833,
    direnc1: 277.833,
    direnc2: 280.167,
    direnc3: 283.833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "VAKBN",
    fark: -0.34,
    son: 31.66,
    pivot: 31.767,
    destek1: 30.853,
    destek2: 30.367,
    destek3: 29.453,
    direnc1: 32.253,
    direnc2: 33.167,
    direnc3: 33.653,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "YKBNK",
    fark: 0.25,
    son: 37.04,
    pivot: 36.947,
    destek1: 36.133,
    destek2: 35.707,
    destek3: 34.893,
    direnc1: 37.373,
    direnc2: 38.187,
    direnc3: 38.613,
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
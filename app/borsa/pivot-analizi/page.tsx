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

const guncellemeTarihi = "15.05.2026";

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -2.06,
  son: 14367.6,
  pivot: 14670.52,
  destek1: 14578.53,
  destek2: 14512.37,
  destek3: 14420.38,
  direnc1: 14736.68,
  direnc2: 14828.67,
  direnc3: 14894.83,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -5.12,
    son: 19.57,
    pivot: 20.627,
    destek1: 20.213,
    destek2: 20.007,
    destek3: 19.593,
    direnc1: 20.833,
    direnc2: 21.247,
    direnc3: 21.453,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -2.93,
    son: 70.25,
    pivot: 72.367,
    destek1: 71.283,
    destek2: 70.217,
    destek3: 69.133,
    direnc1: 73.433,
    direnc2: 74.517,
    direnc3: 75.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -0.42,
    son: 415,
    pivot: 416.75,
    destek1: 412.5,
    destek2: 409.5,
    destek3: 405.25,
    direnc1: 419.75,
    direnc2: 424,
    direnc3: 427,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ASTOR",
    fark: -4.62,
    son: 322,
    pivot: 337.583,
    destek1: 327.6666,
    destek2: 320.3333,
    destek3: 310.4166,
    direnc1: 344.9166,
    direnc2: 354.8333,
    direnc3: 362.1666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -2.6,
    son: 405.25,
    pivot: 416.083,
    destek1: 407.167,
    destek2: 400.333,
    destek3: 391.417,
    direnc1: 422.917,
    direnc2: 431.833,
    direnc3: 438.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 0.36,
    son: 1970,
    pivot: 1963,
    destek1: 1963,
    destek2: 1963,
    destek3: 1963,
    direnc1: 1963,
    direnc2: 1963,
    direnc3: 1963,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -0.33,
    son: 20.32,
    pivot: 20.387,
    destek1: 20.133,
    destek2: 19.907,
    destek3: 19.653,
    direnc1: 20.613,
    direnc2: 20.867,
    direnc3: 21.093,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "ENKAI",
    fark: -1.74,
    son: 101.7,
    pivot: 103.4999,
    destek1: 102.2999,
    destek2: 100.8999,
    destek3: 99.6999,
    direnc1: 104.8999,
    direnc2: 106.0999,
    direnc3: 107.4999,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -1.07,
    son: 39.62,
    pivot: 40.047,
    destek1: 38.993,
    destek2: 38.247,
    destek3: 37.193,
    direnc1: 40.793,
    direnc2: 41.847,
    direnc3: 42.593,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "FROTO",
    fark: -2.42,
    son: 91.45,
    pivot: 93.7166,
    destek1: 92.5333,
    destek2: 91.6166,
    destek3: 90.4333,
    direnc1: 94.6333,
    direnc2: 95.8166,
    direnc3: 96.7333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -2.38,
    son: 129.8,
    pivot: 132.9666,
    destek1: 131.7333,
    destek2: 129.7666,
    destek3: 128.5333,
    direnc1: 134.9333,
    direnc2: 136.1666,
    direnc3: 138.1333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -2.01,
    son: 594.5,
    pivot: 606.667,
    destek1: 596.333,
    destek2: 584.667,
    destek3: 574.333,
    direnc1: 618.333,
    direnc2: 628.667,
    direnc3: 640.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -2.32,
    son: 13.87,
    pivot: 14.2,
    destek1: 14.1,
    destek2: 13.98,
    destek3: 13.88,
    direnc1: 14.32,
    direnc2: 14.42,
    direnc3: 14.54,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -3.07,
    son: 199,
    pivot: 205.3,
    destek1: 202.9,
    destek2: 201.3,
    destek3: 198.9,
    direnc1: 206.9,
    direnc2: 209.3,
    direnc3: 210.9,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -2.6,
    son: 41.98,
    pivot: 43.1,
    destek1: 41.98,
    destek2: 41.16,
    destek3: 40.04,
    direnc1: 43.92,
    direnc2: 45.04,
    direnc3: 45.86,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: -5.01,
    son: 682.5,
    pivot: 718.5,
    destek1: 710,
    destek2: 696,
    destek3: 687.5,
    direnc1: 732.5,
    direnc2: 741,
    direnc3: 755,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -1.04,
    son: 26,
    pivot: 26.273,
    destek1: 25.747,
    destek2: 25.293,
    destek3: 24.767,
    direnc1: 26.727,
    direnc2: 27.253,
    direnc3: 27.707,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "PGSUS",
    fark: -1.27,
    son: 176.6,
    pivot: 178.8666,
    destek1: 177.4333,
    destek2: 176.4666,
    destek3: 175.0331,
    direnc1: 179.8333,
    direnc2: 181.2666,
    direnc3: 182.2333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -3.27,
    son: 93.05,
    pivot: 96.2,
    destek1: 94.95,
    destek2: 94.05,
    destek3: 92.8,
    direnc1: 97.1,
    direnc2: 98.35,
    direnc3: 99.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -4.6,
    son: 2.83,
    pivot: 2.9666,
    destek1: 2.9133,
    destek2: 2.8166,
    destek3: 2.7633,
    direnc1: 3.0633,
    direnc2: 3.1166,
    direnc3: 3.2133,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SISE",
    fark: -3.15,
    son: 48.2,
    pivot: 49.77,
    destek1: 48.19,
    destek2: 47.36,
    destek3: 45.78,
    direnc1: 50.6,
    direnc2: 52.18,
    direnc3: 53.01,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TAVHL",
    fark: -3.52,
    son: 258.25,
    pivot: 267.667,
    destek1: 264.583,
    destek2: 261.667,
    destek3: 258.583,
    direnc1: 270.583,
    direnc2: 273.667,
    direnc3: 276.583,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: -4.48,
    son: 109.5,
    pivot: 114.633,
    destek1: 113.767,
    destek2: 113.033,
    destek3: 112.167,
    direnc1: 115.367,
    direnc2: 116.233,
    direnc3: 116.967,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "THYAO",
    fark: -2.12,
    son: 300,
    pivot: 306.5,
    destek1: 304.5,
    destek2: 303.25,
    destek3: 301.25,
    direnc1: 307.75,
    direnc2: 309.75,
    direnc3: 311,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TOASO",
    fark: -2.24,
    son: 302,
    pivot: 308.917,
    destek1: 303.833,
    destek2: 297.167,
    destek3: 292.083,
    direnc1: 315.583,
    direnc2: 320.667,
    direnc3: 327.333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: 0.98,
    son: 47.4,
    pivot: 46.94,
    destek1: 46.14,
    destek2: 45.56,
    destek3: 44.76,
    direnc1: 47.52,
    direnc2: 48.32,
    direnc3: 48.9,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "TTKOM",
    fark: -3.74,
    son: 61.7,
    pivot: 64.1,
    destek1: 62.95,
    destek2: 62.25,
    destek3: 61.1,
    direnc1: 64.8,
    direnc2: 65.95,
    direnc3: 66.65,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TUPRS",
    fark: 2.07,
    son: 258.5,
    pivot: 253.25,
    destek1: 251,
    destek2: 248.5,
    destek3: 246.25,
    direnc1: 255.75,
    direnc2: 258,
    direnc3: 260.5,
    yorum: "İkinci direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -4.31,
    son: 30.8,
    pivot: 32.187,
    destek1: 31.733,
    destek2: 31.407,
    destek3: 30.953,
    direnc1: 32.513,
    direnc2: 32.967,
    direnc3: 33.293,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -2.56,
    son: 36.82,
    pivot: 37.787,
    destek1: 37.313,
    destek2: 36.807,
    destek3: 36.333,
    direnc1: 38.293,
    direnc2: 38.767,
    direnc3: 39.273,
    yorum: "İkinci destek seviyesinin altına indi.",
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
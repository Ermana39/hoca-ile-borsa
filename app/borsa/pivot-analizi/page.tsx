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

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -0.34,
  son: 14200.912176,
  pivot: 14249.36,
  destek1: 14184.6,
  destek2: 14116.83,
  destek3: 14052.07,
  direnc1: 14317.13,
  direnc2: 14381.89,
  direnc3: 14449.66,
  yorum: "Pivot değerinin altında seyrediyor.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -1.2,
    son: 18.58,
    pivot: 18.8066,
    destek1: 18.5633,
    destek2: 18.3066,
    destek3: 18.06333,
    direnc1: 19.06333,
    direnc2: 19.3066,
    direnc3: 19.5633,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "AKBNK",
    fark: -0.83,
    son: 78.1,
    pivot: 78.75,
    destek1: 78.25,
    destek2: 77.9599,
    destek3: 77.0999,
    direnc1: 79.4,
    direnc2: 79.9,
    direnc3: 80.55,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -1.3,
    son: 411.0,
    pivot: 416.4166,
    destek1: 411.5833,
    destek2: 406.4166,
    destek3: 401.5833,
    direnc1: 421.5833,
    direnc2: 426.4166,
    direnc3: 431.5833,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -2.22,
    son: 192.0,
    pivot: 196.3666,
    destek1: 192.9333,
    destek2: 190.8666,
    destek3: 187.4333,
    direnc1: 198.4333,
    direnc2: 201.8666,
    direnc3: 203.9333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -1.37,
    son: 746.0,
    pivot: 756.3333,
    destek1: 746.6666,
    destek2: 740.3333,
    destek3: 730.6666,
    direnc1: 762.6666,
    direnc2: 772.3333,
    direnc3: 778.6666,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: 3.38,
    son: 2194.0,
    pivot: 2122.3333,
    destek1: 2110.6666,
    destek2: 2091.3333,
    destek3: 2079.6666,
    direnc1: 2141.6666,
    direnc2: 2153.3333,
    direnc3: 2172.6666,
    yorum: "Üçüncü direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "EKGYO",
    fark: -1.47,
    son: 20.96,
    pivot: 21.2733,
    destek1: 21.1266,
    destek2: 21.0533,
    destek3: 20.9066,
    direnc1: 21.3466,
    direnc2: 21.4933,
    direnc3: 21.5666,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -0.42,
    son: 103.8,
    pivot: 104.2333,
    destek1: 102.9666,
    destek2: 101.7333,
    destek3: 100.4666,
    direnc1: 105.4666,
    direnc2: 106.7333,
    direnc3: 107.9666,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "EREGL",
    fark: -2.05,
    son: 30.9,
    pivot: 31.5466,
    destek1: 31.2933,
    destek2: 30.9466,
    destek3: 30.6933,
    direnc1: 31.8933,
    direnc2: 32.1466,
    direnc3: 32.4933,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -1.09,
    son: 105.9,
    pivot: 107.0666,
    destek1: 106.0333,
    destek2: 105.2666,
    destek3: 104.2333,
    direnc1: 107.8333,
    direnc2: 108.8666,
    direnc3: 109.6333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -1.72,
    son: 137.0,
    pivot: 139.3999,
    destek1: 138.1,
    destek2: 137.3999,
    destek3: 136.1,
    direnc1: 140.1,
    direnc2: 141.3999,
    direnc3: 142.1,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: 0.29,
    son: 523.5,
    pivot: 522.0,
    destek1: 502.5,
    destek2: 475.5,
    destek3: 456.0,
    direnc1: 549.0,
    direnc2: 568.5,
    direnc3: 595.5,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "ISCTR",
    fark: -0.98,
    son: 14.44,
    pivot: 14.5833,
    destek1: 14.4766,
    destek2: 14.4033,
    destek3: 14.2966,
    direnc1: 14.6566,
    direnc2: 14.7633,
    direnc3: 14.8366,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -1.43,
    son: 204.5,
    pivot: 207.4666,
    destek1: 206.0333,
    destek2: 204.2666,
    destek3: 202.8333,
    direnc1: 209.2333,
    direnc2: 210.6666,
    direnc3: 212.4333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -1.38,
    son: 35.72,
    pivot: 36.2199,
    destek1: 35.5999,
    destek2: 34.74,
    destek3: 34.12,
    direnc1: 37.07999,
    direnc2: 37.6999,
    direnc3: 38.5599,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "MGROS",
    fark: 0.41,
    son: 659.5,
    pivot: 656.8333,
    destek1: 650.1666,
    destek2: 643.8333,
    destek3: 637.1666,
    direnc1: 663.1666,
    direnc2: 669.8333,
    direnc3: 676.1666,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "PETKM",
    fark: 3.09,
    son: 22.68,
    pivot: 22.0,
    destek1: 21.6599,
    destek2: 21.3199,
    destek3: 20.9799,
    direnc1: 22.34,
    direnc2: 22.68,
    direnc3: 23.02,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "PGSUS",
    fark: -1.54,
    son: 186.0,
    pivot: 188.8999,
    destek1: 187.2999,
    destek2: 186.2999,
    destek3: 184.6999,
    direnc1: 189.9,
    direnc2: 191.5,
    direnc3: 192.5,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -1.06,
    son: 99.5,
    pivot: 100.5666,
    destek1: 99.6333,
    destek2: 98.6666,
    destek3: 97.7333,
    direnc1: 101.5333,
    direnc2: 102.4666,
    direnc3: 103.4333,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: 5.76,
    son: 3.06,
    pivot: 2.8933,
    destek1: 2.7966,
    destek2: 2.6033,
    destek3: 2.5066,
    direnc1: 3.08666,
    direnc2: 3.1833,
    direnc3: 3.3766,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "SISE",
    fark: -2.6,
    son: 46.9,
    pivot: 48.1533,
    destek1: 47.8066,
    destek2: 47.3933,
    destek3: 47.04667,
    direnc1: 48.5666,
    direnc2: 48.9133,
    direnc3: 49.3266,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "TAVHL",
    fark: -3.86,
    son: 311.75,
    pivot: 324.25,
    destek1: 317.25,
    destek2: 313.0,
    destek3: 306.0,
    direnc1: 328.5,
    direnc2: 335.5,
    direnc3: 339.75,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TCELL",
    fark: 0.46,
    son: 117.3,
    pivot: 116.7666,
    destek1: 115.9333,
    destek2: 114.7666,
    destek3: 113.9333,
    direnc1: 117.9333,
    direnc2: 118.7666,
    direnc3: 119.9333,
    yorum: "Pivot değerinin üstünde seyrediyor.",
  },
  {
    sembol: "THYAO",
    fark: -1.32,
    son: 317.25,
    pivot: 321.5,
    destek1: 316.25,
    destek2: 313.25,
    destek3: 308.0,
    direnc1: 324.5,
    direnc2: 329.75,
    direnc3: 332.75,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TOASO",
    fark: -3.24,
    son: 288.25,
    pivot: 297.9166,
    destek1: 294.5833,
    destek2: 290.1666,
    destek3: 286.8333,
    direnc1: 302.3333,
    direnc2: 305.6666,
    direnc3: 310.0833,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "TRALT",
    fark: -2.38,
    son: 46.0,
    pivot: 47.12,
    destek1: 46.01999,
    destek2: 44.5599,
    destek3: 43.4599,
    direnc1: 48.58,
    direnc2: 49.68,
    direnc3: 51.14,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "TTKOM",
    fark: -0.32,
    son: 62.85,
    pivot: 63.05,
    destek1: 62.4,
    destek2: 61.8499,
    destek3: 61.1999,
    direnc1: 63.6,
    direnc2: 64.25,
    direnc3: 64.8,
    yorum: "Pivot değerinin altında seyrediyor.",
  },
  {
    sembol: "TUPRS",
    fark: 1.64,
    son: 268.0,
    pivot: 263.6666,
    destek1: 258.8333,
    destek2: 256.4166,
    destek3: 251.5833,
    direnc1: 266.0833,
    direnc2: 270.9166,
    direnc3: 273.3333,
    yorum: "İlk direnç seviyesinin üstüne çıktı.",
  },
  {
    sembol: "VAKBN",
    fark: -1.13,
    son: 33.82,
    pivot: 34.2066,
    destek1: 33.9733,
    destek2: 33.8266,
    destek3: 33.5933,
    direnc1: 34.3533,
    direnc2: 34.5866,
    direnc3: 34.7333,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "YKBNK",
    fark: -0.39,
    son: 37.48,
    pivot: 37.6266,
    destek1: 37.2733,
    destek2: 36.9666,
    destek3: 36.6133,
    direnc1: 37.9333,
    direnc2: 38.2866,
    direnc3: 38.5933,
    yorum: "Pivot değerinin altında seyrediyor.",
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
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

const xu100Pivot: PivotRow = {
  sembol: "XU100",
  fark: -5.88,
  son: 13163.88,
  pivot: 13985.96,
  destek1: 13882.17,
  destek2: 13752.32,
  destek3: 13648.53,
  direnc1: 14115.81,
  direnc2: 14219.6,
  direnc3: 14349.45,
  yorum: "Üçüncü destek seviyesinin altına indi.",
};

const pivotVerileri: PivotRow[] = [
  {
    sembol: "AEFES",
    fark: -4.82,
    son: 18.58,
    pivot: 19.52,
    destek1: 19.18,
    destek2: 18.61,
    destek3: 18.27,
    direnc1: 20.09,
    direnc2: 20.43,
    direnc3: 21,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "AKBNK",
    fark: -10.14,
    son: 62.2,
    pivot: 69.217,
    destek1: 68.633,
    destek2: 68.167,
    destek3: 67.583,
    direnc1: 69.683,
    direnc2: 70.267,
    direnc3: 70.733,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ASELS",
    fark: -4.45,
    son: 377.75,
    pivot: 395.333,
    destek1: 387.417,
    destek2: 381.333,
    destek3: 373.417,
    direnc1: 401.417,
    direnc2: 409.333,
    direnc3: 415.417,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "ASTOR",
    fark: -6.04,
    son: 313.75,
    pivot: 333.917,
    destek1: 323.583,
    destek2: 302.917,
    destek3: 292.583,
    direnc1: 354.583,
    direnc2: 364.917,
    direnc3: 385.583,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "BIMAS",
    fark: -4.08,
    son: 376.5,
    pivot: 392.5,
    destek1: 385.75,
    destek2: 378.75,
    destek3: 372,
    direnc1: 399.5,
    direnc2: 406.25,
    direnc3: 413.25,
    yorum: "İkinci destek seviyesinin altına indi.",
  },
  {
    sembol: "DSTKF",
    fark: -2.89,
    son: 1860,
    pivot: 1915.333,
    destek1: 1874.667,
    destek2: 1849.333,
    destek3: 1808.667,
    direnc1: 1940.667,
    direnc2: 1981.333,
    direnc3: 2006.667,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EKGYO",
    fark: -7.16,
    son: 18.41,
    pivot: 19.83,
    destek1: 19.62,
    destek2: 19.4,
    destek3: 19.19,
    direnc1: 20.05,
    direnc2: 20.26,
    direnc3: 20.48,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ENKAI",
    fark: -3.0,
    son: 95.25,
    pivot: 98.2,
    destek1: 96.75,
    destek2: 94.7,
    destek3: 93.25,
    direnc1: 100.25,
    direnc2: 101.7,
    direnc3: 103.75,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "EREGL",
    fark: -8.84,
    son: 35.18,
    pivot: 38.593,
    destek1: 37.967,
    destek2: 37.333,
    destek3: 36.727,
    direnc1: 39.247,
    direnc2: 39.853,
    direnc3: 40.507,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "FROTO",
    fark: -4.78,
    son: 82.35,
    pivot: 86.4833,
    destek1: 85.6166,
    destek2: 84.5833,
    destek3: 83.7166,
    direnc1: 87.5166,
    direnc2: 88.3833,
    direnc3: 89.4166,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GARAN",
    fark: -7.34,
    son: 120,
    pivot: 129.5,
    destek1: 127.9,
    destek2: 126,
    destek3: 124.4,
    direnc1: 131.4,
    direnc2: 133,
    direnc3: 134.9,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "GUBRF",
    fark: -6.25,
    son: 527.5,
    pivot: 562.667,
    destek1: 552.333,
    destek2: 544.667,
    destek3: 534.333,
    direnc1: 570.333,
    direnc2: 580.667,
    direnc3: 588.333,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "ISCTR",
    fark: -7.25,
    son: 12.7,
    pivot: 13.693,
    destek1: 13.567,
    destek2: 13.433,
    destek3: 13.307,
    direnc1: 13.827,
    direnc2: 13.953,
    direnc3: 14.087,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KCHOL",
    fark: -6.38,
    son: 183.3,
    pivot: 195.8,
    destek1: 193.8,
    destek2: 191.6,
    destek3: 189.6,
    direnc1: 198,
    direnc2: 200,
    direnc3: 202.2,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "KRDMD",
    fark: -5.42,
    son: 37.48,
    pivot: 39.627,
    destek1: 38.733,
    destek2: 37.267,
    destek3: 36.373,
    direnc1: 41.093,
    direnc2: 41.987,
    direnc3: 43.453,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "MGROS",
    fark: -2.63,
    son: 659,
    pivot: 676.833,
    destek1: 668.167,
    destek2: 650.833,
    destek3: 642.167,
    direnc1: 694.167,
    direnc2: 702.833,
    direnc3: 720.167,
    yorum: "İlk destek seviyesinin altına indi.",
  },
  {
    sembol: "PETKM",
    fark: -7.28,
    son: 22.76,
    pivot: 24.547,
    destek1: 23.913,
    destek2: 23.487,
    destek3: 22.853,
    direnc1: 24.973,
    direnc2: 25.607,
    direnc3: 26.033,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "PGSUS",
    fark: -5.4,
    son: 162.9,
    pivot: 172.2,
    destek1: 170.299,
    destek2: 167.2,
    destek3: 165.299,
    direnc1: 175.299,
    direnc2: 177.2,
    direnc3: 180.299,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SAHOL",
    fark: -5.64,
    son: 87.25,
    pivot: 92.467,
    destek1: 91.383,
    destek2: 90.117,
    destek3: 89.033,
    direnc1: 93.733,
    direnc2: 94.817,
    direnc3: 96.083,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
  {
    sembol: "SASA",
    fark: -9.75,
    son: 2.53,
    pivot: 2.8033,
    destek1: 2.7466,
    destek2: 2.6833,
    destek3: 2.6266,
    direnc1: 2.8666,
    direnc2: 2.9233,
    direnc3: 2.9866,
    yorum: "Üçüncü destek seviyesinin altına indi.",
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(value);
}

function getYorumRenk(yorum: string) {
  if (yorum.includes("direnç")) {
    return "bg-green-700";
  }

  if (yorum.includes("Pivot değerinin üstünde")) {
    return "bg-green-600";
  }

  if (yorum.includes("Üçüncü destek")) {
    return "bg-red-900";
  }

  if (yorum.includes("İkinci destek")) {
    return "bg-red-700";
  }

  if (yorum.includes("İlk destek")) {
    return "bg-red-500";
  }

  return "bg-orange-500";
}

export default function PivotAnaliziPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-2 py-4 text-white md:px-4">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-4 flex gap-3">
          <Link
            href="/"
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold hover:bg-zinc-700"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold hover:bg-zinc-700"
          >
            Geri
          </Link>
        </div>

        <div className="overflow-x-auto border border-zinc-700">
          <div className={`${getYorumRenk(xu100Pivot.yorum)} px-4 py-2 text-center text-lg font-bold`}>
            {xu100Pivot.yorum}
          </div>

          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#1c1c1c]">
              <tr>
                <th className="border border-zinc-700 px-3 py-2 text-left">PIVOT</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.pivot)}
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Destek 1</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.destek1)}
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Destek 2</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.destek2)}
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Destek 3</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.destek3)}
                </th>
              </tr>

              <tr>
                <th className="border border-zinc-700 px-3 py-2 text-left">
                  PIVOTA GÖRE FARK %
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-red-400">
                  {formatNumber(xu100Pivot.fark)}
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 1</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.direnc1)}
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 2</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.direnc2)}
                </th>
                <th className="border border-zinc-700 px-3 py-2 text-left">Direnç 3</th>
                <th className="border border-zinc-700 px-3 py-2">
                  {formatNumber(xu100Pivot.direnc3)}
                </th>
              </tr>
            </thead>
          </table>

          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#1a1a1a] text-zinc-300">
              <tr>
                <th className="border border-zinc-700 px-3 py-2 text-left">Sembol</th>
                <th className="border border-zinc-700 px-3 py-2 text-left">
                  Pivota Göre Fark %
                </th>
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
              {pivotVerileri.map((item) => (
                <>
                  <tr key={item.sembol} className="bg-[#222222]">
                    <td className="border border-zinc-700 px-3 py-3 font-semibold">
                      {item.sembol}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.fark)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.son)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.pivot)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.destek1)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.destek2)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.destek3)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.direnc1)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.direnc2)}
                    </td>

                    <td className="border border-zinc-700 px-3 py-3">
                      {formatNumber(item.direnc3)}
                    </td>
                  </tr>

                  <tr>
                    <td
                      colSpan={10}
                      className={`${getYorumRenk(
                        item.yorum
                      )} border border-zinc-700 px-3 py-2 text-center font-semibold`}
                    >
                      {item.yorum}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
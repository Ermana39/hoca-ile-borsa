import Link from "next/link";

const veriler = [
  { sembol: "AHGAZ", islemHacmi: "1,242,040,936", ortHacim: "316,279,248", artis: "292.70" },
  { sembol: "CRFSA", islemHacmi: "542,340,128", ortHacim: "138,917,991", artis: "290.40" },
  { sembol: "GUNDG", islemHacmi: "3,943,532,421", ortHacim: "1,019,650,380", artis: "286.75" },
  { sembol: "QNBFK", islemHacmi: "18,388,486", ortHacim: "5,233,302", artis: "251.37" },
  { sembol: "QNBTR", islemHacmi: "79,967,015", ortHacim: "22,851,654", artis: "249.94" },
  { sembol: "RYSAS", islemHacmi: "653,736,199", ortHacim: "189,845,653", artis: "244.35" },
  { sembol: "PASEU", islemHacmi: "1,759,647,286", ortHacim: "537,813,038", artis: "227.19" },
  { sembol: "MRSHL", islemHacmi: "124,263,644", ortHacim: "38,010,681", artis: "226.92" },
  { sembol: "GOODY", islemHacmi: "278,036,120", ortHacim: "89,372,357", artis: "211.10" },
  { sembol: "USAK", islemHacmi: "853,676,565", ortHacim: "275,128,885", artis: "210.28" },
  { sembol: "EPLAS", islemHacmi: "75,844,528", ortHacim: "25,371,609", artis: "198.93" },
  { sembol: "MEYSU", islemHacmi: "2,565,143,419", ortHacim: "867,601,508", artis: "195.66" },
  { sembol: "EUREN", islemHacmi: "899,091,783", ortHacim: "304,565,514", artis: "195.20" },
  { sembol: "SEGMN", islemHacmi: "815,124,200", ortHacim: "279,015,482", artis: "192.14" },
  { sembol: "TURGG", islemHacmi: "66,345,434", ortHacim: "23,593,787", artis: "181.20" },
  { sembol: "PNSUT", islemHacmi: "160,669,351", ortHacim: "58,701,351", artis: "173.71" },
  { sembol: "ONCSM", islemHacmi: "379,838,336", ortHacim: "140,710,982", artis: "169.94" },
  { sembol: "GLRMK", islemHacmi: "5,706,979,430", ortHacim: "2,137,218,978", artis: "167.03" },
  { sembol: "JANTS", islemHacmi: "137,898,018", ortHacim: "52,101,732", artis: "164.67" },
  { sembol: "GEREL", islemHacmi: "926,483,101", ortHacim: "358,129,976", artis: "158.70" },
  { sembol: "SANFM", islemHacmi: "358,098,805", ortHacim: "145,633,661", artis: "145.89" },
  { sembol: "FRMPL", islemHacmi: "474,406,713", ortHacim: "195,440,267", artis: "142.74" },
  { sembol: "EGEGY", islemHacmi: "258,460,819", ortHacim: "106,491,912", artis: "142.70" },
  { sembol: "DMSAS", islemHacmi: "49,173,261", ortHacim: "20,358,515", artis: "141.54" },
  { sembol: "DOKTA", islemHacmi: "35,910,010", ortHacim: "15,109,503", artis: "137.67" },
  { sembol: "ACSEL", islemHacmi: "49,356,745", ortHacim: "20,816,422", artis: "137.10" },
  { sembol: "ELITE", islemHacmi: "109,010,766", ortHacim: "46,136,384", artis: "136.28" },
  { sembol: "SDTTR", islemHacmi: "883,950,010", ortHacim: "374,637,102", artis: "135.95" },
  { sembol: "ALKA", islemHacmi: "383,395,671", ortHacim: "162,824,768", artis: "135.47" },
  { sembol: "CMBTN", islemHacmi: "67,285,943", ortHacim: "28,615,002", artis: "135.14" },
  { sembol: "PAPIL", islemHacmi: "564,075,117", ortHacim: "240,946,522", artis: "134.11" },
  { sembol: "DMLKTG", islemHacmi: "246,614,109", ortHacim: "105,525,853", artis: "133.70" },
  { sembol: "ALTNY", islemHacmi: "1,039,781,783", ortHacim: "445,720,049", artis: "133.28" },
  { sembol: "BUCIM", islemHacmi: "117,432,755", ortHacim: "50,925,206", artis: "130.60" },
  { sembol: "NIBAS", islemHacmi: "2,060,878,754", ortHacim: "899,740,432", artis: "129.05" },
  { sembol: "ONRYT", islemHacmi: "147,154,691", ortHacim: "64,731,478", artis: "127.33" },
  { sembol: "ENERY", islemHacmi: "408,824,131", ortHacim: "182,073,561", artis: "124.54" },
  { sembol: "ATLAS", islemHacmi: "31,971,696", ortHacim: "14,305,866", artis: "123.49" },
  { sembol: "AKMGY", islemHacmi: "145,178,940", ortHacim: "67,202,418", artis: "116.03" },
  { sembol: "MARTI", islemHacmi: "1,557,461,274", ortHacim: "729,692,796", artis: "113.44" },
  { sembol: "SKBNK", islemHacmi: "1,248,739,582", ortHacim: "587,346,428", artis: "112.61" },
  { sembol: "AGROT", islemHacmi: "357,099,841", ortHacim: "170,162,231", artis: "109.86" },
  { sembol: "TEHOL", islemHacmi: "5,336,840,899", ortHacim: "2,547,158,238", artis: "109.52" },
  { sembol: "KRDMB", islemHacmi: "2,617,772,480", ortHacim: "1,264,758,229", artis: "106.98" },
  { sembol: "HKTM", islemHacmi: "93,987,120", ortHacim: "45,520,335", artis: "106.47" },
  { sembol: "KATMR", islemHacmi: "591,590,076", ortHacim: "292,072,114", artis: "102.55" },
  { sembol: "KNFRT", islemHacmi: "31,103,651", ortHacim: "15,442,779", artis: "101.41" },
  { sembol: "TCKRC", islemHacmi: "359,592,903", ortHacim: "184,809,380", artis: "94.58" },
  { sembol: "DAPGM", islemHacmi: "748,246,646", ortHacim: "387,177,764", artis: "93.26" },
  { sembol: "AYEN", islemHacmi: "650,833,952", ortHacim: "341,300,104", artis: "90.69" },
];

export default function HaftalikHacimArtisiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/borsa/hacim-artisi-analizi"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Haftalık Hacim Artışı Olanlar
        </h1>

        <div className="overflow-x-auto rounded-2xl border border-purple-200 bg-purple-50 p-4">
          <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
            <thead className="bg-purple-100 text-zinc-700">
              <tr>
                <th className="px-4 py-3 text-left">Sembol</th>
                <th className="px-4 py-3 text-right">İşlem Hacmi</th>
                <th className="px-4 py-3 text-right">Ort. Hacim</th>
                <th className="px-4 py-3 text-right">Artış %</th>
              </tr>
            </thead>
            <tbody>
              {veriler.map((item, index) => (
                <tr
                  key={item.sembol}
                  className={`border-t border-zinc-100 ${index % 2 === 1 ? "bg-sky-50" : "bg-white"}`}
                >
                  <td className="px-4 py-3 font-semibold text-zinc-900">{item.sembol}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.islemHacmi}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.ortHacim}</td>
                  <td className="px-4 py-3 text-right font-semibold text-green-600">{item.artis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
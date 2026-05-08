import Link from "next/link";

const veriler = [
  { sembol: "KLSER", islemHacmi: "445,475,372", ortHacim: "143,054,709", artis: "211.43" },
  { sembol: "RTALB", islemHacmi: "825,155,263", ortHacim: "267,568,505", artis: "208.31" },
  { sembol: "AYCES", islemHacmi: "175,684,004", ortHacim: "57,941,427", artis: "203.21" },
  { sembol: "PRZMA", islemHacmi: "252,825,081", ortHacim: "87,640,500", artis: "188.48" },
  { sembol: "ANGEN", islemHacmi: "143,602,850", ortHacim: "51,371,714", artis: "179.54" },
  { sembol: "PATEK", islemHacmi: "3,911,670,628", ortHacim: "1,440,196,083", artis: "171.61" },
  { sembol: "PRKME", islemHacmi: "268,560,440", ortHacim: "104,932,348", artis: "155.94" },
  { sembol: "RGYAS", islemHacmi: "901,486,189", ortHacim: "357,874,927", artis: "151.95" },
  { sembol: "GOODY", islemHacmi: "163,215,308", ortHacim: "67,292,723", artis: "142.55" },
  { sembol: "MEDTR", islemHacmi: "88,802,793", ortHacim: "36,943,463", artis: "140.37" },
  { sembol: "SEGYO", islemHacmi: "247,445,805", ortHacim: "103,307,225", artis: "139.52" },
  { sembol: "GENIL", islemHacmi: "2,271,849,051", ortHacim: "957,640,526", artis: "137.23" },
  { sembol: "AAGYO", islemHacmi: "3,001,355,503", ortHacim: "1,284,345,768", artis: "133.69" },
  { sembol: "GSDDE", islemHacmi: "579,112,206", ortHacim: "247,974,685", artis: "133.54" },
  { sembol: "OFSYM", islemHacmi: "272,061,089", ortHacim: "121,650,131", artis: "123.64" },
  { sembol: "DOFER", islemHacmi: "148,371,271", ortHacim: "67,705,783", artis: "119.14" },
  { sembol: "BEGYO", islemHacmi: "162,703,678", ortHacim: "76,810,215", artis: "111.83" },
  { sembol: "AYDEM", islemHacmi: "389,909,498", ortHacim: "188,008,442", artis: "107.39" },
  { sembol: "IZMDC", islemHacmi: "281,229,804", ortHacim: "137,850,850", artis: "104.00" },
  { sembol: "KRPLS", islemHacmi: "79,418,702", ortHacim: "39,061,617", artis: "103.32" },
  { sembol: "FRMPL", islemHacmi: "312,522,181", ortHacim: "156,894,919", artis: "99.13" },
  { sembol: "NIBAS", islemHacmi: "143,757,610", ortHacim: "72,236,761", artis: "99.01" },
  { sembol: "DEVA", islemHacmi: "89,812,824", ortHacim: "45,202,932", artis: "98.68" },
  { sembol: "PSGYO", islemHacmi: "1,329,160,272", ortHacim: "672,980,654", artis: "97.50" },
  { sembol: "SNICA", islemHacmi: "102,252,844", ortHacim: "51,825,820", artis: "97.30" },
  { sembol: "GLRYH", islemHacmi: "175,852,129", ortHacim: "89,205,872", artis: "97.13" },
  { sembol: "PCILT", islemHacmi: "272,180,051", ortHacim: "138,430,801", artis: "96.62" },
  { sembol: "KLRHO", islemHacmi: "1,969,017,960", ortHacim: "1,014,097,271", artis: "94.15" },
  { sembol: "FMIZP", islemHacmi: "90,068,657", ortHacim: "46,570,476", artis: "93.40" },
  { sembol: "MPARK", islemHacmi: "962,916,488", ortHacim: "500,881,814", artis: "92.24" },
  { sembol: "KAPLM", islemHacmi: "578,936,787", ortHacim: "302,834,666", artis: "91.17" },
  { sembol: "IMASM", islemHacmi: "291,797,137", ortHacim: "152,641,630", artis: "91.16" },
  { sembol: "AKENR", islemHacmi: "288,842,387", ortHacim: "152,855,533", artis: "88.96" },
  { sembol: "EYGYO", islemHacmi: "92,188,894", ortHacim: "48,923,803", artis: "88.43" },
  { sembol: "KZGYO", islemHacmi: "253,248,831", ortHacim: "135,058,343", artis: "87.50" },
  { sembol: "OTKAR", islemHacmi: "710,644,875", ortHacim: "381,945,405", artis: "86.06" },
  { sembol: "OSTIM", islemHacmi: "134,210,213", ortHacim: "72,322,524", artis: "85.57" },
  { sembol: "FZLGY", islemHacmi: "572,575,391", ortHacim: "310,016,206", artis: "84.69" },
  { sembol: "PAHOL", islemHacmi: "1,987,152,869", ortHacim: "1,075,959,573", artis: "84.69" },
  { sembol: "BIGTK", islemHacmi: "127,690,173", ortHacim: "69,389,467", artis: "84.02" },
  { sembol: "CEMAS", islemHacmi: "191,769,277", ortHacim: "104,662,605", artis: "83.23" },
  { sembol: "KATMR", islemHacmi: "1,201,807,550", ortHacim: "656,990,656", artis: "82.93" },
  { sembol: "PNLSN", islemHacmi: "143,044,339", ortHacim: "79,356,002", artis: "80.26" },
  { sembol: "EKSUN", islemHacmi: "64,299,641", ortHacim: "35,863,325", artis: "79.29" },
  { sembol: "DMRGD", islemHacmi: "2,098,868,654", ortHacim: "1,175,066,521", artis: "78.62" },
  { sembol: "DZGYO", islemHacmi: "58,049,214", ortHacim: "32,597,166", artis: "78.03" },
  { sembol: "SDTTR", islemHacmi: "1,739,773,788", ortHacim: "982,568,493", artis: "77.06" },
  { sembol: "KAYSE", islemHacmi: "284,649,268", ortHacim: "161,215,213", artis: "76.56" },
  { sembol: "DOKTA", islemHacmi: "29,650,511", ortHacim: "16,818,018", artis: "76.30" },
  { sembol: "DSTKF", islemHacmi: "3,336,646,578", ortHacim: "1,918,958,299", artis: "73.88" },
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

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

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
                  className={`border-t border-zinc-100 ${
                    index % 2 === 1 ? "bg-sky-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-zinc-900">
                    {item.sembol}
                  </td>
                  <td className="px-4 py-3 text-right text-zinc-700">
                    {item.islemHacmi}
                  </td>
                  <td className="px-4 py-3 text-right text-zinc-700">
                    {item.ortHacim}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-green-600">
                    {item.artis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Haftalık Hacim Artışı Olan Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık hacim artışı olan hisseler sayfası, son işlem hacmi ile haftalık
            ortalama hacim arasında dikkat çekici fark bulunan hisseleri takip etmek
            isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi kısa
            vadede öne çıkan hisseleri toplu şekilde inceleyebilir, piyasadaki güncel
            hareketliliği daha hızlı analiz edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık bazda artan işlem hacmi, yatırımcı ilgisinin belirli hisselerde
            yoğunlaştığını gösterebilir. Özellikle fiyat hareketi ile birlikte görülen
            hacim artışı, teknik analizde güçlü sinyal olarak değerlendirilebilir ve
            hissede oluşan momentumun daha yakından takip edilmesine yardımcı olur.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan işlem hacmi, ortalama hacim ve artış oranı verileri
            sayesinde hangi hisselerin kısa vadede normal işlem düzeninin üzerine
            çıktığını kolayca görebilirsiniz. Bu veriler hem kısa vadeli traderlar
            hem de dikkat çeken hisse hareketlerini erkenden yakalamak isteyen
            yatırımcılar için önemli bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel haftalık hacim artışı olan hisseler, BIST işlem hacmi
            karşılaştırmaları, kısa vadeli hacim hareketleri ve teknik takip
            ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
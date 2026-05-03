import Link from "next/link";

const veriler = [
  { sembol: "SUMAS", islemHacmi: "6,304,783", ortHacim: "2,294,037", artis: "174.83" },
  { sembol: "BESLR", islemHacmi: "264,816,764", ortHacim: "104,639,537", artis: "153.08" },
  { sembol: "OZATD", islemHacmi: "3,345,405,870", ortHacim: "1,334,027,935", artis: "150.77" },
  { sembol: "KRGYO", islemHacmi: "127,737,404", ortHacim: "52,938,427", artis: "141.29" },
  { sembol: "GLRYH", islemHacmi: "178,899,206", ortHacim: "75,652,839", artis: "136.47" },
  { sembol: "TATEN", islemHacmi: "1,595,048,614", ortHacim: "676,408,566", artis: "135.81" },
  { sembol: "MTRKS", islemHacmi: "62,627,501", ortHacim: "27,890,657", artis: "124.55" },
  { sembol: "HRKET", islemHacmi: "255,750,105", ortHacim: "118,613,357", artis: "115.62" },
  { sembol: "SANKO", islemHacmi: "68,429,244", ortHacim: "32,777,534", artis: "108.77" },
  { sembol: "AYDEM", islemHacmi: "215,618,704", ortHacim: "104,512,623", artis: "106.31" },
  { sembol: "EDIP", islemHacmi: "84,552,369", ortHacim: "41,123,788", artis: "105.60" },
  { sembol: "GRSEL", islemHacmi: "332,956,520", ortHacim: "164,678,920", artis: "102.19" },
  { sembol: "BAYRK", islemHacmi: "91,342,410", ortHacim: "45,379,582", artis: "101.29" },
  { sembol: "OBAMS", islemHacmi: "669,622,777", ortHacim: "340,711,241", artis: "96.54" },
  { sembol: "DURKN", islemHacmi: "206,499,444", ortHacim: "105,383,402", artis: "95.95" },
  { sembol: "ESCOM", islemHacmi: "1,318,601,583", ortHacim: "683,546,055", artis: "92.91" },
  { sembol: "ISBIR", islemHacmi: "3,709,592", ortHacim: "1,926,213", artis: "92.58" },
  { sembol: "ALGYO", islemHacmi: "1,461,429,974", ortHacim: "767,182,237", artis: "90.49" },
  { sembol: "FZLGY", islemHacmi: "589,373,829", ortHacim: "310,284,269", artis: "89.95" },
  { sembol: "A1CAP", islemHacmi: "407,451,539", ortHacim: "214,589,654", artis: "89.87" },
  { sembol: "YYLGD", islemHacmi: "180,585,561", ortHacim: "95,425,613", artis: "89.24" },
  { sembol: "ECOGR", islemHacmi: "405,441,196", ortHacim: "216,223,117", artis: "87.51" },
  { sembol: "RTALB", islemHacmi: "260,427,477", ortHacim: "142,003,011", artis: "83.40" },
  { sembol: "MPARK", islemHacmi: "951,280,899", ortHacim: "519,241,214", artis: "83.21" },
  { sembol: "EKOS", islemHacmi: "322,469,763", ortHacim: "178,150,818", artis: "81.01" },
  { sembol: "BAHKM", islemHacmi: "267,413,106", ortHacim: "148,120,289", artis: "80.54" },
  { sembol: "MARMR", islemHacmi: "936,609,777", ortHacim: "522,192,471", artis: "79.36" },
  { sembol: "AGESA", islemHacmi: "93,225,615", ortHacim: "52,334,144", artis: "78.14" },
  { sembol: "PCILT", islemHacmi: "173,998,874", ortHacim: "97,877,610", artis: "77.77" },
  { sembol: "MARKA", islemHacmi: "203,941,870", ortHacim: "116,407,539", artis: "75.20" },
  { sembol: "KRVGD", islemHacmi: "74,084,786", ortHacim: "42,476,380", artis: "74.41" },
  { sembol: "ASUZU", islemHacmi: "73,611,062", ortHacim: "42,490,225", artis: "73.24" },
  { sembol: "BEYAZ", islemHacmi: "229,419,903", ortHacim: "132,789,596", artis: "72.77" },
  { sembol: "ISKPL", islemHacmi: "1,969,783,787", ortHacim: "1,149,920,812", artis: "71.30" },
  { sembol: "VAKFA", islemHacmi: "488,098,978", ortHacim: "289,875,420", artis: "68.38" },
  { sembol: "ENJSA", islemHacmi: "955,683,849", ortHacim: "570,559,711", artis: "67.50" },
  { sembol: "SKTAS", islemHacmi: "43,006,950", ortHacim: "25,948,652", artis: "65.74" },
  { sembol: "AGYO", islemHacmi: "19,148,343", ortHacim: "11,572,631", artis: "65.46" },
  { sembol: "AYES", islemHacmi: "4,695,889", ortHacim: "2,839,318", artis: "65.39" },
  { sembol: "ADEL", islemHacmi: "491,190,821", ortHacim: "297,266,208", artis: "65.24" },
  { sembol: "AHSGY", islemHacmi: "227,431,936", ortHacim: "139,274,012", artis: "63.30" },
  { sembol: "KBORU", islemHacmi: "762,258,706", ortHacim: "472,478,666", artis: "61.33" },
  { sembol: "GLRMK", islemHacmi: "4,010,797,397", ortHacim: "2,500,268,278", artis: "60.41" },
  { sembol: "BAKAB", islemHacmi: "27,097,078", ortHacim: "16,897,237", artis: "60.36" },
  { sembol: "GIPTA", islemHacmi: "634,998,891", ortHacim: "396,512,064", artis: "60.15" },
  { sembol: "ASGYO", islemHacmi: "60,862,352", ortHacim: "38,372,741", artis: "58.61" },
  { sembol: "KOCMT", islemHacmi: "84,147,378", ortHacim: "53,340,422", artis: "57.76" },
  { sembol: "BURVA", islemHacmi: "122,765,442", ortHacim: "78,341,678", artis: "56.71" },
  { sembol: "CELHA", islemHacmi: "318,549,532", ortHacim: "204,885,052", artis: "55.48" },
  { sembol: "IZMDC", islemHacmi: "62,879,421", ortHacim: "40,674,017", artis: "54.59" },
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
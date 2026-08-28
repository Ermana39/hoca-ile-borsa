import Link from "@/components/NoPrefetchLink";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "TEHOL", islemHacmi: "17,016,437,678", ortHacim: "4,176,333,406", artis: "307.45" },
  { sembol: "ENSRI", islemHacmi: "872,223,031", ortHacim: "249,966,952", artis: "248.94" },
  { sembol: "CANTE", islemHacmi: "1,363,354,114", ortHacim: "404,407,808", artis: "237.12" },
  { sembol: "DURDO", islemHacmi: "48,294,656", ortHacim: "15,497,817", artis: "211.62" },
  { sembol: "UFUK", islemHacmi: "179,170,897", ortHacim: "62,963,881", artis: "184.56" },
  { sembol: "ODAS", islemHacmi: "1,183,560,251", ortHacim: "421,141,934", artis: "181.04" },
  { sembol: "PKENT", islemHacmi: "56,212,594", ortHacim: "20,661,045", artis: "172.07" },
  { sembol: "GRTHO", islemHacmi: "621,126,380", ortHacim: "232,838,974", artis: "166.76" },
  { sembol: "AYCES", islemHacmi: "178,849,725", ortHacim: "70,039,121", artis: "155.36" },
  { sembol: "AKENR", islemHacmi: "260,705,227", ortHacim: "102,604,000", artis: "154.09" },
  { sembol: "KLSYN", islemHacmi: "86,107,307", ortHacim: "34,035,195", artis: "152.99" },
  { sembol: "OZATD", islemHacmi: "8,824,079,295", ortHacim: "3,893,869,368", artis: "126.61" },
  { sembol: "RYSAS", islemHacmi: "1,192,005,529", ortHacim: "537,981,308", artis: "121.57" },
  { sembol: "MRGYO", islemHacmi: "532,981,441", ortHacim: "243,779,867", artis: "118.63" },
  { sembol: "GLRYH", islemHacmi: "93,788,874", ortHacim: "43,056,159", artis: "117.83" },
  { sembol: "SELVA", islemHacmi: "105,142,598", ortHacim: "48,914,128", artis: "114.95" },
  { sembol: "BYDNR", islemHacmi: "57,390,901", ortHacim: "26,928,967", artis: "113.12" },
  { sembol: "RYGYO", islemHacmi: "264,869,830", ortHacim: "124,795,717", artis: "112.24" },
  { sembol: "MAGEN", islemHacmi: "1,369,156,983", ortHacim: "653,372,378", artis: "109.55" },
  { sembol: "ELITE", islemHacmi: "130,712,435", ortHacim: "63,100,165", artis: "107.15" },
  { sembol: "KARSN", islemHacmi: "421,551,712", ortHacim: "204,250,503", artis: "106.39" },
  { sembol: "BAHKM", islemHacmi: "784,811,102", ortHacim: "380,486,913", artis: "106.26" },
  { sembol: "BAYRK", islemHacmi: "65,919,248", ortHacim: "32,300,530", artis: "104.08" },
  { sembol: "EUREN", islemHacmi: "215,992,147", ortHacim: "106,017,362", artis: "103.73" },
  { sembol: "TMSN", islemHacmi: "113,169,891", ortHacim: "55,552,958", artis: "103.72" },
  { sembol: "IHLGM", islemHacmi: "41,433,198", ortHacim: "20,340,768", artis: "103.70" },
  { sembol: "DUNYH", islemHacmi: "225,062,161", ortHacim: "111,962,137", artis: "101.02" },
  { sembol: "CONSE", islemHacmi: "32,028,582", ortHacim: "16,263,610", artis: "96.93" },
  { sembol: "MAKTK", islemHacmi: "142,671,090", ortHacim: "73,357,235", artis: "94.49" },
  { sembol: "ERSU", islemHacmi: "21,142,022", ortHacim: "10,890,492", artis: "94.13" },
  { sembol: "GZNMI", islemHacmi: "214,738,435", ortHacim: "111,367,224", artis: "92.82" },
  { sembol: "MARTI", islemHacmi: "389,921,374", ortHacim: "205,450,234", artis: "89.79" },
  { sembol: "SKBNK", islemHacmi: "1,909,607,051", ortHacim: "1,006,450,294", artis: "89.74" },
  { sembol: "ATAGY", islemHacmi: "3,252,819", ortHacim: "1,742,537", artis: "86.67" },
  { sembol: "BINHO", islemHacmi: "730,608,938", ortHacim: "391,629,235", artis: "86.56" },
  { sembol: "QUAGR", islemHacmi: "262,928,561", ortHacim: "144,304,595", artis: "82.20" },
  { sembol: "GENKM", islemHacmi: "217,206,384", ortHacim: "119,429,279", artis: "81.87" },
  { sembol: "ALGYO", islemHacmi: "177,943,135", ortHacim: "97,845,329", artis: "81.86" },
  { sembol: "VAKBN", islemHacmi: "4,629,925,844", ortHacim: "2,568,513,239", artis: "80.26" },
  { sembol: "PSDTC", islemHacmi: "218,404,626", ortHacim: "121,362,754", artis: "79.96" },
  { sembol: "EMKEL", islemHacmi: "102,837,354", ortHacim: "57,202,527", artis: "79.78" },
  { sembol: "BRLSM", islemHacmi: "953,030,309", ortHacim: "531,906,188", artis: "79.17" },
  { sembol: "AYES", islemHacmi: "3,740,463", ortHacim: "2,095,726", artis: "78.48" },
  { sembol: "ESCAR", islemHacmi: "148,150,468", ortHacim: "83,142,353", artis: "78.19" },
  { sembol: "ALVES", islemHacmi: "346,236,722", ortHacim: "194,540,925", artis: "77.98" },
  { sembol: "BMSCH", islemHacmi: "35,556,036", ortHacim: "20,127,856", artis: "76.65" },
  { sembol: "YBTAS", islemHacmi: "1,842,685", ortHacim: "1,056,037", artis: "74.49" },
  { sembol: "PEKGY", islemHacmi: "4,673,247,682", ortHacim: "2,711,565,314", artis: "72.35" },
  { sembol: "CWENE", islemHacmi: "3,965,019,055", ortHacim: "2,302,518,388", artis: "72.20" },
  { sembol: "IHGZT", islemHacmi: "27,270,455", ortHacim: "15,902,870", artis: "71.48" },
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
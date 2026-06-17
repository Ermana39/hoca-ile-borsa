import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "DENGE", islemHacmi: "517,786,615", ortHacim: "129,829,748", artis: "298.82" },
  { sembol: "NETAS", islemHacmi: "345,722,951", ortHacim: "107,603,250", artis: "221.29" },
  { sembol: "ZRGYO", islemHacmi: "1,502,674,740", ortHacim: "476,279,104", artis: "215.50" },
  { sembol: "KONKA", islemHacmi: "217,129,590", ortHacim: "72,866,141", artis: "197.98" },
  { sembol: "PAMEL", islemHacmi: "75,233,094", ortHacim: "26,543,395", artis: "183.43" },
  { sembol: "DGGYO", islemHacmi: "17,492,744", ortHacim: "6,245,824", artis: "180.07" },
  { sembol: "ISGSY", islemHacmi: "432,061,471", ortHacim: "161,839,728", artis: "166.97" },
  { sembol: "LRSHO", islemHacmi: "348,302,105", ortHacim: "130,488,360", artis: "166.92" },
  { sembol: "KTSKR", islemHacmi: "251,015,508", ortHacim: "100,828,276", artis: "148.95" },
  { sembol: "MPARK", islemHacmi: "915,022,995", ortHacim: "382,610,665", artis: "139.15" },
  { sembol: "EMKEL", islemHacmi: "479,070,651", ortHacim: "200,770,515", artis: "138.62" },
  { sembol: "PSGYO", islemHacmi: "2,955,024,330", ortHacim: "1,239,937,151", artis: "138.32" },
  { sembol: "SKTAS", islemHacmi: "356,505,689", ortHacim: "150,654,520", artis: "136.64" },
  { sembol: "VANGD", islemHacmi: "64,316,901", ortHacim: "27,558,569", artis: "133.38" },
  { sembol: "BURCE", islemHacmi: "322,616,897", ortHacim: "141,321,220", artis: "128.29" },
  { sembol: "MARBL", islemHacmi: "127,973,074", ortHacim: "56,761,835", artis: "125.46" },
  { sembol: "BEYAZ", islemHacmi: "63,368,718", ortHacim: "28,266,083", artis: "124.19" },
  { sembol: "PASEU", islemHacmi: "2,044,947,183", ortHacim: "916,346,563", artis: "123.16" },
  { sembol: "ULUFA", islemHacmi: "91,654,346", ortHacim: "41,723,332", artis: "119.67" },
  { sembol: "ADESE", islemHacmi: "410,406,728", ortHacim: "187,733,790", artis: "118.61" },
  { sembol: "KUYAS", islemHacmi: "984,939,750", ortHacim: "449,905,440", artis: "107.81" },
  { sembol: "VERUS", islemHacmi: "255,952,822", ortHacim: "123,989,017", artis: "106.43" },
  { sembol: "AKGRT", islemHacmi: "179,300,184", ortHacim: "87,688,028", artis: "104.48" },
  { sembol: "PAHOL", islemHacmi: "1,719,210,141", ortHacim: "847,525,822", artis: "102.85" },
  { sembol: "AKSUE", islemHacmi: "257,289,845", ortHacim: "128,182,366", artis: "100.72" },
  { sembol: "BRKO", islemHacmi: "30,984,008", ortHacim: "15,649,806", artis: "97.98" },
  { sembol: "SRVGY", islemHacmi: "376,782,239", ortHacim: "192,230,256", artis: "96.01" },
  { sembol: "BJKAS", islemHacmi: "255,418,283", ortHacim: "131,570,787", artis: "94.13" },
  { sembol: "BAHKM", islemHacmi: "153,170,146", ortHacim: "79,220,924", artis: "93.39" },
  { sembol: "RUZYE", islemHacmi: "202,858,842", ortHacim: "105,573,427", artis: "92.15" },
  { sembol: "KNFRT", islemHacmi: "368,870,234", ortHacim: "192,667,459", artis: "91.45" },
  { sembol: "ARZUM", islemHacmi: "74,125,986", ortHacim: "38,978,391", artis: "90.17" },
  { sembol: "ORGE", islemHacmi: "480,035,419", ortHacim: "253,302,326", artis: "89.51" },
  { sembol: "DZGYO", islemHacmi: "56,545,436", ortHacim: "29,846,076", artis: "89.46" },
  { sembol: "PATEK", islemHacmi: "921,451,164", ortHacim: "492,837,662", artis: "86.97" },
  { sembol: "AKSA", islemHacmi: "771,589,368", ortHacim: "417,325,113", artis: "84.89" },
  { sembol: "FRIGO", islemHacmi: "170,211,784", ortHacim: "95,251,807", artis: "78.70" },
  { sembol: "CEMZY", islemHacmi: "1,127,679,964", ortHacim: "639,662,767", artis: "76.29" },
  { sembol: "MERCN", islemHacmi: "190,922,509", ortHacim: "108,620,731", artis: "75.72" },
  { sembol: "SANFM", islemHacmi: "456,131,160", ortHacim: "262,611,115", artis: "73.69" },
  { sembol: "GLYHO", islemHacmi: "183,854,797", ortHacim: "105,955,431", artis: "73.52" },
  { sembol: "HKTM", islemHacmi: "113,383,161", ortHacim: "65,709,684", artis: "72.55" },
  { sembol: "ECILC", islemHacmi: "679,596,364", ortHacim: "394,463,986", artis: "72.28" },
  { sembol: "IHGZT", islemHacmi: "59,056,302", ortHacim: "34,325,935", artis: "72.05" },
  { sembol: "GLRMK", islemHacmi: "1,339,546,885", ortHacim: "779,334,574", artis: "71.88" },
  { sembol: "BALSU", islemHacmi: "240,022,501", ortHacim: "140,164,814", artis: "71.24" },
  { sembol: "OZKGY", islemHacmi: "114,602,221", ortHacim: "67,234,926", artis: "70.45" },
  { sembol: "BAKAB", islemHacmi: "75,994,067", ortHacim: "44,774,948", artis: "69.72" },
  { sembol: "TSGYO", islemHacmi: "35,385,275", ortHacim: "20,868,225", artis: "69.57" },
  { sembol: "LUKSK", islemHacmi: "52,718,636", ortHacim: "31,197,281", artis: "68.98" },
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
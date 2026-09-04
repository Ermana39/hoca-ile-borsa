import Link from "@/components/NoPrefetchLink";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "DITAS", islemHacmi: "410,845,688", ortHacim: "98,004,021", artis: "319.21" },
  { sembol: "INTET", islemHacmi: "1,448,033,008", ortHacim: "399,388,494", artis: "262.56" },
  { sembol: "PEKGY", islemHacmi: "7,774,067,536", ortHacim: "2,326,465,218", artis: "234.16" },
  { sembol: "UFUK", islemHacmi: "1,779,735,275", ortHacim: "543,506,739", artis: "227.45" },
  { sembol: "KLRHO", islemHacmi: "570,705,650", ortHacim: "183,873,805", artis: "210.38" },
  { sembol: "EUPWR", islemHacmi: "7,052,321,229", ortHacim: "2,285,949,298", artis: "208.51" },
  { sembol: "AVOD", islemHacmi: "230,704,113", ortHacim: "76,083,751", artis: "203.22" },
  { sembol: "GESAN", islemHacmi: "5,546,101,182", ortHacim: "1,847,896,247", artis: "200.13" },
  { sembol: "GENKM", islemHacmi: "999,420,772", ortHacim: "354,963,318", artis: "181.56" },
  { sembol: "SNPAM", islemHacmi: "3,889,193", ortHacim: "1,504,132", artis: "158.57" },
  { sembol: "RUZYE", islemHacmi: "137,401,929", ortHacim: "54,057,631", artis: "154.18" },
  { sembol: "MIATK", islemHacmi: "1,539,434,067", ortHacim: "648,991,278", artis: "137.20" },
  { sembol: "SUMAS", islemHacmi: "1,861,431", ortHacim: "821,363", artis: "126.63" },
  { sembol: "SAFKR", islemHacmi: "220,428,500", ortHacim: "98,219,297", artis: "124.42" },
  { sembol: "MERKO", islemHacmi: "92,272,697", ortHacim: "41,475,059", artis: "122.48" },
  { sembol: "ACSEL", islemHacmi: "32,771,910", ortHacim: "14,795,446", artis: "121.50" },
  { sembol: "KRPLS", islemHacmi: "58,775,210", ortHacim: "27,010,644", artis: "117.60" },
  { sembol: "DMLKTG", islemHacmi: "157,087,437", ortHacim: "72,531,867", artis: "116.58" },
  { sembol: "DGATE", islemHacmi: "59,453,714", ortHacim: "27,947,954", artis: "112.73" },
  { sembol: "AVGYO", islemHacmi: "44,757,900", ortHacim: "21,118,389", artis: "111.94" },
  { sembol: "ONRYT", islemHacmi: "154,222,013", ortHacim: "73,408,996", artis: "110.09" },
  { sembol: "KSTUR", islemHacmi: "4,814,032", ortHacim: "2,393,971", artis: "101.09" },
  { sembol: "BIGTK", islemHacmi: "617,391,106", ortHacim: "311,383,861", artis: "98.27" },
  { sembol: "KAPLM", islemHacmi: "73,433,236", ortHacim: "37,216,218", artis: "97.32" },
  { sembol: "EGEEN", islemHacmi: "150,463,108", ortHacim: "76,262,798", artis: "97.30" },
  { sembol: "KARSN", islemHacmi: "1,328,961,400", ortHacim: "726,601,888", artis: "82.90" },
  { sembol: "INVES", islemHacmi: "136,572,206", ortHacim: "75,428,802", artis: "81.06" },
  { sembol: "SVGYO", islemHacmi: "1,167,645,599", ortHacim: "645,423,062", artis: "80.91" },
  { sembol: "VKGYO", islemHacmi: "79,890,373", ortHacim: "44,394,154", artis: "79.96" },
  { sembol: "HLGYO", islemHacmi: "303,639,696", ortHacim: "170,523,948", artis: "78.27" },
  { sembol: "KTLEV", islemHacmi: "21,466,937,828", ortHacim: "12,147,029,897", artis: "76.73" },
  { sembol: "ETILR", islemHacmi: "48,539,803", ortHacim: "27,632,821", artis: "75.66" },
  { sembol: "DUNYH", islemHacmi: "482,480,391", ortHacim: "275,818,459", artis: "74.93" },
  { sembol: "ICUGS", islemHacmi: "142,925,000", ortHacim: "83,019,833", artis: "72.16" },
  { sembol: "KZGYO", islemHacmi: "100,109,760", ortHacim: "59,695,820", artis: "67.70" },
  { sembol: "BALAT", islemHacmi: "4,624,664", ortHacim: "2,783,416", artis: "66.15" },
  { sembol: "TMPOL", islemHacmi: "1,129,068,036", ortHacim: "694,695,243", artis: "62.53" },
  { sembol: "LKMNH", islemHacmi: "29,895,837", ortHacim: "18,495,067", artis: "61.64" },
  { sembol: "BOBET", islemHacmi: "281,160,255", ortHacim: "175,698,635", artis: "60.02" },
  { sembol: "DNISI", islemHacmi: "18,343,729", ortHacim: "11,578,694", artis: "58.43" },
  { sembol: "LYDYE", islemHacmi: "52,429,650", ortHacim: "33,245,845", artis: "57.70" },
  { sembol: "YAYLA", islemHacmi: "39,791,263", ortHacim: "25,392,852", artis: "56.70" },
  { sembol: "IZFAS", islemHacmi: "560,242,701", ortHacim: "359,169,451", artis: "55.98" },
  { sembol: "GATEG", islemHacmi: "4,364,617", ortHacim: "2,799,805", artis: "55.89" },
  { sembol: "BLCYT", islemHacmi: "208,594,976", ortHacim: "133,835,660", artis: "55.86" },
  { sembol: "KOCMT", islemHacmi: "433,058,917", ortHacim: "279,980,059", artis: "54.67" },
  { sembol: "TSKB", islemHacmi: "335,191,722", ortHacim: "219,620,703", artis: "52.62" },
  { sembol: "PCILT", islemHacmi: "80,148,319", ortHacim: "52,906,237", artis: "51.49" },
  { sembol: "MANAS", islemHacmi: "2,323,054,182", ortHacim: "1,564,891,342", artis: "48.45" },
  { sembol: "KATMR", islemHacmi: "260,622,376", ortHacim: "176,859,377", artis: "47.36" },
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
import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "SEYGO", islemHacmi: "94,192,645", ortHacim: "29,982,863", artis: "214.15" },
  { sembol: "BIGEN", islemHacmi: "1,218,247,128", ortHacim: "395,465,846", artis: "208.05" },
  { sembol: "SVGYO", islemHacmi: "1,647,695,570", ortHacim: "575,914,384", artis: "186.10" },
  { sembol: "SNPAM", islemHacmi: "2,628,318", ortHacim: "948,402", artis: "177.13" },
  { sembol: "KRDMA", islemHacmi: "1,003,047,257", ortHacim: "383,597,376", artis: "161.48" },
  { sembol: "VERTU", islemHacmi: "81,628,171", ortHacim: "32,738,127", artis: "149.34" },
  { sembol: "KGYO", islemHacmi: "693,758,473", ortHacim: "296,373,139", artis: "134.08" },
  { sembol: "BRLSM", islemHacmi: "233,310,221", ortHacim: "104,345,744", artis: "123.59" },
  { sembol: "CEMAS", islemHacmi: "172,792,140", ortHacim: "78,058,226", artis: "121.36" },
  { sembol: "SONME", islemHacmi: "8,012,989", ortHacim: "3,917,919", artis: "104.52" },
  { sembol: "KTSKR", islemHacmi: "136,819,578", ortHacim: "69,814,010", artis: "95.98" },
  { sembol: "METRO", islemHacmi: "149,898,090", ortHacim: "76,883,021", artis: "94.97" },
  { sembol: "SUNTK", islemHacmi: "196,665,771", ortHacim: "101,483,104", artis: "93.79" },
  { sembol: "TRILC", islemHacmi: "16,331,279", ortHacim: "8,506,284", artis: "91.99" },
  { sembol: "YKSLN", islemHacmi: "39,557,031", ortHacim: "20,695,613", artis: "91.14" },
  { sembol: "TMPOL", islemHacmi: "454,660,287", ortHacim: "243,087,990", artis: "87.04" },
  { sembol: "PNLSN", islemHacmi: "211,842,664", ortHacim: "114,465,505", artis: "85.07" },
  { sembol: "LYDYE", islemHacmi: "29,524,120", ortHacim: "15,995,923", artis: "84.57" },
  { sembol: "IHAAS", islemHacmi: "287,917,200", ortHacim: "156,428,195", artis: "84.06" },
  { sembol: "ATAGY", islemHacmi: "2,787,869", ortHacim: "1,536,192", artis: "81.48" },
  { sembol: "FORTE", islemHacmi: "267,841,075", ortHacim: "150,201,405", artis: "78.32" },
  { sembol: "ENERY", islemHacmi: "1,198,713,034", ortHacim: "676,816,954", artis: "77.11" },
  { sembol: "KRDMB", islemHacmi: "379,427,793", ortHacim: "217,445,416", artis: "74.49" },
  { sembol: "CMENT", islemHacmi: "2,570,471", ortHacim: "1,482,715", artis: "73.36" },
  { sembol: "LMKDC", islemHacmi: "209,605,793", ortHacim: "121,105,992", artis: "73.08" },
  { sembol: "YIGIT", islemHacmi: "109,432,319", ortHacim: "66,452,607", artis: "64.68" },
  { sembol: "SOKM", islemHacmi: "451,909,794", ortHacim: "276,694,255", artis: "63.32" },
  { sembol: "IDGYO", islemHacmi: "9,600,767", ortHacim: "5,903,496", artis: "62.62" },
  { sembol: "YONGA", islemHacmi: "1,351,999", ortHacim: "834,755", artis: "61.96" },
  { sembol: "DGATE", islemHacmi: "29,245,684", ortHacim: "18,137,763", artis: "61.24" },
  { sembol: "NETAS", islemHacmi: "45,507,427", ortHacim: "28,293,317", artis: "60.84" },
  { sembol: "ULAS", islemHacmi: "6,949,640", ortHacim: "4,331,903", artis: "60.43" },
  { sembol: "BESLR", islemHacmi: "51,864,656", ortHacim: "32,429,937", artis: "59.93" },
  { sembol: "ATSYH", islemHacmi: "12,988,375", ortHacim: "8,170,908", artis: "58.96" },
  { sembol: "SUMAS", islemHacmi: "2,188,028", ortHacim: "1,376,866", artis: "58.91" },
  { sembol: "HLGYO", islemHacmi: "189,726,542", ortHacim: "119,407,761", artis: "58.89" },
  { sembol: "ULUUN", islemHacmi: "69,105,071", ortHacim: "44,319,746", artis: "55.92" },
  { sembol: "GZNMI", islemHacmi: "191,147,729", ortHacim: "123,055,845", artis: "55.33" },
  { sembol: "VESTL", islemHacmi: "464,956,100", ortHacim: "300,632,081", artis: "54.66" },
  { sembol: "BMSTL", islemHacmi: "161,969,900", ortHacim: "105,051,923", artis: "54.18" },
  { sembol: "VESBE", islemHacmi: "175,728,406", ortHacim: "114,344,070", artis: "53.68" },
  { sembol: "VAKFN", islemHacmi: "95,175,108", ortHacim: "62,398,882", artis: "52.53" },
  { sembol: "TSPOR", islemHacmi: "197,261,020", ortHacim: "129,529,682", artis: "52.29" },
  { sembol: "MACKO", islemHacmi: "35,234,632", ortHacim: "23,440,143", artis: "50.32" },
  { sembol: "EMPAE", islemHacmi: "965,129,706", ortHacim: "642,386,456", artis: "50.24" },
  { sembol: "RYSAS", islemHacmi: "60,952,117", ortHacim: "40,592,287", artis: "50.16" },
  { sembol: "CATES", islemHacmi: "240,761,564", ortHacim: "160,964,296", artis: "49.57" },
  { sembol: "IEYHO", islemHacmi: "2,351,253,340", ortHacim: "1,581,134,148", artis: "48.71" },
  { sembol: "GLBMD", islemHacmi: "11,891,525", ortHacim: "8,215,286", artis: "44.75" },
  { sembol: "OBAMS", islemHacmi: "383,261,733", ortHacim: "267,005,666", artis: "43.54" },
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
import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";

export const metadata = {
  title: "Haftalık Hacim Artışı Olan BIST Hisseleri",
  description:
    seoAciklamasi("Haftalık ortalamasına göre işlem hacmi yükselen BIST hisselerini, güncel hacim tutarlarını ve artış oranlarını karşılaştırmalı olarak inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar",
  },
  robots: { index: false, follow: true },
};

const veriler = [
  { sembol: "UFUK", islemHacmi: "411,293,287", ortHacim: "102,162,023", artis: "302.59" },
  { sembol: "ALFAS", islemHacmi: "449,334,162", ortHacim: "130,016,181", artis: "245.60" },
  { sembol: "RAYSG", islemHacmi: "111,383,763", ortHacim: "33,846,880", artis: "229.08" },
  { sembol: "MAKIM", islemHacmi: "112,461,530", ortHacim: "35,042,997", artis: "220.92" },
  { sembol: "KLSER", islemHacmi: "182,228,759", ortHacim: "58,593,787", artis: "211.00" },
  { sembol: "BJKAS", islemHacmi: "3,527,301,721", ortHacim: "1,164,847,584", artis: "202.81" },
  { sembol: "BLCYT", islemHacmi: "216,972,080", ortHacim: "72,769,045", artis: "198.17" },
  { sembol: "KAYSE", islemHacmi: "206,065,221", ortHacim: "71,079,667", artis: "189.91" },
  { sembol: "OSTIM", islemHacmi: "78,429,222", ortHacim: "27,300,691", artis: "187.28" },
  { sembol: "JANIS", islemHacmi: "376,364,325", ortHacim: "133,499,145", artis: "181.92" },
  { sembol: "AFYON", islemHacmi: "67,820,876", ortHacim: "24,404,319", artis: "177.91" },
  { sembol: "GUNDG", islemHacmi: "1,476,003,890", ortHacim: "547,139,759", artis: "169.77" },
  { sembol: "DUNYH", islemHacmi: "324,072,358", ortHacim: "124,151,501", artis: "161.03" },
  { sembol: "NIBAS", islemHacmi: "75,707,910", ortHacim: "29,231,077", artis: "159.00" },
  { sembol: "BRLSM", islemHacmi: "170,692,538", ortHacim: "68,324,613", artis: "149.83" },
  { sembol: "BERA", islemHacmi: "307,790,348", ortHacim: "123,659,915", artis: "148.88" },
  { sembol: "RYSAS", islemHacmi: "615,384,788", ortHacim: "248,628,315", artis: "147.51" },
  { sembol: "DNISI", islemHacmi: "80,598,203", ortHacim: "33,404,766", artis: "141.28" },
  { sembol: "GEDZA", islemHacmi: "52,118,854", ortHacim: "21,748,935", artis: "139.64" },
  { sembol: "HATSN", islemHacmi: "860,786,410", ortHacim: "359,648,937", artis: "139.34" },
  { sembol: "BOBET", islemHacmi: "581,303,497", ortHacim: "243,284,113", artis: "138.94" },
  { sembol: "HUNER", islemHacmi: "387,691,519", ortHacim: "165,017,998", artis: "134.94" },
  { sembol: "PCILT", islemHacmi: "327,151,349", ortHacim: "141,260,047", artis: "131.60" },
  { sembol: "MEGMT", islemHacmi: "1,723,085,276", ortHacim: "744,247,102", artis: "131.52" },
  { sembol: "PAGYO", islemHacmi: "64,554,378", ortHacim: "27,957,249", artis: "130.90" },
  { sembol: "ONCSM", islemHacmi: "508,268,734", ortHacim: "222,202,867", artis: "128.74" },
  { sembol: "FMIZP", islemHacmi: "45,317,784", ortHacim: "19,950,903", artis: "127.15" },
  { sembol: "BUCIM", islemHacmi: "88,682,402", ortHacim: "39,312,039", artis: "125.59" },
  { sembol: "BORLS", islemHacmi: "243,824,446", ortHacim: "110,004,461", artis: "121.65" },
  { sembol: "KAREL", islemHacmi: "273,870,467", ortHacim: "127,381,400", artis: "115.00" },
  { sembol: "SARAE", islemHacmi: "6,700,361,806", ortHacim: "3,159,312,214", artis: "112.08" },
  { sembol: "SNPAM", islemHacmi: "1,172,574", ortHacim: "562,128", artis: "108.60" },
  { sembol: "CRFSA", islemHacmi: "2,586,572,145", ortHacim: "1,241,308,731", artis: "108.37" },
  { sembol: "ORMA", islemHacmi: "2,677,899", ortHacim: "1,290,862", artis: "107.45" },
  { sembol: "BASGZ", islemHacmi: "53,492,783", ortHacim: "25,934,812", artis: "106.26" },
  { sembol: "NETAS", islemHacmi: "577,615,039", ortHacim: "282,819,236", artis: "104.23" },
  { sembol: "PSDTC", islemHacmi: "93,315,313", ortHacim: "46,099,060", artis: "102.42" },
  { sembol: "EGSER", islemHacmi: "13,880,259", ortHacim: "7,124,480", artis: "94.82" },
  { sembol: "TERA", islemHacmi: "5,786,195,414", ortHacim: "2,984,905,075", artis: "93.85" },
  { sembol: "GATEG", islemHacmi: "8,003,688", ortHacim: "4,144,414", artis: "93.12" },
  { sembol: "KONYA", islemHacmi: "86,785,160", ortHacim: "45,378,414", artis: "91.25" },
  { sembol: "TGSAS", islemHacmi: "240,004,327", ortHacim: "125,771,772", artis: "90.83" },
  { sembol: "GLRMK", islemHacmi: "1,542,362,029", ortHacim: "808,586,112", artis: "90.75" },
  { sembol: "CEMZY", islemHacmi: "4,854,857,710", ortHacim: "2,551,576,397", artis: "90.27" },
  { sembol: "OZATD", islemHacmi: "5,406,963,728", ortHacim: "2,874,296,250", artis: "88.11" },
  { sembol: "EUKYO", islemHacmi: "25,581,197", ortHacim: "13,746,057", artis: "86.10" },
  { sembol: "CEMAS", islemHacmi: "89,590,745", ortHacim: "48,416,222", artis: "85.04" },
  { sembol: "ECOGR", islemHacmi: "427,067,360", ortHacim: "231,209,122", artis: "84.71" },
  { sembol: "CATES", islemHacmi: "491,971,043", ortHacim: "267,688,288", artis: "83.79" },
  { sembol: "BIGTK", islemHacmi: "154,318,059", ortHacim: "84,121,080", artis: "83.45" },
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
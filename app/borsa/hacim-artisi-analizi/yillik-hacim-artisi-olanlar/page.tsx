import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";

export const metadata = {
  title: "Yıllık Hacim Artışı Olan BIST Hisseleri",
  description:
    seoAciklamasi("Yıllık ortalamasına göre işlem hacmi yükselen BIST hisselerini, güncel hacim tutarlarını ve artış oranlarını karşılaştırmalı olarak inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar",
  },
  robots: { index: false, follow: true },
};

const veriler = [
  
  { sembol: "ADGYO", islemHacmi: "480,657,537", ortHacim: "71,107,172", artis: "575.96" },
  { sembol: "DGNMO", islemHacmi: "110,516,623", ortHacim: "36,677,216", artis: "201.32" },
  { sembol: "SUMAS", islemHacmi: "3,421,368", ortHacim: "1,374,010", artis: "149.01" },
  { sembol: "SANKO", islemHacmi: "28,955,672", ortHacim: "12,761,369", artis: "126.90" },
  { sembol: "UNLU", islemHacmi: "92,841,151", ortHacim: "42,461,347", artis: "118.65" },
  { sembol: "ENERY", islemHacmi: "942,818,505", ortHacim: "448,638,619", artis: "110.15" },
  { sembol: "TAVHL", islemHacmi: "1,844,221,458", ortHacim: "889,335,948", artis: "107.37" },
  { sembol: "MARTI", islemHacmi: "336,301,426", ortHacim: "166,239,974", artis: "102.30" },
  { sembol: "TGSAS", islemHacmi: "126,806,359", ortHacim: "65,835,184", artis: "92.61" },
  { sembol: "ZGYOT", islemHacmi: "10,934,049", ortHacim: "5,716,604", artis: "91.27" },
  { sembol: "BOBET", islemHacmi: "155,493,291", ortHacim: "81,539,965", artis: "90.70" },
  { sembol: "ODINE", islemHacmi: "1,089,942,444", ortHacim: "599,204,364", artis: "81.90" },
  { sembol: "KUVVA", islemHacmi: "38,603,222", ortHacim: "22,144,495", artis: "74.32" },
  { sembol: "OZYSR", islemHacmi: "72,990,117", ortHacim: "45,954,024", artis: "58.83" },
  { sembol: "EKIZ", islemHacmi: "2,826,283", ortHacim: "1,791,460", artis: "57.76" },
  { sembol: "SEKFK", islemHacmi: "9,227,283", ortHacim: "5,912,795", artis: "56.06" },
  { sembol: "USHOL", islemHacmi: "67,193,148", ortHacim: "43,457,907", artis: "54.62" },
  { sembol: "DURDO", islemHacmi: "35,278,540", ortHacim: "23,908,078", artis: "47.56" },
  { sembol: "ARASE", islemHacmi: "69,408,471", ortHacim: "48,499,753", artis: "43.11" },
  { sembol: "GLRMKT", islemHacmi: "130,583", ortHacim: "92,135", artis: "41.73" },
  { sembol: "SONME", islemHacmi: "9,540,286", ortHacim: "6,784,073", artis: "40.63" },
  { sembol: "YKBNK", islemHacmi: "9,909,891,014", ortHacim: "7,167,285,015", artis: "38.27" },
  { sembol: "SVGYOT", islemHacmi: "164,596", ortHacim: "119,483", artis: "37.76" },
  { sembol: "AKBNK", islemHacmi: "12,317,039,304", ortHacim: "9,400,481,237", artis: "31.03" },
  { sembol: "CELHA", islemHacmi: "124,433,387", ortHacim: "96,428,188", artis: "29.04" },
  { sembol: "KERVN", islemHacmi: "7,816,547", ortHacim: "6,211,448", artis: "25.84" },
  { sembol: "ANGEN", islemHacmi: "64,107,045", ortHacim: "51,521,978", artis: "24.43" },
  { sembol: "ASELS", islemHacmi: "13,310,602,603", ortHacim: "11,161,001,665", artis: "19.26" },
  { sembol: "GLYHO", islemHacmi: "123,094,588", ortHacim: "103,294,554", artis: "19.17" },
  { sembol: "BIMAS", islemHacmi: "4,596,078,947", ortHacim: "3,959,567,904", artis: "16.08" },
  { sembol: "GMTAS", islemHacmi: "160,618,861", ortHacim: "138,623,377", artis: "15.87" },
  { sembol: "ISBTR", islemHacmi: "3,013,173", ortHacim: "2,651,660", artis: "13.63" },
  { sembol: "KRGYO", islemHacmi: "52,951,133", ortHacim: "47,517,794", artis: "11.43" },
  { sembol: "YKSLN", islemHacmi: "46,660,759", ortHacim: "42,012,044", artis: "11.07" },
  { sembol: "DCTTR", islemHacmi: "133,048,123", ortHacim: "121,303,308", artis: "9.68" },
  { sembol: "EBEBK", islemHacmi: "47,110,584", ortHacim: "43,104,861", artis: "9.29" },
  { sembol: "TKFEN", islemHacmi: "876,603,852", ortHacim: "808,919,191", artis: "8.37" },
  { sembol: "EGEEN", islemHacmi: "133,587,775", ortHacim: "125,957,938", artis: "6.06" },
  { sembol: "OSTIM", islemHacmi: "50,718,748", ortHacim: "48,055,511", artis: "5.54" },
  { sembol: "CCOLA", islemHacmi: "465,490,383", ortHacim: "459,838,834", artis: "1.23" },
];

export default function YillikHacimArtisiPage() {
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
          Yıllık Hacim Artışı Olanlar
        </h1>

        <div className="overflow-x-auto rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
            <thead className="bg-blue-100 text-zinc-700">
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
            Yıllık Hacim Artışı Olan Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Yıllık hacim artışı olan hisseler sayfası, son işlem hacmi ile uzun
            dönem ortalama hacim arasında belirgin fark bulunan hisseleri takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi
            dikkat çekici şekilde artan hisseleri toplu olarak inceleyebilir,
            piyasadaki güçlü ilgi gören şirketleri daha kolay belirleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hacim artışı, teknik analizde fiyat hareketinin gücünü destekleyen
            önemli göstergelerden biridir. Özellikle yıllık ortalama hacme göre
            yükselen işlem hacmi, yatırımcı ilgisinin arttığını ve hissede önemli
            bir hareketlilik oluştuğunu gösterebilir. Bu nedenle yüksek hacim artışı
            yaşayan hisseler, kısa ve orta vadeli analizlerde yakından izlenir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan işlem hacmi, ortalama hacim ve artış oranı verileri
            sayesinde hangi hisselerin normal işlem düzeninin üzerine çıktığını
            görebilirsiniz. Bu veriler hem momentum arayan yatırımcılar hem de
            piyasa hareketlerini erkenden fark etmek isteyen kullanıcılar için
            önemli bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel hacim artışı olan hisseler, BIST işlem hacmi karşılaştırmaları,
            yıllık ortalamaya göre yükselen hisseler ve borsa teknik takip ekranları
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
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
  { sembol: "BIKAS", islemHacmi: "1,648,235,017", ortHacim: "229,211,591", artis: "619.09" },
  { sembol: "LKMNH", islemHacmi: "211,198,905", ortHacim: "31,330,095", artis: "574.11" },
  { sembol: "MARTI", islemHacmi: "996,832,284", ortHacim: "150,928,025", artis: "560.47" },
  { sembol: "KRPLS", islemHacmi: "231,485,424", ortHacim: "35,165,242", artis: "558.28" },
  { sembol: "JANTS", islemHacmi: "398,941,828", ortHacim: "65,289,225", artis: "511.04" },
  { sembol: "VAKBN", islemHacmi: "9,533,393,887", ortHacim: "1,592,156,609", artis: "498.77" },
  { sembol: "OZATD", islemHacmi: "4,020,731,113", ortHacim: "691,953,234", artis: "481.07" },
  { sembol: "AKFGY", islemHacmi: "426,647,327", ortHacim: "84,702,599", artis: "403.70" },
  { sembol: "EGEPO", islemHacmi: "244,136,293", ortHacim: "49,648,773", artis: "391.73" },
  { sembol: "TTKOM", islemHacmi: "7,683,640,829", ortHacim: "1,581,753,063", artis: "385.77" },
  { sembol: "MRCYO", islemHacmi: "915,085,970", ortHacim: "191,285,090", artis: "378.39" },
  { sembol: "KZGYO", islemHacmi: "244,742,958", ortHacim: "52,605,906", artis: "365.24" },
  { sembol: "KTLEV", islemHacmi: "16,249,359,816", ortHacim: "3,541,302,177", artis: "358.85" },
  { sembol: "ALKLC", islemHacmi: "2,134,848,097", ortHacim: "494,733,024", artis: "331.52" },
  { sembol: "KERVN", islemHacmi: "24,935,479", ortHacim: "5,796,441", artis: "330.19" },
  { sembol: "DEVA", islemHacmi: "206,281,559", ortHacim: "50,140,712", artis: "311.41" },
  { sembol: "KARSN", islemHacmi: "862,382,442", ortHacim: "210,574,693", artis: "309.54" },
  { sembol: "BVSAN", islemHacmi: "577,935,845", ortHacim: "142,850,914", artis: "304.57" },
  { sembol: "KONYA", islemHacmi: "225,159,318", ortHacim: "57,124,565", artis: "294.15" },
  { sembol: "PATEK", islemHacmi: "2,184,251,214", ortHacim: "585,931,500", artis: "272.78" },
  { sembol: "CEOEM", islemHacmi: "205,944,894", ortHacim: "59,108,390", artis: "248.42" },
  { sembol: "KRGYO", islemHacmi: "149,406,364", ortHacim: "45,072,932", artis: "231.48" },
  { sembol: "PASEU", islemHacmi: "4,225,282,537", ortHacim: "1,392,052,683", artis: "203.53" },
  { sembol: "ALCAR", islemHacmi: "103,698,979", ortHacim: "35,443,057", artis: "192.58" },
  { sembol: "BIGEN", islemHacmi: "978,715,567", ortHacim: "339,424,116", artis: "188.35" },
  { sembol: "MZHLD", islemHacmi: "10,126,520", ortHacim: "3,582,328", artis: "182.68" },
  { sembol: "HUNER", islemHacmi: "282,178,501", ortHacim: "105,636,171", artis: "167.12" },
  { sembol: "ENERY", islemHacmi: "1,040,328,662", ortHacim: "393,686,661", artis: "164.25" },
  { sembol: "SISE", islemHacmi: "6,741,998,057", ortHacim: "2,606,959,216", artis: "158.62" },
  { sembol: "BAHKM", islemHacmi: "351,816,129", ortHacim: "137,715,028", artis: "155.47" },
  { sembol: "TERA", islemHacmi: "7,371,118,389", ortHacim: "2,896,057,349", artis: "154.52" },
  { sembol: "KUVAS", islemHacmi: "1,773,682,935", ortHacim: "701,471,041", artis: "152.85" },
  { sembol: "SASA", islemHacmi: "18,244,055,475", ortHacim: "7,464,987,915", artis: "144.39" },
  { sembol: "MRSHL", islemHacmi: "151,445,939", ortHacim: "63,422,074", artis: "138.79" },
  { sembol: "RYSAS", islemHacmi: "498,929,668", ortHacim: "211,280,496", artis: "136.15" },
  { sembol: "DCTTR", islemHacmi: "310,254,653", ortHacim: "132,090,769", artis: "134.88" },
  { sembol: "EFOR", islemHacmi: "2,380,599,632", ortHacim: "1,025,151,079", artis: "132.22" },
  { sembol: "TGSAS", islemHacmi: "131,833,919", ortHacim: "56,967,199", artis: "131.42" },
  { sembol: "EGEEN", islemHacmi: "272,626,950", ortHacim: "118,784,890", artis: "129.51" },
  { sembol: "CRFSA", islemHacmi: "477,664,654", ortHacim: "208,713,128", artis: "128.86" },
  { sembol: "CMBTN", islemHacmi: "106,555,239", ortHacim: "46,724,909", artis: "128.05" },
  { sembol: "FZLGY", islemHacmi: "660,277,857", ortHacim: "291,087,507", artis: "126.83" },
  { sembol: "AKFYE", islemHacmi: "406,230,668", ortHacim: "179,529,515", artis: "126.28" },
  { sembol: "KRDMA", islemHacmi: "673,697,142", ortHacim: "298,043,630", artis: "126.04" },
  { sembol: "GRNYO", islemHacmi: "19,218,617", ortHacim: "8,596,550", artis: "123.56" },
  { sembol: "CATES", islemHacmi: "203,241,642", ortHacim: "92,289,541", artis: "120.22" },
  { sembol: "AYGAZ", islemHacmi: "464,449,616", ortHacim: "214,270,019", artis: "116.76" },
  { sembol: "EPLAS", islemHacmi: "78,316,139", ortHacim: "37,597,455", artis: "108.30" },
  { sembol: "KRVGD", islemHacmi: "66,437,977", ortHacim: "32,213,532", artis: "106.24" },
  { sembol: "BOBET", islemHacmi: "169,721,899", ortHacim: "83,353,930", artis: "103.62" },
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
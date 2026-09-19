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
  { sembol: "ULAK", islemHacmi: "564,431,946", ortHacim: "160,468,232", artis: "251.74" },
  { sembol: "SELEC", islemHacmi: "74,523,516", ortHacim: "21,782,227", artis: "242.13" },
  { sembol: "GEDIK", islemHacmi: "135,733,885", ortHacim: "46,179,625", artis: "193.92" },
  { sembol: "GESAN", islemHacmi: "3,247,356,004", ortHacim: "1,154,590,037", artis: "181.26" },
  { sembol: "MTYKO", islemHacmi: "8,821,137", ortHacim: "3,320,065", artis: "165.69" },
  { sembol: "KONTR", islemHacmi: "48,736,569", ortHacim: "19,826,684", artis: "145.81" },
  { sembol: "ALFAS", islemHacmi: "209,906,902", ortHacim: "86,741,786", artis: "141.99" },
  { sembol: "GLRMK", islemHacmi: "2,984,115,239", ortHacim: "1,253,946,835", artis: "137.98" },
  { sembol: "ANHYT", islemHacmi: "344,143,110", ortHacim: "146,029,756", artis: "135.67" },
  { sembol: "ORCAY", islemHacmi: "16,186,647", ortHacim: "7,048,716", artis: "129.64" },
  { sembol: "PASEU", islemHacmi: "96,694,375", ortHacim: "42,141,235", artis: "129.45" },
  { sembol: "ASUZU", islemHacmi: "73,568,922", ortHacim: "32,739,569", artis: "124.71" },
  { sembol: "BANVT", islemHacmi: "52,335,441", ortHacim: "23,387,378", artis: "123.78" },
  { sembol: "ZRGYO", islemHacmi: "169,507,829", ortHacim: "79,922,474", artis: "112.09" },
  { sembol: "INVEO", islemHacmi: "109,846,829", ortHacim: "52,334,604", artis: "109.88" },
  { sembol: "EUPWR", islemHacmi: "3,322,186,354", ortHacim: "1,670,729,333", artis: "98.85" },
  { sembol: "NUHCM", islemHacmi: "24,412,351", ortHacim: "12,547,857", artis: "94.55" },
  { sembol: "EMNIS", islemHacmi: "2,351,422", ortHacim: "1,211,918", artis: "94.02" },
  { sembol: "RYGYO", islemHacmi: "320,469,381", ortHacim: "166,682,720", artis: "92.26" },
  { sembol: "LMKDC", islemHacmi: "309,894,553", ortHacim: "162,519,816", artis: "90.68" },
  { sembol: "ISGYO", islemHacmi: "82,808,389", ortHacim: "44,406,099", artis: "86.48" },
  { sembol: "KRDMB", islemHacmi: "435,956,711", ortHacim: "235,308,857", artis: "85.27" },
  { sembol: "RYSAS", islemHacmi: "920,362,126", ortHacim: "501,720,750", artis: "83.44" },
  { sembol: "MAVI", islemHacmi: "881,068,140", ortHacim: "481,276,342", artis: "83.07" },
  { sembol: "ARDYZ", islemHacmi: "976,853,306", ortHacim: "539,728,306", artis: "80.99" },
  { sembol: "ODINE", islemHacmi: "12,586,605", ortHacim: "7,098,631", artis: "77.31" },
  { sembol: "INVES", islemHacmi: "99,452,386", ortHacim: "56,142,391", artis: "77.14" },
  { sembol: "YGGYO", islemHacmi: "69,444,492", ortHacim: "39,932,770", artis: "73.90" },
  { sembol: "PAGYO", islemHacmi: "53,069,342", ortHacim: "31,170,663", artis: "70.25" },
  { sembol: "SNPAM", islemHacmi: "1,625,379", ortHacim: "960,755", artis: "69.18" },
  { sembol: "COSMO", islemHacmi: "8,852,218", ortHacim: "5,241,715", artis: "68.88" },
  { sembol: "MEPET", islemHacmi: "12,738,807", ortHacim: "7,592,158", artis: "67.79" },
  { sembol: "ARCLK", islemHacmi: "263,389,679", ortHacim: "157,531,502", artis: "67.20" },
  { sembol: "ERBOS", islemHacmi: "13,339,639", ortHacim: "8,017,067", artis: "66.39" },
  { sembol: "ARFYE", islemHacmi: "117,663,063", ortHacim: "70,852,156", artis: "66.07" },
  { sembol: "RNPOL", islemHacmi: "18,781,045", ortHacim: "11,358,360", artis: "65.35" },
  { sembol: "UNLU", islemHacmi: "115,383,408", ortHacim: "71,015,884", artis: "62.48" },
  { sembol: "DOHOL", islemHacmi: "474,253,190", ortHacim: "295,000,040", artis: "60.76" },
  { sembol: "KRONT", islemHacmi: "40,736,708", ortHacim: "25,430,986", artis: "60.19" },
  { sembol: "PSGYO", islemHacmi: "523,477,465", ortHacim: "335,315,197", artis: "56.12" },
  { sembol: "PENTA", islemHacmi: "45,940,859", ortHacim: "29,719,905", artis: "54.58" },
  { sembol: "ATLAS", islemHacmi: "19,984,693", ortHacim: "12,944,064", artis: "54.39" },
  { sembol: "MEGAP", islemHacmi: "1,847,803", ortHacim: "1,198,105", artis: "54.23" },
  { sembol: "DOFRB", islemHacmi: "636,001,570", ortHacim: "414,181,949", artis: "53.56" },
  { sembol: "ANSGR", islemHacmi: "223,295,108", ortHacim: "146,595,261", artis: "52.32" },
  { sembol: "SEGMN", islemHacmi: "100,800,817", ortHacim: "66,249,129", artis: "52.15" },
  { sembol: "EGPRO", islemHacmi: "90,270,422", ortHacim: "59,576,139", artis: "51.52" },
  { sembol: "ISBIR", islemHacmi: "2,354,150", ortHacim: "1,554,908", artis: "51.40" },
  { sembol: "LIDFA", islemHacmi: "61,176,182", ortHacim: "40,656,714", artis: "50.47" },
  { sembol: "ALVES", islemHacmi: "19,557,939", ortHacim: "13,166,062", artis: "48.55" },
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
            Haftalık Hacim Artışı Olan Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık hacim artışı olan hisseler sayfası, son işlem hacmi ile haftalık
            ortalama hacim arasında belirgin fark bulunan hisseleri takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi
            dikkat çekici şekilde artan hisseleri toplu olarak inceleyebilir,
            piyasadaki güçlü ilgi gören şirketleri daha kolay belirleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hacim artışı, teknik analizde fiyat hareketinin gücünü destekleyen
            önemli göstergelerden biridir. Özellikle haftalık ortalama hacme göre
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
            haftalık ortalamaya göre yükselen hisseler ve borsa teknik takip ekranları
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

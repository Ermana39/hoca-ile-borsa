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
  { sembol: "GESAN", islemHacmi: "3,247,356,004", ortHacim: "658,701,322", artis: "392.99" },
  { sembol: "RYSAS", islemHacmi: "920,362,126", ortHacim: "217,765,326", artis: "322.64" },
  { sembol: "DMRGD", islemHacmi: "1,380,775,567", ortHacim: "350,974,258", artis: "293.41" },
  { sembol: "ARDYZ", islemHacmi: "976,853,306", ortHacim: "269,703,469", artis: "262.20" },
  { sembol: "UNLU", islemHacmi: "115,383,408", ortHacim: "32,857,532", artis: "251.16" },
  { sembol: "GLRMK", islemHacmi: "2,984,115,239", ortHacim: "855,266,369", artis: "248.91" },
  { sembol: "RYGYO", islemHacmi: "320,469,381", ortHacim: "93,748,224", artis: "241.84" },
  { sembol: "TKFEN", islemHacmi: "2,448,917,655", ortHacim: "740,025,794", artis: "230.92" },
  { sembol: "ENERY", islemHacmi: "1,346,899,563", ortHacim: "408,133,967", artis: "230.01" },
  { sembol: "ULAK", islemHacmi: "564,431,946", ortHacim: "175,188,224", artis: "222.19" },
  { sembol: "ZRGYO", islemHacmi: "169,507,829", ortHacim: "58,228,748", artis: "191.11" },
  { sembol: "MAVI", islemHacmi: "881,068,140", ortHacim: "305,068,286", artis: "188.81" },
  { sembol: "EUPWR", islemHacmi: "3,322,186,354", ortHacim: "1,161,845,924", artis: "185.94" },
  { sembol: "ANHYT", islemHacmi: "344,143,110", ortHacim: "122,469,329", artis: "181.00" },
  { sembol: "EFOR", islemHacmi: "2,754,779,253", ortHacim: "1,049,041,962", artis: "162.60" },
  { sembol: "BAHKM", islemHacmi: "375,138,975", ortHacim: "145,423,154", artis: "157.96" },
  { sembol: "CEOEM", islemHacmi: "145,409,740", ortHacim: "60,236,895", artis: "141.40" },
  { sembol: "PAGYO", islemHacmi: "53,069,342", ortHacim: "22,707,498", artis: "133.71" },
  { sembol: "KRPLS", islemHacmi: "75,551,701", ortHacim: "36,462,431", artis: "107.20" },
  { sembol: "ATLAS", islemHacmi: "19,984,693", ortHacim: "9,711,120", artis: "105.79" },
  { sembol: "NETAS", islemHacmi: "131,372,735", ortHacim: "67,214,124", artis: "95.45" },
  { sembol: "BOSSA", islemHacmi: "47,815,500", ortHacim: "25,014,372", artis: "91.15" },
  { sembol: "LMKDC", islemHacmi: "309,894,553", ortHacim: "165,406,947", artis: "87.35" },
  { sembol: "EGEEN", islemHacmi: "226,529,695", ortHacim: "122,507,123", artis: "84.91" },
  { sembol: "AGHOL", islemHacmi: "304,991,496", ortHacim: "165,806,391", artis: "83.94" },
  { sembol: "TNZTP", islemHacmi: "161,488,923", ortHacim: "88,307,817", artis: "82.87" },
  { sembol: "HRKET", islemHacmi: "311,550,823", ortHacim: "170,686,263", artis: "82.53" },
  { sembol: "SNGYO", islemHacmi: "204,415,744", ortHacim: "112,437,614", artis: "81.80" },
  { sembol: "GUBRF", islemHacmi: "2,158,080,164", ortHacim: "1,201,853,860", artis: "79.56" },
  { sembol: "KCHOL", islemHacmi: "9,718,418,538", ortHacim: "5,447,267,571", artis: "78.41" },
  { sembol: "BJKAS", islemHacmi: "425,001,053", ortHacim: "239,756,440", artis: "77.26" },
  { sembol: "RGYAS", islemHacmi: "581,517,813", ortHacim: "328,110,458", artis: "77.23" },
  { sembol: "ASUZU", islemHacmi: "73,568,922", ortHacim: "41,891,945", artis: "75.62" },
  { sembol: "AHGAZ", islemHacmi: "291,763,949", ortHacim: "173,204,219", artis: "68.45" },
  { sembol: "ISDMR", islemHacmi: "233,399,515", ortHacim: "141,890,122", artis: "64.49" },
  { sembol: "DOHOL", islemHacmi: "474,253,190", ortHacim: "290,004,110", artis: "63.53" },
  { sembol: "AKBNK", islemHacmi: "14,927,793,211", ortHacim: "9,159,199,638", artis: "62.98" },
  { sembol: "KRTEK", islemHacmi: "1,677,904", ortHacim: "1,039,724", artis: "61.38" },
  { sembol: "EGPRO", islemHacmi: "90,270,422", ortHacim: "56,416,974", artis: "60.04" },
  { sembol: "YGGYO", islemHacmi: "69,444,492", ortHacim: "44,529,695", artis: "55.95" },
  { sembol: "DOCO", islemHacmi: "101,389,115", ortHacim: "66,566,983", artis: "52.31" },
  { sembol: "EMNIS", islemHacmi: "2,351,422", ortHacim: "1,576,415", artis: "49.16" },
  { sembol: "HUNER", islemHacmi: "160,493,490", ortHacim: "109,005,506", artis: "47.23" },
  { sembol: "TAVHL", islemHacmi: "1,263,968,004", ortHacim: "859,555,161", artis: "47.05" },
  { sembol: "TUPRS", islemHacmi: "10,018,224,721", ortHacim: "6,866,346,429", artis: "45.90" },
  { sembol: "KUYAS", islemHacmi: "1,030,242,802", ortHacim: "710,177,101", artis: "45.07" },
  { sembol: "GEDIK", islemHacmi: "135,733,885", ortHacim: "93,591,157", artis: "45.03" },
  { sembol: "AKFIS", islemHacmi: "365,753,709", ortHacim: "252,271,491", artis: "44.98" },
  { sembol: "AYGAZ", islemHacmi: "314,516,708", ortHacim: "220,283,585", artis: "42.78" },
  { sembol: "OZSUB", islemHacmi: "110,250,914", ortHacim: "77,244,934", artis: "42.73" },
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
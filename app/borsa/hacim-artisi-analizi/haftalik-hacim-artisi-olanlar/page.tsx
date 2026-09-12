import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";

export const metadata = {
  title: "Aylık Hacim Artışı Olan BIST Hisseleri",
  description:
    seoAciklamasi("Aylık ortalamasına göre işlem hacmi yükselen BIST hisselerini, güncel hacim tutarlarını ve artış oranlarını karşılaştırmalı olarak inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar",
  },
  robots: { index: false, follow: true },
};

const veriler = [
  { sembol: "LKMNH", islemHacmi: "211,198,905", ortHacim: "27,909,393", artis: "656.73" },
  { sembol: "CEOEM", islemHacmi: "205,944,894", ortHacim: "37,012,589", artis: "456.42" },
  { sembol: "AKFGY", islemHacmi: "426,647,327", ortHacim: "79,660,970", artis: "435.58" },
  { sembol: "BMSCH", islemHacmi: "110,194,265", ortHacim: "21,786,172", artis: "405.80" },
  { sembol: "MZHLD", islemHacmi: "10,126,520", ortHacim: "2,075,624", artis: "387.88" },
  { sembol: "PATEK", islemHacmi: "2,184,251,214", ortHacim: "463,391,274", artis: "371.36" },
  { sembol: "JANTS", islemHacmi: "398,941,828", ortHacim: "90,623,177", artis: "340.22" },
  { sembol: "GRNYO", islemHacmi: "19,218,617", ortHacim: "4,645,762", artis: "313.68" },
  { sembol: "VAKBN", islemHacmi: "9,533,393,887", ortHacim: "2,393,175,723", artis: "298.36" },
  { sembol: "ZRGYO", islemHacmi: "75,116,446", ortHacim: "19,356,512", artis: "288.07" },
  { sembol: "BVSAN", islemHacmi: "577,935,845", ortHacim: "152,638,219", artis: "278.63" },
  { sembol: "DCTTR", islemHacmi: "310,254,653", ortHacim: "84,815,489", artis: "265.80" },
  { sembol: "TTKOM", islemHacmi: "7,683,640,829", ortHacim: "2,111,789,032", artis: "263.85" },
  { sembol: "MRCYO", islemHacmi: "915,085,970", ortHacim: "263,136,609", artis: "247.76" },
  { sembol: "ALCAR", islemHacmi: "103,698,979", ortHacim: "30,542,848", artis: "239.52" },
  { sembol: "EGEPO", islemHacmi: "244,136,293", ortHacim: "72,455,967", artis: "236.94" },
  { sembol: "IEYHO", islemHacmi: "865,288,997", ortHacim: "263,299,180", artis: "228.63" },
  { sembol: "MARTI", islemHacmi: "996,832,284", ortHacim: "303,664,918", artis: "228.27" },
  { sembol: "KONYA", islemHacmi: "225,159,318", ortHacim: "69,722,616", artis: "222.94" },
  { sembol: "KRPLS", islemHacmi: "231,485,424", ortHacim: "71,850,524", artis: "222.18" },
  { sembol: "IHLGM", islemHacmi: "118,971,882", ortHacim: "37,381,241", artis: "218.27" },
  { sembol: "BANVT", islemHacmi: "45,459,640", ortHacim: "14,514,587", artis: "213.20" },
  { sembol: "EPLAS", islemHacmi: "78,316,139", ortHacim: "25,051,797", artis: "212.62" },
  { sembol: "EGEEN", islemHacmi: "272,626,950", ortHacim: "88,396,927", artis: "208.41" },
  { sembol: "FZLGY", islemHacmi: "660,277,857", ortHacim: "218,097,199", artis: "202.74" },
  { sembol: "KRVGD", islemHacmi: "66,437,977", ortHacim: "22,370,481", artis: "196.99" },
  { sembol: "CMBTN", islemHacmi: "106,555,239", ortHacim: "36,056,632", artis: "195.52" },
  { sembol: "BEYAZ", islemHacmi: "50,810,755", ortHacim: "18,642,602", artis: "172.55" },
  { sembol: "TERA", islemHacmi: "7,371,118,389", ortHacim: "2,746,008,089", artis: "168.43" },
  { sembol: "KUVAS", islemHacmi: "1,773,682,935", ortHacim: "666,295,588", artis: "166.20" },
  { sembol: "KZGYO", islemHacmi: "244,742,958", ortHacim: "97,360,103", artis: "151.38" },
  { sembol: "IHGZT", islemHacmi: "60,998,858", ortHacim: "24,741,713", artis: "146.54" },
  { sembol: "AKYHO", islemHacmi: "7,421,829", ortHacim: "3,050,603", artis: "143.29" },
  { sembol: "MIATK", islemHacmi: "1,839,791,447", ortHacim: "765,777,248", artis: "140.25" },
  { sembol: "KRTEK", islemHacmi: "13,245,109", ortHacim: "5,766,028", artis: "129.71" },
  { sembol: "EKIZ", islemHacmi: "1,744,666", ortHacim: "773,007", artis: "125.70" },
  { sembol: "ENERY", islemHacmi: "1,040,328,662", ortHacim: "471,567,225", artis: "120.61" },
  { sembol: "FLAP", islemHacmi: "29,425,794", ortHacim: "13,353,428", artis: "120.36" },
  { sembol: "SANKO", islemHacmi: "19,111,699", ortHacim: "8,892,485", artis: "114.92" },
  { sembol: "KERVN", islemHacmi: "24,935,479", ortHacim: "11,816,478", artis: "111.02" },
  { sembol: "KLRHO", islemHacmi: "582,656,724", ortHacim: "279,023,814", artis: "108.82" },
  { sembol: "ALKLC", islemHacmi: "2,134,848,097", ortHacim: "1,027,722,606", artis: "107.73" },
  { sembol: "BFREN", islemHacmi: "51,202,647", ortHacim: "25,093,307", artis: "104.05" },
  { sembol: "DEVA", islemHacmi: "206,281,559", ortHacim: "101,141,639", artis: "103.95" },
  { sembol: "BULGS", islemHacmi: "182,760,253", ortHacim: "91,834,431", artis: "99.01" },
  { sembol: "KRGYO", islemHacmi: "149,406,364", ortHacim: "75,545,405", artis: "97.77" },
  { sembol: "KTLEV", islemHacmi: "16,249,359,816", ortHacim: "8,307,369,423", artis: "95.60" },
  { sembol: "SASA", islemHacmi: "18,244,055,475", ortHacim: "9,415,399,028", artis: "93.77" },
  { sembol: "IHLAS", islemHacmi: "247,418,706", ortHacim: "131,411,090", artis: "88.28" },
  { sembol: "MERCN", islemHacmi: "150,932,394", ortHacim: "80,825,093", artis: "86.74" },
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
          Aylık Hacim Artışı Olanlar
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

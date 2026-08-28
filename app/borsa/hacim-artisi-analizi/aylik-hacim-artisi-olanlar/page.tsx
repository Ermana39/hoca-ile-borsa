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
  { sembol: "TEHOL", islemHacmi: "17,016,437,678", ortHacim: "2,381,956,861", artis: "614.39" },
  { sembol: "ENSRI", islemHacmi: "872,223,031", ortHacim: "131,948,112", artis: "561.03" },
  { sembol: "BAHKM", islemHacmi: "784,811,102", ortHacim: "136,953,416", artis: "473.05" },
  { sembol: "BRLSM", islemHacmi: "953,030,309", ortHacim: "170,393,784", artis: "459.31" },
  { sembol: "MRGYO", islemHacmi: "532,981,441", ortHacim: "99,013,204", artis: "438.29" },
  { sembol: "CANTE", islemHacmi: "1,363,354,114", ortHacim: "272,628,173", artis: "400.08" },
  { sembol: "NIBAS", islemHacmi: "320,276,100", ortHacim: "74,087,843", artis: "332.29" },
  { sembol: "MARTI", islemHacmi: "389,921,374", ortHacim: "92,846,848", artis: "319.96" },
  { sembol: "DURDO", islemHacmi: "48,294,656", ortHacim: "11,850,107", artis: "307.55" },
  { sembol: "MAKTK", islemHacmi: "142,671,090", ortHacim: "36,783,411", artis: "287.87" },
  { sembol: "KARSN", islemHacmi: "421,551,712", ortHacim: "124,367,517", artis: "238.96" },
  { sembol: "VAKBN", islemHacmi: "4,629,925,844", ortHacim: "1,385,096,906", artis: "234.27" },
  { sembol: "TGSAS", islemHacmi: "483,978,330", ortHacim: "145,610,022", artis: "232.38" },
  { sembol: "AYCES", islemHacmi: "178,849,725", ortHacim: "53,854,823", artis: "232.10" },
  { sembol: "RYSAS", islemHacmi: "1,192,005,529", ortHacim: "375,681,624", artis: "217.29" },
  { sembol: "GRTHO", islemHacmi: "621,126,380", ortHacim: "199,847,694", artis: "210.80" },
  { sembol: "OZATD", islemHacmi: "8,824,079,295", ortHacim: "2,880,253,278", artis: "206.36" },
  { sembol: "ELITE", islemHacmi: "130,712,435", ortHacim: "42,807,218", artis: "205.35" },
  { sembol: "PKENT", islemHacmi: "56,212,594", ortHacim: "19,171,431", artis: "193.21" },
  { sembol: "GLRYH", islemHacmi: "93,788,874", ortHacim: "32,819,495", artis: "185.77" },
  { sembol: "ODAS", islemHacmi: "1,183,560,251", ortHacim: "415,722,189", artis: "184.70" },
  { sembol: "BINHO", islemHacmi: "730,608,938", ortHacim: "271,323,301", artis: "169.28" },
  { sembol: "SNICA", islemHacmi: "163,627,557", ortHacim: "61,247,400", artis: "167.16" },
  { sembol: "MAGEN", islemHacmi: "1,369,156,983", ortHacim: "515,911,476", artis: "165.39" },
  { sembol: "ALKLC", islemHacmi: "1,827,495,441", ortHacim: "716,543,014", artis: "155.04" },
  { sembol: "KLYPV", islemHacmi: "363,972,380", ortHacim: "148,348,563", artis: "145.35" },
  { sembol: "HATSN", islemHacmi: "1,030,347,256", ortHacim: "425,629,680", artis: "142.08" },
  { sembol: "AKENR", islemHacmi: "260,705,227", ortHacim: "108,836,697", artis: "139.54" },
  { sembol: "AHGAZ", islemHacmi: "333,576,030", ortHacim: "140,784,414", artis: "136.94" },
  { sembol: "ERSU", islemHacmi: "21,142,022", ortHacim: "8,949,179", artis: "136.25" },
  { sembol: "HUNER", islemHacmi: "295,076,599", ortHacim: "125,356,751", artis: "135.39" },
  { sembol: "GZNMI", islemHacmi: "214,738,435", ortHacim: "91,723,612", artis: "134.11" },
  { sembol: "EGPRO", islemHacmi: "107,328,556", ortHacim: "46,870,589", artis: "128.99" },
  { sembol: "BMSCH", islemHacmi: "35,556,036", ortHacim: "15,554,634", artis: "128.59" },
  { sembol: "EUREN", islemHacmi: "215,992,147", ortHacim: "96,893,878", artis: "122.92" },
  { sembol: "BIENY", islemHacmi: "166,684,091", ortHacim: "76,182,890", artis: "118.79" },
  { sembol: "AKFIS", islemHacmi: "771,225,283", ortHacim: "355,044,061", artis: "117.22" },
  { sembol: "BIOEN", islemHacmi: "274,993,319", ortHacim: "129,068,782", artis: "113.06" },
  { sembol: "CONSE", islemHacmi: "32,028,582", ortHacim: "15,231,464", artis: "110.28" },
  { sembol: "BYDNR", islemHacmi: "57,390,901", ortHacim: "27,923,154", artis: "105.53" },
  { sembol: "UFUK", islemHacmi: "179,170,897", ortHacim: "90,339,003", artis: "98.33" },
  { sembol: "DOFRB", islemHacmi: "1,251,629,667", ortHacim: "633,150,095", artis: "97.68" },
  { sembol: "BLCYT", islemHacmi: "94,568,586", ortHacim: "48,164,930", artis: "96.34" },
  { sembol: "FRIGO", islemHacmi: "202,537,489", ortHacim: "103,219,829", artis: "96.22" },
  { sembol: "TMSN", islemHacmi: "113,169,891", ortHacim: "57,885,517", artis: "95.51" },
  { sembol: "TEKTU", islemHacmi: "104,533,863", ortHacim: "53,496,071", artis: "95.40" },
  { sembol: "HKTM", islemHacmi: "361,192,405", ortHacim: "185,592,094", artis: "94.62" },
  { sembol: "SELVA", islemHacmi: "105,142,598", ortHacim: "54,179,583", artis: "94.06" },
  { sembol: "RYGYO", islemHacmi: "264,869,830", ortHacim: "137,117,940", artis: "93.17" },
  { sembol: "PSDTC", islemHacmi: "218,404,626", ortHacim: "114,208,271", artis: "91.23" },
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
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
  { sembol: "UFUK", islemHacmi: "1,779,735,275", ortHacim: "69,375,984", artis: "2,465.35" },
  { sembol: "GESAN", islemHacmi: "5,546,101,182", ortHacim: "619,719,127", artis: "794.94" },
  { sembol: "KARSN", islemHacmi: "1,328,961,400", ortHacim: "189,979,130", artis: "599.53" },
  { sembol: "EUPWR", islemHacmi: "7,052,321,229", ortHacim: "1,091,189,936", artis: "546.30" },
  { sembol: "KTLEV", islemHacmi: "21,466,937,828", ortHacim: "3,370,662,251", artis: "536.88" },
  { sembol: "BJKAS", islemHacmi: "1,137,495,549", ortHacim: "212,196,509", artis: "436.06" },
  { sembol: "TMPOL", islemHacmi: "1,129,068,036", ortHacim: "242,824,059", artis: "364.97" },
  { sembol: "SELEC", islemHacmi: "1,668,882,745", ortHacim: "378,713,992", artis: "340.67" },
  { sembol: "BIGTK", islemHacmi: "617,391,106", ortHacim: "156,393,400", artis: "294.77" },
  { sembol: "MARTI", islemHacmi: "525,648,003", ortHacim: "142,205,731", artis: "269.64" },
  { sembol: "DUNYH", islemHacmi: "482,480,391", ortHacim: "131,386,802", artis: "267.22" },
  { sembol: "INTET", islemHacmi: "1,448,033,008", ortHacim: "399,388,494", artis: "262.56" },
  { sembol: "BOBET", islemHacmi: "281,160,255", ortHacim: "80,239,829", artis: "250.40" },
  { sembol: "DITAS", islemHacmi: "410,845,688", ortHacim: "117,815,276", artis: "248.72" },
  { sembol: "VESBE", islemHacmi: "262,473,321", ortHacim: "76,893,093", artis: "241.35" },
  { sembol: "PSDTC", islemHacmi: "87,853,723", ortHacim: "25,815,309", artis: "240.32" },
  { sembol: "CRFSA", islemHacmi: "672,061,214", ortHacim: "198,409,375", artis: "238.72" },
  { sembol: "MANAS", islemHacmi: "2,323,054,182", ortHacim: "701,790,464", artis: "231.02" },
  { sembol: "NETAS", islemHacmi: "217,740,735", ortHacim: "66,002,157", artis: "229.90" },
  { sembol: "AVOD", islemHacmi: "230,704,113", ortHacim: "76,611,203", artis: "201.14" },
  { sembol: "HATSN", islemHacmi: "508,134,979", ortHacim: "173,536,703", artis: "192.81" },
  { sembol: "CATES", islemHacmi: "257,276,475", ortHacim: "88,571,569", artis: "190.47" },
  { sembol: "DSTKF", islemHacmi: "6,623,225,776", ortHacim: "2,343,486,189", artis: "182.62" },
  { sembol: "ANELE", islemHacmi: "695,838,598", ortHacim: "259,777,141", artis: "167.86" },
  { sembol: "TGSAS", islemHacmi: "137,880,338", ortHacim: "55,553,722", artis: "148.19" },
  { sembol: "KERVN", islemHacmi: "13,682,363", ortHacim: "5,630,565", artis: "143.00" },
  { sembol: "KOCMT", islemHacmi: "433,058,917", ortHacim: "180,001,218", artis: "140.59" },
  { sembol: "SNPAM", islemHacmi: "3,889,193", ortHacim: "1,697,699", artis: "129.09" },
  { sembol: "BIOEN", islemHacmi: "279,497,027", ortHacim: "123,382,382", artis: "126.53" },
  { sembol: "BLCYT", islemHacmi: "208,594,976", ortHacim: "93,160,618", artis: "123.91" },
  { sembol: "PEKGY", islemHacmi: "7,774,067,536", ortHacim: "3,570,936,738", artis: "117.70" },
  { sembol: "ESCAR", islemHacmi: "438,947,063", ortHacim: "202,407,456", artis: "116.86" },
  { sembol: "BYDNR", islemHacmi: "49,270,178", ortHacim: "22,856,095", artis: "115.57" },
  { sembol: "KZGYO", islemHacmi: "100,109,760", ortHacim: "46,495,542", artis: "115.31" },
  { sembol: "AKSUE", islemHacmi: "130,054,737", ortHacim: "61,545,783", artis: "111.31" },
  { sembol: "ENERY", islemHacmi: "804,174,908", ortHacim: "395,688,868", artis: "103.23" },
  { sembol: "ARDYZ", islemHacmi: "521,517,123", ortHacim: "257,566,782", artis: "102.48" },
  { sembol: "OZSUB", islemHacmi: "148,844,426", ortHacim: "74,340,655", artis: "100.22" },
  { sembol: "VAKBN", islemHacmi: "2,984,156,678", ortHacim: "1,514,215,706", artis: "97.08" },
  { sembol: "DMLKTG", islemHacmi: "157,087,437", ortHacim: "79,981,376", artis: "96.41" },
  { sembol: "BRLSM", islemHacmi: "248,984,851", ortHacim: "127,398,072", artis: "95.44" },
  { sembol: "KUVAS", islemHacmi: "1,343,065,831", ortHacim: "687,372,391", artis: "95.39" },
  { sembol: "OFSYM", islemHacmi: "180,626,941", ortHacim: "92,999,657", artis: "94.22" },
  { sembol: "VESTL", islemHacmi: "406,364,528", ortHacim: "209,850,607", artis: "93.64" },
  { sembol: "AHGAZ", islemHacmi: "326,253,722", ortHacim: "169,870,921", artis: "92.06" },
  { sembol: "IZFAS", islemHacmi: "560,242,701", ortHacim: "293,007,007", artis: "91.20" },
  { sembol: "KRPLS", islemHacmi: "58,775,210", ortHacim: "31,361,650", artis: "87.41" },
  { sembol: "GENKM", islemHacmi: "999,420,772", ortHacim: "537,715,170", artis: "85.86" },
  { sembol: "KRDMA", islemHacmi: "511,764,042", ortHacim: "290,378,103", artis: "76.24" },
  { sembol: "RYGYO", islemHacmi: "162,963,372", ortHacim: "92,738,732", artis: "75.72" },
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
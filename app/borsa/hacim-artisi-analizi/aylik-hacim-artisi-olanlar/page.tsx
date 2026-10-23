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
  { sembol: "EBEBK", islemHacmi: "144,127,983", ortHacim: "39,740,392", artis: "262.67" },
  { sembol: "EREGL", islemHacmi: "10,295,998,826", ortHacim: "2,856,252,796", artis: "260.47" },
  { sembol: "SEKFK", islemHacmi: "12,888,588", ortHacim: "3,620,911", artis: "255.95" },
  { sembol: "VAKFN", islemHacmi: "120,837,464", ortHacim: "35,004,576", artis: "245.20" },
  { sembol: "AGESA", islemHacmi: "110,342,774", ortHacim: "32,115,923", artis: "243.58" },
  { sembol: "CMENT", islemHacmi: "3,470,554", ortHacim: "1,032,109", artis: "236.26" },
  { sembol: "PKENT", islemHacmi: "95,238,924", ortHacim: "29,289,622", artis: "225.16" },
  { sembol: "QNBTR", islemHacmi: "6,461,066", ortHacim: "2,003,358", artis: "222.51" },
  { sembol: "TSKB", islemHacmi: "651,192,775", ortHacim: "230,599,551", artis: "182.39" },
  { sembol: "ALKLC", islemHacmi: "370,990,624", ortHacim: "133,988,832", artis: "176.88" },
  { sembol: "PASEU", islemHacmi: "1,040,824,123", ortHacim: "390,785,442", artis: "166.34" },
  { sembol: "DGNMO", islemHacmi: "98,121,840", ortHacim: "37,785,211", artis: "159.68" },
  { sembol: "OZYSR", islemHacmi: "58,245,225", ortHacim: "22,606,582", artis: "157.65" },
  { sembol: "KARCL", islemHacmi: "1,127,428,070", ortHacim: "438,505,780", artis: "157.11" },
  { sembol: "ISFIN", islemHacmi: "66,180,681", ortHacim: "25,923,074", artis: "155.30" },
  { sembol: "KZBGY", islemHacmi: "76,146,724", ortHacim: "30,623,996", artis: "148.65" },
  { sembol: "TCELL", islemHacmi: "3,838,283,621", ortHacim: "1,544,070,139", artis: "148.58" },
  { sembol: "NATEN", islemHacmi: "39,115,370", ortHacim: "15,738,157", artis: "148.54" },
  { sembol: "SRVGY", islemHacmi: "37,651,252", ortHacim: "15,211,091", artis: "147.52" },
  { sembol: "METRO", islemHacmi: "87,218,555", ortHacim: "35,308,974", artis: "147.02" },
  { sembol: "DCTTR", islemHacmi: "109,467,972", ortHacim: "44,576,823", artis: "145.57" },
  { sembol: "BEGYO", islemHacmi: "95,745,790", ortHacim: "39,298,367", artis: "143.64" },
  { sembol: "ULUFA", islemHacmi: "57,660,040", ortHacim: "23,913,754", artis: "141.12" },
  { sembol: "GLYHO", islemHacmi: "179,551,722", ortHacim: "74,930,539", artis: "139.62" },
  { sembol: "IHEVA", islemHacmi: "3,023,199", ortHacim: "1,269,726", artis: "138.10" },
  { sembol: "SUMAS", islemHacmi: "1,817,043", ortHacim: "777,557", artis: "133.69" },
  { sembol: "DYOBY", islemHacmi: "18,579,795", ortHacim: "8,146,126", artis: "128.08" },
  { sembol: "ISBTR", islemHacmi: "3,573,000", ortHacim: "1,575,402", artis: "126.80" },
  { sembol: "DZGYO", islemHacmi: "39,386,531", ortHacim: "17,379,942", artis: "126.62" },
  { sembol: "KLGYO", islemHacmi: "103,463,840", ortHacim: "46,224,334", artis: "123.83" },
  { sembol: "AKSEN", islemHacmi: "954,945,403", ortHacim: "431,958,568", artis: "121.07" },
  { sembol: "SKTAS", islemHacmi: "67,727,253", ortHacim: "30,961,828", artis: "118.74" },
  { sembol: "TNZTP", islemHacmi: "85,863,678", ortHacim: "41,793,594", artis: "105.45" },
  { sembol: "EMNIS", islemHacmi: "1,420,281", ortHacim: "712,375", artis: "99.37" },
  { sembol: "INFO", islemHacmi: "239,167,170", ortHacim: "120,000,829", artis: "99.30" },
  { sembol: "GSRAY", islemHacmi: "142,039,602", ortHacim: "71,492,073", artis: "98.68" },
  { sembol: "INVEO", islemHacmi: "40,617,940", ortHacim: "20,726,077", artis: "95.98" },
  { sembol: "ORGE", islemHacmi: "154,107,491", ortHacim: "80,593,749", artis: "91.22" },
  { sembol: "PRKAB", islemHacmi: "24,072,714", ortHacim: "12,806,543", artis: "87.97" },
  { sembol: "USHOL", islemHacmi: "81,952,557", ortHacim: "44,315,880", artis: "84.93" },
  { sembol: "MCARD", islemHacmi: "284,352,460", ortHacim: "155,786,035", artis: "82.53" },
  { sembol: "ISYAT", islemHacmi: "8,219,187", ortHacim: "4,510,333", artis: "82.23" },
  { sembol: "AKGRT", islemHacmi: "72,941,545", ortHacim: "40,116,023", artis: "81.83" },
  { sembol: "BFREN", islemHacmi: "20,817,212", ortHacim: "11,619,626", artis: "79.16" },
  { sembol: "CLEBI", islemHacmi: "39,528,430", ortHacim: "22,307,237", artis: "77.20" },
  { sembol: "VKGYO", islemHacmi: "49,613,806", ortHacim: "28,070,916", artis: "76.74" },
  { sembol: "YATAS", islemHacmi: "34,651,506", ortHacim: "19,687,086", artis: "76.01" },
  { sembol: "BRSAN", islemHacmi: "1,588,630,665", ortHacim: "903,637,575", artis: "75.80" },
  { sembol: "YONGA", islemHacmi: "974,371", ortHacim: "560,077", artis: "73.97" },
  { sembol: "DOCO", islemHacmi: "70,373,205", ortHacim: "40,466,193", artis: "73.91" },
];

export default function AylikHacimArtisiPage() {
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
            Aylık Hacim Artışı Olan Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Aylık hacim artışı olan hisseler sayfası, son işlem hacmi ile aylık
            ortalama hacim arasında belirgin fark bulunan hisseleri takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi
            dikkat çekici şekilde artan hisseleri toplu olarak inceleyebilir,
            piyasadaki güçlü ilgi gören şirketleri daha kolay belirleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hacim artışı, teknik analizde fiyat hareketinin gücünü destekleyen
            önemli göstergelerden biridir. Özellikle aylık ortalama hacme göre
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
            aylık ortalamaya göre yükselen hisseler ve borsa teknik takip ekranları
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
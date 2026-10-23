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
  { sembol: "SRVGY", islemHacmi: "37,651,252", ortHacim: "13,224,613", artis: "184.71" },
  { sembol: "VAKFN", islemHacmi: "120,837,464", ortHacim: "42,953,899", artis: "181.32" },
  { sembol: "EBEBK", islemHacmi: "144,127,983", ortHacim: "54,115,105", artis: "166.34" },
  { sembol: "EREGL", islemHacmi: "10,295,998,826", ortHacim: "3,908,333,267", artis: "163.44" },
  { sembol: "TSKB", islemHacmi: "651,192,775", ortHacim: "274,386,727", artis: "137.33" },
  { sembol: "DYOBY", islemHacmi: "18,579,795", ortHacim: "7,852,562", artis: "136.61" },
  { sembol: "QNBTR", islemHacmi: "6,461,066", ortHacim: "2,777,714", artis: "132.60" },
  { sembol: "DZGYO", islemHacmi: "39,386,531", ortHacim: "16,974,125", artis: "132.04" },
  { sembol: "AKSEN", islemHacmi: "954,945,403", ortHacim: "412,109,017", artis: "131.72" },
  { sembol: "MIATK", islemHacmi: "1,619,555,824", ortHacim: "712,698,581", artis: "127.24" },
  { sembol: "HUNER", islemHacmi: "223,641,079", ortHacim: "101,907,671", artis: "119.45" },
  { sembol: "SAFKR", islemHacmi: "54,807,681", ortHacim: "25,042,980", artis: "118.85" },
  { sembol: "PKENT", islemHacmi: "95,238,924", ortHacim: "43,603,111", artis: "118.42" },
  { sembol: "AGESA", islemHacmi: "110,342,774", ortHacim: "51,546,065", artis: "114.07" },
  { sembol: "PASEU", islemHacmi: "1,040,824,123", ortHacim: "493,009,795", artis: "111.12" },
  { sembol: "TCELL", islemHacmi: "3,838,283,621", ortHacim: "1,851,723,778", artis: "107.28" },
  { sembol: "NATEN", islemHacmi: "39,115,370", ortHacim: "18,959,708", artis: "106.31" },
  { sembol: "BVSAN", islemHacmi: "48,168,530", ortHacim: "24,312,347", artis: "98.12" },
  { sembol: "KARCL", islemHacmi: "1,127,428,070", ortHacim: "569,452,588", artis: "97.98" },
  { sembol: "INVEO", islemHacmi: "40,617,940", ortHacim: "20,644,217", artis: "96.75" },
  { sembol: "FORMT", islemHacmi: "28,174,641", ortHacim: "14,374,398", artis: "96.01" },
  { sembol: "GEREL", islemHacmi: "379,115,415", ortHacim: "193,604,807", artis: "95.82" },
  { sembol: "ALKA", islemHacmi: "13,733,135", ortHacim: "7,058,560", artis: "94.56" },
  { sembol: "BRKSN", islemHacmi: "2,367,314", ortHacim: "1,224,563", artis: "93.32" },
  { sembol: "RTALB", islemHacmi: "146,595,311", ortHacim: "76,893,504", artis: "90.65" },
  { sembol: "KONYA", islemHacmi: "44,166,318", ortHacim: "23,724,013", artis: "86.17" },
  { sembol: "KZBGY", islemHacmi: "76,146,724", ortHacim: "40,944,398", artis: "85.98" },
  { sembol: "YEOTK", islemHacmi: "464,161,625", ortHacim: "250,399,161", artis: "85.37" },
  { sembol: "IHEVA", islemHacmi: "3,023,199", ortHacim: "1,645,770", artis: "83.70" },
  { sembol: "GUNDG", islemHacmi: "50,235,745", ortHacim: "27,392,860", artis: "83.39" },
  { sembol: "CMENT", islemHacmi: "3,470,554", ortHacim: "1,899,580", artis: "82.70" },
  { sembol: "EGGUB", islemHacmi: "39,278,575", ortHacim: "21,593,292", artis: "81.90" },
  { sembol: "GLYHO", islemHacmi: "179,551,722", ortHacim: "98,974,796", artis: "81.41" },
  { sembol: "SASA", islemHacmi: "4,311,333,293", ortHacim: "2,394,634,903", artis: "80.04" },
  { sembol: "EMNIS", islemHacmi: "1,420,281", ortHacim: "797,893", artis: "78.00" },
  { sembol: "ISKPL", islemHacmi: "157,706,470", ortHacim: "88,829,225", artis: "77.54" },
  { sembol: "TNZTP", islemHacmi: "85,863,678", ortHacim: "48,545,234", artis: "76.87" },
  { sembol: "GMTAS", islemHacmi: "295,781,792", ortHacim: "168,165,488", artis: "75.89" },
  { sembol: "QUICK", islemHacmi: "129,780,299", ortHacim: "74,314,909", artis: "74.64" },
  { sembol: "ISDMR", islemHacmi: "141,639,082", ortHacim: "82,318,384", artis: "72.06" },
  { sembol: "SEKFK", islemHacmi: "12,888,588", ortHacim: "7,507,613", artis: "71.67" },
  { sembol: "RYGYO", islemHacmi: "144,953,015", ortHacim: "84,796,581", artis: "70.94" },
  { sembol: "ANSGR", islemHacmi: "114,072,651", ortHacim: "66,945,854", artis: "70.40" },
  { sembol: "DERHL", islemHacmi: "20,636,028", ortHacim: "12,151,517", artis: "69.82" },
  { sembol: "BAHKM", islemHacmi: "151,636,832", ortHacim: "89,305,967", artis: "69.79" },
  { sembol: "MSGYO", islemHacmi: "7,640,023", ortHacim: "4,535,934", artis: "68.43" },
  { sembol: "MNDTR", islemHacmi: "5,360,422", ortHacim: "3,186,760", artis: "68.21" },
  { sembol: "CLEBI", islemHacmi: "39,528,430", ortHacim: "23,633,760", artis: "67.25" },
  { sembol: "ANGEN", islemHacmi: "48,168,002", ortHacim: "28,930,535", artis: "66.50" },
  { sembol: "ULUFA", islemHacmi: "57,660,040", ortHacim: "34,654,048", artis: "66.39" },
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

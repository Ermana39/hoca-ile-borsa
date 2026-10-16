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
  { sembol: "IZFAS", islemHacmi: "1,079,599,903", ortHacim: "79,943,599", artis: "1,250.45" },
  { sembol: "BEGYO", islemHacmi: "125,278,519", ortHacim: "19,978,531", artis: "527.07" },
  { sembol: "SKTAS", islemHacmi: "141,082,889", ortHacim: "23,907,946", artis: "490.11" },
  { sembol: "DCTTR", islemHacmi: "149,755,044", ortHacim: "34,068,924", artis: "339.56" },
  { sembol: "ODINE", islemHacmi: "1,234,393,085", ortHacim: "294,601,588", artis: "319.00" },
  { sembol: "MANAS", islemHacmi: "512,300,032", ortHacim: "123,765,228", artis: "313.93" },
  { sembol: "HUBVC", islemHacmi: "23,690,471", ortHacim: "5,802,161", artis: "308.30" },
  { sembol: "ALCAR", islemHacmi: "124,389,708", ortHacim: "30,489,214", artis: "307.98" },
  { sembol: "ALKLC", islemHacmi: "90,575,617", ortHacim: "28,134,221", artis: "221.94" },
  { sembol: "ANELE", islemHacmi: "432,497,152", ortHacim: "135,970,652", artis: "218.08" },
  { sembol: "DURDO", islemHacmi: "108,020,747", ortHacim: "34,578,367", artis: "212.39" },
  { sembol: "PEKGY", islemHacmi: "775,771,459", ortHacim: "262,182,152", artis: "195.89" },
  { sembol: "ICUGS", islemHacmi: "217,536,662", ortHacim: "76,290,884", artis: "185.14" },
  { sembol: "DAGI", islemHacmi: "151,704,530", ortHacim: "54,449,026", artis: "178.62" },
  { sembol: "PRZMA", islemHacmi: "299,056,729", ortHacim: "109,115,453", artis: "174.07" },
  { sembol: "ULUSE", islemHacmi: "88,168,477", ortHacim: "37,543,136", artis: "134.85" },
  { sembol: "NIBAS", islemHacmi: "85,819,352", ortHacim: "37,922,852", artis: "126.30" },
  { sembol: "BORLS", islemHacmi: "150,507,759", ortHacim: "66,743,838", artis: "125.50" },
  { sembol: "VERUS", islemHacmi: "61,240,926", ortHacim: "29,139,280", artis: "110.17" },
  { sembol: "HDFGS", islemHacmi: "329,843,983", ortHacim: "157,858,222", artis: "108.95" },
  { sembol: "OZGYO", islemHacmi: "45,599,312", ortHacim: "22,020,955", artis: "107.07" },
  { sembol: "PKENT", islemHacmi: "46,915,457", ortHacim: "23,016,439", artis: "103.83" },
  { sembol: "ARMGD", islemHacmi: "617,802,835", ortHacim: "303,349,853", artis: "103.60" },
  { sembol: "CRDFA", islemHacmi: "54,827,800", ortHacim: "27,253,552", artis: "101.18" },
  { sembol: "BIMAS", islemHacmi: "7,611,524,163", ortHacim: "3,789,642,563", artis: "100.85" },
  { sembol: "BAYRK", islemHacmi: "44,860,594", ortHacim: "22,750,618", artis: "97.18" },
  { sembol: "AVHOL", islemHacmi: "75,132,282", ortHacim: "38,709,152", artis: "94.09" },
  { sembol: "LKMNH", islemHacmi: "37,086,727", ortHacim: "19,125,289", artis: "93.91" },
  { sembol: "DZGYO", islemHacmi: "38,794,701", ortHacim: "20,088,444", artis: "93.12" },
  { sembol: "ZGYOT", islemHacmi: "10,934,049", ortHacim: "5,716,604", artis: "91.27" },
  { sembol: "YKSLN", islemHacmi: "132,202,225", ortHacim: "69,569,403", artis: "90.03" },
  { sembol: "INVES", islemHacmi: "64,015,550", ortHacim: "33,715,623", artis: "89.87" },
  { sembol: "KTLEV", islemHacmi: "3,005,536,973", ortHacim: "1,587,099,168", artis: "89.37" },
  { sembol: "MIATK", islemHacmi: "1,813,513,792", ortHacim: "958,964,011", artis: "89.11" },
  { sembol: "PARSN", islemHacmi: "22,825,157", ortHacim: "12,254,521", artis: "86.26" },
  { sembol: "TURSG", islemHacmi: "1,178,642,988", ortHacim: "656,024,605", artis: "79.66" },
  { sembol: "DOCO", islemHacmi: "84,652,105", ortHacim: "47,331,669", artis: "78.85" },
  { sembol: "NTHOL", islemHacmi: "155,591,097", ortHacim: "88,161,970", artis: "76.48" },
  { sembol: "ISBIR", islemHacmi: "1,978,229", ortHacim: "1,124,637", artis: "75.90" },
  { sembol: "VAKKO", islemHacmi: "13,711,520", ortHacim: "8,022,256", artis: "70.92" },
  { sembol: "AKFYE", islemHacmi: "262,037,564", ortHacim: "153,447,127", artis: "70.77" },
  { sembol: "DESA", islemHacmi: "24,999,609", ortHacim: "14,670,738", artis: "70.40" },
  { sembol: "HKTM", islemHacmi: "65,343,533", ortHacim: "38,444,879", artis: "69.97" },
  { sembol: "PASEU", islemHacmi: "475,577,983", ortHacim: "285,168,003", artis: "66.77" },
  { sembol: "EGSER", islemHacmi: "7,018,444", ortHacim: "4,213,359", artis: "66.58" },
  { sembol: "DMLKTG", islemHacmi: "50,380,882", ortHacim: "30,582,216", artis: "64.74" },
  { sembol: "MAGEN", islemHacmi: "429,339,517", ortHacim: "261,588,449", artis: "64.13" },
  { sembol: "GARAN", islemHacmi: "5,505,421,891", ortHacim: "3,385,077,586", artis: "62.64" },
  { sembol: "DGNMO", islemHacmi: "41,723,138", ortHacim: "26,086,761", artis: "59.94" },
  { sembol: "CASA", islemHacmi: "1,872,723", ortHacim: "1,171,988", artis: "59.79" },
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
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
  { sembol: "DURDO", islemHacmi: "108,020,747", ortHacim: "23,278,260", artis: "364.04" },
  { sembol: "UNLU", islemHacmi: "160,241,813", ortHacim: "41,823,163", artis: "283.14" },
  { sembol: "IZFAS", islemHacmi: "1,079,599,903", ortHacim: "296,011,626", artis: "264.72" },
  { sembol: "ALCAR", islemHacmi: "124,389,708", ortHacim: "35,462,470", artis: "250.76" },
  { sembol: "YKSLN", islemHacmi: "132,202,225", ortHacim: "42,302,823", artis: "212.51" },
  { sembol: "ARMGD", islemHacmi: "617,802,835", ortHacim: "201,306,100", artis: "206.90" },
  { sembol: "PRZMA", islemHacmi: "299,056,729", ortHacim: "107,911,646", artis: "177.13" },
  { sembol: "DMRGD", islemHacmi: "937,770,809", ortHacim: "372,435,818", artis: "151.79" },
  { sembol: "HRKET", islemHacmi: "439,714,681", ortHacim: "187,521,845", artis: "134.49" },
  { sembol: "BEGYO", islemHacmi: "125,278,519", ortHacim: "55,438,827", artis: "125.98" },
  { sembol: "SKTAS", islemHacmi: "141,082,889", ortHacim: "62,790,084", artis: "124.69" },
  { sembol: "DAGI", islemHacmi: "151,704,530", ortHacim: "69,730,307", artis: "117.56" },
  { sembol: "ODINE", islemHacmi: "1,234,393,085", ortHacim: "584,612,529", artis: "111.15" },
  { sembol: "ICUGS", islemHacmi: "217,536,662", ortHacim: "111,000,958", artis: "95.98" },
  { sembol: "BIMAS", islemHacmi: "7,611,524,163", ortHacim: "3,941,604,943", artis: "93.11" },
  { sembol: "ZGYOT", islemHacmi: "10,934,049", ortHacim: "5,716,604", artis: "91.27" },
  { sembol: "TURSG", islemHacmi: "1,178,642,988", ortHacim: "625,137,406", artis: "88.54" },
  { sembol: "NTHOL", islemHacmi: "155,591,097", ortHacim: "85,221,769", artis: "82.57" },
  { sembol: "HUBVC", islemHacmi: "23,690,471", ortHacim: "13,397,488", artis: "76.83" },
  { sembol: "MIATK", islemHacmi: "1,813,513,792", ortHacim: "1,027,390,207", artis: "76.52" },
  { sembol: "ENERY", islemHacmi: "761,877,749", ortHacim: "436,952,198", artis: "74.36" },
  { sembol: "ASTOR", islemHacmi: "11,552,415,300", ortHacim: "7,404,034,898", artis: "56.03" },
  { sembol: "ANELE", islemHacmi: "432,497,152", ortHacim: "290,655,888", artis: "48.80" },
  { sembol: "GLRMKT", islemHacmi: "130,583", ortHacim: "92,135", artis: "41.73" },
  { sembol: "AKFYE", islemHacmi: "262,037,564", ortHacim: "187,324,170", artis: "39.88" },
  { sembol: "SAHOL", islemHacmi: "4,642,020,454", ortHacim: "3,343,156,517", artis: "38.85" },
  { sembol: "SVGYO", islemHacmi: "164,596", ortHacim: "119,483", artis: "37.76" },
  { sembol: "KRGYO", islemHacmi: "65,126,673", ortHacim: "47,289,524", artis: "37.72" },
  { sembol: "MARTI", islemHacmi: "219,263,977", ortHacim: "163,930,515", artis: "33.75" },
  { sembol: "GENIL", islemHacmi: "571,545,952", ortHacim: "442,594,850", artis: "29.14" },
  { sembol: "DUNYH", islemHacmi: "163,366,573", ortHacim: "127,620,339", artis: "28.01" },
  { sembol: "DOCO", islemHacmi: "84,652,105", ortHacim: "66,730,101", artis: "26.86" },
  { sembol: "TGSAS", islemHacmi: "80,830,832", ortHacim: "63,988,043", artis: "26.32" },
  { sembol: "RYGYO", islemHacmi: "120,591,918", ortHacim: "96,649,406", artis: "24.77" },
  { sembol: "DCTTR", islemHacmi: "149,755,044", ortHacim: "120,990,157", artis: "23.77" },
  { sembol: "GARAN", islemHacmi: "5,505,421,891", ortHacim: "4,488,488,589", artis: "22.66" },
  { sembol: "ASELS", islemHacmi: "13,261,090,576", ortHacim: "11,035,088,453", artis: "20.17" },
  { sembol: "LKMNH", islemHacmi: "37,086,727", ortHacim: "30,892,987", artis: "20.05" },
  { sembol: "SANKO", islemHacmi: "14,893,678", ortHacim: "12,574,117", artis: "18.45" },
  { sembol: "AHGAZ", islemHacmi: "220,929,903", ortHacim: "187,171,206", artis: "18.04" },
  { sembol: "USHOL", islemHacmi: "50,177,810", ortHacim: "42,549,312", artis: "17.93" },
  { sembol: "ANGEN", islemHacmi: "60,825,705", ortHacim: "51,675,540", artis: "17.71" },
  { sembol: "RYGAS", islemHacmi: "395,587,335", ortHacim: "336,667,156", artis: "17.50" },
  { sembol: "AHSGY", islemHacmi: "84,444,373", ortHacim: "72,890,686", artis: "15.85" },
  { sembol: "DGNMO", islemHacmi: "41,723,138", ortHacim: "36,103,237", artis: "15.57" },
  { sembol: "AVHOL", islemHacmi: "75,132,282", ortHacim: "65,061,380", artis: "15.48" },
  { sembol: "GEREL", islemHacmi: "300,174,080", ortHacim: "259,924,918", artis: "15.48" },
  { sembol: "DZGYO", islemHacmi: "38,794,701", ortHacim: "33,631,715", artis: "15.35" },
  { sembol: "CELHA", islemHacmi: "108,660,947", ortHacim: "94,820,801", artis: "14.60" },
  { sembol: "ENJSA", islemHacmi: "377,377,896", ortHacim: "331,795,061", artis: "13.74" },
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
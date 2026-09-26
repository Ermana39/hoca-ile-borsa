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
  { sembol: "GIPTA", islemHacmi: "632,001,191", ortHacim: "131,239,353", artis: "381.56" },
  { sembol: "HDFGS", islemHacmi: "211,931,366", ortHacim: "44,085,258", artis: "380.73" },
  { sembol: "ERBOS", islemHacmi: "463,607,586", ortHacim: "97,581,958", artis: "375.10" },
  { sembol: "AKMGY", islemHacmi: "168,120,784", ortHacim: "37,970,655", artis: "342.77" },
  { sembol: "GUNDG", islemHacmi: "5,821,548", ortHacim: "1,455,622", artis: "299.94" },
  { sembol: "KLRHO", islemHacmi: "91,479,074", ortHacim: "24,090,947", artis: "279.72" },
  { sembol: "IZFAS", islemHacmi: "71,111,568", ortHacim: "20,041,108", artis: "254.83" },
  { sembol: "KGYO", islemHacmi: "245,245,379", ortHacim: "72,635,074", artis: "237.64" },
  { sembol: "BLCYT", islemHacmi: "168,323,898", ortHacim: "50,598,053", artis: "232.67" },
  { sembol: "ISKPL", islemHacmi: "296,872,817", ortHacim: "90,997,583", artis: "226.24" },
  { sembol: "MAKIM", islemHacmi: "71,968,298", ortHacim: "26,219,336", artis: "174.49" },
  { sembol: "ANELE", islemHacmi: "1,002,170", ortHacim: "371,412", artis: "169.83" },
  { sembol: "KAPLM", islemHacmi: "239,392,519", ortHacim: "89,046,562", artis: "168.84" },
  { sembol: "KMPUR", islemHacmi: "109,627,240", ortHacim: "41,008,181", artis: "167.33" },
  { sembol: "AYES", islemHacmi: "8,104,062", ortHacim: "3,257,629", artis: "148.77" },
  { sembol: "MRGYO", islemHacmi: "378,339,813", ortHacim: "175,106,699", artis: "116.06" },
  { sembol: "GOLDA", islemHacmi: "244,757,640", ortHacim: "115,511,334", artis: "111.89" },
  { sembol: "GZNMI", islemHacmi: "94,255,775", ortHacim: "45,730,165", artis: "106.11" },
  { sembol: "ICUGS", islemHacmi: "111,663,931", ortHacim: "55,328,235", artis: "101.82" },
  { sembol: "HEDEF", islemHacmi: "4,537,379", ortHacim: "2,283,109", artis: "98.74" },
  { sembol: "CEOEM", islemHacmi: "233,894,139", ortHacim: "124,005,851", artis: "88.62" },
  { sembol: "EGEPO", islemHacmi: "52,041,719", ortHacim: "27,904,980", artis: "86.50" },
  { sembol: "AKSGY", islemHacmi: "84,609,070", ortHacim: "45,598,491", artis: "85.55" },
  { sembol: "GSDHO", islemHacmi: "131,765,844", ortHacim: "71,691,828", artis: "83.79" },
  { sembol: "IDGYO", islemHacmi: "5,748,998", ortHacim: "3,147,840", artis: "82.63" },
  { sembol: "CEMZY", islemHacmi: "370,842,958", ortHacim: "203,517,833", artis: "82.22" },
  { sembol: "FONET", islemHacmi: "127,782,297", ortHacim: "73,455,073", artis: "73.96" },
  { sembol: "INVES", islemHacmi: "63,739,478", ortHacim: "37,067,405", artis: "71.96" },
  { sembol: "BULGS", islemHacmi: "284,933,563", ortHacim: "166,182,113", artis: "71.46" },
  { sembol: "BAKMA", islemHacmi: "7,358,988", ortHacim: "4,348,930", artis: "69.21" },
  { sembol: "ICUGST", islemHacmi: "2,058,479", ortHacim: "1,242,705", artis: "65.65" },
  { sembol: "VRGYO", islemHacmi: "37,843,142", ortHacim: "22,896,945", artis: "65.28" },
  { sembol: "LIDER", islemHacmi: "9,060,818", ortHacim: "5,532,040", artis: "63.79" },
  { sembol: "MERKO", islemHacmi: "35,568,842", ortHacim: "22,064,559", artis: "61.20" },
  { sembol: "CITAS", islemHacmi: "747,800,924", ortHacim: "471,398,301", artis: "58.63" },
  { sembol: "SKYMD", islemHacmi: "83,029,076", ortHacim: "52,579,086", artis: "57.91" },
  { sembol: "KOCMT", islemHacmi: "438,520,796", ortHacim: "280,921,980", artis: "56.10" },
  { sembol: "BRKVY", islemHacmi: "51,342,026", ortHacim: "33,257,212", artis: "54.38" },
  { sembol: "CMBTN", islemHacmi: "44,218,375", ortHacim: "28,720,280", artis: "53.96" },
  { sembol: "BIGCH", islemHacmi: "22,260,054", ortHacim: "14,594,033", artis: "52.53" },
  { sembol: "BIGTK", islemHacmi: "73,981,240", ortHacim: "48,586,818", artis: "52.27" },
  { sembol: "ETILR", islemHacmi: "87,371,573", ortHacim: "58,300,221", artis: "49.86" },
  { sembol: "BSOKE", islemHacmi: "368,240,453", ortHacim: "245,728,966", artis: "49.86" },
  { sembol: "KRONT", islemHacmi: "34,326,496", ortHacim: "23,649,070", artis: "45.15" },
  { sembol: "UNLU", islemHacmi: "351,844,522", ortHacim: "244,750,210", artis: "43.76" },
  { sembol: "KUYVA", islemHacmi: "24,911,236", ortHacim: "17,595,366", artis: "41.58" },
  { sembol: "DIRIT", islemHacmi: "2,535,386", ortHacim: "1,807,472", artis: "40.27" },
  { sembol: "ISVEA", islemHacmi: "780,461", ortHacim: "560,824", artis: "39.16" },
  { sembol: "BAKAB", islemHacmi: "8,963,181", ortHacim: "6,452,641", artis: "38.91" },
  { sembol: "SEYKM", islemHacmi: "6,797,968", ortHacim: "4,904,724", artis: "38.60" },
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

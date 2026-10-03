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
  { sembol: "SELEC", islemHacmi: "2,552,906,830", ortHacim: "513,389,404", artis: "397.26" },
  { sembol: "BIGTK", islemHacmi: "280,980,976", ortHacim: "59,770,034", artis: "370.10" },
  { sembol: "SVGYO", islemHacmi: "7,628,136", ortHacim: "1,907,480", artis: "299.91" },
  { sembol: "IHAAS", islemHacmi: "154,683,356", ortHacim: "39,254,354", artis: "294.05" },
  { sembol: "EDATA", islemHacmi: "243,551,460", ortHacim: "73,728,249", artis: "230.34" },
  { sembol: "DUNYH", islemHacmi: "302,371,236", ortHacim: "96,357,312", artis: "213.80" },
  { sembol: "DMRGD", islemHacmi: "800,329,801", ortHacim: "266,065,193", artis: "200.80" },
  { sembol: "KUYVA", islemHacmi: "33,201,854", ortHacim: "12,544,560", artis: "164.67" },
  { sembol: "YESIL", islemHacmi: "43,806,250", ortHacim: "17,074,853", artis: "156.55" },
  { sembol: "AAGYO", islemHacmi: "382,390,544", ortHacim: "153,642,375", artis: "148.88" },
  { sembol: "BARMA", islemHacmi: "10,786,424", ortHacim: "4,491,141", artis: "140.17" },
  { sembol: "KORDS", islemHacmi: "206,345,846", ortHacim: "86,359,068", artis: "138.94" },
  { sembol: "ARMGD", islemHacmi: "961,434,448", ortHacim: "408,871,934", artis: "135.14" },
  { sembol: "DERIM", islemHacmi: "22,771,078", ortHacim: "9,713,740", artis: "134.42" },
  { sembol: "TEHOL", islemHacmi: "887,968", ortHacim: "388,272", artis: "128.70" },
  { sembol: "OZATD", islemHacmi: "1,539,181", ortHacim: "699,268", artis: "120.11" },
  { sembol: "DURDO", islemHacmi: "30,130,802", ortHacim: "14,454,668", artis: "108.45" },
  { sembol: "BRMEN", islemHacmi: "4,600,547", ortHacim: "2,232,025", artis: "106.12" },
  { sembol: "RYSAS", islemHacmi: "461,159,742", ortHacim: "223,800,257", artis: "106.06" },
  { sembol: "ESCAR", islemHacmi: "126,238,646", ortHacim: "62,555,737", artis: "101.80" },
  { sembol: "BSOKE", islemHacmi: "517,565,772", ortHacim: "257,133,818", artis: "101.28" },
  { sembol: "QNBFK", islemHacmi: "2,062,207", ortHacim: "1,030,203", artis: "100.17" },
  { sembol: "PRKME", islemHacmi: "62,339,109", ortHacim: "31,351,467", artis: "98.84" },
  { sembol: "AVGYO", islemHacmi: "30,688,444", ortHacim: "15,467,771", artis: "98.40" },
  { sembol: "ANELE", islemHacmi: "362,940", ortHacim: "183,628", artis: "97.65" },
  { sembol: "YAPRK", islemHacmi: "39,065,480", ortHacim: "20,158,383", artis: "93.79" },
  { sembol: "GEREL", islemHacmi: "329,394,971", ortHacim: "170,800,242", artis: "92.85" },
  { sembol: "USHOL", islemHacmi: "61,616,787", ortHacim: "31,957,225", artis: "92.81" },
  { sembol: "HDFGS", islemHacmi: "159,236,381", ortHacim: "84,398,710", artis: "88.67" },
  { sembol: "KZGYO", islemHacmi: "46,629,859", ortHacim: "24,892,824", artis: "87.32" },
  { sembol: "GZNMI", islemHacmi: "62,141,077", ortHacim: "33,185,088", artis: "87.26" },
  { sembol: "SEKUR", islemHacmi: "28,412,828", ortHacim: "15,417,871", artis: "84.29" },
  { sembol: "ULUSE", islemHacmi: "75,025,305", ortHacim: "40,990,091", artis: "83.03" },
  { sembol: "SKYLP", islemHacmi: "24,418,687", ortHacim: "13,541,938", artis: "80.32" },
  { sembol: "KPEKS", islemHacmi: "505,923,467", ortHacim: "280,647,707", artis: "80.27" },
  { sembol: "SDTTR", islemHacmi: "197,606,165", ortHacim: "111,840,777", artis: "76.69" },
  { sembol: "DURKN", islemHacmi: "59,026,051", ortHacim: "33,820,159", artis: "74.53" },
  { sembol: "HEDEF", islemHacmi: "431,957,721", ortHacim: "248,136,713", artis: "74.08" },
  { sembol: "MAGEN", islemHacmi: "8,009,298", ortHacim: "4,603,601", artis: "73.98" },
  { sembol: "TMPOL", islemHacmi: "1,490,711", ortHacim: "864,686", artis: "72.40" },
  { sembol: "NETAS", islemHacmi: "97,069,283", ortHacim: "56,377,896", artis: "72.18" },
  { sembol: "SNPAM", islemHacmi: "1,205,325", ortHacim: "702,939", artis: "71.47" },
  { sembol: "RUBNS", islemHacmi: "71,544,333", ortHacim: "42,002,780", artis: "70.33" },
  { sembol: "KTLEV", islemHacmi: "2,739,052,269", ortHacim: "1,622,275,120", artis: "68.84" },
  { sembol: "DOGUB", islemHacmi: "29,048,384", ortHacim: "17,259,613", artis: "68.30" },
  { sembol: "SEKFK", islemHacmi: "4,354,823", ortHacim: "2,590,859", artis: "68.08" },
  { sembol: "KRONT", islemHacmi: "37,968,019", ortHacim: "22,608,985", artis: "67.93" },
  { sembol: "EGEPO", islemHacmi: "39,332,490", ortHacim: "23,628,109", artis: "66.46" },
  { sembol: "BURCE", islemHacmi: "34,812,847", ortHacim: "21,024,244", artis: "65.58" },
  { sembol: "DOFRB", islemHacmi: "345,230,568", ortHacim: "209,091,107", artis: "65.11" },
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

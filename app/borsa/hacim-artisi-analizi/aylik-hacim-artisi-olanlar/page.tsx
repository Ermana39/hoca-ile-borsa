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
  { sembol: "IHLAS", islemHacmi: "732,416,620", ortHacim: "99,092,176", artis: "639.19" },
  { sembol: "IMASM", islemHacmi: "380,920,497", ortHacim: "53,351,145", artis: "613.99" },
  { sembol: "IHLGM", islemHacmi: "235,405,723", ortHacim: "41,252,084", artis: "470.65" },
  { sembol: "BOBET", islemHacmi: "436,474,442", ortHacim: "80,415,247", artis: "443.12" },
  { sembol: "YAYLA", islemHacmi: "128,872,233", ortHacim: "26,028,907", artis: "395.11" },
  { sembol: "HRKET", islemHacmi: "1,079,736,787", ortHacim: "235,163,850", artis: "359.14" },
  { sembol: "HOROZ", islemHacmi: "425,911,766", ortHacim: "104,536,302", artis: "307.43" },
  { sembol: "ADEL", islemHacmi: "368,242,008", ortHacim: "93,715,736", artis: "292.94" },
  { sembol: "AYDEM", islemHacmi: "248,736,185", ortHacim: "63,741,151", artis: "290.23" },
  { sembol: "GOODY", islemHacmi: "157,939,778", ortHacim: "40,892,039", artis: "286.24" },
  { sembol: "IHEVA", islemHacmi: "7,863,511", ortHacim: "2,104,439", artis: "273.65" },
  { sembol: "SONME", islemHacmi: "15,258,906", ortHacim: "4,165,076", artis: "266.35" },
  { sembol: "INFO", islemHacmi: "1,055,394,706", ortHacim: "300,764,017", artis: "250.90" },
  { sembol: "SDTTR", islemHacmi: "705,766,486", ortHacim: "205,237,066", artis: "243.88" },
  { sembol: "IHGZT", islemHacmi: "70,298,532", ortHacim: "21,514,074", artis: "226.76" },
  { sembol: "LRSHO", islemHacmi: "193,622,519", ortHacim: "59,741,762", artis: "224.10" },
  { sembol: "CUSAN", islemHacmi: "242,208,749", ortHacim: "75,261,440", artis: "221.82" },
  { sembol: "PRZMA", islemHacmi: "720,899,191", ortHacim: "225,797,235", artis: "219.27" },
  { sembol: "MERIT", islemHacmi: "175,042,883", ortHacim: "55,670,199", artis: "214.43" },
  { sembol: "INTEM", islemHacmi: "43,463,575", ortHacim: "13,839,106", artis: "214.06" },
  { sembol: "GOKNR", islemHacmi: "288,325,890", ortHacim: "94,640,807", artis: "204.55" },
  { sembol: "SELVA", islemHacmi: "228,160,218", ortHacim: "75,153,789", artis: "203.59" },
  { sembol: "KGYO", islemHacmi: "584,651,433", ortHacim: "196,638,387", artis: "197.32" },
  { sembol: "AYES", islemHacmi: "17,128,382", ortHacim: "5,994,938", artis: "185.71" },
  { sembol: "RGYAS", islemHacmi: "774,181,590", ortHacim: "276,036,817", artis: "180.46" },
  { sembol: "ENDAE", islemHacmi: "243,176,007", ortHacim: "90,959,548", artis: "167.35" },
  { sembol: "KNFRT", islemHacmi: "106,503,349", ortHacim: "40,270,179", artis: "164.47" },
  { sembol: "PKART", islemHacmi: "218,975,228", ortHacim: "83,316,921", artis: "162.82" },
  { sembol: "LUKSK", islemHacmi: "20,821,049", ortHacim: "7,942,657", artis: "162.14" },
  { sembol: "VANGD", islemHacmi: "40,104,044", ortHacim: "15,619,514", artis: "156.76" },
  { sembol: "FORTE", islemHacmi: "726,345,288", ortHacim: "283,148,815", artis: "156.52" },
  { sembol: "DOFER", islemHacmi: "46,758,449", ortHacim: "18,494,401", artis: "152.82" },
  { sembol: "OZSUB", islemHacmi: "342,072,297", ortHacim: "139,433,321", artis: "145.33" },
  { sembol: "GSRAY", islemHacmi: "423,426,200", ortHacim: "182,319,227", artis: "132.24" },
  { sembol: "IHYAY", islemHacmi: "9,645,095", ortHacim: "4,172,153", artis: "131.18" },
  { sembol: "TMPOL", islemHacmi: "965,961,600", ortHacim: "420,586,652", artis: "129.67" },
  { sembol: "GLRYH", islemHacmi: "67,980,430", ortHacim: "29,954,838", artis: "126.95" },
  { sembol: "ECILC", islemHacmi: "564,153,373", ortHacim: "250,881,280", artis: "124.87" },
  { sembol: "BIKAS", islemHacmi: "560,075,418", ortHacim: "249,300,169", artis: "124.56" },
  { sembol: "KARSN", islemHacmi: "219,926,302", ortHacim: "98,075,642", artis: "124.24" },
  { sembol: "MGROS", islemHacmi: "4,229,086,061", ortHacim: "1,904,159,546", artis: "122.10" },
  { sembol: "POLTK", islemHacmi: "65,133,348", ortHacim: "29,640,536", artis: "119.74" },
  { sembol: "TKFEN", islemHacmi: "2,942,130,263", ortHacim: "1,354,403,447", artis: "117.23" },
  { sembol: "SKTAS", islemHacmi: "86,679,970", ortHacim: "39,995,540", artis: "116.72" },
  { sembol: "SMRVA", islemHacmi: "253,786,449", ortHacim: "118,314,352", artis: "114.50" },
  { sembol: "RNPOL", islemHacmi: "13,925,899", ortHacim: "6,552,464", artis: "112.53" },
  { sembol: "KORDS", islemHacmi: "367,805,910", ortHacim: "173,799,378", artis: "111.63" },
  { sembol: "GENKM", islemHacmi: "308,977,513", ortHacim: "146,227,059", artis: "111.30" },
  { sembol: "ASTOR", islemHacmi: "17,953,660,385", ortHacim: "8,684,960,776", artis: "106.72" },
  { sembol: "TKNSA", islemHacmi: "66,546,188", ortHacim: "32,597,141", artis: "104.15" },
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
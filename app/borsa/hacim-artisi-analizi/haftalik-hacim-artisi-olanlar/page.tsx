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
  { sembol: "IHLAS", islemHacmi: "732,416,620", ortHacim: "194,344,162", artis: "276.87" },
  { sembol: "IHLGM", islemHacmi: "235,405,723", ortHacim: "64,020,982", artis: "267.70" },
  { sembol: "AYDEM", islemHacmi: "248,736,185", ortHacim: "69,223,192", artis: "259.32" },
  { sembol: "BOBET", islemHacmi: "436,747,442", ortHacim: "124,005,400", artis: "252.20" },
  { sembol: "IMASM", islemHacmi: "380,920,497", ortHacim: "114,380,230", artis: "233.03" },
  { sembol: "MERIT", islemHacmi: "175,042,883", ortHacim: "60,476,594", artis: "189.44" },
  { sembol: "YAYLA", islemHacmi: "128,872,233", ortHacim: "46,946,932", artis: "174.51" },
  { sembol: "HRKET", islemHacmi: "1,079,736,787", ortHacim: "401,432,097", artis: "168.97" },
  { sembol: "SDTTR", islemHacmi: "705,766,486", ortHacim: "266,479,371", artis: "164.85" },
  { sembol: "IHEVA", islemHacmi: "7,863,511", ortHacim: "3,036,761", artis: "158.94" },
  { sembol: "LRSHO", islemHacmi: "193,622,519", ortHacim: "77,008,957", artis: "151.43" },
  { sembol: "GOKNR", islemHacmi: "288,325,890", ortHacim: "119,256,331", artis: "141.77" },
  { sembol: "PKART", islemHacmi: "218,975,228", ortHacim: "90,933,407", artis: "140.81" },
  { sembol: "PRZMA", islemHacmi: "720,899,191", ortHacim: "299,701,219", artis: "140.54" },
  { sembol: "SKTAS", islemHacmi: "86,679,970", ortHacim: "36,409,541", artis: "138.07" },
  { sembol: "IHGZT", islemHacmi: "70,298,532", ortHacim: "30,034,687", artis: "134.06" },
  { sembol: "SONME", islemHacmi: "15,258,906", ortHacim: "6,535,822", artis: "133.47" },
  { sembol: "GOODY", islemHacmi: "157,939,778", ortHacim: "68,938,309", artis: "129.10" },
  { sembol: "BJKAS", islemHacmi: "560,075,418", ortHacim: "244,531,931", artis: "129.04" },
  { sembol: "ETILR", islemHacmi: "129,636,548", ortHacim: "56,730,718", artis: "128.51" },
  { sembol: "SELVA", islemHacmi: "228,160,218", ortHacim: "101,076,505", artis: "125.73" },
  { sembol: "RGYAS", islemHacmi: "774,181,590", ortHacim: "353,822,656", artis: "118.80" },
  { sembol: "GLRYH", islemHacmi: "67,980,430", ortHacim: "31,168,669", artis: "118.11" },
  { sembol: "KARSN", islemHacmi: "219,926,302", ortHacim: "102,204,594", artis: "115.18" },
  { sembol: "TKNSA", islemHacmi: "66,546,188", ortHacim: "32,380,811", artis: "105.51" },
  { sembol: "KGYO", islemHacmi: "584,651,433", ortHacim: "286,066,657", artis: "104.38" },
  { sembol: "GENKM", islemHacmi: "308,977,513", ortHacim: "152,584,531", artis: "102.50" },
  { sembol: "KORDS", islemHacmi: "367,805,910", ortHacim: "183,139,065", artis: "100.83" },
  { sembol: "CEMZY", islemHacmi: "415,266,032", ortHacim: "209,108,349", artis: "98.59" },
  { sembol: "POLTK", islemHacmi: "65,133,348", ortHacim: "32,937,974", artis: "97.75" },
  { sembol: "INFO", islemHacmi: "1,055,394,706", ortHacim: "540,988,365", artis: "95.09" },
  { sembol: "HOROZ", islemHacmi: "425,911,766", ortHacim: "218,536,465", artis: "94.89" },
  { sembol: "AHGAZ", islemHacmi: "233,206,176", ortHacim: "120,210,474", artis: "94.00" },
  { sembol: "TMPOL", islemHacmi: "965,961,600", ortHacim: "500,483,264", artis: "93.01" },
  { sembol: "ATSYH", islemHacmi: "7,908,643", ortHacim: "4,152,670", artis: "90.45" },
  { sembol: "SANFM", islemHacmi: "65,239,238", ortHacim: "34,323,657", artis: "90.07" },
  { sembol: "KNFRT", islemHacmi: "106,503,349", ortHacim: "56,349,530", artis: "89.00" },
  { sembol: "VANGD", islemHacmi: "40,104,044", ortHacim: "21,249,097", artis: "88.73" },
  { sembol: "BURCE", islemHacmi: "126,323,152", ortHacim: "67,310,132", artis: "87.57" },
  { sembol: "ARCLK", islemHacmi: "238,789,151", ortHacim: "129,819,725", artis: "83.94" },
  { sembol: "SKYMD", islemHacmi: "47,704,578", ortHacim: "26,468,238", artis: "80.23" },
  { sembol: "MIATK", islemHacmi: "1,073,936,511", ortHacim: "598,272,836", artis: "79.51" },
  { sembol: "ASTOR", islemHacmi: "17,953,660,385", ortHacim: "10,058,886,068", artis: "78.49" },
  { sembol: "DIRIT", islemHacmi: "3,399,770", ortHacim: "1,911,477", artis: "77.86" },
  { sembol: "FZLGY", islemHacmi: "434,551,192", ortHacim: "245,202,936", artis: "77.22" },
  { sembol: "AYES", islemHacmi: "17,128,382", ortHacim: "9,670,131", artis: "77.13" },
  { sembol: "GSRAY", islemHacmi: "423,426,200", ortHacim: "243,006,334", artis: "74.24" },
  { sembol: "ATATR", islemHacmi: "779,740,785", ortHacim: "456,356,059", artis: "70.86" },
  { sembol: "ALTNY", islemHacmi: "452,791,928", ortHacim: "266,805,517", artis: "69.71" },
  { sembol: "BRKO", islemHacmi: "7,976,285", ortHacim: "4,807,988", artis: "65.90" },
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

        <div className="overflow-x-auto rounded-2xl border border-purple-200 bg-purple-50 p-4">
          <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
            <thead className="bg-purple-100 text-zinc-700">
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
            ortalama hacim arasında dikkat çekici fark bulunan hisseleri takip etmek
            isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi kısa
            vadede öne çıkan hisseleri toplu şekilde inceleyebilir, piyasadaki güncel
            hareketliliği daha hızlı analiz edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık bazda artan işlem hacmi, yatırımcı ilgisinin belirli hisselerde
            yoğunlaştığını gösterebilir. Özellikle fiyat hareketi ile birlikte görülen
            hacim artışı, teknik analizde güçlü sinyal olarak değerlendirilebilir ve
            hissede oluşan momentumun daha yakından takip edilmesine yardımcı olur.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan işlem hacmi, ortalama hacim ve artış oranı verileri
            sayesinde hangi hisselerin kısa vadede normal işlem düzeninin üzerine
            çıktığını kolayca görebilirsiniz. Bu veriler hem kısa vadeli traderlar
            hem de dikkat çeken hisse hareketlerini erkenden yakalamak isteyen
            yatırımcılar için önemli bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel haftalık hacim artışı olan hisseler, BIST işlem hacmi
            karşılaştırmaları, kısa vadeli hacim hareketleri ve teknik takip
            ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
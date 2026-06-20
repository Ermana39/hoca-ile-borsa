import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "FRIGO", islemHacmi: "975,731,501", ortHacim: "255,501,782", artis: "281.90" },
  { sembol: "BIGCH", islemHacmi: "300,231,369", ortHacim: "82,549,322", artis: "263.70" },
  { sembol: "IZENR", islemHacmi: "2,783,597,054", ortHacim: "847,855,729", artis: "228.39" },
  { sembol: "BOBET", islemHacmi: "481,259,000", ortHacim: "146,195,702", artis: "229.19" },
  { sembol: "IZINV", islemHacmi: "233,709,554", ortHacim: "74,962,435", artis: "211.77" },
  { sembol: "ISGYO", islemHacmi: "244,526,101", ortHacim: "82,046,449", artis: "198.03" },
  { sembol: "MTRYO", islemHacmi: "18,400,423", ortHacim: "6,348,897", artis: "189.82" },
  { sembol: "SUWEN", islemHacmi: "83,309,613", ortHacim: "29,542,712", artis: "182.00" },
  { sembol: "ANSGR", islemHacmi: "466,567,734", ortHacim: "166,450,725", artis: "180.30" },
  { sembol: "YAYLA", islemHacmi: "172,279,328", ortHacim: "62,533,187", artis: "175.50" },
  { sembol: "KORDS", islemHacmi: "846,160,273", ortHacim: "312,474,235", artis: "170.79" },
  { sembol: "HOROZ", islemHacmi: "453,951,267", ortHacim: "170,226,538", artis: "166.67" },
  { sembol: "SANKO", islemHacmi: "35,518,487", ortHacim: "13,535,770", artis: "162.40" },
  { sembol: "DMSAS", islemHacmi: "176,574,802", ortHacim: "67,891,503", artis: "160.08" },
  { sembol: "ATLAS", islemHacmi: "27,906,288", ortHacim: "10,792,213", artis: "158.58" },
  { sembol: "DGNMO", islemHacmi: "178,918,375", ortHacim: "73,715,232", artis: "142.72" },
  { sembol: "BINBN", islemHacmi: "197,234,471", ortHacim: "82,379,259", artis: "139.42" },
  { sembol: "INFO", islemHacmi: "964,360,170", ortHacim: "406,787,879", artis: "137.07" },
  { sembol: "YGGYO", islemHacmi: "170,392,714", ortHacim: "72,233,270", artis: "135.89" },
  { sembol: "KRDMB", islemHacmi: "1,170,527,089", ortHacim: "499,190,626", artis: "134.48" },
  { sembol: "MHRGY", islemHacmi: "79,691,369", ortHacim: "34,118,695", artis: "133.57" },
  { sembol: "KLYPV", islemHacmi: "540,083,536", ortHacim: "231,406,524", artis: "133.39" },
  { sembol: "BRMEN", islemHacmi: "31,988,409", ortHacim: "13,851,846", artis: "130.93" },
  { sembol: "SMRVA", islemHacmi: "901,081,385", ortHacim: "394,118,686", artis: "128.63" },
  { sembol: "SANEL", islemHacmi: "92,149,369", ortHacim: "42,095,791", artis: "118.90" },
  { sembol: "EGEGY", islemHacmi: "217,478,261", ortHacim: "100,251,550", artis: "116.93" },
  { sembol: "SERNT", islemHacmi: "260,084,383", ortHacim: "123,678,892", artis: "110.29" },
  { sembol: "EUPWR", islemHacmi: "13,443,215,146", ortHacim: "6,417,260,345", artis: "109.49" },
  { sembol: "EUHOL", islemHacmi: "15,927,269", ortHacim: "7,799,624", artis: "104.21" },
  { sembol: "ISGSY", islemHacmi: "666,501,336", ortHacim: "328,838,548", artis: "102.68" },
  { sembol: "AYGAZ", islemHacmi: "303,726,502", ortHacim: "150,087,967", artis: "102.37" },
  { sembol: "GOODY", islemHacmi: "249,039,019", ortHacim: "125,918,458", artis: "97.78" },
  { sembol: "SEKFK", islemHacmi: "6,477,206", ortHacim: "3,297,517", artis: "96.43" },
  { sembol: "GOZDE", islemHacmi: "127,239,003", ortHacim: "64,835,358", artis: "96.25" },
  { sembol: "PAGYO", islemHacmi: "41,383,600", ortHacim: "21,124,926", artis: "95.90" },
  { sembol: "EUKYO", islemHacmi: "31,423,148", ortHacim: "16,337,319", artis: "92.34" },
  { sembol: "ANHYT", islemHacmi: "234,074,228", ortHacim: "122,892,454", artis: "90.47" },
  { sembol: "CELHA", islemHacmi: "539,199,596", ortHacim: "283,692,137", artis: "90.07" },
  { sembol: "LINK", islemHacmi: "605,979,734", ortHacim: "323,509,266", artis: "87.31" },
  { sembol: "GSDDE", islemHacmi: "383,853,088", ortHacim: "207,296,239", artis: "85.17" },
  { sembol: "BAKAB", islemHacmi: "132,597,777", ortHacim: "72,082,069", artis: "83.95" },
  { sembol: "ESCAR", islemHacmi: "318,913,014", ortHacim: "173,761,065", artis: "83.54" },
  { sembol: "IZMDC", islemHacmi: "109,015,737", ortHacim: "59,553,371", artis: "83.06" },
  { sembol: "A1CAP", islemHacmi: "186,562,038", ortHacim: "105,205,939", artis: "77.33" },
  { sembol: "EGSER", islemHacmi: "27,438,962", ortHacim: "15,511,510", artis: "76.89" },
  { sembol: "OZATD", islemHacmi: "1,079,907,118", ortHacim: "615,402,562", artis: "75.48" },
  { sembol: "KRVGD", islemHacmi: "64,023,035", ortHacim: "36,501,060", artis: "75.40" },
  { sembol: "TEKTU", islemHacmi: "130,869,496", ortHacim: "74,671,105", artis: "75.26" },
  { sembol: "GMTAS", islemHacmi: "241,545,118", ortHacim: "138,179,515", artis: "74.81" },
  { sembol: "IEYHO", islemHacmi: "910,677,390", ortHacim: "521,729,708", artis: "74.55" }
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
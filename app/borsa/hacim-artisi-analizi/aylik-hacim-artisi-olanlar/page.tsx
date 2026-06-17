import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "DENGE", islemHacmi: "517,786,615", ortHacim: "56,583,200", artis: "815.00" },
  { sembol: "SKTAS", islemHacmi: "356,505,689", ortHacim: "64,020,171", artis: "456.86" },
  { sembol: "NETAS", islemHacmi: "345,722,951", ortHacim: "68,592,848", artis: "404.02" },
  { sembol: "SELEC", islemHacmi: "2,525,929,978", ortHacim: "503,468,090", artis: "401.71" },
  { sembol: "KONKA", islemHacmi: "217,129,590", ortHacim: "47,041,349", artis: "361.57" },
  { sembol: "BRKO", islemHacmi: "30,984,008", ortHacim: "7,413,569", artis: "317.94" },
  { sembol: "VERUS", islemHacmi: "255,952,822", ortHacim: "62,283,022", artis: "310.95" },
  { sembol: "ISGSY", islemHacmi: "432,061,471", ortHacim: "115,963,965", artis: "272.58" },
  { sembol: "DGGYO", islemHacmi: "17,492,744", ortHacim: "4,728,070", artis: "269.98" },
  { sembol: "LRSHO", islemHacmi: "348,302,105", ortHacim: "100,894,635", artis: "245.21" },
  { sembol: "VANGD", islemHacmi: "64,316,901", ortHacim: "19,630,790", artis: "227.63" },
  { sembol: "ZERGY", islemHacmi: "1,502,674,740", ortHacim: "467,387,823", artis: "221.50" },
  { sembol: "MPARK", islemHacmi: "915,022,995", ortHacim: "284,922,797", artis: "221.15" },
  { sembol: "AKSUE", islemHacmi: "257,289,845", ortHacim: "83,710,950", artis: "207.36" },
  { sembol: "PSGYO", islemHacmi: "2,955,024,330", ortHacim: "969,684,625", artis: "204.74" },
  { sembol: "PAMEL", islemHacmi: "75,233,094", ortHacim: "24,841,634", artis: "202.85" },
  { sembol: "SRVGY", islemHacmi: "376,782,239", ortHacim: "126,999,575", artis: "196.68" },
  { sembol: "MARBL", islemHacmi: "127,973,074", ortHacim: "45,580,126", artis: "180.77" },
  { sembol: "CEMZY", islemHacmi: "1,127,679,964", ortHacim: "402,398,238", artis: "180.24" },
  { sembol: "DNISI", islemHacmi: "136,090,241", ortHacim: "49,911,526", artis: "172.66" },
  { sembol: "DAGI", islemHacmi: "176,478,380", ortHacim: "67,395,259", artis: "161.85" },
  { sembol: "PAHOL", islemHacmi: "1,719,210,141", ortHacim: "657,770,232", artis: "161.37" },
  { sembol: "PASEU", islemHacmi: "2,044,947,183", ortHacim: "806,540,125", artis: "153.55" },
  { sembol: "RUZYE", islemHacmi: "202,858,842", ortHacim: "80,307,404", artis: "152.60" },
  { sembol: "KOCMT", islemHacmi: "216,052,606", ortHacim: "85,721,636", artis: "152.04" },
  { sembol: "PARSN", islemHacmi: "178,565,662", ortHacim: "71,868,868", artis: "148.46" },
  { sembol: "GRTHO", islemHacmi: "677,031,840", ortHacim: "277,623,569", artis: "143.87" },
  { sembol: "AKSA", islemHacmi: "771,589,368", ortHacim: "317,660,432", artis: "142.90" },
  { sembol: "KUYAS", islemHacmi: "934,939,750", ortHacim: "388,269,927", artis: "140.80" },
  { sembol: "TSGYO", islemHacmi: "35,385,275", ortHacim: "14,706,795", artis: "140.60" },
  { sembol: "BEYAZ", islemHacmi: "63,368,718", ortHacim: "26,644,778", artis: "137.83" },
  { sembol: "LIDFA", islemHacmi: "91,654,346", ortHacim: "38,863,385", artis: "135.84" },
  { sembol: "ADESE", islemHacmi: "410,406,728", ortHacim: "184,718,516", artis: "122.18" },
  { sembol: "ALARK", islemHacmi: "1,441,031,019", ortHacim: "652,286,036", artis: "120.92" },
  { sembol: "KNFRT", islemHacmi: "368,870,234", ortHacim: "167,888,174", artis: "119.77" },
  { sembol: "BAHKM", islemHacmi: "153,170,146", ortHacim: "72,429,482", artis: "111.47" },
  { sembol: "FRMPL", islemHacmi: "1,237,770,138", ortHacim: "586,801,445", artis: "110.94" },
  { sembol: "ARZUM", islemHacmi: "74,125,986", ortHacim: "35,589,346", artis: "108.28" },
  { sembol: "SANFM", islemHacmi: "456,131,160", ortHacim: "219,716,006", artis: "107.60" },
  { sembol: "ESCOM", islemHacmi: "559,528,207", ortHacim: "270,607,868", artis: "106.77" },
  { sembol: "BORLS", islemHacmi: "288,389,824", ortHacim: "141,362,350", artis: "104.01" },
  { sembol: "PETKM", islemHacmi: "3,009,905,510", ortHacim: "1,494,730,383", artis: "101.37" },
  { sembol: "IHYAY", islemHacmi: "21,028,213", ortHacim: "10,541,578", artis: "99.48" },
  { sembol: "KTSKR", islemHacmi: "251,015,508", ortHacim: "126,117,004", artis: "99.03" },
  { sembol: "BURCE", islemHacmi: "322,616,897", ortHacim: "162,368,308", artis: "98.69" },
  { sembol: "VERTU", islemHacmi: "90,011,798", ortHacim: "45,304,590", artis: "98.68" },
  { sembol: "ALKIM", islemHacmi: "92,728,215", ortHacim: "46,897,548", artis: "97.73" },
  { sembol: "SEKUR", islemHacmi: "58,299,296", ortHacim: "29,599,723", artis: "96.96" },
  { sembol: "ARMGD", islemHacmi: "491,459,461", ortHacim: "250,170,408", artis: "96.45" },
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
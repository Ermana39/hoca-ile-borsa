import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "SELEC", islemHacmi: "4,489,306,535", ortHacim: "162,933,517", artis: "2655.30" },
  { sembol: "EUPWR", islemHacmi: "13,443,215,146", ortHacim: "764,495,054", artis: "1658.44" },
  { sembol: "KORDS", islemHacmi: "846,160,273", ortHacim: "85,633,452", artis: "888.12" },
  { sembol: "IZINV", islemHacmi: "233,709,554", ortHacim: "23,916,522", artis: "877.19" },
  { sembol: "GOODY", islemHacmi: "249,039,019", ortHacim: "31,882,535", artis: "681.11" },
  { sembol: "FRIGO", islemHacmi: "975,731,501", ortHacim: "126,125,990", artis: "673.62" },
  { sembol: "BRMEN", islemHacmi: "31,988,409", ortHacim: "4,378,159", artis: "630.64" },
  { sembol: "GSDDE", islemHacmi: "383,853,088", ortHacim: "52,654,508", artis: "629.00" },
  { sembol: "SKTAS", islemHacmi: "567,040,696", ortHacim: "77,837,503", artis: "628.49" },
  { sembol: "CELHA", islemHacmi: "539,199,596", ortHacim: "82,311,064", artis: "555.08" },
  { sembol: "PRZMA", islemHacmi: "244,570,414", ortHacim: "38,799,405", artis: "530.35" },
  { sembol: "SANEL", islemHacmi: "92,149,369", ortHacim: "15,176,537", artis: "507.18" },
  { sembol: "GESAN", islemHacmi: "2,929,606,612", ortHacim: "485,986,210", artis: "502.82" },
  { sembol: "BOBET", islemHacmi: "481,259,000", ortHacim: "82,238,495", artis: "485.20" },
  { sembol: "DGGYO", islemHacmi: "24,413,335", ortHacim: "4,278,233", artis: "470.64" },
  { sembol: "KOCMT", islemHacmi: "508,317,250", ortHacim: "90,219,353", artis: "463.42" },
  { sembol: "BAKAB", islemHacmi: "132,597,777", ortHacim: "23,903,872", artis: "454.71" },
  { sembol: "INFO", islemHacmi: "964,360,170", ortHacim: "175,114,021", artis: "450.70" },
  { sembol: "ODAS", islemHacmi: "2,255,293,846", ortHacim: "415,194,850", artis: "443.19" },
  { sembol: "DGNMO", islemHacmi: "178,918,375", ortHacim: "33,713,428", artis: "430.70" },
  { sembol: "OZATD", islemHacmi: "1,079,907,118", ortHacim: "206,249,934", artis: "423.59" },
  { sembol: "IZENR", islemHacmi: "2,783,597,054", ortHacim: "556,743,852", artis: "399.98" },
  { sembol: "DMSAS", islemHacmi: "176,574,802", ortHacim: "36,437,282", artis: "384.60" },
  { sembol: "YGGYO", islemHacmi: "170,392,714", ortHacim: "39,324,901", artis: "333.29" },
  { sembol: "KRDMB", islemHacmi: "1,170,527,089", ortHacim: "289,972,009", artis: "303.67" },
  { sembol: "PSGYO", islemHacmi: "3,128,628,771", ortHacim: "812,428,976", artis: "285.10" },
  { sembol: "BIGCH", islemHacmi: "300,231,369", ortHacim: "78,607,483", artis: "281.94" },
  { sembol: "BRKO", islemHacmi: "29,862,406", ortHacim: "8,009,138", artis: "272.85" },
  { sembol: "GSDHO", islemHacmi: "260,260,908", ortHacim: "72,696,681", artis: "258.01" },
  { sembol: "ALGYO", islemHacmi: "754,973,436", ortHacim: "218,289,218", artis: "245.86" },
  { sembol: "YAYLA", islemHacmi: "172,279,328", ortHacim: "51,090,063", artis: "237.21" },
  { sembol: "EUKYO", islemHacmi: "31,423,148", ortHacim: "9,372,407", artis: "235.27" },
  { sembol: "ALFAS", islemHacmi: "542,503,444", ortHacim: "162,943,881", artis: "232.94" },
  { sembol: "KLYPV", islemHacmi: "540,083,536", ortHacim: "162,265,130", artis: "232.84" },
  { sembol: "RUBNS", islemHacmi: "336,097,088", ortHacim: "101,780,009", artis: "230.22" },
  { sembol: "ENSRI", islemHacmi: "792,973,545", ortHacim: "241,133,115", artis: "228.85" },
  { sembol: "GOKNR", islemHacmi: "425,971,318", ortHacim: "130,441,346", artis: "226.56" },
  { sembol: "KTLEV", islemHacmi: "7,590,534,837", ortHacim: "2,375,805,466", artis: "219.49" },
  { sembol: "PRKME", islemHacmi: "178,816,300", ortHacim: "56,143,320", artis: "218.50" },
  { sembol: "ATEKS", islemHacmi: "7,689,237", ortHacim: "2,444,830", artis: "214.51" },
  { sembol: "ISGSY", islemHacmi: "666,501,336", ortHacim: "214,390,791", artis: "210.88" },
  { sembol: "HEKTS", islemHacmi: "2,748,643,168", ortHacim: "888,309,984", artis: "209.42" },
  { sembol: "LIDFA", islemHacmi: "171,452,925", ortHacim: "57,608,014", artis: "197.62" },
  { sembol: "EFOR", islemHacmi: "2,401,527,664", ortHacim: "808,670,206", artis: "196.97" },
  { sembol: "HOROZ", islemHacmi: "453,951,267", ortHacim: "153,081,784", artis: "196.54" },
  { sembol: "KNFRT", islemHacmi: "163,413,547", ortHacim: "55,910,066", artis: "192.28" },
  { sembol: "AYEN", islemHacmi: "152,010,885", ortHacim: "52,263,194", artis: "190.86" },
  { sembol: "ATLAS", islemHacmi: "27,906,288", ortHacim: "9,690,785", artis: "187.97" },
  { sembol: "DAPGM", islemHacmi: "1,940,916,193", ortHacim: "681,269,747", artis: "184.90" },
  { sembol: "BANVT", islemHacmi: "177,427,319", ortHacim: "63,225,449", artis: "180.63" }
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
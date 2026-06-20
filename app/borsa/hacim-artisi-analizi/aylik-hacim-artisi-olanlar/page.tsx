import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "FRIGO", islemHacmi: "975,731,501", ortHacim: "136,071,145", artis: "617.07" },
  { sembol: "BIGCH", islemHacmi: "300,231,369", ortHacim: "43,712,825", artis: "586.83" },
  { sembol: "DMSAS", islemHacmi: "176,574,802", ortHacim: "29,287,873", artis: "502.89" },
  { sembol: "IZINV", islemHacmi: "233,709,554", ortHacim: "39,139,526", artis: "497.12" },
  { sembol: "BOBET", islemHacmi: "481,259,000", ortHacim: "84,677,774", artis: "468.43" },
  { sembol: "SELEC", islemHacmi: "4,489,306,535", ortHacim: "806,808,566", artis: "456.43" },
  { sembol: "INFO", islemHacmi: "964,360,170", ortHacim: "175,007,315", artis: "451.04" },
  { sembol: "BRMEN", islemHacmi: "31,988,409", ortHacim: "6,775,980", artis: "372.09" },
  { sembol: "GOODY", islemHacmi: "249,039,019", ortHacim: "56,221,896", artis: "342.96" },
  { sembol: "SKTAS", islemHacmi: "567,040,696", ortHacim: "129,039,944", artis: "339.43" },
  { sembol: "ISGSY", islemHacmi: "666,501,336", ortHacim: "152,089,184", artis: "338.23" },
  { sembol: "MTRYO", islemHacmi: "18,400,423", ortHacim: "4,217,943", artis: "336.24" },
  { sembol: "ISGYO", islemHacmi: "244,526,101", ortHacim: "60,665,120", artis: "303.08" },
  { sembol: "KOCMT", islemHacmi: "508,317,250", ortHacim: "128,931,689", artis: "294.25" },
  { sembol: "DGGYO", islemHacmi: "24,413,335", ortHacim: "6,317,374", artis: "286.45" },
  { sembol: "KORDS", islemHacmi: "846,160,273", ortHacim: "220,201,699", artis: "284.27" },
  { sembol: "SUWEN", islemHacmi: "83,309,613", ortHacim: "22,971,028", artis: "262.67" },
  { sembol: "ATLAS", islemHacmi: "27,906,288", ortHacim: "8,210,860", artis: "239.87" },
  { sembol: "ANSGR", islemHacmi: "466,567,734", ortHacim: "139,931,484", artis: "233.43" },
  { sembol: "OZATD", islemHacmi: "1,079,907,118", ortHacim: "333,498,747", artis: "223.81" },
  { sembol: "YAYLA", islemHacmi: "172,279,328", ortHacim: "54,587,015", artis: "215.60" },
  { sembol: "HOROZ", islemHacmi: "453,951,267", ortHacim: "144,648,110", artis: "213.83" },
  { sembol: "SANKO", islemHacmi: "35,518,487", ortHacim: "11,646,817", artis: "204.96" },
  { sembol: "PRKME", islemHacmi: "178,816,300", ortHacim: "59,424,832", artis: "200.91" },
  { sembol: "BAKAB", islemHacmi: "132,597,777", ortHacim: "44,424,966", artis: "198.48" },
  { sembol: "ODAS", islemHacmi: "2,255,293,846", ortHacim: "756,690,374", artis: "198.05" },
  { sembol: "EUPWR", islemHacmi: "13,443,215,146", ortHacim: "4,526,474,782", artis: "196.99" },
  { sembol: "KLYPV", islemHacmi: "540,083,536", ortHacim: "184,395,046", artis: "192.89" },
  { sembol: "LIDFA", islemHacmi: "171,452,925", ortHacim: "59,358,515", artis: "188.84" },
  { sembol: "BANVT", islemHacmi: "177,427,319", ortHacim: "61,618,090", artis: "187.95" },
  { sembol: "BINBN", islemHacmi: "197,234,471", ortHacim: "71,601,542", artis: "175.46" },
  { sembol: "BRKO", islemHacmi: "29,862,406", ortHacim: "10,938,093", artis: "173.01" },
  { sembol: "SMRVA", islemHacmi: "901,081,385", ortHacim: "341,284,151", artis: "164.03" },
  { sembol: "BORLS", islemHacmi: "397,979,981", ortHacim: "160,727,261", artis: "147.61" },
  { sembol: "GOZDE", islemHacmi: "127,239,003", ortHacim: "52,877,746", artis: "140.63" },
  { sembol: "DGNMO", islemHacmi: "178,918,375", ortHacim: "74,773,008", artis: "139.28" },
  { sembol: "SANEL", islemHacmi: "92,149,369", ortHacim: "38,765,547", artis: "137.71" },
  { sembol: "MERIT", islemHacmi: "183,280,663", ortHacim: "77,518,120", artis: "136.44" },
  { sembol: "ATEKS", islemHacmi: "7,689,237", ortHacim: "3,284,991", artis: "134.07" },
  { sembol: "AYGAZ", islemHacmi: "303,726,502", ortHacim: "134,766,107", artis: "125.37" },
  { sembol: "EFOR", islemHacmi: "2,401,527,664", ortHacim: "1,070,957,831", artis: "124.24" },
  { sembol: "AFYON", islemHacmi: "64,617,547", ortHacim: "29,175,356", artis: "121.48" },
  { sembol: "MARBL", islemHacmi: "119,937,851", ortHacim: "54,880,582", artis: "118.58" },
  { sembol: "EGEGY", islemHacmi: "217,478,261", ortHacim: "99,641,419", artis: "118.26" },
  { sembol: "PSGYO", islemHacmi: "3,128,628,771", ortHacim: "1,470,232,995", artis: "112.80" },
  { sembol: "MERCN", islemHacmi: "323,179,240", ortHacim: "152,456,959", artis: "111.98" },
  { sembol: "DOHOL", islemHacmi: "531,507,917", ortHacim: "250,754,783", artis: "111.96" },
  { sembol: "BMSTL", islemHacmi: "418,833,821", ortHacim: "201,771,064", artis: "107.58" },
  { sembol: "ANHYT", islemHacmi: "234,074,228", ortHacim: "113,533,296", artis: "106.17" },
  { sembol: "FUHOL", islemHacmi: "15,927,269", ortHacim: "7,775,431", artis: "104.84" }
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
import Link from "@/components/NoPrefetchLink";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "KUVVA", islemHacmi: "130,376,751", ortHacim: "17,759,391", artis: "634.13" },
  { sembol: "ANELE", islemHacmi: "805,054,315", ortHacim: "135,038,728", artis: "496.17" },
  { sembol: "SELEC", islemHacmi: "1,103,392,872", ortHacim: "188,662,721", artis: "484.85" },
  { sembol: "DESPC", islemHacmi: "176,558,267", ortHacim: "31,173,990", artis: "466.36" },
  { sembol: "ATSYH", islemHacmi: "21,675,436", ortHacim: "4,582,703", artis: "372.98" },
  { sembol: "OZATD", islemHacmi: "1,613,529,223", ortHacim: "342,750,865", artis: "370.76" },
  { sembol: "CATES", islemHacmi: "340,787,613", ortHacim: "75,620,572", artis: "350.65" },
  { sembol: "BIGEN", islemHacmi: "1,141,576,207", ortHacim: "256,397,227", artis: "345.24" },
  { sembol: "LIDER", islemHacmi: "714,944,907", ortHacim: "162,310,602", artis: "340.48" },
  { sembol: "GRSEL", islemHacmi: "887,348,243", ortHacim: "201,476,955", artis: "340.42" },
  { sembol: "SUNTK", islemHacmi: "303,252,446", ortHacim: "76,763,341", artis: "295.09" },
  { sembol: "ECOGR", islemHacmi: "2,189,525,482", ortHacim: "565,703,231", artis: "287.04" },
  { sembol: "CUSAN", islemHacmi: "144,164,792", ortHacim: "37,302,488", artis: "286.48" },
  { sembol: "OZGYO", islemHacmi: "205,546,002", ortHacim: "53,426,413", artis: "284.73" },
  { sembol: "ULUUN", islemHacmi: "232,531,949", ortHacim: "61,270,588", artis: "279.52" },
  { sembol: "CONSE", islemHacmi: "143,988,386", ortHacim: "39,943,287", artis: "260.48" },
  { sembol: "IZMDC", islemHacmi: "331,991,964", ortHacim: "92,768,885", artis: "257.87" },
  { sembol: "KTLEV", islemHacmi: "9,543,042,802", ortHacim: "2,738,769,124", artis: "248.44" },
  { sembol: "PSGYO", islemHacmi: "3,105,096,525", ortHacim: "915,746,485", artis: "239.08" },
  { sembol: "GUNDG", islemHacmi: "1,075,545,335", ortHacim: "321,140,304", artis: "234.91" },
  { sembol: "AVGYO", islemHacmi: "102,220,294", ortHacim: "30,873,573", artis: "231.09" },
  { sembol: "INTEK", islemHacmi: "11,550,874", ortHacim: "3,518,282", artis: "228.31" },
  { sembol: "MRSHL", islemHacmi: "221,407,834", ortHacim: "69,040,433", artis: "220.69" },
  { sembol: "DGATE", islemHacmi: "133,968,205", ortHacim: "43,083,643", artis: "210.95" },
  { sembol: "HATSN", islemHacmi: "407,426,479", ortHacim: "133,607,864", artis: "204.94" },
  { sembol: "PAGYO", islemHacmi: "67,389,077", ortHacim: "22,211,558", artis: "203.40" },
  { sembol: "BTCIM", islemHacmi: "1,867,469,168", ortHacim: "637,335,400", artis: "193.01" },
  { sembol: "HURGZ", islemHacmi: "188,039,996", ortHacim: "65,064,678", artis: "189.00" },
  { sembol: "ATATP", islemHacmi: "741,849,012", ortHacim: "259,641,245", artis: "185.72" },
  { sembol: "OZSUB", islemHacmi: "160,738,281", ortHacim: "60,221,116", artis: "166.91" },
  { sembol: "DMRGD", islemHacmi: "812,853,263", ortHacim: "307,903,896", artis: "164.00" },
  { sembol: "ICBCT", islemHacmi: "143,310,187", ortHacim: "54,445,127", artis: "163.22" },
  { sembol: "KMPUR", islemHacmi: "148,130,470", ortHacim: "57,796,994", artis: "156.22" },
  { sembol: "GOLDA", islemHacmi: "2,714,966,161", ortHacim: "1,068,153,231", artis: "154.17" },
  { sembol: "AYGAZ", islemHacmi: "418,081,487", ortHacim: "167,709,999", artis: "149.29" },
  { sembol: "PSDTC", islemHacmi: "38,947,577", ortHacim: "16,566,254", artis: "135.10" },
  { sembol: "KARTN", islemHacmi: "183,477,893", ortHacim: "79,979,695", artis: "129.44" },
  { sembol: "SELVA", islemHacmi: "267,757,328", ortHacim: "117,166,170", artis: "128.53" },
  { sembol: "TMSN", islemHacmi: "285,231,764", ortHacim: "125,265,375", artis: "127.70" },
  { sembol: "TRENU", islemHacmi: "680,945,378", ortHacim: "299,155,531", artis: "127.62" },
  { sembol: "CMBTN", islemHacmi: "127,852,267", ortHacim: "56,303,178", artis: "127.08" },
  { sembol: "ISKUR", islemHacmi: "8,250,000", ortHacim: "3,643,195", artis: "126.45" },
  { sembol: "TRMET", islemHacmi: "1,791,644,826", ortHacim: "797,833,274", artis: "124.56" },
  { sembol: "KOCMT", islemHacmi: "310,693,047", ortHacim: "139,972,255", artis: "121.97" },
  { sembol: "VBTYZ", islemHacmi: "154,931,485", ortHacim: "70,006,791", artis: "121.31" },
  { sembol: "RUBNS", islemHacmi: "232,167,950", ortHacim: "105,084,522", artis: "120.93" },
  { sembol: "SARAE", islemHacmi: "1,062,187,782", ortHacim: "484,861,561", artis: "119.07" },
  { sembol: "GEDIK", islemHacmi: "235,784,217", ortHacim: "108,187,091", artis: "117.94" },
  { sembol: "BJKAS", islemHacmi: "316,594,438", ortHacim: "150,357,838", artis: "110.56" },
  { sembol: "YEOTK", islemHacmi: "1,128,314,741", ortHacim: "547,459,274", artis: "106.10" },
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
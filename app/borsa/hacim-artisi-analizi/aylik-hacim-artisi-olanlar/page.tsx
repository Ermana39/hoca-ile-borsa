import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "AVHOL", islemHacmi: "585,788,332", ortHacim: "115,256,738", artis: "408.23" },
  { sembol: "GENKM", islemHacmi: "2,318,464,108", ortHacim: "507,425,406", artis: "356.91" },
  { sembol: "NUGYO", islemHacmi: "182,713,286", ortHacim: "43,976,381", artis: "315.48" },
  { sembol: "TLMAN", islemHacmi: "163,807,127", ortHacim: "41,184,918", artis: "297.74" },
  { sembol: "CUSAN", islemHacmi: "174,541,667", ortHacim: "46,049,802", artis: "279.03" },
  { sembol: "ISKPL", islemHacmi: "4,597,245,171", ortHacim: "1,270,540,294", artis: "261.83" },
  { sembol: "GSDHO", islemHacmi: "725,132,705", ortHacim: "205,563,982", artis: "252.75" },
  { sembol: "OZGYO", islemHacmi: "247,769,344", ortHacim: "72,524,125", artis: "241.64" },
  { sembol: "DAPGM", islemHacmi: "2,719,760,652", ortHacim: "813,880,887", artis: "234.17" },
  { sembol: "BESTE", islemHacmi: "2,424,996,047", ortHacim: "757,383,030", artis: "220.18" },
  { sembol: "KNFRT", islemHacmi: "373,413,200", ortHacim: "118,221,655", artis: "215.86" },
  { sembol: "ULUFA", islemHacmi: "188,047,875", ortHacim: "66,751,369", artis: "181.71" },
  { sembol: "BYDNR", islemHacmi: "159,817,262", ortHacim: "57,362,257", artis: "178.61" },
  { sembol: "AVGYO", islemHacmi: "51,992,910", ortHacim: "18,972,259", artis: "174.05" },
  { sembol: "ARDYZ", islemHacmi: "1,010,944,692", ortHacim: "373,704,737", artis: "170.52" },
  { sembol: "ASUZU", islemHacmi: "182,507,130", ortHacim: "67,639,173", artis: "169.82" },
  { sembol: "DITAS", islemHacmi: "522,735,188", ortHacim: "200,765,256", artis: "160.37" },
  { sembol: "BIOEN", islemHacmi: "418,716,650", ortHacim: "167,950,066", artis: "149.31" },
  { sembol: "VKING", islemHacmi: "52,277,668", ortHacim: "21,041,323", artis: "148.45" },
  { sembol: "SEKUR", islemHacmi: "47,082,322", ortHacim: "18,974,186", artis: "148.14" },
  { sembol: "CELHA", islemHacmi: "539,864,212", ortHacim: "220,533,995", artis: "144.80" },
  { sembol: "RNPOL", islemHacmi: "30,212,857", ortHacim: "12,342,928", artis: "144.78" },
  { sembol: "MARKA", islemHacmi: "341,049,588", ortHacim: "142,080,985", artis: "140.04" },
  { sembol: "TUKAS", islemHacmi: "1,084,103,433", ortHacim: "457,470,211", artis: "136.98" },
  { sembol: "OBASE", islemHacmi: "81,553,941", ortHacim: "34,932,637", artis: "133.46" },
  { sembol: "BRYAT", islemHacmi: "523,456,870", ortHacim: "232,904,152", artis: "124.75" },
  { sembol: "AKGRT", islemHacmi: "223,986,443", ortHacim: "102,133,068", artis: "119.31" },
  { sembol: "HRKET", islemHacmi: "884,663,341", ortHacim: "400,500,446", artis: "108.41" },
  { sembol: "PSGYO", islemHacmi: "1,744,656,233", ortHacim: "837,569,869", artis: "108.30" },
  { sembol: "ENSRI", islemHacmi: "1,533,898,916", ortHacim: "743,437,200", artis: "106.33" },
  { sembol: "AKENR", islemHacmi: "1,131,779,469", ortHacim: "552,740,037", artis: "104.70" },
  { sembol: "EGEEN", islemHacmi: "238,070,910", ortHacim: "117,654,528", artis: "102.35" },
  { sembol: "IDGYO", islemHacmi: "39,306,982", ortHacim: "19,715,127", artis: "99.37" },
  { sembol: "AYGAZ", islemHacmi: "259,706,013", ortHacim: "131,016,780", artis: "98.22" },
  { sembol: "TSGYO", islemHacmi: "27,375,018", ortHacim: "13,847,206", artis: "97.69" },
  { sembol: "EMKEL", islemHacmi: "588,882,558", ortHacim: "305,662,682", artis: "92.66" },
  { sembol: "SANEL", islemHacmi: "55,964,659", ortHacim: "29,155,464", artis: "91.99" },
  { sembol: "LXGYO", islemHacmi: "1,217,824,219", ortHacim: "640,861,500", artis: "90.03" },
  { sembol: "REEDR", islemHacmi: "516,576,984", ortHacim: "278,409,188", artis: "85.55" },
  { sembol: "GATEG", islemHacmi: "10,342,397", ortHacim: "5,615,878", artis: "84.16" },
  { sembol: "ARTMS", islemHacmi: "209,250,026", ortHacim: "113,735,122", artis: "83.98" },
  { sembol: "MAGEN", islemHacmi: "1,336,650,575", ortHacim: "735,789,093", artis: "81.66" },
  { sembol: "TTKOM", islemHacmi: "2,765,504,148", ortHacim: "1,529,678,594", artis: "80.79" },
  { sembol: "MAVI", islemHacmi: "465,524,590", ortHacim: "257,526,670", artis: "80.77" },
  { sembol: "CRFSA", islemHacmi: "210,573,080", ortHacim: "116,590,691", artis: "80.61" },
  { sembol: "HTTBT", islemHacmi: "63,097,975", ortHacim: "35,174,632", artis: "79.38" },
  { sembol: "ICBCT", islemHacmi: "261,256,551", ortHacim: "145,928,078", artis: "79.03" },
  { sembol: "TABGD", islemHacmi: "284,583,668", ortHacim: "160,363,057", artis: "77.46" },
  { sembol: "YIGIT", islemHacmi: "279,500,915", ortHacim: "157,782,039", artis: "77.14" },
  { sembol: "AYCES", islemHacmi: "439,772,250", ortHacim: "249,780,297", artis: "76.06" },
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
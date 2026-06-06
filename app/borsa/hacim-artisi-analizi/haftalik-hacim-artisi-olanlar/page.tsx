import Link from "next/link";

const veriler = [
  { sembol: "ULUFA", islemHacmi: "188,047,875", ortHacim: "64,523,098", artis: "191.44" },
  { sembol: "GSDHO", islemHacmi: "725,132,705", ortHacim: "248,866,860", artis: "191.37" },
  { sembol: "ISKPL", islemHacmi: "4,597,245,171", ortHacim: "1,714,835,990", artis: "168.09" },
  { sembol: "TUKAS", islemHacmi: "1,084,103,433", ortHacim: "418,532,599", artis: "159.02" },
  { sembol: "GENKM", islemHacmi: "2,318,464,108", ortHacim: "907,286,035", artis: "155.54" },
  { sembol: "AVOD", islemHacmi: "239,406,156", ortHacim: "96,697,299", artis: "147.58" },
  { sembol: "ASUZU", islemHacmi: "182,507,130", ortHacim: "75,425,615", artis: "141.97" },
  { sembol: "BIOEN", islemHacmi: "418,716,650", ortHacim: "179,994,100", artis: "132.63" },
  { sembol: "VKING", islemHacmi: "52,277,668", ortHacim: "23,780,333", artis: "119.84" },
  { sembol: "AVGYO", islemHacmi: "51,992,910", ortHacim: "23,700,882", artis: "119.37" },
  { sembol: "EMPAE", islemHacmi: "1,719,956,911", ortHacim: "788,399,542", artis: "118.16" },
  { sembol: "ENSRI", islemHacmi: "1,533,898,916", ortHacim: "705,013,729", artis: "117.57" },
  { sembol: "LXGYO", islemHacmi: "1,217,824,219", ortHacim: "564,785,737", artis: "115.68" },
  { sembol: "SEKUR", islemHacmi: "47,082,322", ortHacim: "21,893,635", artis: "115.05" },
  { sembol: "RNPOL", islemHacmi: "30,212,857", ortHacim: "14,254,325", artis: "111.95" },
  { sembol: "GSDDE", islemHacmi: "330,256,664", ortHacim: "157,170,590", artis: "110.13" },
  { sembol: "AVHOL", islemHacmi: "585,788,332", ortHacim: "281,388,708", artis: "108.13" },
  { sembol: "A1YEN", islemHacmi: "384,353,694", ortHacim: "186,372,606", artis: "106.23" },
  { sembol: "MARKA", islemHacmi: "341,049,588", ortHacim: "165,579,958", artis: "105.97" },
  { sembol: "SELVA", islemHacmi: "231,113,433", ortHacim: "113,419,501", artis: "103.77" },
  { sembol: "TLMAN", islemHacmi: "163,807,127", ortHacim: "80,805,458", artis: "102.72" },
  { sembol: "ZRGYO", islemHacmi: "784,169,368", ortHacim: "386,832,304", artis: "102.72" },
  { sembol: "BESTE", islemHacmi: "2,424,996,047", ortHacim: "1,199,568,201", artis: "102.16" },
  { sembol: "DAPGM", islemHacmi: "2,719,760,652", ortHacim: "1,375,435,743", artis: "97.74" },
  { sembol: "GARFA", islemHacmi: "106,546,079", ortHacim: "53,909,726", artis: "97.64" },
  { sembol: "NUGYO", islemHacmi: "182,713,286", ortHacim: "93,682,848", artis: "95.03" },
  { sembol: "PSGYO", islemHacmi: "1,744,656,233", ortHacim: "897,920,684", artis: "94.30" },
  { sembol: "BORLS", islemHacmi: "250,704,787", ortHacim: "129,429,828", artis: "93.70" },
  { sembol: "CRFSA", islemHacmi: "210,573,080", ortHacim: "109,533,373", artis: "92.25" },
  { sembol: "REEDR", islemHacmi: "516,576,984", ortHacim: "286,969,068", artis: "80.01" },
  { sembol: "AYCES", islemHacmi: "439,772,250", ortHacim: "246,006,684", artis: "78.76" },
  { sembol: "YBTAS", islemHacmi: "2,035,283", ortHacim: "1,153,921", artis: "76.38" },
  { sembol: "EPLAS", islemHacmi: "51,315,892", ortHacim: "29,599,003", artis: "73.37" },
  { sembol: "GEDIK", islemHacmi: "210,878,093", ortHacim: "125,400,038", artis: "68.16" },
  { sembol: "TSGYO", islemHacmi: "27,375,018", ortHacim: "16,467,362", artis: "66.24" },
  { sembol: "BYDNR", islemHacmi: "159,817,262", ortHacim: "97,180,898", artis: "64.45" },
  { sembol: "VKFYO", islemHacmi: "17,693,526", ortHacim: "10,776,521", artis: "64.19" },
  { sembol: "ALCAR", islemHacmi: "36,211,643", ortHacim: "22,169,887", artis: "63.34" },
  { sembol: "OZGYO", islemHacmi: "247,769,344", ortHacim: "153,183,255", artis: "61.75" },
  { sembol: "TABGD", islemHacmi: "284,583,668", ortHacim: "176,485,312", artis: "61.25" },
  { sembol: "SOKE", islemHacmi: "134,797,555", ortHacim: "84,305,453", artis: "59.89" },
  { sembol: "INVEO", islemHacmi: "111,422,730", ortHacim: "70,325,243", artis: "58.44" },
  { sembol: "ARDYZ", islemHacmi: "1,010,944,692", ortHacim: "644,339,561", artis: "56.90" },
  { sembol: "MEGMT", islemHacmi: "866,697,374", ortHacim: "554,243,759", artis: "56.37" },
  { sembol: "MAVI", islemHacmi: "465,524,590", ortHacim: "298,458,981", artis: "55.98" },
  { sembol: "HTTBT", islemHacmi: "63,097,975", ortHacim: "40,551,414", artis: "55.60" },
  { sembol: "BANVT", islemHacmi: "49,292,153", ortHacim: "31,784,259", artis: "55.03" },
  { sembol: "IZFAS", islemHacmi: "640,228,686", ortHacim: "423,294,970", artis: "51.25" },
  { sembol: "DITAS", islemHacmi: "522,735,188", ortHacim: "345,729,472", artis: "51.20" },
  { sembol: "GATEG", islemHacmi: "10,342,397", ortHacim: "6,910,232", artis: "49.67" },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

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

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

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
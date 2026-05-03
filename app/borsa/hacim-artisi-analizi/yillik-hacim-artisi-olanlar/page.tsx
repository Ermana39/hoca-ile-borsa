import Link from "next/link";

const veriler = [
  { sembol: "OZATD", islemHacmi: "3,345,405,870", ortHacim: "145,227,930", artis: "2,203.56" },
  { sembol: "PASEU", islemHacmi: "15,019,378,464", ortHacim: "841,921,575", artis: "1,683.94" },
  { sembol: "GWIND", islemHacmi: "2,329,923,675", ortHacim: "148,645,615", artis: "1,467.44" },
  { sembol: "ALGYO", islemHacmi: "1,461,429,974", ortHacim: "120,581,437", artis: "1,111.99" },
  { sembol: "DYOBY", islemHacmi: "915,732,884", ortHacim: "76,554,801", artis: "1,096.18" },
  { sembol: "HOROZ", islemHacmi: "1,218,861,473", ortHacim: "113,727,207", artis: "971.74" },
  { sembol: "KRDMB", islemHacmi: "1,167,874,547", ortHacim: "138,265,641", artis: "744.66" },
  { sembol: "ENSRI", islemHacmi: "983,112,433", ortHacim: "128,609,639", artis: "664.42" },
  { sembol: "ESCOM", islemHacmi: "1,318,601,583", ortHacim: "173,387,655", artis: "660.49" },
  { sembol: "HURGZ", islemHacmi: "384,652,961", ortHacim: "53,480,378", artis: "619.24" },
  { sembol: "ISKPL", islemHacmi: "1,969,783,787", ortHacim: "277,176,730", artis: "610.66" },
  { sembol: "ARENA", islemHacmi: "496,010,224", ortHacim: "73,450,125", artis: "575.30" },
  { sembol: "CELHA", islemHacmi: "318,549,532", ortHacim: "52,543,577", artis: "506.26" },
  { sembol: "EUPWR", islemHacmi: "1,997,198,746", ortHacim: "344,225,523", artis: "480.20" },
  { sembol: "BYDNR", islemHacmi: "96,037,022", ortHacim: "16,712,353", artis: "474.65" },
  { sembol: "GLRMK", islemHacmi: "4,010,797,397", ortHacim: "720,412,482", artis: "456.74" },
  { sembol: "TATEN", islemHacmi: "1,595,048,614", ortHacim: "289,979,442", artis: "450.06" },
  { sembol: "TURGG", islemHacmi: "258,241,102", ortHacim: "47,042,277", artis: "448.96" },
  { sembol: "PKART", islemHacmi: "212,603,841", ortHacim: "39,461,195", artis: "438.77" },
  { sembol: "HKTM", islemHacmi: "402,485,579", ortHacim: "75,109,367", artis: "435.87" },
  { sembol: "ISDMR", islemHacmi: "611,035,438", ortHacim: "114,956,960", artis: "431.53" },
  { sembol: "KTSKR", islemHacmi: "384,735,051", ortHacim: "72,987,213", artis: "427.13" },
  { sembol: "KMPUR", islemHacmi: "239,874,847", ortHacim: "46,161,171", artis: "419.65" },
  { sembol: "BIGEN", islemHacmi: "1,024,342,655", ortHacim: "211,325,230", artis: "384.72" },
  { sembol: "KONTR", islemHacmi: "6,038,532,486", ortHacim: "1,250,976,445", artis: "382.71" },
  { sembol: "ULUSE", islemHacmi: "211,474,773", ortHacim: "44,123,871", artis: "379.28" },
  { sembol: "KONKA", islemHacmi: "229,805,545", ortHacim: "48,202,485", artis: "376.75" },
  { sembol: "IZINV", islemHacmi: "86,742,361", ortHacim: "18,242,009", artis: "375.51" },
  { sembol: "MANAS", islemHacmi: "1,839,911,855", ortHacim: "389,824,575", artis: "371.98" },
  { sembol: "KARTN", islemHacmi: "181,481,776", ortHacim: "38,780,316", artis: "367.97" },
  { sembol: "RODRG", islemHacmi: "49,653,841", ortHacim: "10,694,246", artis: "364.30" },
  { sembol: "SANKO", islemHacmi: "68,429,244", ortHacim: "14,770,790", artis: "363.27" },
  { sembol: "SUMAS", islemHacmi: "6,304,783", ortHacim: "1,414,102", artis: "345.85" },
  { sembol: "EFOR", islemHacmi: "2,730,822,258", ortHacim: "620,587,400", artis: "340.04" },
  { sembol: "AGYO", islemHacmi: "19,148,343", ortHacim: "4,532,207", artis: "322.49" },
  { sembol: "BESLR", islemHacmi: "264,816,764", ortHacim: "65,060,797", artis: "307.03" },
  { sembol: "GSDHO", islemHacmi: "178,266,092", ortHacim: "43,823,613", artis: "306.78" },
  { sembol: "KBORU", islemHacmi: "762,258,706", ortHacim: "196,678,686", artis: "287.57" },
  { sembol: "ASTOR", islemHacmi: "12,780,841,518", ortHacim: "3,351,722,621", artis: "281.32" },
  { sembol: "GMTAS", islemHacmi: "357,232,514", ortHacim: "94,668,197", artis: "277.35" },
  { sembol: "PCILT", islemHacmi: "173,998,874", ortHacim: "46,164,917", artis: "276.91" },
  { sembol: "SEYKM", islemHacmi: "45,076,343", ortHacim: "12,165,909", artis: "270.51" },
  { sembol: "AYEN", islemHacmi: "137,625,019", ortHacim: "37,182,448", artis: "270.13" },
  { sembol: "ADEL", islemHacmi: "491,190,821", ortHacim: "132,882,280", artis: "269.64" },
  { sembol: "OZSUB", islemHacmi: "183,913,954", ortHacim: "50,306,709", artis: "265.59" },
  { sembol: "MPARK", islemHacmi: "951,280,899", ortHacim: "267,192,844", artis: "256.03" },
  { sembol: "ENJSA", islemHacmi: "955,683,849", ortHacim: "269,591,924", artis: "254.49" },
  { sembol: "BURVA", islemHacmi: "122,765,442", ortHacim: "35,093,411", artis: "249.82" },
  { sembol: "ALKLC", islemHacmi: "1,137,830,250", ortHacim: "333,295,975", artis: "241.39" },
  { sembol: "RALYH", islemHacmi: "1,163,232,525", ortHacim: "343,901,680", artis: "238.25" },
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

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

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

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

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
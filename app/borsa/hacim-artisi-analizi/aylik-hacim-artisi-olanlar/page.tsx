import Link from "next/link";

const veriler = [
  { sembol: "OZATD", islemHacmi: "3,345,405,870", ortHacim: "489,616,716", artis: "583.27" },
  { sembol: "GWIND", islemHacmi: "2,329,923,675", ortHacim: "546,220,192", artis: "326.55" },
  { sembol: "PASEU", islemHacmi: "15,019,378,464", ortHacim: "3,529,721,893", artis: "325.51" },
  { sembol: "CELHA", islemHacmi: "318,549,532", ortHacim: "77,386,118", artis: "311.64" },
  { sembol: "RODRG", islemHacmi: "49,653,841", ortHacim: "12,598,820", artis: "294.12" },
  { sembol: "BESLR", islemHacmi: "264,816,764", ortHacim: "67,683,768", artis: "291.26" },
  { sembol: "KRGYO", islemHacmi: "127,737,404", ortHacim: "33,216,453", artis: "284.56" },
  { sembol: "ALGYO", islemHacmi: "1,461,429,974", ortHacim: "384,784,116", artis: "279.81" },
  { sembol: "SUMAS", islemHacmi: "6,304,783", ortHacim: "1,731,605", artis: "264.10" },
  { sembol: "HRKET", islemHacmi: "255,750,105", ortHacim: "72,863,185", artis: "251.00" },
  { sembol: "BEYAZ", islemHacmi: "229,419,903", ortHacim: "65,521,773", artis: "250.14" },
  { sembol: "ESCOM", islemHacmi: "1,318,601,583", ortHacim: "377,479,605", artis: "249.32" },
  { sembol: "GLRYH", islemHacmi: "178,899,206", ortHacim: "51,789,178", artis: "245.44" },
  { sembol: "GSDHO", islemHacmi: "178,266,092", ortHacim: "52,876,561", artis: "237.14" },
  { sembol: "AHSGY", islemHacmi: "227,431,936", ortHacim: "68,676,652", artis: "231.16" },
  { sembol: "MPARK", islemHacmi: "951,280,899", ortHacim: "298,568,472", artis: "218.61" },
  { sembol: "SANKO", islemHacmi: "68,429,244", ortHacim: "21,848,525", artis: "213.20" },
  { sembol: "SEYKM", islemHacmi: "45,076,343", ortHacim: "14,574,767", artis: "209.28" },
  { sembol: "AGYO", islemHacmi: "19,148,343", ortHacim: "6,201,394", artis: "208.77" },
  { sembol: "HOROZ", islemHacmi: "1,218,861,473", ortHacim: "403,063,945", artis: "202.40" },
  { sembol: "BAHKM", islemHacmi: "267,413,106", ortHacim: "89,472,665", artis: "198.88" },
  { sembol: "PCILT", islemHacmi: "173,998,874", ortHacim: "60,155,244", artis: "189.25" },
  { sembol: "EDIP", islemHacmi: "84,552,369", ortHacim: "30,893,447", artis: "173.69" },
  { sembol: "MANAS", islemHacmi: "1,839,911,855", ortHacim: "689,465,733", artis: "166.86" },
  { sembol: "ENSRI", islemHacmi: "983,112,433", ortHacim: "368,874,186", artis: "166.52" },
  { sembol: "RTALB", islemHacmi: "260,427,477", ortHacim: "100,172,492", artis: "159.98" },
  { sembol: "HURGZ", islemHacmi: "384,652,961", ortHacim: "150,758,299", artis: "155.15" },
  { sembol: "ISDMR", islemHacmi: "611,035,438", ortHacim: "244,388,971", artis: "150.03" },
  { sembol: "EKOS", islemHacmi: "322,469,763", ortHacim: "133,391,862", artis: "141.75" },
  { sembol: "KRVGD", islemHacmi: "74,084,786", ortHacim: "30,718,841", artis: "141.17" },
  { sembol: "YESIL", islemHacmi: "302,158,995", ortHacim: "126,624,649", artis: "138.63" },
  { sembol: "MTRKS", islemHacmi: "62,627,501", ortHacim: "26,251,033", artis: "138.57" },
  { sembol: "KMPUR", islemHacmi: "239,874,847", ortHacim: "100,847,264", artis: "137.86" },
  { sembol: "ISKPL", islemHacmi: "1,969,783,787", ortHacim: "840,445,922", artis: "134.37" },
  { sembol: "BIGEN", islemHacmi: "1,024,342,655", ortHacim: "450,128,745", artis: "127.57" },
  { sembol: "TATEN", islemHacmi: "1,595,048,614", ortHacim: "709,869,880", artis: "124.70" },
  { sembol: "BYDNR", islemHacmi: "96,037,022", ortHacim: "43,202,915", artis: "122.29" },
  { sembol: "A1CAP", islemHacmi: "407,451,539", ortHacim: "187,606,171", artis: "117.18" },
  { sembol: "EUPWR", islemHacmi: "1,997,198,746", ortHacim: "934,563,649", artis: "113.70" },
  { sembol: "DYOBY", islemHacmi: "915,732,884", ortHacim: "432,398,918", artis: "111.78" },
  { sembol: "YYAPI", islemHacmi: "27,973,697", ortHacim: "13,222,008", artis: "111.57" },
  { sembol: "AKSA", islemHacmi: "645,457,077", ortHacim: "307,906,130", artis: "109.63" },
  { sembol: "KONKA", islemHacmi: "229,805,545", ortHacim: "109,945,862", artis: "109.02" },
  { sembol: "IHEVA", islemHacmi: "12,461,285", ortHacim: "5,996,136", artis: "107.82" },
  { sembol: "OBAMS", islemHacmi: "669,622,777", ortHacim: "322,340,088", artis: "107.74" },
  { sembol: "FENER", islemHacmi: "1,254,216,729", ortHacim: "637,837,064", artis: "96.64" },
  { sembol: "GRSEL", islemHacmi: "332,956,520", ortHacim: "169,676,229", artis: "96.23" },
  { sembol: "AYDEM", islemHacmi: "215,618,704", ortHacim: "110,911,759", artis: "94.41" },
  { sembol: "BMSTL", islemHacmi: "417,250,674", ortHacim: "216,311,119", artis: "92.89" },
  { sembol: "KONTR", islemHacmi: "6,038,532,486", ortHacim: "3,226,153,979", artis: "87.17" },
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
import Link from "next/link";

const veriler = [
  { sembol: "DUNYH", islemHacmi: "1,696,861,805", ortHacim: "109,978,436", artis: "1442.90" },
  { sembol: "KRDMB", islemHacmi: "2,548,899,484", ortHacim: "236,502,927", artis: "977.78" },
  { sembol: "YEOTK", islemHacmi: "3,003,796,988", ortHacim: "425,678,853", artis: "605.65" },
  { sembol: "ULUSE", islemHacmi: "427,514,340", ortHacim: "61,332,494", artis: "597.04" },
  { sembol: "IZENR", islemHacmi: "3,424,620,218", ortHacim: "503,111,466", artis: "580.69" },
  { sembol: "MEKAG", islemHacmi: "885,331,460", ortHacim: "133,388,853", artis: "563.72" },
  { sembol: "GEDZA", islemHacmi: "247,521,555", ortHacim: "38,898,403", artis: "536.31" },
  { sembol: "BRLSM", islemHacmi: "599,276,564", ortHacim: "81,205,993", artis: "527.14" },
  { sembol: "BORSK", islemHacmi: "542,993,916", ortHacim: "87,423,156", artis: "521.11" },
  { sembol: "SMRTG", islemHacmi: "1,396,542,673", ortHacim: "234,129,545", artis: "496.48" },
  { sembol: "HRKET", islemHacmi: "691,762,974", ortHacim: "118,917,773", artis: "481.72" },
  { sembol: "PKART", islemHacmi: "307,114,109", ortHacim: "55,529,524", artis: "453.05" },
  { sembol: "BARMA", islemHacmi: "489,863,020", ortHacim: "92,760,708", artis: "428.09" },
  { sembol: "ACSEL", islemHacmi: "185,402,493", ortHacim: "36,115,333", artis: "409.13" },
  { sembol: "HUNER", islemHacmi: "445,651,620", ortHacim: "94,356,693", artis: "372.31" },
  { sembol: "ISSEN", islemHacmi: "68,481,490", ortHacim: "14,762,997", artis: "363.87" },
  { sembol: "KAREL", islemHacmi: "519,627,667", ortHacim: "115,454,015", artis: "350.07" },
  { sembol: "ALFAS", islemHacmi: "554,559,310", ortHacim: "124,417,129", artis: "345.73" },
  { sembol: "EUKYO", islemHacmi: "36,805,131", ortHacim: "8,634,317", artis: "326.27" },
  { sembol: "ORGE", islemHacmi: "379,162,591", ortHacim: "91,983,461", artis: "312.21" },
  { sembol: "ISKPL", islemHacmi: "1,401,697,171", ortHacim: "344,306,864", artis: "307.11" },
  { sembol: "TKFEN", islemHacmi: "782,677,042", ortHacim: "192,639,336", artis: "306.29" },
  { sembol: "KLSYN", islemHacmi: "206,495,936", ortHacim: "53,520,770", artis: "285.82" },
  { sembol: "MIATK", islemHacmi: "3,205,170,833", ortHacim: "896,394,956", artis: "257.56" },
  { sembol: "FADE", islemHacmi: "97,514,486", ortHacim: "27,333,769", artis: "256.73" },
  { sembol: "DMRGD", islemHacmi: "724,792,134", ortHacim: "209,036,628", artis: "246.73" },
  { sembol: "HATSN", islemHacmi: "292,411,482", ortHacim: "85,428,857", artis: "242.29" },
  { sembol: "PRZMA", islemHacmi: "52,589,800", ortHacim: "15,576,626", artis: "237.62" },
  { sembol: "CWENE", islemHacmi: "2,319,467,598", ortHacim: "744,940,203", artis: "211.36" },
  { sembol: "PGLCV", islemHacmi: "158,015,007", ortHacim: "51,748,616", artis: "205.35" },
  { sembol: "EKSUN", islemHacmi: "99,060,653", ortHacim: "32,505,657", artis: "204.75" },
  { sembol: "CELHA", islemHacmi: "190,078,178", ortHacim: "62,547,012", artis: "203.90" },
  { sembol: "ANELE", islemHacmi: "219,997,401", ortHacim: "73,140,307", artis: "200.79" },
  { sembol: "ATATP", islemHacmi: "615,345,008", ortHacim: "206,685,223", artis: "197.72" },
  { sembol: "GMTAS", islemHacmi: "306,321,634", ortHacim: "105,954,275", artis: "189.11" },
  { sembol: "BAYRK", islemHacmi: "382,184,701", ortHacim: "135,940,514", artis: "181.14" },
  { sembol: "ETYAT", islemHacmi: "26,024,503", ortHacim: "9,257,938", artis: "181.10" },
  { sembol: "KERVN", islemHacmi: "8,795,804", ortHacim: "3,332,316", artis: "163.95" },
  { sembol: "ONRYT", islemHacmi: "284,742,341", ortHacim: "110,380,117", artis: "157.97" },
  { sembol: "KFEIN", islemHacmi: "150,679,420", ortHacim: "60,233,855", artis: "150.16" },
  { sembol: "EKOS", islemHacmi: "371,389,495", ortHacim: "148,885,911", artis: "149.42" },
  { sembol: "MOGAN", islemHacmi: "392,055,973", ortHacim: "158,221,319", artis: "147.79" },
  { sembol: "AVES", islemHacmi: "6,798,541", ortHacim: "2,789,744", artis: "143.70" },
  { sembol: "SARKY", islemHacmi: "749,562,252", ortHacim: "310,993,130", artis: "141.02" },
  { sembol: "ALGYO", islemHacmi: "431,481,738", ortHacim: "179,178,055", artis: "140.81" },
  { sembol: "LINK", islemHacmi: "588,942,404", ortHacim: "246,922,110", artis: "138.51" },
  { sembol: "KORDS", islemHacmi: "169,997,853", ortHacim: "72,128,135", artis: "135.61" },
  { sembol: "HEKTS", islemHacmi: "1,768,268,172", ortHacim: "754,281,640", artis: "134.43" },
  { sembol: "GSDDE", islemHacmi: "92,559,399", ortHacim: "39,723,751", artis: "134.01" },
  { sembol: "DGATE", islemHacmi: "93,883,598", ortHacim: "40,260,687", artis: "133.19" },
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
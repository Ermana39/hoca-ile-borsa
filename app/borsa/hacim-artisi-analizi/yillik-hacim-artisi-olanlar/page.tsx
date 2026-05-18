import Link from "next/link";

const veriler = [
  { sembol: "ODINE", islemHacmi: "8,173,976,831", ortHacim: "360,506,095", artis: "2,167.36" },
  { sembol: "TGSAS", islemHacmi: "581,393,017", ortHacim: "35,001,016", artis: "1,561.07" },
  { sembol: "GUNDG", islemHacmi: "3,182,906,294", ortHacim: "240,099,692", artis: "1,225.60" },
  { sembol: "GOKNR", islemHacmi: "1,292,273,761", ortHacim: "110,121,068", artis: "1,073.50" },
  { sembol: "DUNYH", islemHacmi: "936,436,646", ortHacim: "95,145,718", artis: "884.21" },
  { sembol: "IZENR", islemHacmi: "4,291,185,545", ortHacim: "439,460,526", artis: "876.47" },
  { sembol: "YATAS", islemHacmi: "425,327,328", ortHacim: "45,782,813", artis: "829.01" },
  { sembol: "ISSEN", islemHacmi: "107,332,354", ortHacim: "11,760,533", artis: "812.65" },
  { sembol: "BARMA", islemHacmi: "697,722,711", ortHacim: "88,741,529", artis: "686.24" },
  { sembol: "EKSUN", islemHacmi: "239,245,401", ortHacim: "31,284,495", artis: "664.74" },
  { sembol: "KGYO", islemHacmi: "615,653,868", ortHacim: "82,391,834", artis: "647.23" },
  { sembol: "YEOTK", islemHacmi: "2,890,927,288", ortHacim: "388,925,501", artis: "643.31" },
  { sembol: "BRLSM", islemHacmi: "497,498,607", ortHacim: "67,501,333", artis: "637.02" },
  { sembol: "GSDHO", islemHacmi: "370,505,928", ortHacim: "50,400,104", artis: "635.13" },
  { sembol: "PRZMA", islemHacmi: "103,919,879", ortHacim: "14,787,150", artis: "602.77" },
  { sembol: "KRDMB", islemHacmi: "1,345,174,599", ortHacim: "206,021,603", artis: "552.93" },
  { sembol: "ELITE", islemHacmi: "384,782,761", ortHacim: "59,524,518", artis: "546.43" },
  { sembol: "CRDFA", islemHacmi: "318,630,614", ortHacim: "54,944,883", artis: "479.91" },
  { sembol: "FADE", islemHacmi: "146,058,650", ortHacim: "25,882,493", artis: "464.34" },
  { sembol: "ALFAS", islemHacmi: "617,398,307", ortHacim: "114,027,944", artis: "441.44" },
  { sembol: "GSDDE", islemHacmi: "203,965,048", ortHacim: "37,972,245", artis: "437.14" },
  { sembol: "GEDIK", islemHacmi: "524,121,387", ortHacim: "101,217,158", artis: "417.82" },
  { sembol: "ANELE", islemHacmi: "349,425,403", ortHacim: "68,062,999", artis: "413.39" },
  { sembol: "PNSUT", islemHacmi: "236,221,091", ortHacim: "46,327,695", artis: "409.89" },
  { sembol: "ALGYO", islemHacmi: "791,992,737", ortHacim: "160,841,614", artis: "392.41" },
  { sembol: "DYOBY", islemHacmi: "433,896,500", ortHacim: "88,306,704", artis: "391.35" },
  { sembol: "HATSN", islemHacmi: "402,241,710", ortHacim: "82,718,768", artis: "386.28" },
  { sembol: "MOGAN", islemHacmi: "734,295,279", ortHacim: "154,602,771", artis: "374.96" },
  { sembol: "EGSER", islemHacmi: "80,546,425", ortHacim: "17,136,877", artis: "370.02" },
  { sembol: "ANGEN", islemHacmi: "245,656,532", ortHacim: "55,041,872", artis: "346.31" },
  { sembol: "SMRTG", islemHacmi: "951,651,805", ortHacim: "214,415,618", artis: "343.84" },
  { sembol: "KORDS", islemHacmi: "307,974,974", ortHacim: "70,016,976", artis: "339.86" },
  { sembol: "GARFA", islemHacmi: "160,939,829", ortHacim: "37,308,331", artis: "331.38" },
  { sembol: "KIMMR", islemHacmi: "155,959,992", ortHacim: "37,080,127", artis: "320.60" },
  { sembol: "OZRDN", islemHacmi: "51,463,324", ortHacim: "12,693,285", artis: "305.44" },
  { sembol: "ACSEL", islemHacmi: "134,382,809", ortHacim: "33,435,008", artis: "301.92" },
  { sembol: "TATEN", islemHacmi: "1,416,739,306", ortHacim: "358,850,102", artis: "294.80" },
  { sembol: "RTALB", islemHacmi: "686,354,110", ortHacim: "178,015,169", artis: "285.56" },
  { sembol: "ONRYT", islemHacmi: "413,347,670", ortHacim: "108,963,033", artis: "279.35" },
  { sembol: "PAGYO", islemHacmi: "74,059,814", ortHacim: "19,588,242", artis: "278.08" },
  { sembol: "CEMZY", islemHacmi: "805,896,069", ortHacim: "215,504,495", artis: "273.96" },
  { sembol: "INDES", islemHacmi: "227,068,237", ortHacim: "61,852,514", artis: "267.11" },
  { sembol: "EUPWR", islemHacmi: "1,508,850,354", ortHacim: "411,434,797", artis: "266.73" },
  { sembol: "CRFSA", islemHacmi: "347,584,324", ortHacim: "95,550,095", artis: "263.77" },
  { sembol: "PKART", islemHacmi: "195,454,981", ortHacim: "53,833,537", artis: "263.07" },
  { sembol: "ARMGD", islemHacmi: "498,601,023", ortHacim: "138,641,017", artis: "259.63" },
  { sembol: "KFEIN", islemHacmi: "199,794,403", ortHacim: "56,034,607", artis: "256.56" },
  { sembol: "HUNER", islemHacmi: "317,062,144", ortHacim: "90,468,924", artis: "250.47" },
  { sembol: "DGATE", islemHacmi: "136,766,078", ortHacim: "39,479,877", artis: "246.42" },
  { sembol: "TRGYO", islemHacmi: "453,866,207", ortHacim: "131,383,572", artis: "245.45" },
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
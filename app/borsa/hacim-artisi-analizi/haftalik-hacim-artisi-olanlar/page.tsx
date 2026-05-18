import Link from "next/link";

const veriler = [
  { sembol: "GUNDG", islemHacmi: "3,182,906,294", ortHacim: "782,280,453", artis: "306.88" },
  { sembol: "ARMGD", islemHacmi: "498,601,023", ortHacim: "125,644,635", artis: "296.83" },
  { sembol: "ODINE", islemHacmi: "8,173,976,831", ortHacim: "2,099,693,898", artis: "289.29" },
  { sembol: "TGSAS", islemHacmi: "581,393,017", ortHacim: "176,961,314", artis: "228.54" },
  { sembol: "YATAS", islemHacmi: "425,327,328", ortHacim: "143,467,167", artis: "196.46" },
  { sembol: "GOKNR", islemHacmi: "1,292,273,761", ortHacim: "475,809,152", artis: "171.59" },
  { sembol: "FRMPL", islemHacmi: "629,436,858", ortHacim: "238,492,047", artis: "163.92" },
  { sembol: "GEDIK", islemHacmi: "524,121,387", ortHacim: "198,986,490", artis: "163.40" },
  { sembol: "FADE", islemHacmi: "146,058,650", ortHacim: "57,429,697", artis: "154.33" },
  { sembol: "GEDZA", islemHacmi: "117,284,616", ortHacim: "46,141,218", artis: "154.19" },
  { sembol: "KFEIN", islemHacmi: "199,794,403", ortHacim: "80,327,350", artis: "148.73" },
  { sembol: "BARMA", islemHacmi: "697,722,711", ortHacim: "282,463,336", artis: "147.01" },
  { sembol: "DUNYH", islemHacmi: "936,436,646", ortHacim: "380,543,102", artis: "146.08" },
  { sembol: "MARKA", islemHacmi: "210,674,733", ortHacim: "86,054,510", artis: "144.82" },
  { sembol: "KIMMR", islemHacmi: "155,959,992", ortHacim: "64,007,739", artis: "143.66" },
  { sembol: "CRFSA", islemHacmi: "347,584,324", ortHacim: "148,151,765", artis: "134.61" },
  { sembol: "BRMEN", islemHacmi: "106,058,168", ortHacim: "45,635,533", artis: "132.40" },
  { sembol: "ISSEN", islemHacmi: "107,332,354", ortHacim: "46,846,589", artis: "129.11" },
  { sembol: "OZRDN", islemHacmi: "51,463,324", ortHacim: "22,890,506", artis: "124.82" },
  { sembol: "ONRYT", islemHacmi: "413,347,670", ortHacim: "187,197,216", artis: "120.81" },
  { sembol: "SMART", islemHacmi: "258,754,893", ortHacim: "119,537,192", artis: "116.46" },
  { sembol: "BAYRK", islemHacmi: "208,352,770", ortHacim: "98,502,614", artis: "111.52" },
  { sembol: "IZENR", islemHacmi: "4,291,185,545", ortHacim: "2,160,674,296", artis: "98.60" },
  { sembol: "BASCM", islemHacmi: "2,153,606", ortHacim: "1,140,412", artis: "88.84" },
  { sembol: "ANHYT", islemHacmi: "228,915,760", ortHacim: "122,152,950", artis: "87.40" },
  { sembol: "EKSUN", islemHacmi: "239,245,401", ortHacim: "128,005,258", artis: "86.90" },
  { sembol: "PAGYO", islemHacmi: "74,059,814", ortHacim: "40,176,962", artis: "84.33" },
  { sembol: "HKTM", islemHacmi: "236,918,124", ortHacim: "128,541,106", artis: "84.31" },
  { sembol: "FRIGO", islemHacmi: "309,503,177", ortHacim: "169,847,901", artis: "82.22" },
  { sembol: "BLUME", islemHacmi: "230,562,487", ortHacim: "126,668,845", artis: "82.02" },
  { sembol: "ISBIR", islemHacmi: "4,967,441", ortHacim: "2,734,738", artis: "81.64" },
  { sembol: "DESPC", islemHacmi: "58,702,153", ortHacim: "32,373,593", artis: "81.33" },
  { sembol: "EGSER", islemHacmi: "80,546,425", ortHacim: "44,681,798", artis: "80.27" },
  { sembol: "ARTMS", islemHacmi: "131,320,706", ortHacim: "72,883,783", artis: "80.18" },
  { sembol: "SRVGY", islemHacmi: "257,407,335", ortHacim: "144,658,548", artis: "77.94" },
  { sembol: "BIENY", islemHacmi: "140,815,368", ortHacim: "79,725,526", artis: "76.63" },
  { sembol: "MOGAN", islemHacmi: "734,295,279", ortHacim: "415,873,049", artis: "76.57" },
  { sembol: "GSDHO", islemHacmi: "370,505,928", ortHacim: "215,384,742", artis: "72.02" },
  { sembol: "OBASE", islemHacmi: "44,805,457", ortHacim: "26,270,879", artis: "70.57" },
  { sembol: "TDGYO", islemHacmi: "38,072,048", ortHacim: "22,621,910", artis: "68.30" },
  { sembol: "TRGYO", islemHacmi: "453,866,207", ortHacim: "272,542,980", artis: "66.53" },
  { sembol: "METRO", islemHacmi: "189,984,766", ortHacim: "114,571,405", artis: "65.82" },
  { sembol: "YAYLA", islemHacmi: "138,189,337", ortHacim: "84,009,751", artis: "64.49" },
  { sembol: "MARBL", islemHacmi: "74,902,195", ortHacim: "45,953,588", artis: "63.00" },
  { sembol: "FENER", islemHacmi: "1,367,661,041", ortHacim: "841,153,650", artis: "62.59" },
  { sembol: "ICBCT", islemHacmi: "111,301,764", ortHacim: "69,439,918", artis: "60.28" },
  { sembol: "SERNT", islemHacmi: "341,430,478", ortHacim: "214,816,513", artis: "58.94" },
  { sembol: "DYOBY", islemHacmi: "433,896,500", ortHacim: "274,204,057", artis: "58.24" },
  { sembol: "ANSGR", islemHacmi: "219,343,516", ortHacim: "139,006,891", artis: "57.79" },
  { sembol: "DCTTR", islemHacmi: "381,834,768", ortHacim: "242,861,098", artis: "57.22" },
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
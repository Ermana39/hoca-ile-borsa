import Link from "next/link";

const veriler = [
  { sembol: "PASEU", islemHacmi: "10,014,074,813", ortHacim: "3,328,985,874", artis: "200.81" },
  { sembol: "TURGG", islemHacmi: "387,642,615", ortHacim: "161,278,038", artis: "140.36" },
  { sembol: "EDATA", islemHacmi: "267,666,867", ortHacim: "118,855,743", artis: "125.20" },
  { sembol: "SODSN", islemHacmi: "3,882,104", ortHacim: "1,725,651", artis: "124.96" },
  { sembol: "EUREN", islemHacmi: "2,259,527,298", ortHacim: "1,037,545,157", artis: "117.78" },
  { sembol: "ARCLK", islemHacmi: "879,059,135", ortHacim: "427,467,671", artis: "105.64" },
  { sembol: "SEGMN", islemHacmi: "515,040,212", ortHacim: "250,871,234", artis: "105.30" },
  { sembol: "PAGYO", islemHacmi: "37,439,309", ortHacim: "18,253,795", artis: "105.10" },
  { sembol: "DESPC", islemHacmi: "111,556,994", ortHacim: "55,300,875", artis: "101.73" },
  { sembol: "PKART", islemHacmi: "499,042,495", ortHacim: "248,243,174", artis: "101.03" },
  { sembol: "DGNMO", islemHacmi: "659,034,581", ortHacim: "328,905,835", artis: "100.37" },
  { sembol: "KUVVA", islemHacmi: "30,200,123", ortHacim: "15,231,107", artis: "98.28" },
  { sembol: "AVGYO", islemHacmi: "88,629,324", ortHacim: "44,977,457", artis: "97.05" },
  { sembol: "SEKUR", islemHacmi: "51,940,131", ortHacim: "26,698,105", artis: "94.55" },
  { sembol: "ESCAR", islemHacmi: "724,119,522", ortHacim: "376,783,675", artis: "92.18" },
  { sembol: "IHAAS", islemHacmi: "281,306,878", ortHacim: "147,537,482", artis: "90.67" },
  { sembol: "ECILC", islemHacmi: "1,554,963,823", ortHacim: "852,803,295", artis: "82.34" },
  { sembol: "CONSE", islemHacmi: "140,318,050", ortHacim: "77,553,889", artis: "80.93" },
  { sembol: "KAREL", islemHacmi: "367,816,209", ortHacim: "203,423,131", artis: "80.81" },
  { sembol: "VERUS", islemHacmi: "130,543,625", ortHacim: "72,323,125", artis: "80.50" },
  { sembol: "DUNYH", islemHacmi: "351,225,624", ortHacim: "196,997,526", artis: "78.29" },
  { sembol: "MAKTK", islemHacmi: "101,726,469", ortHacim: "57,078,055", artis: "78.22" },
  { sembol: "PSGYO", islemHacmi: "2,061,710,767", ortHacim: "1,166,873,075", artis: "76.69" },
  { sembol: "ORGE", islemHacmi: "290,081,751", ortHacim: "165,673,931", artis: "75.09" },
  { sembol: "YGGYO", islemHacmi: "131,530,752", ortHacim: "75,133,240", artis: "75.06" },
  { sembol: "YYAPI", islemHacmi: "18,155,251", ortHacim: "10,394,756", artis: "74.66" },
  { sembol: "OZSUB", islemHacmi: "88,036,427", ortHacim: "52,519,737", artis: "67.63" },
  { sembol: "PLTUR", islemHacmi: "352,086,902", ortHacim: "211,133,511", artis: "66.76" },
  { sembol: "ARDYZ", islemHacmi: "373,628,451", ortHacim: "224,440,539", artis: "66.47" },
  { sembol: "SANKO", islemHacmi: "29,118,791", ortHacim: "17,600,724", artis: "65.44" },
  { sembol: "TOASO", islemHacmi: "1,806,068,388", ortHacim: "1,108,798,281", artis: "62.89" },
  { sembol: "BORLS", islemHacmi: "1,448,122,216", ortHacim: "909,373,192", artis: "59.24" },
  { sembol: "AKENR", islemHacmi: "240,128,699", ortHacim: "151,043,028", artis: "58.98" },
  { sembol: "HRKET", islemHacmi: "144,666,919", ortHacim: "92,277,247", artis: "56.77" },
  { sembol: "LIDYE", islemHacmi: "61,211,380", ortHacim: "39,334,778", artis: "55.62" },
  { sembol: "MEYSU", islemHacmi: "1,649,244,391", ortHacim: "1,071,247,140", artis: "53.96" },
  { sembol: "VKFYO", islemHacmi: "33,739,022", ortHacim: "21,940,859", artis: "53.77" },
  { sembol: "HOROZ", islemHacmi: "777,144,029", ortHacim: "505,752,464", artis: "53.66" },
  { sembol: "AAGYO", islemHacmi: "2,149,277,752", ortHacim: "1,404,069,649", artis: "53.07" },
  { sembol: "KRONT", islemHacmi: "202,358,054", ortHacim: "133,492,204", artis: "51.59" },
  { sembol: "DITAS", islemHacmi: "149,019,431", ortHacim: "98,417,669", artis: "51.42" },
  { sembol: "ATEKS", islemHacmi: "5,554,076", ortHacim: "3,673,121", artis: "51.21" },
  { sembol: "CEOEM", islemHacmi: "118,255,118", ortHacim: "78,633,357", artis: "50.39" },
  { sembol: "INVES", islemHacmi: "145,483,259", ortHacim: "96,744,391", artis: "50.38" },
  { sembol: "SAYAS", islemHacmi: "78,027,486", ortHacim: "51,957,945", artis: "50.17" },
  { sembol: "HURGZ", islemHacmi: "321,151,367", ortHacim: "214,386,364", artis: "49.80" },
  { sembol: "SISE", islemHacmi: "3,188,893,146", ortHacim: "2,134,904,964", artis: "49.37" },
  { sembol: "RYSAS", islemHacmi: "197,239,414", ortHacim: "133,210,668", artis: "48.07" },
  { sembol: "DOFRB", islemHacmi: "4,436,115,472", ortHacim: "3,008,505,202", artis: "47.45" },
  { sembol: "AGYO", islemHacmi: "8,631,937", ortHacim: "5,876,867", artis: "46.88" },
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
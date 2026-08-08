import Link from "@/components/NoPrefetchLink";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "ISBIR", islemHacmi: "6,117,430", ortHacim: "1,762,260", artis: "247.14" },
  { sembol: "FADE", islemHacmi: "331,374,492", ortHacim: "98,287,475", artis: "237.15" },
  { sembol: "CMBTN", islemHacmi: "185,153,083", ortHacim: "57,353,067", artis: "222.93" },
  { sembol: "DCTTR", islemHacmi: "935,141,480", ortHacim: "292,397,748", artis: "219.82" },
  { sembol: "NETCD", islemHacmi: "2,923,142,217", ortHacim: "963,758,477", artis: "203.31" },
  { sembol: "YIGIT", islemHacmi: "212,464,669", ortHacim: "71,426,296", artis: "197.46" },
  { sembol: "DESA", islemHacmi: "92,715,206", ortHacim: "31,820,436", artis: "191.37" },
  { sembol: "BRKVY", islemHacmi: "74,542,533", ortHacim: "25,882,870", artis: "188.00" },
  { sembol: "PINSU", islemHacmi: "110,169,107", ortHacim: "38,541,618", artis: "185.84" },
  { sembol: "ALVES", islemHacmi: "862,693,605", ortHacim: "307,653,150", artis: "180.41" },
  { sembol: "MCARD", islemHacmi: "1,592,471,144", ortHacim: "577,606,607", artis: "175.70" },
  { sembol: "BNTAS", islemHacmi: "91,678,049", ortHacim: "33,714,879", artis: "171.92" },
  { sembol: "ENDAE", islemHacmi: "129,938,107", ortHacim: "49,682,655", artis: "161.54" },
  { sembol: "KENT", islemHacmi: "8,349,600", ortHacim: "3,393,809", artis: "146.02" },
  { sembol: "ARFYE", islemHacmi: "518,871,666", ortHacim: "211,912,523", artis: "144.85" },
  { sembol: "FRIGO", islemHacmi: "238,401,852", ortHacim: "97,682,817", artis: "144.06" },
  { sembol: "YAPRK", islemHacmi: "287,669,400", ortHacim: "122,491,338", artis: "134.85" },
  { sembol: "GEDIK", islemHacmi: "126,814,379", ortHacim: "54,447,672", artis: "132.91" },
  { sembol: "ADEL", islemHacmi: "149,318,118", ortHacim: "65,301,028", artis: "128.66" },
  { sembol: "BARMA", islemHacmi: "5,064,966", ortHacim: "2,249,967", artis: "125.11" },
  { sembol: "BORSK", islemHacmi: "65,840,848", ortHacim: "29,338,888", artis: "124.41" },
  { sembol: "RODRG", islemHacmi: "12,998,025", ortHacim: "5,839,199", artis: "122.60" },
  { sembol: "LILAK", islemHacmi: "198,060,597", ortHacim: "89,446,248", artis: "121.43" },
  { sembol: "SARIKY", islemHacmi: "390,500,487", ortHacim: "181,940,968", artis: "114.63" },
  { sembol: "GUNDG", islemHacmi: "2,966,557,844", ortHacim: "1,450,667,023", artis: "104.50" },
  { sembol: "KIMMR", islemHacmi: "17,320,567", ortHacim: "8,548,520", artis: "102.61" },
  { sembol: "ISDMR", islemHacmi: "185,324,020", ortHacim: "91,496,336", artis: "102.55" },
  { sembol: "RNPOL", islemHacmi: "14,596,991", ortHacim: "7,234,921", artis: "101.76" },
  { sembol: "EUYO", islemHacmi: "27,907,110", ortHacim: "13,892,642", artis: "100.88" },
  { sembol: "EBEBK", islemHacmi: "174,464,082", ortHacim: "87,422,333", artis: "99.56" },
  { sembol: "HUNER", islemHacmi: "128,738,196", ortHacim: "64,833,560", artis: "98.57" },
  { sembol: "CRDFA", islemHacmi: "220,906,756", ortHacim: "112,245,385", artis: "96.81" },
  { sembol: "TATEN", islemHacmi: "382,411,744", ortHacim: "197,964,092", artis: "93.17" },
  { sembol: "KONYA", islemHacmi: "62,463,505", ortHacim: "32,399,168", artis: "92.79" },
  { sembol: "MRSHL", islemHacmi: "151,347,646", ortHacim: "78,977,794", artis: "91.63" },
  { sembol: "EREGL", islemHacmi: "12,106,785,683", ortHacim: "6,325,341,804", artis: "91.40" },
  { sembol: "PSGYO", islemHacmi: "2,070,027,236", ortHacim: "1,086,147,707", artis: "90.58" },
  { sembol: "AVGYO", islemHacmi: "44,994,022", ortHacim: "23,913,862", artis: "88.15" },
  { sembol: "BETAE", islemHacmi: "5,699,080,996", ortHacim: "3,044,548,838", artis: "87.19" },
  { sembol: "YONGA", islemHacmi: "1,036,077", ortHacim: "555,748", artis: "86.43" },
  { sembol: "HRKET", islemHacmi: "361,970,867", ortHacim: "194,407,941", artis: "86.19" },
  { sembol: "GOODY", islemHacmi: "46,051,353", ortHacim: "25,067,908", artis: "83.71" },
  { sembol: "MSGYO", islemHacmi: "29,314,652", ortHacim: "15,993,325", artis: "83.29" },
  { sembol: "INTEM", islemHacmi: "18,333,775", ortHacim: "10,079,439", artis: "81.89" },
  { sembol: "DAPGM", islemHacmi: "1,596,553,324", ortHacim: "883,186,296", artis: "80.77" },
  { sembol: "FORTE", islemHacmi: "363,950,366", ortHacim: "203,202,044", artis: "79.11" },
  { sembol: "PAPIL", islemHacmi: "124,382,876", ortHacim: "70,031,021", artis: "77.61" },
  { sembol: "A1YEN", islemHacmi: "68,908,325", ortHacim: "39,299,336", artis: "75.34" },
  { sembol: "DYOBY", islemHacmi: "23,927,219", ortHacim: "13,665,327", artis: "75.09" },
  { sembol: "CWENE", islemHacmi: "12,159,626,736", ortHacim: "6,945,393,924", artis: "75.07" },
];

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
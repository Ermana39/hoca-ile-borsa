import Link from "next/link";

const veriler = [
  { sembol: "MEKAG", islemHacmi: "885,331,460", ortHacim: "308,972,175", artis: "186.54" },
  { sembol: "HRKET", islemHacmi: "691,762,974", ortHacim: "275,256,443", artis: "151.32" },
  { sembol: "BORSK", islemHacmi: "542,995,316", ortHacim: "217,465,483", artis: "149.69" },
  { sembol: "DUNYH", islemHacmi: "1,696,861,805", ortHacim: "706,995,359", artis: "140.01" },
  { sembol: "SKYMD", islemHacmi: "193,216,668", ortHacim: "91,920,508", artis: "110.20" },
  { sembol: "INTIP", islemHacmi: "182,028,672", ortHacim: "86,919,286", artis: "109.42" },
  { sembol: "PKART", islemHacmi: "307,114,109", ortHacim: "147,647,720", artis: "108.00" },
  { sembol: "AHSGY", islemHacmi: "143,150,877", ortHacim: "70,577,334", artis: "102.83" },
  { sembol: "EGPRO", islemHacmi: "77,476,680", ortHacim: "40,066,885", artis: "93.20" },
  { sembol: "GUNDG", islemHacmi: "334,063,232", ortHacim: "174,995,163", artis: "90.90" },
  { sembol: "IDGYO", islemHacmi: "23,892,766", ortHacim: "12,655,923", artis: "88.79" },
  { sembol: "VAKFN", islemHacmi: "556,167,493", ortHacim: "295,835,972", artis: "88.00" },
  { sembol: "BIENY", islemHacmi: "176,635,411", ortHacim: "100,363,750", artis: "76.00" },
  { sembol: "BARMA", islemHacmi: "489,863,020", ortHacim: "283,394,910", artis: "72.86" },
  { sembol: "KLSYN", islemHacmi: "206,495,936", ortHacim: "120,016,226", artis: "72.06" },
  { sembol: "FLAP", islemHacmi: "24,761,339", ortHacim: "14,748,905", artis: "67.89" },
  { sembol: "SARKY", islemHacmi: "749,562,252", ortHacim: "448,250,754", artis: "67.22" },
  { sembol: "ATEKS", islemHacmi: "3,084,043", ortHacim: "1,847,717", artis: "66.97" },
  { sembol: "CWENE", islemHacmi: "2,319,467,598", ortHacim: "1,394,692,402", artis: "66.31" },
  { sembol: "KLNMA", islemHacmi: "4,769,801", ortHacim: "2,900,044", artis: "64.47" },
  { sembol: "FUHOL", islemHacmi: "13,208,634", ortHacim: "8,236,587", artis: "60.37" },
  { sembol: "TLMAN", islemHacmi: "44,730,831", ortHacim: "28,844,347", artis: "55.08" },
  { sembol: "AZTEK", islemHacmi: "142,934,397", ortHacim: "94,234,867", artis: "51.68" },
  { sembol: "LINK", islemHacmi: "588,942,404", ortHacim: "397,027,176", artis: "48.34" },
  { sembol: "HUNER", islemHacmi: "445,651,620", ortHacim: "302,044,150", artis: "47.55" },
  { sembol: "BLUME", islemHacmi: "194,979,850", ortHacim: "133,334,229", artis: "46.23" },
  { sembol: "ETYAT", islemHacmi: "26,024,503", ortHacim: "17,828,891", artis: "45.97" },
  { sembol: "EUKYO", islemHacmi: "36,805,131", ortHacim: "25,510,856", artis: "44.27" },
  { sembol: "KAREL", islemHacmi: "519,627,667", ortHacim: "360,651,704", artis: "44.08" },
  { sembol: "IZDGY", islemHacmi: "307,125,244", ortHacim: "215,063,686", artis: "42.81" },
  { sembol: "CMENT", islemHacmi: "3,867,518", ortHacim: "2,723,817", artis: "41.99" },
  { sembol: "KNFRT", islemHacmi: "82,233,878", ortHacim: "58,275,598", artis: "41.11" },
  { sembol: "BAYRK", islemHacmi: "382,184,701", ortHacim: "272,751,666", artis: "40.12" },
  { sembol: "CASA", islemHacmi: "4,007,571", ortHacim: "2,872,599", artis: "39.51" },
  { sembol: "BERA", islemHacmi: "235,422,811", ortHacim: "171,414,905", artis: "37.34" },
  { sembol: "ZRGYO", islemHacmi: "36,137,286", ortHacim: "26,409,492", artis: "36.83" },
  { sembol: "PRKAB", islemHacmi: "149,420,998", ortHacim: "109,339,651", artis: "36.66" },
  { sembol: "DOFRB", islemHacmi: "1,713,594,696", ortHacim: "1,267,375,960", artis: "35.21" },
  { sembol: "IZFAS", islemHacmi: "450,168,659", ortHacim: "334,399,991", artis: "34.62" },
  { sembol: "KAPLM", islemHacmi: "119,637,605", ortHacim: "89,279,189", artis: "34.00" },
  { sembol: "KOCMT", islemHacmi: "106,050,623", ortHacim: "79,175,237", artis: "33.94" },
  { sembol: "BURCE", islemHacmi: "227,268,563", ortHacim: "170,131,077", artis: "33.58" },
  { sembol: "AGYO", islemHacmi: "541,958,859", ortHacim: "408,506,114", artis: "32.67" },
  { sembol: "LIDFA", islemHacmi: "51,688,239", ortHacim: "39,406,756", artis: "31.17" },
  { sembol: "KRDMB", islemHacmi: "2,548,899,484", ortHacim: "1,947,497,248", artis: "30.89" },
  { sembol: "KRONT", islemHacmi: "67,510,676", ortHacim: "51,725,474", artis: "30.52" },
  { sembol: "KCAER", islemHacmi: "358,098,013", ortHacim: "275,254,937", artis: "30.10" },
  { sembol: "EREGL", islemHacmi: "7,497,846,350", ortHacim: "5,848,480,811", artis: "28.20" },
  { sembol: "SEYKM", islemHacmi: "24,699,341", ortHacim: "19,271,186", artis: "28.16" },
  { sembol: "ORMA", islemHacmi: "4,398,177", ortHacim: "3,440,014", artis: "27.85" },
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
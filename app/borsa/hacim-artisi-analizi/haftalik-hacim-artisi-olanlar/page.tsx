import Link from "next/link";

const veriler = [
  { sembol: "GATEG", islemHacmi: "177,668,782", ortHacim: "41,694,394", artis: "326.12" },
  { sembol: "ETILR", islemHacmi: "249,192,214", ortHacim: "77,380,998", artis: "222.03" },
  { sembol: "CMBTN", islemHacmi: "358,247,043", ortHacim: "118,378,113", artis: "202.63" },
  { sembol: "ARZUM", islemHacmi: "955,513,001", ortHacim: "320,092,885", artis: "198.51" },
  { sembol: "DURDO", islemHacmi: "112,154,759", ortHacim: "38,756,656", artis: "189.38" },
  { sembol: "MERCN", islemHacmi: "794,485,044", ortHacim: "274,903,838", artis: "189.00" },
  { sembol: "GZNMI", islemHacmi: "1,166,318,409", ortHacim: "418,421,022", artis: "178.74" },
  { sembol: "BRMEN", islemHacmi: "11,399,995", ortHacim: "4,190,718", artis: "172.03" },
  { sembol: "PRZMA", islemHacmi: "95,383,409", ortHacim: "36,248,501", artis: "163.14" },
  { sembol: "EKSUN", islemHacmi: "77,026,977", ortHacim: "30,288,440", artis: "154.31" },
  { sembol: "IZENR", islemHacmi: "2,534,636,521", ortHacim: "1,002,706,528", artis: "152.78" },
  { sembol: "GIPTA", islemHacmi: "1,482,393,068", ortHacim: "597,408,266", artis: "148.14" },
  { sembol: "GRNYO", islemHacmi: "32,658,435", ortHacim: "13,288,837", artis: "145.76" },
  { sembol: "CLEBI", islemHacmi: "617,765,697", ortHacim: "253,770,128", artis: "143.44" },
  { sembol: "OZYSR", islemHacmi: "128,777,912", ortHacim: "53,766,729", artis: "139.51" },
  { sembol: "SDTTR", islemHacmi: "1,574,461,065", ortHacim: "672,652,472", artis: "134.07" },
  { sembol: "IZFAS", islemHacmi: "1,765,753,752", ortHacim: "762,839,677", artis: "131.47" },
  { sembol: "DOHOL", islemHacmi: "582,470,536", ortHacim: "252,911,397", artis: "130.31" },
  { sembol: "EUHOL", islemHacmi: "35,716,439", ortHacim: "15,720,724", artis: "127.15" },
  { sembol: "VAKBN", islemHacmi: "3,316,274,888", ortHacim: "1,481,168,404", artis: "123.90" },
  { sembol: "EGGEN", islemHacmi: "653,471,348", ortHacim: "292,527,839", artis: "123.39" },
  { sembol: "ZGYO", islemHacmi: "1,329,323,708", ortHacim: "610,939,267", artis: "117.59" },
  { sembol: "OYAKC", islemHacmi: "1,024,697,836", ortHacim: "480,192,644", artis: "113.39" },
  { sembol: "TRILC", islemHacmi: "327,137,628", ortHacim: "154,167,314", artis: "112.20" },
  { sembol: "ACSEL", islemHacmi: "90,381,959", ortHacim: "42,698,272", artis: "111.68" },
  { sembol: "REEDR", islemHacmi: "1,175,809,835", ortHacim: "556,098,230", artis: "111.44" },
  { sembol: "KONYA", islemHacmi: "312,449,870", ortHacim: "151,826,465", artis: "105.79" },
  { sembol: "HATEK", islemHacmi: "198,523,470", ortHacim: "96,696,241", artis: "105.31" },
  { sembol: "BALSU", islemHacmi: "301,141,039", ortHacim: "147,663,678", artis: "103.94" },
  { sembol: "LIDYE", islemHacmi: "75,775,288", ortHacim: "37,219,550", artis: "103.59" },
  { sembol: "ISSEN", islemHacmi: "29,926,875", ortHacim: "14,733,022", artis: "103.13" },
  { sembol: "MRSHL", islemHacmi: "190,757,316", ortHacim: "94,701,612", artis: "101.43" },
  { sembol: "AKFYE", islemHacmi: "419,481,408", ortHacim: "208,533,230", artis: "101.16" },
  { sembol: "SKYLP", islemHacmi: "106,570,627", ortHacim: "53,495,244", artis: "99.22" },
  { sembol: "ALKA", islemHacmi: "144,012,259", ortHacim: "72,514,363", artis: "98.60" },
  { sembol: "MARMR", islemHacmi: "1,598,999,790", ortHacim: "805,371,902", artis: "98.54" },
  { sembol: "POLTK", islemHacmi: "250,623,080", ortHacim: "126,784,217", artis: "97.68" },
  { sembol: "SUWEN", islemHacmi: "150,180,949", ortHacim: "76,074,369", artis: "97.41" },
  { sembol: "CEMZY", islemHacmi: "681,036,622", ortHacim: "346,555,256", artis: "96.52" },
  { sembol: "DOCO", islemHacmi: "160,040,440", ortHacim: "81,632,475", artis: "96.05" },
  { sembol: "VERUS", islemHacmi: "102,026,738", ortHacim: "52,502,272", artis: "94.33" },
  { sembol: "GLCVY", islemHacmi: "272,817,877", ortHacim: "140,799,105", artis: "93.76" },
  { sembol: "RAYSG", islemHacmi: "168,981,528", ortHacim: "87,500,306", artis: "93.12" },
  { sembol: "SILVR", islemHacmi: "17,645,847", ortHacim: "9,192,862", artis: "91.95" },
  { sembol: "TERA", islemHacmi: "3,054,832,270", ortHacim: "1,592,678,239", artis: "91.80" },
  { sembol: "UCAYM", islemHacmi: "1,181,525,415", ortHacim: "620,656,017", artis: "90.37" },
  { sembol: "BUCIM", islemHacmi: "162,941,598", ortHacim: "86,062,511", artis: "89.33" },
  { sembol: "KONTR", islemHacmi: "6,194,283,169", ortHacim: "3,277,612,228", artis: "88.99" },
  { sembol: "BRLSM", islemHacmi: "120,716,864", ortHacim: "64,996,030", artis: "85.73" },
  { sembol: "ICBCT", islemHacmi: "68,891,440", ortHacim: "37,416,855", artis: "84.12" },
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
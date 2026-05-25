import Link from "next/link";

const veriler = [
  { sembol: "DUNYH", islemHacmi: "1,696,861,805", ortHacim: "288,694,324", artis: "487.77" },
  { sembol: "MEKAG", islemHacmi: "853,331,460", ortHacim: "160,002,329", artis: "433.32" },
  { sembol: "HRKET", islemHacmi: "691,762,974", ortHacim: "180,991,345", artis: "282.21" },
  { sembol: "BORSK", islemHacmi: "542,995,316", ortHacim: "173,288,774", artis: "213.35" },
  { sembol: "BAYRK", islemHacmi: "382,184,701", ortHacim: "122,199,594", artis: "212.75" },
  { sembol: "EUKYO", islemHacmi: "36,805,131", ortHacim: "11,864,852", artis: "210.20" },
  { sembol: "ETYAT", islemHacmi: "26,024,503", ortHacim: "8,464,327", artis: "207.46" },
  { sembol: "SKYMD", islemHacmi: "193,216,668", ortHacim: "68,967,605", artis: "180.15" },
  { sembol: "VAKFN", islemHacmi: "556,167,493", ortHacim: "205,151,131", artis: "171.10" },
  { sembol: "GEDZA", islemHacmi: "247,528,555", ortHacim: "95,738,680", artis: "158.55" },
  { sembol: "BARMA", islemHacmi: "489,863,020", ortHacim: "205,379,811", artis: "138.52" },
  { sembol: "HUNER", islemHacmi: "445,651,620", ortHacim: "216,530,414", artis: "105.84" },
  { sembol: "CWENE", islemHacmi: "2,319,467,598", ortHacim: "1,168,182,483", artis: "98.51" },
  { sembol: "TLMAN", islemHacmi: "44,730,831", ortHacim: "22,663,328", artis: "97.37" },
  { sembol: "SAMAT", islemHacmi: "29,745,140", ortHacim: "15,693,607", artis: "89.54" },
  { sembol: "IDGYO", islemHacmi: "23,892,766", ortHacim: "12,892,972", artis: "85.32" },
  { sembol: "CASA", islemHacmi: "4,007,571", ortHacim: "2,198,818", artis: "82.26" },
  { sembol: "IZENR", islemHacmi: "3,424,620,218", ortHacim: "1,902,543,315", artis: "80.00" },
  { sembol: "FADE", islemHacmi: "97,514,486", ortHacim: "54,443,398", artis: "79.11" },
  { sembol: "ONRYT", islemHacmi: "284,742,341", ortHacim: "162,592,271", artis: "75.13" },
  { sembol: "LINK", islemHacmi: "588,942,404", ortHacim: "337,492,488", artis: "74.51" },
  { sembol: "AKCNS", islemHacmi: "267,312,179", ortHacim: "158,817,926", artis: "68.31" },
  { sembol: "KLNMA", islemHacmi: "4,769,801", ortHacim: "2,877,393", artis: "65.77" },
  { sembol: "ZGYO", islemHacmi: "725,409,961", ortHacim: "443,137,948", artis: "63.70" },
  { sembol: "KLSYN", islemHacmi: "206,495,936", ortHacim: "126,598,756", artis: "63.11" },
  { sembol: "KNFRT", islemHacmi: "82,233,878", ortHacim: "50,649,427", artis: "62.36" },
  { sembol: "KRDMB", islemHacmi: "2,548,899,484", ortHacim: "1,575,257,961", artis: "61.81" },
  { sembol: "FRMPL", islemHacmi: "531,763,626", ortHacim: "330,496,345", artis: "60.90" },
  { sembol: "ORGE", islemHacmi: "379,162,591", ortHacim: "239,246,132", artis: "58.48" },
  { sembol: "SARKY", islemHacmi: "749,562,252", ortHacim: "482,373,508", artis: "55.39" },
  { sembol: "BIENY", islemHacmi: "176,635,411", ortHacim: "114,560,998", artis: "54.18" },
  { sembol: "ULUSE", islemHacmi: "427,514,340", ortHacim: "283,120,025", artis: "51.00" },
  { sembol: "DURDO", islemHacmi: "32,182,026", ortHacim: "21,359,458", artis: "50.67" },
  { sembol: "ARMGD", islemHacmi: "205,102,579", ortHacim: "136,437,316", artis: "50.33" },
  { sembol: "MIATK", islemHacmi: "3,205,170,833", ortHacim: "2,155,241,244", artis: "48.72" },
  { sembol: "RYSAS", islemHacmi: "300,431,874", ortHacim: "208,749,384", artis: "43.92" },
  { sembol: "ORMA", islemHacmi: "4,398,177", ortHacim: "3,081,786", artis: "42.72" },
  { sembol: "SMRTG", islemHacmi: "1,396,542,673", ortHacim: "985,996,186", artis: "41.64" },
  { sembol: "CMENT", islemHacmi: "3,867,518", ortHacim: "2,739,083", artis: "41.20" },
  { sembol: "EGPRO", islemHacmi: "77,476,680", ortHacim: "54,959,407", artis: "40.85" },
  { sembol: "BRLSM", islemHacmi: "509,276,564", ortHacim: "361,959,479", artis: "40.70" },
  { sembol: "ATATP", islemHacmi: "615,345,008", ortHacim: "437,865,194", artis: "40.53" },
  { sembol: "LKMNH", islemHacmi: "81,080,631", ortHacim: "58,301,131", artis: "40.32" },
  { sembol: "BLUME", islemHacmi: "194,979,850", ortHacim: "138,952,462", artis: "40.32" },
  { sembol: "INVES", islemHacmi: "118,680,905", ortHacim: "84,671,227", artis: "40.17" },
  { sembol: "KAREL", islemHacmi: "519,627,667", ortHacim: "371,113,277", artis: "40.02" },
  { sembol: "ATEKS", islemHacmi: "3,084,043", ortHacim: "2,239,804", artis: "37.69" },
  { sembol: "YEOTK", islemHacmi: "3,003,796,988", ortHacim: "2,198,241,671", artis: "36.65" },
  { sembol: "TAVHL", islemHacmi: "1,470,403,676", ortHacim: "1,081,966,974", artis: "36.42" },
  { sembol: "FUHOL", islemHacmi: "13,208,634", ortHacim: "9,794,481", artis: "34.86" },
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
import Link from "next/link";

const veriler = [
  { sembol: "ODINE", islemHacmi: "8,173,976,831", ortHacim: "985,460,523", artis: "729.46" },
  { sembol: "GUNDG", islemHacmi: "3,182,906,294", ortHacim: "385,841,871", artis: "724.93" },
  { sembol: "GEDIK", islemHacmi: "524,121,387", ortHacim: "71,784,710", artis: "630.13" },
  { sembol: "TGSAS", islemHacmi: "581,393,017", ortHacim: "81,247,122", artis: "615.59" },
  { sembol: "GOKNR", islemHacmi: "1,292,273,761", ortHacim: "223,367,241", artis: "478.54" },
  { sembol: "DUNYH", islemHacmi: "936,436,646", ortHacim: "181,326,360", artis: "416.44" },
  { sembol: "ARMGD", islemHacmi: "498,601,023", ortHacim: "105,344,782", artis: "373.30" },
  { sembol: "ISSEN", islemHacmi: "107,332,354", ortHacim: "22,698,267", artis: "372.87" },
  { sembol: "YATAS", islemHacmi: "425,327,328", ortHacim: "94,614,833", artis: "349.54" },
  { sembol: "BARMA", islemHacmi: "697,722,711", ortHacim: "167,514,487", artis: "316.51" },
  { sembol: "FADE", islemHacmi: "146,058,650", ortHacim: "38,025,483", artis: "284.11" },
  { sembol: "EKSUN", islemHacmi: "239,245,401", ortHacim: "65,007,749", artis: "268.03" },
  { sembol: "KFEIN", islemHacmi: "199,794,403", ortHacim: "55,228,835", artis: "261.76" },
  { sembol: "ONRYT", islemHacmi: "413,347,670", ortHacim: "123,390,368", artis: "234.99" },
  { sembol: "IZENR", islemHacmi: "4,291,185,545", ortHacim: "1,284,154,534", artis: "234.16" },
  { sembol: "FRMPL", islemHacmi: "629,436,858", ortHacim: "190,412,403", artis: "230.57" },
  { sembol: "EGSER", islemHacmi: "80,546,425", ortHacim: "25,064,598", artis: "221.36" },
  { sembol: "INVEO", islemHacmi: "306,751,931", ortHacim: "96,386,586", artis: "218.25" },
  { sembol: "BRLSM", islemHacmi: "497,498,607", ortHacim: "177,344,615", artis: "180.53" },
  { sembol: "BAYRK", islemHacmi: "208,352,770", ortHacim: "74,329,420", artis: "180.31" },
  { sembol: "ELITE", islemHacmi: "384,782,761", ortHacim: "137,386,890", artis: "180.07" },
  { sembol: "JANTS", islemHacmi: "169,813,659", ortHacim: "62,271,317", artis: "172.70" },
  { sembol: "SERNT", islemHacmi: "341,430,478", ortHacim: "125,397,072", artis: "172.28" },
  { sembol: "ZERGY", islemHacmi: "1,303,605,626", ortHacim: "484,678,013", artis: "168.96" },
  { sembol: "TRGYO", islemHacmi: "453,866,207", ortHacim: "172,968,527", artis: "162.40" },
  { sembol: "CRDFA", islemHacmi: "318,630,614", ortHacim: "127,855,730", artis: "149.21" },
  { sembol: "GEDZA", islemHacmi: "117,284,616", ortHacim: "47,674,549", artis: "146.01" },
  { sembol: "KIMMR", islemHacmi: "155,959,992", ortHacim: "64,010,125", artis: "143.65" },
  { sembol: "GSDHO", islemHacmi: "370,505,928", ortHacim: "152,242,760", artis: "143.37" },
  { sembol: "BRMEN", islemHacmi: "106,058,168", ortHacim: "44,951,234", artis: "135.94" },
  { sembol: "OZRDN", islemHacmi: "51,463,324", ortHacim: "22,110,041", artis: "132.76" },
  { sembol: "GARFA", islemHacmi: "160,939,829", ortHacim: "69,788,502", artis: "130.61" },
  { sembol: "ICBCT", islemHacmi: "111,301,764", ortHacim: "49,365,498", artis: "125.46" },
  { sembol: "MHRGY", islemHacmi: "72,990,856", ortHacim: "33,862,715", artis: "115.55" },
  { sembol: "FRIGO", islemHacmi: "309,503,177", ortHacim: "146,334,763", artis: "111.50" },
  { sembol: "TUCLK", islemHacmi: "178,710,201", ortHacim: "85,562,717", artis: "108.86" },
  { sembol: "METRO", islemHacmi: "189,984,766", ortHacim: "91,719,995", artis: "107.14" },
  { sembol: "MOGAN", islemHacmi: "734,295,279", ortHacim: "355,831,215", artis: "106.36" },
  { sembol: "ANHYT", islemHacmi: "228,915,760", ortHacim: "111,462,289", artis: "105.38" },
  { sembol: "PETUN", islemHacmi: "98,555,179", ortHacim: "49,504,745", artis: "99.08" },
  { sembol: "PNSUT", islemHacmi: "236,221,091", ortHacim: "119,627,035", artis: "97.46" },
  { sembol: "SRVGY", islemHacmi: "257,407,335", ortHacim: "130,693,443", artis: "96.96" },
  { sembol: "MOPAS", islemHacmi: "457,967,997", ortHacim: "232,722,992", artis: "96.79" },
  { sembol: "EMPAE", islemHacmi: "2,111,466,585", ortHacim: "1,089,922,494", artis: "93.73" },
  { sembol: "ALFAS", islemHacmi: "617,398,307", ortHacim: "319,004,910", artis: "93.54" },
  { sembol: "AKFIS", islemHacmi: "652,503,186", ortHacim: "337,734,440", artis: "93.20" },
  { sembol: "ISGYO", islemHacmi: "102,890,046", ortHacim: "53,813,787", artis: "91.20" },
  { sembol: "HUNER", islemHacmi: "317,062,144", ortHacim: "170,653,589", artis: "85.79" },
  { sembol: "KGYO", islemHacmi: "615,653,868", ortHacim: "337,058,620", artis: "82.65" },
  { sembol: "TLMAN", islemHacmi: "34,788,580", ortHacim: "19,081,430", artis: "82.32" },
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
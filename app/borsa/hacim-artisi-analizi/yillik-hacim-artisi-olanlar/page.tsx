import Link from "next/link";

const veriler = [
  { sembol: "DGNMO", islemHacmi: "659,034,581", ortHacim: "27,720,066", artis: "2,277.46" },
  { sembol: "PASEU", islemHacmi: "10,014,074,813", ortHacim: "676,727,449", artis: "1,379.78" },
  { sembol: "PKART", islemHacmi: "499,042,495", ortHacim: "35,964,753", artis: "1,287.39" },
  { sembol: "TURGG", islemHacmi: "387,642,615", ortHacim: "40,265,417", artis: "862.72" },
  { sembol: "KARTN", islemHacmi: "341,104,092", ortHacim: "35,676,894", artis: "856.05" },
  { sembol: "ARENA", islemHacmi: "538,103,181", ortHacim: "62,589,130", artis: "759.74" },
  { sembol: "HOROZ", islemHacmi: "777,144,029", ortHacim: "96,100,981", artis: "708.67" },
  { sembol: "PRZMA", islemHacmi: "83,025,314", ortHacim: "11,650,811", artis: "612.61" },
  { sembol: "HURGZ", islemHacmi: "321,151,367", ortHacim: "47,558,184", artis: "575.28" },
  { sembol: "PENGD", islemHacmi: "620,256,772", ortHacim: "93,248,770", artis: "565.16" },
  { sembol: "BORLS", islemHacmi: "1,448,122,216", ortHacim: "219,728,072", artis: "559.05" },
  { sembol: "GLRMK", islemHacmi: "4,468,192,929", ortHacim: "695,596,513", artis: "542.35" },
  { sembol: "KGYO", islemHacmi: "412,340,133", ortHacim: "65,947,192", artis: "525.26" },
  { sembol: "DYOBY", islemHacmi: "356,967,059", ortHacim: "60,937,530", artis: "485.79" },
  { sembol: "EGPRO", islemHacmi: "239,079,299", ortHacim: "41,297,950", artis: "478.91" },
  { sembol: "BURCE", islemHacmi: "879,995,282", ortHacim: "153,499,265", artis: "473.29" },
  { sembol: "GMTAS", islemHacmi: "506,412,569", ortHacim: "89,336,783", artis: "466.86" },
  { sembol: "ANELE", islemHacmi: "249,221,265", ortHacim: "47,198,108", artis: "428.03" },
  { sembol: "ULUUN", islemHacmi: "211,435,675", ortHacim: "43,383,730", artis: "387.36" },
  { sembol: "VGCYO", islemHacmi: "131,530,752", ortHacim: "29,016,984", artis: "353.29" },
  { sembol: "PAMEL", islemHacmi: "97,877,441", ortHacim: "22,738,038", artis: "330.46" },
  { sembol: "PLTUR", islemHacmi: "352,086,902", ortHacim: "82,212,604", artis: "328.26" },
  { sembol: "DESPC", islemHacmi: "111,556,994", ortHacim: "26,313,392", artis: "323.96" },
  { sembol: "SOKE", islemHacmi: "167,006,030", ortHacim: "40,489,099", artis: "312.47" },
  { sembol: "KRONT", islemHacmi: "202,358,054", ortHacim: "49,130,895", artis: "311.88" },
  { sembol: "AYEN", islemHacmi: "145,511,498", ortHacim: "35,640,014", artis: "308.28" },
  { sembol: "DUNYH", islemHacmi: "351,225,624", ortHacim: "86,720,889", artis: "305.01" },
  { sembol: "KAREL", islemHacmi: "367,816,209", ortHacim: "93,177,354", artis: "294.75" },
  { sembol: "AKMGY", islemHacmi: "37,220,869", ortHacim: "9,505,832", artis: "291.56" },
  { sembol: "SEGMN", islemHacmi: "515,040,212", ortHacim: "134,999,283", artis: "281.51" },
  { sembol: "SEKUR", islemHacmi: "51,940,131", ortHacim: "13,628,908", artis: "281.10" },
  { sembol: "AVGYO", islemHacmi: "88,629,324", ortHacim: "23,581,011", artis: "275.85" },
  { sembol: "ESCAR", islemHacmi: "724,119,522", ortHacim: "193,387,207", artis: "274.44" },
  { sembol: "EFOR", islemHacmi: "2,018,625,252", ortHacim: "539,110,261", artis: "274.44" },
  { sembol: "EUREN", islemHacmi: "2,259,527,298", ortHacim: "630,127,734", artis: "258.58" },
  { sembol: "AYCES", islemHacmi: "222,153,513", ortHacim: "63,767,407", artis: "248.38" },
  { sembol: "CONSE", islemHacmi: "140,318,050", ortHacim: "40,458,762", artis: "246.82" },
  { sembol: "ORGE", islemHacmi: "290,081,751", ortHacim: "84,556,115", artis: "243.06" },
  { sembol: "HKTM", islemHacmi: "243,653,881", ortHacim: "72,217,308", artis: "237.39" },
  { sembol: "MAGEN", islemHacmi: "1,014,520,939", ortHacim: "305,763,429", artis: "231.80" },
  { sembol: "BINBN", islemHacmi: "571,511,478", ortHacim: "173,137,056", artis: "230.09" },
  { sembol: "HATSN", islemHacmi: "225,529,063", ortHacim: "69,799,215", artis: "223.11" },
  { sembol: "ASTOR", islemHacmi: "9,914,951,824", ortHacim: "3,148,482,751", artis: "214.91" },
  { sembol: "DOFRB", islemHacmi: "4,436,115,472", ortHacim: "1,417,232,622", artis: "213.01" },
  { sembol: "ATLAS", islemHacmi: "27,095,298", ortHacim: "8,730,903", artis: "210.34" },
  { sembol: "KRDMB", islemHacmi: "370,272,033", ortHacim: "119,545,306", artis: "209.73" },
  { sembol: "HATEK", islemHacmi: "197,057,115", ortHacim: "64,265,641", artis: "206.63" },
  { sembol: "ECILC", islemHacmi: "1,554,963,823", ortHacim: "509,025,853", artis: "205.48" },
  { sembol: "PSGYO", islemHacmi: "2,061,710,767", ortHacim: "675,626,252", artis: "205.16" },
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
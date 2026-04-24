import Link from "next/link";

const veriler = [
  { sembol: "PASEU", islemHacmi: "10,014,074,813", ortHacim: "1,212,047,451", artis: "726.27" },
  { sembol: "TURGG", islemHacmi: "387,642,615", ortHacim: "53,914,752", artis: "618.99" },
  { sembol: "DGNMO", islemHacmi: "659,034,581", ortHacim: "112,479,533", artis: "485.94" },
  { sembol: "PKART", islemHacmi: "499,042,495", ortHacim: "93,367,894", artis: "434.45" },
  { sembol: "HOROZ", islemHacmi: "777,144,029", ortHacim: "154,127,106", artis: "404.22" },
  { sembol: "ARENA", islemHacmi: "538,103,181", ortHacim: "113,046,311", artis: "376.00" },
  { sembol: "DESPC", islemHacmi: "111,556,994", ortHacim: "25,292,204", artis: "341.07" },
  { sembol: "BORLS", islemHacmi: "1,448,122,216", ortHacim: "332,869,415", artis: "335.04" },
  { sembol: "HURGZ", islemHacmi: "321,151,367", ortHacim: "75,875,243", artis: "323.26" },
  { sembol: "ESEN", islemHacmi: "2,365,844,310", ortHacim: "602,185,599", artis: "292.88" },
  { sembol: "PAMEL", islemHacmi: "97,877,441", ortHacim: "25,079,807", artis: "290.26" },
  { sembol: "IHLGM", islemHacmi: "256,346,689", ortHacim: "68,686,558", artis: "273.21" },
  { sembol: "PLTUR", islemHacmi: "352,086,902", ortHacim: "96,453,908", artis: "265.03" },
  { sembol: "BINBN", islemHacmi: "571,511,478", ortHacim: "159,017,392", artis: "259.40" },
  { sembol: "EUREN", islemHacmi: "2,259,527,298", ortHacim: "630,538,187", artis: "258.35" },
  { sembol: "SODSN", islemHacmi: "3,882,104", ortHacim: "1,165,667", artis: "233.04" },
  { sembol: "KAREL", islemHacmi: "367,816,209", ortHacim: "111,765,350", artis: "229.10" },
  { sembol: "DUNYH", islemHacmi: "351,225,624", ortHacim: "107,245,337", artis: "227.50" },
  { sembol: "KRONT", islemHacmi: "202,358,054", ortHacim: "63,682,922", artis: "217.76" },
  { sembol: "KARTN", islemHacmi: "341,104,092", ortHacim: "109,795,063", artis: "210.67" },
  { sembol: "ACILK", islemHacmi: "879,059,135", ortHacim: "285,600,295", artis: "207.79" },
  { sembol: "DOFRB", islemHacmi: "4,436,115,472", ortHacim: "1,468,358,453", artis: "202.11" },
  { sembol: "HATEK", islemHacmi: "197,057,115", ortHacim: "68,795,853", artis: "186.44" },
  { sembol: "GMTAS", islemHacmi: "506,412,569", ortHacim: "180,609,647", artis: "180.40" },
  { sembol: "PRZMA", islemHacmi: "83,025,314", ortHacim: "31,094,024", artis: "167.01" },
  { sembol: "HRKET", islemHacmi: "144,666,919", ortHacim: "54,677,870", artis: "164.58" },
  { sembol: "ORGE", islemHacmi: "290,081,751", ortHacim: "110,827,212", artis: "161.74" },
  { sembol: "AVGYO", islemHacmi: "88,629,324", ortHacim: "33,908,454", artis: "161.38" },
  { sembol: "ETILR", islemHacmi: "258,363,754", ortHacim: "100,434,801", artis: "157.25" },
  { sembol: "ARDYZ", islemHacmi: "373,628,451", ortHacim: "149,531,357", artis: "149.87" },
  { sembol: "IHLAS", islemHacmi: "269,759,312", ortHacim: "108,326,652", artis: "149.02" },
  { sembol: "AKENR", islemHacmi: "240,128,699", ortHacim: "96,916,815", artis: "147.77" },
  { sembol: "ULUUN", islemHacmi: "211,435,675", ortHacim: "87,241,517", artis: "142.36" },
  { sembol: "CONSE", islemHacmi: "140,318,050", ortHacim: "57,895,457", artis: "142.36" },
  { sembol: "GENTS", islemHacmi: "321,554,235", ortHacim: "133,982,962", artis: "140.00" },
  { sembol: "ATSYH", islemHacmi: "5,609,433", ortHacim: "2,400,193", artis: "133.71" },
  { sembol: "PSGYO", islemHacmi: "2,061,710,767", ortHacim: "883,226,430", artis: "133.43" },
  { sembol: "VKFYO", islemHacmi: "33,739,022", ortHacim: "14,946,316", artis: "125.73" },
  { sembol: "ATEKS", islemHacmi: "5,554,076", ortHacim: "2,470,167", artis: "124.85" },
  { sembol: "BMSCH", islemHacmi: "132,631,847", ortHacim: "59,439,845", artis: "123.14" },
  { sembol: "KGYO", islemHacmi: "412,340,133", ortHacim: "188,303,828", artis: "118.94" },
  { sembol: "DYOBY", islemHacmi: "356,967,059", ortHacim: "166,384,300", artis: "114.54" },
  { sembol: "INGRM", islemHacmi: "37,180,571", ortHacim: "17,342,613", artis: "114.39" },
  { sembol: "SEGMN", islemHacmi: "515,040,212", ortHacim: "241,547,418", artis: "113.23" },
  { sembol: "YAYLA", islemHacmi: "100,593,151", ortHacim: "47,485,003", artis: "111.84" },
  { sembol: "AGYO", islemHacmi: "8,631,937", ortHacim: "4,100,968", artis: "110.49" },
  { sembol: "SEKUR", islemHacmi: "51,940,131", ortHacim: "25,710,153", artis: "102.02" },
  { sembol: "VERUS", islemHacmi: "130,543,625", ortHacim: "65,253,998", artis: "100.05" },
  { sembol: "OZSUB", islemHacmi: "88,036,427", ortHacim: "45,129,581", artis: "95.07" },
  { sembol: "SAYAS", islemHacmi: "78,027,486", ortHacim: "40,319,099", artis: "93.52" },
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
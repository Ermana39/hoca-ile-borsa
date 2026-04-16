import Link from "next/link";

const veriler = [
  { sembol: "KRDMB", islemHacmi: "2,617,772,480", ortHacim: "91,004,030", artis: "2,776.55" },
  { sembol: "NIBAS", islemHacmi: "2,060,878,754", ortHacim: "82,150,500", artis: "2,408.68" },
  { sembol: "AYEN", islemHacmi: "650,833,952", ortHacim: "29,066,657", artis: "2,139.11" },
  { sembol: "GUNDG", islemHacmi: "3,943,532,421", ortHacim: "205,414,783", artis: "1,819.79" },
  { sembol: "AKMGY", islemHacmi: "145,178,940", ortHacim: "7,737,666", artis: "1,776.26" },
  { sembol: "MARTI", islemHacmi: "1,557,461,274", ortHacim: "115,672,092", artis: "1,246.45" },
  { sembol: "GLRMK", islemHacmi: "5,706,979,430", ortHacim: "480,336,579", artis: "1,088.12" },
  { sembol: "MOGAN", islemHacmi: "1,106,649,668", ortHacim: "111,377,661", artis: "893.60" },
  { sembol: "GOODY", islemHacmi: "278,036,120", ortHacim: "29,239,023", artis: "850.91" },
  { sembol: "QNBTR", islemHacmi: "79,967,015", ortHacim: "8,926,467", artis: "795.84" },
  { sembol: "YIGIT", islemHacmi: "820,955,826", ortHacim: "102,796,794", artis: "698.62" },
  { sembol: "AHGAZ", islemHacmi: "1,242,040,936", ortHacim: "158,464,449", artis: "683.80" },
  { sembol: "CRFSA", islemHacmi: "542,340,128", ortHacim: "69,348,862", artis: "682.05" },
  { sembol: "PAGYO", islemHacmi: "125,497,019", ortHacim: "16,459,641", artis: "662.45" },
  { sembol: "SEGMN", islemHacmi: "815,124,200", ortHacim: "127,958,707", artis: "537.02" },
  { sembol: "ADEL", islemHacmi: "758,023,454", ortHacim: "121,957,476", artis: "521.55" },
  { sembol: "MARKA", islemHacmi: "334,900,370", ortHacim: "56,185,946", artis: "496.05" },
  { sembol: "ISKPL", islemHacmi: "1,227,013,332", ortHacim: "225,827,617", artis: "443.34" },
  { sembol: "MRGYO", islemHacmi: "1,074,167,552", ortHacim: "208,788,745", artis: "414.48" },
  { sembol: "YGGYO", islemHacmi: "131,421,615", ortHacim: "26,925,813", artis: "388.09" },
  { sembol: "GEREL", islemHacmi: "926,483,101", ortHacim: "190,433,364", artis: "386.51" },
  { sembol: "DGNMO", islemHacmi: "91,216,109", ortHacim: "20,036,956", artis: "355.24" },
  { sembol: "KTLEV", islemHacmi: "7,478,524,908", ortHacim: "1,643,197,620", artis: "355.12" },
  { sembol: "ULAS", islemHacmi: "66,484,800", ortHacim: "15,106,365", artis: "340.11" },
  { sembol: "HLGYO", islemHacmi: "925,627,526", ortHacim: "215,525,380", artis: "329.47" },
  { sembol: "BLCYT", islemHacmi: "218,428,757", ortHacim: "51,042,491", artis: "327.94" },
  { sembol: "PNSUT", islemHacmi: "160,669,351", ortHacim: "37,725,626", artis: "325.89" },
  { sembol: "PENGD", islemHacmi: "334,731,498", ortHacim: "81,495,358", artis: "310.74" },
  { sembol: "RYSAS", islemHacmi: "653,736,199", ortHacim: "161,263,057", artis: "305.38" },
  { sembol: "QNBFK", islemHacmi: "18,388,486", ortHacim: "4,607,782", artis: "299.07" },
  { sembol: "ATLAS", islemHacmi: "31,971,696", ortHacim: "8,059,244", artis: "296.71" },
  { sembol: "EGEGY", islemHacmi: "258,460,819", ortHacim: "66,603,935", artis: "288.06" },
  { sembol: "ALKA", islemHacmi: "383,395,671", ortHacim: "104,059,086", artis: "268.44" },
  { sembol: "FFOR", islemHacmi: "1,461,561,211", ortHacim: "398,555,225", artis: "266.71" },
  { sembol: "KBORU", islemHacmi: "633,744,933", ortHacim: "172,855,317", artis: "266.63" },
  { sembol: "RNPOL", islemHacmi: "43,626,733", ortHacim: "12,806,622", artis: "240.66" },
  { sembol: "MARMR", islemHacmi: "1,902,288,277", ortHacim: "562,623,476", artis: "238.11" },
  { sembol: "MSGYO", islemHacmi: "93,333,040", ortHacim: "28,409,970", artis: "228.52" },
  { sembol: "ALGYO", islemHacmi: "315,643,573", ortHacim: "96,113,574", artis: "228.41" },
  { sembol: "ULUUN", islemHacmi: "123,765,243", ortHacim: "39,246,281", artis: "215.36" },
  { sembol: "AYGAZ", islemHacmi: "426,853,341", ortHacim: "137,088,435", artis: "211.37" },
  { sembol: "FORTE", islemHacmi: "427,186,884", ortHacim: "137,500,201", artis: "210.68" },
  { sembol: "SANFM", islemHacmi: "358,098,805", ortHacim: "117,924,905", artis: "203.67" },
  { sembol: "ARMGD", islemHacmi: "397,001,085", ortHacim: "131,603,009", artis: "201.67" },
  { sembol: "SOKE", islemHacmi: "104,839,827", ortHacim: "35,347,902", artis: "196.59" },
  { sembol: "INDES", islemHacmi: "157,064,906", ortHacim: "53,228,575", artis: "195.08" },
  { sembol: "DMRGD", islemHacmi: "412,496,716", ortHacim: "142,697,617", artis: "189.07" },
  { sembol: "GWIND", islemHacmi: "326,247,498", ortHacim: "115,816,957", artis: "181.69" },
  { sembol: "PASEU", islemHacmi: "1,759,647,286", ortHacim: "628,451,228", artis: "180.00" },
  { sembol: "POLHO", islemHacmi: "454,764,672", ortHacim: "165,271,832", artis: "175.16" },
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
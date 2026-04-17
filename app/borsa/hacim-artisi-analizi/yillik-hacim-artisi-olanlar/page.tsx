import Link from "next/link";

const veriler = [
  { sembol: "GATEG", islemHacmi: "177,668,782", ortHacim: "13,045,616", artis: "1,261.90" },
  { sembol: "ARZUM", islemHacmi: "955,513,001", ortHacim: "84,287,473", artis: "1,033.64" },
  { sembol: "DGNMO", islemHacmi: "210,129,900", ortHacim: "22,668,331", artis: "826.96" },
  { sembol: "PRZMA", islemHacmi: "95,383,409", ortHacim: "10,452,775", artis: "812.52" },
  { sembol: "DOGUB", islemHacmi: "295,513,606", ortHacim: "35,024,489", artis: "743.75" },
  { sembol: "EGPRO", islemHacmi: "287,383,836", ortHacim: "35,808,884", artis: "702.55" },
  { sembol: "KARTN", islemHacmi: "242,248,302", ortHacim: "30,973,970", artis: "682.16" },
  { sembol: "IZFAS", islemHacmi: "1,765,753,752", ortHacim: "244,713,177", artis: "621.56" },
  { sembol: "BURCE", islemHacmi: "982,812,570", ortHacim: "138,490,946", artis: "609.66" },
  { sembol: "IZENR", islemHacmi: "2,534,636,521", ortHacim: "362,324,944", artis: "599.55" },
  { sembol: "SASA", islemHacmi: "34,031,655,624", ortHacim: "4,963,104,056", artis: "585.65" },
  { sembol: "KRDMB", islemHacmi: "765,885,994", ortHacim: "115,230,263", artis: "564.66" },
  { sembol: "CRFSA", islemHacmi: "507,389,404", ortHacim: "78,689,562", artis: "544.80" },
  { sembol: "CMBTN", islemHacmi: "358,247,043", ortHacim: "59,438,032", artis: "502.72" },
  { sembol: "HKTM", islemHacmi: "409,362,950", ortHacim: "69,197,464", artis: "491.59" },
  { sembol: "GLRMK", islemHacmi: "3,410,497,053", ortHacim: "579,247,290", artis: "488.78" },
  { sembol: "KONTR", islemHacmi: "6,194,283,169", ortHacim: "1,105,620,245", artis: "460.25" },
  { sembol: "PKART", islemHacmi: "180,014,585", ortHacim: "32,175,297", artis: "459.48" },
  { sembol: "MARKA", islemHacmi: "353,693,191", ortHacim: "63,721,291", artis: "455.00" },
  { sembol: "AGROT", islemHacmi: "901,023,480", ortHacim: "162,405,838", artis: "454.80" },
  { sembol: "TATEN", islemHacmi: "1,467,155,792", ortHacim: "265,347,998", artis: "452.94" },
  { sembol: "KTSKR", islemHacmi: "346,130,063", ortHacim: "64,245,223", artis: "438.76" },
  { sembol: "EFOR", islemHacmi: "2,466,670,907", ortHacim: "472,417,513", artis: "422.14" },
  { sembol: "MACKO", islemHacmi: "272,437,444", ortHacim: "53,048,159", artis: "413.57" },
  { sembol: "KGYO", islemHacmi: "305,695,771", ortHacim: "59,783,740", artis: "411.34" },
  { sembol: "AKSUE", islemHacmi: "148,076,045", ortHacim: "29,540,478", artis: "401.26" },
  { sembol: "SDTTR", islemHacmi: "1,574,461,065", ortHacim: "339,381,403", artis: "363.92" },
  { sembol: "KONYA", islemHacmi: "312,449,870", ortHacim: "68,299,459", artis: "357.47" },
  { sembol: "EGEEN", islemHacmi: "653,471,348", ortHacim: "146,795,228", artis: "345.16" },
  { sembol: "GZNMI", islemHacmi: "1,166,318,409", ortHacim: "265,093,966", artis: "339.96" },
  { sembol: "MAALT", islemHacmi: "284,027,541", ortHacim: "64,600,765", artis: "339.67" },
  { sembol: "FLAP", islemHacmi: "67,232,337", ortHacim: "15,362,982", artis: "337.63" },
  { sembol: "GIPTA", islemHacmi: "1,482,393,068", ortHacim: "359,262,158", artis: "312.62" },
  { sembol: "AKMGY", islemHacmi: "36,774,150", ortHacim: "9,231,181", artis: "298.37" },
  { sembol: "BIOEN", islemHacmi: "354,838,024", ortHacim: "90,899,371", artis: "290.36" },
  { sembol: "GLCVY", islemHacmi: "272,817,877", ortHacim: "71,039,812", artis: "284.04" },
  { sembol: "ALCAR", islemHacmi: "147,353,364", ortHacim: "38,454,727", artis: "283.15" },
  { sembol: "GRNYO", islemHacmi: "32,658,435", ortHacim: "8,558,296", artis: "281.60" },
  { sembol: "MERCN", islemHacmi: "794,485,044", ortHacim: "213,272,854", artis: "272.52" },
  { sembol: "ENSRI", islemHacmi: "421,110,934", ortHacim: "113,910,993", artis: "269.68" },
  { sembol: "CEMZY", islemHacmi: "681,036,622", ortHacim: "184,464,255", artis: "269.20" },
  { sembol: "TAVHL", islemHacmi: "2,634,712,855", ortHacim: "717,523,430", artis: "267.20" },
  { sembol: "CLEBI", islemHacmi: "617,765,697", ortHacim: "168,646,985", artis: "266.31" },
  { sembol: "MRSHL", islemHacmi: "190,757,316", ortHacim: "52,801,079", artis: "261.28" },
  { sembol: "AYCES", islemHacmi: "215,297,351", ortHacim: "60,270,981", artis: "257.21" },
  { sembol: "DURDO", islemHacmi: "112,154,759", ortHacim: "32,339,608", artis: "246.80" },
  { sembol: "PENGD", islemHacmi: "301,364,975", ortHacim: "87,020,634", artis: "246.31" },
  { sembol: "TRILC", islemHacmi: "327,137,628", ortHacim: "94,589,076", artis: "245.85" },
  { sembol: "ALBRK", islemHacmi: "598,279,090", ortHacim: "174,382,842", artis: "243.08" },
  { sembol: "EGEGY", islemHacmi: "239,431,552", ortHacim: "70,215,036", artis: "241.00" },
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
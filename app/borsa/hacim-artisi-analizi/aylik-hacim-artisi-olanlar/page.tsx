import Link from "next/link";

const veriler = [
  { sembol: "GATEG", islemHacmi: "177,668,782", ortHacim: "13,790,444", artis: "1,188.35" },
  { sembol: "CMBTN", islemHacmi: "358,247,043", ortHacim: "44,193,747", artis: "710.63" },
  { sembol: "MERCN", islemHacmi: "794,485,044", ortHacim: "101,336,898", artis: "683.99" },
  { sembol: "KONTR", islemHacmi: "6,194,283,169", ortHacim: "1,056,199,210", artis: "486.47" },
  { sembol: "ETILR", islemHacmi: "249,192,214", ortHacim: "44,894,756", artis: "455.06" },
  { sembol: "EGEEN", islemHacmi: "653,471,348", ortHacim: "119,101,650", artis: "448.67" },
  { sembol: "KONYA", islemHacmi: "312,449,870", ortHacim: "60,644,028", artis: "415.22" },
  { sembol: "GIPTA", islemHacmi: "1,482,393,068", ortHacim: "289,809,394", artis: "411.36" },
  { sembol: "CLEBI", islemHacmi: "617,765,697", ortHacim: "126,011,852", artis: "390.24" },
  { sembol: "TRILC", islemHacmi: "327,137,628", ortHacim: "67,407,588", artis: "385.31" },
  { sembol: "ARZUM", islemHacmi: "955,513,001", ortHacim: "198,400,701", artis: "381.61" },
  { sembol: "MRSHL", islemHacmi: "190,757,316", ortHacim: "39,695,199", artis: "380.56" },
  { sembol: "DURDO", islemHacmi: "112,154,759", ortHacim: "24,527,903", artis: "357.25" },
  { sembol: "GRNYO", islemHacmi: "32,658,435", ortHacim: "7,254,601", artis: "350.18" },
  { sembol: "IZFAS", islemHacmi: "1,765,753,752", ortHacim: "392,595,848", artis: "349.76" },
  { sembol: "PRZMA", islemHacmi: "95,383,409", ortHacim: "21,222,292", artis: "349.45" },
  { sembol: "ALCAR", islemHacmi: "147,353,364", ortHacim: "32,965,262", artis: "347.00" },
  { sembol: "SMRVA", islemHacmi: "2,047,758,813", ortHacim: "469,658,769", artis: "336.01" },
  { sembol: "KARTN", islemHacmi: "242,248,302", ortHacim: "55,670,568", artis: "335.15" },
  { sembol: "BRMEN", islemHacmi: "11,399,995", ortHacim: "2,641,855", artis: "331.51" },
  { sembol: "SASA", islemHacmi: "34,031,655,624", ortHacim: "7,906,921,908", artis: "330.40" },
  { sembol: "GZNMI", islemHacmi: "1,166,318,409", ortHacim: "274,734,110", artis: "324.53" },
  { sembol: "EKSUN", islemHacmi: "77,026,977", ortHacim: "18,690,812", artis: "312.11" },
  { sembol: "IZENR", islemHacmi: "2,534,636,521", ortHacim: "624,770,177", artis: "305.69" },
  { sembol: "FLAP", islemHacmi: "67,232,337", ortHacim: "16,731,351", artis: "301.83" },
  { sembol: "EGPRO", islemHacmi: "287,383,836", ortHacim: "72,478,559", artis: "296.51" },
  { sembol: "SDTTR", islemHacmi: "1,574,461,065", ortHacim: "401,532,820", artis: "292.11" },
  { sembol: "DGNMO", islemHacmi: "210,129,900", ortHacim: "54,530,099", artis: "285.35" },
  { sembol: "HKTM", islemHacmi: "409,362,950", ortHacim: "106,679,981", artis: "283.73" },
  { sembol: "HATEK", islemHacmi: "198,523,470", ortHacim: "52,547,656", artis: "277.80" },
  { sembol: "OZYSR", islemHacmi: "128,777,912", ortHacim: "34,367,388", artis: "274.71" },
  { sembol: "BFREN", islemHacmi: "200,955,297", ortHacim: "54,593,772", artis: "268.09" },
  { sembol: "SUWEN", islemHacmi: "150,180,949", ortHacim: "41,206,626", artis: "264.46" },
  { sembol: "SUNTK", islemHacmi: "173,549,689", ortHacim: "47,801,138", artis: "263.07" },
  { sembol: "GLCVY", islemHacmi: "272,817,877", ortHacim: "75,536,686", artis: "261.17" },
  { sembol: "SKYLP", islemHacmi: "106,570,627", ortHacim: "30,387,273", artis: "250.71" },
  { sembol: "BIGEN", islemHacmi: "572,645,018", ortHacim: "165,060,035", artis: "246.93" },
  { sembol: "RAYSG", islemHacmi: "168,981,528", ortHacim: "48,798,228", artis: "246.29" },
  { sembol: "AGROT", islemHacmi: "901,023,480", ortHacim: "265,487,251", artis: "239.38" },
  { sembol: "VSNMD", islemHacmi: "835,090,546", ortHacim: "247,563,204", artis: "237.32" },
  { sembol: "AZTEK", islemHacmi: "226,264,477", ortHacim: "68,621,809", artis: "229.73" },
  { sembol: "HEKTS", islemHacmi: "1,508,081,430", ortHacim: "475,346,226", artis: "217.26" },
  { sembol: "CRFSA", islemHacmi: "507,389,404", ortHacim: "161,438,770", artis: "214.29" },
  { sembol: "BUCIM", islemHacmi: "162,941,598", ortHacim: "51,879,405", artis: "214.08" },
  { sembol: "TAVHL", islemHacmi: "2,634,712,855", ortHacim: "856,048,714", artis: "207.78" },
  { sembol: "BURCE", islemHacmi: "982,812,570", ortHacim: "325,776,929", artis: "201.68" },
  { sembol: "ALBRK", islemHacmi: "598,279,090", ortHacim: "202,706,601", artis: "195.15" },
  { sembol: "TATEN", islemHacmi: "1,467,155,792", ortHacim: "502,209,490", artis: "192.14" },
  { sembol: "BORLS", islemHacmi: "508,270,905", ortHacim: "175,229,059", artis: "190.06" },
  { sembol: "PKART", islemHacmi: "180,014,585", ortHacim: "62,569,809", artis: "187.70" },
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
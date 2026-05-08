import Link from "next/link";

const veriler = [
  { sembol: "GSDDE", islemHacmi: "579,112,206", ortHacim: "29,839,638", artis: "1,840.75" },
  { sembol: "PRZMA", islemHacmi: "252,825,081", ortHacim: "13,128,615", artis: "1,825.76" },
  { sembol: "PKART", islemHacmi: "560,499,560", ortHacim: "45,835,749", artis: "1,122.84" },
  { sembol: "DMRGD", islemHacmi: "2,098,868,654", ortHacim: "184,868,108", artis: "1,035.33" },
  { sembol: "ENSRI", islemHacmi: "1,590,106,245", ortHacim: "147,512,602", artis: "977.95" },
  { sembol: "KRDMB", islemHacmi: "1,586,209,808", ortHacim: "162,241,247", artis: "877.69" },
  { sembol: "ADEL", islemHacmi: "1,351,175,971", ortHacim: "146,069,893", artis: "825.02" },
  { sembol: "KLSER", islemHacmi: "445,475,372", ortHacim: "49,139,686", artis: "806.55" },
  { sembol: "TATGD", islemHacmi: "377,443,204", ortHacim: "44,853,824", artis: "741.50" },
  { sembol: "HOROZ", islemHacmi: "1,029,599,844", ortHacim: "128,245,396", artis: "702.84" },
  { sembol: "DGATE", islemHacmi: "295,167,410", ortHacim: "36,801,743", artis: "702.05" },
  { sembol: "ALGYO", islemHacmi: "1,041,822,659", ortHacim: "140,331,757", artis: "642.40" },
  { sembol: "KAREL", islemHacmi: "740,221,641", ortHacim: "104,649,619", artis: "607.33" },
  { sembol: "MERKO", islemHacmi: "746,411,754", ortHacim: "106,652,746", artis: "599.85" },
  { sembol: "GENIL", islemHacmi: "2,271,849,051", ortHacim: "347,971,362", artis: "552.88" },
  { sembol: "EKOS", islemHacmi: "839,630,761", ortHacim: "130,376,652", artis: "544.00" },
  { sembol: "KRSTL", islemHacmi: "536,232,848", ortHacim: "86,038,515", artis: "523.25" },
  { sembol: "KGYO", islemHacmi: "444,502,910", ortHacim: "73,410,610", artis: "505.50" },
  { sembol: "TATEN", islemHacmi: "1,886,712,890", ortHacim: "314,858,158", artis: "499.23" },
  { sembol: "SUMAS", islemHacmi: "8,685,679", ortHacim: "1,489,815", artis: "483.00" },
  { sembol: "PCILT", islemHacmi: "272,180,051", ortHacim: "47,760,856", artis: "469.88" },
  { sembol: "RGYAS", islemHacmi: "901,486,189", ortHacim: "159,753,741", artis: "464.30" },
  { sembol: "ISKPL", islemHacmi: "1,682,695,488", ortHacim: "299,859,323", artis: "461.16" },
  { sembol: "GOODY", islemHacmi: "163,215,308", ortHacim: "29,421,058", artis: "454.76" },
  { sembol: "RTALB", islemHacmi: "825,155,263", ortHacim: "153,488,732", artis: "437.60" },
  { sembol: "PRKME", islemHacmi: "268,560,440", ortHacim: "50,992,247", artis: "426.67" },
  { sembol: "KZGYO", islemHacmi: "253,248,831", ortHacim: "48,856,623", artis: "418.35" },
  { sembol: "SASA", islemHacmi: "29,147,254,785", ortHacim: "5,684,287,153", artis: "412.77" },
  { sembol: "AYEN", islemHacmi: "414,068,851", ortHacim: "81,360,559", artis: "408.93" },
  { sembol: "YEOTK", islemHacmi: "1,555,238,472", ortHacim: "307,406,515", artis: "405.92" },
  { sembol: "CEMZY", islemHacmi: "1,022,130,820", ortHacim: "202,490,791", artis: "404.78" },
  { sembol: "AVOD", islemHacmi: "379,950,689", ortHacim: "75,574,036", artis: "402.75" },
  { sembol: "TARKM", islemHacmi: "543,677,781", ortHacim: "111,700,719", artis: "386.73" },
  { sembol: "SDTTR", islemHacmi: "1,739,773,788", ortHacim: "359,958,540", artis: "383.33" },
  { sembol: "PATEK", islemHacmi: "3,911,670,628", ortHacim: "812,445,523", artis: "381.47" },
  { sembol: "SURGY", islemHacmi: "1,191,339,245", ortHacim: "252,005,661", artis: "372.74" },
  { sembol: "ACSEL", islemHacmi: "136,077,095", ortHacim: "29,450,367", artis: "362.06" },
  { sembol: "OZSUB", islemHacmi: "235,407,606", ortHacim: "52,756,255", artis: "346.22" },
  { sembol: "AYDEM", islemHacmi: "389,909,498", ortHacim: "87,426,401", artis: "345.99" },
  { sembol: "KAPLM", islemHacmi: "578,936,787", ortHacim: "131,204,588", artis: "341.25" },
  { sembol: "EFOR", islemHacmi: "3,019,548,582", ortHacim: "695,091,776", artis: "334.41" },
  { sembol: "MIATK", islemHacmi: "3,450,535,349", ortHacim: "796,351,635", artis: "333.29" },
  { sembol: "ANELE", islemHacmi: "224,507,273", ortHacim: "52,753,087", artis: "325.36" },
  { sembol: "ODAS", islemHacmi: "1,474,789,684", ortHacim: "349,249,367", artis: "322.27" },
  { sembol: "ISDMR", islemHacmi: "510,267,032", ortHacim: "121,304,739", artis: "320.65" },
  { sembol: "GEDZA", islemHacmi: "145,627,244", ortHacim: "35,018,252", artis: "315.86" },
  { sembol: "KMPUR", islemHacmi: "201,127,488", ortHacim: "48,595,964", artis: "313.88" },
  { sembol: "IZMDC", islemHacmi: "281,229,804", ortHacim: "69,020,474", artis: "307.46" },
  { sembol: "GSDHO", islemHacmi: "186,967,878", ortHacim: "46,840,723", artis: "299.16" },
  { sembol: "ELITE", islemHacmi: "225,678,247", ortHacim: "56,557,730", artis: "299.02" },
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
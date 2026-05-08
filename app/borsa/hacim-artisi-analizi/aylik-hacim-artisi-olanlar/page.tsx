import Link from "next/link";

const veriler = [
  { sembol: "GSDDE", islemHacmi: "579,112,206", ortHacim: "70,955,387", artis: "716.16" },
  { sembol: "KLSER", islemHacmi: "445,475,372", ortHacim: "61,095,042", artis: "629.15" },
  { sembol: "RTALB", islemHacmi: "825,155,263", ortHacim: "135,273,744", artis: "509.99" },
  { sembol: "PRKME", islemHacmi: "268,560,440", ortHacim: "46,926,116", artis: "472.30" },
  { sembol: "ANGEN", islemHacmi: "143,602,850", ortHacim: "26,108,553", artis: "450.02" },
  { sembol: "PATEK", islemHacmi: "3,911,670,628", ortHacim: "754,085,355", artis: "418.73" },
  { sembol: "GENIL", islemHacmi: "2,271,849,051", ortHacim: "441,047,521", artis: "415.10" },
  { sembol: "PRZMA", islemHacmi: "252,825,081", ortHacim: "49,588,961", artis: "409.84" },
  { sembol: "KRSTL", islemHacmi: "536,232,848", ortHacim: "108,886,426", artis: "392.47" },
  { sembol: "DGATE", islemHacmi: "295,167,410", ortHacim: "61,189,979", artis: "382.38" },
  { sembol: "OFSYM", islemHacmi: "272,061,089", ortHacim: "61,409,614", artis: "343.03" },
  { sembol: "IZMDC", islemHacmi: "281,229,804", ortHacim: "68,150,585", artis: "312.66" },
  { sembol: "MEDTR", islemHacmi: "88,802,793", ortHacim: "21,760,640", artis: "308.09" },
  { sembol: "GEDZA", islemHacmi: "145,627,244", ortHacim: "35,851,180", artis: "306.20" },
  { sembol: "RGYAS", islemHacmi: "901,486,189", ortHacim: "227,138,061", artis: "296.89" },
  { sembol: "KZGYO", islemHacmi: "253,248,831", ortHacim: "66,445,840", artis: "281.14" },
  { sembol: "MERKO", islemHacmi: "746,411,754", ortHacim: "207,799,369", artis: "259.20" },
  { sembol: "PCILT", islemHacmi: "272,180,051", ortHacim: "77,220,489", artis: "252.47" },
  { sembol: "TARKM", islemHacmi: "543,677,781", ortHacim: "154,885,463", artis: "251.02" },
  { sembol: "EKOS", islemHacmi: "839,630,761", ortHacim: "243,217,019", artis: "245.22" },
  { sembol: "ELITE", islemHacmi: "225,678,247", ortHacim: "65,919,328", artis: "242.36" },
  { sembol: "AVOD", islemHacmi: "379,950,689", ortHacim: "112,146,478", artis: "238.80" },
  { sembol: "SEGYO", islemHacmi: "247,445,805", ortHacim: "73,365,092", artis: "237.28" },
  { sembol: "DMRGD", islemHacmi: "2,098,868,654", ortHacim: "647,031,567", artis: "224.38" },
  { sembol: "AYDEM", islemHacmi: "389,909,498", ortHacim: "121,145,967", artis: "221.85" },
  { sembol: "MIATK", islemHacmi: "3,450,535,349", ortHacim: "1,072,131,659", artis: "221.84" },
  { sembol: "SDTTR", islemHacmi: "1,739,773,788", ortHacim: "550,163,473", artis: "216.23" },
  { sembol: "SUMAS", islemHacmi: "8,685,679", ortHacim: "2,761,562", artis: "214.52" },
  { sembol: "SNPAM", islemHacmi: "5,363,053", ortHacim: "1,763,919", artis: "204.04" },
  { sembol: "TATGD", islemHacmi: "377,443,204", ortHacim: "124,686,394", artis: "202.71" },
  { sembol: "SNICA", islemHacmi: "102,252,844", ortHacim: "34,056,122", artis: "200.25" },
  { sembol: "GLRYH", islemHacmi: "175,852,129", ortHacim: "59,731,262", artis: "194.41" },
  { sembol: "GOODY", islemHacmi: "163,215,308", ortHacim: "55,558,696", artis: "193.77" },
  { sembol: "ADEL", islemHacmi: "1,351,175,971", ortHacim: "473,961,446", artis: "185.03" },
  { sembol: "BVSAN", islemHacmi: "399,858,448", ortHacim: "140,841,841", artis: "183.90" },
  { sembol: "KAREL", islemHacmi: "740,221,641", ortHacim: "262,260,722", artis: "182.25" },
  { sembol: "KATMR", islemHacmi: "1,201,807,550", ortHacim: "425,956,404", artis: "182.14" },
  { sembol: "ENSRI", islemHacmi: "1,590,106,245", ortHacim: "566,544,210", artis: "180.67" },
  { sembol: "KAPLM", islemHacmi: "578,936,787", ortHacim: "210,272,301", artis: "175.33" },
  { sembol: "MPARK", islemHacmi: "962,916,488", ortHacim: "350,310,426", artis: "174.88" },
  { sembol: "LKMNH", islemHacmi: "94,110,375", ortHacim: "34,266,069", artis: "174.65" },
  { sembol: "BERA", islemHacmi: "659,325,402", ortHacim: "246,248,975", artis: "167.75" },
  { sembol: "AKENR", islemHacmi: "288,842,387", ortHacim: "107,916,170", artis: "167.65" },
  { sembol: "DOFER", islemHacmi: "148,371,271", ortHacim: "55,579,766", artis: "166.95" },
  { sembol: "CCOLA", islemHacmi: "1,141,471,408", ortHacim: "427,647,261", artis: "166.92" },
  { sembol: "EMNIS", islemHacmi: "5,409,556", ortHacim: "2,054,391", artis: "163.32" },
  { sembol: "PKART", islemHacmi: "560,499,560", ortHacim: "213,311,927", artis: "162.76" },
  { sembol: "OSTIM", islemHacmi: "134,210,213", ortHacim: "51,438,188", artis: "160.92" },
  { sembol: "KRPLS", islemHacmi: "79,418,702", ortHacim: "30,446,011", artis: "160.85" },
  { sembol: "ADGYO", islemHacmi: "199,277,684", ortHacim: "77,247,802", artis: "157.97" },
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
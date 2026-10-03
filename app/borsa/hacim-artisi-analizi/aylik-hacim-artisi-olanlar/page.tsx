import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";

export const metadata = {
  title: "Aylık Hacim Artışı Olan BIST Hisseleri",
  description:
    seoAciklamasi("Aylık ortalamasına göre işlem hacmi yükselen BIST hisselerini, güncel hacim tutarlarını ve artış oranlarını karşılaştırmalı olarak inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar",
  },
  robots: { index: false, follow: true },
};

const veriler = [
  { sembol: "SELEC", islemHacmi: "2,552,906,830", ortHacim: "476,107,218", artis: "436.20" },
  { sembol: "EDATA", islemHacmi: "243,551,460", ortHacim: "54,267,140", artis: "348.80" },
  { sembol: "IHAAS", islemHacmi: "154,683,356", ortHacim: "35,373,262", artis: "337.29" },
  { sembol: "AAGYO", islemHacmi: "382,390,544", ortHacim: "97,059,567", artis: "293.98" },
  { sembol: "DUNYH", islemHacmi: "302,371,236", ortHacim: "104,100,522", artis: "190.46" },
  { sembol: "NETGL", islemHacmi: "1,520,040,313", ortHacim: "538,146,510", artis: "182.46" },
  { sembol: "ARMGD", islemHacmi: "961,434,448", ortHacim: "348,965,609", artis: "175.51" },
  { sembol: "YESIL", islemHacmi: "43,806,250", ortHacim: "17,261,532", artis: "153.78" },
  { sembol: "SKYMD", islemHacmi: "248,942,737", ortHacim: "101,294,030", artis: "145.76" },
  { sembol: "SKYLP", islemHacmi: "24,418,687", ortHacim: "10,174,042", artis: "140.01" },
  { sembol: "BIGTK", islemHacmi: "280,980,976", ortHacim: "117,341,344", artis: "139.46" },
  { sembol: "DURDO", islemHacmi: "30,130,802", ortHacim: "12,926,728", artis: "133.09" },
  { sembol: "DERIM", islemHacmi: "22,771,078", ortHacim: "10,369,128", artis: "119.60" },
  { sembol: "HDFGS", islemHacmi: "159,236,381", ortHacim: "74,985,785", artis: "112.36" },
  { sembol: "BIGCH", islemHacmi: "61,480,176", ortHacim: "29,558,807", artis: "107.99" },
  { sembol: "QNBFK", islemHacmi: "2,062,207", ortHacim: "994,899", artis: "107.28" },
  { sembol: "BINBN", islemHacmi: "170,956,905", ortHacim: "83,820,656", artis: "103.96" },
  { sembol: "BARMA", islemHacmi: "10,786,424", ortHacim: "5,320,549", artis: "102.73" },
  { sembol: "SEKFK", islemHacmi: "4,354,823", ortHacim: "2,230,068", artis: "95.28" },
  { sembol: "ULUSE", islemHacmi: "75,025,305", ortHacim: "38,516,409", artis: "94.79" },
  { sembol: "ZGYOT", islemHacmi: "10,934,049", ortHacim: "5,716,604", artis: "91.27" },
  { sembol: "LYDHO", islemHacmi: "131,550,312", ortHacim: "68,920,580", artis: "90.87" },
  { sembol: "KONKA", islemHacmi: "42,402,212", ortHacim: "22,271,302", artis: "90.39" },
  { sembol: "BSOKE", islemHacmi: "517,565,772", ortHacim: "272,832,501", artis: "89.70" },
  { sembol: "SEGMN", islemHacmi: "109,307,706", ortHacim: "57,684,718", artis: "89.49" },
  { sembol: "FONET", islemHacmi: "152,491,174", ortHacim: "80,675,144", artis: "89.02" },
  { sembol: "PRKME", islemHacmi: "62,339,109", ortHacim: "33,131,089", artis: "88.16" },
  { sembol: "DURKN", islemHacmi: "59,026,051", ortHacim: "31,849,521", artis: "85.33" },
  { sembol: "SEKUR", islemHacmi: "28,412,828", ortHacim: "15,537,365", artis: "82.87" },
  { sembol: "KNFRT", islemHacmi: "80,650,178", ortHacim: "44,502,489", artis: "81.23" },
  { sembol: "GRTHO", islemHacmi: "485,831,961", ortHacim: "268,425,362", artis: "80.99" },
  { sembol: "ASTOR", islemHacmi: "16,104,739,005", ortHacim: "9,067,486,212", artis: "77.61" },
  { sembol: "BERA", islemHacmi: "177,643,582", ortHacim: "100,711,118", artis: "76.39" },
  { sembol: "ERSU", islemHacmi: "16,628,294", ortHacim: "10,044,770", artis: "65.54" },
  { sembol: "KORDS", islemHacmi: "206,345,846", ortHacim: "127,480,590", artis: "61.86" },
  { sembol: "USHOL", islemHacmi: "61,616,787", ortHacim: "38,301,324", artis: "60.87" },
  { sembol: "EYGYO", islemHacmi: "29,824,044", ortHacim: "18,615,518", artis: "60.21" },
  { sembol: "OTTO", islemHacmi: "56,807,173", ortHacim: "35,519,543", artis: "59.93" },
  { sembol: "YBTAS", islemHacmi: "1,455,527", ortHacim: "913,898", artis: "59.27" },
  { sembol: "ALFAS", islemHacmi: "105,397,228", ortHacim: "66,255,426", artis: "59.08" },
  { sembol: "GEREL", islemHacmi: "329,394,971", ortHacim: "212,757,148", artis: "54.82" },
  { sembol: "EUYO", islemHacmi: "7,011,906", ortHacim: "4,534,109", artis: "54.65" },
  { sembol: "KUVVA", islemHacmi: "33,201,854", ortHacim: "21,536,176", artis: "54.17" },
  { sembol: "ATEKS", islemHacmi: "1,347,737", ortHacim: "883,388", artis: "52.56" },
  { sembol: "HEDEF", islemHacmi: "431,957,721", ortHacim: "287,812,875", artis: "50.08" },
  { sembol: "ESCAR", islemHacmi: "126,238,646", ortHacim: "84,308,792", artis: "49.73" },
  { sembol: "ZGYO", islemHacmi: "203,688,835", ortHacim: "141,225,779", artis: "44.23" },
  { sembol: "RUBNS", islemHacmi: "71,544,333", ortHacim: "49,786,366", artis: "43.70" },
  { sembol: "DMRGD", islemHacmi: "800,329,801", ortHacim: "564,685,579", artis: "41.73" },
  { sembol: "GLRMKT", islemHacmi: "130,583", ortHacim: "92,135", artis: "41.73" },
];

export default function AylikHacimArtisiPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Aylık Hacim Artışı Olanlar
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

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Aylık Hacim Artışı Olan Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Aylık hacim artışı olan hisseler sayfası, son işlem hacmi ile aylık
            ortalama hacim arasında belirgin fark bulunan hisseleri takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi
            dikkat çekici şekilde artan hisseleri toplu olarak inceleyebilir,
            piyasadaki güçlü ilgi gören şirketleri daha kolay belirleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hacim artışı, teknik analizde fiyat hareketinin gücünü destekleyen
            önemli göstergelerden biridir. Özellikle aylık ortalama hacme göre
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
            aylık ortalamaya göre yükselen hisseler ve borsa teknik takip ekranları
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
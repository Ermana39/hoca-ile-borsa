import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";

export const metadata = {
  title: "Yıllık Hacim Artışı Olan BIST Hisseleri",
  description:
    seoAciklamasi("Yıllık ortalamasına göre işlem hacmi yükselen BIST hisselerini, güncel hacim tutarlarını ve artış oranlarını karşılaştırmalı olarak inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar",
  },
  robots: { index: false, follow: true },
};

const veriler = [
  { sembol: "UFUK", islemHacmi: "1,779,735,275", ortHacim: "197,287,859", artis: "802.10" },
  { sembol: "AVOD", islemHacmi: "230,704,113", ortHacim: "30,375,802", artis: "659.50" },
  { sembol: "DITAS", islemHacmi: "410,845,688", ortHacim: "57,740,038", artis: "611.54" },
  { sembol: "GENKM", islemHacmi: "999,420,772", ortHacim: "177,033,408", artis: "464.54" },
  { sembol: "KARSN", islemHacmi: "1,328,961,400", ortHacim: "267,887,586", artis: "396.09" },
  { sembol: "GESAN", islemHacmi: "5,546,101,182", ortHacim: "1,147,056,716", artis: "383.51" },
  { sembol: "EUPWR", islemHacmi: "7,052,321,229", ortHacim: "1,637,080,134", artis: "330.79" },
  { sembol: "SNPAM", islemHacmi: "3,889,193", ortHacim: "1,014,773", artis: "283.26" },
  { sembol: "INTET", islemHacmi: "1,448,033,008", ortHacim: "399,388,494", artis: "262.56" },
  { sembol: "KZGYO", islemHacmi: "100,109,760", ortHacim: "28,274,895", artis: "254.06" },
  { sembol: "MERKO", islemHacmi: "92,272,697", ortHacim: "28,863,802", artis: "219.68" },
  { sembol: "MIATK", islemHacmi: "1,539,434,067", ortHacim: "510,971,863", artis: "201.28" },
  { sembol: "KTLEV", islemHacmi: "21,466,937,828", ortHacim: "7,191,886,404", artis: "198.49" },
  { sembol: "PEKGY", islemHacmi: "7,774,067,536", ortHacim: "2,613,349,903", artis: "197.48" },
  { sembol: "SAFKR", islemHacmi: "220,428,500", ortHacim: "74,222,888", artis: "196.98" },
  { sembol: "VESBE", islemHacmi: "262,473,321", ortHacim: "89,920,181", artis: "191.90" },
  { sembol: "BLCYT", islemHacmi: "208,594,976", ortHacim: "71,888,258", artis: "190.17" },
  { sembol: "ESCAR", islemHacmi: "438,947,063", ortHacim: "154,096,057", artis: "184.85" },
  { sembol: "MANAS", islemHacmi: "2,323,054,182", ortHacim: "823,683,685", artis: "182.03" },
  { sembol: "EGEEN", islemHacmi: "150,463,108", ortHacim: "54,634,971", artis: "175.40" },
  { sembol: "KUVAS", islemHacmi: "1,343,065,831", ortHacim: "490,323,135", artis: "173.91" },
  { sembol: "MARTI", islemHacmi: "525,648,003", ortHacim: "192,359,748", artis: "173.26" },
  { sembol: "KSTUR", islemHacmi: "4,814,032", ortHacim: "1,811,944", artis: "165.86" },
  { sembol: "HLGYO", islemHacmi: "303,639,696", ortHacim: "118,692,484", artis: "155.82" },
  { sembol: "ICUGS", islemHacmi: "142,925,000", ortHacim: "55,931,011", artis: "155.54" },
  { sembol: "ONRYT", islemHacmi: "154,222,013", ortHacim: "60,352,888", artis: "155.53" },
  { sembol: "DUNYH", islemHacmi: "482,480,391", ortHacim: "197,522,398", artis: "144.27" },
  { sembol: "DZGYO", islemHacmi: "31,391,251", ortHacim: "13,114,559", artis: "139.36" },
  { sembol: "BORSK", islemHacmi: "125,630,363", ortHacim: "52,714,381", artis: "138.32" },
  { sembol: "BIGTK", islemHacmi: "617,391,106", ortHacim: "259,951,599", artis: "137.50" },
  { sembol: "DMLKTG", islemHacmi: "157,087,437", ortHacim: "68,063,923", artis: "130.79" },
  { sembol: "VKGYO", islemHacmi: "79,890,373", ortHacim: "34,784,363", artis: "129.67" },
  { sembol: "RUZYE", islemHacmi: "137,401,929", ortHacim: "61,550,146", artis: "123.24" },
  { sembol: "LYDYE", islemHacmi: "52,429,650", ortHacim: "23,580,969", artis: "122.34" },
  { sembol: "SUMAS", islemHacmi: "1,861,431", ortHacim: "837,615", artis: "122.23" },
  { sembol: "KLRHO", islemHacmi: "570,705,650", ortHacim: "264,764,989", artis: "115.55" },
  { sembol: "BALAT", islemHacmi: "4,624,664", ortHacim: "2,172,708", artis: "112.85" },
  { sembol: "ENERY", islemHacmi: "804,174,908", ortHacim: "384,148,262", artis: "109.34" },
  { sembol: "ACSEL", islemHacmi: "32,771,910", ortHacim: "16,711,554", artis: "96.10" },
  { sembol: "TSKB", islemHacmi: "335,191,722", ortHacim: "172,065,854", artis: "94.80" },
  { sembol: "SKYMD", islemHacmi: "67,850,996", ortHacim: "35,095,453", artis: "93.33" },
  { sembol: "ZOREN", islemHacmi: "213,919,090", ortHacim: "112,567,152", artis: "90.04" },
  { sembol: "SVGYO", islemHacmi: "1,167,645,599", ortHacim: "617,017,751", artis: "89.24" },
  { sembol: "INVES", islemHacmi: "136,572,206", ortHacim: "74,377,928", artis: "83.62" },
  { sembol: "KAPLM", islemHacmi: "73,433,236", ortHacim: "40,205,677", artis: "82.64" },
  { sembol: "BIOEN", islemHacmi: "279,497,027", ortHacim: "153,568,417", artis: "82.00" },
  { sembol: "DSTKF", islemHacmi: "6,623,225,776", ortHacim: "3,640,413,324", artis: "81.94" },
  { sembol: "VAKBN", islemHacmi: "2,984,156,678", ortHacim: "1,644,218,090", artis: "81.49" },
  { sembol: "AHGAZ", islemHacmi: "326,253,722", ortHacim: "180,421,597", artis: "80.83" },
  { sembol: "BYDNR", islemHacmi: "49,270,178", ortHacim: "28,235,715", artis: "74.50" },
];

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
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
  { sembol: "ERBOS", islemHacmi: "463,607,586", ortHacim: "16,739,456", artis: "2669.55" },
  { sembol: "AKMGY", islemHacmi: "168,120,784", ortHacim: "12,022,308", artis: "1298.41" },
  { sembol: "UNLU", islemHacmi: "351,844,522", ortHacim: "35,904,314", artis: "879.95" },
  { sembol: "CEOEM", islemHacmi: "233,894,139", ortHacim: "60,933,624", artis: "283.85" },
  { sembol: "HRKET", islemHacmi: "665,038,731", ortHacim: "178,214,520", artis: "273.17" },
  { sembol: "BAHKM", islemHacmi: "470,542,400", ortHacim: "150,406,509", artis: "212.85" },
  { sembol: "DMRGD", islemHacmi: "987,833,259", ortHacim: "355,658,641", artis: "177.75" },
  { sembol: "HUNER", islemHacmi: "285,223,231", ortHacim: "112,237,974", artis: "154.12" },
  { sembol: "AYES", islemHacmi: "8,104,062", ortHacim: "3,416,989", artis: "137.17" },
  { sembol: "KOCMT", islemHacmi: "438,520,796", ortHacim: "188,441,024", artis: "132.71" },
  { sembol: "GMTAS", islemHacmi: "311,568,996", ortHacim: "140,738,045", artis: "121.38" },
  { sembol: "ENERY", islemHacmi: "882,119,586", ortHacim: "420,475,470", artis: "109.79" },
  { sembol: "MRGYO", islemHacmi: "378,339,813", ortHacim: "185,661,411", artis: "103.78" },
  { sembol: "KMPUR", islemHacmi: "109,627,240", ortHacim: "57,037,683", artis: "92.20" },
  { sembol: "KAPLM", islemHacmi: "239,392,519", ortHacim: "126,835,113", artis: "88.74" },
  { sembol: "MAKIM", islemHacmi: "71,968,298", ortHacim: "38,430,311", artis: "87.27" },
  { sembol: "BJKAS", islemHacmi: "449,834,192", ortHacim: "246,698,458", artis: "82.34" },
  { sembol: "TKFEN", islemHacmi: "1,396,049,351", ortHacim: "767,093,762", artis: "81.99" },
  { sembol: "ARMGD", islemHacmi: "334,023,813", ortHacim: "187,731,672", artis: "77.93" },
  { sembol: "TGSAS", islemHacmi: "104,800,927", ortHacim: "58,989,963", artis: "77.66" },
  { sembol: "BLCYT", islemHacmi: "168,323,898", ortHacim: "94,755,577", artis: "77.64" },
  { sembol: "AKSGY", islemHacmi: "84,609,070", ortHacim: "48,669,174", artis: "73.85" },
  { sembol: "ECZYT", islemHacmi: "367,005,402", ortHacim: "213,772,030", artis: "71.68" },
  { sembol: "ICUGST", islemHacmi: "2,058,479", ortHacim: "1,242,705", artis: "65.65" },
  { sembol: "GIPTA", islemHacmi: "632,001,191", ortHacim: "391,375,163", artis: "61.48" },
  { sembol: "GSDHO", islemHacmi: "131,765,844", ortHacim: "81,905,679", artis: "60.88" },
  { sembol: "YKSLN", islemHacmi: "65,808,064", ortHacim: "41,489,923", artis: "58.61" },
  { sembol: "KGYO", islemHacmi: "245,245,379", ortHacim: "159,265,403", artis: "53.99" },
  { sembol: "CRFSA", islemHacmi: "336,555,861", ortHacim: "224,505,864", artis: "49.91" },
  { sembol: "CATES", islemHacmi: "142,209,341", ortHacim: "95,331,793", artis: "49.17" },
  { sembol: "BSOKE", islemHacmi: "368,240,453", ortHacim: "250,128,442", artis: "47.22" },
  { sembol: "FMIZP", islemHacmi: "36,817,733", ortHacim: "25,509,466", artis: "44.33" },
  { sembol: "TUCLK", islemHacmi: "95,400,988", ortHacim: "67,656,195", artis: "41.01" },
  { sembol: "ASELST", islemHacmi: "64,782,410", ortHacim: "47,615,283", artis: "36.05" },
  { sembol: "ETILR", islemHacmi: "87,371,573", ortHacim: "64,673,290", artis: "35.10" },
  { sembol: "ADGYO", islemHacmi: "94,072,350", ortHacim: "70,007,636", artis: "34.37" },
  { sembol: "OYYAT", islemHacmi: "36,154,452", ortHacim: "27,291,715", artis: "32.47" },
  { sembol: "KRDMA", islemHacmi: "402,036,026", ortHacim: "305,023,318", artis: "31.81" },
  { sembol: "EGEEN", islemHacmi: "164,788,225", ortHacim: "125,594,353", artis: "31.21" },
  { sembol: "AHGAZ", islemHacmi: "218,685,764", ortHacim: "177,748,633", artis: "23.03" },
  { sembol: "SKYMD", islemHacmi: "83,029,076", ortHacim: "68,127,476", artis: "21.87" },
  { sembol: "KUYAS", islemHacmi: "868,934,351", ortHacim: "716,208,442", artis: "21.32" },
  { sembol: "DIRIT", islemHacmi: "2,535,386", ortHacim: "2,116,098", artis: "19.81" },
  { sembol: "TUKAS", islemHacmi: "458,004,017", ortHacim: "385,977,470", artis: "18.66" },
  { sembol: "ARDYZ", islemHacmi: "325,458,628", ortHacim: "275,794,523", artis: "18.01" },
  { sembol: "TRMET", islemHacmi: "950,077,143", ortHacim: "807,223,459", artis: "17.70" },
  { sembol: "HATSN", islemHacmi: "216,990,451", ortHacim: "188,629,519", artis: "15.04" },
  { sembol: "EFOR", islemHacmi: "1,208,129,006", ortHacim: "1,050,196,523", artis: "15.04" },
  { sembol: "CEMZY", islemHacmi: "370,842,958", ortHacim: "323,367,115", artis: "14.68" },
  { sembol: "GUBRF", islemHacmi: "1,383,345,022", ortHacim: "1,210,060,075", artis: "14.32" },
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
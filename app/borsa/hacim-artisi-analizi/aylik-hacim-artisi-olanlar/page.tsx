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
  { sembol: "ERBOS", islemHacmi: "463,607,586", ortHacim: "27,137,353", artis: "1,608.37" },
  { sembol: "AKMGY", islemHacmi: "168,120,784", ortHacim: "14,797,807", artis: "1,036.12" },
  { sembol: "UNLU", islemHacmi: "351,844,522", ortHacim: "74,389,407", artis: "372.98" },
  { sembol: "MAKIM", islemHacmi: "71,968,298", ortHacim: "15,346,283", artis: "368.96" },
  { sembol: "KAPLM", islemHacmi: "239,392,519", ortHacim: "59,867,848", artis: "299.87" },
  { sembol: "AYES", islemHacmi: "8,104,062", ortHacim: "2,317,759", artis: "249.65" },
  { sembol: "KMPUR", islemHacmi: "109,627,240", ortHacim: "38,321,728", artis: "186.07" },
  { sembol: "ECZYT", islemHacmi: "367,005,402", ortHacim: "137,376,590", artis: "167.15" },
  { sembol: "BULGS", islemHacmi: "284,933,563", ortHacim: "110,631,960", artis: "157.55" },
  { sembol: "CEOEM", islemHacmi: "233,894,139", ortHacim: "92,408,276", artis: "153.11" },
  { sembol: "GSDHO", islemHacmi: "131,765,844", ortHacim: "56,385,845", artis: "133.69" },
  { sembol: "HDFGS", islemHacmi: "211,931,366", ortHacim: "91,374,640", artis: "131.94" },
  { sembol: "TUCLK", islemHacmi: "95,400,988", ortHacim: "43,721,190", artis: "118.20" },
  { sembol: "HRKET", islemHacmi: "665,038,731", ortHacim: "307,005,751", artis: "116.62" },
  { sembol: "TUKAS", islemHacmi: "458,004,017", ortHacim: "228,185,696", artis: "100.72" },
  { sembol: "BLCYT", islemHacmi: "168,323,898", ortHacim: "84,895,936", artis: "98.27" },
  { sembol: "GMTAS", islemHacmi: "311,568,996", ortHacim: "164,484,636", artis: "89.42" },
  { sembol: "FMIZP", islemHacmi: "36,817,733", ortHacim: "19,846,369", artis: "85.51" },
  { sembol: "VRGYO", islemHacmi: "37,843,142", ortHacim: "21,111,298", artis: "79.26" },
  { sembol: "FONET", islemHacmi: "127,782,297", ortHacim: "73,649,862", artis: "73.50" },
  { sembol: "TUREX", islemHacmi: "135,699,468", ortHacim: "79,511,830", artis: "70.67" },
  { sembol: "ICUGS", islemHacmi: "111,663,931", ortHacim: "65,887,416", artis: "69.48" },
  { sembol: "DMRGD", islemHacmi: "987,833,259", ortHacim: "594,833,555", artis: "66.07" },
  { sembol: "ICUGST", islemHacmi: "2,058,479", ortHacim: "1,242,705", artis: "65.65" },
  { sembol: "ETILR", islemHacmi: "87,371,573", ortHacim: "53,661,592", artis: "62.82" },
  { sembol: "AKSGY", islemHacmi: "84,609,070", ortHacim: "52,043,624", artis: "62.57" },
  { sembol: "DIRIT", islemHacmi: "2,535,386", ortHacim: "1,570,463", artis: "61.44" },
  { sembol: "SANFM", islemHacmi: "85,843,153", ortHacim: "54,112,379", artis: "58.64" },
  { sembol: "MMCAS", islemHacmi: "4,125,655", ortHacim: "2,648,219", artis: "55.79" },
  { sembol: "KOCMT", islemHacmi: "438,520,796", ortHacim: "289,206,726", artis: "51.63" },
  { sembol: "SMRTG", islemHacmi: "341,812,510", ortHacim: "229,752,025", artis: "48.77" },
  { sembol: "IDGYO", islemHacmi: "5,748,998", ortHacim: "3,945,076", artis: "45.73" },
  { sembol: "GZNMI", islemHacmi: "94,255,775", ortHacim: "65,294,182", artis: "44.36" },
  { sembol: "DMSAS", islemHacmi: "31,593,707", ortHacim: "22,149,226", artis: "42.64" },
  { sembol: "GIPTA", islemHacmi: "632,001,191", ortHacim: "459,801,506", artis: "37.45" },
  { sembol: "SKYMD", islemHacmi: "83,029,076", ortHacim: "60,595,247", artis: "37.02" },
  { sembol: "ECILC", islemHacmi: "611,314,709", ortHacim: "446,583,876", artis: "36.89" },
  { sembol: "GLYHO", islemHacmi: "79,921,504", ortHacim: "58,554,795", artis: "36.49" },
  { sembol: "ASELST", islemHacmi: "64,782,410", ortHacim: "47,615,283", artis: "36.05" },
  { sembol: "ADGYO", islemHacmi: "94,072,350", ortHacim: "70,238,558", artis: "33.93" },
  { sembol: "DGATE", islemHacmi: "34,722,790", ortHacim: "26,685,446", artis: "30.12" },
  { sembol: "CMBTN", islemHacmi: "44,218,375", ortHacim: "34,168,579", artis: "29.41" },
  { sembol: "KGYO", islemHacmi: "245,245,379", ortHacim: "193,253,971", artis: "26.90" },
  { sembol: "ISKPL", islemHacmi: "296,872,817", ortHacim: "235,020,241", artis: "26.32" },
  { sembol: "MERKO", islemHacmi: "35,568,842", ortHacim: "28,452,350", artis: "25.01" },
  { sembol: "BALAT", islemHacmi: "3,254,253", ortHacim: "2,621,535", artis: "24.14" },
  { sembol: "BAHKM", islemHacmi: "470,542,400", ortHacim: "379,796,848", artis: "23.89" },
  { sembol: "MRGYO", islemHacmi: "378,339,813", ortHacim: "309,876,680", artis: "22.09" },
  { sembol: "SEYKM", islemHacmi: "6,797,968", ortHacim: "5,567,994", artis: "22.09" },
  { sembol: "LMKDC", islemHacmi: "126,969,645", ortHacim: "104,152,239", artis: "21.91" },
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
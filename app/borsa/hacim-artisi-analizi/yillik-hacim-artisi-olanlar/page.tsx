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
  { sembol: "SELEC", islemHacmi: "2,552,906,830", ortHacim: "398,051,654", artis: "541.15" },
  { sembol: "ARMGD", islemHacmi: "961,434,448", ortHacim: "194,215,172", artis: "395.04" },
  { sembol: "SKYMD", islemHacmi: "248,942,737", ortHacim: "67,227,194", artis: "270.30" },
  { sembol: "HUNER", islemHacmi: "358,919,083", ortHacim: "118,675,223", artis: "202.44" },
  { sembol: "UNLU", islemHacmi: "111,365,787", ortHacim: "39,023,732", artis: "185.38" },
  { sembol: "NETGL", islemHacmi: "1,520,040,313", ortHacim: "538,146,510", artis: "182.46" },
  { sembol: "DUNYH", islemHacmi: "302,371,236", ortHacim: "129,338,313", artis: "133.78" },
  { sembol: "ASTOR", islemHacmi: "16,104,739,005", ortHacim: "7,075,726,663", artis: "127.61" },
  { sembol: "DMRGD", islemHacmi: "800,329,801", ortHacim: "358,307,629", artis: "123.36" },
  { sembol: "BSOKE", islemHacmi: "517,565,772", ortHacim: "247,386,595", artis: "109.21" },
  { sembol: "ENERY", islemHacmi: "900,179,780", ortHacim: "431,665,883", artis: "108.54" },
  { sembol: "PSDTC", islemHacmi: "57,738,089", ortHacim: "27,799,987", artis: "107.69" },
  { sembol: "RYSAS", islemHacmi: "461,159,742", ortHacim: "226,076,034", artis: "103.98" },
  { sembol: "ZGYOT", islemHacmi: "10,934,049", ortHacim: "5,716,604", artis: "91.27" },
  { sembol: "BIGTK", islemHacmi: "280,980,976", ortHacim: "149,579,712", artis: "87.85" },
  { sembol: "EDATA", islemHacmi: "243,551,460", ortHacim: "136,300,659", artis: "78.69" },
  { sembol: "GRTHO", islemHacmi: "485,831,961", ortHacim: "279,372,655", artis: "73.90" },
  { sembol: "KORDS", islemHacmi: "206,345,846", ortHacim: "119,367,520", artis: "72.87" },
  { sembol: "RYGYO", islemHacmi: "157,150,559", ortHacim: "93,733,597", artis: "67.66" },
  { sembol: "ARDYZ", islemHacmi: "469,171,212", ortHacim: "281,814,707", artis: "66.48" },
  { sembol: "ASELS", islemHacmi: "17,403,262,085", ortHacim: "10,808,441,731", artis: "61.02" },
  { sembol: "FLAP", islemHacmi: "23,127,129", ortHacim: "14,667,069", artis: "57.68" },
  { sembol: "KUVVA", islemHacmi: "33,201,854", ortHacim: "21,752,312", artis: "52.64" },
  { sembol: "KNFRT", islemHacmi: "80,650,178", ortHacim: "53,008,215", artis: "52.15" },
  { sembol: "USHOL", islemHacmi: "61,616,787", ortHacim: "40,803,985", artis: "51.01" },
  { sembol: "SEKUR", islemHacmi: "28,412,828", ortHacim: "18,829,984", artis: "50.89" },
  { sembol: "AHGAZ", islemHacmi: "268,407,737", ortHacim: "180,768,240", artis: "48.48" },
  { sembol: "BINBN", islemHacmi: "170,956,905", ortHacim: "115,393,872", artis: "48.15" },
  { sembol: "NETAS", islemHacmi: "97,069,283", ortHacim: "65,742,379", artis: "47.65" },
  { sembol: "IHAAS", islemHacmi: "154,683,356", ortHacim: "106,657,382", artis: "45.03" },
  { sembol: "HRKET", islemHacmi: "262,181,632", ortHacim: "181,360,165", artis: "44.56" },
  { sembol: "KRGYO", islemHacmi: "65,785,704", ortHacim: "45,529,710", artis: "44.49" },
  { sembol: "GLRMKT", islemHacmi: "130,583", ortHacim: "92,135", artis: "41.73" },
  { sembol: "TRMET", islemHacmi: "1,147,061,889", ortHacim: "820,550,138", artis: "39.79" },
  { sembol: "DURDO", islemHacmi: "30,130,802", ortHacim: "21,871,410", artis: "37.76" },
  { sembol: "MRGYO", islemHacmi: "248,573,991", ortHacim: "185,319,675", artis: "34.13" },
  { sembol: "GEREL", islemHacmi: "329,394,971", ortHacim: "255,682,364", artis: "28.83" },
  { sembol: "EUYO", islemHacmi: "7,011,906", ortHacim: "5,494,017", artis: "27.63" },
  { sembol: "TKFEN", islemHacmi: "982,384,148", ortHacim: "787,200,421", artis: "24.79" },
  { sembol: "ERSU", islemHacmi: "16,628,294", ortHacim: "13,541,909", artis: "22.79" },
  { sembol: "DERIM", islemHacmi: "22,771,078", ortHacim: "18,979,432", artis: "19.98" },
  { sembol: "BRSAN", islemHacmi: "1,393,448,106", ortHacim: "1,186,157,285", artis: "17.48" },
  { sembol: "TCKRC", islemHacmi: "413,357,929", ortHacim: "358,350,229", artis: "15.41" },
  { sembol: "INDES", islemHacmi: "84,855,364", ortHacim: "75,227,511", artis: "12.80" },
  { sembol: "YKSLN", islemHacmi: "46,089,448", ortHacim: "41,695,252", artis: "10.54" },
  { sembol: "KRDMD", islemHacmi: "2,154,210,650", ortHacim: "1,995,989,284", artis: "7.93" },
  { sembol: "KARTN", islemHacmi: "116,608,842", ortHacim: "108,558,965", artis: "7.42" },
  { sembol: "ETILR", islemHacmi: "70,085,998", ortHacim: "65,853,537", artis: "6.43" },
  { sembol: "BALSU", islemHacmi: "486,947,418", ortHacim: "463,803,938", artis: "4.99" },
  { sembol: "TRALT", islemHacmi: "6,205,588,035", ortHacim: "5,991,638,439", artis: "3.57" },
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
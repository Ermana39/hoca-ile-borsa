import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";

export const metadata = {
  title: "Haftalık Hacim Artışı Olan BIST Hisseleri",
  description:
    seoAciklamasi("Haftalık ortalamasına göre işlem hacmi yükselen BIST hisselerini, güncel hacim tutarlarını ve artış oranlarını karşılaştırmalı olarak inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar",
  },
  robots: { index: false, follow: true },
};

const veriler = [
  { sembol: "IZFAS", islemHacmi: "1,079,599,903", ortHacim: "282,543,984", artis: "282.10" },
  { sembol: "SKTAS", islemHacmi: "141,082,889", ortHacim: "46,564,931", artis: "202.98" },
  { sembol: "ULUSE", islemHacmi: "88,168,477", ortHacim: "29,285,038", artis: "201.07" },
  { sembol: "LKMNH", islemHacmi: "37,086,727", ortHacim: "14,634,851", artis: "153.41" },
  { sembol: "DCTTR", islemHacmi: "149,755,044", ortHacim: "60,112,214", artis: "149.15" },
  { sembol: "YKSLN", islemHacmi: "132,202,225", ortHacim: "53,455,842", artis: "147.31" },
  { sembol: "VERUS", islemHacmi: "61,240,926", ortHacim: "25,126,914", artis: "143.73" },
  { sembol: "BEGYO", islemHacmi: "125,278,519", ortHacim: "51,538,778", artis: "143.08" },
  { sembol: "DGGYO", islemHacmi: "4,564,397", ortHacim: "1,892,279", artis: "141.21" },
  { sembol: "TURSG", islemHacmi: "1,178,642,988", ortHacim: "491,087,931", artis: "140.01" },
  { sembol: "INVES", islemHacmi: "64,015,550", ortHacim: "27,608,636", artis: "131.87" },
  { sembol: "HUBVC", islemHacmi: "23,690,471", ortHacim: "10,681,865", artis: "121.78" },
  { sembol: "DOCO", islemHacmi: "84,652,105", ortHacim: "38,515,456", artis: "119.79" },
  { sembol: "PARSN", islemHacmi: "22,825,157", ortHacim: "10,395,643", artis: "119.56" },
  { sembol: "DMRGD", islemHacmi: "937,770,809", ortHacim: "430,238,185", artis: "117.97" },
  { sembol: "RYGAS", islemHacmi: "395,587,335", ortHacim: "182,537,091", artis: "116.72" },
  { sembol: "ZRGYO", islemHacmi: "35,342,897", ortHacim: "17,082,762", artis: "106.89" },
  { sembol: "MIATK", islemHacmi: "1,813,513,792", ortHacim: "893,253,090", artis: "103.02" },
  { sembol: "UNLU", islemHacmi: "160,241,813", ortHacim: "79,104,609", artis: "102.57" },
  { sembol: "ZOREN", islemHacmi: "118,993,817", ortHacim: "60,053,849", artis: "98.15" },
  { sembol: "AKMGY", islemHacmi: "10,304,730", ortHacim: "5,212,289", artis: "97.70" },
  { sembol: "GARAN", islemHacmi: "5,505,421,891", ortHacim: "2,787,294,548", artis: "97.52" },
  { sembol: "KRONT", islemHacmi: "20,343,229", ortHacim: "10,304,372", artis: "97.42" },
  { sembol: "ISBIR", islemHacmi: "1,978,229", ortHacim: "1,003,339", artis: "97.16" },
  { sembol: "PRKAB", islemHacmi: "17,891,213", ortHacim: "9,113,861", artis: "96.31" },
  { sembol: "BIMAS", islemHacmi: "7,611,524,163", ortHacim: "3,918,162,581", artis: "94.26" },
  { sembol: "DESA", islemHacmi: "24,999,609", ortHacim: "12,916,735", artis: "93.54" },
  { sembol: "TRHOL", islemHacmi: "275,487", ortHacim: "142,632", artis: "93.15" },
  { sembol: "DMLKTG", islemHacmi: "50,380,882", ortHacim: "26,481,606", artis: "90.25" },
  { sembol: "AKHAN", islemHacmi: "90,380,795", ortHacim: "47,620,418", artis: "89.79" },
  { sembol: "GEDIK", islemHacmi: "28,257,876", ortHacim: "15,059,903", artis: "87.64" },
  { sembol: "NTHOL", islemHacmi: "155,591,097", ortHacim: "82,998,788", artis: "87.46" },
  { sembol: "VAKKO", islemHacmi: "13,711,520", ortHacim: "7,500,942", artis: "82.80" },
  { sembol: "SEYKM", islemHacmi: "4,781,930", ortHacim: "2,627,298", artis: "82.01" },
  { sembol: "ICUGS", islemHacmi: "217,536,662", ortHacim: "119,673,250", artis: "81.78" },
  { sembol: "BRKSN", islemHacmi: "2,953,785", ortHacim: "1,638,839", artis: "80.24" },
  { sembol: "ALBTN", islemHacmi: "116,651,182", ortHacim: "64,819,982", artis: "79.96" },
  { sembol: "EDIP", islemHacmi: "21,050,418", ortHacim: "11,766,917", artis: "78.89" },
  { sembol: "SONME", islemHacmi: "3,648,496", ortHacim: "2,057,064", artis: "77.36" },
  { sembol: "DZGYO", islemHacmi: "38,794,701", ortHacim: "21,967,959", artis: "76.60" },
  { sembol: "ANGEN", islemHacmi: "60,825,705", ortHacim: "34,839,910", artis: "74.59" },
  { sembol: "BLUME", islemHacmi: "60,801,359", ortHacim: "35,129,906", artis: "73.08" },
  { sembol: "ALCAR", islemHacmi: "124,389,708", ortHacim: "72,030,436", artis: "72.69" },
  { sembol: "AVPGY", islemHacmi: "53,019,306", ortHacim: "30,767,219", artis: "72.32" },
  { sembol: "AVHOL", islemHacmi: "75,132,282", ortHacim: "43,690,701", artis: "71.96" },
  { sembol: "TEZOL", islemHacmi: "21,168,846", ortHacim: "12,342,951", artis: "71.51" },
  { sembol: "ODAS", islemHacmi: "250,703,105", ortHacim: "146,204,508", artis: "71.47" },
  { sembol: "BRYAT", islemHacmi: "91,684,204", ortHacim: "53,945,513", artis: "69.96" },
  { sembol: "BORSK", islemHacmi: "22,142,290", ortHacim: "13,083,226", artis: "69.24" },
  { sembol: "DESPC", islemHacmi: "6,120,645", ortHacim: "3,624,837", artis: "68.85" },
];

export default function HaftalikHacimArtisiPage() {
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
          Haftalık Hacim Artışı Olanlar
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
            Haftalık Hacim Artışı Olan Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık hacim artışı olan hisseler sayfası, son işlem hacmi ile haftalık
            ortalama hacim arasında belirgin fark bulunan hisseleri takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi
            dikkat çekici şekilde artan hisseleri toplu olarak inceleyebilir,
            piyasadaki güçlü ilgi gören şirketleri daha kolay belirleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hacim artışı, teknik analizde fiyat hareketinin gücünü destekleyen
            önemli göstergelerden biridir. Özellikle haftalık ortalama hacme göre
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
            haftalık ortalamaya göre yükselen hisseler ve borsa teknik takip ekranları
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

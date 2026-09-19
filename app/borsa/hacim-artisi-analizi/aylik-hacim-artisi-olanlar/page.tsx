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
  { sembol: "ULAK", islemHacmi: "564,431,946", ortHacim: "91,698,157", artis: "515.53" },
  { sembol: "ZRGYO", islemHacmi: "169,507,829", ortHacim: "32,483,823", artis: "421.82" },
  { sembol: "UNLU", islemHacmi: "115,383,408", ortHacim: "23,738,196", artis: "386.07" },
  { sembol: "ANHYT", islemHacmi: "344,143,110", ortHacim: "87,405,957", artis: "293.73" },
  { sembol: "MAVI", islemHacmi: "881,068,140", ortHacim: "234,875,799", artis: "275.12" },
  { sembol: "INVEO", islemHacmi: "109,846,829", ortHacim: "30,662,898", artis: "258.24" },
  { sembol: "ASUZU", islemHacmi: "73,568,922", ortHacim: "21,312,534", artis: "245.19" },
  { sembol: "GLRMK", islemHacmi: "2,984,115,239", ortHacim: "896,304,921", artis: "232.94" },
  { sembol: "MTRYO", islemHacmi: "8,821,137", ortHacim: "2,715,582", artis: "224.83" },
  { sembol: "KONTR", islemHacmi: "48,736,569", ortHacim: "15,147,448", artis: "221.75" },
  { sembol: "BANVT", islemHacmi: "52,335,441", ortHacim: "16,896,754", artis: "209.74" },
  { sembol: "ATLAS", islemHacmi: "19,984,693", ortHacim: "6,554,623", artis: "204.89" },
  { sembol: "ORCAY", islemHacmi: "16,186,647", ortHacim: "5,481,032", artis: "195.32" },
  { sembol: "LMKDC", islemHacmi: "309,894,553", ortHacim: "110,383,768", artis: "180.74" },
  { sembol: "DMRGD", islemHacmi: "1,380,775,567", ortHacim: "500,472,816", artis: "175.89" },
  { sembol: "PAGYO", islemHacmi: "53,069,342", ortHacim: "20,951,659", artis: "153.29" },
  { sembol: "GEDIK", islemHacmi: "135,733,885", ortHacim: "55,103,522", artis: "146.33" },
  { sembol: "GESAN", islemHacmi: "3,247,356,004", ortHacim: "1,319,203,937", artis: "146.16" },
  { sembol: "ALFAS", islemHacmi: "209,906,902", ortHacim: "85,377,040", artis: "145.86" },
  { sembol: "EMNIS", islemHacmi: "2,351,422", ortHacim: "1,000,789", artis: "134.96" },
  { sembol: "ARDYZ", islemHacmi: "976,853,306", ortHacim: "427,599,057", artis: "128.45" },
  { sembol: "YGGYO", islemHacmi: "69,444,492", ortHacim: "30,450,151", artis: "128.06" },
  { sembol: "RNPOL", islemHacmi: "18,781,045", ortHacim: "8,280,737", artis: "126.80" },
  { sembol: "BOSSA", islemHacmi: "47,815,500", ortHacim: "21,310,915", artis: "124.37" },
  { sembol: "SNGYO", islemHacmi: "204,415,744", ortHacim: "91,342,124", artis: "123.79" },
  { sembol: "LIDFA", islemHacmi: "61,176,182", ortHacim: "27,452,466", artis: "122.84" },
  { sembol: "DOCO", islemHacmi: "101,389,115", ortHacim: "47,951,300", artis: "111.44" },
  { sembol: "CEOEM", islemHacmi: "145,409,740", ortHacim: "70,960,437", artis: "104.92" },
  { sembol: "RYGYO", islemHacmi: "320,469,381", ortHacim: "159,980,565", artis: "100.32" },
  { sembol: "ISDMR", islemHacmi: "233,399,515", ortHacim: "119,323,253", artis: "95.60" },
  { sembol: "ANSGR", islemHacmi: "223,295,108", ortHacim: "117,818,719", artis: "89.52" },
  { sembol: "ENERY", islemHacmi: "1,346,899,563", ortHacim: "714,478,983", artis: "88.51" },
  { sembol: "KRDMB", islemHacmi: "435,956,711", ortHacim: "232,315,734", artis: "87.66" },
  { sembol: "PENTA", islemHacmi: "45,940,859", ortHacim: "24,517,071", artis: "87.38" },
  { sembol: "TKFEN", islemHacmi: "2,448,917,655", ortHacim: "1,314,867,479", artis: "86.25" },
  { sembol: "SEGMN", islemHacmi: "100,800,817", ortHacim: "55,007,930", artis: "83.25" },
  { sembol: "SNPAM", islemHacmi: "1,625,379", ortHacim: "889,557", artis: "82.72" },
  { sembol: "EUYO", islemHacmi: "7,339,481", ortHacim: "4,112,527", artis: "78.47" },
  { sembol: "EUPWR", islemHacmi: "3,322,186,354", ortHacim: "1,879,638,237", artis: "76.75" },
  { sembol: "AKCNS", islemHacmi: "201,788,922", ortHacim: "114,843,932", artis: "75.71" },
  { sembol: "MEGAP", islemHacmi: "1,847,803", ortHacim: "1,067,818", artis: "73.04" },
  { sembol: "RYSAS", islemHacmi: "920,362,126", ortHacim: "532,387,191", artis: "72.87" },
  { sembol: "USAK", islemHacmi: "80,603,451", ortHacim: "47,007,838", artis: "71.47" },
  { sembol: "DOHOL", islemHacmi: "474,253,190", ortHacim: "277,704,205", artis: "70.78" },
  { sembol: "DMSAS", islemHacmi: "30,634,212", ortHacim: "17,995,430", artis: "70.23" },
  { sembol: "ERBOS", islemHacmi: "13,339,639", ortHacim: "7,840,748", artis: "70.13" },
  { sembol: "ISGYO", islemHacmi: "82,808,389", ortHacim: "48,812,383", artis: "69.65" },
  { sembol: "AGHOL", islemHacmi: "304,991,496", ortHacim: "181,437,390", artis: "68.10" },
  { sembol: "POLTK", islemHacmi: "43,817,113", ortHacim: "26,295,948", artis: "66.63" },
  { sembol: "NUHCM", islemHacmi: "24,412,351", ortHacim: "14,779,093", artis: "65.18" },
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
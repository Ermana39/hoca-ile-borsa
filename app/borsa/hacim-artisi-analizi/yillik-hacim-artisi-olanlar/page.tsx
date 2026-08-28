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
  { sembol: "OZATD", islemHacmi: "8,824,079,295", ortHacim: "610,504,819", artis: "1,345.37" },
  { sembol: "TGSAS", islemHacmi: "483,978,330", ortHacim: "53,834,287", artis: "799.02" },
  { sembol: "PSDTC", islemHacmi: "218,404,626", ortHacim: "24,351,548", artis: "796.88" },
  { sembol: "BRLSM", islemHacmi: "953,030,309", ortHacim: "119,603,565", artis: "696.82" },
  { sembol: "RYSAS", islemHacmi: "1,192,005,529", ortHacim: "189,996,439", artis: "527.38" },
  { sembol: "HATSN", islemHacmi: "1,030,347,256", ortHacim: "164,564,553", artis: "526.11" },
  { sembol: "BAHKM", islemHacmi: "784,811,102", ortHacim: "127,613,905", artis: "514.99" },
  { sembol: "TEHOL", islemHacmi: "17,016,437,678", ortHacim: "2,923,339,876", artis: "482.09" },
  { sembol: "BJKAS", islemHacmi: "1,056,906,298", ortHacim: "205,850,593", artis: "413.43" },
  { sembol: "NETAS", islemHacmi: "298,546,214", ortHacim: "64,530,002", artis: "362.65" },
  { sembol: "PRZMA", islemHacmi: "411,957,185", ortHacim: "94,755,397", artis: "334.76" },
  { sembol: "SELEC", islemHacmi: "1,380,355,145", ortHacim: "330,205,708", artis: "318.03" },
  { sembol: "ALKLC", islemHacmi: "1,827,495,441", ortHacim: "454,774,968", artis: "301.85" },
  { sembol: "HKTM", islemHacmi: "361,192,405", ortHacim: "91,019,961", artis: "296.83" },
  { sembol: "TMPOL", islemHacmi: "800,012,254", ortHacim: "232,458,321", artis: "244.15" },
  { sembol: "SKBNK", islemHacmi: "1,909,607,051", ortHacim: "577,818,461", artis: "230.49" },
  { sembol: "NIBAS", islemHacmi: "320,276,100", ortHacim: "99,594,556", artis: "221.58" },
  { sembol: "AKFIS", islemHacmi: "771,225,283", ortHacim: "241,037,171", artis: "219.96" },
  { sembol: "ENSRI", islemHacmi: "872,223,031", ortHacim: "275,814,499", artis: "216.24" },
  { sembol: "VAKBN", islemHacmi: "4,629,925,844", ortHacim: "1,479,293,264", artis: "212.98" },
  { sembol: "UFUK", islemHacmi: "179,170,897", ortHacim: "58,732,318", artis: "205.06" },
  { sembol: "MAGEN", islemHacmi: "1,369,156,983", ortHacim: "461,405,864", artis: "196.74" },
  { sembol: "RYGYO", islemHacmi: "264,869,830", ortHacim: "89,931,506", artis: "194.52" },
  { sembol: "HUNER", islemHacmi: "295,076,599", ortHacim: "100,263,640", artis: "194.30" },
  { sembol: "ODINE", islemHacmi: "1,627,873,616", ortHacim: "571,944,953", artis: "184.62" },
  { sembol: "MARTI", islemHacmi: "389,921,374", ortHacim: "137,219,105", artis: "184.16" },
  { sembol: "CWENE", islemHacmi: "3,965,019,055", ortHacim: "1,401,586,638", artis: "182.90" },
  { sembol: "MRGYO", islemHacmi: "532,981,441", ortHacim: "191,449,512", artis: "178.39" },
  { sembol: "ODAS", islemHacmi: "1,183,560,251", ortHacim: "456,207,146", artis: "159.43" },
  { sembol: "BYDNR", islemHacmi: "57,390,901", ortHacim: "22,433,146", artis: "155.83" },
  { sembol: "KLYPV", islemHacmi: "363,972,380", ortHacim: "144,964,901", artis: "151.08" },
  { sembol: "ANELE", islemHacmi: "519,903,680", ortHacim: "216,716,350", artis: "139.90" },
  { sembol: "MTRKS", islemHacmi: "98,181,938", ortHacim: "40,997,701", artis: "139.48" },
  { sembol: "KRDMA", islemHacmi: "637,400,346", ortHacim: "268,944,298", artis: "137.00" },
  { sembol: "VBTYZ", islemHacmi: "173,158,866", ortHacim: "74,110,960", artis: "133.65" },
  { sembol: "OFSYM", islemHacmi: "208,995,633", ortHacim: "91,294,989", artis: "128.92" },
  { sembol: "CATES", islemHacmi: "193,195,419", ortHacim: "84,702,618", artis: "128.09" },
  { sembol: "PASEU", islemHacmi: "2,999,026,082", ortHacim: "1,325,676,092", artis: "126.23" },
  { sembol: "KARSN", islemHacmi: "421,551,712", ortHacim: "187,171,334", artis: "125.22" },
  { sembol: "BIOEN", islemHacmi: "274,993,319", ortHacim: "122,108,983", artis: "125.20" },
  { sembol: "ELITE", islemHacmi: "130,712,435", ortHacim: "58,766,058", artis: "122.43" },
  { sembol: "LIDER", islemHacmi: "611,650,621", ortHacim: "278,849,562", artis: "119.35" },
  { sembol: "GRTHO", islemHacmi: "621,126,380", ortHacim: "285,037,137", artis: "117.91" },
  { sembol: "CRFSA", islemHacmi: "372,817,677", ortHacim: "173,407,500", artis: "115.00" },
  { sembol: "KGYO", islemHacmi: "311,558,435", ortHacim: "145,903,859", artis: "113.54" },
  { sembol: "TNZTP", islemHacmi: "174,621,505", ortHacim: "82,637,464", artis: "111.31" },
  { sembol: "SAYAS", islemHacmi: "180,856,418", ortHacim: "86,879,382", artis: "108.17" },
  { sembol: "KBORU", islemHacmi: "449,648,572", ortHacim: "218,296,670", artis: "105.98" },
  { sembol: "DURDO", islemHacmi: "48,294,656", ortHacim: "23,537,673", artis: "105.18" },
  { sembol: "ENJSA", islemHacmi: "630,301,898", ortHacim: "311,200,916", artis: "102.54" },
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
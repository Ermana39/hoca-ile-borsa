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
  { sembol: "BJKAS", islemHacmi: "3,527,301,721", ortHacim: "171,060,266", artis: "1,962.02" },
  { sembol: "CRFSA", islemHacmi: "2,586,572,145", ortHacim: "160,894,470", artis: "1,507.62" },
  { sembol: "CEMZY", islemHacmi: "4,854,857,710", ortHacim: "304,175,661", artis: "1,496.07" },
  { sembol: "OZATD", islemHacmi: "5,406,963,728", ortHacim: "534,591,115", artis: "911.42" },
  { sembol: "NETAS", islemHacmi: "577,615,039", ortHacim: "62,446,367", artis: "824.98" },
  { sembol: "PRZMA", islemHacmi: "726,040,555", ortHacim: "87,580,886", artis: "728.99" },
  { sembol: "BOBET", islemHacmi: "581,303,497", ortHacim: "79,567,100", artis: "630.58" },
  { sembol: "UFUK", islemHacmi: "411,293,287", ortHacim: "57,821,421", artis: "611.32" },
  { sembol: "CATES", islemHacmi: "491,971,043", ortHacim: "82,329,211", artis: "497.57" },
  { sembol: "HATSN", islemHacmi: "860,786,410", ortHacim: "144,127,613", artis: "497.24" },
  { sembol: "HKTM", islemHacmi: "498,809,157", ortHacim: "86,439,310", artis: "477.06" },
  { sembol: "PCILT", islemHacmi: "327,151,349", ortHacim: "61,611,109", artis: "430.99" },
  { sembol: "ANELE", islemHacmi: "1,045,937,672", ortHacim: "200,021,735", artis: "422.91" },
  { sembol: "TGSAS", islemHacmi: "240,004,327", ortHacim: "45,931,503", artis: "422.53" },
  { sembol: "JANIS", islemHacmi: "376,364,325", ortHacim: "76,230,720", artis: "393.72" },
  { sembol: "AGROT", islemHacmi: "718,020,957", ortHacim: "163,461,499", artis: "339.26" },
  { sembol: "PSDTC", islemHacmi: "93,315,313", ortHacim: "22,345,918", artis: "317.59" },
  { sembol: "KLSER", islemHacmi: "182,228,759", ortHacim: "44,810,691", artis: "306.66" },
  { sembol: "HUNER", islemHacmi: "387,691,519", ortHacim: "99,262,465", artis: "290.57" },
  { sembol: "GUNDG", islemHacmi: "1,476,003,890", ortHacim: "388,582,942", artis: "279.84" },
  { sembol: "HEDEF", islemHacmi: "1,855,714,058", ortHacim: "499,152,776", artis: "271.77" },
  { sembol: "TKNSA", islemHacmi: "384,983,069", ortHacim: "106,700,527", artis: "260.81" },
  { sembol: "LIDER", islemHacmi: "916,950,187", ortHacim: "257,450,139", artis: "256.17" },
  { sembol: "BIGEN", islemHacmi: "1,049,124,888", ortHacim: "296,589,796", artis: "253.73" },
  { sembol: "OZKGY", islemHacmi: "245,051,685", ortHacim: "72,208,783", artis: "239.37" },
  { sembol: "RYSAS", islemHacmi: "615,384,788", ortHacim: "181,862,282", artis: "238.38" },
  { sembol: "KTLEV", islemHacmi: "10,350,171,792", ortHacim: "3,078,798,630", artis: "236.18" },
  { sembol: "MEGMT", islemHacmi: "1,723,085,276", ortHacim: "534,821,565", artis: "222.18" },
  { sembol: "GUBRF", islemHacmi: "3,501,530,631", ortHacim: "1,117,749,119", artis: "213.27" },
  { sembol: "DESA", islemHacmi: "85,206,342", ortHacim: "27,322,939", artis: "211.85" },
  { sembol: "ALTNY", islemHacmi: "1,423,147,117", ortHacim: "467,342,240", artis: "204.52" },
  { sembol: "CWENE", islemHacmi: "3,948,080,845", ortHacim: "1,360,375,562", artis: "190.22" },
  { sembol: "DNISI", islemHacmi: "80,598,203", ortHacim: "27,988,239", artis: "187.97" },
  { sembol: "PAGYO", islemHacmi: "64,554,378", ortHacim: "22,509,121", artis: "186.79" },
  { sembol: "ARSAN", islemHacmi: "290,729,729", ortHacim: "104,650,079", artis: "177.81" },
  { sembol: "MAKIM", islemHacmi: "112,461,530", ortHacim: "40,609,880", artis: "176.93" },
  { sembol: "ALFAS", islemHacmi: "449,334,162", ortHacim: "163,681,599", artis: "174.52" },
  { sembol: "DEVA", islemHacmi: "128,570,958", ortHacim: "46,979,676", artis: "173.67" },
  { sembol: "GSDDE", islemHacmi: "171,746,736", ortHacim: "65,023,327", artis: "164.13" },
  { sembol: "MTRKS", islemHacmi: "104,328,824", ortHacim: "40,330,419", artis: "158.69" },
  { sembol: "TKFEN", islemHacmi: "1,770,655,390", ortHacim: "685,002,917", artis: "158.49" },
  { sembol: "KGYO", islemHacmi: "363,303,803", ortHacim: "142,242,649", artis: "155.41" },
  { sembol: "DUNYH", islemHacmi: "324,072,358", ortHacim: "128,608,869", artis: "151.98" },
  { sembol: "AVHOL", islemHacmi: "180,751,700", ortHacim: "72,285,056", artis: "150.05" },
  { sembol: "SELEC", islemHacmi: "739,534,951", ortHacim: "297,516,615", artis: "148.57" },
  { sembol: "SARAE", islemHacmi: "6,700,361,806", ortHacim: "2,798,832,190", artis: "139.40" },
  { sembol: "KERVN", islemHacmi: "13,169,222", ortHacim: "5,513,470", artis: "138.86" },
  { sembol: "BLCYT", islemHacmi: "216,972,080", ortHacim: "91,013,553", artis: "138.40" },
  { sembol: "ONCSM", islemHacmi: "508,268,734", ortHacim: "214,212,092", artis: "137.27" },
  { sembol: "EUKYO", islemHacmi: "25,581,197", ortHacim: "10,889,057", artis: "134.93" },
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
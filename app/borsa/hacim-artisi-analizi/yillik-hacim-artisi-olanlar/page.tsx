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
  { sembol: "OZATD", islemHacmi: "7,276,732,105", ortHacim: "480,315,886", artis: "1,414.99" },
  { sembol: "CRFSA", islemHacmi: "1,771,560,268", ortHacim: "136,596,975", artis: "1,196.92" },
  { sembol: "BIGEN", islemHacmi: "3,061,269,203", ortHacim: "279,889,280", artis: "993.74" },
  { sembol: "GOODY", islemHacmi: "460,494,215", ortHacim: "49,536,624", artis: "829.60" },
  { sembol: "PRZMA", islemHacmi: "558,480,216", ortHacim: "73,761,417", artis: "657.14" },
  { sembol: "YAYLA", islemHacmi: "380,789,940", ortHacim: "52,563,532", artis: "624.44" },
  { sembol: "DESA", islemHacmi: "154,986,670", ortHacim: "26,679,526", artis: "480.92" },
  { sembol: "IZFAS", islemHacmi: "1,633,130,776", ortHacim: "295,120,992", artis: "453.38" },
  { sembol: "KORDS", islemHacmi: "585,963,503", ortHacim: "108,788,742", artis: "438.63" },
  { sembol: "LIDER", islemHacmi: "1,225,660,328", ortHacim: "229,904,865", artis: "433.12" },
  { sembol: "TMPOL", islemHacmi: "979,989,420", ortHacim: "191,022,378", artis: "413.02" },
  { sembol: "CWENE", islemHacmi: "6,601,296,725", ortHacim: "1,291,427,387", artis: "411.16" },
  { sembol: "HRKET", islemHacmi: "823,066,969", ortHacim: "164,494,021", artis: "400.36" },
  { sembol: "BIGIK", islemHacmi: "718,718,047", ortHacim: "147,589,204", artis: "386.97" },
  { sembol: "TKFEN", islemHacmi: "2,992,642,328", ortHacim: "658,113,175", artis: "354.73" },
  { sembol: "TCKRC", islemHacmi: "1,393,850,911", ortHacim: "310,922,355", artis: "348.30" },
  { sembol: "AYDEM", islemHacmi: "379,628,995", ortHacim: "88,897,843", artis: "327.04" },
  { sembol: "BJKAS", islemHacmi: "661,439,158", ortHacim: "156,126,335", artis: "323.66" },
  { sembol: "KGYO", islemHacmi: "543,308,292", ortHacim: "131,459,269", artis: "313.29" },
  { sembol: "BOBET", islemHacmi: "314,285,052", ortHacim: "76,818,722", artis: "309.13" },
  { sembol: "ATATP", islemHacmi: "1,149,372,746", ortHacim: "281,295,588", artis: "308.60" },
  { sembol: "MRSHL", islemHacmi: "263,110,144", ortHacim: "69,953,446", artis: "276.12" },
  { sembol: "BOSSA", islemHacmi: "99,219,683", ortHacim: "27,298,331", artis: "263.46" },
  { sembol: "BRSAN", islemHacmi: "3,864,058,229", ortHacim: "1,082,310,723", artis: "257.02" },
  { sembol: "KERVN", islemHacmi: "19,300,018", ortHacim: "5,498,883", artis: "250.98" },
  { sembol: "AYCES", islemHacmi: "323,196,292", ortHacim: "92,711,182", artis: "248.61" },
  { sembol: "RGYAS", islemHacmi: "997,767,011", ortHacim: "290,400,810", artis: "243.58" },
  { sembol: "LRSHO", islemHacmi: "558,950,386", ortHacim: "168,085,173", artis: "232.54" },
  { sembol: "ODINE", islemHacmi: "1,679,544,745", ortHacim: "519,774,128", artis: "223.13" },
  { sembol: "AYGAZ", islemHacmi: "595,455,482", ortHacim: "186,066,686", artis: "220.02" },
  { sembol: "CUSAN", islemHacmi: "115,791,037", ortHacim: "38,440,084", artis: "201.22" },
  { sembol: "OZSUB", islemHacmi: "202,321,534", ortHacim: "67,868,245", artis: "198.11" },
  { sembol: "AKMGY", islemHacmi: "33,198,516", ortHacim: "11,440,639", artis: "190.18" },
  { sembol: "ARASE", islemHacmi: "136,252,944", ortHacim: "47,767,595", artis: "185.24" },
  { sembol: "EFOR", islemHacmi: "2,770,821,826", ortHacim: "974,501,622", artis: "184.33" },
  { sembol: "ARMGD", islemHacmi: "479,061,262", ortHacim: "169,779,252", artis: "182.17" },
  { sembol: "DYOBY", islemHacmi: "222,593,183", ortHacim: "79,808,981", artis: "178.91" },
  { sembol: "PASEU", islemHacmi: "3,428,405,219", ortHacim: "1,237,631,988", artis: "177.01" },
  { sembol: "ATSYH", islemHacmi: "12,783,843", ortHacim: "4,674,823", artis: "173.46" },
  { sembol: "KRGYO", islemHacmi: "122,133,709", ortHacim: "45,756,349", artis: "166.92" },
  { sembol: "BRMEN", islemHacmi: "14,790,340", ortHacim: "5,564,638", artis: "165.79" },
  { sembol: "DGGYO", islemHacmi: "12,688,892", ortHacim: "4,900,404", artis: "158.94" },
  { sembol: "FORTE", islemHacmi: "459,467,427", ortHacim: "184,513,198", artis: "149.02" },
  { sembol: "AVGYO", islemHacmi: "78,396,995", ortHacim: "32,016,581", artis: "144.86" },
  { sembol: "SELEC", islemHacmi: "630,438,064", ortHacim: "265,301,966", artis: "137.63" },
  { sembol: "HEDEF", islemHacmi: "1,095,016,630", ortHacim: "467,263,455", artis: "134.35" },
  { sembol: "AKSA", islemHacmi: "571,632,655", ortHacim: "253,476,325", artis: "125.52" },
  { sembol: "ASELS", islemHacmi: "21,660,929,790", ortHacim: "9,868,906,283", artis: "119.49" },
  { sembol: "TGSAS", islemHacmi: "93,738,566", ortHacim: "43,997,078", artis: "113.06" },
  { sembol: "ICBCT", islemHacmi: "115,768,139", ortHacim: "55,260,315", artis: "109.50" },
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
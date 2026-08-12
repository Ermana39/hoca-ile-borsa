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
  { sembol: "CWENE", islemHacmi: "12,159,626,736", ortHacim: "1,135,405,009", artis: "970.95" },
  { sembol: "LIDER", islemHacmi: "1,930,081,060", ortHacim: "208,938,243", artis: "823.76" },
  { sembol: "FADE", islemHacmi: "331,374,492", ortHacim: "37,935,339", artis: "773.52" },
  { sembol: "GUNDG", islemHacmi: "2,966,557,844", ortHacim: "356,439,703", artis: "732.27" },
  { sembol: "OZATD", islemHacmi: "3,448,899,993", ortHacim: "433,580,637", artis: "695.45" },
  { sembol: "DCTTR", islemHacmi: "935,141,480", ortHacim: "157,942,767", artis: "492.08" },
  { sembol: "AYES", islemHacmi: "15,537,491", ortHacim: "3,096,002", artis: "401.86" },
  { sembol: "PSDTC", islemHacmi: "96,524,617", ortHacim: "20,910,348", artis: "361.61" },
  { sembol: "ODINE", islemHacmi: "2,269,267,070", ortHacim: "499,199,555", artis: "354.58" },
  { sembol: "EUYO", islemHacmi: "27,907,110", ortHacim: "6,270,273", artis: "345.07" },
  { sembol: "EBEBK", islemHacmi: "174,464,082", ortHacim: "42,244,262", artis: "312.99" },
  { sembol: "DESA", islemHacmi: "92,715,206", ortHacim: "26,747,015", artis: "246.64" },
  { sembol: "CMBTN", islemHacmi: "185,153,083", ortHacim: "53,881,963", artis: "243.63" },
  { sembol: "CRDFA", islemHacmi: "220,906,756", ortHacim: "66,883,558", artis: "230.29" },
  { sembol: "TMPOL", islemHacmi: "590,294,301", ortHacim: "183,893,298", artis: "221.00" },
  { sembol: "TKFEN", islemHacmi: "1,911,561,590", ortHacim: "605,947,543", artis: "215.47" },
  { sembol: "PRZMA", islemHacmi: "204,287,377", ortHacim: "66,827,591", artis: "205.69" },
  { sembol: "RYSAS", islemHacmi: "558,699,598", ortHacim: "185,048,147", artis: "201.92" },
  { sembol: "YAPRK", islemHacmi: "287,669,400", ortHacim: "95,285,623", artis: "201.90" },
  { sembol: "MPARK", islemHacmi: "896,139,319", ortHacim: "296,994,361", artis: "201.74" },
  { sembol: "OZSUB", islemHacmi: "188,390,097", ortHacim: "64,195,700", artis: "193.46" },
  { sembol: "KERVN", islemHacmi: "15,131,436", ortHacim: "5,233,963", artis: "189.10" },
  { sembol: "PRDGS", islemHacmi: "146,928,974", ortHacim: "51,438,523", artis: "185.64" },
  { sembol: "AYGAZ", islemHacmi: "471,219,693", ortHacim: "178,168,215", artis: "164.48" },
  { sembol: "KENT", islemHacmi: "8,349,600", ortHacim: "3,264,027", artis: "155.81" },
  { sembol: "BNTAS", islemHacmi: "91,678,049", ortHacim: "36,215,164", artis: "153.15" },
  { sembol: "KARTN", islemHacmi: "236,648,992", ortHacim: "94,412,517", artis: "150.65" },
  { sembol: "EDIP", islemHacmi: "135,573,300", ortHacim: "58,005,859", artis: "133.72" },
  { sembol: "ISBIR", islemHacmi: "6,117,430", ortHacim: "2,620,509", artis: "133.44" },
  { sembol: "RUBNS", islemHacmi: "252,753,671", ortHacim: "108,814,700", artis: "132.28" },
  { sembol: "HRKET", islemHacmi: "361,970,867", ortHacim: "156,670,303", artis: "131.04" },
  { sembol: "PASEU", islemHacmi: "2,752,133,905", ortHacim: "1,197,627,868", artis: "129.80" },
  { sembol: "PSGYO", islemHacmi: "2,070,027,236", ortHacim: "909,829,494", artis: "127.52" },
  { sembol: "HEDEF", islemHacmi: "1,032,250,185", ortHacim: "464,427,167", artis: "122.26" },
  { sembol: "EREGL", islemHacmi: "12,106,785,683", ortHacim: "5,464,613,647", artis: "121.55" },
  { sembol: "MRSHL", islemHacmi: "151,347,646", ortHacim: "68,319,903", artis: "121.53" },
  { sembol: "ALVES", islemHacmi: "862,693,605", ortHacim: "397,155,951", artis: "117.22" },
  { sembol: "SELEC", islemHacmi: "514,737,174", ortHacim: "241,138,247", artis: "113.46" },
  { sembol: "FORTE", islemHacmi: "363,950,366", ortHacim: "171,738,909", artis: "111.92" },
  { sembol: "INFO", islemHacmi: "380,642,981", ortHacim: "184,201,258", artis: "106.65" },
  { sembol: "BETAE", islemHacmi: "5,699,080,996", ortHacim: "2,781,610,888", artis: "104.88" },
  { sembol: "NETCD", islemHacmi: "2,923,142,217", ortHacim: "1,446,561,655", artis: "102.08" },
  { sembol: "TUPRS", islemHacmi: "11,831,364,007", ortHacim: "5,869,333,748", artis: "101.58" },
  { sembol: "YIGIT", islemHacmi: "212,464,669", ortHacim: "108,454,319", artis: "95.90" },
  { sembol: "DAPGM", islemHacmi: "1,596,553,324", ortHacim: "821,262,913", artis: "94.40" },
  { sembol: "PRKME", islemHacmi: "137,906,985", ortHacim: "72,458,275", artis: "90.33" },
  { sembol: "BALSU", islemHacmi: "713,863,348", ortHacim: "378,240,050", artis: "88.73" },
  { sembol: "TEZOL", islemHacmi: "145,363,207", ortHacim: "78,123,604", artis: "86.07" },
  { sembol: "FRIGO", islemHacmi: "238,401,852", ortHacim: "131,554,156", artis: "81.22" },
  { sembol: "DGNMO", islemHacmi: "62,737,407", ortHacim: "35,832,385", artis: "75.09" },
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

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
  { sembol: "DCTTR", islemHacmi: "935,141,480", ortHacim: "124,532,734", artis: "650.92" },
  { sembol: "FADE", islemHacmi: "331,374,492", ortHacim: "50,586,942", artis: "555.06" },
  { sembol: "YAPRK", islemHacmi: "287,869,400", ortHacim: "46,073,046", artis: "524.38" },
  { sembol: "ALVES", islemHacmi: "862,693,605", ortHacim: "166,697,628", artis: "417.52" },
  { sembol: "DESA", islemHacmi: "92,715,206", ortHacim: "21,251,674", artis: "336.27" },
  { sembol: "KENT", islemHacmi: "8,349,600", ortHacim: "1,974,971", artis: "322.77" },
  { sembol: "NETCD", islemHacmi: "2,923,142,217", ortHacim: "732,702,343", artis: "298.95" },
  { sembol: "MCARD", islemHacmi: "1,592,471,144", ortHacim: "405,060,521", artis: "293.14" },
  { sembol: "ISBIR", islemHacmi: "6,117,430", ortHacim: "1,574,543", artis: "288.52" },
  { sembol: "BNTAS", islemHacmi: "91,678,049", ortHacim: "23,726,032", artis: "286.40" },
  { sembol: "CWENE", islemHacmi: "12,159,626,736", ortHacim: "3,167,829,040", artis: "283.85" },
  { sembol: "EUYO", islemHacmi: "27,907,110", ortHacim: "7,374,234", artis: "278.44" },
  { sembol: "GUNDG", islemHacmi: "2,966,557,844", ortHacim: "796,622,467", artis: "272.39" },
  { sembol: "YIGIT", islemHacmi: "212,464,669", ortHacim: "58,801,189", artis: "261.33" },
  { sembol: "BRKVY", islemHacmi: "74,542,533", ortHacim: "20,689,067", artis: "260.30" },
  { sembol: "EBEBK", islemHacmi: "174,464,082", ortHacim: "49,658,813", artis: "251.33" },
  { sembol: "CMBTN", islemHacmi: "185,153,083", ortHacim: "55,488,370", artis: "233.68" },
  { sembol: "KRTEK", islemHacmi: "13,288,654", ortHacim: "4,057,584", artis: "227.50" },
  { sembol: "AYES", islemHacmi: "15,537,491", ortHacim: "4,902,618", artis: "216.92" },
  { sembol: "EDIP", islemHacmi: "135,573,300", ortHacim: "43,150,514", artis: "214.19" },
  { sembol: "ARFYE", islemHacmi: "518,871,666", ortHacim: "165,441,962", artis: "213.63" },
  { sembol: "ADEL", islemHacmi: "149,318,118", ortHacim: "47,832,787", artis: "212.17" },
  { sembol: "LILAK", islemHacmi: "198,060,597", ortHacim: "64,607,415", artis: "206.56" },
  { sembol: "SARKY", islemHacmi: "390,500,487", ortHacim: "132,789,669", artis: "194.07" },
  { sembol: "RUBNS", islemHacmi: "252,753,671", ortHacim: "90,343,778", artis: "179.77" },
  { sembol: "CRDFA", islemHacmi: "220,906,756", ortHacim: "85,088,000", artis: "159.62" },
  { sembol: "PRKME", islemHacmi: "137,906,985", ortHacim: "53,935,528", artis: "155.69" },
  { sembol: "MPARK", islemHacmi: "896,139,319", ortHacim: "351,510,001", artis: "154.94" },
  { sembol: "RODRG", islemHacmi: "12,998,025", ortHacim: "5,157,652", artis: "152.01" },
  { sembol: "FRIGO", islemHacmi: "238,401,852", ortHacim: "94,998,540", artis: "150.95" },
  { sembol: "ESCOM", islemHacmi: "339,541,892", ortHacim: "138,018,112", artis: "146.01" },
  { sembol: "YGGYO", islemHacmi: "61,159,219", ortHacim: "25,445,377", artis: "140.35" },
  { sembol: "RNPOL", islemHacmi: "14,596,991", ortHacim: "6,129,621", artis: "138.14" },
  { sembol: "PINSU", islemHacmi: "110,169,107", ortHacim: "46,981,057", artis: "134.50" },
  { sembol: "SANKO", islemHacmi: "13,358,636", ortHacim: "5,727,649", artis: "133.23" },
  { sembol: "EREGL", islemHacmi: "12,106,785,683", ortHacim: "5,206,229,108", artis: "132.54" },
  { sembol: "FORTE", islemHacmi: "363,950,366", ortHacim: "159,275,142", artis: "128.50" },
  { sembol: "TSPOR", islemHacmi: "613,638,458", ortHacim: "268,832,620", artis: "128.26" },
  { sembol: "ISDMR", islemHacmi: "185,324,020", ortHacim: "82,418,810", artis: "124.86" },
  { sembol: "SEGMN", islemHacmi: "149,512,251", ortHacim: "66,494,745", artis: "124.85" },
  { sembol: "AKMGY", islemHacmi: "15,894,575", ortHacim: "7,136,412", artis: "122.73" },
  { sembol: "ISGSY", islemHacmi: "242,222,718", ortHacim: "109,838,233", artis: "120.53" },
  { sembol: "RYSAS", islemHacmi: "558,699,598", ortHacim: "260,995,304", artis: "114.06" },
  { sembol: "PEKGY", islemHacmi: "4,219,897,072", ortHacim: "1,998,451,044", artis: "111.16" },
  { sembol: "PRDGS", islemHacmi: "146,928,974", ortHacim: "69,617,366", artis: "111.05" },
  { sembol: "LIDER", islemHacmi: "1,930,081,060", ortHacim: "919,207,108", artis: "109.97" },
  { sembol: "GLRMK", islemHacmi: "1,219,234,498", ortHacim: "593,772,212", artis: "105.34" },
  { sembol: "TEZOL", islemHacmi: "145,363,207", ortHacim: "71,486,897", artis: "103.34" },
  { sembol: "ANSGR", islemHacmi: "274,580,869", ortHacim: "135,181,376", artis: "103.12" },
  { sembol: "BUCIM", islemHacmi: "31,007,700", ortHacim: "15,381,058", artis: "101.60" },
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

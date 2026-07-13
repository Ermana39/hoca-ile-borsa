import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "BIGEN", islemHacmi: "1,218,247,128", ortHacim: "186,445,595", artis: "553.44" },
  { sembol: "ANELE", islemHacmi: "675,938,989", ortHacim: "109,434,252", artis: "517.67" },
  { sembol: "KGYO", islemHacmi: "693,758,473", ortHacim: "114,678,764", artis: "504.98" },
  { sembol: "KARTN", islemHacmi: "384,355,947", ortHacim: "67,890,553", artis: "466.14" },
  { sembol: "KRDMA", islemHacmi: "1,003,047,257", ortHacim: "219,621,287", artis: "356.72" },
  { sembol: "DMRGD", islemHacmi: "1,233,995,469", ortHacim: "293,520,359", artis: "320.41" },
  { sembol: "PNLSN", islemHacmi: "211,842,664", ortHacim: "53,491,796", artis: "296.03" },
  { sembol: "OZATD", islemHacmi: "1,044,935,816", ortHacim: "278,812,889", artis: "274.78" },
  { sembol: "KOCMT", islemHacmi: "465,101,742", ortHacim: "128,577,998", artis: "261.73" },
  { sembol: "CATES", islemHacmi: "240,761,564", ortHacim: "71,602,909", artis: "236.25" },
  { sembol: "BIGTK", islemHacmi: "418,029,677", ortHacim: "127,148,283", artis: "228.77" },
  { sembol: "ALCAR", islemHacmi: "113,536,817", ortHacim: "38,163,353", artis: "197.50" },
  { sembol: "MRSHL", islemHacmi: "196,561,234", ortHacim: "66,786,204", artis: "194.31" },
  { sembol: "ATSYH", islemHacmi: "12,988,375", ortHacim: "4,458,235", artis: "191.33" },
  { sembol: "TMPOL", islemHacmi: "454,660,287", ortHacim: "156,733,405", artis: "190.09" },
  { sembol: "ENERY", islemHacmi: "1,198,713,034", ortHacim: "414,418,532", artis: "189.25" },
  { sembol: "SUNTK", islemHacmi: "196,665,771", ortHacim: "71,877,369", artis: "173.61" },
  { sembol: "IZMDC", islemHacmi: "224,804,737", ortHacim: "83,487,150", artis: "169.27" },
  { sembol: "GUNDG", islemHacmi: "780,163,146", ortHacim: "302,125,699", artis: "158.22" },
  { sembol: "IHAAS", islemHacmi: "287,917,200", ortHacim: "114,312,971", artis: "151.87" },
  { sembol: "BETAE", islemHacmi: "4,576,694,977", ortHacim: "1,918,413,971", artis: "138.57" },
  { sembol: "DAGI", islemHacmi: "205,660,113", ortHacim: "87,153,690", artis: "135.97" },
  { sembol: "IEYHO", islemHacmi: "2,351,253,340", ortHacim: "1,010,605,605", artis: "132.66" },
  { sembol: "ISKUR", islemHacmi: "8,250,000", ortHacim: "3,633,123", artis: "127.08" },
  { sembol: "PRZMA", islemHacmi: "118,419,692", ortHacim: "52,644,007", artis: "124.94" },
  { sembol: "BRLSM", islemHacmi: "233,310,221", ortHacim: "107,593,326", artis: "116.84" },
  { sembol: "DUNYH", islemHacmi: "259,874,933", ortHacim: "123,264,551", artis: "110.83" },
  { sembol: "ASTOR", islemHacmi: "11,089,332,252", ortHacim: "5,260,616,652", artis: "110.80" },
  { sembol: "SVGYO", islemHacmi: "1,647,695,570", ortHacim: "785,056,967", artis: "109.88" },
  { sembol: "AYGAZ", islemHacmi: "333,001,417", ortHacim: "158,930,937", artis: "109.53" },
  { sembol: "VESBE", islemHacmi: "175,728,406", ortHacim: "84,174,470", artis: "108.77" },
  { sembol: "BYDNR", islemHacmi: "45,329,191", ortHacim: "21,744,400", artis: "108.46" },
  { sembol: "VESTL", islemHacmi: "464,956,100", ortHacim: "230,603,864", artis: "101.63" },
  { sembol: "LIDER", islemHacmi: "275,106,403", ortHacim: "140,012,352", artis: "96.49" },
  { sembol: "DGGYO", islemHacmi: "9,472,664", ortHacim: "4,889,039", artis: "93.75" },
  { sembol: "HEKTS", islemHacmi: "1,922,255,596", ortHacim: "996,032,894", artis: "92.99" },
  { sembol: "OBASE", islemHacmi: "51,380,601", ortHacim: "27,088,699", artis: "89.68" },
  { sembol: "ISGYO", islemHacmi: "173,511,575", ortHacim: "93,640,204", artis: "85.30" },
  { sembol: "GLBMD", islemHacmi: "11,891,525", ortHacim: "6,460,299", artis: "84.07" },
  { sembol: "YEOTK", islemHacmi: "962,030,102", ortHacim: "524,195,448", artis: "83.53" },
  { sembol: "ODINE", islemHacmi: "774,643,793", ortHacim: "423,325,684", artis: "82.99" },
  { sembol: "HATSN", islemHacmi: "229,176,980", ortHacim: "126,246,358", artis: "81.53" },
  { sembol: "GOODY", islemHacmi: "81,998,868", ortHacim: "47,027,734", artis: "74.36" },
  { sembol: "KORDS", islemHacmi: "164,529,671", ortHacim: "96,864,512", artis: "69.86" },
  { sembol: "SEYKM", islemHacmi: "23,695,803", ortHacim: "14,463,217", artis: "63.83" },
  { sembol: "BALSU", islemHacmi: "535,814,500", ortHacim: "328,463,112", artis: "63.13" },
  { sembol: "METRO", islemHacmi: "149,898,090", ortHacim: "92,272,399", artis: "62.45" },
  { sembol: "FORTE", islemHacmi: "267,841,075", ortHacim: "166,397,121", artis: "60.96" },
  { sembol: "TABGD", islemHacmi: "310,898,614", ortHacim: "202,924,850", artis: "53.21" },
  { sembol: "CWENE", islemHacmi: "1,361,438,329", ortHacim: "907,094,561", artis: "50.09" },
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
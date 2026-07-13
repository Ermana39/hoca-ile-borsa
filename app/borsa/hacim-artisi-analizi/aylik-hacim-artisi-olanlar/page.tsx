import Link from "next/link";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "BIGEN", islemHacmi: "1,218,247,128", ortHacim: "196,433,769", artis: "520.18" },
  { sembol: "SUNTK", islemHacmi: "196,665,771", ortHacim: "47,788,898", artis: "311.53" },
  { sembol: "PNLSN", islemHacmi: "211,842,664", ortHacim: "51,535,903", artis: "311.06" },
  { sembol: "SEYGO", islemHacmi: "94,192,645", ortHacim: "28,234,952", artis: "233.60" },
  { sembol: "CATES", islemHacmi: "240,761,564", ortHacim: "84,683,564", artis: "184.31" },
  { sembol: "KGYO", islemHacmi: "693,758,473", ortHacim: "244,432,209", artis: "183.82" },
  { sembol: "SNPAM", islemHacmi: "2,628,318", ortHacim: "967,165", artis: "171.75" },
  { sembol: "KRDMA", islemHacmi: "1,003,047,257", ortHacim: "375,574,535", artis: "167.07" },
  { sembol: "EMPAE", islemHacmi: "965,129,706", ortHacim: "363,334,016", artis: "165.63" },
  { sembol: "ANELE", islemHacmi: "675,938,989", ortHacim: "259,799,818", artis: "160.18" },
  { sembol: "BETAE", islemHacmi: "4,576,694,977", ortHacim: "1,918,413,971", artis: "138.57" },
  { sembol: "BAHKM", islemHacmi: "132,153,993", ortHacim: "55,395,409", artis: "138.56" },
  { sembol: "SVGYO", islemHacmi: "1,647,695,570", ortHacim: "728,677,033", artis: "126.12" },
  { sembol: "IZMDC", islemHacmi: "224,804,737", ortHacim: "106,242,572", artis: "111.60" },
  { sembol: "TMPOL", islemHacmi: "454,660,287", ortHacim: "219,687,863", artis: "106.96" },
  { sembol: "SONME", islemHacmi: "8,012,989", ortHacim: "3,896,753", artis: "105.63" },
  { sembol: "IEYHO", islemHacmi: "2,351,253,340", ortHacim: "1,163,430,498", artis: "102.10" },
  { sembol: "IHAAS", islemHacmi: "287,917,200", ortHacim: "143,243,261", artis: "101.00" },
  { sembol: "BVSAN", islemHacmi: "186,937,895", ortHacim: "96,940,843", artis: "92.84" },
  { sembol: "METRO", islemHacmi: "149,898,090", ortHacim: "78,259,805", artis: "91.54" },
  { sembol: "BALAT", islemHacmi: "6,527,303", ortHacim: "3,423,999", artis: "90.63" },
  { sembol: "ISKUR", islemHacmi: "8,250,000", ortHacim: "4,351,000", artis: "89.61" },
  { sembol: "BIGTK", islemHacmi: "418,029,677", ortHacim: "223,819,538", artis: "86.77" },
  { sembol: "FORTE", islemHacmi: "267,841,075", ortHacim: "145,482,446", artis: "84.11" },
  { sembol: "CEMAS", islemHacmi: "172,792,140", ortHacim: "96,770,784", artis: "78.56" },
  { sembol: "VESTL", islemHacmi: "464,956,100", ortHacim: "260,929,887", artis: "78.19" },
  { sembol: "ETILR", islemHacmi: "118,573,509", ortHacim: "66,793,078", artis: "77.52" },
  { sembol: "CASA", islemHacmi: "3,068,145", ortHacim: "1,748,568", artis: "75.47" },
  { sembol: "GZNMI", islemHacmi: "191,147,729", ortHacim: "109,463,554", artis: "74.62" },
  { sembol: "AYGAZ", islemHacmi: "333,001,417", ortHacim: "198,800,185", artis: "67.51" },
  { sembol: "SOKM", islemHacmi: "451,909,794", ortHacim: "270,221,940", artis: "67.24" },
  { sembol: "OBASE", islemHacmi: "51,380,601", ortHacim: "31,389,865", artis: "63.69" },
  { sembol: "ULUFA", islemHacmi: "59,707,424", ortHacim: "36,728,018", artis: "62.57" },
  { sembol: "ALCAR", islemHacmi: "113,536,817", ortHacim: "70,016,088", artis: "62.16" },
  { sembol: "OBAMS", islemHacmi: "383,261,733", ortHacim: "237,830,463", artis: "61.15" },
  { sembol: "LYDYE", islemHacmi: "29,524,120", ortHacim: "18,334,857", artis: "61.03" },
  { sembol: "INTEK", islemHacmi: "4,448,497", ortHacim: "2,784,354", artis: "59.77" },
  { sembol: "SASA", islemHacmi: "10,518,342,174", ortHacim: "6,603,540,998", artis: "59.28" },
  { sembol: "TSPOR", islemHacmi: "197,261,020", ortHacim: "124,027,582", artis: "59.05" },
  { sembol: "KARTN", islemHacmi: "384,355,947", ortHacim: "246,067,305", artis: "56.20" },
  { sembol: "LMKDC", islemHacmi: "209,605,793", ortHacim: "134,563,710", artis: "55.77" },
  { sembol: "VAKFN", islemHacmi: "95,175,108", ortHacim: "62,546,962", artis: "52.17" },
  { sembol: "POLHO", islemHacmi: "142,924,008", ortHacim: "93,947,667", artis: "52.13" },
  { sembol: "YKSLN", islemHacmi: "39,557,031", ortHacim: "26,383,266", artis: "49.93" },
  { sembol: "VESBE", islemHacmi: "175,728,406", ortHacim: "117,288,396", artis: "49.83" },
  { sembol: "BRLSM", islemHacmi: "233,310,221", ortHacim: "155,860,248", artis: "49.69" },
  { sembol: "YIGIT", islemHacmi: "109,432,319", ortHacim: "74,232,690", artis: "47.42" },
  { sembol: "DMRGD", islemHacmi: "1,233,995,469", ortHacim: "852,913,458", artis: "44.68" },
  { sembol: "GOLDA", islemHacmi: "45,145,002", ortHacim: "31,566,585", artis: "43.02" },
  { sembol: "EMKEL", islemHacmi: "253,768,879", ortHacim: "178,034,178", artis: "42.54" },
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
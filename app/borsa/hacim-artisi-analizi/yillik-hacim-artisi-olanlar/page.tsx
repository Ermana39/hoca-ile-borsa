import Link from "next/link";

const veriler = [
  { sembol: "GSDHO", islemHacmi: "725,132,705", ortHacim: "56,975,180", artis: "1172.72" },
  { sembol: "ISKPL", islemHacmi: "4,597,245,171", ortHacim: "384,067,746", artis: "1096.99" },
  { sembol: "PRZMA", islemHacmi: "239,487,686", ortHacim: "23,806,309", artis: "905.98" },
  { sembol: "ENSRI", islemHacmi: "1,533,898,916", ortHacim: "194,367,505", artis: "689.17" },
  { sembol: "BYDNR", islemHacmi: "159,817,262", ortHacim: "20,425,944", artis: "682.42" },
  { sembol: "GSDDE", islemHacmi: "330,256,664", ortHacim: "43,008,510", artis: "667.89" },
  { sembol: "CELHA", islemHacmi: "539,864,212", ortHacim: "71,678,646", artis: "653.17" },
  { sembol: "KNFRT", islemHacmi: "373,413,200", ortHacim: "50,921,691", artis: "633.31" },
  { sembol: "EUPWR", islemHacmi: "3,824,301,377", ortHacim: "537,145,362", artis: "611.97" },
  { sembol: "AVHOL", islemHacmi: "585,788,332", ortHacim: "83,233,564", artis: "603.79" },
  { sembol: "HRKET", islemHacmi: "834,663,341", ortHacim: "129,811,387", artis: "542.98" },
  { sembol: "AKENR", islemHacmi: "1,131,779,469", ortHacim: "177,731,646", artis: "536.79" },
  { sembol: "TLMAN", islemHacmi: "163,807,127", ortHacim: "25,958,494", artis: "531.03" },
  { sembol: "BRLSM", islemHacmi: "504,148,247", ortHacim: "88,684,440", artis: "468.47" },
  { sembol: "DITAS", islemHacmi: "522,735,188", ortHacim: "93,245,908", artis: "460.60" },
  { sembol: "ARDYZ", islemHacmi: "1,010,944,692", ortHacim: "189,763,807", artis: "432.74" },
  { sembol: "ICBCT", islemHacmi: "261,256,551", ortHacim: "49,711,349", artis: "425.55" },
  { sembol: "AYCES", islemHacmi: "439,772,250", ortHacim: "83,746,702", artis: "425.12" },
  { sembol: "HATSN", islemHacmi: "499,974,365", ortHacim: "96,000,841", artis: "420.80" },
  { sembol: "ALFAS", islemHacmi: "714,038,898", ortHacim: "140,799,024", artis: "407.13" },
  { sembol: "CUSAN", islemHacmi: "174,541,667", ortHacim: "34,847,037", artis: "400.88" },
  { sembol: "KGYO", islemHacmi: "453,114,408", ortHacim: "91,887,141", artis: "393.12" },
  { sembol: "DAPGM", islemHacmi: "2,719,760,652", ortHacim: "578,952,082", artis: "369.77" },
  { sembol: "GEDZA", islemHacmi: "212,634,860", ortHacim: "45,858,627", artis: "363.67" },
  { sembol: "MARKA", islemHacmi: "341,049,588", ortHacim: "74,301,186", artis: "359.01" },
  { sembol: "GESAN", islemHacmi: "1,657,724,778", ortHacim: "380,601,036", artis: "335.55" },
  { sembol: "OZGYO", islemHacmi: "247,769,344", ortHacim: "58,713,694", artis: "322.00" },
  { sembol: "SANEL", islemHacmi: "55,964,659", ortHacim: "13,690,283", artis: "308.79" },
  { sembol: "ASTOR", islemHacmi: "17,420,192,914", ortHacim: "4,289,219,107", artis: "306.14" },
  { sembol: "BIOEN", islemHacmi: "418,716,650", ortHacim: "103,959,892", artis: "302.77" },
  { sembol: "AIYEN", islemHacmi: "384,353,694", ortHacim: "96,697,907", artis: "297.48" },
  { sembol: "BRSAN", islemHacmi: "3,426,778,082", ortHacim: "877,372,690", artis: "290.57" },
  { sembol: "TCKRC", islemHacmi: "860,510,598", ortHacim: "221,706,366", artis: "288.13" },
  { sembol: "MAGEN", islemHacmi: "1,336,650,575", ortHacim: "350,336,194", artis: "281.53" },
  { sembol: "KFEIN", islemHacmi: "257,161,596", ortHacim: "67,446,725", artis: "281.28" },
  { sembol: "BESTE", islemHacmi: "2,424,996,047", ortHacim: "641,984,196", artis: "277.73" },
  { sembol: "NUGYO", islemHacmi: "182,713,286", ortHacim: "48,849,174", artis: "274.04" },
  { sembol: "SAYAS", islemHacmi: "298,117,542", ortHacim: "83,043,725", artis: "258.99" },
  { sembol: "IDGYO", islemHacmi: "39,306,982", ortHacim: "11,011,432", artis: "256.97" },
  { sembol: "IZENR", islemHacmi: "1,907,789,732", ortHacim: "535,323,607", artis: "256.38" },
  { sembol: "SEKUR", islemHacmi: "47,082,322", ortHacim: "13,686,019", artis: "243.97" },
  { sembol: "GENKM", islemHacmi: "2,318,464,108", ortHacim: "684,347,161", artis: "238.78" },
  { sembol: "ASUZU", islemHacmi: "182,507,130", ortHacim: "53,885,585", artis: "238.69" },
  { sembol: "MAALT", islemHacmi: "252,834,898", ortHacim: "78,031,891", artis: "224.01" },
  { sembol: "OBASE", islemHacmi: "81,553,941", ortHacim: "25,171,557", artis: "223.99" },
  { sembol: "FLAP", islemHacmi: "51,443,578", ortHacim: "16,106,716", artis: "219.39" },
  { sembol: "AVOD", islemHacmi: "239,406,156", ortHacim: "82,865,348", artis: "188.91" },
  { sembol: "YBTYZ", islemHacmi: "185,206,251", ortHacim: "64,320,666", artis: "187.94" },
  { sembol: "SOKE", islemHacmi: "134,797,555", ortHacim: "47,571,018", artis: "183.36" },
  { sembol: "GARFA", islemHacmi: "106,546,079", ortHacim: "38,460,279", artis: "177.03" },
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
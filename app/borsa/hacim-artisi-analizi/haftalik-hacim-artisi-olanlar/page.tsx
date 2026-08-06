import Link from "@/components/NoPrefetchLink";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "KUVVA", islemHacmi: "330,836,989", ortHacim: "76,042,961", artis: "335.07" },
  { sembol: "TRHOL", islemHacmi: "3,002,696,696", ortHacim: "802,656,779", artis: "274.09" },
  { sembol: "BEYAZ", islemHacmi: "116,168,823", ortHacim: "34,820,989", artis: "233.62" },
  { sembol: "BIGEN", islemHacmi: "11,408,780,010", ortHacim: "3,484,518,850", artis: "227.41" },
  { sembol: "ERCB", islemHacmi: "144,278,439", ortHacim: "49,117,032", artis: "193.74" },
  { sembol: "MEYSU", islemHacmi: "690,380,355", ortHacim: "245,824,552", artis: "180.84" },
  { sembol: "OTKAR", islemHacmi: "596,811,766", ortHacim: "215,573,457", artis: "176.85" },
  { sembol: "PAGYO", islemHacmi: "55,757,796", ortHacim: "20,325,832", artis: "174.32" },
  { sembol: "BORSK", islemHacmi: "183,258,635", ortHacim: "67,338,988", artis: "172.14" },
  { sembol: "GENIL", islemHacmi: "971,523,742", ortHacim: "359,808,967", artis: "170.01" },
  { sembol: "RUZYE", islemHacmi: "227,182,808", ortHacim: "84,305,306", artis: "169.48" },
  { sembol: "HURGZ", islemHacmi: "109,504,887", ortHacim: "41,379,955", artis: "164.63" },
  { sembol: "MARMR", islemHacmi: "479,834,375", ortHacim: "188,625,399", artis: "154.38" },
  { sembol: "KCAER", islemHacmi: "544,416,323", ortHacim: "217,071,855", artis: "150.80" },
  { sembol: "DIRIT", islemHacmi: "6,863,202", ortHacim: "2,757,718", artis: "148.87" },
  { sembol: "AGYO", islemHacmi: "8,491,990", ortHacim: "3,497,098", artis: "142.83" },
  { sembol: "ARZUM", islemHacmi: "69,791,476", ortHacim: "28,777,755", artis: "142.52" },
  { sembol: "DESA", islemHacmi: "37,021,187", ortHacim: "15,343,330", artis: "141.29" },
  { sembol: "SMART", islemHacmi: "173,814,440", ortHacim: "74,059,521", artis: "134.70" },
  { sembol: "ECOGR", islemHacmi: "1,965,646,126", ortHacim: "844,115,603", artis: "132.86" },
  { sembol: "HATEK", islemHacmi: "50,387,948", ortHacim: "22,458,535", artis: "124.36" },
  { sembol: "PENGD", islemHacmi: "69,385,132", ortHacim: "31,177,203", artis: "122.55" },
  { sembol: "TKNSA", islemHacmi: "75,578,861", ortHacim: "34,346,922", artis: "120.05" },
  { sembol: "ISBIR", islemHacmi: "3,705,909", ortHacim: "1,697,169", artis: "118.36" },
  { sembol: "SELVA", islemHacmi: "134,398,795", ortHacim: "61,719,783", artis: "117.76" },
  { sembol: "DURDO", islemHacmi: "26,549,732", ortHacim: "12,373,598", artis: "114.57" },
  { sembol: "GOLDA", islemHacmi: "3,959,714,428", ortHacim: "1,846,568,476", artis: "114.44" },
  { sembol: "INTEM", islemHacmi: "13,764,120", ortHacim: "6,490,198", artis: "112.08" },
  { sembol: "DESPC", islemHacmi: "342,082,417", ortHacim: "161,576,365", artis: "111.72" },
  { sembol: "EPLAS", islemHacmi: "29,211,170", ortHacim: "13,863,693", artis: "110.70" },
  { sembol: "ERSU", islemHacmi: "21,171,321", ortHacim: "10,285,815", artis: "105.83" },
  { sembol: "ISSEN", islemHacmi: "10,156,750", ortHacim: "4,944,963", artis: "105.40" },
  { sembol: "BASGZ", islemHacmi: "24,793,544", ortHacim: "12,112,389", artis: "104.70" },
  { sembol: "SKYLP", islemHacmi: "35,585,943", ortHacim: "17,557,298", artis: "102.68" },
  { sembol: "KARSN", islemHacmi: "234,749,274", ortHacim: "116,035,541", artis: "102.31" },
  { sembol: "SRVGY", islemHacmi: "94,649,145", ortHacim: "47,695,001", artis: "98.45" },
  { sembol: "TRENU", islemHacmi: "353,771,940", ortHacim: "178,341,924", artis: "98.37" },
  { sembol: "SOHOE", islemHacmi: "1,056,616,835", ortHacim: "534,449,039", artis: "97.70" },
  { sembol: "ERBOS", islemHacmi: "22,130,990", ortHacim: "11,269,535", artis: "96.38" },
  { sembol: "ULUUN", islemHacmi: "322,589,974", ortHacim: "164,768,085", artis: "95.78" },
  { sembol: "TGSAS", islemHacmi: "71,432,609", ortHacim: "36,541,480", artis: "95.48" },
  { sembol: "PEKGY", islemHacmi: "3,539,287,274", ortHacim: "1,832,125,856", artis: "93.18" },
  { sembol: "ARTMS", islemHacmi: "96,645,368", ortHacim: "50,258,486", artis: "92.30" },
  { sembol: "NETAS", islemHacmi: "40,381,739", ortHacim: "21,335,433", artis: "89.27" },
  { sembol: "MAVI", islemHacmi: "209,801,633", ortHacim: "111,633,485", artis: "87.94" },
  { sembol: "TEZOL", islemHacmi: "80,122,533", ortHacim: "43,582,866", artis: "83.84" },
  { sembol: "TRALT", islemHacmi: "16,286,358,673", ortHacim: "8,903,471,741", artis: "82.92" },
  { sembol: "BYDNR", islemHacmi: "42,095,522", ortHacim: "23,188,617", artis: "81.54" },
  { sembol: "MARTI", islemHacmi: "157,245,607", ortHacim: "87,175,579", artis: "80.38" },
  { sembol: "TEHOL", islemHacmi: "2,552,147,862", ortHacim: "1,416,147,122", artis: "80.22" },
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

        <div className="overflow-x-auto rounded-2xl border border-purple-200 bg-purple-50 p-4">
          <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
            <thead className="bg-purple-100 text-zinc-700">
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
            ortalama hacim arasında dikkat çekici fark bulunan hisseleri takip etmek
            isteyen yatırımcılar için hazırlanmıştır. Bu sayfada işlem hacmi kısa
            vadede öne çıkan hisseleri toplu şekilde inceleyebilir, piyasadaki güncel
            hareketliliği daha hızlı analiz edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık bazda artan işlem hacmi, yatırımcı ilgisinin belirli hisselerde
            yoğunlaştığını gösterebilir. Özellikle fiyat hareketi ile birlikte görülen
            hacim artışı, teknik analizde güçlü sinyal olarak değerlendirilebilir ve
            hissede oluşan momentumun daha yakından takip edilmesine yardımcı olur.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan işlem hacmi, ortalama hacim ve artış oranı verileri
            sayesinde hangi hisselerin kısa vadede normal işlem düzeninin üzerine
            çıktığını kolayca görebilirsiniz. Bu veriler hem kısa vadeli traderlar
            hem de dikkat çeken hisse hareketlerini erkenden yakalamak isteyen
            yatırımcılar için önemli bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel haftalık hacim artışı olan hisseler, BIST işlem hacmi
            karşılaştırmaları, kısa vadeli hacim hareketleri ve teknik takip
            ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
import Link from "@/components/NoPrefetchLink";

export const metadata = { robots: { index: false, follow: true } };

const veriler = [
  { sembol: "KUVVA", islemHacmi: "330,836,989", ortHacim: "29,063,552", artis: "1,038.32" },
  { sembol: "BIGEN", islemHacmi: "11,408,780,010", ortHacim: "1,083,842,514", artis: "952.62" },
  { sembol: "DESPC", islemHacmi: "342,082,417", ortHacim: "49,922,741", artis: "585.22" },
  { sembol: "BEYAZ", islemHacmi: "116,168,823", ortHacim: "18,194,179", artis: "538.49" },
  { sembol: "TRHOL", islemHacmi: "3,002,696,696", ortHacim: "485,031,577", artis: "519.07" },
  { sembol: "RUZYE", islemHacmi: "227,182,808", ortHacim: "50,524,983", artis: "349.64" },
  { sembol: "DIRIT", islemHacmi: "6,863,202", ortHacim: "1,565,507", artis: "338.40" },
  { sembol: "BORSK", islemHacmi: "183,258,635", ortHacim: "42,370,352", artis: "332.52" },
  { sembol: "GOLDA", islemHacmi: "3,959,714,428", ortHacim: "918,442,964", artis: "331.13" },
  { sembol: "SUNTK", islemHacmi: "464,547,866", ortHacim: "117,580,414", artis: "295.00" },
  { sembol: "MEYSU", islemHacmi: "690,380,355", ortHacim: "182,068,151", artis: "279.19" },
  { sembol: "HURGZ", islemHacmi: "109,504,887", ortHacim: "29,178,741", artis: "275.29" },
  { sembol: "OZGYO", islemHacmi: "286,481,967", ortHacim: "76,566,300", artis: "274.18" },
  { sembol: "AGYO", islemHacmi: "8,491,990", ortHacim: "2,372,844", artis: "257.88" },
  { sembol: "ECOGR", islemHacmi: "1,965,646,126", ortHacim: "552,248,184", artis: "255.94" },
  { sembol: "INTEK", islemHacmi: "13,764,120", ortHacim: "3,972,758", artis: "246.46" },
  { sembol: "KUYAS", islemHacmi: "2,756,639,533", ortHacim: "906,830,019", artis: "203.99" },
  { sembol: "LIDER", islemHacmi: "1,399,396,604", ortHacim: "466,412,816", artis: "200.03" },
  { sembol: "KCAER", islemHacmi: "544,416,323", ortHacim: "182,839,917", artis: "197.76" },
  { sembol: "ERSU", islemHacmi: "21,171,321", ortHacim: "7,432,740", artis: "184.84" },
  { sembol: "ULUUN", islemHacmi: "322,589,974", ortHacim: "113,726,781", artis: "183.75" },
  { sembol: "CUSAN", islemHacmi: "45,846,651", ortHacim: "16,509,591", artis: "177.70" },
  { sembol: "TRALT", islemHacmi: "16,286,358,673", ortHacim: "6,048,353,810", artis: "169.27" },
  { sembol: "BJKAS", islemHacmi: "411,228,897", ortHacim: "154,632,588", artis: "165.94" },
  { sembol: "CEMZY", islemHacmi: "596,238,743", ortHacim: "237,581,920", artis: "150.96" },
  { sembol: "SKYLP", islemHacmi: "35,585,943", ortHacim: "14,504,816", artis: "145.34" },
  { sembol: "GENIL", islemHacmi: "971,523,742", ortHacim: "401,065,065", artis: "142.24" },
  { sembol: "ALKA", islemHacmi: "73,330,273", ortHacim: "30,717,893", artis: "138.72" },
  { sembol: "ANELE", islemHacmi: "1,160,001,029", ortHacim: "488,440,456", artis: "137.49" },
  { sembol: "EKGYO", islemHacmi: "5,829,449,945", ortHacim: "2,461,961,868", artis: "136.78" },
  { sembol: "MARTI", islemHacmi: "157,245,607", ortHacim: "67,290,255", artis: "133.68" },
  { sembol: "ISDMR", islemHacmi: "183,833,906", ortHacim: "79,040,434", artis: "132.58" },
  { sembol: "GZNMI", islemHacmi: "317,840,235", ortHacim: "137,222,238", artis: "131.62" },
  { sembol: "DURDO", islemHacmi: "26,549,732", ortHacim: "11,533,678", artis: "130.19" },
  { sembol: "ISKPL", islemHacmi: "1,537,894,557", ortHacim: "690,612,055", artis: "122.69" },
  { sembol: "SMART", islemHacmi: "173,814,440", ortHacim: "78,640,836", artis: "121.02" },
  { sembol: "ALVES", islemHacmi: "269,541,288", ortHacim: "122,194,863", artis: "120.58" },
  { sembol: "ENTRA", islemHacmi: "215,352,940", ortHacim: "98,150,729", artis: "119.41" },
  { sembol: "SRVGY", islemHacmi: "94,649,145", ortHacim: "43,204,224", artis: "119.07" },
  { sembol: "BIENY", islemHacmi: "118,177,501", ortHacim: "54,094,134", artis: "118.47" },
  { sembol: "TREND", islemHacmi: "353,771,940", ortHacim: "161,997,829", artis: "118.38" },
  { sembol: "IZMDC", islemHacmi: "417,086,157", ortHacim: "191,779,132", artis: "117.48" },
  { sembol: "DARDL", islemHacmi: "71,198,780", ortHacim: "32,797,056", artis: "117.09" },
  { sembol: "OZSUB", islemHacmi: "164,229,413", ortHacim: "75,877,081", artis: "116.44" },
  { sembol: "ISBIR", islemHacmi: "3,705,909", ortHacim: "1,728,074", artis: "114.45" },
  { sembol: "ECZYT", islemHacmi: "367,887,223", ortHacim: "173,212,551", artis: "112.39" },
  { sembol: "ERCB", islemHacmi: "144,278,439", ortHacim: "68,031,709", artis: "112.08" },
  { sembol: "GLRMK", islemHacmi: "1,075,295,711", ortHacim: "507,599,835", artis: "111.84" },
  { sembol: "MARMR", islemHacmi: "479,834,375", ortHacim: "227,088,478", artis: "111.30" },
  { sembol: "PAGYO", islemHacmi: "55,757,796", ortHacim: "26,505,439", artis: "110.36" },
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
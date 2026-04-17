import Link from "next/link";

const nisanTemettuleri = [
  { sembol: "NETCD", tarih: "30 Nisan 2026", verim: "% 3,04", brut: "₺4,38", net: "₺3,7226", toplam: "₺599.999.994", oran: "%70" },
  { sembol: "OSMEN", tarih: "28 Nisan 2026", verim: "% 0,68", brut: "₺0,05", net: "₺0,0424", toplam: "₺19.999.992", oran: "%12" },
  { sembol: "YUNSA", tarih: "27 Nisan 2026", verim: "% 4,35", brut: "₺0,37", net: "₺0,3107", toplam: "₺175.428.896", oran: "%56" },
  { sembol: "CLEBI", tarih: "24 Nisan 2026", verim: "% 5,56", brut: "₺103,00", net: "₺87,5500", toplam: "₺2.502.900.000", oran: "%69" },
  { sembol: "KSTUR", tarih: "20 Nisan 2026", verim: "% 0,53", brut: "₺16,00", net: "₺13,6000", toplam: "₺67.913.386", oran: "%81" },
  { sembol: "AKSGY", tarih: "20 Nisan 2026", verim: "% 5,02", brut: "₺0,46", net: "₺0,4555", toplam: "₺1.099.999.898", oran: "%35" },
  { sembol: "SELEC", tarih: "17 Nisan 2026", verim: "% 0,52", brut: "₺0,44", net: "₺0,3740", toplam: "₺273.240.000", oran: "" },
  { sembol: "AKMGY", tarih: "15 Nisan 2026", verim: "% 4,02", brut: "₺12,36", net: "₺12,3600", toplam: "₺460.583.640", oran: "%80" },
  { sembol: "BEGYO", tarih: "15 Nisan 2026", verim: "% 0,48", brut: "₺0,02", net: "₺0,0215", toplam: "₺17.499.925", oran: "%2" },
  { sembol: "ALBRK", tarih: "15 Nisan 2026", verim: "% 2,98", brut: "₺0,26", net: "₺0,2225", toplam: "₺654.505.000", oran: "%10" },
  { sembol: "VAKKO", tarih: "14 Nisan 2026", verim: "% 6,95", brut: "₺6,25", net: "₺5,3125", toplam: "₺1.000.000.000", oran: "%1645" },
  { sembol: "GLCVY", tarih: "13 Nisan 2026", verim: "% 3,85", brut: "₺2,51", net: "₺2,1296", toplam: "₺349.999.993", oran: "%22" },
  { sembol: "ENJSA", tarih: "13 Nisan 2026", verim: "% 4,17", brut: "₺5,08", net: "₺4,3180", toplam: "₺5.999.830.353", oran: "%188" },
  { sembol: "BRYAT", tarih: "8 Nisan 2026", verim: "% 8,15", brut: "₺166,15", net: "₺141,2239", toplam: "₺4.672.850.940", oran: "%100" },
  { sembol: "ENKAI", tarih: "8 Nisan 2026", verim: "% 2,31", brut: "₺2,10", net: "₺1,7943", toplam: "₺12.600.000.000", oran: "%52" },
  { sembol: "GARAN", tarih: "7 Nisan 2026", verim: "% 4,04", brut: "₺5,27", net: "₺4,4769", toplam: "₺22.120.926.240", oran: "%20" },
  { sembol: "YGGYO", tarih: "7 Nisan 2026", verim: "% 5,06", brut: "₺10,55", net: "₺10,5500", toplam: "₺2.552.256.000", oran: "%48" },
  { sembol: "ULUFA", tarih: "6 Nisan 2026", verim: "% 5,36", brut: "₺0,25", net: "₺0,2100", toplam: "₺133.411.806", oran: "%18" },
  { sembol: "AKSA", tarih: "3 Nisan 2026", verim: "% 5,48", brut: "₺0,58", net: "₺0,4930", toplam: "₺2.253.300.000", oran: "%56" },
  { sembol: "ANSGR", tarih: "1 Nisan 2026", verim: "% 5,33", brut: "₺1,38", net: "₺1,1688", toplam: "₺2.758.000.000", oran: "%20" },
  { sembol: "CIMSA", tarih: "1 Nisan 2026", verim: "% 1,54", brut: "₺0,74", net: "₺0,6292", toplam: "₺699.999.906", oran: "%22" },
  { sembol: "ISCTR", tarih: "1 Nisan 2026", verim: "% 4,28", brut: "₺0,54", net: "₺0,4586", toplam: "₺13.488.134.000", oran: "%20" },
  { sembol: "ISKUR", tarih: "1 Nisan 2026", verim: "% 0,09", brut: "₺8,55", net: "₺7,2710", toplam: "₺21.026", oran: "" },
  { sembol: "ISBTR", tarih: "1 Nisan 2026", verim: "% 0,09", brut: "₺2,04", net: "₺1,7316", toplam: "₺59.077", oran: "%76" },
  { sembol: "ISATR", tarih: "1 Nisan 2026", verim: "% 0,09", brut: "₺46,92", net: "₺39,8848", toplam: "₺46.923", oran: "%1739" },
  { sembol: "AFYON", tarih: "1 Nisan 2026", verim: "% 10,01", brut: "₺1,50", net: "₺1,2750", toplam: "₺600.000.000", oran: "%259" },
  { sembol: "ISMEN", tarih: "1 Nisan 2026", verim: "% 7,93", brut: "₺3,17", net: "₺2,6917", toplam: "₺4.749.999.980", oran: "%64" },
  { sembol: "SAHOL", tarih: "1 Nisan 2026", verim: "% 1,60", brut: "₺1,41", net: "₺1,3390", toplam: "₺2.969.007.455", oran: "%78" },
  { sembol: "ASGYO", tarih: "1 Nisan 2026", verim: "% 1,64", brut: "₺0,17", net: "₺0,1683", toplam: "₺110.921.957", oran: "%18" },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function NisanAyiTemettuTakvimiPage() {
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
            href="/temettu"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Nisan Ayı Temettü Takvimi
        </h1>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
            <thead className="bg-green-100 text-zinc-700">
              <tr>
                <th className="px-4 py-3 text-left">Sembol</th>
                <th className="px-4 py-3 text-left">Tarih</th>
                <th className="px-4 py-3 text-right">Temettü Verim (%)</th>
                <th className="px-4 py-3 text-right">Hisse Başı Brüt TL</th>
                <th className="px-4 py-3 text-right">Hisse Başı Net TL</th>
                <th className="px-4 py-3 text-right">Toplam Temettü (TL)</th>
                <th className="px-4 py-3 text-right">Dağıtma Oranı (%)</th>
              </tr>
            </thead>
            <tbody>
              {nisanTemettuleri.map((item, index) => (
  <tr
    key={`${item.sembol}-${item.tarih}`}
    className={`border-t border-zinc-100 ${index % 2 === 1 ? "bg-sky-50" : "bg-white"}`}
  >
                  <td className="px-4 py-3 font-semibold text-zinc-900">{item.sembol}</td>
                  <td className="px-4 py-3 text-zinc-700">{item.tarih}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.verim}</td>
                  <td className="px-4 py-3 text-right font-semibold text-zinc-900">{item.brut}</td>
                  <td className="px-4 py-3 text-right font-semibold text-zinc-900">{item.net}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.toplam}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.oran}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Nisan Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Nisan ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Nisan 2026 dönemindeki temettü dağıtım tarihlerini, hisse başına brüt ve net
            temettü tutarlarını ve toplam dağıtım büyüklüklerini takip etmek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfa sayesinde temettü veren hisseleri
            tek tabloda inceleyebilir ve ödeme detaylarını kolayca karşılaştırabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü yatırımı yapan kullanıcılar için dağıtım tarihi, temettü verimi,
            brüt ve net ödeme tutarı ile şirketlerin dağıtma oranı oldukça önemlidir.
            Özellikle düzenli kâr payı ödeyen şirketler, uzun vadeli temettü stratejisi
            kuran yatırımcılar açısından öne çıkarken, yüksek temettü verimi sunan
            hisseler de yakından takip edilmektedir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan Nisan 2026 temettü takvimi verileri sayesinde hangi şirketin
            hangi tarihte temettü vereceğini, hisse başına ne kadar ödeme yapacağını ve
            toplam temettü tutarını detaylı şekilde görebilirsiniz. Bu yapı, hem temettü
            emekliliği hedefleyen yatırımcılar hem de bilanço ve kâr dağıtım takibi yapan
            kullanıcılar için pratik bir referans ekranı sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Nisan ayı temettü takvimi, BIST temettü veren hisseler, hisse başı
            brüt ve net temettü ödemeleri, dağıtma oranları ve şirket bazlı temettü
            detaylarını takip etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
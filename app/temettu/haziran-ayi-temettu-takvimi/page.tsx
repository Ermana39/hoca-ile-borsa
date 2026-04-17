import Link from "next/link";

const haziranTemettuleri = [
  { sembol: "LOGO", tarih: "30 Haziran 2026", verim: "% 3,65", brut: "₺5,26", net: "₺4,4737", toplam: "₺499.999.991", oran: "%33" },
  { sembol: "ISSEN", tarih: "30 Haziran 2026", verim: "% 0,48", brut: "₺0,04", net: "₺0,0340", toplam: "₺16.975.919", oran: "" },
  { sembol: "ISKPL", tarih: "26 Haziran 2026", verim: "% 0,00", brut: "₺0,00", net: "₺0,0004", toplam: "₺646.650", oran: "%1" },
  { sembol: "AVPGY", tarih: "24 Haziran 2026", verim: "% 4,42", brut: "₺2,50", net: "₺2,5000", toplam: "₺1.000.000.000", oran: "%62" },
  { sembol: "CEMTS", tarih: "24 Haziran 2026", verim: "% 2,62", brut: "₺0,30", net: "₺0,2550", toplam: "₺150.000.000", oran: "" },
  { sembol: "EKGYO", tarih: "24 Haziran 2026", verim: "% 2,69", brut: "₺0,60", net: "₺0,6000", toplam: "₺2.280.000.000", oran: "%37" },
  { sembol: "PAGYO", tarih: "24 Haziran 2026", verim: "% 3,01", brut: "₺3,90", net: "₺3,9000", toplam: "₺339.300.000", oran: "%22" },
  { sembol: "KTLEV", tarih: "23 Haziran 2026", verim: "% 0,11", brut: "₺0,10", net: "₺0,0821", toplam: "₺199.999.881", oran: "%2" },
  { sembol: "BIMAS", tarih: "17 Haziran 2026", verim: "% 0,52", brut: "₺4,00", net: "₺3,4000", toplam: "₺2.400.000.000", oran: "%13" },
  { sembol: "BULGS", tarih: "15 Haziran 2026", verim: "% 0,21", brut: "₺0,09", net: "₺0,0933", toplam: "₺24.999.978", oran: "%2" },
  { sembol: "INDES", tarih: "15 Haziran 2026", verim: "% 2,17", brut: "₺0,22", net: "₺0,1847", toplam: "₺163.000.875", oran: "%34" },
  { sembol: "ATATP", tarih: "10 Haziran 2026", verim: "% 0,68", brut: "₺1,00", net: "₺0,8500", toplam: "₺93.750.000", oran: "%5" },
  { sembol: "YAPRK", tarih: "10 Haziran 2026", verim: "% 0,15", brut: "₺0,03", net: "₺0,0213", toplam: "₺7.455.000", oran: "%38" },
  { sembol: "AVPGY", tarih: "3 Haziran 2026", verim: "% 4,42", brut: "₺2,50", net: "₺2,5000", toplam: "₺1.000.000.000", oran: "%62" },
  { sembol: "SISE", tarih: "1 Haziran 2026", verim: "% 1,22", brut: "₺0,59", net: "₺0,4995", toplam: "₺1.799.999.717", oran: "%19" },
  { sembol: "AYES", tarih: "1 Haziran 2026", verim: "% 1,08", brut: "₺0,35", net: "₺0,3000", toplam: "₺52.941.165", oran: "%52" },
  { sembol: "MACKO", tarih: "1 Haziran 2026", verim: "% 6,48", brut: "₺2,70", net: "₺2,2950", toplam: "₺270.000.000", oran: "%84" },
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

export default function HaziranAyiTemettuTakvimiPage() {
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
          Haziran Ayı Temettü Takvimi
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
              {haziranTemettuleri.map((item, index) => (
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
            Haziran Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haziran ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Haziran 2026 dönemindeki temettü dağıtım tarihlerini, hisse başına brüt ve net
            temettü ödemelerini ve toplam dağıtım tutarlarını tek ekranda takip etmek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfa sayesinde temettü veren hisseleri tarih,
            verim ve ödeme tutarına göre detaylı şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü yatırımı yapan kullanıcılar için dağıtım tarihi, temettü verimi, hisse başına
            net ödeme ve şirketlerin dağıtma oranı oldukça önemlidir. Özellikle düzenli kâr payı
            ödeyen şirketler uzun vadeli yatırımcıların radarında yer alırken, yüksek temettü
            verimine sahip hisseler de temettü odaklı portföylerde öne çıkmaktadır.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan Haziran 2026 temettü takvimi verileri sayesinde hangi şirketin hangi
            tarihte temettü vereceğini, hisse başına ne kadar brüt ve net ödeme yapacağını ve
            toplam temettü büyüklüğünü karşılaştırmalı olarak görebilirsiniz. Bu yapı, hem temettü
            emekliliği hedefleyen yatırımcılar hem de şirket bazlı kâr dağıtım takibi yapan
            kullanıcılar için pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Haziran ayı temettü takvimi, BIST temettü veren hisseler, hisse başı brüt ve
            net temettü tutarları, dağıtma oranları ve şirket bazlı kâr payı ödemelerini takip
            etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
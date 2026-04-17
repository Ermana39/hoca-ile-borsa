import Link from "next/link";

const mayisTemettuleri = [
  { sembol: "GRTHO", tarih: "22 Mayıs 2026", verim: "% 0,18", brut: "₺0,45", net: "₺0,3817", toplam: "₺56.133.900", oran: "%4" },
  { sembol: "LIDFA", tarih: "21 Mayıs 2026", verim: "% 4,27", brut: "₺0,16", net: "₺0,1329", toplam: "₺170.245.734", oran: "%18" },
  { sembol: "KTLEV", tarih: "20 Mayıs 2026", verim: "% 0,11", brut: "₺0,10", net: "₺0,0821", toplam: "₺199.999.881", oran: "%2" },
  { sembol: "LKMNH", tarih: "20 Mayıs 2026", verim: "% 1,46", brut: "₺0,23", net: "₺0,1968", toplam: "₺49.999.982", oran: "%34" },
  { sembol: "GENTS", tarih: "20 Mayıs 2026", verim: "% 2,18", brut: "₺0,16", net: "₺0,1333", toplam: "₺117.647.025", oran: "%48" },
  { sembol: "SARKY", tarih: "18 Mayıs 2026", verim: "% 1,16", brut: "₺0,35", net: "₺0,3000", toplam: "₺352.941.200", oran: "%120" },
  { sembol: "MTRKS", tarih: "15 Mayıs 2026", verim: "% 0,85", brut: "₺0,20", net: "₺0,1692", toplam: "₺20.004.625", oran: "%8" },
  { sembol: "KRGYO", tarih: "15 Mayıs 2026", verim: "% 1,32", brut: "₺0,04", net: "₺0,0384", toplam: "₺37.999.962", oran: "%27" },
  { sembol: "EGPRO", tarih: "14 Mayıs 2026", verim: "% 1,69", brut: "₺0,64", net: "₺0,5459", toplam: "₺349.999.981", oran: "%33" },
  { sembol: "TRCAS", tarih: "13 Mayıs 2026", verim: "% 5,02", brut: "₺2,35", net: "₺1,9953", toplam: "₺599.999.989", oran: "%116" },
  { sembol: "BEYAZ", tarih: "13 Mayıs 2026", verim: "% 0,96", brut: "₺0,30", net: "₺0,2558", toplam: "₺29.999.996", oran: "%23" },
  { sembol: "MGROS", tarih: "13 Mayıs 2026", verim: "% 0,68", brut: "₺4,56", net: "₺3,8731", toplam: "₺824.999.992", oran: "%14" },
  { sembol: "BRKVY", tarih: "13 Mayıs 2026", verim: "% 0,52", brut: "₺0,53", net: "₺null", toplam: "₺29.555.277", oran: "%10" },
  { sembol: "AEFES", tarih: "13 Mayıs 2026", verim: "% 0,87", brut: "₺0,17", net: "₺0,1443", toplam: "₺1.005.098.684", oran: "%6" },
  { sembol: "CCOLA", tarih: "12 Mayıs 2026", verim: "% 1,81", brut: "₺1,43", net: "₺1,2155", toplam: "₺4.001.252.401", oran: "%28" },
  { sembol: "OZGYO", tarih: "12 Mayıs 2026", verim: "% 0,80", brut: "₺0,02", net: "₺0,0168", toplam: "₺16.750.000", oran: "%2" },
  { sembol: "KLKIM", tarih: "8 Mayıs 2026", verim: "% 1,69", brut: "₺0,65", net: "₺0,5543", toplam: "₺299.999.994", oran: "%25" },
  { sembol: "MAVI", tarih: "6 Mayıs 2026", verim: "% 3,69", brut: "₺1,67", net: "₺1,4221", toplam: "₺1.329.251.946", oran: "%57" },
  { sembol: "LIDER", tarih: "6 Mayıs 2026", verim: "% 0,02", brut: "₺0,04", net: "₺0,0303", toplam: "₺29.411.745", oran: "%2" },
  { sembol: "NTGAZ", tarih: "6 Mayıs 2026", verim: "% 7,01", brut: "₺0,87", net: "₺0,7391", toplam: "₺599.999.988", oran: "%69" },
  { sembol: "ECZYT", tarih: "6 Mayıs 2026", verim: "% 1,57", brut: "₺5,71", net: "₺4,8571", toplam: "₺599.999.998", oran: "%73" },
  { sembol: "ECILC", tarih: "6 Mayıs 2026", verim: "% 1,91", brut: "₺1,75", net: "₺1,4885", toplam: "₺1.199.999.970", oran: "%57" },
  { sembol: "ALARK", tarih: "4 Mayıs 2026", verim: "% 3,20", brut: "₺3,05", net: "₺2,6227", toplam: "₺1.328.144.958", oran: "" },
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

export default function MayisAyiTemettuTakvimiPage() {
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
          Mayıs Ayı Temettü Takvimi
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
              {mayisTemettuleri.map((item, index) => (
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
            Mayıs Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Mayıs ayı temettü takvimi sayfası, Borsa İstanbul&apos;da işlem gören şirketlerin
            Mayıs 2026 dönemindeki temettü dağıtım tarihlerini ve hisse başına ödeme
            detaylarını tek ekranda takip etmek isteyen yatırımcılar için hazırlanmıştır.
            Bu sayfada temettü verimi, hisse başı brüt temettü, hisse başı net temettü,
            toplam temettü tutarı ve dağıtma oranı gibi önemli verilere hızlı şekilde
            ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü yatırımcıları için dağıtım tarihi kadar temettü verimi ve şirketin
            kâr dağıtım politikası da büyük önem taşır. Özellikle düzenli temettü veren
            hisseler, uzun vadeli yatırım stratejilerinde öne çıkarken, yüksek dağıtma
            oranı ve güçlü nakit akışı yatırım kararlarında belirleyici olabilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan Mayıs 2026 temettü takvimi sayesinde hangi şirketin ne zaman
            temettü dağıtacağını, hisse başına ne kadar brüt ve net ödeme yapacağını ve
            toplam temettü büyüklüğünü karşılaştırmalı olarak inceleyebilirsiniz. Bu yapı,
            hem temettü emekliliği hedefleyen yatırımcılar hem de temettü odaklı portföy
            oluşturan kullanıcılar için pratik bir takip ekranı sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Mayıs ayı temettü takvimi, BIST temettü veren hisseler, hisse başı
            temettü tutarları, net ve brüt temettü ödemeleri ile şirketlerin dağıtım
            oranlarını takip etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";

const agustosTemettuleri = [
  { sembol: "SUWEN", tarih: "31 Ağustos 2026", verim: "% 1,80", brut: "₺0,18", net: "₺0,1518", toplam: "₺99.999.984", oran: "%93" },
  { sembol: "TURSG", tarih: "27 Ağustos 2026", verim: "% 2,04", brut: "₺0,30", net: "₺0,2550", toplam: "₺3.000.000.000", oran: "%16" },
  { sembol: "DOAS", tarih: "13 Ağustos 2026", verim: "% 7,86", brut: "₺15,00", net: "₺12,7500", toplam: "₺3.300.000.000", oran: "%56" },
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

export default function AgustosAyiTemettuTakvimiPage() {
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
          Ağustos Ayı Temettü Takvimi
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
              {agustosTemettuleri.map((item, index) => (
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
            Ağustos Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Ağustos ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Ağustos 2026 dönemindeki temettü dağıtım tarihlerini, hisse başına brüt ve net
            temettü ödemelerini ve toplam dağıtım tutarlarını takip etmek isteyen yatırımcılar
            için hazırlanmıştır. Bu sayfa sayesinde temettü veren hisseleri tek tabloda
            inceleyebilir ve ödeme detaylarını tarih bazlı olarak karşılaştırabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü yatırımı yapan kullanıcılar için dağıtım tarihi, temettü verimi, hisse
            başına net ödeme ve şirketlerin dağıtma oranı oldukça önemlidir. Özellikle düzenli
            kâr payı ödeyen şirketler uzun vadeli yatırımcıların radarında yer alırken, yüksek
            temettü verimi sunan hisseler de temettü odaklı portföy oluşturan yatırımcılar
            tarafından yakından takip edilmektedir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan Ağustos 2026 temettü takvimi verileri sayesinde hangi şirketin hangi
            tarihte temettü vereceğini, hisse başına ne kadar brüt ve net ödeme yapacağını ve
            toplam temettü büyüklüğünü kolayca görebilirsiniz. Bu yapı, hem temettü emekliliği
            hedefleyen yatırımcılar hem de şirket bazlı kâr dağıtım takibi yapan kullanıcılar
            için pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Ağustos ayı temettü takvimi, BIST temettü veren hisseler, hisse başı brüt ve
            net temettü tutarları, dağıtma oranları ve şirket bazlı kâr payı ödemelerini takip
            etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
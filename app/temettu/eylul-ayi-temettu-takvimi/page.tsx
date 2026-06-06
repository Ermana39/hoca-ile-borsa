export const metadata = {
  title: "Eylül Ayı Temettü Takvimi | Hoca İle Borsa",
  description: "Eylül ayında temettü veren BIST şirketleri, ödeme tarihleri ve temettü miktarları.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/eylul-ayi-temettu-takvimi" },
};

import Link from "next/link";

const eylulTemettuleri = [
  { sembol: "SUMAS", tarih: "30 Eylül 2026", verim: "% 0,59", brut: "₺2,17", net: "₺1,8436", toplam: "₺13.499.999", oran: "%90" },
  { sembol: "KIMMR", tarih: "30 Eylül 2026", verim: "% 1,22", brut: "₺0,21", net: "₺0,1771", toplam: "₺49.999.992", oran: "%8" },
  { sembol: "DESA", tarih: "30 Eylül 2026", verim: "% 0,67", brut: "₺0,08", net: "₺0,0714", toplam: "₺41.176.464", oran: "%7" },
  { sembol: "TUPRS", tarih: "30 Eylül 2026", verim: "% 2,86", brut: "₺6,75", net: "₺5,7349", toplam: "₺13.001.761.617", oran: "%42" },
  { sembol: "LKMNH", tarih: "28 Eylül 2026", verim: "% 1,39", brut: "₺0,23", net: "₺0,1968", toplam: "₺49.999.982", oran: "%34" },
  { sembol: "MOPAS", tarih: "25 Eylül 2026", verim: "% 0,69", brut: "₺0,27", net: "₺0,2335", toplam: "₺74.999.989", oran: "%40" },
  { sembol: "GIPTA", tarih: "22 Eylül 2026", verim: "% 0,01", brut: "₺0,01", net: "₺0,0066", toplam: "₺1.024.993", oran: "%0" },
  { sembol: "TAVHL", tarih: "22 Eylül 2026", verim: "% 0,72", brut: "₺1,80", net: "₺1,5342", toplam: "₺655.718.977", oran: "%23" },
  { sembol: "MACKO", tarih: "22 Eylül 2026", verim: "% 4,05", brut: "₺1,80", net: "₺1,5300", toplam: "₺180.000.000", oran: "%58" },
  { sembol: "PETUN", tarih: "21 Eylül 2026", verim: "% 1,85", brut: "₺0,25", net: "₺0,2083", toplam: "₺74.319.525", oran: "%43" },
  { sembol: "BIGCH", tarih: "18 Eylül 2026", verim: "% 1,57", brut: "₺0,10", net: "₺0,0850", toplam: "₺53.500.000", oran: "%2397" },
  { sembol: "BIMAS", tarih: "16 Eylül 2026", verim: "% 0,67", brut: "₺2,50", net: "₺2,1250", toplam: "₺3.000.000.000", oran: "%16" },
  { sembol: "BULGS", tarih: "15 Eylül 2026", verim: "% 0,23", brut: "₺0,09", net: "₺0,0933", toplam: "₺24.999.978", oran: "%2" },
  { sembol: "LIDER", tarih: "8 Eylül 2026", verim: "% 0,03", brut: "₺0,04", net: "₺0,0303", toplam: "₺29.411.745", oran: "%2" },
];

export default function EylulAyiTemettuTakvimiPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Eylül Ayı Temettü Takvimi
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
              {eylulTemettuleri.map((item, index) => (
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

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Eylül Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Eylül ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Eylül 2026 dönemindeki temettü dağıtım tarihlerini, hisse başına brüt ve net
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
            Sayfada yer alan Eylül 2026 temettü takvimi verileri sayesinde hangi şirketin hangi
            tarihte temettü vereceğini, hisse başına ne kadar brüt ve net ödeme yapacağını ve
            toplam temettü büyüklüğünü kolayca görebilirsiniz. Bu yapı, hem temettü emekliliği
            hedefleyen yatırımcılar hem de şirket bazlı kâr dağıtım takibi yapan kullanıcılar
            için pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Eylül ayı temettü takvimi, BIST temettü veren hisseler, hisse başı brüt ve
            net temettü tutarları, dağıtma oranları ve şirket bazlı kâr payı ödemelerini takip
            etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
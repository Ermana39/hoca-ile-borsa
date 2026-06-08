export const metadata = {
  title: "Temmuz Ayı Temettü Takvimi | Hoca İle Borsa",
  description: "Temmuz ayında temettü veren BIST şirketleri, ödeme tarihleri ve temettü miktarları.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/temmuz-ayi-temettu-takvimi" },
};

import Link from "next/link";
import { IlgiliBolumler } from "@/components/IlgiliBolumler";

const temmuzTemettuleri = [
  { sembol: "MOPAS", tarih: "31 Temmuz 2026", verim: "% 0,69", brut: "₺0,27", net: "₺0,2335", toplam: "₺74.999.989", oran: "%40" },
  { sembol: "OSMEN", tarih: "29 Temmuz 2026", verim: "% 0,66", brut: "₺0,05", net: "₺0,0424", toplam: "₺19.999.992", oran: "%12" },
  { sembol: "MERCN", tarih: "28 Temmuz 2026", verim: "% 0,98", brut: "₺0,21", net: "₺0,1786", toplam: "₺39.999.981", oran: "%29" },
  { sembol: "GRTHO", tarih: "22 Temmuz 2026", verim: "% 0,22", brut: "₺0,45", net: "₺0,3817", toplam: "₺56.133.900", oran: "%4" },
  { sembol: "KTLEV", tarih: "21 Temmuz 2026", verim: "% 0,08", brut: "₺0,10", net: "₺0,0821", toplam: "₺199.999.881", oran: "%2" },
  { sembol: "TAVHL", tarih: "21 Temmuz 2026", verim: "% 0,72", brut: "₺1,80", net: "₺1,5342", toplam: "₺655.718.977", oran: "%23" },
  { sembol: "BASGZ", tarih: "20 Temmuz 2026", verim: "% 4,13", brut: "₺2,00", net: "₺1,7000", toplam: "₺1.400.000.000", oran: "%41" },
  { sembol: "GOLTS", tarih: "17 Temmuz 2026", verim: "% 1,21", brut: "₺4,17", net: "₺3,5417", toplam: "₺74.999.998", oran: "%20" },
  { sembol: "EGPRO", tarih: "16 Temmuz 2026", verim: "% 1,59", brut: "₺0,64", net: "₺0,5459", toplam: "₺349.999.981", oran: "%33" },
  { sembol: "GIPTA", tarih: "14 Temmuz 2026", verim: "% 0,01", brut: "₺0,01", net: "₺0,0066", toplam: "₺1.024.993", oran: "%0" },
  { sembol: "GENKM", tarih: "14 Temmuz 2026", verim: "% 1,47", brut: "₺0,21", net: "₺0,1745", toplam: "₺124.999.990", oran: "%50" },
  { sembol: "PNLSN", tarih: "8 Temmuz 2026", verim: "% 1,45", brut: "₺0,69", net: "₺0,5848", toplam: "₺51.596.257", oran: "%20" },
  { sembol: "LIDER", tarih: "8 Temmuz 2026", verim: "% 0,03", brut: "₺0,04", net: "₺0,0303", toplam: "₺29.411.745", oran: "%2" },
  { sembol: "MEYSU", tarih: "7 Temmuz 2026", verim: "% 0,28", brut: "₺0,05", net: "₺0,0425", toplam: "₺43.500.000", oran: "%9" },
  { sembol: "OZSUB", tarih: "6 Temmuz 2026", verim: "% 2,14", brut: "₺0,62", net: "₺0,5242", toplam: "₺73.999.992", oran: "%25" },
  { sembol: "LILAK", tarih: "6 Temmuz 2026", verim: "% 4,39", brut: "₺1,53", net: "₺1,2966", toplam: "₺900.025.000", oran: "%53" },
  { sembol: "DOFER", tarih: "2 Temmuz 2026", verim: "% 0,53", brut: "₺0,19", net: "₺0,0807", toplam: "₺10.588.235", oran: "%69" },
  { sembol: "KCAER", tarih: "1 Temmuz 2026", verim: "% 1,30", brut: "₺0,17", net: "₺0,1443", toplam: "₺324.999.821", oran: "%69" },
];

export default function TemmuzAyiTemettuTakvimiPage() {
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
          Temmuz Ayı Temettü Takvimi
        </h1>

        <section className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 md:text-base">
          <div className="mb-2 font-semibold">Portföyünüzdeki hisseler için temettü gelirinizi hesaplamak ister misiniz?</div>
          <div className="flex flex-wrap gap-2">
            <Link href="/temettu/temettu-hesaplama-araci" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 md:text-sm">Temettü Hesaplama Aracı <span aria-hidden>→</span></Link>
            <Link href="/temettu/temettu-verimi-hesaplama" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 md:text-sm">Temettü Verimi Hesaplama <span aria-hidden>→</span></Link>
          </div>
        </section>

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
              {temmuzTemettuleri.map((item, index) => (
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

        <IlgiliBolumler
          baslik="İlgili Araçlar"
          linkler={[
            { label: "Temettü Hesaplama Aracı", href: "/temettu/temettu-hesaplama-araci", description: "Lot ve brüt temettüye göre net temettü tutarınızı hesaplayın." },
            { label: "Temettü Verimi Hesaplama", href: "/temettu/temettu-verimi-hesaplama", description: "Hisse fiyatına göre temettü verim oranınızı bulun." },
            { label: "Tüm Hesaplayıcılar", href: "/hesaplayici", description: "Borsa, mevduat, kredi ve daha fazlası için hesaplama araçları." },
          ]}
          className="mt-10"
        />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Temmuz Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Temmuz ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Temmuz 2026 dönemindeki temettü dağıtım tarihlerini, hisse başına brüt ve net
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
            Sayfada yer alan Temmuz 2026 temettü takvimi verileri sayesinde hangi şirketin hangi
            tarihte temettü vereceğini, hisse başına ne kadar brüt ve net ödeme yapacağını ve
            toplam temettü büyüklüğünü kolayca görebilirsiniz. Bu yapı, hem temettü emekliliği
            hedefleyen yatırımcılar hem de şirket bazlı kâr dağıtım takibi yapan kullanıcılar
            için pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Temmuz ayı temettü takvimi, BIST temettü veren hisseler, hisse başı brüt ve
            net temettü tutarları, dağıtma oranları ve şirket bazlı kâr payı ödemelerini takip
            etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
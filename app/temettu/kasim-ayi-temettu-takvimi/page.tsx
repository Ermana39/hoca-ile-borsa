export const metadata = {
  title: "Kasım Ayı Temettü Takvimi | Hoca İle Borsa",
  description: "Kasım ayında temettü veren BIST şirketleri, ödeme tarihleri ve temettü miktarları.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/kasim-ayi-temettu-takvimi" },
};

import Link from "next/link";
import { getTemettulerByAy } from "@/lib/temettuler";
import HisseLink from "@/components/HisseLink";
import { IlgiliBolumler } from "@/components/IlgiliBolumler";

const kasimTemettuleri = getTemettulerByAy(2026, 11);

export default function KasimAyiTemettuTakvimiPage() {
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
          Kasım Ayı Temettü Takvimi
        </h1>

        <section className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 md:text-base">
          <div className="mb-2 font-semibold">
            Portföyünüzdeki hisseler için temettü gelirinizi hesaplamak ister misiniz?
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/temettu/temettu-hesaplama-araci"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 md:text-sm"
            >
              Temettü Hesaplama Aracı <span aria-hidden>→</span>
            </Link>
            <Link
              href="/temettu/temettu-verimi-hesaplama"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 md:text-sm"
            >
              Temettü Verimi Hesaplama <span aria-hidden>→</span>
            </Link>
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
              {kasimTemettuleri.map((item, index) => (
                <tr
                  key={`${item.sembol}-${item.tarih}`}
                  className={`border-t border-zinc-100 ${index % 2 === 1 ? "bg-sky-50" : "bg-white"}`}
                >
                  <td className="px-4 py-3 font-semibold text-zinc-900">
                    <HisseLink sembol={item.sembol} />
                  </td>
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
            {
              label: "Temettü Hesaplama Aracı",
              href: "/temettu/temettu-hesaplama-araci",
              description: "Lot ve brüt temettüye göre net temettü tutarınızı hesaplayın.",
            },
            {
              label: "Temettü Verimi Hesaplama",
              href: "/temettu/temettu-verimi-hesaplama",
              description: "Hisse fiyatına göre temettü verim oranınızı bulun.",
            },
            {
              label: "Tüm Hesaplayıcılar",
              href: "/hesaplayici",
              description: "Borsa, mevduat, kredi ve daha fazlası için hesaplama araçları.",
            },
          ]}
          className="mt-10"
        />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Kasım Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Kasım ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Kasım 2026 dönemindeki temettü ödeme tarihlerini, hisse başına brüt ve net
            temettü tutarlarını, temettü verimlerini ve toplam dağıtım büyüklüklerini takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfa üzerinden Kasım ayında
            temettü dağıtması beklenen şirketleri tek tabloda inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü takibi yapan yatırımcılar için ödeme tarihi, hisse başına net temettü,
            brüt temettü, temettü verimi ve şirketin dağıtma oranı önemli göstergeler arasında
            yer alır. Özellikle düzenli kâr payı ödeyen şirketler uzun vadeli yatırımcıların
            radarında olurken, dönemsel olarak yüksek temettü verimi sunan hisseler de temettü
            odaklı portföylerde ayrıca değerlendirilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Kasım 2026 temettü takviminde yer alan şirketler arasında DESA, OFSYM, ASELS,
            DURKN, GIPTA, KBORU, GOKNR ve LIDER gibi BIST şirketleri bulunmaktadır. Tabloda
            her şirket için ödeme tarihi, temettü verimi, hisse başına brüt ödeme, hisse
            başına net ödeme, toplam temettü tutarı ve dağıtma oranı ayrı ayrı gösterilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse başına brüt temettü, şirketin ortaklarına açıkladığı vergi öncesi kâr payı
            tutarını ifade eder. Hisse başına net temettü ise stopaj kesintisi sonrasında
            yatırımcının hesabına geçmesi beklenen tutarı gösterir. Bu nedenle temettü geliri
            hesaplanırken yalnızca brüt tutara değil, net ödeme miktarına da dikkat edilmelidir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü verimi, hisse başına brüt temettünün hisse fiyatına oranlanmasıyla takip
            edilen önemli bir göstergedir. Bu oran yatırımcıya, mevcut fiyat seviyesine göre
            şirketin ne ölçüde temettü getirisi sunduğunu gösterir. Ancak temettü verimi tek
            başına yatırım kararı için yeterli değildir; şirketin kârlılığı, nakit akışı,
            geçmiş temettü politikası ve sürdürülebilir dağıtım yapısı birlikte değerlendirilmelidir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Kasım ayı temettü takvimi, BIST temettü veren hisseler, hisse başı net ve
            brüt temettü ödemeleri, toplam dağıtım tutarları ve şirket bazlı kâr payı
            oranlarını takip etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
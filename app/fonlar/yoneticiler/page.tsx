import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb, MetricCard, type ManagerTableItem } from "../_components/FonUi";
import ManagerSearchClient from "./ManagerSearchClient";
import {
  formatCompactTL,
  formatDate,
  formatNumber,
  formatSignedTL,
} from "@/lib/fon-format";
import { getManagersData } from "@/lib/fon-platform";

export const metadata: Metadata = {
  title: "Fon Yönetim Şirketleri ve Yönetici Analizi",
  description:
    "Fon yönetim şirketlerini yönettikleri fon sayısı, toplam fon büyüklüğü, yatırımcı sayısı, para akışı ve ortalama getiri verileriyle karşılaştırın.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/yoneticiler",
  },
};

export default function FonYoneticilerPage() {
  const data = getManagersData();
  const managers: ManagerTableItem[] = data.yoneticiler.map((manager) => ({
    slug: manager.slug,
    yonetici: manager.yonetici,
    yonetilenFonSayisi: manager.yonetilenFonSayisi,
    toplamFonBuyuklugu: manager.toplamFonBuyuklugu,
    toplamYatirimciSayisi: manager.toplamYatirimciSayisi,
    paraAkisi: manager.paraAkisi,
    ortalamaGetiri: manager.ortalamaGetiri,
    enBuyukFon: manager.enBuyukFon,
  }));
  const biggest = data.yoneticiler[0] ?? null;
  const topFlow = [...data.yoneticiler]
    .filter(
      (manager) =>
        typeof manager.paraAkisi.gunluk === "number" && manager.paraAkisi.gunluk > 0
    )
    .sort((a, b) => (b.paraAkisi.gunluk ?? 0) - (a.paraAkisi.gunluk ?? 0))[0];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Yöneticiler" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Yönetici Analizi
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Portföy yönetim şirketlerini yönettikleri fon sayısı, toplam fon
            büyüklüğü, yatırımcı sayısı, dönemsel getiri ve para akışı verileriyle
            karşılaştırın. Her yöneticinin fonlarına ve öne çıkan performans
            göstergelerine tek sayfadan ulaşın.
          </p>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <MetricCard label="Yönetici Sayısı" value={formatNumber(data.yoneticiler.length)} tone="blue" />
          <MetricCard
            label="En Büyük Yönetici"
            value={biggest ? biggest.yonetici : "-"}
            sub={biggest ? formatCompactTL(biggest.toplamFonBuyuklugu) : undefined}
            href={biggest ? `/fonlar/yoneticiler/${biggest.slug}` : undefined}
          />
          <MetricCard
            label="Günlük En Yüksek Akış"
            value={topFlow ? topFlow.yonetici : "-"}
            sub={topFlow ? formatSignedTL(topFlow.paraAkisi.gunluk) : undefined}
            href={topFlow ? `/fonlar/yoneticiler/${topFlow.slug}` : undefined}
            tone="green"
          />
        </section>

        <Suspense fallback={<p className="text-sm text-slate-500">Yöneticiler hazırlanıyor...</p>}>
          <ManagerSearchClient managers={managers} />
        </Suspense>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Fon Yönetim Şirketi Karşılaştırması Neden Önemlidir?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Portföy yönetim şirketleri farklı yatırım ekipleri, fon türleri
                ve stratejilerle çalışır. Yönetilen toplam büyüklük ve fon sayısı
                şirketin sektördeki ölçeğini gösterirken, tek başına performans
                kalitesi anlamına gelmez.
              </p>
              <p>
                Ortalama getiri, yöneticinin fonlarının belirli bir dönemdeki
                genel seyrini anlamaya yardımcı olur. Ancak hisse senedi, para
                piyasası veya borçlanma araçları fonlarının risk yapıları farklı
                olduğu için fon türleri ayrıca incelenmelidir.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Para akışı ve yatırımcı sayısı, yönetim şirketinin fonlarına
                yönelik güncel ilgiyi gösterir. Birden fazla dönemde devam eden
                girişler daha kalıcı bir eğilime işaret edebilir; yine de geçmiş
                ilgi gelecekteki getirinin garantisi değildir.
              </p>
              <p>
                Yönetici detaylarında ilgili şirketin tüm fonlarını inceleyebilir,
                fon bazında ayrıntılı analiz için fon koduna geçebilir veya farklı
                yöneticilerin fonlarını <Link href="/fonlar/fon-karsilastirma" className="font-semibold text-blue-700 hover:underline">fon karşılaştırma aracında</Link> yan yana değerlendirebilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb, MetricCard } from "../../_components/FonUi";
import {
  formatCompactTL,
  formatDate,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import {
  getAllManagerSlugs,
  getManagerBySlug,
  getManagersData,
  type ManagerSummary,
} from "@/lib/fon-platform";

export function generateStaticParams() {
  return getAllManagerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const manager = getManagerBySlug(slug);

  if (!manager) {
    return {
      title: "Fon Yöneticisi Bulunamadı",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `${manager.yonetici} Fonları ve Para Akışı Analizi`,
    description: `${manager.yonetici} tarafından yönetilen fonlar, toplam büyüklük, yatırımcı sayısı, para giriş çıkışı ve ortalama getiri verileri.`,
    alternates: {
      canonical: `https://www.hocaileborsa.com/fonlar/yoneticiler/${manager.slug}`,
    },
  };
}

function ManagerFundsTable({ manager }: { manager: ManagerSummary }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[1080px] text-sm">
        <thead className="bg-slate-100 text-left text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Fon Kodu</th>
            <th className="px-4 py-3 font-semibold">Fon Adı</th>
            <th className="px-4 py-3 font-semibold">Şemsiye Türü</th>
            <th className="px-4 py-3 text-right font-semibold">Fon Büyüklüğü</th>
            <th className="px-4 py-3 text-right font-semibold">Günlük Akış</th>
            <th className="px-4 py-3 text-right font-semibold">Günlük Getiri</th>
            <th className="px-4 py-3 text-right font-semibold">Yatırımcı Değişimi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {manager.fonlar.map((fund) => (
            <tr key={fund.kod} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-bold text-slate-950">
                <Link href={`/fonlar/${fund.slug}`} className="hover:text-blue-700">
                  {fund.kod}
                </Link>
              </td>
              <td className="px-4 py-3 text-slate-800">{fund.ad}</td>
              <td className="px-4 py-3 text-slate-700">{fund.kategori}</td>
              <td className="px-4 py-3 text-right font-semibold text-slate-900">
                {formatCompactTL(fund.fonToplamDeger)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.value)}`}>
                {formatSignedTL(fund.value)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.gunlukGetiri)}`}>
                {formatSignedPercent(fund.gunlukGetiri)}
              </td>
              <td className={`px-4 py-3 text-right font-semibold ${valueColorClass(fund.yatirimciDegisimi)}`}>
                {formatNumber(fund.yatirimciDegisimi)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function FonYoneticiDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getManagersData();
  const manager = data.yoneticiler.find((item) => item.slug === slug);

  if (!manager) notFound();

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb
          current={manager.yonetici}
          items={[{ href: "/fonlar/yoneticiler", label: "Yöneticiler" }]}
        />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            {manager.yonetici}
          </h1>
          {manager.kapYoneticiKodlari.length > 0 ? (
            <p className="mt-2 text-sm text-slate-500">
              KAP kodu: {manager.kapYoneticiKodlari.join(", ")}
            </p>
          ) : null}
        </section>

        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Fon Sayısı" value={formatNumber(manager.yonetilenFonSayisi)} tone="blue" />
          <MetricCard label="Toplam Büyüklük" value={formatCompactTL(manager.toplamFonBuyuklugu)} />
          <MetricCard label="Yatırımcı Sayısı" value={formatNumber(manager.toplamYatirimciSayisi)} />
          <MetricCard
            label="Günlük Net Akış"
            value={formatSignedTL(manager.paraAkisi.gunluk)}
            tone={
              manager.paraAkisi.gunluk === null
                ? undefined
                : manager.paraAkisi.gunluk < 0
                  ? "red"
                  : "green"
            }
          />
          <MetricCard label="5 Gün Net Akış" value={formatSignedTL(manager.paraAkisi.besGun)} />
          <MetricCard label="1 Ay Net Akış" value={formatSignedTL(manager.paraAkisi.birAy)} />
          <MetricCard label="3 Ay Net Akış" value={formatSignedTL(manager.paraAkisi.ucAy)} />
          <MetricCard label="1A Ortalama Getiri" value={formatSignedPercent(manager.ortalamaGetiri.birAy)} />
        </section>

        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <MetricCard
            label={`En İyi ${manager.enIyiPerformansDonemi ?? "Dönemsel"} Performansı`}
            value={manager.enIyiPerformansGosterenFon?.kod ?? "-"}
            sub={
              manager.enIyiPerformansGosterenFon
                ? formatSignedPercent(manager.enIyiPerformansGosterenFon.value)
                : undefined
            }
            href={
              manager.enIyiPerformansGosterenFon
                ? `/fonlar/${manager.enIyiPerformansGosterenFon.slug}`
                : undefined
            }
          />
          <MetricCard
            label="En Yüksek Para Girişi Alan Fon"
            value={manager.enYuksekParaGirisiAlanFon?.kod ?? "-"}
            sub={
              manager.enYuksekParaGirisiAlanFon
                ? formatSignedTL(manager.enYuksekParaGirisiAlanFon.value)
                : undefined
            }
            href={
              manager.enYuksekParaGirisiAlanFon
                ? `/fonlar/${manager.enYuksekParaGirisiAlanFon.slug}`
                : undefined
            }
            tone="green"
          />
          <MetricCard
            label="En Büyük Fon"
            value={manager.enBuyukFon?.kod ?? "-"}
            sub={manager.enBuyukFon ? formatCompactTL(manager.enBuyukFon.value) : undefined}
            href={manager.enBuyukFon ? `/fonlar/${manager.enBuyukFon.slug}` : undefined}
          />
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-950">
            Yönettiği Fonlar
          </h2>
          <ManagerFundsTable manager={manager} />
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            {manager.yonetici} Fonları Hakkında
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                {manager.yonetici}, güncel olarak {formatNumber(manager.yonetilenFonSayisi)} fon
                yönetiyor. Bu fonların toplam büyüklüğü {formatCompactTL(manager.toplamFonBuyuklugu)},
                toplam yatırımcı sayısı ise {formatNumber(manager.toplamYatirimciSayisi)} seviyesindedir.
                Bu göstergeler yönetim şirketinin fon pazarındaki ölçeğini ve yatırımcı erişimini
                karşılaştırmaya yardımcı olur.
              </p>
              <p>
                Yöneticinin fonları aynı risk ve yatırım stratejisine sahip olmayabilir.
                Bu nedenle ortalama getiriyle birlikte her fonun şemsiye türü, risk değeri,
                yatırım süresi ve dönemsel performansı ayrıca değerlendirilmelidir.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Günlük net para akışı {formatSignedTL(manager.paraAkisi.gunluk)}, bir aylık net
                para akışı {formatSignedTL(manager.paraAkisi.birAy)} seviyesindedir. Farklı
                dönemlerdeki akışın yönü, yatırımcı ilgisinin kısa vadeli mi yoksa daha kalıcı
                mı olduğunu anlamaya yardımcı olabilir.
              </p>
              <p>
                Listedeki fon kodlarından ayrıntılı fiyat, getiri ve risk sayfalarına
                ulaşabilir; seçtiğiniz fonları <Link href="/fonlar/fon-karsilastirma" className="font-semibold text-blue-700 hover:underline">fon karşılaştırma aracında</Link> yan yana
                inceleyebilir veya tüm yöneticilere dönmek için <Link href="/fonlar/yoneticiler" className="font-semibold text-blue-700 hover:underline">fon yönetici analizi</Link> sayfasını ziyaret edebilirsiniz.
              </p>
            </div>
          </div>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            Fon büyüklüğü, para akışı ve geçmiş getiri yatırım kararı için tek başına yeterli
            değildir. Fonun yatırım stratejisi, risk seviyesi ve yatırımcı hedefleri birlikte
            değerlendirilmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}

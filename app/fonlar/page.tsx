import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { ArrowRight } from "lucide-react";
import {
  FonBreadcrumb,
  Leaderboard,
  MetricCard,
  ModuleLink,
} from "./_components/FonUi";
import FundQuickSearch from "./_components/FundQuickSearch";
import {
  formatCompactTL,
  formatDate,
  formatNumber,
  formatSignedTL,
} from "@/lib/fon-format";
import { getCurrentFundsData, getDashboardData } from "@/lib/fon-platform";
import { getHaftalikFonHisseTercihleri } from "@/lib/fon-tercihleri";
import { hisseVarMi } from "@/lib/hisseler";

export const metadata: Metadata = {
  title: "Yatırım Fonları: Getiri, Para Akışı ve Fon Analizi",
  description:
    "Yatırım fonlarını getiri, risk, fon büyüklüğü, yatırımcı değişimi ve para akışına göre inceleyin; fon tarayıcı ve karşılaştırma araçlarını kullanın.",
  alternates: { canonical: "https://www.hocaileborsa.com/fonlar" },
};

export default function FonlarPage() {
  const dashboard = getDashboardData();
  const leaderboards = dashboard.liderTablolari;
  const funds = getCurrentFundsData()
    .fonlar.filter((fund) => fund.aktifMi)
    .map((fund) => ({
      kod: fund.kod,
      ad: fund.ad,
      slug: fund.slug,
      yonetici: fund.yonetici,
    }));
  const haftalikTercihler = getHaftalikFonHisseTercihleri();
  const enCokTercihEdilenHisseler = [...haftalikTercihler.hisseler]
    .filter((hisse) => hisse.degisim > 0)
    .sort((a, b) => b.degisim - a.degisim)
    .slice(0, 10);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Fonlar" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(dashboard.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Analiz Platformu
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            Yatırım fonlarını getiri, risk seviyesi, fon büyüklüğü, yatırımcı
            ilgisi ve para akışıyla birlikte inceleyin. Fonları dönemsel olarak
            karşılaştırın, öne çıkan fonları keşfedin ve portföy yönetim
            şirketlerinin genel görünümünü takip edin.
          </p>
        </section>

        <FundQuickSearch funds={funds} />

        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <MetricCard
            label="Takip Edilen Fon"
            value={formatNumber(dashboard.ozet.toplamTakipEdilenFonSayisi)}
            sub="Güncel olarak karşılaştırılabilen aktif fon sayısı"
            tone="blue"
          />
          <MetricCard
            label="Toplam Fon Büyüklüğü"
            value={formatCompactTL(dashboard.ozet.toplamFonBuyuklugu)}
            sub={`${formatNumber(dashboard.yoneticiSayisi)} yönetici / kurucu`}
          />
          <MetricCard
            label="En Yüksek Para Girişi"
            value={
              dashboard.ozet.bugunEnYuksekParaGirisi
                ? `${dashboard.ozet.bugunEnYuksekParaGirisi.kod} · ${formatSignedTL(
                    dashboard.ozet.bugunEnYuksekParaGirisi.value
                  )}`
                : "-"
            }
            href={
              dashboard.ozet.bugunEnYuksekParaGirisi
                ? `/fonlar/${dashboard.ozet.bugunEnYuksekParaGirisi.slug}`
                : undefined
            }
            tone="green"
          />
          <MetricCard
            label="En Yüksek Para Çıkışı"
            value={
              dashboard.ozet.bugunEnYuksekParaCikisi
                ? `${dashboard.ozet.bugunEnYuksekParaCikisi.kod} · ${formatSignedTL(
                    dashboard.ozet.bugunEnYuksekParaCikisi.value
                  )}`
                : "-"
            }
            href={
              dashboard.ozet.bugunEnYuksekParaCikisi
                ? `/fonlar/${dashboard.ozet.bugunEnYuksekParaCikisi.slug}`
                : undefined
            }
            tone="red"
          />
          <MetricCard
            label="En Çok Yatırımcı Kazanan"
            value={
              dashboard.ozet.enCokYatirimciKazanan
                ? `${dashboard.ozet.enCokYatirimciKazanan.kod} · ${formatNumber(
                    dashboard.ozet.enCokYatirimciKazanan.value
                  )}`
                : "-"
            }
            href={
              dashboard.ozet.enCokYatirimciKazanan
                ? `/fonlar/${dashboard.ozet.enCokYatirimciKazanan.slug}`
                : undefined
            }
            tone="green"
          />
          <MetricCard
            label="En Çok Yatırımcı Kaybeden"
            value={
              dashboard.ozet.enCokYatirimciKaybeden
                ? `${dashboard.ozet.enCokYatirimciKaybeden.kod} · ${formatNumber(
                    dashboard.ozet.enCokYatirimciKaybeden.value
                  )}`
                : "-"
            }
            href={
              dashboard.ozet.enCokYatirimciKaybeden
                ? `/fonlar/${dashboard.ozet.enCokYatirimciKaybeden.slug}`
                : undefined
            }
            tone="red"
          />
        </section>

        <section className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <ModuleLink
            href="/fonlar/etki-analizi"
            title="Popüler Fonların Günlük Etki Analizi"
            desc="TLY, PHE, DFI, KHA ve THF portföy içerikleri ile ertesi gün açıklanacak fon fiyatına tahmini etki."
          />
          <ModuleLink
            href="/fonlar/para-girisi"
            title="En Çok Para Girişi Alan Fonlar"
            desc="Günlük, 5 günlük, 1 aylık ve 3 aylık net para akışı tabloları."
          />
          <ModuleLink
            href="/fonlar/fon-tarayici"
            title="Fon Tarayıcı"
            desc="Fon kodu, tür, yönetici, risk, büyüklük, getiri ve akış filtreleri."
          />
          <ModuleLink
            href="/fonlar/fon-karsilastirma"
            title="Fon Karşılaştırma"
            desc="2 ila 5 fonu getiri, risk, büyüklük, yatırımcı ve akış metrikleriyle kıyaslayın."
          />
          <ModuleLink
            href="/fonlar/yoneticiler"
            title="Yönetici Analizi"
            desc="Portföy şirketlerini fon sayısı, büyüklük, yatırımcı ve nakit akışıyla izleyin."
          />
          <ModuleLink
            href="/fonlar/getiri"
            title="Fon Getiri Analizi"
            desc="Fonların kısa, orta ve uzun vadeli dönemsel getirilerini inceleyin."
          />
          <ModuleLink
            href="/fonlar/tarihsel-veriler"
            title="Fon Tarihsel Veriler"
            desc="Fon fiyatı, büyüklüğü ve yatırımcı sayısındaki tarihsel değişimi izleyin."
          />
          <ModuleLink
            href="/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler"
            title="Fonların Haftalık Hisse Tercihleri"
            desc="Son bir haftada fonların payını en çok artırdığı hisseleri ve fon takasındaki değişimi inceleyin."
          />
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-3">
          <Leaderboard
            title="En Çok Para Girişi Alan Fonlar"
            items={leaderboards.enCokParaGirisi ?? []}
            href="/fonlar/para-girisi"
            kind="money"
          />
          <Leaderboard
            title="En Çok Para Çıkışı Yaşayan Fonlar"
            items={leaderboards.enCokParaCikisi ?? []}
            href="/fonlar/para-girisi?period=gunluk"
            kind="money"
          />
          <Leaderboard
            title="En Büyük Fonlar"
            items={leaderboards.enBuyukFonlar ?? []}
            href="/fonlar/fon-tarayici?sort=fonToplamDeger&dir=desc"
            kind="money"
          />
          <Leaderboard
            title="Bugün En Çok Kazandıran Fonlar"
            items={leaderboards.bugunEnCokKazandiran ?? []}
            href="/fonlar/fon-tarayici?sort=gunlukGetiri&dir=desc"
            kind="percent"
          />
          <Leaderboard
            title="Bugün En Çok Kaybettiren Fonlar"
            items={leaderboards.bugunEnCokKaybettiren ?? []}
            href="/fonlar/fon-tarayici?sort=gunlukGetiri&dir=asc"
            kind="percent"
          />
          <Leaderboard
            title="1 Ayda En Çok Kazandıran Fonlar"
            items={leaderboards.birAydaEnCokKazandiran ?? []}
            href="/fonlar/fon-tarayici?sort=birAyGetiri&dir=desc"
            kind="percent"
          />
          <Leaderboard
            title="3 Ayda En Çok Kazandıran Fonlar"
            items={leaderboards.ucAydaEnCokKazandiran ?? []}
            href="/fonlar/fon-tarayici?sort=ucAyGetiri&dir=desc"
            kind="percent"
          />
          <Leaderboard
            title="1 Yılda En Çok Kazandıran Fonlar"
            items={leaderboards.birYildaEnCokKazandiran ?? []}
            href="/fonlar/fon-tarayici?sort=birYilGetiri&dir=desc"
            kind="percent"
          />
          <Leaderboard
            title="En Çok Yatırımcı Kazanan Fonlar"
            items={leaderboards.enCokYatirimciKazanan ?? []}
            href="/fonlar/fon-tarayici?sort=yatirimciDegisimi&dir=desc"
            kind="number"
          />
        </section>

        <section className="mt-12" aria-labelledby="haftalik-fon-tercihleri-baslik">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-700">
                {haftalikTercihler.donemBaslangici && haftalikTercihler.donemBitisi
                  ? `${haftalikTercihler.donemBaslangici} - ${haftalikTercihler.donemBitisi}`
                  : "Son 1 hafta"}
              </p>
              <h2
                id="haftalik-fon-tercihleri-baslik"
                className="mt-1 text-2xl font-bold text-slate-950"
              >
                Fonların Son 1 Haftada En Çok Tercih Ettiği Hisseler
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Fonların toplam payını en fazla artırdığı hisseler, haftanın ilk ve son
                işlem günü karşılaştırılarak sıralanır.
              </p>
            </div>
            <Link
              href="/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Tüm hisseleri incele
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-slate-100 text-left text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 text-right font-semibold">Haftalık Pay Değişimi</th>
                  <th className="px-4 py-3 text-right font-semibold">Son Toplam Pay</th>
                  <th className="px-4 py-3 text-right font-semibold">Son Fon Takası</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enCokTercihEdilenHisseler.map((hisse) => {
                  const yuzdeFormat = new Intl.NumberFormat("tr-TR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  });
                  const sembol = (
                    <span className="inline-flex min-w-20 justify-center rounded-md bg-slate-100 px-2 py-1 font-bold text-slate-800">
                      {hisse.sembol}
                    </span>
                  );

                  return (
                    <tr key={hisse.sembol} className="hover:bg-slate-50">
                      <td className="px-4 py-3">
                        {hisseVarMi(hisse.sembol) ? (
                          <Link
                            href={`/hisse/${hisse.sembol.toLowerCase()}`}
                            className="hover:text-blue-700"
                          >
                            {sembol}
                          </Link>
                        ) : (
                          sembol
                        )}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700">
                        +{yuzdeFormat.format(hisse.degisim)} puan
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-slate-800">
                        %{yuzdeFormat.format(hisse.sonToplamYuzde)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-slate-800">
                        {formatCompactTL(hisse.sonToplamTakasTl)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Yatırım Fonu Seçerken Hangi Verilere Bakılmalı?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Fon getirisi önemli bir başlangıç noktasıdır ancak tek başına
                yeterli değildir. Bir aylık performans kısa vadeli hareketi,
                altı aylık ve bir yıllık getiriler ise fonun farklı piyasa
                koşullarındaki seyrini anlamaya yardımcı olur. Karşılaştırma
                yaparken benzer yatırım stratejisine sahip fonları aynı dönem
                üzerinden değerlendirmek daha anlamlı sonuç verir.
              </p>
              <p>
                Risk değeri, fon fiyatındaki dalgalanma ihtiyacı hakkında genel
                bir gösterge sunar. Fonun şemsiye türü, yatırım yaptığı varlıklar,
                portföy yönetim şirketi ve yatırım süresi de risk-getiri dengesiyle
                birlikte ele alınmalıdır.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Para girişi ve yatırımcı sayısındaki değişim, fona yönelik güncel
                ilginin yönünü gösterir. Süreklilik gösteren para girişi ile artan
                yatırımcı sayısı olumlu bir ilgiye işaret edebilir; yine de bu
                göstergeler fonun gelecekteki getirisini garanti etmez.
              </p>
              <p>
                Ayrıntılı seçim için <Link href="/fonlar/fon-tarayici" className="font-semibold text-blue-700 hover:underline">fon tarayıcıyı</Link>,
                yan yana değerlendirme için <Link href="/fonlar/fon-karsilastirma" className="font-semibold text-blue-700 hover:underline">fon karşılaştırma aracını</Link> ve
                güncel ilgi yönünü görmek için <Link href="/fonlar/para-girisi" className="font-semibold text-blue-700 hover:underline">fon para girişi sayfasını</Link> inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-slate-950">Fon getirisi nasıl karşılaştırılır?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Aynı kategorideki fonların eşit dönem getirileri, risk seviyeleri
                ve dalgalanma özellikleri birlikte değerlendirilmelidir.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Fon para girişi neyi gösterir?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pozitif değer fona yönelen net ilgiyi, negatif değer fondan çıkan
                tutarın daha yüksek olduğunu gösterir.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Geçmiş getiri yeterli midir?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Hayır. Geçmiş performans; risk, strateji, vade ve portföy yapısıyla
                birlikte okunmalıdır ve gelecekteki getiriyi garanti etmez.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb } from "../_components/FonUi";
import { formatDate } from "@/lib/fon-format";
import { getCurrentFundsData } from "@/lib/fon-platform";
import FonKarsilastirmaClient, { type ComparisonFund } from "./FonKarsilastirmaClient";

export const metadata: Metadata = {
  title: "Fon Karşılaştırma: Getiri, Risk ve Para Akışı Analizi",
  description:
    "2 ila 5 yatırım fonunu güncel fiyat, risk, fon büyüklüğü, yatırımcı sayısı, para akışı ve dönemsel getiriye göre aynı ekranda karşılaştırın.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/fon-karsilastirma",
  },
};

export default function FonKarsilastirmaPage() {
  const data = getCurrentFundsData();
  const funds: ComparisonFund[] = data.fonlar.map((fund) => ({
    kod: fund.kod,
    ad: fund.ad,
    yonetici: fund.yonetici,
    aktifMi: fund.aktifMi,
    riskDegeri: fund.riskDegeri,
    fiyat: fund.fiyat,
    fonToplamDeger: fund.fonToplamDeger,
    kisiSayisi: fund.kisiSayisi,
    paraAkisi: fund.paraAkisi,
    getiriler: fund.getiriler,
  }));

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Fon Karşılaştırma" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Karşılaştırma
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            İki ila beş yatırım fonunu getiri, risk, fon büyüklüğü, yatırımcı
            sayısı ve para akışı bakımından yan yana değerlendirin. Benzer
            stratejiye sahip fonların güçlü ve zayıf yönlerini tek tabloda görün.
          </p>
        </section>

        <Suspense fallback={<p className="text-sm text-slate-500">Fon karşılaştırması hazırlanıyor...</p>}>
          <FonKarsilastirmaClient funds={funds} />
        </Suspense>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Yatırım Fonları Karşılaştırılırken Nelere Bakılmalı?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Sağlıklı bir fon karşılaştırması için öncelikle benzer yatırım
                stratejisine ve varlık dağılımına sahip fonlar seçilmelidir. Hisse
                senedi yoğun bir fon ile para piyasası fonunun getiri ve risk
                yapısı farklıdır; bu nedenle yalnızca en yüksek getiriye bakmak
                yanıltıcı olabilir.
              </p>
              <p>
                Bir aylık ve üç aylık getiriler güncel performansı gösterirken,
                bir yıl ve daha uzun dönemler fonun farklı piyasa koşullarındaki
                seyrini anlamaya yardım eder. Dönemler arasında belirgin fark varsa
                fonun son dönemde hızlanıp hızlanmadığı ayrıca değerlendirilmelidir.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Risk değeri, fon büyüklüğü ve yatırımcı sayısı performans
                verilerini tamamlar. Para akışının farklı dönemlerde aynı yönde
                olması yatırımcı ilgisindeki eğilimi gösterirken, tek günlük
                değişimler geçici piyasa hareketlerinden etkilenebilir.
              </p>
              <p>
                Daha fazla aday bulmak için <Link href="/fonlar/fon-tarayici" className="font-semibold text-blue-700 hover:underline">fon tarayıcıyı</Link>,
                fon bazında grafik ve tarihsel inceleme için ilgili fon kodunu,
                yöneticileri karşılaştırmak için <Link href="/fonlar/yoneticiler" className="font-semibold text-blue-700 hover:underline">fon yönetici analizi sayfasını</Link> inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-slate-950">
              Tek bir göstergeye göre fon seçilir mi?
            </h3>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
              Hayır. Getiri, risk seviyesi, yatırım süresi, fonun yatırım yaptığı
              varlıklar, yönetim yaklaşımı ve para akışı birlikte değerlendirilmelidir.
              Geçmiş performans gelecekte aynı getirinin oluşacağını garanti etmez.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

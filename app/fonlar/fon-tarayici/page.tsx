import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb } from "../_components/FonUi";
import { formatDate } from "@/lib/fon-format";
import {
  getCurrentFundsData,
  getFundCategories,
  getFundManagersForFilter,
} from "@/lib/fon-platform";
import FonTarayiciClient, { type ScannerFund } from "./FonTarayiciClient";

export const metadata: Metadata = {
  title: "Fon Tarayıcı: Getiri, Risk ve Para Akışına Göre Fon Bul",
  description:
    "Yatırım fonlarını fon kodu, tür, yönetici, risk seviyesi, büyüklük, yatırımcı sayısı, para akışı ve getiriye göre tarayın.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/fon-tarayici",
  },
};

export default function FonTarayiciPage() {
  const data = getCurrentFundsData();
  const funds: ScannerFund[] = data.fonlar.map((fund) => ({
    kod: fund.kod,
    slug: fund.slug,
    ad: fund.ad,
    kategori: fund.kategori,
    yonetici: fund.yonetici,
    yoneticiSlug: fund.yoneticiSlug,
    aktifMi: fund.aktifMi,
    riskDegeri: fund.riskDegeri,
    fonToplamDeger: fund.fonToplamDeger,
    kisiSayisi: fund.kisiSayisi,
    gunlukGetiri: fund.gunlukGetiri,
    paraAkisi: fund.paraAkisi,
    getiriler: fund.getiriler,
  }));

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Fon Tarayıcı" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Tarayıcı
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Yatırım fonlarını risk seviyesi, fon büyüklüğü, yatırımcı sayısı,
            para akışı ve farklı dönem getirilerine göre karşılaştırın. Hisse
            senedi, borçlanma araçları, para piyasası ve diğer fon türleri
            arasında aradığınız ölçütlere uyan seçenekleri inceleyin.
          </p>
        </section>

        <Suspense fallback={<p className="text-sm text-slate-500">Fon tarayıcı hazırlanıyor...</p>}>
          <FonTarayiciClient
            funds={funds}
            categories={getFundCategories()}
            managers={getFundManagersForFilter()}
          />
        </Suspense>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Fon Tarama Kriterleri Nasıl Yorumlanır?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Fon taraması yaparken ilk adım yatırım yapılacak süreyi ve kabul
                edilebilir risk seviyesini belirlemektir. Kısa vadeli getiri
                sıralamaları güncel piyasa hareketlerinden daha fazla etkilenirken,
                bir yıl ve üzerindeki dönemler fonun stratejisi hakkında daha geniş
                bir görünüm sunabilir.
              </p>
              <p>
                Risk değeri yükseldikçe fon fiyatındaki dalgalanma ihtimali de
                genellikle artar. Bu nedenle yüksek getiri gösteren bir fonu,
                benzer kategorideki fonların risk değerleri ve daha uzun dönem
                performansıyla birlikte değerlendirmek gerekir.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Fon büyüklüğü ve yatırımcı sayısı, fonun piyasadaki ölçeğini ve
                gördüğü ilgiyi anlamaya yardımcı olur. Günlük veya aylık para
                akışı ise bu ilginin hangi yönde değiştiğini gösterir. Tek günlük
                güçlü hareketler yerine farklı dönemlerin aynı yönde ilerleyip
                ilerlemediğine bakmak daha dengeli bir değerlendirme sağlar.
              </p>
              <p>
                Seçtiğiniz fonları ayrıntılı incelemek için fon koduna gidebilir;
                adayları yan yana görmek için <Link href="/fonlar/fon-karsilastirma" className="font-semibold text-blue-700 hover:underline">fon karşılaştırma sayfasını</Link>,
                yönetim şirketi bazında değerlendirmek için <Link href="/fonlar/yoneticiler" className="font-semibold text-blue-700 hover:underline">fon yöneticileri analizini</Link> kullanabilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-slate-950">Risk değeri</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fonun fiyat dalgalanması hakkında karşılaştırmalı bir ölçü sunar;
                yatırım süresi ve fon türüyle birlikte okunmalıdır.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Dönemsel getiri</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Bir ay, altı ay ve bir yıl gibi farklı dönemler fonun kısa ve uzun
                vadeli performansını ayrı ayrı değerlendirmeyi sağlar.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Para akışı</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fona giren ve fondan çıkan net tutarın yönünü göstererek yatırımcı
                ilgisindeki değişimi izlemeye yardımcı olur.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

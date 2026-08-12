import { seoAciklamasi } from "@/lib/seo-metadata";
import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import HisseKarsilastirmaAraci from "@/components/HisseKarsilastirmaAraci";
import { getHisseKarsilastirmaVeriSeti } from "@/lib/hisse-karsilastirma";

const canonicalUrl = "https://www.hocaileborsa.com/borsa/hisse-karsilastirma";

export const metadata: Metadata = {
  title: "Hisse Karşılaştırma Aracı | Finansal Oran Karşılaştırması",
  description:
    seoAciklamasi("İki veya üç BIST şirketini F/K, PD/DD, kârlılık, borçluluk, büyüme ve temettü verileriyle aynı ekranda karşılaştırın.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hisse Karşılaştırma Aracı",
    description:
      "BIST şirketlerini değerleme, kârlılık, borçluluk, büyüme ve temettü başlıklarında yan yana inceleyin.",
    url: canonicalUrl,
    type: "website",
  },
};

export const dynamic = "force-static";

function tarihiIsoYap(tarih: string) {
  const eslesme = tarih.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return eslesme ? `${eslesme[3]}-${eslesme[2]}-${eslesme[1]}` : undefined;
}

export default function HisseKarsilastirmaPage() {
  const veriSeti = getHisseKarsilastirmaVeriSeti();
  const kodlar = new Set(veriSeti.hisseler.map((hisse) => hisse.kod));
  const varsayilanKodlar: [string, string] =
    kodlar.has("THYAO") && kodlar.has("PGSUS")
      ? ["THYAO", "PGSUS"]
      : [veriSeti.hisseler[0]?.kod ?? "", veriSeti.hisseler[1]?.kod ?? ""];
  const varsayilanHisseler = varsayilanKodlar
    .map((kod) => veriSeti.hisseler.find((hisse) => hisse.kod === kod))
    .filter((hisse) => hisse !== undefined);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Hisse Karşılaştırma Aracı",
    url: canonicalUrl,
    description:
      "BIST şirketlerini finansal oranlar, büyüme ve temettü takvimiyle karşılaştıran ücretsiz araç.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    dateModified: tarihiIsoYap(veriSeti.guncellemeTarihi),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 pb-24 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl">
        <header className="mb-7 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
            {veriSeti.hisseler.length} BIST şirketi
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Hisse Karşılaştırma Aracı
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            İki veya üç şirketi seçerek değerleme çarpanlarını, kârlılık oranlarını, borçluluk yapısını, büyüme verilerini ve kayıtlı temettü ödemelerini yan yana inceleyin. Seçimleriniz paylaşılabilir bağlantıya otomatik olarak eklenir.
          </p>
        </header>

        <HisseKarsilastirmaAraci
          baslangicHisseleri={varsayilanHisseler}
          guncellemeTarihi={veriSeti.guncellemeTarihi}
          temettuYili={veriSeti.temettuYili}
          varsayilanKodlar={varsayilanKodlar}
          veriUrl="/borsa/hisse-karsilastirma/veri"
        />

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Hisse karşılaştırması nasıl okunmalı?</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              Düşük bir değerleme çarpanı tek başına hissenin ucuz olduğunu, yüksek bir kârlılık oranı da bu performansın sürdürüleceğini göstermez. Şirketlerin sektörleri, finansal veri dönemleri, borç yapıları ve tek seferlik gelir veya giderleri birlikte değerlendirilmelidir.
            </p>
            <p>
              Sıfır veya negatif kâr nedeniyle ekonomik anlam taşımayan F/K ve benzeri çarpanlar “Anlamlı değil” olarak gösterilir. Kaynakta bulunmayan değerler tahmin edilmez ve “Veri yok” etiketiyle ayrılır.
            </p>
            <p>
              Tüm şirketleri ve kaynak tablodaki diğer alanları görmek için <Link href="/borsa/oran-analizi" prefetch={false} className="font-bold text-blue-600 hover:text-blue-800">Oran Analizi</Link> sayfasını inceleyebilirsiniz. Şirket bilgilerine ise <Link href="/hisseler" prefetch={false} className="font-bold text-blue-600 hover:text-blue-800">Hisse Künyeleri</Link> bölümünden ulaşabilirsiniz.
            </p>
            <p className="font-medium text-slate-500">Bu araçtaki veriler yatırım tavsiyesi değildir.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "HLGYO'dan %56,25 Bedelsiz Sermaye Artırımı Kararı",
  description:
    seoAciklamasi("Halk GYO, sermayesini 3,84 milyar TL'den 6 milyar TL'ye çıkarmak için %56,25 oranında bedelsiz sermaye artırımı kararı aldı. Artırımın 2025 yılı dönem kârından karşılanması planlanıyor.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/hlgyo-5625-bedelsiz-sermaye-artirimi-karari",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/hlgyo-5625-bedelsiz-sermaye-artirimi-karari.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/hlgyo-5625-bedelsiz-sermaye-artirimi-karari.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Halk GYO (HLGYO)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619501",
    metin:
      "Halk Gayrimenkul Yatırım Ortaklığı, 22 Haziran 2026 tarihli Yönetim Kurulu kararıyla bedelsiz sermaye artırımı sürecini başlattığını açıkladı. Şirketin mevcut 3.840.000.000 TL olan çıkarılmış sermayesinin, kayıtlı sermaye tavanı içinde 6.000.000.000 TL'ye çıkarılması planlanıyor. Artırım tutarı 2.160.000.000 TL olurken, toplam bedelsiz pay alma oranı %56,25 olarak duyuruldu.",
  },
  {
    baslik: "Bedelsiz Artırımın Kaynağı",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619501",
    metin:
      "Açıklamaya göre bedelsiz sermaye artırımı 2025 yılı dönem kârından karşılanacak. Şirket, 2025 yılı Olağan Genel Kurulu'nda alınan karar doğrultusunda net dağıtılabilir dönem kârından 2,16 milyar TL'nin bedelsiz hisse senedi olarak dağıtılmasına istinaden sermaye artırımına karar verdi. Bu yönüyle karar, iç kaynaklardan yapılan klasik bir bedelsiz artırım yerine kâr payının pay senedi olarak dağıtılması niteliği taşıyor.",
  },
  {
    baslik: "Yatırımcı Açısından Önemi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619501",
    metin:
      "Bedelsiz sermaye artırımları şirketin piyasa değerini tek başına artırmaz; ancak dolaşımdaki pay sayısını artırarak hisse fiyatının teknik olarak bölünmesine neden olur. HLGYO özelinde %56,25 oranındaki artırım, pay adedinde belirgin bir yükseliş yaratacağı için yatırımcıların hak kullanım tarihi, SPK başvuru süreci ve dağıtım takvimini takip etmesi gerekir. Kararın 2025 yılı kârından karşılanacak olması, şirketin kâr dağıtım politikasının hisse senedi şeklinde uygulanması bakımından da dikkat çekiyor.",
  },
  {
    baslik: "Süreçte Ne Takip Edilecek?",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619501",
    metin:
      "Yönetim Kurulu kararı sonrası sürecin tamamlanması için Sermaye Piyasası Kurulu'na başvuru yapılması ve gerekli izinlerin alınması gerekiyor. Bu nedenle yatırımcılar açısından sonraki kritik adımlar SPK onayı, hak kullanım tarihi ve payların dağıtım takvimi olacak. Bu aşamalar tamamlanmadan bedelsiz paylar yatırımcı hesaplarına geçmez.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "HLGYO'dan %56,25 Bedelsiz Sermaye Artırımı Kararı",
  description:
    "Halk GYO, sermayesini 3,84 milyar TL'den 6 milyar TL'ye çıkarmak için %56,25 oranında bedelsiz sermaye artırımı kararı aldı. Artırımın 2025 yılı dönem kârından karşılanması planlanıyor.",
  datePublished: "2026-06-22T18:23:00+03:00",
  dateModified: "2026-06-22T18:23:00+03:00",
  url: "https://www.hocaileborsa.com/haber/hlgyo-5625-bedelsiz-sermaye-artirimi-karari",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/hlgyo-5625-bedelsiz-sermaye-artirimi-karari.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/hlgyo-5625-bedelsiz-sermaye-artirimi-karari.webp"
              alt="HLGYO'dan %56,25 Bedelsiz Sermaye Artırımı Kararı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              HLGYO&apos;dan %56,25 Bedelsiz Sermaye Artırımı Kararı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Sermaye Artırımı
              </span>
              <time dateTime="2026-06-22" className="text-sm text-slate-500">
                22 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Halk GYO, 2025 yılı dönem kârından karşılanmak üzere bedelsiz
                sermaye artırımı kararı aldığını KAP&apos;a bildirdi. Şirketin
                mevcut sermayesinin 3,84 milyar TL&apos;den 6 milyar TL&apos;ye
                yükseltilmesi ve toplam bedelsiz pay alma oranının %56,25 olması
                planlanıyor.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-flex text-sm font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                    >
                      Orijinal KAP bildirimi
                    </a>
                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                HLGYO&apos;nun %56,25 oranındaki bedelsiz sermaye artırımı kararı,
                hisse sayısında artış ve fiyatın teknik olarak bölünmesi
                açısından yatırımcıların takip etmesi gereken önemli bir sermaye
                işlemi olarak öne çıkıyor.
              </div>
              <HaberIlgiliBolumler
                slug="hlgyo-5625-bedelsiz-sermaye-artirimi-karari"
                baslik="HLGYO'dan %56,25 Bedelsiz Sermaye Artırımı Kararı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/hlgyo-5625-bedelsiz-sermaye-artirimi-karari" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "08 Haziran 2026 Pazartesi KAP Bildirimleri Özeti",
  description:
    "08 Haziran 2026 Pazartesi günü KAP'a düşen öne çıkan bildirimlerin özeti: ihale süreçleri, temettü kararları, bedelsiz sermaye artırımı, pay işlemleri, dava açıklamaları ve geri alımlar.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/08-haziran-2026-pazartesi-kap-bildirimleri-ozeti",
  },
};

const kapHaberleri = [
  {
    baslik: "Kuzey Boru (KBORU)",
    metin:
      "Kuzey Boru, DSİ 24. Bölge Müdürlüğü tarafından düzenlenen Kars Barajı Sulaması CTP boru alımı ihalesinde en avantajlı teklifi vererek birinci olduğunu açıkladı. İhale bedeli 262,5 milyon TL + KDV olarak duyuruldu. Bu gelişme, şirketin kamu altyapı projeleri tarafındaki iş hacmi açısından günün öne çıkan başlıklarından biri oldu.",
  },
  {
    baslik: "TAV Havalimanları (TAVHL)",
    metin:
      "TAV Havalimanları ve Limak İnşaat konsorsiyumu, Kuveyt Uluslararası Havalimanı Terminal 2 işletme ve bakım ihalesi için yeniden teklif sundu. TAV'ın konsorsiyumdaki payının yüzde 60 olduğu açıklandı. İhale süreci, şirketin yurt dışı operasyonel büyüme potansiyeli açısından yakından izleniyor.",
  },
  {
    baslik: "Kuvva Gıda (KUVVA)",
    metin:
      "Kuvva Gıda, sermayesini 31 milyon TL'den 450 milyon TL'ye çıkarma kararı aldı. Yaklaşık yüzde 1350 oranındaki bedelsiz sermaye artırımının tamamının iç kaynaklardan karşılanacağı belirtildi. Yüksek oranlı bedelsiz kararı nedeniyle günün en dikkat çeken sermaye işlemlerinden biri oldu.",
  },
  {
    baslik: "Ülker Bisküvi (ULKER)",
    metin:
      "Ülker Bisküvi'de temettü kararı genel kurulda kabul edildi. 19 Haziran 2026 hak kullanım tarihli olmak üzere pay başına brüt 5,73 TL, net 4,87 TL kâr payı dağıtılacağı açıklandı. Temettü tarafında günün öne çıkan şirketlerinden biri oldu.",
  },
  {
    baslik: "İş Yatırım (ISMEN)",
    metin:
      "İş Yatırım, ABD'de açılan bir davada davalılar arasında yer aldığını duyurdu. Şirket, sürecin hukuk danışmanlarıyla takip edildiğini bildirdi. Açıklama doğrudan finansal etki içermese de hukuki süreç nedeniyle yatırımcıların izleyebileceği önemli başlıklardan biri oldu.",
  },
  {
    baslik: "Ereğli Demir Çelik (EREGL)",
    metin:
      "Erdemir, Yatırımcı Tazmin Merkezi'ne devredilen paylarla ilgili hak sahiplerinin başvuru sürecine ilişkin duyuru yaptı. Son başvuru tarihinin 6 Eylül 2026 olduğu belirtildi. Bildirim, hak sahipleri açısından takip edilmesi gereken teknik ancak önemli bir duyuru niteliği taşıyor.",
  },
  {
    baslik: "Destek Finans Faktoring (DSTKF)",
    metin:
      "Tera Portföy fonları üzerinden Destek Finans Faktoring paylarında işlem yapıldığı ve pay oranının yüzde 5 eşiğinin üzerine çıkarak yaklaşık yüzde 5,01 seviyesine yükseldiği açıklandı. Eşik aşımı bildirimi olması nedeniyle pay sahipliği yapısı açısından izlenebilir bir gelişme oldu.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında AHGAZ, ENERY, GLYHO ve NTHOL öne çıktı. Şirketlerin gerçekleştirdiği pay geri alım işlemleri, piyasa fiyatlamasını destekleyici algılanabilecek gelişmeler arasında yer aldı. Ancak geri alımlar tek başına operasyonel büyüme göstergesi olarak değerlendirilmemelidir.",
  },
  {
    baslik: "Pay Alım-Satım Bildirimleri",
    metin:
      "AKSA, DITAS, EGEPO, HEDEF ve TEHOL gibi şirketlerde ortak veya yatırımcı bazlı pay alım-satım bildirimleri dikkat çekti. Bu tür açıklamalar, ortaklık yapısındaki değişimler ve büyük yatırımcı hareketleri açısından takip ediliyor.",
  },
  {
    baslik: "Günün Genel Görünümü",
    metin:
      "08 Haziran 2026 KAP akışında ihale, yurt dışı proje süreci, bedelsiz sermaye artırımı, temettü kararı, hukuki süreç açıklaması, eşik aşımı bildirimi ve geri alım haberleri öne çıktı. Günün en güçlü başlıkları KBORU, TAVHL, KUVVA ve ULKER tarafında yoğunlaştı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "08 Haziran 2026 Pazartesi KAP Bildirimleri Özeti",
  description:
    "08 Haziran 2026 Pazartesi günü KAP'a düşen öne çıkan bildirimlerin özeti: ihale süreçleri, temettü kararları, bedelsiz sermaye artırımı, pay işlemleri, dava açıklamaları ve geri alımlar.",
  datePublished: "2026-06-08T09:00:00+03:00",
  dateModified: "2026-06-08T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/08-haziran-2026-pazartesi-kap-bildirimleri-ozeti",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber950.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti.webp"
              alt="08 Haziran 2026 Pazartesi KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              08 Haziran 2026 Pazartesi KAP Bildirimleri Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-08" className="text-sm text-slate-500">8 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 08 Haziran 2026 Pazartesi günü KAP’a düşen
                öne çıkan bildirimlerde ihale süreçleri, yurt dışı operasyonel
                büyüme adımları, yüksek oranlı bedelsiz sermaye artırımı,
                temettü kararı, hukuki süreç açıklamaları, pay alım-satım
                bildirimleri ve geri alım işlemleri dikkat çekti.
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
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli başlıkları arasında KBORU’nun 262,5 milyon TL +
                KDV tutarlı ihale süreci, TAVHL’nin Kuveyt Havalimanı ihalesi
                için yeniden teklif sunması, KUVVA’nın yaklaşık yüzde 1350
                oranındaki bedelsiz sermaye artırımı kararı ve ULKER’in temettü
                dağıtım kararı öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="08-haziran-2026-pazartesi-kap-bildirimleri-ozeti" baslik="08 Haziran 2026 Pazartesi KAP Bildirimleri Özeti" />

              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="mb-2 text-sm font-semibold text-zinc-900">Bu haberde geçen şirketlerin detaylı analizleri:</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/borsa/dikkat-cekenler/kboru-kars-baraji-ihalesi" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">KBORU İhale Haberi <span aria-hidden>→</span></Link>
                  <Link href="/borsa/dikkat-cekenler/tavhl-kuveyt-havalimani-ihalesi" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">TAVHL Kuveyt İhalesi <span aria-hidden>→</span></Link>
                  <Link href="/borsa/dikkat-cekenler/kuvva-bedelsiz-sermaye-artirimi" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">KUVVA Bedelsiz <span aria-hidden>→</span></Link>
                  <Link href="/borsa/dikkat-cekenler/ulker-temettu-karari" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">ULKER Temettü <span aria-hidden>→</span></Link>
                  <Link href="/haber/dstkf-empae-zergy-vbts-tedbiri" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">DSTKF VBTS Tedbiri <span aria-hidden>→</span></Link>
                  <Link href="/borsa/dikkat-cekenler" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50">Tüm Dikkat Çekenler <span aria-hidden>→</span></Link>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

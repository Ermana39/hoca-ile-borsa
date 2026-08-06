import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "glyho-kusadasi-lizbon-limanlarinda-pay-artisi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/glyho-kusadasi-lizbon-limanlarinda-pay-artisi.webp";

export const metadata: Metadata = {
  title: "GLYHO Kuşadası ve Lizbon Limanlarında Pay Artışı Açıkladı",
  description:
    "GLYHO, dolaylı bağlı ortaklıkları üzerinden Kuşadası Yolcu Limanı'nda payını %99,99'a çıkarırken Lizbon Yolcu Limanı'nda payını %60'a yükseltecek hisse alım sözleşmesi imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "GLYHO Kuşadası ve Lizbon Limanlarında Pay Artışı Açıkladı",
    description:
      "Global Yatırım Holding, Kuşadası ve Lizbon yolcu limanlarında bağlı ortaklıkları üzerinden pay artışı açıkladı. Lizbon işlemi tamamlanırsa liman tam konsolidasyona dahil edilecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "GLYHO Kuşadası ve Lizbon limanlarında pay artışı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLYHO Kuşadası ve Lizbon Limanlarında Pay Artışı Açıkladı",
    description:
      "GLYHO, Kuşadası Yolcu Limanı'nda payını %99,99'a çıkardı. Lizbon Yolcu Limanı'nda ise payın %60'a yükselmesi için sözleşme imzalandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Kuşadası Limanı",
    deger: "%99,99",
    aciklama: "Ege Port'taki yeni pay oranı",
  },
  {
    baslik: "Alınan Pay",
    deger: "%9,52",
    aciklama: "RCCL'den devralındı",
  },
  {
    baslik: "Lizbon Limanı",
    deger: "%60",
    aciklama: "İşlem tamamlanırsa yeni pay oranı",
  },
  {
    baslik: "Muhasebe Etkisi",
    deger: "Tam Konsolidasyon",
    aciklama: "Lizbon Port için beklenen değişim",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Global Yatırım Holding A.Ş." },
  { etiket: "Hisse Kodu", deger: "GLYHO" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "18:41:29" },
  { etiket: "Açıklama Türü", deger: "Özel Durum Açıklaması (Genel)" },
  { etiket: "Özet Bilgi", deger: "Bağlı ortaklığın hisse edinimi" },
  { etiket: "İşlem Tarafı", deger: "Royal Caribbean Cruises Ltd. (RCCL)" },
  { etiket: "Kuşadası Limanı İşletmecisi", deger: "Ege Liman İşletmeleri A.Ş." },
  { etiket: "Kuşadası Pay Değişimi", deger: "%90,47 → %99,99" },
  { etiket: "Lizbon Limanı İşletmecisi", deger: "Lisbon Cruise Port, Lda." },
  { etiket: "Lizbon Hedef Pay Değişimi", deger: "%50 → %60" },
  { etiket: "Lizbon İşlem Durumu", deger: "Ön şartlar ve resmi izinler bekleniyor" },
];

const limanDetaylari = [
  {
    baslik: "Kuşadası Yolcu Limanı",
    onceki: "%90,47",
    yeni: "%99,99",
    aciklama:
      "Global Liman İşletmeleri A.Ş., Ege Port sermayesinde RCCL'nin sahip olduğu %9,52 payı devraldı. Böylece Kuşadası Yolcu Limanı'ndaki pay oranı neredeyse tamamına ulaştı.",
  },
  {
    baslik: "Lizbon Yolcu Limanı",
    onceki: "%50",
    yeni: "%60",
    aciklama:
      "Global Ports Holding Ltd. bağlı ortaklığı, RCCL'nin Lisbon Port'taki %20 payının yarısını almak için hisse alım sözleşmesi imzaladı. Devir, resmi izinler ve ön şartların tamamlanmasına bağlı olacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Kuşadası'nda kontrol gücü neredeyse tamamen GLYHO tarafına geçti",
    aciklama:
      "Ege Port'taki payın %99,99'a yükselmesi, Kuşadası Yolcu Limanı operasyonunda ortaklık yapısını sadeleştiriyor. Bu yapı, karar alma süreçlerinde daha net kontrol ve daha doğrudan operasyon yönetimi anlamına gelir.",
  },
  {
    baslik: "Lizbon işlemi finansal tablolarda sınıflandırmayı değiştirebilir",
    aciklama:
      "Lizbon Port işlemi tamamlanırsa şirketin dolaylı payı %60'a çıkacak. KAP açıklamasında bu artışın, Lisbon Port'un özkaynak yöntemiyle muhasebeleştirilen iştirak yerine tam konsolidasyon kapsamına alınması sonucunu doğuracağı belirtildi.",
  },
  {
    baslik: "RCCL gibi büyük bir kruvaziyer oyuncusundan pay alımı yapıldı",
    aciklama:
      "İşlemlerin karşı tarafında Royal Caribbean Cruises Ltd. bulunuyor. Kruvaziyer ekosisteminde güçlü bir global oyuncudan pay devri yapılması, haberin sadece yerel değil uluslararası liman portföyü açısından da okunmasını gerektiriyor.",
  },
];

const sirketHakkinda = [
  "Global Yatırım Holding, enerji, liman işletmeciliği, gayrimenkul, finans ve altyapı yatırımları gibi farklı alanlarda faaliyet gösteren bir holding yapısına sahip.",
  "Holdingin liman tarafındaki ana operasyon gücü Global Ports Holding üzerinden geliyor. Global Ports Holding, kruvaziyer liman işletmeciliğinde küresel ölçekte en büyük bağımsız operatörlerden biri olarak konumlanıyor.",
  "Bu nedenle GLYHO tarafında gelen liman haberleri, yalnızca iştirak portföyü açısından değil; döviz bazlı gelir potansiyeli, turizm trafiği, konsolidasyon kapsamı ve operasyonel ölçek açısından da önemli görülüyor.",
];

const finansalEtki = [
  "Kuşadası tarafında pay oranının %99,99'a yükselmesi, Ege Port üzerindeki ekonomik payın daha da artması anlamına geliyor.",
  "Lizbon tarafında asıl finansal etki, hisse devrinin tamamlanmasıyla ortaya çıkacak. İşlem tamamlanmadan önce resmi kurum izinleri ve diğer ön şartlar takip edilmeli.",
  "Lizbon Port'un tam konsolidasyon kapsamına alınması, şirketin finansal tablolarında gelir, gider, varlık ve borç kalemlerinin sunumunu değiştirebilir.",
  "Haber doğrudan yeni bir liman işletme hakkı kazanımı değil; mevcut portföyde pay artırımı ve konsolidasyon etkisi taşıyan bir gelişme.",
  "Kruvaziyer trafiği güçlü seyrederse, pay artışlarının operasyonel sonuçlara katkısı daha görünür hale gelebilir.",
];

const hisseAcisindanOkuma = [
  {
    baslik: "Pozitif taraf",
    aciklama:
      "Şirket mevcut liman portföyünde sahiplik oranını artırıyor. Özellikle Lizbon Port'un tam konsolidasyona geçme ihtimali, finansal raporlarda daha görünür bir etki yaratabilir.",
  },
  {
    baslik: "Dikkat edilmesi gereken taraf",
    aciklama:
      "Lizbon işlemi henüz tamamlanmış değil. Resmi izinler ve ön şartların gerçekleşmesi gerekiyor. Bu nedenle nihai finansal etki için işlem kapanışı beklenmeli.",
  },
  {
    baslik: "Piyasa okuması",
    aciklama:
      "Haber, operasyonel büyümeden çok stratejik sahiplik artışı ve konsolidasyon etkisi üzerinden okunmalı. Kısa vadeli fiyat hareketinden bağımsız olarak liman portföyünün yapısı güçleniyor.",
  },
];

const takipBasliklari = [
  "Lizbon Port hisse devri için resmi kurum izinlerinin tamamlanıp tamamlanmayacağı",
  "Lizbon Port'un tam konsolidasyon kapsamına ne zaman dahil edileceği",
  "Kuşadası Yolcu Limanı'nın kruvaziyer yolcu trafiği",
  "Global Ports Holding'in diğer liman portföyündeki büyüme adımları",
  "Kruvaziyer sezonunun GLYHO finansallarına yansıması",
  "İştirak gelirleri ile konsolide gelir kalemlerinde oluşabilecek değişim",
];

const seoSorular = [
  {
    soru: "GLYHO ne açıkladı?",
    cevap:
      "GLYHO, dolaylı bağlı ortaklıkları üzerinden Kuşadası Yolcu Limanı'nı işleten Ege Port'taki payını %99,99'a çıkardığını ve Lizbon Yolcu Limanı'nda payını %60'a yükseltecek hisse alım sözleşmesi imzalandığını açıkladı.",
  },
  {
    soru: "GLYHO Kuşadası Yolcu Limanı'nda payını kaça çıkardı?",
    cevap:
      "GLYHO'nun dolaylı bağlı ortaklığı Global Liman İşletmeleri A.Ş., Ege Port'taki payını %90,47'den %99,99'a yükseltti.",
  },
  {
    soru: "GLYHO Lizbon Yolcu Limanı'nda ne kadar pay alacak?",
    cevap:
      "Global Ports Holding Ltd. bağlı ortaklığı, RCCL'nin Lisbon Port'taki %20 payının yarısını, yani %10 payı almak üzere sözleşme imzaladı. İşlem tamamlanırsa GLYHO'nun dolaylı payı %50'den %60'a çıkacak.",
  },
  {
    soru: "Lizbon Port işlemi finansal tabloları nasıl etkileyebilir?",
    cevap:
      "KAP açıklamasına göre pay artışı tamamlanırsa Lisbon Port, özkaynak yöntemiyle muhasebeleştirilen iştirak yerine tam konsolidasyon kapsamına dahil edilecek.",
  },
  {
    soru: "GLYHO haberi hisse açısından neden önemli?",
    cevap:
      "Haber, şirketin kruvaziyer liman portföyündeki sahiplik oranlarını artırması ve Lizbon Port için tam konsolidasyon etkisi doğurabilecek olması nedeniyle önemli görülüyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "GLYHO Kuşadası ve Lizbon Limanlarında Pay Artışı Açıkladı",
  description:
    "GLYHO, dolaylı bağlı ortaklıkları üzerinden Kuşadası Yolcu Limanı'nda payını %99,99'a çıkarırken Lizbon Yolcu Limanı'nda payını %60'a yükseltecek hisse alım sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-14T18:41:29+03:00",
  dateModified: "2026-07-14T18:41:29+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function GlyhoLimanPayArtisiHaberiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/glyho-kusadasi-lizbon-limanlarinda-pay-artisi.webp"
              alt="GLYHO Kuşadası ve Lizbon limanlarında pay artışı"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              GLYHO Kuşadası ve Lizbon Limanlarında Pay Artışı Açıkladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Global Yatırım Holding A.Ş. (<strong>GLYHO</strong>), dolaylı
                bağlı ortaklıkları üzerinden Kuşadası ve Lizbon yolcu
                limanlarında pay artışı açıklaması yaptı.
              </p>

              <p>
                KAP duyurusuna göre Global Liman İşletmeleri A.Ş., Kuşadası
                Yolcu Limanı'nı işleten Ege Liman İşletmeleri A.Ş.'de Royal
                Caribbean Cruises Ltd.'nin sahip olduğu <strong>%9,52</strong>{" "}
                payı devraldı. Böylece Ege Port'taki pay oranı{" "}
                <strong>%90,47'den %99,99'a</strong> yükseldi.
              </p>

              <p>
                Lizbon tarafında ise Global Ports Holding Ltd. bağlı ortaklığı,
                Lisbon Cruise Port, Lda. sermayesinde RCCL'nin sahip olduğu{" "}
                <strong>%20 payın yarısını</strong> almak üzere hisse alım
                sözleşmesi imzaladı. İşlem tamamlanırsa Lizbon Yolcu
                Limanı'ndaki dolaylı pay <strong>%50'den %60'a</strong>{" "}
                çıkacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  GLYHO, kruvaziyer liman portföyünde iki ayrı pay artışı
                  gelişmesini duyurdu. İlk işlem Kuşadası Yolcu Limanı tarafında
                  tamamlandı ve Ege Port'taki pay oranı %99,99 seviyesine çıktı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İkinci işlem Lizbon Yolcu Limanı için imzalanan hisse alım
                  sözleşmesi oldu. Bu işlem resmi izinler ve ön şartların
                  tamamlanmasına bağlı olarak kapanacak. İşlem tamamlanırsa
                  Lisbon Port'un GLYHO finansallarındaki muhasebe sınıflaması da
                  değişecek.
                </p>
              </Section>

              <Section title="İşlemin detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {genelDetaylar.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Liman bazında pay değişimi">
                <div className="grid gap-4">
                  {limanDetaylari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {item.baslik}
                        </h3>
                        <div className="text-sm font-bold text-slate-700">
                          {item.onceki} → {item.yeni}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Neden önemli?">
                <div className="grid gap-4">
                  {nedenOnemli.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Şirket ve proje arka planı">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  GLYHO haberinde en kritik başlık, pay artışının sadece ortaklık
                  yüzdesiyle sınırlı kalmaması. Lizbon işlemi tamamlanırsa
                  Lisbon Port'un finansal tablolardaki sınıflaması değişecek ve
                  tam konsolidasyon kapsamına dahil edilecek.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalEtki.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından okuma">
                <div className="grid gap-4">
                  {hisseAcisindanOkuma.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Sırada ne var?">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="GLYHO liman pay artışı hakkında kısa soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1633774"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  GLYHO — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="GLYHO Kuşadası ve Lizbon Limanlarında Pay Artışı Açıkladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Şirket açıklamaları, liman operasyonları ve
                konsolidasyon etkileri birlikte değerlendirilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
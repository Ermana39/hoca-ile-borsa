import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "BMSTL’de %100 Bedelsiz Sermaye Artırımı İçin SPK Onayı",
  description:
    "BMS Birleşik Metal Sanayi ve Ticaret A.Ş. (BMSTL), %100 oranındaki bedelsiz sermaye artırımı için SPK başvurusunun onaylandığını açıkladı. Şirket sermayesi 150 milyon TL'den 300 milyon TL'ye çıkarılacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi"],
  },
};

const haberDetaylari = [
  {
    baslik: "BMSTL’de bedelsiz sermaye artırımı onaylandı",
    metin:
      "BMS Birleşik Metal Sanayi ve Ticaret A.Ş. (BMSTL), bedelsiz sermaye artırımı başvurusuna ilişkin SPK sonucunu KAP üzerinden duyurdu. Açıklamaya göre şirketin 150 milyon TL olan mevcut sermayesinin %100 oranında artırılarak 300 milyon TL'ye çıkarılması için yapılan başvuru SPK tarafından onaylandı. Bu karar, şirketin sermaye yapısında doğrudan değişiklik yaratacağı için yatırımcıların yakından takip ettiği başlıklar arasında yer aldı.",
  },
  {
    baslik: "Artırımın kaynağı iç kaynaklar olacak",
    metin:
      "Şirket açıklamasında artırılacak 150 milyon TL nominal değerli payın iç kaynaklardan karşılanacağı belirtildi. Yasal kayıtlarda sermaye düzeltmesi olumlu farklarının kullanılacağı, SPK düzenlemelerine göre hazırlanan finansal tablolarda ise yabancı para çevrim farklarının kaynak olarak dikkate alınacağı ifade edildi. Bu nedenle işlem, şirkete doğrudan nakit girişi sağlayan bedelli sermaye artırımı değil, mevcut özkaynak kalemlerinin sermayeye eklenmesi şeklinde gerçekleşecek bir bedelsiz sermaye artırımıdır.",
  },
  {
    baslik: "Yatırımcı açısından ne anlama geliyor?",
    metin:
      "Bedelsiz sermaye artırımlarında şirketin toplam piyasa değeri işlem günü teorik olarak değişmez; pay adedi artarken fiyat buna göre düzeltilir. Ancak yüksek oranlı bedelsiz kararları, piyasada hisseye yönelik ilgiyi artırabildiği için kısa vadede haber akışı açısından dikkat çekebilir. BMSTL tarafında asıl izlenmesi gereken nokta, sermaye artırım sürecinin hak kullanım tarihleriyle tamamlanması ve sonrasında şirketin faaliyet performansındaki gelişmeler olacaktır.",
  },
  {
    baslik: "SPK onay tarihi ve süreç",
    metin:
      "BMSTL, esas sözleşmenin sermayeye ilişkin maddesinin tadili ve ihraç belgesinin onaylanması için yaptığı başvurunun SPK tarafından onaylandığını açıkladı. Bildirimde SPK onay tarihinin 17 Haziran 2026 olduğu, onayın şirkete 22 Haziran 2026 tarihli yazı ile bildirildiği belirtildi. Bu aşamadan sonra hak kullanım sürecine ilişkin tarihler yatırımcılar tarafından ayrıca takip edilecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "BMSTL’de %100 Bedelsiz Sermaye Artırımı İçin SPK Onayı",
  description:
    "BMS Birleşik Metal Sanayi ve Ticaret A.Ş. (BMSTL), %100 oranındaki bedelsiz sermaye artırımı için SPK başvurusunun onaylandığını açıkladı. Şirket sermayesi 150 milyon TL'den 300 milyon TL'ye çıkarılacak.",
  datePublished: "2026-06-22T15:19:00+03:00",
  dateModified: "2026-06-22T15:45:00+03:00",
  url: "https://www.hocaileborsa.com/haber/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi",
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
  image: "https://www.hocaileborsa.com/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi.webp",
  inLanguage: "tr",
};

export default function HaberPage() {
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
              src="/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi.webp"
              alt="BMSTL’de %100 Bedelsiz Sermaye Artırımı İçin SPK Onayı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              BMSTL’de %100 Bedelsiz Sermaye Artırımı İçin SPK Onayı
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
                BMS Birleşik Metal Sanayi ve Ticaret A.Ş. (BMSTL), %100
                oranındaki bedelsiz sermaye artırımı için yaptığı SPK
                başvurusunun onaylandığını açıkladı. Şirketin mevcut 150 milyon
                TL olan çıkarılmış sermayesinin, iç kaynaklardan karşılanmak
                üzere 300 milyon TL’ye çıkarılması planlanıyor.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Mevcut Sermaye:
                  </span>{" "}
                  150.000.000 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Ulaşılacak Sermaye:
                  </span>{" "}
                  300.000.000 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Bedelsiz Oranı:
                  </span>{" "}
                  %100
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    SPK Başvuru Sonucu:
                  </span>{" "}
                  Onay
                </div>
              </div>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
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
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Kaynak: BMSTL tarafından 22 Haziran 2026 tarihinde KAP’a yapılan
                sermaye artırımı bildirimi.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1619331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                >
                  Orijinal KAP bildirimi
                </a>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                BMSTL haberinde ana başlık, şirketin bedelsiz sermaye artırımı
                sürecinde SPK onayını almış olmasıdır. Sürecin tamamlanması için
                hak kullanım tarihi ve sonraki resmi duyurular ayrıca
                izlenmelidir.
              </div>

              <HaberIlgiliBolumler
                slug="bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi"
                baslik="BMSTL’de %100 Bedelsiz Sermaye Artırımı İçin SPK Onayı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

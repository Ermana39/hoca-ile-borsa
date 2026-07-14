import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "cemas-100-bedelsiz-sermaye-artirimi-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/cemas-100-bedelsiz-sermaye-artirimi-karari.webp";

export const metadata: Metadata = {
  title: "CEMAS %100 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "Çemaş Döküm, çıkarılmış sermayesini 791 milyon TL’den 1,582 milyar TL’ye yükseltmek için %100 bedelsiz sermaye artırımı kararı aldı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "CEMAS %100 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "CEMAS, sermaye düzeltmesi olumlu farklarından karşılanmak üzere %100 oranında bedelsiz sermaye artırımı kararı açıkladı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "CEMAS yüzde 100 bedelsiz sermaye artırımı kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CEMAS %100 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "CEMAS, 791 milyon TL olan sermayesini 1,582 milyar TL’ye yükseltmek için %100 bedelsiz kararı aldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%100",
    aciklama: "Pay sahiplerine bedelsiz pay",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "791 Mn TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "1,582 Mr TL",
    aciklama: "Ulaşılacak sermaye",
  },
  {
    baslik: "Kaynak",
    deger: "İç Kaynak",
    aciklama: "Sermaye düzeltmesi olumlu farkları",
  },
];

const haberDetaylari = [
  {
    etiket: "Şirket",
    deger: "Çemaş Döküm Sanayi A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "CEMAS",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Yönetim Kurulu Karar Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Kayıtlı Sermaye Tavanı",
    deger: "2.000.000.000 TL",
  },
  {
    etiket: "Mevcut Sermaye",
    deger: "791.000.000 TL",
  },
  {
    etiket: "Artırılacak Tutar",
    deger: "791.000.000 TL",
  },
  {
    etiket: "Ulaşılacak Sermaye",
    deger: "1.582.000.000 TL",
  },
  {
    etiket: "Bedelsiz Oranı",
    deger: "%100",
  },
  {
    etiket: "Kaynak",
    deger: "Özsermaye enflasyon düzeltme farkları",
  },
  {
    etiket: "Pay Niteliği",
    deger: "Kaydi pay",
  },
];

const surecMaddeleri = [
  "Yönetim Kurulu %100 bedelsiz sermaye artırımı kararı aldı",
  "791 milyon TL tutarındaki artış iç kaynaklardan karşılanacak",
  "Sermaye 791 milyon TL’den 1,582 milyar TL’ye çıkarılacak",
  "Süreç için SPK, Borsa İstanbul, MKK ve ilgili resmi kurumlara başvuru yapılacak",
];

const takipBasliklari = [
  "SPK başvuru süreci",
  "SPK onayı",
  "Hak kullanım tarihi",
  "Bedelsiz payların yatırımcı hesaplarına geçişi",
  "Sermaye artırımının tescil süreci",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "CEMAS %100 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "Çemaş Döküm, çıkarılmış sermayesini 791 milyon TL’den 1,582 milyar TL’ye yükseltmek için %100 bedelsiz sermaye artırımı kararı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-13T11:57:01+03:00",
  dateModified: "2026-07-13T11:57:01+03:00",
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

export default function CemasBedelsizSermayeArtirimiPage() {
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
              src="/cemas-100-bedelsiz-sermaye-artirimi-karari.webp"
              alt="CEMAS yüzde 100 bedelsiz sermaye artırımı kararı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              CEMAS %100 Bedelsiz Sermaye Artırımı Kararı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Bedelsiz Sermaye Artırımı
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
                Çemaş Döküm Sanayi A.Ş. (<strong>CEMAS</strong>), %100 oranında
                bedelsiz sermaye artırımı kararı aldığını açıkladı. Şirketin
                çıkarılmış sermayesinin 791 milyon TL’den 1,582 milyar TL’ye
                yükseltilmesi planlanıyor.
              </p>

              <p>
                KAP açıklamasına göre 791 milyon TL tutarındaki sermaye artışı,
                <strong> özsermaye enflasyon düzeltme farklarından</strong>{" "}
                karşılanacak. İhraç edilecek paylar, mevcut pay sahiplerine
                sermayedeki payları oranında bedelsiz olarak dağıtılacak.
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
                  CEMAS Yönetim Kurulu, şirket sermayesinin %100 oranında
                  bedelsiz artırılmasına karar verdi. Karara göre mevcut
                  791.000.000 TL sermaye, 791.000.000 TL artırılarak
                  1.582.000.000 TL’ye çıkarılacak.
                </p>
              </Section>

              <Section title="Bedelsiz sermaye artırımı detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
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

              <Section title="Süreç nasıl ilerleyecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yönetim Kurulu kararı sonrası sermaye artırımı işlemlerinin
                  gerçekleştirilmesi için SPK, Borsa İstanbul, MKK, Ticaret
                  Bakanlığı ve ilgili resmi kurumlar nezdinde gerekli başvurular
                  yapılacak.
                </p>

                <div className="mt-4 grid gap-3">
                  {surecMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  CEMAS tarafında %100 bedelsiz sermaye artırımı kararı, hisse
                  için haber akışını güçlendiren bir başlık. Ancak kararın
                  uygulanabilmesi için resmi başvuru ve onay süreçlerinin
                  tamamlanması gerekiyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bedelsiz sermaye artırımlarında şirketin piyasa değeri doğrudan
                  değişmez; sermaye ve pay adedi artarken teorik fiyat buna göre
                  düzeltilir. Bu nedenle sonraki aşamada SPK onayı ve hak
                  kullanım tarihi takip edilecek.
                </p>
              </Section>

              <Section title="Takip edilecek başlıklar">
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1632355"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  CEMAS — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="CEMAS %100 Bedelsiz Sermaye Artırımı Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Bedelsiz sermaye artırımı süreci SPK onayı,
                hak kullanım tarihi ve şirketin sonraki KAP açıklamalarıyla
                birlikte takip edilmelidir.
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
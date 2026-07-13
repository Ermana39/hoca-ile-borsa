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

const slug = "ardyz-hatay-eds-projesi-devreye-alindi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/ardyz-hatay-eds-projesi-devreye-alindi.webp";

export const metadata: Metadata = {
  title: "ARDYZ Hatay EDS Projesini Devreye Aldı",
  description:
    "ARDYZ, Hatay Büyükşehir Belediyesi Elektronik Denetleme Sistemleri projesinin devreye alındığını ve gelir paylaşımı modeliyle 15 yıl işletileceğini açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ARDYZ Hatay EDS Projesini Devreye Aldı",
    description:
      "ARDYZ, Hatay ili ve ilçelerinde hizmet verecek EDS projesinin 13 Temmuz 2026 itibarıyla aktif olarak işletilmeye başladığını duyurdu.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ARDYZ Hatay EDS projesi devreye alındı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARDYZ Hatay EDS Projesini Devreye Aldı",
    description:
      "ARDYZ, gelir paylaşımı modeliyle 15 yıl işletilecek Hatay EDS projesinin hizmete açıldığını açıkladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Proje",
    deger: "Hatay EDS",
    aciklama: "Elektronik denetleme sistemi",
  },
  {
    baslik: "Durum",
    deger: "Devrede",
    aciklama: "13 Temmuz 2026 itibarıyla aktif",
  },
  {
    baslik: "Model",
    deger: "Gelir Paylaşımı",
    aciklama: "Kesilen cezalar üzerinden",
  },
  {
    baslik: "İşletme Süresi",
    deger: "15 Yıl",
    aciklama: "ARDYZ tarafından işletilecek",
  },
];

const haberDetaylari = [
  {
    etiket: "Şirket",
    deger: "ARD Grup Bilişim Teknolojileri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ARDYZ",
  },
  {
    etiket: "Proje",
    deger: "Hatay Büyükşehir Belediyesi Elektronik Denetleme Sistemleri",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Önceki Açıklama Tarihi",
    deger: "16.10.2023",
  },
  {
    etiket: "Durum",
    deger: "Kurulum, onay ve kabul süreçleri tamamlandı",
  },
  {
    etiket: "Devreye Alma Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Kapsam",
    deger: "Hatay ili ve ilçeleri",
  },
  {
    etiket: "Teknoloji",
    deger: "Yapay zekâ destekli görüntü analizi ve plaka tanıma sistemi",
  },
  {
    etiket: "Denetim Alanı",
    deger: "Ortalama hız tespiti ve mobil radar uygulamaları",
  },
  {
    etiket: "Gelir Modeli",
    deger: "Trafik cezalarından gelir paylaşımı",
  },
  {
    etiket: "İşletme Süresi",
    deger: "15 yıl",
  },
];

const teknolojiBasliklari = [
  "Yapay zekâ destekli görüntü analizi",
  "Plaka tanıma sistemi",
  "Ortalama hız tespiti",
  "Mobil araçlarla anlık hız tespiti",
  "Trafik denetimi ve kontrol sistemi",
];

const takipBasliklari = [
  "Projenin aylık/çeyreklik gelir katkısı",
  "Gelir paylaşımı modelinin ciroya etkisi",
  "Sistemin Hatay genelindeki kullanım yoğunluğu",
  "Benzer belediye projeleri için yeni sözleşmeler",
  "Tekrarlayan gelir yapısının finansallara yansıması",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ARDYZ Hatay EDS Projesini Devreye Aldı",
  description:
    "ARDYZ, Hatay Büyükşehir Belediyesi Elektronik Denetleme Sistemleri projesinin devreye alındığını ve gelir paylaşımı modeliyle 15 yıl işletileceğini açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-13T09:15:09+03:00",
  dateModified: "2026-07-13T09:15:09+03:00",
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

export default function ArdyzHatayEdsProjesiPage() {
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
              src="/ardyz-hatay-eds-projesi-devreye-alindi.webp"
              alt="ARDYZ Hatay EDS projesi devreye alındı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ARDYZ Hatay EDS Projesini Devreye Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Teknoloji Projesi
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
                ARD Grup Bilişim Teknolojileri A.Ş. (<strong>ARDYZ</strong>),
                Hatay Büyükşehir Belediyesi Elektronik Denetleme Sistemleri
                projesinin aktif olarak devreye alındığını açıkladı.
              </p>

              <p>
                Şirket, proje kapsamında gerekli yatırımların yapıldığını,
                kurulum süreçlerinin tamamlandığını ve yetkili mercilerden onay
                ve kabul süreçlerinin alındığını bildirdi. EDS projesi,
                <strong> 13 Temmuz 2026</strong> itibarıyla hizmete açıldı.
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
                  ARDYZ, Hatay Büyükşehir Belediyesi EDS projesinin kurulum,
                  onay ve kabul süreçlerinin tamamlandığını; sistemin bugün
                  itibarıyla aktif olarak işletilmeye başladığını açıkladı.
                  Proje, Hatay ili ve ilçelerinde trafik denetimi için
                  kullanılacak.
                </p>
              </Section>

              <Section title="Projenin ana detayları">
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

              <Section title="Sistemde hangi teknolojiler kullanılacak?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Hatay EDS projesinde trafik denetimi ve kontrolü için görüntü
                  analizi, plaka tanıma, ortalama hız ölçümü ve mobil radar
                  uygulamaları birlikte kullanılacak.
                </p>

                <div className="mt-4 grid gap-3">
                  {teknolojiBasliklari.map((item) => (
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
                  ARDYZ için bu açıklamanın en önemli tarafı, projenin artık
                  kurulum aşamasından işletme aşamasına geçmiş olması. Şirket,
                  trafik denetimleri sonucunda kesilen cezalardan gelir paylaşımı
                  modeliyle 15 yıl süreyle işletme yapacağını belirtti.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu yapı, şirketin düzenli ve tekrar eden gelir kaynaklarını
                  destekleyebilecek bir model olarak öne çıkıyor. Finansallara
                  katkının boyutu ise sistemin kullanım yoğunluğu ve gelir
                  paylaşımı performansıyla netleşecek.
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
                  href="https://www.kap.org.tr/Bildirim/1632224"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ARDYZ — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ARDYZ Hatay EDS Projesini Devreye Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Projenin finansal etkisi, işletme dönemi
                gelirleri ve şirketin sonraki finansal tablolarıyla birlikte
                takip edilmelidir.
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
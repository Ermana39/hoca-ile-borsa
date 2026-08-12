import { seoAciklamasi } from "@/lib/seo-metadata";
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

const slug = "miatk-korfez-bolgesi-projeleri-is-birligi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/miatk-korfez-bolgesi-projeleri-is-birligi.webp";

export const metadata: Metadata = {
  title: { absolute: "MIATK Körfez Projeleri İçin İş Birliği Sözleşmesi" },
  description:
    seoAciklamasi("MIATK, Katar merkezli Al Jaber Engineering W.L.L. ile Körfez Bölgesi’nde demiryolu, metro, altyapı, inşaat ve teknoloji çözümleri için iş birliği sözleşmesi imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "MIATK Körfez Bölgesi Projeleri İçin İş Birliği Sözleşmesi İmzaladı",
    description:
      "MIATK, Al Jaber Engineering ile Körfez Bölgesi projelerine yönelik tedarik, altyapı hizmetleri ve teknoloji çözümleri alanında iş birliği yapacak.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "MIATK Körfez Bölgesi projeleri iş birliği sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIATK Körfez Bölgesi Projeleri İçin İş Birliği Sözleşmesi İmzaladı",
    description:
      "MIATK, Katar merkezli Al Jaber Engineering ile Körfez Bölgesi projeleri için iş birliği sözleşmesi imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İş Birliği Tarafı",
    deger: "Al Jaber Engineering",
    aciklama: "Katar merkezli mühendislik şirketi",
  },
  {
    baslik: "Bölge",
    deger: "Körfez",
    aciklama: "Körfez Bölgesi projeleri hedefleniyor",
  },
  {
    baslik: "Alan",
    deger: "Raylı Sistem & Altyapı",
    aciklama: "Demiryolu, metro, altyapı ve inşaat projeleri",
  },
  {
    baslik: "Kapsam",
    deger: "Teknoloji Çözümleri",
    aciklama: "Tedarik, altyapı hizmetleri ve teknoloji çözümleri",
  },
];

const haberDetaylari = [
  {
    etiket: "Şirket",
    deger: "Mia Teknoloji A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "MIATK",
  },
  {
    etiket: "İş Birliği Yapılan Şirket",
    deger: "Al Jaber Engineering W.L.L.",
  },
  {
    etiket: "Şirket Merkezi",
    deger: "Katar",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "10.07.2026",
  },
  {
    etiket: "Açıklama Türü",
    deger: "Özel Durum Açıklaması",
  },
  {
    etiket: "Hedef Bölge",
    deger: "Körfez Bölgesi",
  },
  {
    etiket: "Proje Alanları",
    deger: "Demiryolu, raylı sistem, metro, altyapı ve inşaat",
  },
  {
    etiket: "İş Birliği Kapsamı",
    deger: "Tedarik, altyapı hizmetleri ve teknoloji çözümleri",
  },
  {
    etiket: "Parasal Tutar",
    deger: "Açıklanmadı",
  },
];

const projeAlanlari = [
  "Demiryolu ve raylı sistem projeleri",
  "Metro projeleri",
  "Altyapı projeleri",
  "İnşaat projeleri",
  "Tedarik süreçleri",
  "Teknoloji çözümleri",
];

const alJaberReferanslari = [
  "Karayolu ve otoyol projeleri",
  "Köprü projeleri",
  "Doha Metrosu Gold Line yer altı hattı",
  "Enerji ve altyapı tesisleri",
  "Petrol, doğal gaz ve petrokimya boru hatları",
  "Atık su arıtma tesisleri ve gayrimenkul projeleri",
];

const takipBasliklari = [
  "İş birliğinin somut projeye dönüşüp dönüşmeyeceği",
  "Körfez Bölgesi’nde açıklanacak yeni proje başlıkları",
  "Olası sözleşme büyüklükleri",
  "MIATK’nin tedarik ve teknoloji çözümü kapsamındaki rolü",
  "Al Jaber Engineering ile yapılacak yeni açıklamalar",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "MIATK Körfez Bölgesi Projeleri İçin İş Birliği Sözleşmesi İmzaladı",
  description:
    "MIATK, Katar merkezli Al Jaber Engineering W.L.L. ile Körfez Bölgesi’nde demiryolu, metro, altyapı, inşaat ve teknoloji çözümleri için iş birliği sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-10T18:19:59+03:00",
  dateModified: "2026-07-10T18:19:59+03:00",
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

export default function MiatkKorfezIsBirligiPage() {
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
              src="/miatk-korfez-bolgesi-projeleri-is-birligi.webp"
              alt="MIATK Körfez Bölgesi projeleri iş birliği sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              MIATK Körfez Bölgesi Projeleri İçin İş Birliği Sözleşmesi İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                İş Birliği Sözleşmesi
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
                Mia Teknoloji A.Ş. (<strong>MIATK</strong>), Katar merkezli
                Al Jaber Engineering W.L.L. ile Körfez Bölgesi projelerine
                yönelik iş birliği sözleşmesi imzaladığını açıkladı.
              </p>

              <p>
                KAP açıklamasına göre iş birliği; Körfez Bölgesi’nde yapılması
                planlanan demiryolu ve raylı sistemler, metro, altyapı ve inşaat
                projelerine yönelik tedarik, altyapı hizmetleri ve teknoloji
                çözümlerinin taraflarca birlikte sunulmasını kapsıyor.
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
                  MIATK, Körfez Bölgesi’nde önemli iş deneyimi ve referanslara
                  sahip olduğu belirtilen Al Jaber Engineering W.L.L. ile iş
                  birliği sözleşmesi imzaladı. Açıklamada henüz parasal bir
                  sözleşme tutarı paylaşılmadı.
                </p>
              </Section>

              <Section title="Açıklamanın ana detayları">
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

              <Section title="İş birliği hangi alanları kapsıyor?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Açıklamada, tarafların Körfez Bölgesi’nde planlanan projelerde
                  birlikte tedarik, altyapı hizmetleri ve teknoloji çözümleri
                  sunmayı amaçladığı belirtildi.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {projeAlanlari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Al Jaber Engineering tarafında hangi referanslar öne çıktı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  MIATK’nin KAP açıklamasında Al Jaber Engineering’in 1995
                  yılında Al Jaber Group bünyesinde kurulduğu ve farklı altyapı
                  projelerinde yer aldığı belirtildi.
                </p>

                <div className="mt-4 grid gap-3">
                  {alJaberReferanslari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  MIATK açısından açıklama, doğrudan parasal tutarı belirtilen
                  bir sipariş veya gelir anlaşması değil. Buna karşılık Körfez
                  Bölgesi’nde büyük altyapı, raylı sistem ve teknoloji çözümü
                  projelerine erişim ihtimali oluşturduğu için pozitif takip
                  başlığı olarak öne çıkıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu haberin asıl gücü, iş birliğinin ilerleyen dönemde somut
                  proje veya sözleşmelere dönüşüp dönüşmeyeceğinde olacak.
                  Şirket, önemli gelişmelerin ayrıca kamuoyu ile paylaşılacağını
                  belirtti.
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
                  href="https://www.kap.org.tr/Bildirim/1632025"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  MIATK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="MIATK Körfez Bölgesi Projeleri İçin İş Birliği Sözleşmesi İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. İş birliğinin finansal etkisi, ilerleyen
                dönemde açıklanabilecek proje ve sözleşme detaylarıyla birlikte
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

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

const slug = "algyo-200-bedelli-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/algyo-200-bedelli-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: "ALGYO %200 Bedelli Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "Alarko GYO, sermayesini 2,028 milyar TL’den 6,085 milyar TL’ye çıkarmak için %200 bedelli sermaye artırımı kapsamında SPK’ya başvurdu.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ALGYO %200 Bedelli Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "ALGYO, 4,057 milyar TL tutarında rüçhan hakkı kullandırılarak bedelli sermaye artırımı için SPK başvurusunu yaptı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ALGYO yüzde 200 bedelli sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALGYO %200 Bedelli Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "ALGYO sermayesini 2,028 milyar TL’den 6,085 milyar TL’ye çıkarmak için SPK’ya başvurdu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelli Oranı",
    deger: "%200",
    aciklama: "Rüçhan hakkı kullandırılarak",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "2,028 Mr TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "6,085 Mr TL",
    aciklama: "Ulaşılacak sermaye",
  },
  {
    baslik: "Kullanım Fiyatı",
    deger: "1 TL",
    aciklama: "Rüçhan hakkı kullanım fiyatı",
  },
];

const haberDetaylari = [
  { etiket: "Şirket", deger: "Alarko Gayrimenkul Yatırım Ortaklığı A.Ş." },
  { etiket: "Hisse Kodu", deger: "ALGYO" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "Yönetim Kurulu Karar Tarihi", deger: "15.06.2026" },
  { etiket: "SPK Başvuru Tarihi", deger: "10.07.2026" },
  { etiket: "Kayıtlı Sermaye Tavanı", deger: "10.000.000.000 TL" },
  { etiket: "Mevcut Sermaye", deger: "2.028.600.000 TL" },
  { etiket: "Artırılacak Tutar", deger: "4.057.200.000 TL" },
  { etiket: "Ulaşılacak Sermaye", deger: "6.085.800.000 TL" },
  { etiket: "Bedelli Oranı", deger: "%200" },
  { etiket: "Rüçhan Kullanım Fiyatı", deger: "1,00 TL" },
  { etiket: "Pay Niteliği", deger: "Kaydi pay" },
];

const grupDetaylari = [
  {
    grup: "A Grubu",
    mevcut: "165.000 TL",
    rucHan: "330.000 TL",
    oran: "%200",
  },
  {
    grup: "B Grubu",
    mevcut: "235.000 TL",
    rucHan: "470.000 TL",
    oran: "%200",
  },
  {
    grup: "C Grubu",
    mevcut: "2.028.200.000 TL",
    rucHan: "4.056.400.000 TL",
    oran: "%200",
  },
];

const surecMaddeleri = [
  "ALGYO bedelli sermaye artırımı için SPK’ya başvurdu",
  "Mevcut sermayenin %200 oranında artırılması planlanıyor",
  "Sermaye artışı rüçhan hakkı kullandırılarak yapılacak",
  "Rüçhan hakkı kullanım fiyatı 1,00 TL olarak açıklandı",
  "Sürecin tamamlanması için SPK onayı beklenecek",
];

const takipBasliklari = [
  "SPK izahname onayı",
  "Rüçhan hakkı kullanım tarihleri",
  "Kullanılmayan rüçhan haklarının akıbeti",
  "Bedelli sonrası yeni sermaye yapısı",
  "Sermaye artırımından gelecek kaynağın şirket bilançosuna etkisi",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ALGYO %200 Bedelli Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "Alarko GYO, sermayesini 2,028 milyar TL’den 6,085 milyar TL’ye çıkarmak için %200 bedelli sermaye artırımı kapsamında SPK’ya başvurdu.",
  image: haberGorsel,
  datePublished: "2026-07-13T13:13:39+03:00",
  dateModified: "2026-07-13T13:13:39+03:00",
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

export default function AlgyoBedelliSermayeArtirimiPage() {
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
              src="/algyo-200-bedelli-sermaye-artirimi-spk-basvurusu.webp"
              alt="ALGYO yüzde 200 bedelli sermaye artırımı SPK başvurusu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ALGYO %200 Bedelli Sermaye Artırımı İçin SPK’ya Başvurdu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Bedelli Sermaye Artırımı
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
                Alarko Gayrimenkul Yatırım Ortaklığı A.Ş. (<strong>ALGYO</strong>),
                %200 oranında bedelli sermaye artırımı için Sermaye Piyasası
                Kurulu’na başvurduğunu açıkladı.
              </p>

              <p>
                Şirketin çıkarılmış sermayesinin{" "}
                <strong>2.028.600.000 TL’den 6.085.800.000 TL’ye</strong>{" "}
                yükseltilmesi planlanıyor. Sermaye artışı, rüçhan hakkı
                kullandırılarak yapılacak ve rüçhan hakkı kullanım fiyatı{" "}
                <strong>1,00 TL</strong> olacak.
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
                  ALGYO, 15 Haziran 2026 tarihli Yönetim Kurulu kararı kapsamında
                  açıklanan bedelli sermaye artırımı için 10 Temmuz 2026 tarihinde
                  SPK’ya başvuru yaptı. KAP bildirimi 13 Temmuz 2026 tarihinde
                  yayımlandı.
                </p>
              </Section>

              <Section title="Bedelli sermaye artırımı detayları">
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

              <Section title="Pay gruplarına göre artırım">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Pay Grubu</th>
                        <th className="px-4 py-3 text-left font-semibold">Mevcut Sermaye</th>
                        <th className="px-4 py-3 text-left font-semibold">Rüçhan Tutarı</th>
                        <th className="px-4 py-3 text-left font-semibold">Oran</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grupDetaylari.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.grup}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.mevcut}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.rucHan}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.oran}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Süreç nasıl ilerleyecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SPK başvurusu, bedelli sermaye artırımı sürecinin resmi
                  onay aşamasına geçtiğini gösteriyor. Süreçte izahnamenin SPK
                  tarafından onaylanması ve ardından rüçhan hakkı kullanım
                  tarihlerinin açıklanması beklenecek.
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
                  ALGYO tarafında %200 bedelli sermaye artırımı, şirketin sermaye
                  yapısını ciddi ölçüde büyütecek bir karar. Mevcut sermayeye göre
                  artırılacak tutarın yüksek olması nedeniyle haber, özellikle
                  rüçhan hakkı kullanım süreci ve yatırımcıların katılımı açısından
                  yakından takip edilecek.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bedelli sermaye artırımlarında şirket kasasına nakit girişi
                  olurken, sürecin hisse üzerindeki etkisi piyasa fiyatı, rüçhan
                  değeri, yatırımcı katılımı ve SPK onay takvimiyle birlikte
                  şekillenir.
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
                  href="https://www.kap.org.tr/Bildirim/1632423"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ALGYO — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ALGYO %200 Bedelli Sermaye Artırımı İçin SPK’ya Başvurdu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Bedelli sermaye artırımı süreci SPK onayı,
                rüçhan kullanım tarihleri ve şirketin sonraki KAP açıklamalarıyla
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
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

const slug = "smrva-denizbank-426-milyon-tl-alacak-portfoyu-ihalesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/smrva-denizbank-426-milyon-tl-alacak-portfoyu-ihalesi.webp";

export const metadata: Metadata = {
  title: "SMRVA Denizbank’ın 426 Milyon TL’lik Alacak Portföyü İhalesini Kazandı",
  description:
    "Sümer Varlık Yönetim, Denizbank’ın 426,4 milyon TL anapara büyüklüğüne sahip tahsili gecikmiş bireysel alacak portföyü ihalesinde en yüksek teklifi verdi.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "SMRVA Denizbank’ın 426 Milyon TL’lik Alacak Portföyü İhalesini Kazandı",
    description:
      "SMRVA, Denizbank tarafından düzenlenen tahsili gecikmiş alacak portföyü ihalesinde en yüksek teklifi verdi. Sürecin kesinleşmesi banka yönetim kurulu onayına bağlı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "SMRVA Denizbank 426 milyon TL alacak portföyü ihalesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMRVA Denizbank’ın 426 Milyon TL’lik Alacak Portföyü İhalesini Kazandı",
    description:
      "SMRVA, Denizbank’ın tahsili gecikmiş alacak portföyü ihalesinde en yüksek teklifi verdi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Portföy Büyüklüğü",
    deger: "426,4 Mn TL",
    aciklama: "Anapara büyüklüğü",
  },
  {
    baslik: "Portföy Türü",
    deger: "Bireysel",
    aciklama: "1 adet tahsili gecikmiş alacak portföyü",
  },
  {
    baslik: "İhaleyi Açan Banka",
    deger: "Denizbank",
    aciklama: "Denizbank A.Ş.",
  },
  {
    baslik: "Katılımcı Sayısı",
    deger: "12 Şirket",
    aciklama: "Varlık yönetim şirketi katıldı",
  },
];

const haberDetaylari = [
  {
    etiket: "Şirket",
    deger: "Sümer Varlık Yönetim A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "SMRVA",
  },
  {
    etiket: "İhaleyi Açan Kurum",
    deger: "Denizbank A.Ş.",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "10.07.2026",
  },
  {
    etiket: "Portföy Niteliği",
    deger: "Tahsili gecikmiş bireysel alacak portföyü",
  },
  {
    etiket: "Portföy Adedi",
    deger: "1 adet",
  },
  {
    etiket: "Anapara Büyüklüğü",
    deger: "426.421.978 TL",
  },
  {
    etiket: "İhaleye Katılan Şirket Sayısı",
    deger: "12 varlık yönetim şirketi",
  },
  {
    etiket: "İhale Sonucu",
    deger: "En yüksek teklif SMRVA tarafından verildi",
  },
  {
    etiket: "Kesinleşme Şartı",
    deger: "Denizbank Yönetim Kurulu onayı",
  },
];

const surecMaddeleri = [
  "SMRVA, Denizbank’ın ihalesinde en yüksek teklifi verdi",
  "İhale sonucunun kesinleşmesi Denizbank Yönetim Kurulu onayına bağlı",
  "Onay sonrası sözleşme imza süreci başlayacak",
  "Satışa konu alacakların devir işlemleri onaydan sonra ilerleyecek",
];

const takipBasliklari = [
  "Denizbank Yönetim Kurulu onayı",
  "Sözleşmenin imzalanma süreci",
  "Alacak portföyünün devir işlemleri",
  "Portföy tahsilat performansı",
  "Yeni alacak portföyü ihaleleri",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SMRVA Denizbank’ın 426 Milyon TL’lik Alacak Portföyü İhalesini Kazandı",
  description:
    "Sümer Varlık Yönetim, Denizbank’ın 426,4 milyon TL anapara büyüklüğüne sahip tahsili gecikmiş bireysel alacak portföyü ihalesinde en yüksek teklifi verdi.",
  image: haberGorsel,
  datePublished: "2026-07-10T18:33:28+03:00",
  dateModified: "2026-07-10T18:33:28+03:00",
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

export default function SmrvaDenizbankAlacakPortfoyuPage() {
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
              src="/smrva-denizbank-426-milyon-tl-alacak-portfoyu-ihalesi.webp"
              alt="SMRVA Denizbank 426 milyon TL alacak portföyü ihalesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SMRVA Denizbank’ın 426 Milyon TL’lik Alacak Portföyü İhalesini Kazandı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Alacak Portföyü Alımı
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
                Sümer Varlık Yönetim A.Ş. (<strong>SMRVA</strong>), Denizbank
                A.Ş. tarafından düzenlenen tahsili gecikmiş alacak portföyü
                ihalesinde en yüksek teklifi verdiğini açıkladı.
              </p>

              <p>
                KAP açıklamasına göre ihale, anapara büyüklüğü{" "}
                <strong>426.421.978 TL</strong> olan 1 adet bireysel portföyü
                kapsıyor. İhaleye toplam 12 varlık yönetim şirketi katıldı.
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
                  SMRVA, Denizbank’ın 10 Temmuz 2026 tarihinde gerçekleştirdiği
                  tahsili gecikmiş alacak ihalesinde 426,4 milyon TL anapara
                  büyüklüğüne sahip bireysel portföy için en yüksek teklifi
                  verdi. İhale sonucu henüz nihai aşamaya geçmiş değil.
                </p>
              </Section>

              <Section title="İhalenin ana detayları">
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
                  Açıklamada, ihale sonuçlarının kesinleşmesinin ihaleyi açan
                  banka yönetim kurulunun onayına bağlı olduğu belirtildi. Onay
                  sonrası sözleşme imza süreci ve satışa konu alacakların devir
                  işlemleri başlatılacak.
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
                  SMRVA için yeni alacak portföyü ihalesinde en yüksek teklifin
                  verilmesi, faaliyet hacmi ve portföy büyümesi açısından pozitif
                  bir başlık. Ancak ihale sonucunun kesinleşmesi Denizbank
                  Yönetim Kurulu onayına bağlı olduğu için haberin nihai etkisi
                  onay ve devir süreciyle birlikte netleşecek.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Varlık yönetim şirketlerinde bu tür portföy alımlarında asıl
                  performans, portföyün tahsilat verimi ve satın alma sonrası
                  nakit dönüş hızıyla ölçülür.
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
                  href="https://www.kap.org.tr/Bildirim/1632037"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  SMRVA — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="SMRVA Denizbank’ın 426 Milyon TL’lik Alacak Portföyü İhalesini Kazandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. İhale sonucunun finansal etkisi, banka
                yönetim kurulu onayı, sözleşme imzası, portföy devri ve tahsilat
                performansıyla birlikte takip edilmelidir.
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
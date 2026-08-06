import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const SITE_URL = "https://www.hocaileborsa.com";

export type HalkaArzSurecHaberTuru = "spk-onayi" | "izahname-yayini";

export type HalkaArzSurecHaberAyarlari = {
  haberSlug: string;
  kisaAd: string;
  imageFile: string;
  publishedAt: string;
  modifiedAt?: string;
  publishedLabel: string;
};

type SurecMetinleri = {
  title: string;
  description: string;
  rozet: string;
  kaynak: string;
  giris: string;
  olayBasligi: string;
  olayAciklamasi: string;
};

function hisseKodu(veri: HalkaArzVeri) {
  return veri.bistKodu || veri.ozet.bistKodu;
}

function surecMetinleri(
  tur: HalkaArzSurecHaberTuru,
  veri: HalkaArzVeri,
  ayarlar: HalkaArzSurecHaberAyarlari
): SurecMetinleri {
  if (tur === "spk-onayi") {
    return {
      title: `SPK, ${ayarlar.kisaAd} Halka Arzını Onayladı`,
      description: `SPK, ${veri.sirketAdi} halka arz başvurusunu onayladı. ${ayarlar.publishedLabel} tarihli kararın kapsamı ve halka arz sürecindeki sonraki adımlar.`,
      rozet: "SPK Onayı",
      kaynak: "SPK Bülteni",
      giris: `Sermaye Piyasası Kurulu, ${veri.sirketAdi} halka arz başvurusunu onayladı. Bu haber, ${ayarlar.publishedLabel} tarihli onay kararını ve karar sonrasında izlenecek süreci kayda geçirir.`,
      olayBasligi: "SPK onayı ne anlama geliyor?",
      olayAciklamasi:
        "Kurul onayı, halka arz sürecinin satış ve talep toplama aşamasına ilerleyebilmesini sağlar. Kesin satış koşulları ile güncel tarihler, onaylı izahname ve satış duyurusuyla birlikte takip edilir.",
    };
  }

  return {
    title: `${ayarlar.kisaAd} Onaylı İzahnamesi Yayımlandı`,
    description: `${veri.sirketAdi} halka arzına ilişkin onaylı izahname ${ayarlar.publishedLabel} tarihinde yayımlandı. Belgenin yayımlanması ve talep sürecindeki sonraki adımlar.`,
    rozet: "İzahname Yayımlandı",
    kaynak: "Onaylı İzahname",
    giris: `${veri.sirketAdi} halka arzına ilişkin onaylı izahname yayımlandı. Bu haber, belgenin ${ayarlar.publishedLabel} tarihindeki yayımlanma gelişmesini ve halka arz sürecinin geldiği aşamayı kayda geçirir.`,
    olayBasligi: "İzahnamenin yayımlanması ne anlama geliyor?",
    olayAciklamasi:
      "Onaylı izahname; halka arzın hukuki yapısı, satış koşulları, riskleri ve finansal bilgileri için temel resmî belgedir. Fiyat, talep tarihleri ve dağıtım bilgileri güncel merkez sayfada birlikte tutulur.",
  };
}

export function halkaArzSurecHaberMetadata(
  tur: HalkaArzSurecHaberTuru,
  veri: HalkaArzVeri,
  ayarlar: HalkaArzSurecHaberAyarlari
): Metadata {
  const metinler = surecMetinleri(tur, veri, ayarlar);
  const canonical = `${SITE_URL}/haber/${ayarlar.haberSlug}`;
  const imageUrl = `${SITE_URL}/${ayarlar.imageFile}`;
  const kod = hisseKodu(veri);

  return {
    title: metinler.title,
    description: metinler.description,
    alternates: { canonical },
    robots: {
      // Kısa süreç kaydı erişilebilir kalır; arama sonucu olarak kalıcı
      // onaylı izahname merkezi kullanılır.
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: metinler.title,
      description: metinler.description,
      url: canonical,
      siteName: "Hoca İle Borsa",
      type: "article",
      publishedTime: ayarlar.publishedAt,
      modifiedTime: ayarlar.modifiedAt || ayarlar.publishedAt,
      section: "Halka Arz Haberleri",
      tags: kod ? [kod, ayarlar.kisaAd, metinler.rozet] : [ayarlar.kisaAd, metinler.rozet],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: metinler.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metinler.title,
      description: metinler.description,
      images: [imageUrl],
    },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="mt-4 text-base leading-8 text-slate-700">{children}</div>
    </section>
  );
}

function BilgiKarti({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-1 break-words font-bold text-slate-900">{value}</div>
    </div>
  );
}

export default function HalkaArzSurecHaberi({
  tur,
  veri,
  ayarlar,
}: {
  tur: HalkaArzSurecHaberTuru;
  veri: HalkaArzVeri;
  ayarlar: HalkaArzSurecHaberAyarlari;
}) {
  const metinler = surecMetinleri(tur, veri, ayarlar);
  const canonicalPath = `/haber/${ayarlar.haberSlug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const imagePath = `/${ayarlar.imageFile}`;
  const imageUrl = `${SITE_URL}${imagePath}`;
  const izahnamePath = `/halka-arz/onayli-izahnameler/${veri.slug}`;
  const izahnameUrl = `${SITE_URL}${izahnamePath}`;
  const kod = hisseKodu(veri);
  const talepTarihi = veri.ozet.halkaArzTarihi?.trim();

  const asamalar =
    tur === "spk-onayi"
      ? [
          "SPK onay kararı açıklandı.",
          "Onaylı izahname ve satış duyurusu yayımlanır.",
          "Talep toplama süreci yürütülür.",
          "Dağıtım sonuçları ve ilk işlem tarihi açıklanır.",
        ]
      : [
          "SPK onay süreci tamamlandı.",
          "Onaylı izahname yayımlandı.",
          talepTarihi
            ? `Talep toplama takvimi: ${talepTarihi}.`
            : "Talep toplama takvimi satış duyurusuyla takip edilir.",
          "Dağıtım sonuçları ve ilk işlem tarihi ayrıca açıklanır.",
        ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: metinler.title,
    description: metinler.description,
    datePublished: ayarlar.publishedAt,
    dateModified: ayarlar.modifiedAt || ayarlar.publishedAt,
    url: canonical,
    mainEntityOfPage: canonical,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 675,
    },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/yazar/erman-hoca#person`,
      name: "Erman Hoca",
      url: `${SITE_URL}/yazar/erman-hoca`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hoca İle Borsa",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
    },
    about: {
      "@type": "Corporation",
      name: veri.sirketAdi,
      tickerSymbol: kod,
    },
    isAccessibleForFree: true,
    inLanguage: "tr-TR",
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <nav
            aria-label="İçerik yolu"
            className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" prefetch={false} className="hover:text-blue-600">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link
              href="/haberler"
              prefetch={false}
              className="hover:text-blue-600"
            >
              Haberler
            </Link>
            <span>/</span>
            <span>Halka Arz</span>
          </nav>

          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {metinler.rozet}
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {metinler.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {metinler.giris}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
            <time dateTime={ayarlar.publishedAt}>
              Yayınlanma: {ayarlar.publishedLabel}
            </time>
            <span>Kaynak: {metinler.kaynak}</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <Image
            src={imagePath}
            alt={metinler.title}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Güncel halka arz merkezi
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950">
            {ayarlar.kisaAd} halka arzının güncel bilgileri
          </h2>
          <p className="mt-3 leading-8 text-blue-950">
            Bu haber yalnızca süreçteki gelişmeyi kaydeder. Güncel fiyat, talep
            tarihleri, toplam lot, dağıtım yöntemi, katılım endeksi, fon
            kullanımı ve finansal bilgiler onaylı izahname merkezinde birlikte
            güncellenir.
          </p>
          <Link
            href={izahnamePath}
            prefetch={false}
            className="mt-5 inline-flex rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {kod ? `${kod} halka arz detaylarını incele` : "Onaylı izahname detaylarını incele"}
          </Link>
        </section>

        <Section title={metinler.olayBasligi}>
          <p>{metinler.olayAciklamasi}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <BilgiKarti label="Şirket" value={veri.sirketAdi} />
            <BilgiKarti label="Gelişme tarihi" value={ayarlar.publishedLabel} />
            {kod && <BilgiKarti label="İşlem kodu" value={kod} />}
            <BilgiKarti label="Güncel bilgi adresi" value={izahnameUrl} />
          </div>
        </Section>

        <Section title="Halka arz sürecinde sonraki adımlar">
          <ol className="space-y-3">
            {asamalar.map((asama, index) => (
              <li
                key={asama}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span>{asama}</span>
              </li>
            ))}
          </ol>
        </Section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 sm:p-7">
          <h2 className="text-lg font-bold text-slate-900">Yasal uyarı</h2>
          <p className="mt-3">
            {veri.yasalUyari ||
              "Bu haber genel bilgilendirme amacıyla hazırlanmıştır ve yatırım tavsiyesi değildir. Yatırım kararı öncesinde onaylı izahname ve güncel resmî duyurular incelenmelidir."}
          </p>
        </section>

        <div className="mt-8">
          <AuthorBox />
        </div>
        <HaberAltKisim
          href={canonicalPath}
          halkaArzMerkeziGoster={false}
        />
      </article>
    </main>
  );
}

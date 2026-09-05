import { serializeJsonLd } from "@/lib/json-ld";
import Link from "@/components/NoPrefetchLink";
import RehberAltBolumler from "@/components/RehberAltBolumler";

export type RehberKart = {
  title: string;
  text: string;
};

export type RehberKaynak = {
  title: string;
  href: string;
  text: string;
};

export type RehberBolum = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: RehberKart[];
  orderedCards?: boolean;
  note?: string;
};

export type RehberSSS = {
  question: string;
  answer: string;
};

export type RehberMakaleData = {
  href: string;
  title: string;
  breadcrumb: string;
  description: string;
  intro: string;
  sections: RehberBolum[];
  faq: RehberSSS[];
  sources?: RehberKaynak[];
};

const siteUrl = "https://www.hocaileborsa.com";

type RehberIlgiliBaglanti = {
  href: string;
  label: string;
  text: string;
};

const rehberIlgiliBaglantilari: Record<string, RehberIlgiliBaglanti[]> = {
  "/rehberler/halka-arz-kac-lot-verir": [
    {
      href: "/halka-arz/talep-hesapla",
      label: "Lot tahmini yap",
      text: "Halka arz talep ve kişi başı lot senaryosu hesaplama aracı.",
    },
    {
      href: "/halka-arz/takvim",
      label: "Güncel takvimi aç",
      text: "Talep, dağıtım ve işlem başlangıcı açıklanan halka arzlar.",
    },
  ],
  "/rehberler/esit-dagitim-nedir": [
    {
      href: "/rehberler/halka-arz-kac-lot-verir",
      label: "Lot hesabını oku",
      text: "Eşit dağıtımda kişi başı lot tahmini nasıl yapılır?",
    },
    {
      href: "/halka-arz/talep-hesapla",
      label: "Talep hesapla",
      text: "Katılımcı sayısına göre örnek dağıtım senaryosu oluştur.",
    },
  ],
  "/rehberler/t1-t2-bakiye-nedir": [
    {
      href: "/haber/5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum",
      label: "Talep bilgilerini oku",
      text: "Halka arzlarda T1-T2, saat ve aracı kurum kontrol başlıkları.",
    },
  ],
  "/rehberler/halka-arz-tavan-bozarsa-ne-olur": [
    {
      href: "/halka-arz/tavan-serisi",
      label: "Tavan serilerini incele",
      text: "Son halka arzlarda tavan serisi ve işlem sonrası performans.",
    },
  ],
  "/rehberler/halka-arzdan-sonra-hisse-ne-zaman-satilir": [
    {
      href: "/halka-arz/tavan-serisi",
      label: "Tavan performansına bak",
      text: "Halka arz sonrası tavan serisi ve kapanış verileri.",
    },
  ],
  "/rehberler/bist-islem-kodu-nedir": [
    {
      href: "/halka-arz/takvim",
      label: "İşlem kodlarını gör",
      text: "Güncel halka arzların BIST kodu ve işlem başlangıç bilgileri.",
    },
  ],
  "/rehberler/izahname-nedir": [
    {
      href: "/halka-arz/onayli-izahnameler",
      label: "Onaylı izahnameler",
      text: "SPK onayı sonrası yayımlanan halka arz izahname özetleri.",
    },
    {
      href: "/halka-arz/taslak-izahnameler",
      label: "Taslak izahnameler",
      text: "Başvuru aşamasındaki şirketlerin taslak izahname sayfaları.",
    },
  ],
};

function Section({ section }: { section: RehberBolum }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-slate-200 pt-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {section.title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {section.cards ? (
          <div className="grid gap-3">
            {section.cards.map((card, index) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-bold text-slate-900">
                  {section.orderedCards ? `${index + 1}. ` : ""}
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {section.bullets ? (
          <ul className="list-disc space-y-2 pl-5">
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        {section.note ? (
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-900">
            {section.note}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function RehberMakale({
  guide,
}: {
  guide: RehberMakaleData;
}) {
  const ilgiliBaglantilar = rehberIlgiliBaglantilari[guide.href] ?? [];
  const tableOfContents = [
    ...guide.sections.map((section) => ({
      href: `#${section.id}`,
      label: section.title,
    })),
    { href: "#sss", label: "Sık Sorulan Sorular" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        mainEntityOfPage: `${siteUrl}${guide.href}`,
        author: {
          "@type": "Person",
          "@id": `${siteUrl}/yazar/erman-hoca#person`,
          name: "Erman Hoca",
          url: `${siteUrl}/yazar/erman-hoca`,
        },
        publisher: {
          "@type": "Organization",
          name: "Hoca İle Borsa",
          url: siteUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Rehberler",
            item: `${siteUrl}/rehberler`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.breadcrumb,
            item: `${siteUrl}${guide.href}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/rehberler"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Rehberler
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">{guide.breadcrumb}</span>
        </nav>

        <article className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
            <header>
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Rehber
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                {guide.title}
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
                {guide.intro}
              </p>
              {ilgiliBaglantilar.length > 0 ? (
                <nav
                  aria-label="İlgili rehber ve araç bağlantıları"
                  className="mt-5 grid gap-3 sm:grid-cols-2"
                >
                  {ilgiliBaglantilar.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      className="rounded-xl border border-blue-100 bg-blue-50 p-4 transition hover:border-blue-200 hover:bg-blue-100"
                    >
                      <span className="text-sm font-bold text-blue-800">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-blue-950">
                        {item.text}
                      </span>
                    </Link>
                  ))}
                </nav>
              ) : null}
            </header>

            <div className="mt-8 space-y-10">
              {guide.sections.map((section) => (
                <Section key={section.id} section={section} />
              ))}

              {guide.sources ? (
                <section
                  id="kaynaklar"
                  className="scroll-mt-24 border-t border-slate-200 pt-8"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    Kaynaklar
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {guide.sources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                      >
                        <h3 className="font-bold text-slate-900">
                          {source.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {source.text}
                        </p>
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}

              <section
                id="sss"
                className="scroll-mt-24 border-t border-slate-200 pt-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Sık Sorulan Sorular
                </h2>
                <div className="mt-4 space-y-3">
                  {guide.faq.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <summary className="cursor-pointer font-bold text-slate-900">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                <strong>Yasal Uyarı:</strong> Bu yazı bilgilendirme amacıyla
                hazırlanmıştır. Burada yer alan bilgiler yatırım danışmanlığı
                kapsamında değildir. Pay piyasalarında işlem yapmak risk içerir.
                Yatırım kararları, kişisel risk-getiri tercihleri, güncel
                veriler ve resmi dokümanlar dikkate alınarak verilmelidir.
              </section>

              <RehberAltBolumler currentHref={guide.href} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                İçindekiler
              </h2>
              <div className="mt-4 space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}

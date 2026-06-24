import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHisse, getTumHisseSembolleri } from "@/lib/hisseler";
import { getHisseLogo } from "@/lib/hisse-logolar";
import { getTemettulerBySembol } from "@/lib/temettuler";
import { getKapBySembol } from "@/lib/kap";
import {
  oranYorumlariUret,
  donemEtiketi,
  ceyrekEtiketi,
  type TemelOranlar,
  type OranYorumSatiri,
} from "@/lib/oranYorumla";

const siteUrl = "https://www.hocaileborsa.com";

export const dynamicParams = true;

type OzgunAnaliz = {
  isModeli?: string;
  gelirKaynaklari?: string[];
  gucluYanlar?: string[];
  riskler?: string[];
  sektorelKonum?: string;
  ortaklikYorumu?: string;
  temettuYorumu?: string;
  yatirimciNotu?: string;
};

type SeoSoru = {
  soru?: string;
  cevap?: string;
};

type BenzerSirket = {
  kod?: string;
  ad?: string;
  aciklama?: string;
};

type EkHisseAlanlari = {
  ozgunAnaliz?: OzgunAnaliz;
  seoSorular?: SeoSoru[];
  benzerSirketler?: BenzerSirket[];
  temelOranlar?: TemelOranlar;
  seo?: {
    title?: string;
    description?: string;
  };
};

export function generateStaticParams() {
  return getTumHisseSembolleri().map((sembol) => ({ sembol }));
}

function doluMetin(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function doluListe<T>(value?: T[] | null): value is T[] {
  return Array.isArray(value) && value.length > 0;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sembol: string }>;
}): Promise<Metadata> {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) return {};

  const detayliHisse = hisse as typeof hisse & EkHisseAlanlari;

  const baslik =
    detayliHisse.seo?.title ||
    `${hisse.kod} Hisse Bilgileri: ${hisse.sirketAdi} Ortaklık Yapısı, Faaliyet Alanı ve Şirket Profili`;

  const aciklama =
    detayliHisse.seo?.description ||
    `${hisse.kod} hisse koduyla işlem gören ${hisse.sirketAdi} hakkında ortaklık yapısı, faaliyet alanı, iştirakleri, endeks bilgileri, sermaye geçmişi ve şirket profili.`;

  const url = `${siteUrl}/hisse/${hisse.kod.toLowerCase()}`;

  return {
    title: baslik,
    description: aciklama,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: baslik,
      description: aciklama,
      images: [{ url: `${siteUrl}/banner.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: baslik,
      description: aciklama,
      images: [`${siteUrl}/banner.png`],
    },
  };
}

function SectionBaslik({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-blue-600" />
      <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
        {children}
      </h2>
    </div>
  );
}

function AltBaslik({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 text-sm font-bold text-slate-800">{children}</h3>;
}

function MetinKarti({
  baslik,
  metin,
}: {
  baslik: string;
  metin?: string;
}) {
  if (!doluMetin(metin)) return null;

  return (
    <section className="mt-8">
      <SectionBaslik>{baslik}</SectionBaslik>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
        {metin}
      </div>
    </section>
  );
}

function MaddeListesi({
  baslik,
  maddeler,
  ton = "blue",
}: {
  baslik: string;
  maddeler?: string[];
  ton?: "blue" | "green" | "amber" | "red";
}) {
  if (!doluListe(maddeler)) return null;

  const renkler = {
    blue: "border-blue-100 bg-blue-50 text-blue-800",
    green: "border-emerald-100 bg-emerald-50 text-emerald-800",
    amber: "border-amber-100 bg-amber-50 text-amber-800",
    red: "border-rose-100 bg-rose-50 text-rose-800",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <AltBaslik>{baslik}</AltBaslik>
      <ul className="space-y-2">
        {maddeler.map((madde, i) => (
          <li
            key={`${baslik}-${i}`}
            className={`rounded-lg border px-3 py-2 text-sm font-medium leading-6 ${renkler[ton]}`}
          >
            {madde}
          </li>
        ))}
      </ul>
    </div>
  );
}

function oranFormatla(oran: number): string {
  return oran.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Oran yorum satırı durumuna göre rozet metni + renk. Seviye rozetleri (düşük/
// orta/yüksek) nötr renktedir; "iyi/kötü" çağrışımı yapmaz, yalnızca oranın
// kendi seviyesini betimler.
const ORAN_ROZET: Record<
  OranYorumSatiri["durum"],
  { etiket: string; sinif: string }
> = {
  dusuk: {
    etiket: "Düşük seviye",
    sinif: "bg-slate-100 text-slate-600 ring-slate-400/20",
  },
  orta: {
    etiket: "Orta seviye",
    sinif: "bg-slate-100 text-slate-600 ring-slate-400/20",
  },
  yuksek: {
    etiket: "Yüksek seviye",
    sinif: "bg-slate-100 text-slate-600 ring-slate-400/20",
  },
  negatif: {
    etiket: "Negatif değer",
    sinif: "bg-amber-50 text-amber-700 ring-amber-600/20",
  },
  uc: {
    etiket: "Uç değer",
    sinif: "bg-amber-50 text-amber-700 ring-amber-600/20",
  },
  "buyume-pozitif": {
    etiket: "Dönemsel artış",
    sinif: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  },
  "buyume-negatif": {
    etiket: "Dönemsel azalış",
    sinif: "bg-rose-50 text-rose-700 ring-rose-600/20",
  },
};

function TemelOranlarBolumu({
  kod,
  temelOranlar,
}: {
  kod: string;
  temelOranlar?: TemelOranlar;
}) {
  if (!temelOranlar) return null;

  const satirlar = oranYorumlariUret(kod, temelOranlar);
  if (satirlar.length === 0) return null;

  const donemAd = donemEtiketi(temelOranlar.donem);
  const ceyrekAd = ceyrekEtiketi(temelOranlar.donem);
  const hesaplamaMetni = `Oranlar ${ceyrekAd} finansal verilerine ve bir önceki gün kapanış fiyatlarına göre hesaplanmıştır.`;

  return (
    <section className="mt-8">
      <SectionBaslik>Temel Oranlar ve Yorumları</SectionBaslik>

      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
        <span>{hesaplamaMetni}</span>
      </div>

      <div className="space-y-3">
        {satirlar.map((satir) => {
          const rozet = ORAN_ROZET[satir.durum];
          return (
            <div
              key={satir.key}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900">{satir.label}</h3>
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${rozet.sinif}`}
                >
                  {rozet.etiket}
                </span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                  <span className="text-slate-500">Değer:</span>
                  <strong className="text-slate-900">{satir.sirketStr}</strong>
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-700">{satir.yorum}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
        ⚠️ Buradaki oranlar <strong>{donemAd}</strong> dönemine ait
        geçmiş/dönemsel finansal verilere dayanır, anlık fiyatı yansıtmaz.
        Yorumlar genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir ve tek
        başına karar dayanağı olamaz.
      </div>
    </section>
  );
}

export default async function HisseKunyePage({
  params,
}: {
  params: Promise<{ sembol: string }>;
}) {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) notFound();

  const detayliHisse = hisse as typeof hisse & EkHisseAlanlari;

  const {
    ortaklikYapisi,
    istirakler = [],
    kurumsalBilgiler,
    borsaBilgileri,
    temettuSermayeGecmisi,
  } = hisse;

  const ozgunAnaliz = detayliHisse.ozgunAnaliz;
  const temelOranlar = detayliHisse.temelOranlar;
  const seoSorular = (detayliHisse.seoSorular || []).filter(
    (item) => doluMetin(item.soru) && doluMetin(item.cevap)
  );
  const benzerSirketler = (detayliHisse.benzerSirketler || []).filter(
    (item) => doluMetin(item.kod) || doluMetin(item.ad)
  );

  const logo = getHisseLogo(hisse.kod);
  const sirketKisaAd = hisse.sirketAdi.split(" ").slice(0, 1).join(" ");
  const url = `${siteUrl}/hisse/${hisse.kod.toLowerCase()}`;

  const temettuKayitlari = getTemettulerBySembol(hisse.kod);
  const kapKayitlari = getKapBySembol(hisse.kod);

  const istiraklerdeSermayeVar = (istirakler ?? []).some((i) => i.sermaye);

  const corporation: Record<string, unknown> = {
    "@type": "Corporation",
    "@id": `${url}#corporation`,
    name: hisse.sirketAdi,
    tickerSymbol: hisse.borsaBilgileri.bistKodu,
    url,
  };

  if (kurumsalBilgiler?.web) corporation.sameAs = [kurumsalBilgiler.web];

  if (kurumsalBilgiler?.merkez) {
    corporation.address = {
      "@type": "PostalAddress",
      streetAddress: kurumsalBilgiler.merkez,
      addressCountry: "TR",
    };
  }

  if (istirakler.length > 0) {
    corporation.subOrganization = istirakler.map((i) => ({
      "@type": "Organization",
      name: i.ad,
    }));
  }

  const graphItems: Record<string, unknown>[] = [
    corporation,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${hisse.kod} - ${sirketKisaAd} Hisse Künyesi`,
      about: { "@id": `${url}#corporation` },
      isPartOf: { "@id": `${siteUrl}/#organization` },
      inLanguage: "tr",
    },
  ];

  if (seoSorular.length > 0) {
    graphItems.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: seoSorular.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.cevap,
        },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">
            {hisse.kod} Hisse Künyesi
          </span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt={`${hisse.kod} logo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-2 ring-1 ring-inset ring-slate-200"
                />
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                    {hisse.kod}
                  </h1>
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                    Hisse Künyesi
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-600 md:text-base">
                  {hisse.sirketAdi}
                </p>
              </div>
            </div>

            {hisse.hakkinda.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Şirket Hakkında</SectionBaslik>
                <div className="space-y-4 text-base leading-8 text-slate-700">
                  {hisse.hakkinda.map((paragraf, i) => (
                    <p key={i}>{paragraf}</p>
                  ))}
                </div>
              </section>
            )}

            <MetinKarti
              baslik="Şirket Ne İş Yapar?"
              metin={ozgunAnaliz?.isModeli}
            />

            {(doluListe(ozgunAnaliz?.gelirKaynaklari) ||
              doluListe(ozgunAnaliz?.gucluYanlar) ||
              doluListe(ozgunAnaliz?.riskler)) && (
              <section className="mt-8">
                <SectionBaslik>Şirketin Gelir Yapısı, Güçlü Yanları ve Riskleri</SectionBaslik>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <MaddeListesi
                    baslik="Gelir Kaynakları"
                    maddeler={ozgunAnaliz?.gelirKaynaklari}
                    ton="blue"
                  />
                  <MaddeListesi
                    baslik="Güçlü Yanlar"
                    maddeler={ozgunAnaliz?.gucluYanlar}
                    ton="green"
                  />
                  <MaddeListesi
                    baslik="Riskler"
                    maddeler={ozgunAnaliz?.riskler}
                    ton="red"
                  />
                </div>
              </section>
            )}

            <MetinKarti
              baslik="Sektördeki Yeri"
              metin={ozgunAnaliz?.sektorelKonum}
            />

            {ortaklikYapisi.ortaklar.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Ortaklık Yapısı</SectionBaslik>
                <div className="space-y-4">
                  {ortaklikYapisi.ortaklar.map((ortak) => (
                    <div key={ortak.ad}>
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-700">
                          {ortak.ad}
                        </span>
                        <span className="shrink-0 text-sm font-bold text-slate-900">
                          %{oranFormatla(ortak.oran)}
                        </span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                          style={{ width: `${Math.min(ortak.oran, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {ortaklikYapisi.not && (
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {ortaklikYapisi.not}
                  </p>
                )}

                {doluMetin(ozgunAnaliz?.ortaklikYorumu) && (
                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-900 md:text-base md:leading-8">
                    <strong>Ortaklık yapısı yorumu: </strong>
                    {ozgunAnaliz.ortaklikYorumu}
                  </div>
                )}
              </section>
            )}

            {istirakler.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>İştirakler ve Bağlı Ortaklıklar</SectionBaslik>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">
                          İştirak / Bağlı Ortaklık
                        </th>
                        {istiraklerdeSermayeVar && (
                          <th className="px-4 py-3 text-right font-semibold">
                            Sermaye (TL)
                          </th>
                        )}
                        <th className="px-4 py-3 text-right font-semibold">
                          İştirak Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {istirakler.map((istirak) => (
                        <tr key={istirak.ad} className="text-slate-700">
                          <td className="px-4 py-2.5 font-medium text-slate-800">
                            {istirak.ad}
                          </td>
                          {istiraklerdeSermayeVar && (
                            <td className="px-4 py-2.5 text-right text-slate-700">
                              {istirak.sermaye || "—"}
                            </td>
                          )}
                          <td className="px-4 py-2.5 text-right font-bold text-slate-900">
                            %{oranFormatla(istirak.oran)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {kurumsalBilgiler &&
              (kurumsalBilgiler.merkez ||
                kurumsalBilgiler.web ||
                kurumsalBilgiler.odenmisSermaye ||
                (kurumsalBilgiler.yonetimKurulu?.length ?? 0) > 0) && (
                <section className="mt-8">
                  <SectionBaslik>Kurumsal Bilgiler</SectionBaslik>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {kurumsalBilgiler.merkez && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Merkez
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-slate-800">
                          {kurumsalBilgiler.merkez}
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler.web && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Web Sitesi
                        </dt>
                        <dd className="mt-1 text-sm font-bold">
                          <a
                            href={kurumsalBilgiler.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 transition hover:text-blue-800 hover:underline"
                          >
                            {kurumsalBilgiler.web.replace(/^https?:\/\//, "")}
                          </a>
                        </dd>
                      </div>
                    )}

                    {kurumsalBilgiler.odenmisSermaye && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Ödenmiş Sermaye
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">
                          {kurumsalBilgiler.odenmisSermaye}
                        </dd>
                      </div>
                    )}

                    {(kurumsalBilgiler.yonetimKurulu?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Yönetim Kurulu
                        </dt>
                        <dd className="mt-2 flex flex-wrap gap-2">
                          {kurumsalBilgiler.yonetimKurulu!.map((uye) => (
                            <span
                              key={uye}
                              className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                            >
                              {uye}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}
                  </dl>
                </section>
              )}

            <section className="mt-8">
              <SectionBaslik>Borsa Bilgileri</SectionBaslik>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    BIST Kodu
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-slate-900">
                    {borsaBilgileri.bistKodu}
                  </dd>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Katılım Endeksi Uygunluğu
                  </dt>
                  <dd className="mt-1">
                    <span
                      className={
                        borsaBilgileri.katilimEndeksiUygun
                          ? "inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-sm font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20"
                          : "inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-sm font-bold text-slate-600 ring-1 ring-inset ring-slate-400/20"
                      }
                    >
                      {borsaBilgileri.katilimEndeksiUygun
                        ? "Uygun"
                        : "Uygun Değil"}
                    </span>
                  </dd>
                </div>

                {borsaBilgileri.endeksler.length > 0 && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Yer Aldığı Endeksler
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {borsaBilgileri.endeksler.map((endeks) => (
                        <span
                          key={endeks}
                          className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20"
                        >
                          {endeks}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}

                {borsaBilgileri.halkaArzTarihi ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Halka Arz Tarihi
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">
                      {borsaBilgileri.halkaArzTarihi}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </section>

            {doluMetin(ozgunAnaliz?.yatirimciNotu) && (
              <section className="mt-8">
                <SectionBaslik>Yatırımcı Notu</SectionBaslik>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base md:leading-8">
                  {ozgunAnaliz.yatirimciNotu}
                </div>
              </section>
            )}

            <TemelOranlarBolumu kod={hisse.kod} temelOranlar={temelOranlar} />

            <section className="mt-8">
              <SectionBaslik>Temettü Geçmişi</SectionBaslik>
              {temettuKayitlari.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Tarih</th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Hisse Başı Brüt
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Hisse Başı Net
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Verim
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Dağıtma Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {temettuKayitlari.map((kayit, i) => (
                        <tr
                          key={`${kayit.isoTarih}-${i}`}
                          className="text-slate-700"
                        >
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {kayit.tarih}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-900">
                            {kayit.brut}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-900">
                            {kayit.net}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {kayit.verim}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {kayit.oran || "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                  Bu hisse için temettü kaydı bulunmuyor. Temettü takvimine
                  eklendiğinde burada otomatik görünecektir.
                </div>
              )}

              {temettuSermayeGecmisi.length > 0 && (
                <div className="mt-5">
                  <h3 className="mb-2 text-sm font-bold text-slate-700">
                    Sermaye Artırımı ve Diğer Geçmiş
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full min-w-[480px] text-left text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Yıl</th>
                          <th className="px-4 py-3 font-semibold">Tür</th>
                          <th className="px-4 py-3 font-semibold">
                            Tutar / Oran
                          </th>
                          <th className="px-4 py-3 font-semibold">Açıklama</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {temettuSermayeGecmisi.map((kayit, i) => (
                          <tr key={i} className="text-slate-700">
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {kayit.yil}
                            </td>
                            <td className="px-4 py-3">{kayit.tur}</td>
                            <td className="px-4 py-3">{kayit.tutarOran}</td>
                            <td className="px-4 py-3 text-slate-500">
                              {kayit.aciklama}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {doluMetin(ozgunAnaliz?.temettuYorumu) && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                  <strong>Temettü / sermaye geçmişi yorumu: </strong>
                  {ozgunAnaliz.temettuYorumu}
                </div>
              )}
            </section>

            <section className="mt-8">
              <SectionBaslik>Önemli KAP Gelişmeleri</SectionBaslik>
              {kapKayitlari.length > 0 ? (
                <ul className="space-y-3">
                  {kapKayitlari.map((kayit, i) => (
                    <li
                      key={`${kayit.isoTarih}-${i}`}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                          {kayit.tur}
                        </span>
                        <time
                          dateTime={kayit.isoTarih}
                          className="text-xs font-medium text-slate-400"
                        >
                          {kayit.tarih}
                        </time>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {kayit.link ? (
                          <a
                            href={kayit.link}
                            {...(kayit.link.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="transition hover:text-blue-700"
                          >
                            {kayit.baslik}
                          </a>
                        ) : (
                          kayit.baslik
                        )}
                      </h3>
                      {kayit.aciklama && (
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {kayit.aciklama}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                  Bu hisse için etiketlenmiş KAP gelişmesi bulunmuyor.
                </div>
              )}
            </section>

            {seoSorular.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Sık Sorulan Sorular</SectionBaslik>
                <div className="space-y-3">
                  {seoSorular.map((item, i) => (
                    <div
                      key={`${item.soru}-${i}`}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-sm font-bold text-slate-900 md:text-base">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {benzerSirketler.length > 0 && (
              <section className="mt-8">
                <SectionBaslik>Benzer Şirketler</SectionBaslik>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benzerSirketler.map((item, i) => (
                    <div
                      key={`${item.kod || item.ad}-${i}`}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-center gap-2">
                        {item.kod && (
                          <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                            {item.kod}
                          </span>
                        )}
                        {item.ad && (
                          <h3 className="text-sm font-bold text-slate-900">
                            {item.ad}
                          </h3>
                        )}
                      </div>
                      {item.aciklama && (
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.aciklama}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {hisse.yasalUyari && (
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ {temelOranlar
                  ? hisse.yasalUyari.replace(
                      /Fiyat\/işlem verisi içermez\.?/i,
                      "Anlık fiyat/işlem verisi sunmaz; sayfadaki oranlar dönemsel finansal tablolara dayanır."
                    )
                  : hisse.yasalUyari}{" "}
                Bilgilerin doğruluğu taahhüt edilmez; bu bilgilerden doğabilecek
                sonuçlardan sorumluluk kabul edilmez.
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}

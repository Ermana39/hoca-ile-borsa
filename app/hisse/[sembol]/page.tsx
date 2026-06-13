import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHisse, getTumHisseSembolleri } from "@/lib/hisseler";
import { getTemettulerBySembol } from "@/lib/temettuler";
import { getKapBySembol } from "@/lib/kap";

const siteUrl = "https://www.hocaileborsa.com";

export const dynamicParams = true;

export function generateStaticParams() {
  return getTumHisseSembolleri().map((sembol) => ({ sembol }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sembol: string }>;
}): Promise<Metadata> {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) return {};

  const baslik = `${hisse.kod} - ${hisse.sirketAdi} Hisse Künyesi, İştirakler ve Ortaklık Yapısı | Hoca İle Borsa`;
  const aciklama = `${hisse.kod} şirket künyesi, faaliyet alanları, iştirakleri, ortaklık yapısı, temettü geçmişi ve borsa bilgileri. Hoca İle Borsa'da.`;
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

function oranFormatla(oran: number): string {
  return oran.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default async function HisseKunyePage({
  params,
}: {
  params: Promise<{ sembol: string }>;
}) {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) notFound();

  const {
    ortaklikYapisi,
    istirakler = [],
    kurumsalBilgiler,
    borsaBilgileri,
    temettuSermayeGecmisi,
  } = hisse;

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
    ],
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
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm">
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

            {hisse.yasalUyari && (
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ {hisse.yasalUyari}
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
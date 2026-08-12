import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import { Fragment } from "react";
import { getYazar, varsayilanYazar } from "@/app/data/yazarlar";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import KapEtkiAnalizi from "@/components/KapEtkiAnalizi";
import { formatHaberTarihi } from "@/lib/haber-tarih";
import { getKategori } from "@/lib/haber-kategorileri";
import {
  HABER_SITE_URL,
  type HaberBolumu,
  type HaberKaydi,
  type HaberOzetKarti,
  type HaberVurgu,
} from "@/lib/haber-kayitlari";

const bolumStilleri: Record<HaberVurgu, string> = {
  normal: "border-slate-200 bg-white",
  analiz: "border-blue-200 bg-blue-50/40",
  risk: "border-amber-200 bg-white",
  takip: "border-slate-300 bg-slate-50",
};

const kartStilleri: Record<HaberVurgu, string> = {
  normal: "border-slate-200 bg-slate-50 text-slate-700",
  analiz: "border-blue-200 bg-white text-slate-700",
  risk: "border-amber-200 bg-white text-amber-950",
  takip: "border-slate-200 bg-white text-slate-700",
};

function jsonLdGuvenli(veri: unknown) {
  return JSON.stringify(veri).replace(/</g, "\\u003c");
}

function kapKaynakSatiri(paragraf: string) {
  const match = paragraf.match(/https?:\/\/(?:www\.)?kap\.org\.tr\/\S+/i);
  if (!/^Kaynak:/i.test(paragraf) || !match) return null;
  return match[0];
}

function HaberParagrafi({
  paragraf,
  id,
}: {
  paragraf: string;
  id: string;
}) {
  const kapLink = kapKaynakSatiri(paragraf);

  if (kapLink) {
    return (
      <p className="text-sm leading-7 text-slate-700 md:text-base">
        <a
          href={kapLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 hover:text-blue-900"
        >
          Kaynak KAP
        </a>
      </p>
    );
  }

  return (
    <p id={id} className="text-sm leading-7 text-slate-700 md:text-base">
      {paragraf}
    </p>
  );
}

function OzetKarti({ kart }: { kart: HaberOzetKarti }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
      <div className="text-sm font-semibold text-blue-800">
        {kart.baslik}
      </div>
      <div className="mt-1 text-2xl font-bold text-blue-950">
        {kart.deger}
      </div>
      <div className="mt-1 text-sm leading-6 text-blue-800">
        {kart.aciklama}
      </div>
    </div>
  );
}

function DegisimGrafigi({
  grafik,
}: {
  grafik: NonNullable<HaberBolumu["degisimGrafigi"]>;
}) {
  const enYuksekDeger = Math.max(
    ...grafik.veriler.map((veri) => Math.abs(veri.deger)),
    1
  );

  return (
    <figure className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <figcaption className="text-sm font-bold text-slate-900">
        {grafik.baslik}
      </figcaption>
      <div className="mt-3 space-y-2.5">
        {grafik.veriler.map((veri) => {
          const genislik = Math.max(
            3,
            (Math.abs(veri.deger) / enYuksekDeger) * 100
          );
          const olumlu = veri.deger >= 0;

          return (
            <div
              key={`${grafik.baslik}-${veri.etiket}`}
              className="grid grid-cols-[88px_minmax(0,1fr)_58px] items-center gap-3"
            >
              <span className="truncate text-xs font-semibold text-slate-700">
                {veri.etiket}
              </span>
              <div className="relative h-3 rounded-full bg-slate-200">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-[-2px] left-1/2 z-10 w-px bg-slate-500"
                />
                <div
                  className={`absolute top-0 h-full ${
                    olumlu ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{
                    width: `${genislik / 2}%`,
                    left: olumlu ? "50%" : `${50 - genislik / 2}%`,
                    borderRadius: olumlu
                      ? "0 9999px 9999px 0"
                      : "9999px 0 0 9999px",
                  }}
                />
              </div>
              <span
                className={`text-right text-xs font-bold tabular-nums ${
                  olumlu ? "text-emerald-700" : "text-rose-700"
                }`}
              >
                {olumlu ? "+" : ""}
                {veri.deger.toLocaleString("tr-TR", {
                  maximumFractionDigits: 1,
                })}
                %
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

function getFonKapanisKodlari(kayit: HaberKaydi) {
  if (!kayit.slug.endsWith("fonlar-gunluk-kapanis-degerlendirmesi")) {
    return [];
  }

  return Array.from(
    new Set(
      kayit.kaynaklar.flatMap((kaynak) => {
        const eslesme = kaynak.url.match(
          /\/fonlar\/etki-analizi\/([a-z0-9-]+)(?:[/?#]|$)/i
        );
        return eslesme ? [eslesme[1].toLowerCase()] : [];
      })
    )
  );
}

function getBolumFonKodlari(baslik: string, fonKodlari: string[]) {
  const baslikKelimeleri = new Set(
    baslik.toUpperCase().split(/[^A-Z0-9]+/).filter(Boolean)
  );

  return fonKodlari.filter((fonKodu) =>
    baslikKelimeleri.has(fonKodu.toUpperCase())
  );
}

function HaberIcerikBolumu({
  bolum,
  fonKodlari = [],
}: {
  bolum: HaberBolumu;
  fonKodlari?: string[];
}) {
  const vurgu = bolum.vurgu ?? "normal";
  const kapBaglantilari = [
    bolum.kapLink
      ? {
          href: bolum.kapLink,
          label: bolum.kapLinkMetni ?? "Kaynak KAP",
        }
      : null,
    ...(bolum.ekKapLinkler ?? []).map((href, index) => ({
      href,
      label:
        index === 0
          ? "Kaynak KAP"
          : `Kaynak KAP ${index + 1}`,
    })),
  ].filter((baglanti): baglanti is { href: string; label: string } =>
    Boolean(baglanti)
  );

  return (
    <section
      className={`rounded-2xl border p-5 shadow-sm md:p-6 ${bolumStilleri[vurgu]}`}
    >
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        {bolum.baslik}
      </h2>

      {bolum.giris && (
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {bolum.giris}
        </p>
      )}

      {bolum.paragraflar && bolum.paragraflar.length > 0 && (
        <div className="mt-4 space-y-4">
          {bolum.paragraflar.map((paragraf, index) => (
            <Fragment key={`${bolum.baslik}-paragraf-${index}`}>
              <HaberParagrafi
                id={`${bolum.baslik}-paragraf-${index}`}
                paragraf={paragraf}
              />
              {index === 1 && bolum.degisimGrafigi && (
                <DegisimGrafigi grafik={bolum.degisimGrafigi} />
              )}
            </Fragment>
          ))}
        </div>
      )}

      {bolum.haberLink && (
        <Link
          href={bolum.haberLink}
          prefetch={false}
          className="mt-5 inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:text-base"
        >
          {bolum.haberLinkMetni ?? "Haberin detaylarını oku"}
        </Link>
      )}

      {kapBaglantilari.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {kapBaglantilari.map((baglanti) => (
            <a
              key={baglanti.href}
              href={baglanti.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 hover:text-blue-900"
            >
              {baglanti.label}
            </a>
          ))}
        </div>
      )}

      {bolum.tablo && bolum.tablo.basliklar.length > 0 && (
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                {bolum.tablo.basliklar.map((baslik, index) => (
                  <th
                    key={`${bolum.baslik}-tablo-baslik-${index}`}
                    className="px-4 py-3 text-left font-bold"
                  >
                    {baslik}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bolum.tablo.satirlar.map((satir, satirIndex) => (
                <tr
                  key={`${bolum.baslik}-tablo-satir-${satirIndex}`}
                  className={satirIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  {satir.map((hucre, hucreIndex) => (
                    <td
                      key={`${bolum.baslik}-tablo-hucre-${satirIndex}-${hucreIndex}`}
                      className={`border-t border-slate-100 px-4 py-3 text-slate-700 ${
                        hucreIndex === 0 ? "font-semibold text-slate-900" : ""
                      }`}
                    >
                      {hucre}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {bolum.kartlar && bolum.kartlar.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {bolum.kartlar.map((kart, index) => (
            <div
              key={`${kart.baslik}-${index}`}
              className={`rounded-xl border p-4 ${kartStilleri[vurgu]}`}
            >
              <h3 className="text-base font-bold text-slate-900">
                {kart.baslik}
              </h3>
              <p className="mt-2 text-sm leading-7">{kart.aciklama}</p>
            </div>
          ))}
        </div>
      )}

      {bolum.maddeler && bolum.maddeler.length > 0 && (
        <ul className="mt-4 space-y-3">
          {bolum.maddeler.map((madde, index) => (
            <li
              key={`${bolum.baslik}-madde-${index}`}
              className={`rounded-xl border p-4 text-sm font-medium leading-7 ${kartStilleri[vurgu]}`}
            >
              {madde}
            </li>
          ))}
        </ul>
      )}

      {fonKodlari.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {fonKodlari.map((fonKodu) => (
            <Link
              key={fonKodu}
              href={`/fonlar/${fonKodu}`}
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:text-base"
            >
              {fonKodu.toUpperCase()} fon sayfası
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function FonKapanisYonlendirmeleri({ kayit }: { kayit: HaberKaydi }) {
  const fonKodlari = getFonKapanisKodlari(kayit);

  if (fonKodlari.length === 0) return null;

  const karsilastirmaHref = `/fonlar/fon-karsilastirma?fonlar=${encodeURIComponent(
    fonKodlari.join(",")
  )}`;

  return (
    <section
      className="border-y border-slate-200 py-6"
      aria-labelledby="haberdeki-fonlar-baslik"
    >
      <h2
        id="haberdeki-fonlar-baslik"
        className="text-xl font-bold tracking-tight text-slate-900"
      >
        Fon analiz araçları
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
        Haberdeki fonları karşılaştırın veya tüm yatırım fonlarını ayrıntılı
        ölçütlerle tarayın.
      </p>

      <nav
        className="mt-4 flex flex-wrap gap-2"
        aria-label="Fon analiz araçları"
      >
        <Link
          href="/fonlar"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Tüm fonlar
        </Link>
        <Link
          href="/fonlar/fon-tarayici"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Fon tarayıcı
        </Link>
        <Link
          href={karsilastirmaHref}
          prefetch={false}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Haberdeki fonları karşılaştır
        </Link>
      </nav>
    </section>
  );
}

function haberJsonLd(kayit: HaberKaydi) {
  const url = `${HABER_SITE_URL}/haber/${kayit.slug}`;
  const yazar = getYazar(kayit.yazarSlug) ?? getYazar(varsayilanYazar);

  return [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${url}#article`,
      headline: kayit.baslik,
      description: kayit.aciklama,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      image: {
        "@type": "ImageObject",
        url: `${HABER_SITE_URL}${kayit.gorsel.src}`,
        width: kayit.gorsel.genislik,
        height: kayit.gorsel.yukseklik,
      },
      datePublished: kayit.yayinTarihi,
      dateModified: kayit.guncellemeTarihi,
      inLanguage: "tr-TR",
      articleSection: getKategori(kayit.kategori)?.kisaBaslik,
      keywords: kayit.ilgiliHisseler,
      citation: kayit.kaynaklar.map((kaynak) => kaynak.url),
      author: yazar
        ? {
            "@type": "Person",
            "@id": `${HABER_SITE_URL}/yazar/${yazar.slug}#person`,
            name: yazar.isim,
            url: `${HABER_SITE_URL}/yazar/${yazar.slug}`,
          }
        : undefined,
      publisher: {
        "@type": "Organization",
        "@id": `${HABER_SITE_URL}/#organization`,
        name: "Hoca İle Borsa",
        url: HABER_SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${HABER_SITE_URL}/icon-512.png`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: HABER_SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Haberler",
          item: `${HABER_SITE_URL}/haberler`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: kayit.baslik,
          item: url,
        },
      ],
    },
  ];
}

export default function OrtakHaberSayfasi({ kayit }: { kayit: HaberKaydi }) {
  const href = `/haber/${kayit.slug}`;
  const kategori = getKategori(kayit.kategori);
  const yazar = getYazar(kayit.yazarSlug) ?? getYazar(varsayilanYazar);
  const yayinTarihi = formatHaberTarihi(kayit.yayinTarihi);
  const guncellemeTarihi = formatHaberTarihi(kayit.guncellemeTarihi);
  const guncellendi = kayit.guncellemeTarihi !== kayit.yayinTarihi;
  const kapanisDegerlendirmesi = kayit.etiket
    .toLocaleLowerCase("tr-TR")
    .includes("kapanış değerlendirmesi");
  const fonKapanisKodlari = getFonKapanisKodlari(kayit);

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdGuvenli(haberJsonLd(kayit)) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="İçerik yolu"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/haberler" prefetch={false} className="transition hover:text-blue-700">
            Haberler
          </Link>
          {kategori && (
            <>
              <span className="text-slate-300">/</span>
              <Link
                href={`/haberler/kategori/${kategori.slug}`}
                prefetch={false}
                className="transition hover:text-blue-700"
              >
                {kategori.kisaBaslik}
              </Link>
            </>
          )}
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={kayit.gorsel.src}
              alt={kayit.gorsel.alt}
              fill
              unoptimized
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {kayit.baslik}
            </h1>

            <div className="mb-6 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                {kayit.etiket}
              </span>
              <time dateTime={kayit.yayinTarihi} className="text-sm text-slate-500">
                {yayinTarihi}
              </time>
              {yazar && (
                <>
                  <span className="text-slate-300">·</span>
                  <Link
                    href={`/yazar/${yazar.slug}`}
                    prefetch={false}
                    className="text-sm font-semibold text-slate-600 hover:text-blue-700"
                  >
                    {yazar.isim}
                  </Link>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-base leading-8 text-slate-700 md:text-lg">
                {kayit.kaynakOzeti.giris.map((paragraf, index) => (
                  <p key={`giris-${index}`}>{paragraf}</p>
                ))}
              </div>

              {kayit.kaynakOzeti.ozetKartlari.length > 0 && (
                <section aria-label="Haber özeti" className="grid gap-4 sm:grid-cols-2">
                  {kayit.kaynakOzeti.ozetKartlari.map((kart, index) => (
                    <OzetKarti
                      key={`${kart.baslik}-${index}`}
                      kart={kart}
                    />
                  ))}
                </section>
              )}

              {!kapanisDegerlendirmesi &&
                kayit.kaynakOzeti.temelBilgiler.length > 0 && (
                  <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-sm md:p-6">
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Doğrulanabilir bilgiler
                      </p>
                      <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                        Kaynakta açıklanan temel bilgiler
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Bu bölümdeki veriler aşağıda bağlantısı verilen resmî kaynaklardan aktarılmıştır.
                      </p>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-emerald-200 bg-white">
                      <table className="min-w-full text-sm">
                        <tbody>
                          {kayit.kaynakOzeti.temelBilgiler.map((satir, index) => (
                            <tr
                              key={`${satir.etiket}-${index}`}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-emerald-50/40"
                              }
                            >
                              <th className="w-2/5 px-4 py-3 text-left font-semibold text-slate-800">
                                {satir.etiket}
                              </th>
                              <td className="px-4 py-3 font-medium text-slate-700">
                                {satir.deger}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

              {kayit.kaynakOzeti.bolumler.map((bolum, index) => (
                <HaberIcerikBolumu
                  key={`kaynak-${index}-${bolum.baslik}`}
                  bolum={bolum}
                  fonKodlari={getBolumFonKodlari(
                    bolum.baslik,
                    fonKapanisKodlari
                  )}
                />
              ))}

              {kayit.kapEtkiAnalizi && (
                <KapEtkiAnalizi analiz={kayit.kapEtkiAnalizi} />
              )}

              {!kapanisDegerlendirmesi &&
                kayit.editorDegerlendirmesi.giris.trim() !== "" && (
                  <section className="rounded-2xl border border-blue-300 bg-blue-50 p-5 md:p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Editoryal analiz
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Hoca İle Borsa değerlendirmesi
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                      {kayit.editorDegerlendirmesi.giris}
                    </p>
                  </section>
                )}

              {kayit.editorDegerlendirmesi.bolumler.map((bolum, index) => (
                <HaberIcerikBolumu
                  key={`yorum-${index}-${bolum.baslik}`}
                  bolum={bolum}
                  fonKodlari={getBolumFonKodlari(
                    bolum.baslik,
                    fonKapanisKodlari
                  )}
                />
              ))}

              <FonKapanisYonlendirmeleri kayit={kayit} />

              {kayit.sorular && kayit.sorular.length > 0 && (
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                  <h2 className="text-xl font-bold tracking-tight text-slate-900">
                    Haber hakkında kısa cevaplar
                  </h2>
                  <div className="mt-4 space-y-4">
                    {kayit.sorular.map((item, index) => (
                      <div
                        key={`${item.soru}-${index}`}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <h3 className="font-bold text-slate-900">{item.soru}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                          {item.cevap}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <HaberIlgiliBolumler slug={kayit.slug} baslik={kayit.baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                {kayit.yasalUyari ??
                  "Bu haber bilgilendirme amacıyla hazırlanmıştır; yatırım tavsiyesi değildir."}
              </div>

              {guncellendi && (
                <p className="text-xs leading-6 text-slate-500">
                  Son güncelleme: <time dateTime={kayit.guncellemeTarihi}>{guncellemeTarihi}</time>
                </p>
              )}
            </div>
          </div>

          <HaberAltKisim href={href} />
          <div className="px-6 pb-6 pt-5 md:px-10 md:pb-10">
            <AuthorBox slug={kayit.yazarSlug} />
          </div>
        </article>
      </div>
    </main>
  );
}

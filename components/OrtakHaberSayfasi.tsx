import Image from "next/image";
import Link from "next/link";
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
  type HaberVurgu,
} from "@/lib/haber-kayitlari";

const bolumStilleri: Record<HaberVurgu, string> = {
  normal: "border-slate-200 bg-white",
  analiz: "border-blue-200 bg-blue-50/40",
  risk: "border-amber-200 bg-amber-50/50",
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

function HaberIcerikBolumu({ bolum }: { bolum: HaberBolumu }) {
  const vurgu = bolum.vurgu ?? "normal";

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
            <p
              key={`${bolum.baslik}-paragraf-${index}`}
              className="text-sm leading-7 text-slate-700 md:text-base"
            >
              {paragraf}
            </p>
          ))}
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
          <Link href="/" className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/haberler" className="transition hover:text-blue-700">
            Haberler
          </Link>
          {kategori && (
            <>
              <span className="text-slate-300">/</span>
              <Link
                href={`/haberler/kategori/${kategori.slug}`}
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
                    <div
                      key={`${kart.baslik}-${index}`}
                      className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                    >
                      <div className="text-sm font-semibold text-blue-800">
                        {kart.baslik}
                      </div>
                      <div className="mt-1 text-2xl font-bold text-blue-950">
                        {kart.deger}
                      </div>
                      <div className="mt-1 text-sm text-blue-800">
                        {kart.aciklama}
                      </div>
                    </div>
                  ))}
                </section>
              )}

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
                          className={index % 2 === 0 ? "bg-white" : "bg-emerald-50/40"}
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

              {kayit.kaynakOzeti.bolumler.map((bolum, index) => (
                <HaberIcerikBolumu key={`kaynak-${index}-${bolum.baslik}`} bolum={bolum} />
              ))}

              {kayit.kapEtkiAnalizi && (
                <KapEtkiAnalizi analiz={kayit.kapEtkiAnalizi} />
              )}

              <section className="rounded-2xl border border-blue-300 bg-blue-50 p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Editoryal analiz
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Hoca ile Borsa değerlendirmesi
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {kayit.editorDegerlendirmesi.giris}
                </p>
              </section>

              {kayit.editorDegerlendirmesi.bolumler.map((bolum, index) => (
                <HaberIcerikBolumu key={`yorum-${index}-${bolum.baslik}`} bolum={bolum} />
              ))}

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

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-base font-bold text-slate-900">Kaynaklar</h2>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  Haber hazırlanırken kullanılan doğrudan kaynak bağlantıları:
                </p>
                <div className="mt-3 grid gap-3">
                  {kayit.kaynaklar.map((kaynak, index) => (
                    <a
                      key={`${kaynak.url}-${index}`}
                      href={kaynak.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {kaynak.tur}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-800">
                        {kaynak.ad}
                      </span>
                      {kaynak.yayinTarihi && (
                        <span className="mt-1 block text-xs text-slate-500">
                          Kaynak tarihi: {formatHaberTarihi(kaynak.yayinTarihi)}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </section>

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

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import {
  tahsisatMetni,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const SITE_URL = "https://www.hocaileborsa.com";

export type HalkaArzHaberAyarlari = {
  haberSlug: string;
  kisaAd: string;
  imageFile: string;
  publishedAt: string;
  publishedLabel: string;
};

function haberBasligi(kisaAd: string) {
  return `${kisaAd} Halka Arzına SPK Onayı: Fiyat, Lot ve Tüm Detaylar`;
}

function haberAciklamasi(veri: HalkaArzVeri, kisaAd: string) {
  const fiyat = veri.ozet.fiyatAralik || "halka arz fiyatı";
  const pay = veri.ozet.pay || veri.toplamPay || "toplam pay";
  return `${kisaAd} halka arzı SPK onayı aldı. ${fiyat} fiyat, ${pay} pay, dağıtım yöntemi, sermaye yapısı, fon kullanımı ve finansal veriler.`;
}

export function halkaArzHaberMetadata(
  veri: HalkaArzVeri,
  ayarlar: HalkaArzHaberAyarlari
): Metadata {
  const title = haberBasligi(ayarlar.kisaAd);
  const description = haberAciklamasi(veri, ayarlar.kisaAd);
  const canonical = `${SITE_URL}/haber/${ayarlar.haberSlug}`;
  const imageUrl = `${SITE_URL}/${ayarlar.imageFile}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hoca ile Borsa",
      type: "article",
      publishedTime: ayarlar.publishedAt,
      modifiedTime: ayarlar.publishedAt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: `${ayarlar.kisaAd} halka arzına SPK onayı geldi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      <div className="mt-5">{children}</div>
    </section>
  );
}

function BilgiKarti({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-slate-900">
        {value?.trim() || "Henüz açıklanmadı"}
      </p>
    </div>
  );
}

export default function HalkaArzOnayHaberi({
  veri,
  ayarlar,
}: {
  veri: HalkaArzVeri;
  ayarlar: HalkaArzHaberAyarlari;
}) {
  const title = haberBasligi(ayarlar.kisaAd);
  const description = haberAciklamasi(veri, ayarlar.kisaAd);
  const canonicalPath = `/haber/${ayarlar.haberSlug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const imagePath = `/${ayarlar.imageFile}`;
  const imageUrl = `${SITE_URL}${imagePath}`;
  const izahnamePath = `/halka-arz/onayli-izahnameler/${veri.slug}`;
  const ozet = veri.ozet;
  const donemler =
    veri.finansalDonemler && veri.finansalDonemler.length > 0
      ? veri.finansalDonemler
      : Array.from(
          new Set(
            veri.finansalVeriler.flatMap((row) => Object.keys(row.donemler))
          )
        );

  const ozetKartlari = [
    { label: "Talep toplama tarihi", value: ozet.halkaArzTarihi },
    { label: "Halka arz fiyatı", value: ozet.fiyatAralik },
    { label: "Dağıtım yöntemi", value: ozet.dagitimYontemi },
    { label: "Toplam pay", value: ozet.pay || veri.toplamPay },
    { label: "Halka açıklık oranı", value: veri.halkaAciklikOrani },
    { label: "Aracı kurum", value: ozet.araciKurum },
    { label: "BIST kodu", value: ozet.bistKodu || veri.bistKodu },
    { label: "Katılım endeksi", value: ozet.katilimEndeksi },
    { label: "İşlem göreceği pazar", value: ozet.pazar },
  ];

  const taahhutlar = [
    {
      label: "Fiyat istikrarı",
      value: veri.taahhutOzeti?.fiyatIstikrari,
    },
    {
      label: "Satmama taahhüdü",
      value: veri.taahhutOzeti?.satmamaTaahhudu,
    },
    {
      label: "Halka açıklık",
      value: veri.taahhutOzeti?.halkaAciklik,
    },
    {
      label: "Günlük alım emri",
      value: veri.taahhutOzeti?.gunlukAlimEmri,
    },
  ].filter((item) => item.value?.trim());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    datePublished: ayarlar.publishedAt,
    dateModified: ayarlar.publishedAt,
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
            Halka Arz
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Sermaye Piyasası Kurulu, {veri.sirketAdi} halka arzına onay verdi.
            Halka arzın fiyatı, pay miktarı, sermaye yapısı, tahsisat grupları,
            fon kullanım planı ve finansal görünümü onaylı izahname verileriyle
            birlikte bu haberde yer alıyor.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
            <time dateTime={ayarlar.publishedAt}>
              Yayınlanma: {ayarlar.publishedLabel}
            </time>
            <span>•</span>
            <span>Kaynak: SPK Bülteni ve onaylı izahname</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <Image
            src={imagePath}
            alt={`${ayarlar.kisaAd} halka arzına SPK onayı geldi`}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <Section title="Halka arz özeti">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ozetKartlari.map((item) => (
              <BilgiKarti key={item.label} {...item} />
            ))}
          </div>
        </Section>

        {veri.oneCikanlar.length > 0 && (
          <Section title="Öne çıkan halka arz bilgileri">
            <div className="grid gap-4 sm:grid-cols-2">
              {veri.oneCikanlar.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-4"
                >
                  <p className="text-sm font-semibold text-blue-700">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xl font-bold text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {veri.sermayeBilgileri && veri.sermayeBilgileri.length > 0 && (
          <Section title="Sermaye yapısı ve halka arz büyüklüğü">
            <div className="grid gap-4 sm:grid-cols-2">
              {veri.sermayeBilgileri.map((item) => (
                <BilgiKarti key={item.label} {...item} />
              ))}
            </div>
          </Section>
        )}

        <Section title="Halka arz şekli ve satış yöntemi">
          <div className="grid gap-3">
            {veri.halkaArzSekli.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
          {veri.satisYontemi && veri.satisYontemi.length > 0 && (
            <div className="mt-5 grid gap-3">
              {veri.satisYontemi.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium leading-6 text-blue-950"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section title="Tahsisat grupları ve katılım notları">
          <div className="grid gap-3 sm:grid-cols-2">
            {veri.tahsisat.length > 0 ? (
              veri.tahsisat.map((item, index) => (
                <div
                  key={`${tahsisatMetni(item)}-${index}`}
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-950"
                >
                  {tahsisatMetni(item)}
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 sm:col-span-2">
                Tahsisat oranları ve lot kırılımı henüz açıklanmadı.
              </div>
            )}
          </div>
          {veri.tahsisatNotlari && veri.tahsisatNotlari.length > 0 && (
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
              {veri.tahsisatNotlari.map((item) => (
                <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section title="Halka arz gelirinin kullanım yerleri">
          <div className="grid gap-3 sm:grid-cols-2">
            {veri.fonKullanim.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-950"
              >
                {item}
              </div>
            ))}
          </div>
          {veri.fonKullanimYorumu && (
            <p className="mt-5 leading-8 text-slate-700">
              {veri.fonKullanimYorumu}
            </p>
          )}
        </Section>

        {veri.finansalVeriler.length > 0 && (
          <Section title="Finansal görünüm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="border border-slate-200 px-4 py-3 font-semibold">
                      Finansal kalem
                    </th>
                    {donemler.map((donem) => (
                      <th
                        key={donem}
                        className="border border-slate-200 px-4 py-3 font-semibold"
                      >
                        {donem}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {veri.finansalVeriler.map((row) => (
                    <tr key={row.kalem} className="text-slate-700">
                      <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-900">
                        {row.kalem}
                      </td>
                      {donemler.map((donem) => (
                        <td
                          key={donem}
                          className="border border-slate-200 px-4 py-3"
                        >
                          {row.donemler[donem] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {veri.finansalYorum && (
              <p className="mt-5 leading-8 text-slate-700">
                {veri.finansalYorum}
              </p>
            )}
          </Section>
        )}

        {veri.sirketHakkinda && (
          <Section title={`${ayarlar.kisaAd} hakkında`}>
            <p className="leading-8 text-slate-700">{veri.sirketHakkinda}</p>
          </Section>
        )}

        {taahhutlar.length > 0 && (
          <Section title="Fiyat istikrarı ve satış taahhütleri">
            <div className="grid gap-4 sm:grid-cols-2">
              {taahhutlar.map((item) => (
                <BilgiKarti key={item.label} {...item} />
              ))}
            </div>
          </Section>
        )}

        {veri.eksikBilgiNotu && (
          <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
            <h2 className="text-xl font-bold text-amber-950">
              Henüz kesinleşmeyen bilgiler
            </h2>
            <p className="mt-3 leading-8 text-amber-950">
              {veri.eksikBilgiNotu}
            </p>
          </section>
        )}

        <section className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7">
          <h2 className="text-xl font-bold text-blue-950">
            Onaylı izahname sayfası
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            {veri.sirketAdi} için güncel halka arz bilgilerini ve sonradan
            açıklanacak talep toplama ayrıntılarını şirketin onaylı izahname
            sayfasından takip edebilirsiniz.
          </p>
          <Link
            href={izahnamePath}
            prefetch={false}
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Onaylı izahname detaylarını incele
          </Link>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 sm:p-7">
          <h2 className="text-lg font-bold text-slate-900">Yasal uyarı</h2>
          <p className="mt-3">
            {veri.yasalUyari ||
              "Bu haber genel bilgilendirme amacıyla hazırlanmıştır ve yatırım tavsiyesi değildir. Yatırım kararı öncesinde onaylı izahname ve güncel KAP açıklamaları incelenmelidir."}
          </p>
        </section>

        <div className="mt-8">
          <AuthorBox />
        </div>
        <HaberAltKisim href={canonicalPath} />
      </article>
    </main>
  );
}

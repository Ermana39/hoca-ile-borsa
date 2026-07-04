import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHisse, type Hisse } from "@/lib/hisseler";
import { getTemettulerBySembol } from "@/lib/temettuler";
import {
  getTemettuGecmisiOlanSembolleri,
  sermayeGecmisiNormalize,
  temettuIstatistikleri,
  temettuMu,
  varyantSec,
  type HamSermayeKaydi,
} from "@/lib/hisse-temettu";

const siteUrl = "https://www.hocaileborsa.com";

export const dynamicParams = true;

export function generateStaticParams() {
  return getTemettuGecmisiOlanSembolleri().map((sembol) => ({ sembol }));
}

function gecmisSatirlari(hisse: Hisse) {
  return sermayeGecmisiNormalize(
    hisse.temettuSermayeGecmisi as HamSermayeKaydi[] | undefined
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sembol: string }>;
}): Promise<Metadata> {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) return {};
  const kod = hisse.kod;
  const title = `${kod} Temettü Geçmişi ve Sermaye Artırımları | ${hisse.sirketAdi}`;
  const description = `${hisse.sirketAdi} (${kod}) temettü ödemeleri, bedelsiz sermaye artırımları ve hisse bölünmeleri: yıllara göre tam geçmiş tablosu, son temettü bilgisi ve sık sorulan sorular.`;
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/hisse/${sembol.toLowerCase()}/temettu`,
    },
  };
}

// Giriş paragrafı: oranYorumla mantığıyla sembole göre deterministik varyant.
// Kalıp içi gerçek veriler (kod, kayıt sayıları, son işlem) şirkete özgüdür.
function girisMetni(
  hisse: Hisse,
  ist: ReturnType<typeof temettuIstatistikleri>
): string {
  const kod = hisse.kod;
  const son = ist.sonIslem
    ? `Kayıtlardaki en güncel işlem, ${ist.sonIslem.yil} tarihli "${ist.sonIslem.tur}" satırıdır.`
    : "";
  const dagilim =
    ist.temettuSayisi > 0
      ? `Bu kayıtların ${ist.temettuSayisi} tanesi temettü (kâr payı) ödemesi, ${ist.sermayeIslemiSayisi} tanesi sermaye artırımı/bölünme türünde işlemdir.`
      : `Kayıtların tamamı sermaye artırımı, bedelsiz pay veya bölünme türünde işlemlerden oluşuyor; listede nakit temettü ödemesi yer almıyor.`;

  const varyantlar = [
    `${hisse.sirketAdi} (${kod}) için kamuya açık kaynaklardan derlenen temettü ve sermaye işlemi geçmişi bu sayfada tek tabloda sunuluyor. Toplam ${ist.toplamKayit} kayıt bulunuyor. ${dagilim} ${son}`,
    `Bu sayfada ${kod} hissesinin geçmiş temettü ödemeleri ile sermaye artırımı ve bölünme işlemlerinin dökümünü bulabilirsiniz. Listede toplam ${ist.toplamKayit} işlem yer alıyor. ${dagilim} ${son}`,
    `${kod} temettü geçmişini merak eden yatırımcılar için ${hisse.sirketAdi} şirketinin kâr payı ve sermaye işlemlerini kronolojik olarak derledik. Tabloda ${ist.toplamKayit} kayıt listeleniyor. ${dagilim} ${son}`,
    `${hisse.sirketAdi} hissesinde (${kod}) bugüne kadar gerçekleşen temettü ödemeleri, bedelsiz sermaye artırımları ve pay bölünmeleri aşağıdaki tabloda toplu hâlde görülebilir. Toplam kayıt sayısı: ${ist.toplamKayit}. ${dagilim} ${son}`,
    `Aşağıdaki tablo, ${kod} kodlu ${hisse.sirketAdi} payları için geçmiş dönem temettü ve sermaye hareketlerini bir araya getiriyor. ${ist.toplamKayit} işlem kaydı bulunuyor. ${dagilim} ${son}`,
  ];
  return varyantSec(kod, "temettu-giris", varyantlar).trim();
}

export default async function HisseTemettuPage({
  params,
}: {
  params: Promise<{ sembol: string }>;
}) {
  const { sembol } = await params;
  const hisse = getHisse(sembol);
  if (!hisse) notFound();

  const satirlar = gecmisSatirlari(hisse);
  if (satirlar.length === 0) notFound();

  const ist = temettuIstatistikleri(satirlar);
  const kod = hisse.kod;
  const url = `${siteUrl}/hisse/${sembol.toLowerCase()}/temettu`;
  const giris = girisMetni(hisse, ist);
  const yaklasanlar = getTemettulerBySembol(kod);

  const faqItems = [
    {
      soru: `${kod} temettü veriyor mu?`,
      cevap:
        ist.temettuSayisi > 0
          ? `Geçmiş kayıtlara göre ${hisse.sirketAdi} (${kod}) bugüne kadar ${ist.temettuSayisi} kez temettü (kâr payı) işlemi gerçekleştirdi. Gelecek dönem temettü kararları şirketin genel kurul ve KAP duyurularıyla netleşir.`
          : `Bu sayfadaki kayıtlarda ${kod} için nakit temettü ödemesi görünmüyor; geçmiş işlemler sermaye artırımı/bölünme türündedir. Şirketin gelecekte temettü dağıtıp dağıtmayacağı genel kurul kararlarına bağlıdır.`,
    },
    {
      soru: `${kod} en son ne zaman temettü ya da sermaye işlemi yaptı?`,
      cevap: ist.sonIslem
        ? `Kayıtlardaki en güncel işlem ${ist.sonIslem.yil} tarihlidir: ${ist.sonIslem.tur}${ist.sonIslem.tutarOran ? ` (${ist.sonIslem.tutarOran})` : ""}.`
        : "Kayıtlarda tarihli işlem bulunmuyor.",
    },
    {
      soru: `${kod} hissesinde kaç kez sermaye artırımı veya bölünme oldu?`,
      cevap: `Tablodaki kayıtlara göre ${kod} hissesinde ${ist.sermayeIslemiSayisi} adet sermaye artırımı, bedelsiz pay veya bölünme türünde işlem bulunuyor.`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${kod} Temettü Geçmişi ve Sermaye Artırımları`,
      description: `${hisse.sirketAdi} (${kod}) temettü ödemeleri ve sermaye işlemleri geçmişi.`,
      url,
      mainEntityOfPage: url,
      author: {
        "@type": "Person",
        "@id": `${siteUrl}/yazar/erman-hoca#person`,
        name: "Erman Hoca",
        url: `${siteUrl}/yazar/erman-hoca`,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hoca İle Borsa",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
        },
      },
      about: {
        "@type": "Organization",
        name: hisse.sirketAdi,
        tickerSymbol: kod,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: { "@type": "Answer", text: item.cevap },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/hisseler"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Hisseler
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href={`/hisse/${sembol.toLowerCase()}`}
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            {kod}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700">Temettü</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
            {kod} Temettü Geçmişi ve Sermaye Artırımları
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            {giris}
          </p>
        </header>

        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { etiket: "Toplam Kayıt", deger: String(ist.toplamKayit) },
            { etiket: "Temettü İşlemi", deger: String(ist.temettuSayisi) },
            {
              etiket: "Sermaye / Bölünme",
              deger: String(ist.sermayeIslemiSayisi),
            },
            {
              etiket: "Son İşlem",
              deger: ist.sonIslem ? ist.sonIslem.yil : "—",
            },
          ].map((k) => (
            <div
              key={k.etiket}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-lg font-bold text-blue-700 md:text-xl">
                {k.deger}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 md:text-sm">
                {k.etiket}
              </p>
            </div>
          ))}
        </section>

        {yaklasanlar.length > 0 && (
          <section className="mb-8 overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <div className="border-b border-emerald-200 bg-emerald-50 px-5 py-4">
              <h2 className="text-lg font-bold text-emerald-900 md:text-xl">
                Açıklanan Temettü Takvimi
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[560px] w-full border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-600">
                    <th className="px-4 py-3 font-semibold">Tarih</th>
                    <th className="px-4 py-3 font-semibold">Brüt</th>
                    <th className="px-4 py-3 font-semibold">Net</th>
                    <th className="px-4 py-3 font-semibold">Verim</th>
                  </tr>
                </thead>
                <tbody>
                  {yaklasanlar.map((t, i) => (
                    <tr
                      key={`${t.isoTarih}-${i}`}
                      className={i % 2 ? "bg-slate-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {t.tarih}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{t.brut}</td>
                      <td className="px-4 py-3 text-slate-700">{t.net}</td>
                      <td className="px-4 py-3 text-slate-700">{t.verim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-100 px-5 py-4">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              Geçmiş Temettü ve Sermaye İşlemleri
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Tarih</th>
                  <th className="px-4 py-3 font-semibold">İşlem</th>
                  <th className="px-4 py-3 font-semibold">Tutar / Oran</th>
                  <th className="px-4 py-3 font-semibold">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                {satirlar.map((s, i) => (
                  <tr
                    key={`${s.yil}-${s.tur}-${i}`}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {s.yil || "—"}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <span
                        className={`inline-flex rounded-md px-2 py-0.5 text-xs font-semibold ${
                          temettuMu(s)
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {s.tur || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {s.tutarOran || "—"}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {s.aciklama || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="mb-2 text-sm font-semibold text-zinc-900 md:text-base">
            {kod} ile ilgili diğer sayfalar:
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/hisse/${sembol.toLowerCase()}`}
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
            >
              {kod} Hisse Profili <span aria-hidden>→</span>
            </Link>
            <Link
              href="/temettu"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
            >
              Temettü Takvimi <span aria-hidden>→</span>
            </Link>
            <Link
              href="/temettu/temettu-egitimi"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
            >
              Temettü Eğitimi <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.soru}>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.soru}
                </h3>
                <p className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                  {item.cevap}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-500 md:text-sm">
          {hisse.yasalUyari ||
            "Bu sayfadaki bilgiler kamuya açık kaynaklardan derlenmiş olup bilgilendirme amaçlıdır; yatırım tavsiyesi değildir. Güncel ve kesin bilgiler için şirketin KAP duyurularını takip ediniz."}
        </p>
      </div>
    </main>
  );
}

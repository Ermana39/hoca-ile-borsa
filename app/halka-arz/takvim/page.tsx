import type { Metadata } from "next";
import Link from "next/link";
import {
  bekleyenDeger,
  getOnayliIzahnameListesi,
  getTaslakIzahnameListesi,
  halkaArzGetir,
  tumJsonSluglar,
} from "@/lib/halka-arz";
import { halkaArzSonuclari } from "@/data/halka-arz-sonuclari";

const canonical = "https://www.hocaileborsa.com/halka-arz/takvim";
const title = "Halka Arz Takvimi 2026 | Yaklaşan, Onaylı ve Beklenen Halka Arzlar";
const description =
  "Güncel halka arz takvimi: talep toplama tarihi açıklanan halka arzlar, SPK onaylı izahnameler, taslak aşamasındaki şirketler ve 2026'da işlem görmeye başlayan arzlar tek sayfada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  keywords: [
    "halka arz takvimi",
    "halka arz takvimi 2026",
    "yaklaşan halka arzlar",
    "yeni halka arzlar",
    "halka arz ne zaman",
  ],
  openGraph: { title, description, url: canonical, type: "website" },
};

type TarihliArz = {
  slug: string;
  href: string;
  sirketAdi: string;
  tarih: string;
  fiyat: string;
  dagitim: string;
  pazar: string;
};

// Tarihi (talep toplama) açıklanmış tüm arzları taslak+onaylı JSON'lardan toplar.
function tarihliArzlar(): TarihliArz[] {
  return tumJsonSluglar()
    .map((slug) => {
      const veri = halkaArzGetir(slug);
      if (!veri || bekleyenDeger(veri.ozet.halkaArzTarihi)) return null;
      const onayli = veri.seo?.contentStatus === "onayli";
      return {
        slug,
        href: onayli
          ? `/halka-arz/onayli-izahnameler/${slug}`
          : `/halka-arz/taslak-izahnameler/${slug}`,
        sirketAdi: veri.sirketAdi,
        tarih: veri.ozet.halkaArzTarihi,
        fiyat: bekleyenDeger(veri.ozet.fiyatAralik) ? "—" : veri.ozet.fiyatAralik,
        dagitim: bekleyenDeger(veri.ozet.dagitimYontemi)
          ? "—"
          : veri.ozet.dagitimYontemi,
        pazar: bekleyenDeger(veri.ozet.pazar) ? "—" : veri.ozet.pazar,
      };
    })
    .filter((x): x is TarihliArz => x !== null);
}

export default function HalkaArzTakvimPage() {
  const tarihliler = tarihliArzlar();
  const onaylilar = getOnayliIzahnameListesi();
  const taslaklar = getTaslakIzahnameListesi();
  const tamamlananlar = halkaArzSonuclari;

  const faqItems = [
    {
      soru: "Şu anda talep toplama tarihi açıklanan halka arz var mı?",
      cevap:
        tarihliler.length > 0
          ? `Evet, şu anda ${tarihliler.length} halka arzın talep toplama tarihi açıklanmış durumda: ${tarihliler
              .map((t) => t.sirketAdi)
              .join(", ")}. Detaylar için takvimdeki ilgili şirket sayfasını inceleyebilirsiniz.`
          : "Şu anda talep toplama tarihi kesinleşmiş bir halka arz bulunmuyor. SPK onayı alan şirketlerin tarihleri netleştikçe bu sayfada yayınlanır.",
    },
    {
      soru: "SPK onayı bekleyen kaç şirket var?",
      cevap: `Taslak izahnamesi yayınlanan ve SPK onayı bekleyen ${taslaklar.length} şirket bulunuyor. Her şirketin taslak izahname özetine bu sayfadaki listeden ulaşabilirsiniz.`,
    },
    {
      soru: "2026 yılında kaç halka arz gerçekleşti?",
      cevap: `2026 yılında bu sayfada takip edilen ${tamamlananlar.length} halka arz tamamlanarak Borsa İstanbul'da işlem görmeye başladı. Katılımcı sayıları ve performansları için tavan serisi takip sayfasına bakabilirsiniz.`,
    },
    {
      soru: "Halka arz tarihleri ne zaman belli olur?",
      cevap:
        "Bir şirketin halka arz (talep toplama) tarihi, SPK'nın izahnameyi onaylamasının ardından şirket ve aracı kurum tarafından duyurulur. Taslak izahname aşamasındaki şirketlerde tarih henüz kesinleşmemiştir; onay ve tarih duyuruları bu takvime eklenir.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: canonical,
      mainEntityOfPage: canonical,
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
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
            Halka Arz Takvimi 2026
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Talep toplama tarihi açıklanan halka arzlar, SPK onaylı
            izahnameler, taslak aşamasında onay bekleyen şirketler ve 2026&apos;da
            işlem görmeye başlayan arzlar bu sayfada bir arada. Takvim, KAP ve
            SPK duyuruları doğrultusunda güncellenir.
          </p>
        </header>

        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { etiket: "Tarihi Açıklanan", deger: String(tarihliler.length) },
            { etiket: "SPK Onaylı İzahname", deger: String(onaylilar.length) },
            { etiket: "Taslak / Onay Bekleyen", deger: String(taslaklar.length) },
            {
              etiket: "2026'da Tamamlanan",
              deger: String(tamamlananlar.length),
            },
          ].map((k) => (
            <div
              key={k.etiket}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-blue-700 md:text-2xl">
                {k.deger}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 md:text-sm">
                {k.etiket}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-emerald-50 px-5 py-4">
            <h2 className="text-lg font-bold text-emerald-900 md:text-xl">
              Talep Toplama Tarihi Açıklananlar
            </h2>
          </div>
          {tarihliler.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-600">
                    <th className="px-4 py-3 font-semibold">Şirket</th>
                    <th className="px-4 py-3 font-semibold">Talep Toplama</th>
                    <th className="px-4 py-3 font-semibold">Fiyat</th>
                    <th className="px-4 py-3 font-semibold">Dağıtım</th>
                    <th className="px-4 py-3 font-semibold">Pazar</th>
                  </tr>
                </thead>
                <tbody>
                  {tarihliler.map((t, i) => (
                    <tr key={t.slug} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        <Link
                          href={t.href}
                          prefetch={false}
                          className="hover:text-blue-600"
                        >
                          {t.sirketAdi}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{t.tarih}</td>
                      <td className="px-4 py-3 text-slate-700">{t.fiyat}</td>
                      <td className="px-4 py-3 text-slate-700">{t.dagitim}</td>
                      <td className="px-4 py-3 text-slate-700">{t.pazar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="px-5 py-6 text-sm text-slate-600">
              Şu anda talep toplama tarihi kesinleşmiş bir halka arz
              bulunmuyor. Tarihler netleştikçe bu tabloya eklenir.
            </p>
          )}
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-blue-50 px-5 py-4">
            <h2 className="text-lg font-bold text-blue-900 md:text-xl">
              SPK Onaylı İzahnameler
            </h2>
            <Link
              href="/halka-arz/onayli-izahnameler"
              prefetch={false}
              className="text-xs font-semibold text-blue-700 hover:underline md:text-sm"
            >
              Tüm onaylı izahnameler →
            </Link>
          </div>
          <div className="grid gap-2 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {onaylilar.map((o) => (
              <Link
                key={o.klasor}
                href={`/halka-arz/onayli-izahnameler/${o.klasor}`}
                prefetch={false}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                {o.kod ? `${o.kod} · ` : ""}
                {o.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-amber-50 px-5 py-4">
            <h2 className="text-lg font-bold text-amber-900 md:text-xl">
              Taslak Aşamasında (SPK Onayı Bekleyen)
            </h2>
            <Link
              href="/halka-arz/taslak-izahnameler"
              prefetch={false}
              className="text-xs font-semibold text-amber-700 hover:underline md:text-sm"
            >
              Tüm taslak izahnameler →
            </Link>
          </div>
          <div className="columns-1 gap-2 p-5 sm:columns-2 lg:columns-3">
            {taslaklar.map((t) => (
              <Link
                key={t.klasor}
                href={`/halka-arz/taslak-izahnameler/${t.klasor}`}
                prefetch={false}
                className="mb-2 block break-inside-avoid rounded-lg px-3 py-1.5 text-sm text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-100 px-5 py-4">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              2026&apos;da İşlem Görmeye Başlayanlar
            </h2>
            <Link
              href="/halka-arz/tavan-serisi"
              prefetch={false}
              className="text-xs font-semibold text-blue-700 hover:underline md:text-sm"
            >
              Katılımcı ve performans tablosu →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[560px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">İşlem Tarihi</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Getiri</th>
                </tr>
              </thead>
              <tbody>
                {tamamlananlar.map((v, i) => (
                  <tr key={v.hisse} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <Link
                        href={`/hisse/${v.hisse.toLowerCase()}`}
                        prefetch={false}
                        className="hover:text-blue-600"
                      >
                        {v.hisse}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{v.islemTarihi}</td>
                    <td className="px-4 py-3 text-slate-700">{v.arzFiyati}</td>
                    <td
                      className={`px-4 py-3 font-bold ${
                        v.marj.startsWith("-")
                          ? "text-red-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {v.marj}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          Bu sayfadaki bilgiler taslak/onaylı izahname duyurularına dayalı
          genel bilgilendirme amaçlıdır; yatırım tavsiyesi değildir. Kesin
          tarih ve koşullar şirketlerin KAP duyuruları ile netleşir.
        </p>
      </div>
    </main>
  );
}

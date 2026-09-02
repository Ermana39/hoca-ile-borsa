import type { Metadata } from "next";
import AdsenseResponsiveUnit from "@/components/AdsenseResponsiveUnit";
import Link from "@/components/NoPrefetchLink";
import { newsItems } from "@/app/data/news";
import {
  fonEtkiOzetleri,
  fonEtkiSonGuncelleme,
} from "./_data/fonEtkiOzetleri";

const siteUrl = "https://www.hocaileborsa.com";
const canonical = `${siteUrl}/fonlar/etki-analizi`;
const izlenenFonlarMetni = "TLY, PHE, DFI, KHA, THF, TMV ve DOH";
const title =
  `Fon Etki Analizi: ${izlenenFonlarMetni} Portföy Etkisi`;
const description =
  `${izlenenFonlarMetni} fonlarının güncel portföy etkisini karşılaştırın. Tahmini fiyat değişimini, yatırımcı hareketini, para akışını ve veri kapsamını inceleyin.`;
const seoDescription =
  `${izlenenFonlarMetni} fonlarının güncel portföy etkisi, tahmini fiyat değişimi, yatırımcı hareketi ve para akışını tek ekranda karşılaştırın.`;
const image = `${siteUrl}/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp`;

export const metadata: Metadata = {
  title,
  description: seoDescription,
  authors: [{ name: "Erman Hoca", url: `${siteUrl}/yazar/erman-hoca` }],
  alternates: { canonical },
  keywords: [
    "fon etki analizi",
    "fon fiyat tahmini",
    "yarınki fon fiyatı",
    "TLY fonu",
    "PHE fonu",
    "DFI fonu",
    "KHA fonu",
    "THF fonu",
    "TMV fonu",
    "DOH fonu",
    "TEFAS fon fiyatı",
  ],
  openGraph: {
    type: "website",
    url: canonical,
    title,
    description,
    images: [{ url: image, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

const faq = [
  {
    question: "Fon etki analizi nedir?",
    answer:
      "Fon etki analizi, portföydeki varlıkların ağırlıkları ile günlük fiyat değişimlerini birleştirerek fonun açıklanacak birim pay fiyatına olası katkıyı tahmin eden hesaplamadır.",
  },
  {
    question: "Fon fiyat tahmini nasıl hesaplanır?",
    answer:
      "Her pay için fon ağırlığı yüzde olarak günlük kapanış değişimiyle çarpılır ve 100'e bölünür. Hisse bazlı etkilerin toplamı, kapsanan portföy için tahmini yüzdesel fon etkisini verir.",
  },
  {
    question: "Tahmini etki ile TEFAS'ta açıklanan getiri neden farklı olabilir?",
    answer:
      "Nakit, borçlanma araçları, vadeli işlemler, yabancı varlıklar, fon giderleri, vergi etkileri ve gün içindeki portföy değişiklikleri hesaplamaya tam yansımayabilir. Bu nedenle sonuç kesin getiri değil, izleme göstergesidir.",
  },
  {
    question: "Veri kapsamı neyi gösterir?",
    answer:
      "Veri kapsamı, hesaplamaya dahil edilen varlıkların fon içindeki toplam ağırlığını gösterir. Kapsam yüzde 100'ün altındaysa kalan bölümün etkisi tahmine dahil değildir.",
  },
];

const sonDegerlendirmeler = newsItems
  .filter(
    (item) => item.href.includes("fonlar-gunluk-kapanis-degerlendirmesi")
  )
  .slice(0, 4);

const karsilastirmaFonlari = fonEtkiOzetleri;

function fmt(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function signedPercent(value: number) {
  if (value > 0) return `+%${fmt(value)}`;
  if (value < 0) return `-%${fmt(Math.abs(value))}`;
  return `%${fmt(value)}`;
}

function effectClass(value: number) {
  if (value > 0) return "text-emerald-700";
  if (value < 0) return "text-red-700";
  return "text-slate-700";
}

function formatNewsDate(value: string | "auto") {
  if (value === "auto") return "Güncel değerlendirme";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Güncel değerlendirme";
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const enYuksekEtki = fonEtkiOzetleri.reduce((best, fon) =>
  fon.toplamEtki > best.toplamEtki ? fon : best
);
const ortalamaKapsam =
  fonEtkiOzetleri.reduce((sum, fon) => sum + fon.toplamFonOrani, 0) /
  fonEtkiOzetleri.length;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: "tr-TR",
      image,
      datePublished: "2026-07-12",
      dateModified: fonEtkiSonGuncelleme.iso,
      author: {
        "@type": "Person",
        "@id": `${siteUrl}/yazar/erman-hoca#person`,
        name: "Erman Hoca",
        url: `${siteUrl}/yazar/erman-hoca`,
      },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntity: { "@id": `${canonical}#fon-listesi` },
    },
    {
      "@type": "Dataset",
      "@id": `${canonical}#dataset`,
      name: `${izlenenFonlarMetni} fon kapanış etki karşılaştırması`,
      description,
      url: canonical,
      inLanguage: "tr-TR",
      dateModified: fonEtkiSonGuncelleme.iso,
      creator: { "@id": `${siteUrl}/#organization` },
      license: `${siteUrl}/kullanim-sartlari`,
      variableMeasured: [
        "Tahmini toplam fon etkisi",
        "Hesaplamaya dahil edilen portföy oranı",
        "Fon kodu",
        "Fon türü",
      ],
      measurementTechnique:
        "Portföy ağırlığı ile günlük kapanış değişiminin çarpılarak hisse bazlı etkilerin toplanması",
    },
    {
      "@type": "ItemList",
      "@id": `${canonical}#fon-listesi`,
      name: "İzlenen fonların günlük portföy etkileri",
      numberOfItems: karsilastirmaFonlari.length,
      itemListElement: karsilastirmaFonlari.map((fon, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${fon.kod} ${fon.fonAdi}`,
        url: `${canonical}/${fon.slug}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${canonical}#sss`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fonlar",
          item: `${siteUrl}/fonlar`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fonların Günlük Portföy Etkisi",
          item: canonical,
        },
      ],
    },
  ],
};

export default function FonEtkiAnaliziPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-6xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/fonlar"
            prefetch={false}
            className="transition hover:text-blue-700"
          >
            Fonlar
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">
            Fonların Günlük Portföy Etkisi
          </span>
        </nav>

        <header className="max-w-4xl">
          <p className="text-sm font-semibold text-blue-700">Günlük karşılaştırma</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-950 md:text-4xl">
            Fonların Günlük Portföy Etkisi
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Fonların son açıklanan portföy dağılımları ile Borsa İstanbul günlük
            kapanış değişimleri birleştirilerek, açıklanacak fon fiyatına tahmini
            etki hesaplanır. Bu merkez sayfa {izlenenFonlarMetni} fonlarını
            aynı yöntemle karşılaştırır. Ayrıntılı sayfalarda hisse bazlı
            katkılar, tarihsel yatırımcı değişimi, fon büyüklüğü ve para akışı
            grafikleri yer alır.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
            <p>
              Hazırlayan:{" "}
              <Link
                href="/yazar/erman-hoca"
                className="font-semibold text-slate-700 hover:text-blue-700 hover:underline"
              >
                Erman Hoca
              </Link>
            </p>
            <p>
              Son güncelleme:{" "}
              <time dateTime={fonEtkiSonGuncelleme.iso} className="font-semibold text-slate-700">
                {fonEtkiSonGuncelleme.label}
              </time>
            </p>
          </div>
        </header>

        <dl className="mt-8 grid border-y border-slate-200 bg-white sm:grid-cols-3">
          <div className="p-5 sm:border-r sm:border-slate-200">
            <dt className="text-xs font-semibold uppercase text-slate-500">İzlenen fon</dt>
            <dd className="mt-2 text-2xl font-bold text-slate-950">
              {karsilastirmaFonlari.length}
            </dd>
            <p className="mt-1 text-xs text-slate-500">
              {karsilastirmaFonlari.length} güncel analiz
            </p>
          </div>
          <div className="border-t border-slate-200 p-5 sm:border-r sm:border-t-0">
            <dt className="text-xs font-semibold uppercase text-slate-500">
              En yüksek tahmini etki
            </dt>
            <dd className="mt-2 text-2xl font-bold text-emerald-700">
              {enYuksekEtki.kod} {signedPercent(enYuksekEtki.toplamEtki)}
            </dd>
          </div>
          <div className="border-t border-slate-200 p-5 sm:border-t-0">
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Ortalama veri kapsamı
            </dt>
            <dd className="mt-2 text-2xl font-bold text-slate-950">
              %{fmt(ortalamaKapsam)}
            </dd>
          </div>
        </dl>

        <section className="mt-10" aria-labelledby="guncel-karsilastirma">
          <div className="max-w-3xl">
            <h2 id="guncel-karsilastirma" className="text-xl font-bold text-slate-950 md:text-2xl">
              Güncel Portföy Etkisi Karşılaştırması
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
              Pozitif değer, kapsanan portföyün fon fiyatını yukarı; negatif değer
              aşağı çekebileceğini gösterir. Kapsam oranı yükseldikçe hesaplamaya
              dahil edilen portföy bölümü genişler.
            </p>
          </div>

          <div className="mt-5 overflow-x-auto border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Fon</th>
                  <th className="px-4 py-3 text-left font-semibold">Fon türü</th>
                  <th className="px-4 py-3 text-right font-semibold">Tahmini etki</th>
                  <th className="px-4 py-3 text-right font-semibold">Veri kapsamı</th>
                  <th className="px-4 py-3 text-right font-semibold">Detay</th>
                </tr>
              </thead>
              <tbody>
                {karsilastirmaFonlari.map((fon, index) => (
                  <tr
                    key={fon.slug}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50"} transition hover:bg-blue-50/60`}
                  >
                    <td className="border-t border-slate-200 px-4 py-4">
                      <Link
                        href={`/fonlar/etki-analizi/${fon.slug}`}
                        prefetch={false}
                        aria-label={`${fon.kod} fon sayfasını aç`}
                        className="inline-flex min-w-16 items-center justify-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-extrabold text-blue-800 shadow-sm transition hover:border-blue-600 hover:bg-blue-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                      >
                        {fon.kod}
                        <span aria-hidden="true">→</span>
                      </Link>
                      <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">
                        {fon.fonAdi}
                      </p>
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-slate-600">
                      {fon.fonTuru}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-right text-base font-bold">
                      <span className={effectClass(fon.toplamEtki)}>
                        {signedPercent(fon.toplamEtki)}
                      </span>
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-right font-semibold text-slate-700">
                      %{fmt(fon.toplamFonOrani)}
                      {fon.kaldiracli ? (
                        <span className="ml-1 text-xs font-medium text-amber-700">
                          brüt
                        </span>
                      ) : null}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-right">
                      <Link
                        href={`/fonlar/etki-analizi/${fon.slug}`}
                        prefetch={false}
                        className="inline-flex items-center justify-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 shadow-sm transition hover:border-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                      >
                        İncele
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500 md:text-sm">
            Karşılaştırma {fonEtkiSonGuncelleme.label}{" "}kapanış verilerini temel alır.
            Sonuçlar kesin fon getirisi değildir.
          </p>

          <AdsenseResponsiveUnit
            className="mt-6"
            slot={
              process.env.NEXT_PUBLIC_ADSENSE_FUND_EFFECT_TABLE_SLOT ??
              "6755240879"
            }
          />
        </section>

        <section className="mt-12 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-slate-950 md:text-2xl">
              Fon Fiyat Tahmini Nasıl Hesaplanır?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Önce her varlığın son açıklanan portföy ağırlığı belirlenir. Bu
              ağırlık, aynı varlığın önceki kapanışa göre günlük yüzdesel
              değişimiyle çarpılır. Bütün varlıkların katkıları toplandığında
              kapsanan portföy için tahmini fon etkisi elde edilir.
            </p>
            <div className="mt-5 border-l-4 border-blue-600 bg-blue-50 px-5 py-4 text-sm leading-7 text-blue-950">
              <p className="font-bold">Hisse etkisi = Fon ağırlığı × Günlük değişim / 100</p>
              <p className="mt-1">
                Örnek: Portföyde %10 ağırlığı olan bir hisse günü %3 yükselişle
                kapatırsa tahmini katkısı +%0,30 olur.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950 md:text-2xl">
              Sonuç Nasıl Okunmalı?
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              <li>
                <strong className="text-slate-900">Tahmini etki:</strong> Hesaba
                katılan varlıkların fon fiyatına toplam olası katkısıdır.
              </li>
              <li>
                <strong className="text-slate-900">Veri kapsamı:</strong> Sonucun
                fon portföyünün ne kadarını temsil ettiğini gösterir.
              </li>
              <li>
                <strong className="text-slate-900">Hisse bazlı etki:</strong> Fonun
                hangi varlıktan ne kadar destek veya baskı aldığını açıklar.
              </li>
              <li>
                <strong className="text-slate-900">Para akışı:</strong> Fiyat
                hareketinden ayrı olarak yatırımcı giriş ve çıkışını yorumlamaya
                yardımcı olur.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 border-y border-amber-200 bg-amber-50 px-5 py-7 md:px-7">
          <h2 className="text-lg font-bold text-amber-950 md:text-xl">
            Tahminin Sınırları
          </h2>
          <p className="mt-3 text-sm leading-7 text-amber-950 md:text-base">
            Nakit pozisyon, repo ve borçlanma araçları, vadeli işlem sözleşmeleri,
            yabancı varlıkların kapanış saatleri, fon giderleri, vergi etkileri ve
            gün içinde değişen portföy ağırlıkları gerçek fon fiyatında farklılık
            oluşturabilir. Bu nedenle etki analizi yatırım kararı veya getiri
            garantisi değil, açıklanacak fiyat öncesinde kullanılan tahmini bir
            takip göstergesidir.
          </p>
        </section>

        {sonDegerlendirmeler.length > 0 ? (
          <section className="mt-12" aria-labelledby="son-degerlendirmeler">
            <h2 id="son-degerlendirmeler" className="text-xl font-bold text-slate-950 md:text-2xl">
              Son Fon Kapanış Değerlendirmeleri
            </h2>
            <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {sonDegerlendirmeler.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-semibold text-slate-900 transition group-hover:text-blue-700">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-xs text-slate-500">
                    {formatNewsDate(item.publishedAt)} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-slate-950 md:text-2xl">Veri Kaynakları</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Hesaplamada kamuya açıklanan fon bilgileri, portföy dağılımları ve
              piyasa kapanış verileri esas alınır. Kesin ve bağlayıcı değer için
              fonun resmî fiyat açıklaması kontrol edilmelidir.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.tefas.gov.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                TEFAS →
              </a>
              <a
                href="https://www.kap.org.tr/tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                KAP →
              </a>
              <a
                href="https://www.borsaistanbul.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                Borsa İstanbul →
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950 md:text-2xl">İlgili Fon Sayfaları</h2>
            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <li>
                <Link href="/fonlar/getiri" className="font-semibold text-blue-700 hover:underline">
                  Fon Getiri Analizi →
                </Link>
              </li>
              <li>
                <Link
                  href="/fonlar/tarihsel-veriler"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Fon Tarihsel Verileri →
                </Link>
              </li>
              <li>
                <Link
                  href="/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Fonların En Çok Tercih Ettiği Hisseler →
                </Link>
              </li>
              <li>
                <Link href="/fonlar" className="font-semibold text-blue-700 hover:underline">
                  Tüm Fon Araçları →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="sss" className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-bold text-slate-950 md:text-2xl">Sık Sorulan Sorular</h2>
          <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
            {faq.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-10 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500 md:text-sm">
          Bu içerik genel bilgilendirme amacı taşır ve yatırım danışmanlığı
          kapsamında değildir. Fon fiyatları ve portföy dağılımları için resmî
          kaynaklardaki güncel verileri esas alınız.
        </p>
      </div>
    </main>
  );
}

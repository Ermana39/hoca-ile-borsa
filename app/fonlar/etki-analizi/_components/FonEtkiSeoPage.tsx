import Link from "next/link";
import FonEtkiTable, { type FonEtkiRow } from "./FonEtkiTable";

const siteUrl = "https://www.hocaileborsa.com";

export type FonEtkiSeoPageProps = {
  kod: string;
  fonAdi: string;
  fonTuru: string;
  slug: string;
  rows: FonEtkiRow[];
  toplamFonOrani: number;
  toplamEtki: number;
  sonGuncelleme: string;
};

function fmt(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function signedPercent(value: number, digits = 2) {
  const formatted = fmt(Math.abs(value), digits);
  if (value > 0) return `+%${formatted}`;
  if (value < 0) return `-%${formatted}`;
  return `%${formatted}`;
}

function getMostPositive(rows: FonEtkiRow[]) {
  return rows.reduce((best, row) => (row.etki > best.etki ? row : best), rows[0]);
}

function getMostNegative(rows: FonEtkiRow[]) {
  return rows.reduce((worst, row) => (row.etki < worst.etki ? row : worst), rows[0]);
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function buildJsonLd({
  kod,
  fonAdi,
  slug,
  rows,
  toplamEtki,
  sonGuncelleme,
}: FonEtkiSeoPageProps) {
  const pageUrl = `${siteUrl}/fonlar/etki-analizi/${slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Fonlar",
            item: `${siteUrl}/fonlar`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fon Kapanış Etki Analizi",
            item: `${siteUrl}/fonlar/etki-analizi`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${kod} Fon Etki Analizi`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        name: `${kod} fonu kapanış etki analizi`,
        description: `${fonAdi} portföyündeki hisselerin günlük kapanış marjlarına göre fonun ertesi gün açıklanacak fiyatına tahmini etkisi.`,
        url: pageUrl,
        inLanguage: "tr-TR",
        dateModified: sonGuncelleme,
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        variableMeasured: [
          "Fon oranı",
          "Kapanış marjı",
          "Hisse bazlı etki",
          "Toplam tahmini fon etkisi",
        ],
        measurementTechnique: "Fon oranı ile günlük kapanış marjının çarpılması",
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#etki-listesi`,
        name: `${kod} portföy hisse etki listesi`,
        itemListElement: rows.map((row, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: row.sembol,
          url: `${siteUrl}/hisse/${row.sembol.toLowerCase()}`,
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Fon oranı",
              value: row.fonOrani,
              unitText: "%",
            },
            {
              "@type": "PropertyValue",
              name: "Kapanış marjı",
              value: row.kapanisMarji,
              unitText: "%",
            },
            {
              "@type": "PropertyValue",
              name: "Etki",
              value: row.etki,
            },
          ],
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `${kod} fonu için tahmini kapanış etkisi nedir?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${kod} fonu için bu sayfada hesaplanan toplam tahmini kapanış etkisi ${signedPercent(toplamEtki)} seviyesindedir.`,
            },
          },
          {
            "@type": "Question",
            name: "Fon kapanış etki analizi nasıl hesaplanır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Her hissenin fon içindeki ağırlığı, aynı hissenin günlük kapanış marjı ile çarpılır. Hisse bazlı etkiler toplanarak fonun ertesi gün açıklanacak fiyatına tahmini etki bulunur.",
            },
          },
          {
            "@type": "Question",
            name: "Bu hesaplama kesin fon getirisi midir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hayır. Hesaplama tahmini bir göstergedir. Nakit pozisyon, vadeli işlem pozisyonları, fon giderleri ve portföy ağırlıklarındaki değişimler nedeniyle gerçek fon getirisi farklı olabilir.",
            },
          },
        ],
      },
    ],
  };
}

export default function FonEtkiSeoPage(props: FonEtkiSeoPageProps) {
  const {
    kod,
    fonAdi,
    fonTuru,
    slug,
    rows,
    toplamFonOrani,
    toplamEtki,
    sonGuncelleme,
  } = props;
  const mostPositive = getMostPositive(rows);
  const mostNegative = getMostNegative(rows);
  const pageUrl = `/fonlar/etki-analizi/${slug}`;

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(buildJsonLd(props)) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/fonlar" prefetch={false} className="transition hover:text-blue-600">
            Fonlar
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/fonlar/etki-analizi" prefetch={false} className="transition hover:text-blue-600">
            Fon Kapanış Etki Analizi
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">{kod}</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
          {kod} Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini
        </h1>

        <p className="mb-5 max-w-3xl text-base leading-7 text-slate-600">
          {kod} ({fonAdi}) portföyünde yer alan hisselerin son açıklanan fon
          dağılımındaki ağırlıkları ile günlük kapanış marjları kullanılarak,
          fonun ertesi gün TEFAS&apos;ta ilan edilecek fiyatına olan tahmini
          katkısı hesaplanmıştır.
        </p>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-col gap-1 border-b border-slate-100 pb-4">
            <p className="text-sm font-medium text-slate-500">Güncel özet</p>
            <p className="text-3xl font-bold text-slate-950">
              {signedPercent(toplamEtki)}
            </p>
            <p className="text-sm leading-6 text-slate-600">
              {kod} fonunun ertesi gün açıklanacak fiyatına tahmini toplam
              kapanış etkisi.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                En güçlü pozitif etki
              </dt>
              <dd className="mt-2 text-lg font-bold text-green-700">
                {mostPositive.sembol} {signedPercent(mostPositive.etki, 4)}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                En güçlü negatif etki
              </dt>
              <dd className="mt-2 text-lg font-bold text-red-700">
                {mostNegative.sembol} {signedPercent(mostNegative.etki, 4)}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Veri kapsamı
              </dt>
              <dd className="mt-2 text-lg font-bold text-slate-900">
                %{fmt(toplamFonOrani)}
              </dd>
            </div>
          </dl>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Son güncelleme: {sonGuncelleme}. Veri yorumu; fon portföy ağırlıkları,
            BIST kapanış marjları ve TEFAS&apos;ta açıklanacak fon fiyatı
            ilişkisi dikkate alınarak hazırlanır.
          </p>
        </section>

        <FonEtkiTable rows={rows} toplamFonOrani={toplamFonOrani} toplamEtki={toplamEtki} />

        <section className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            {kod} Fon Etki Analizi Nasıl Hesaplanır?
          </h2>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            {kod} fonunun günlük fiyat değişimini önceden tahmin edebilmek için,
            fonun portföyünde bulunan her hissenin fon içindeki ağırlığı ile o
            hissenin gün içindeki kapanış marjı çarpılır. Her hisse için elde
            edilen bu etki değerleri toplanarak fonun birim pay değerindeki
            tahmini yüzdesel değişim bulunur.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            <strong>Fon Oranı</strong> sütunu, ilgili hissenin {kod} portföyü
            içindeki yüzdesel ağırlığını gösterir. <strong>Kapanış Marjı</strong>{" "}
            sütunu, hissenin o günkü kapanış fiyatının önceki güne göre yüzde
            değişimini ifade eder. <strong>Etki</strong> sütunu ise bu iki
            değerin çarpımıyla elde edilen, hissenin fonun toplam getirisine
            yaptığı tahmini katkıyı gösterir.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Bu hesaplama, {fonTuru} yatırımcıları için açıklanacak günlük birim
            pay değerine yönelik erken bir gösterge sunar. Gerçek fon fiyatı
            TEFAS tarafından ilan edildiğinde; nakit, türev pozisyonlar, fon
            giderleri ve portföy değişimleri nedeniyle bu tahminden farklı
            oluşabilir.
          </p>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
            Bu sayfadaki hesaplamalar bilgilendirme amaçlıdır, yatırım tavsiyesi
            değildir. Yatırım kararı vermeden önce fon izahnamesi, TEFAS verileri
            ve kişisel risk profiliniz dikkate alınmalıdır.
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            {kod} Fonu Hakkında Sık Sorulan Sorular
          </h2>

          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-600 md:text-base">
            <div>
              <h3 className="font-bold text-slate-900">
                {kod} fonu için tahmini kapanış etkisi nedir?
              </h3>
              <p>
                Bu sayfadaki güncel hesaplamaya göre {kod} fonunun ertesi gün
                açıklanacak fiyatına tahmini toplam etki {signedPercent(toplamEtki)}{" "}
                seviyesindedir.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                {kod} fonunu en çok hangi hisse etkiledi?
              </h3>
              <p>
                Pozitif tarafta {mostPositive.sembol} hissesi {signedPercent(mostPositive.etki, 4)}{" "}
                etkiyle öne çıkarken, negatif tarafta {mostNegative.sembol} hissesi{" "}
                {signedPercent(mostNegative.etki, 4)} etkiyle fon performansını
                aşağı çeken ana kalem olmuştur.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Bu hesaplama kesin fon getirisi midir?
              </h3>
              <p>
                Hayır. Bu çalışma portföydeki hisselerin kapanış marjlarına göre
                tahmini etkiyi gösterir. Fonun gerçek günlük getirisi, portföydeki
                güncel ağırlıklar ve hisse dışı varlıklar nedeniyle farklılaşabilir.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                {kod} fonu etki analizi ne zaman kullanılmalı?
              </h3>
              <p>
                BIST kapanışı sonrası ve TEFAS fon fiyatı ilan edilmeden önce,
                fonun ertesi günkü fiyat hareketi hakkında ön fikir almak için
                kullanılabilir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            İlgili Fon Sayfaları
          </h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/fonlar/getiri" className="rounded-xl bg-slate-100 px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
              Fon getiri analizi
            </Link>
            <Link href="/fonlar/tarihsel-veriler" className="rounded-xl bg-slate-100 px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
              Fon tarihsel veriler
            </Link>
            <Link href="/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler" className="rounded-xl bg-slate-100 px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
              Fonların tercih ettiği hisseler
            </Link>
            <Link href={pageUrl} className="rounded-xl bg-blue-50 px-4 py-2 text-blue-700">
              {kod} fon fiyat tahmini
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

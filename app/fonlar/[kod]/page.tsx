import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import {
  DetailHistoryTable,
  FonBreadcrumb,
  FundPeriodGrid,
  FundReturnGrid,
  MetricCard,
} from "../_components/FonUi";
import FundChartsClient from "../_components/FundChartsClient";
import RiskReturnAnalysis from "../_components/RiskReturnAnalysis";
import {
  formatCompactTL,
  formatDecimal,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import {
  getAllFundSlugs,
  getFundDetail,
  type Fund,
} from "@/lib/fon-platform";
import {
  etkiAnaliziFonKodlari,
  getFundInvestorInfo,
  katilimUygunluguEtiketi,
  nitelikliYatirimciEtiketi,
  type FundInvestorInfo,
} from "@/lib/fon-investor-info";
import { seoAciklamasi } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return getAllFundSlugs().map((kod) => ({ kod }));
}

function fonAramaAciklamasi(fund: Fund, info: FundInvestorInfo) {
  const nitelikliBilgisi =
    info.nitelikliYatirimci === true
      ? "Yalnız nitelikli yatırımcılara açıktır."
      : info.nitelikliYatirimci === false
        ? "Nitelikli yatırımcı şartı yoktur."
        : "Yatırımcı koşulu için resmi sınıflandırma bekleniyor.";
  const stopajBilgisi = info.vergilendirme.stopajOrani
    ? `Stopaj: ${info.vergilendirme.stopajOrani}.`
    : "Stopaj oranı alış tarihi ve fon sınıfına göre kontrol edilmelidir.";

  return seoAciklamasi(
    `${fund.kod} fonunun getirisi, risk değeri, büyüklüğü ve yöneticisini inceleyin. ${nitelikliBilgisi} ${stopajBilgisi}`,
    "",
    158
  );
}

type FundFaqItem = {
  question: string;
  answer: string;
};

function yatirimciFaqItemsOlustur(
  fund: Fund,
  info: FundInvestorInfo
): FundFaqItem[] {
  const items: FundFaqItem[] = [];

  if (info.nitelikliYatirimci !== null) {
    const nitelikliCevabi =
      info.nitelikliYatirimci === true
        ? `Evet, ${fund.kod} fonunda nitelikli yatırımcı şartı vardır. Serbest şemsiye fonların katılma payları yalnızca nitelikli yatırımcılara satılabilir.`
        : `Hayır, ${fund.kod} fonunda nitelikli yatırımcı şartı yoktur. Fonun satın alınabilmesi dağıtım kuruluşunun işlem kanallarına ve alım satım esaslarına bağlıdır.`;

    items.push(
      {
        question: `${fund.kod} Fonu Nitelikli Yatırımcı Fonu mu?`,
        answer: nitelikliCevabi,
      },
      {
        question: `${fund.kod} fonunu herkes alabilir mi?`,
        answer:
          info.nitelikliYatirimci === true
            ? `Hayır, ${fund.kod} fonunu herkes alamaz. Fon yalnızca nitelikli yatırımcı olarak tanımlanan yatırımcılara satılabilir.`
            : info.satisKisitlamasi === "ozel-fon"
              ? `Hayır, ${fund.kod} için nitelikli yatırımcı şartı olmasa da özel fon niteliği nedeniyle paylar önceden belirlenmiş yatırımcılara tahsis edilebilir.`
              : `Evet, ${fund.kod} için nitelikli yatırımcı olma şartı yoktur. Bununla birlikte fonun bankanızda veya yatırım kuruluşunuzda işleme açık olması gerekir.`,
      },
      {
        question: `${fund.kod} fonu nitelikli yatırımcı şartı var mı?`,
        answer: nitelikliCevabi,
      }
    );
  }

  if (info.vergilendirme.durum !== "bilinmiyor") {
    const oran = info.vergilendirme.stopajOrani;
    items.push(
      {
        question: `${fund.kod} fonu vergili mi?`,
        answer: `${fund.kod} fonundan elde edilen kazanç vergi düzenlemesine tabidir. ${info.vergilendirme.aciklama}`,
      },
      {
        question: `${fund.kod} fonunda stopaj var mı?`,
        answer:
          oran === "%0"
            ? `Hayır, Türkiye'de yerleşik gerçek kişiler için ${fund.kod} fon kazancındaki stopaj kesintisi %0 oranındadır.`
            : `Evet, ${fund.kod} fon kazancında koşullara göre stopaj uygulanır. ${info.vergilendirme.aciklama}`,
      },
      {
        question: `${fund.kod} fonu stopaj oranı nedir?`,
        answer: `${fund.kod} fonu için gösterilebilen güncel oran ${oran}. ${info.vergilendirme.aciklama}`,
      }
    );
  }

  if (info.katilimUygunlugu !== "bilinmiyor") {
    items.push({
      question: `${fund.kod} fonu Katılım Endeksi'ne uygun mu?`,
      answer: `Hayır, fonlar hisse senetleri gibi BIST Katılım Endeksi'ne dahil edilmez. ${info.katilimAciklamasi}`,
    });
  }

  return items;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kod: string }>;
}): Promise<Metadata> {
  const { kod } = await params;
  const detail = getFundDetail(kod);

  if (!detail) {
    return {
      title: "Fon Bulunamadı",
      robots: { index: false, follow: true },
    };
  }

  const fund = detail.fund;
  const investorInfo = getFundInvestorInfo(fund);
  const canonical = `https://www.hocaileborsa.com/fonlar/${fund.slug}`;
  const seoTitle = `${fund.kod} Fonu: Getiri, Para Akışı ve Risk Analizi`;
  const seoDescription = fonAramaAciklamasi(fund, investorInfo);

  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${fund.kod} Fonu | ${fund.ad}`,
      description: seoDescription,
      modifiedTime: fund.tarih,
    },
    twitter: {
      card: "summary",
      title: seoTitle,
      description: seoDescription,
    },
  };
}

export default async function FonDetayPage({
  params,
}: {
  params: Promise<{ kod: string }>;
}) {
  const { kod } = await params;
  const detail = getFundDetail(kod);

  if (!detail) notFound();

  const fund = detail.fund;
  const investorInfo = getFundInvestorInfo(fund);
  const canonical = `https://www.hocaileborsa.com/fonlar/${fund.slug}`;
  const seoTitle = `${fund.kod} Fonu: Getiri, Para Akışı ve Risk Analizi`;
  const seoDescription = fonAramaAciklamasi(fund, investorInfo);
  const riskText =
    typeof fund.riskDegeri === "number"
      ? formatNumber(fund.riskDegeri)
      : "henüz açıklanmamıştır";
  const oneMonthReturnText =
    typeof fund.getiriler.birAy === "number"
      ? formatSignedPercent(fund.getiriler.birAy)
      : "bu dönem için henüz yeterli veri yoktur";
  const oneYearReturnText =
    typeof fund.getiriler.birYil === "number"
      ? formatSignedPercent(fund.getiriler.birYil)
      : "bu dönem için henüz yeterli veri yoktur";
  const dailyFlowText =
    typeof fund.paraAkisi.gunluk === "number"
      ? formatSignedTL(fund.paraAkisi.gunluk)
      : "henüz hesaplanabilir bir değer yoktur";
  const dailyReturnTone =
    typeof fund.gunlukGetiri === "number" && Number.isFinite(fund.gunlukGetiri)
      ? valueColorClass(fund.gunlukGetiri)
      : "text-slate-700";
  const faqItems: FundFaqItem[] = [
    {
      question: `${fund.kod} fonu nedir?`,
      answer: `${fund.ad}, ${fund.kategori} kategorisinde yer alan ve ${fund.yonetici} tarafından yönetilen bir yatırım fonudur.`,
    },
    {
      question: `${fund.kod} fonunun risk değeri kaç?`,
      answer:
        typeof fund.riskDegeri === "number"
          ? `${fund.kod} fonunun güncel risk değeri ${riskText} seviyesindedir.`
          : `${fund.kod} fonu için güncel risk değeri henüz açıklanmamıştır.`,
    },
    {
      question: `${fund.kod} fonunun bir aylık getirisi ne kadar?`,
      answer:
        typeof fund.getiriler.birAy === "number"
          ? `${fund.kod} fonunun son bir aylık getirisi ${oneMonthReturnText} seviyesindedir.`
          : `${fund.kod} fonunda bir aylık getiri için henüz yeterli veri bulunmamaktadır.`,
    },
    {
      question: `${fund.kod} fonunu kim yönetiyor?`,
      answer: `${fund.kod} fonu ${fund.yonetici} tarafından yönetilmektedir; bu sayfada güncel fiyat, dönemsel getiri, para akışı ve yatırımcı değişimi birlikte izlenebilir.`,
    },
    ...yatirimciFaqItemsOlustur(fund, investorInfo),
  ];
  const etkiAnaliziVar = etkiAnaliziFonKodlari.has(fund.kod);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: seoTitle,
      description: seoDescription,
      inLanguage: "tr-TR",
      about: {
        "@type": "FinancialProduct",
        name: fund.ad,
        identifier: fund.kod,
        category: fund.kategori,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current={fund.kod} />

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-blue-700">
                Fon verileri, getiri ve para akışı
              </p>
              <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
                {fund.kod} Fonu
              </h1>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
                {fund.ad}
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
                {seoDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                  {fund.kategori}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                  Risk: {formatNumber(fund.riskDegeri)}
                </span>
                <Link
                  href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`}
                  className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 hover:bg-emerald-100"
                >
                  {fund.yonetici}
                </Link>
                {etkiAnaliziVar ? (
                  <Link
                    href={`/fonlar/etki-analizi/${fund.slug}`}
                    className="rounded-full bg-cyan-50 px-3 py-1 font-semibold text-cyan-800 hover:bg-cyan-100"
                  >
                    {fund.kod} Günlük Tahmini ve Etki Analizi
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 lg:mt-1 lg:w-auto lg:min-w-[230px] lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Günlük Değişim
              </p>
              <p className={`mt-2 text-3xl font-bold leading-none md:text-4xl ${dailyReturnTone}`}>
                {formatSignedPercent(fund.gunlukGetiri)}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-600">
                Getiri, akış ve yatırımcı ilgisiyle birlikte izlenir
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Güncel Fiyat" value={`${formatDecimal(fund.fiyat, 6)} TL`} tone="blue" />
          <MetricCard label="Fon Toplam Değeri" value={formatCompactTL(fund.fonToplamDeger)} />
          <MetricCard label="Yatırımcı Sayısı" value={formatNumber(fund.kisiSayisi)} />
          <MetricCard label="Tarihsel Gün" value={formatNumber(fund.tarihselGunSayisi)} />
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4 md:px-6">
            <p className="text-sm font-semibold text-blue-700">Yatırımcı bilgileri</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">
              {fund.kod} Alım Koşulları, Katılım Uygunluğu ve Stopaj
            </h2>
          </div>
          <dl className="grid md:grid-cols-3 md:divide-x md:divide-slate-200">
            <div className="border-b border-slate-200 p-5 md:border-b-0 md:p-6">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Nitelikli yatırımcı şartı
              </dt>
              <dd className="mt-2 text-lg font-bold text-slate-950">
                {nitelikliYatirimciEtiketi(investorInfo.nitelikliYatirimci)}
              </dd>
              <dd className="mt-2 text-sm leading-6 text-slate-600">
                {investorInfo.nitelikliYatirimciAciklamasi}
              </dd>
              <dd className="mt-3 text-xs">
                <a
                  href={investorInfo.siniflandirmaKaynagi.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Kaynak: {investorInfo.siniflandirmaKaynagi.etiket}
                </a>
                <span className="text-slate-300"> · </span>
                <a
                  href="https://spk.gov.tr/kurumlar/fonlar/yatirim-fonlari/menkul-kiymet-yatirim-fonlari/tanitim-rehberi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  SPK satış kuralı
                </a>
              </dd>
            </div>
            <div className="border-b border-slate-200 p-5 md:border-b-0 md:p-6">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Katılım esaslarına uygunluk
              </dt>
              <dd className="mt-2 text-lg font-bold text-slate-950">
                {katilimUygunluguEtiketi(investorInfo.katilimUygunlugu)}
              </dd>
              <dd className="mt-2 text-sm leading-6 text-slate-600">
                {investorInfo.katilimAciklamasi}
              </dd>
              <dd className="mt-3 text-xs">
                <a
                  href="https://spk.gov.tr/kurumlar/fonlar/yatirim-fonlari/menkul-kiymet-yatirim-fonlari/tanitim-rehberi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Kaynak: SPK şemsiye fon tanımları
                </a>
              </dd>
            </div>
            <div className="p-5 md:p-6">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Vergilendirme / stopaj
              </dt>
              <dd className="mt-2 text-lg font-bold text-slate-950">
                {investorInfo.vergilendirme.stopajOrani ?? "Veri bulunamadı"}
              </dd>
              <dd className="mt-2 text-sm leading-6 text-slate-600">
                {investorInfo.vergilendirme.aciklama}
              </dd>
              <dd className="mt-3 text-xs">
                <a
                  href={investorInfo.vergilendirme.kaynak.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Kaynak: {investorInfo.vergilendirme.kaynak.etiket}
                </a>
                <span className="mt-1 block text-slate-500">
                  Bilgi tarihi: {investorInfo.vergilendirme.guncellemeTarihi.split("-").reverse().join(".")}
                </span>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div>
            <h2 className="mb-3 text-lg font-bold text-slate-950">Getiri</h2>
            <FundReturnGrid fund={fund} />
          </div>
          <FundPeriodGrid title="Para Akışı" values={fund.paraAkisi} />
          <FundPeriodGrid
            title="Yatırımcı Değişimi"
            values={fund.yatirimciDegisimi}
            format="number"
          />
        </section>

        <section className="mb-8">
          <FundChartsClient
            initialHistory={detail.sonOtuzIslemGunu}
            historyUrl={`/data/fonlar/history/${fund.slug}.json`}
          />
        </section>

        <section className="mb-8">
          <RiskReturnAnalysis analysis={detail.riskAnalizi} fund={fund} />
        </section>

        <section data-nosnippet="true">
          <h2 className="mb-3 text-xl font-bold text-slate-950">
            Son 30 İşlem Günü
          </h2>
          <DetailHistoryTable rows={detail.sonOtuzIslemGunu} />
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            {fund.kod} Fonu Nedir, Nasıl Değerlendirilir?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                {fund.ad}, {fund.kategori} kategorisinde yer alan ve {fund.yonetici} tarafından
                yönetilen bir yatırım fonudur. Fonun güncel toplam büyüklüğü {formatCompactTL(fund.fonToplamDeger)},
                yatırımcı sayısı {formatNumber(fund.kisiSayisi)} ve risk değeri {riskText} seviyesindedir.
              </p>
              <p>
                {fund.kod} fonunun bir aylık getirisi {oneMonthReturnText}, bir yıllık getirisi
                ise {oneYearReturnText} seviyesindedir. Kısa ve uzun dönem getirilerini birlikte
                incelemek, son performansın daha geniş eğilimle uyumlu olup olmadığını anlamaya
                yardımcı olur.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Fonun günlük net para akışı {dailyFlowText} seviyesindedir. Para akışı ve
                yatırımcı sayısındaki değişim, fona yönelik güncel ilginin yönünü gösterir;
                fiyat hareketi ve dönemsel getirilerle birlikte daha anlamlı okunur.
              </p>
              <p>
                Benzer fonları bulmak için <Link href={`/fonlar/fon-tarayici?kategori=${encodeURIComponent(fund.kategori)}`} className="font-semibold text-blue-700 hover:underline">fon tarayıcıyı</Link>,
                farklı fonları yan yana incelemek için <Link href={`/fonlar/fon-karsilastirma?fonlar=${fund.kod}`} className="font-semibold text-blue-700 hover:underline">fon karşılaştırma aracını</Link> ve
                yönetim şirketinin diğer fonları için <Link href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`} className="font-semibold text-blue-700 hover:underline">{fund.yonetici} analizini</Link> kullanabilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold text-slate-950">
              {fund.kod} Fonu Hakkında Sık Sorulan Sorular
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            Not: Fon verilerini fiyat, getiri, risk seviyesi, vade ve portföy
            tercihiyle birlikte okuyarak farklı dönemlerdeki görünümü daha dengeli
            değerlendirebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

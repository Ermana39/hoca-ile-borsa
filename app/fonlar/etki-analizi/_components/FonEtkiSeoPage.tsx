import Link from "@/components/NoPrefetchLink";
import { getHisseIcerikHedefi } from "@/lib/hisse-icerik-hedefi";
import { getFundDetail, type FundHistoryRow } from "@/lib/fon-platform";
import FundChartsClient from "../../_components/FundChartsClient";
import {
  fonEtkiOzetleri,
  fonEtkiYuzdeMetni,
  type FonTarihselVeri,
} from "../_data/fonEtkiOzetleri";
import FonEtkiTable, { type FonEtkiRow } from "./FonEtkiTable";
import FonEtkiKatkiGrafigi from "./FonEtkiKatkiGrafigi";

const siteUrl = "https://www.hocaileborsa.com";

export type FonEtkiSeoPageProps = {
  kod: string;
  fonAdi: string;
  fonTuru: string;
  profilOzeti: string;
  slug: string;
  rows: FonEtkiRow[];
  toplamFonOrani: number;
  toplamEtki: number;
  kaldiracli: boolean;
  sonGuncelleme: string;
  tarihselVeriler: FonTarihselVeri[];
};

export type DegisimSatiri = {
  dun: number;
  bugun: number;
  degisim: number;
};

export type FonDegisimVerisi = {
  dunTarihi: string;
  bugunTarihi: string;
  yatirimciSayisi: DegisimSatiri;
  fonToplamDeger: DegisimSatiri;
  paraGirisiCikisi: number;
  yorum: string;
};

function guncelTarihselVerilerOlustur(
  kod: string,
  history: FundHistoryRow[]
): FonTarihselVeri[] {
  const tarihselVeriler = history
    .flatMap((row): FonTarihselVeri[] => {
      const { kisiSayisi, fonToplamDeger, paraGirisiCikisi, gunlukGetiri } = row;

      if (
        !row.tarih ||
        typeof kisiSayisi !== "number" ||
        !Number.isFinite(kisiSayisi) ||
        typeof fonToplamDeger !== "number" ||
        !Number.isFinite(fonToplamDeger) ||
        fonToplamDeger <= 0 ||
        typeof paraGirisiCikisi !== "number" ||
        !Number.isFinite(paraGirisiCikisi)
      ) {
        return [];
      }

      return [{
        tarih: row.tarih,
        yatirimciSayisi: kisiSayisi,
        fonToplamDeger,
        paraGirisiCikisi,
        marj:
          typeof gunlukGetiri === "number" && Number.isFinite(gunlukGetiri)
            ? gunlukGetiri * 100
            : null,
      }];
    })
    .sort((a, b) => a.tarih.localeCompare(b.tarih));

  if (tarihselVeriler.length < 2) {
    throw new Error(`${kod}: güncel değişim hesabı için en az iki geçerli fon kaydı gerekli.`);
  }

  return tarihselVeriler;
}

function degisimVerisiOlustur({
  kod,
  rows,
  toplamEtki,
  tarihselVeriler,
}: Pick<
  FonEtkiSeoPageProps,
  "kod" | "rows" | "toplamEtki" | "tarihselVeriler"
>): FonDegisimVerisi {
  const bugun = tarihselVeriler.at(-1);
  const dun = tarihselVeriler.at(-2);

  if (!bugun || !dun) {
    throw new Error(`${kod}: değişim hesabı için en az iki tarihsel kayıt gerekli.`);
  }

  const yatirimciDegisimi = bugun.yatirimciSayisi - dun.yatirimciSayisi;
  const fonDegerDegisimi = bugun.fonToplamDeger - dun.fonToplamDeger;
  const enGucluPozitif = rows
    .filter((row) => row.etki > 0)
    .sort((a, b) => b.etki - a.etki)[0];
  const enGucluNegatif = rows
    .filter((row) => row.etki < 0)
    .sort((a, b) => a.etki - b.etki)[0];
  const pozitifVurgu = enGucluPozitif
    ? `${enGucluPozitif.sembol} katkısı`
    : "pozitif katkı oluşmaması";
  const negatifVurgu = enGucluNegatif
    ? `${enGucluNegatif.sembol} baskısı`
    : "negatif baskı görülmemesi";
  const akim = bugun.paraGirisiCikisi >= 0 ? "net para girişi" : "net para çıkışı";
  const yatirimciYonu =
    yatirimciDegisimi >= 0 ? "yatırımcı sayısı arttı" : "yatırımcı sayısı azaldı";
  const fonDegerYonu =
    fonDegerDegisimi >= 0 ? "fon toplam değeri büyüdü" : "fon toplam değeri geriledi";
  const etkiYonu =
    toplamEtki >= 0 ? "yukarı yönlü" : "aşağı yönlü";

  const ozelYorumlar: Record<string, string> = {
    TLY: `${kod}'de ${akim} görülürken ${yatirimciYonu} ve ${fonDegerYonu}. Portföy hesabının ${etkiYonu} kalmasında ${negatifVurgu} ile ${pozitifVurgu} arasındaki denge belirleyici oldu. Yatırımcı adedi ile fondaki para hareketinin farklı yönlere gidebilmesi, hesap sayısının tek başına fon talebinin büyüklüğünü anlatmadığını gösteriyor.`,
    PHE: `${kod} tarafında ${akim}, ${yatirimciYonu} ve ${fonDegerYonu}. Tahmini etkinin ${etkiYonu} oluşmasında ${negatifVurgu} öne çıkarken ${pozitifVurgu} karşı tarafta belirleyici oldu. Fon ilgisi ve portföy etkisi aynı gün içinde birlikte zayıfladığında takip edilmesi gereken risk daha görünür hale geliyor.`,
    PBR: `${kod}'de ${akim} ile birlikte ${yatirimciYonu}; buna karşılık ${fonDegerYonu}. ${negatifVurgu} fon fiyatını aşağı çeken tarafta öne çıkarken ${pozitifVurgu} dengeleyici tarafta belirleyici oldu. Para akışı, yatırımcı adedi ve fon büyüklüğünün aynı yönde hareket etmemesi, günlük değişimin bileşenlerini ayrı ayrı okumayı gerektiriyor.`,
    DFI: `${kod}'ye ${akim} eşlik ederken ${yatirimciYonu} ve ${fonDegerYonu}. ${pozitifVurgu} yukarı yönlü tarafın, ${negatifVurgu} ise aşağı yönlü tarafın merkezinde yer aldı. Üç ana göstergenin aynı yönde ilerlemesi güçlü bir gün sonu resmi üretse de yoğun portföy yapısı tek hisse hareketlerine duyarlılığı artırıyor.`,
  };

  return {
    dunTarihi: dun.tarih,
    bugunTarihi: bugun.tarih,
    yatirimciSayisi: {
      dun: dun.yatirimciSayisi,
      bugun: bugun.yatirimciSayisi,
      degisim: yatirimciDegisimi,
    },
    fonToplamDeger: {
      dun: dun.fonToplamDeger,
      bugun: bugun.fonToplamDeger,
      degisim: fonDegerDegisimi,
    },
    paraGirisiCikisi: bugun.paraGirisiCikisi,
    yorum: ozelYorumlar[kod] ?? `${kod} için güncel fon verileri karşılaştırıldı.`,
  };
}

function fmt(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function fmtInteger(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value);
}

function fmtCurrency(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function fmtShortDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function signedPercent(value: number, digits = 2) {
  const formatted = fmt(Math.abs(value), digits);
  if (value > 0) return `+%${formatted}`;
  if (value < 0) return `-%${formatted}`;
  return `%${formatted}`;
}

function signedNumber(value: number) {
  if (value > 0) return `+${fmtInteger(value)}`;
  if (value < 0) return `-${fmtInteger(Math.abs(value))}`;
  return fmtInteger(value);
}

function signedCurrency(value: number) {
  if (value > 0) return `+${fmtCurrency(value)}`;
  if (value < 0) return `-${fmtCurrency(Math.abs(value))}`;
  return fmtCurrency(value);
}

function changeRate({ dun, degisim }: DegisimSatiri) {
  if (dun === 0) return 0;
  return (degisim / dun) * 100;
}

function getMostPositive(rows: FonEtkiRow[]) {
  return rows
    .filter((row) => row.etki > 0)
    .sort((a, b) => b.etki - a.etki)[0];
}

function getMostNegative(rows: FonEtkiRow[]) {
  return rows
    .filter((row) => row.etki < 0)
    .sort((a, b) => a.etki - b.etki)[0];
}

function yogunlasmaYorumu(ilkUcAgirligi: number): string {
  if (ilkUcAgirligi >= 70) {
    return "İlk üç varlığın payı yüksek olduğu için günlük sonuç az sayıdaki pozisyonun hareketine daha duyarlıdır.";
  }
  if (ilkUcAgirligi >= 45) {
    return "İlk üç varlık portföy etkisinde belirgin ağırlığa sahiptir; ana pozisyonların günlük hareketi yakından izlenmelidir.";
  }
  return "İlk üç varlığın toplam payı görece dengelidir; günlük etki portföyün daha geniş bölümüne yayılmaktadır.";
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const TR_AYLAR: Record<string, string> = {
  ocak: "01",
  şubat: "02",
  mart: "03",
  nisan: "04",
  mayıs: "05",
  haziran: "06",
  temmuz: "07",
  ağustos: "08",
  eylül: "09",
  ekim: "10",
  kasım: "11",
  aralık: "12",
};

// "18 Haziran 2026" -> "2026-06-18" (ISO 8601). Schema.org tarih alanları ISO
// 8601 bekler; çözümlenemeyen girdi aynen döndürülür.
function toIsoDate(tarih: string): string {
  const parts = tarih.trim().split(/\s+/);
  if (parts.length !== 3) return tarih;
  const [gun, ay, yil] = parts;
  const ayNo = TR_AYLAR[ay.toLocaleLowerCase("tr")];
  if (!ayNo || !/^\d{4}$/.test(yil)) return tarih;
  return `${yil}-${ayNo}-${gun.padStart(2, "0")}`;
}

function buildJsonLd({
  kod,
  fonAdi,
  profilOzeti,
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
        dateModified: toIsoDate(sonGuncelleme),
        license: `${siteUrl}/kullanim-sartlari`,
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        variableMeasured: [
          "Fon oranı",
          "Kapanış marjı",
          "Hisse bazlı etki",
          "Toplam tahmini fon etkisi",
          "Yatırımcı sayısı değişimi",
          "Fon toplam değer değişimi",
          "Fon para girişi çıkışı",
        ],
        measurementTechnique: "Fon oranı ile günlük kapanış marjının çarpılması",
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#etki-listesi`,
        name: `${kod} portföy hisse etki listesi`,
        itemListElement: rows.map((row, index) => {
          const hedef = getHisseIcerikHedefi(row.sembol);
          return {
            "@type": "ListItem",
            position: index + 1,
            name: row.sembol,
            ...(hedef ? { url: `${siteUrl}${hedef.href}` } : {}),
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
          };
        }),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `${kod} fonu nedir?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: profilOzeti,
            },
          },
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
    profilOzeti,
    slug,
    rows,
    toplamFonOrani,
    toplamEtki,
    kaldiracli,
    sonGuncelleme,
  } = props;
  const fonDetayi = getFundDetail(slug);

  if (!fonDetayi) {
    throw new Error(`${kod}: güncel fon detayı bulunamadı.`);
  }

  const guncelTarihselVeriler = guncelTarihselVerilerOlustur(kod, fonDetayi.history);
  const degisimVerisi = degisimVerisiOlustur({
    kod,
    rows,
    toplamEtki,
    tarihselVeriler: guncelTarihselVeriler,
  });
  const mostPositive = getMostPositive(rows);
  const mostNegative = getMostNegative(rows);
  const agirlikSirali = [...rows].sort((a, b) => b.fonOrani - a.fonOrani);
  const enYuksekAgirlikli = agirlikSirali[0];
  const ilkUcAgirligi = agirlikSirali
    .slice(0, 3)
    .reduce((toplam, row) => toplam + row.fonOrani, 0);
  const pozitifVarlikSayisi = rows.filter((row) => row.etki > 0).length;
  const negatifVarlikSayisi = rows.filter((row) => row.etki < 0).length;
  const notrVarlikSayisi = rows.length - pozitifVarlikSayisi - negatifVarlikSayisi;
  const digerFonlar = fonEtkiOzetleri.filter((fon) => fon.slug !== slug);
  const yatirimciDegisimOrani = changeRate(degisimVerisi.yatirimciSayisi);
  const fonDegerDegisimOrani = changeRate(degisimVerisi.fonToplamDeger);
  const yatirimciPozitif = degisimVerisi.yatirimciSayisi.degisim >= 0;
  const fonDegerPozitif = degisimVerisi.fonToplamDeger.degisim >= 0;
  const paraAkisiPozitif = degisimVerisi.paraGirisiCikisi >= 0;

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
            Günlük Portföy Etkisi
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

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h2 className="text-xl font-bold text-slate-900">
            {kod} Fonu Nedir?
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            {profilOzeti}
          </p>
          <dl className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Fon kodu
              </dt>
              <dd className="mt-2 text-lg font-bold text-slate-950">{kod}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 md:col-span-1">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Fon türü
              </dt>
              <dd className="mt-2 text-sm font-bold leading-6 text-slate-950">
                {fonTuru}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Fonun tam adı
              </dt>
              <dd className="mt-2 text-sm font-bold leading-6 text-slate-950">
                {fonAdi}
              </dd>
            </div>
          </dl>
        </section>

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
                {mostPositive
                  ? `${mostPositive.sembol} ${signedPercent(mostPositive.etki, 4)}`
                  : "Pozitif katkı yok"}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                En güçlü negatif etki
              </dt>
              <dd className="mt-2 text-lg font-bold text-red-700">
                {mostNegative
                  ? `${mostNegative.sembol} ${signedPercent(mostNegative.etki, 4)}`
                  : "Negatif katkı yok"}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                {kaldiracli ? "Brüt pozisyon oranı" : "Veri kapsamı"}
              </dt>
              <dd className="mt-2 text-lg font-bold text-slate-900">
                %{fmt(toplamFonOrani)}
              </dd>
            </div>
          </dl>

          {kaldiracli ? (
            <p className="mt-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
              {kod}{" "}fonunda toplam oranın %100&apos;ü aşması kaldıraçlı
              pozisyonlardan kaynaklanan brüt portföy büyüklüğünü gösterir; veri
              hatası değildir. Tahmini etki bu brüt pozisyonlar üzerinden
              hesaplanır.
            </p>
          ) : null}

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Son güncelleme: {sonGuncelleme}. Veri yorumu; fon portföy ağırlıkları,
            BIST kapanış marjları ve TEFAS&apos;ta açıklanacak fon fiyatı
            ilişkisi dikkate alınarak hazırlanır.
          </p>
        </section>

        <FonEtkiKatkiGrafigi kod={kod} rows={rows} />

        <FonEtkiTable rows={rows} toplamFonOrani={toplamFonOrani} toplamEtki={toplamEtki} />

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            {kod} Portföy Dağılımı ve Yoğunlaşma Özeti
          </h2>
          <dl className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                İzlenen varlık
              </dt>
              <dd className="mt-2 text-2xl font-bold text-slate-950">
                {rows.length}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                İlk 3 varlığın ağırlığı
              </dt>
              <dd className="mt-2 text-2xl font-bold text-slate-950">
                %{fmt(ilkUcAgirligi)}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Etki dağılımı
              </dt>
              <dd className="mt-2 text-sm font-bold leading-6 text-slate-950">
                {pozitifVarlikSayisi} pozitif, {negatifVarlikSayisi} negatif,
                {" "}{notrVarlikSayisi} nötr
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            Portföyde en yüksek ağırlık %{fmt(enYuksekAgirlikli.fonOrani)} ile{" "}
            <strong className="text-slate-900">{enYuksekAgirlikli.sembol}</strong>
            {" "}varlığındadır. İlk üç varlığın toplam ağırlığı{" "}
            <strong className="text-slate-900">%{fmt(ilkUcAgirligi)}</strong>
            {" "}seviyesindedir. {yogunlasmaYorumu(ilkUcAgirligi)}
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Fon büyüklüğü, para akışı ve yatırımcı ilgisi
              </p>
              <h2 className="mt-1 text-xl font-bold text-zinc-900 md:text-2xl">
                {kod} Yatırımcı, Fon Toplam Değer ve Para Girişi/Çıkışı
              </h2>
            </div>
            <p className="text-sm text-slate-500">Dün / Bugün karşılaştırması</p>
          </div>

          <dl className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Yatırımcı sayısı değişimi
              </dt>
              <dd
                className={`mt-2 text-2xl font-bold ${
                  yatirimciPozitif ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {signedNumber(degisimVerisi.yatirimciSayisi.degisim)}
              </dd>
              <dd className="mt-1 text-sm text-slate-600">
                {fmtInteger(degisimVerisi.yatirimciSayisi.dun)} kişiden{" "}
                {fmtInteger(degisimVerisi.yatirimciSayisi.bugun)} kişiye,{" "}
                {signedPercent(yatirimciDegisimOrani)} değişim.
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Fon toplam değer değişimi
              </dt>
              <dd
                className={`mt-2 text-2xl font-bold ${
                  fonDegerPozitif ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {signedCurrency(degisimVerisi.fonToplamDeger.degisim)}
              </dd>
              <dd className="mt-1 text-sm text-slate-600">
                {fmtCurrency(degisimVerisi.fonToplamDeger.dun)} seviyesinden{" "}
                {fmtCurrency(degisimVerisi.fonToplamDeger.bugun)} seviyesine,{" "}
                {signedPercent(fonDegerDegisimOrani)} değişim.
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase text-slate-500">
                Para girişi/çıkışı
              </dt>
              <dd
                className={`mt-2 text-2xl font-bold ${
                  paraAkisiPozitif ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {signedCurrency(degisimVerisi.paraGirisiCikisi)}
              </dd>
              <dd className="mt-1 text-sm text-slate-600">
                {paraAkisiPozitif ? "Fona net para girişi" : "Fondan net para çıkışı"}.
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <FundChartsClient history={fonDetayi.history} />
          </div>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Gösterge</th>
                  <th className="px-4 py-3 font-semibold">
                    Dün ({fmtShortDate(degisimVerisi.dunTarihi)})
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Bugün ({fmtShortDate(degisimVerisi.bugunTarihi)})
                  </th>
                  <th className="px-4 py-3 font-semibold">Değişim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Yatırımcı sayısı
                  </th>
                  <td className="px-4 py-3">
                    {fmtInteger(degisimVerisi.yatirimciSayisi.dun)}
                  </td>
                  <td className="px-4 py-3">
                    {fmtInteger(degisimVerisi.yatirimciSayisi.bugun)}
                  </td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      yatirimciPozitif ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {signedNumber(degisimVerisi.yatirimciSayisi.degisim)}
                  </td>
                </tr>
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Fon toplam değer
                  </th>
                  <td className="px-4 py-3">
                    {fmtCurrency(degisimVerisi.fonToplamDeger.dun)}
                  </td>
                  <td className="px-4 py-3">
                    {fmtCurrency(degisimVerisi.fonToplamDeger.bugun)}
                  </td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      fonDegerPozitif ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {signedCurrency(degisimVerisi.fonToplamDeger.degisim)}
                  </td>
                </tr>
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Para girişi/çıkışı
                  </th>
                  <td className="px-4 py-3 text-slate-500" colSpan={2}>
                    Net günlük hareket
                  </td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      paraAkisiPozitif ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {signedCurrency(degisimVerisi.paraGirisiCikisi)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-950 md:text-base">
            <h3 className="font-bold text-blue-950">{kod} değişim yorumu</h3>
            <p className="mt-2">{degisimVerisi.yorum}</p>
          </div>
        </section>

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
                {mostPositive && mostNegative
                  ? `Pozitif tarafta ${mostPositive.sembol} hissesi ${signedPercent(mostPositive.etki, 4)} etkiyle öne çıkarken, negatif tarafta ${mostNegative.sembol} hissesi ${signedPercent(mostNegative.etki, 4)} etkiyle fon performansını aşağı çeken ana kalem olmuştur.`
                  : mostNegative
                    ? `Pozitif katkı oluşmazken, ${mostNegative.sembol} hissesi ${signedPercent(mostNegative.etki, 4)} ile aşağı yönlü etkinin ana kalemi olmuştur.`
                    : mostPositive
                      ? `Negatif katkı oluşmazken, ${mostPositive.sembol} hissesi ${signedPercent(mostPositive.etki, 4)} ile yukarı yönlü etkinin ana kalemi olmuştur.`
                      : "İzlenen pozisyonlarda pozitif veya negatif katkı oluşmamıştır."}
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
            Diğer Fon Etki Analizleri
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {digerFonlar.map((fon) => (
              <Link
                key={fon.slug}
                href={`/fonlar/etki-analizi/${fon.slug}`}
                prefetch={false}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="block text-base font-bold text-slate-950">
                  {fon.kod} fon tahmini
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-500">
                  {fon.fonTuru}
                </span>
                <span className="mt-2 block text-sm font-bold text-blue-700">
                  Güncel etki {fonEtkiYuzdeMetni(fon.toplamEtki)}
                </span>
              </Link>
            ))}
          </div>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-500">
            Fon veri araçları
          </h3>
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/fonlar/getiri" prefetch={false} className="rounded-xl bg-slate-100 px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
              Fon getiri analizi
            </Link>
            <Link href="/fonlar/tarihsel-veriler" prefetch={false} className="rounded-xl bg-slate-100 px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
              Fon tarihsel veriler
            </Link>
            <Link href="/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler" prefetch={false} className="rounded-xl bg-slate-100 px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
              Fonların tercih ettiği hisseler
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

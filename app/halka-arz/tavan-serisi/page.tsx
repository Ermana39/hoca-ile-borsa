import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import {
  halkaArzSonuclari as baseHalkaArzVerileri,
  type HalkaArzSonucu,
} from "@/data/halka-arz-sonuclari";
import {
  getHalkaArzBistKarsilastirmasi,
  getHalkaArzGetirisi,
  puanMetni,
  yuzdeMetni,
} from "@/lib/halka-arz-performans";
import { getHisseIcerikHedefi } from "@/lib/hisse-icerik-hedefi";

const canonical = "https://www.hocaileborsa.com/halka-arz/tavan-serisi";
const title = "2026 Halka Arz Tavan Serisi: Güncel Performans Takibi";
const description =
  "2026 halka arzlarının gerçekleşen tavan serisi ve performans tablosu: arz fiyatı, gün sonu kapanışı, getiri, marj ve BIST 100 karşılaştırması.";

const tavanSerisiKapanisTarihi = "2026-08-28";

type TavanSerisiKaydi = HalkaArzSonucu & {
  kapanisTarihi?: string;
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical,
  },
  keywords: [
    "halka arz tavan serisi",
    "halka arz tavan takibi",
    "2026 halka arz performansı",
    "halka arz marj hesaplama",
    "halka arz gün sonu fiyatı",
    "halka arz BIST 100 karşılaştırması",
  ],
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const guncelHalkaArzKapanislari: Record<string, string> = {
  KPEKS: "136.10",
  TKNKA: "165.90",
  VEYAS: "136.60",
  CITAS: "142.20",
  QUICK: "73.90",
  KARCL: "143.00",
  MASFN: "42.40",
  ALBTN: "35.24",
  METEN: "22.10",
  SARAE: "93.75",
  SSAAT: "37.08",
  ISVEA: "92.00",
  EKIM: "19.97",
  GOLDA: "13.33",
  ORZAX: "98.50",
  SOHOE: "11.79",
  BETAE: "97.60",
  EKDMR: "48.00",
  AAGYO: "12.99",
  MCARD: "168.00",
  LXGYO: "10.89",
  GENKM: "10.57",
  SVGYO: "17.70",
  EMPAE: "70.45",
  ATATR: "15.92",
  BESTE: "32.70",
  AKHAN: "40.40",
  NETCD: "128.70",
  UCAYM: "26.00",
  ZGYO: "29.52",
  FRMPL: "31.30",
  MEYSU: "11.89",
  ARFYE: "21.46",
};

const kpeksHalkaArzVerisi: TavanSerisiKaydi = {
  hisse: "KPEKS",
  islemTarihi: "21.08.2026",
  katilimciSayisi: "518.750",
  dagitimSekli: "BİREYSELE %50",
  arzFiyati: "94.00",
  guncelFiyat: "136.10",
  konsorsiyum: "TSKB, YATIRIM FİNANSMAN, ZİRAAT",
  kapanisTarihi: "2026-08-28",
};

const tknkaHalkaArzVerisi: TavanSerisiKaydi = {
  hisse: "TKNKA",
  islemTarihi: "20.08.2026",
  katilimciSayisi: "493.220",
  dagitimSekli: "BİREYSELE %40",
  arzFiyati: "85.40",
  guncelFiyat: "165.90",
  konsorsiyum: "TERA",
  kapanisTarihi: "2026-08-28",
};

const veyasHalkaArzVerisi: TavanSerisiKaydi = {
  hisse: "VEYAS",
  islemTarihi: "20.08.2026",
  katilimciSayisi: "365.280",
  dagitimSekli: "BİREYSELE %45",
  arzFiyati: "136.00",
  guncelFiyat: "136.60",
  konsorsiyum: "HALK, VAKIF, ZİRAAT",
  kapanisTarihi: "2026-08-28",
};

const citasHalkaArzVerisi = {
  hisse: "CITAS",
  islemTarihi: "18.08.2026",
  katilimciSayisi: "556.728",
  dagitimSekli: "BİREYSELE %40",
  arzFiyati: "73.70",
  guncelFiyat: "142.20",
  konsorsiyum: "TERA",
} as (typeof baseHalkaArzVerileri)[number];

const quickHalkaArzVerisi = {
  hisse: "QUICK",
  islemTarihi: "06.08.2026",
  katilimciSayisi: "961.387",
  dagitimSekli: "BİREYSELE %60",
  arzFiyati: "76.60",
  guncelFiyat: "73.90",
  konsorsiyum: "GARANTİ",
} as (typeof baseHalkaArzVerileri)[number];

const karclHalkaArzVerisi = {
  hisse: "KARCL",
  islemTarihi: "31.07.2026",
  katilimciSayisi: "814.853",
  dagitimSekli: "BİREYSELE %40",
  arzFiyati: "35.00",
  guncelFiyat: "143.00",
  konsorsiyum: "A1 CAPİTAL, VAKIF, ZİRAAT",
} as (typeof baseHalkaArzVerileri)[number];

const masfnHalkaArzVerisi = {
  hisse: "MASFN",
  islemTarihi: "30.07.2026",
  katilimciSayisi: "1.093.898",
  dagitimSekli: "BİREYSELE %80",
  arzFiyati: "45.68",
  guncelFiyat: "42.40",
  konsorsiyum: "DENİZ",
} as (typeof baseHalkaArzVerileri)[number];

const albtnHalkaArzVerisi = {
  hisse: "ALBTN",
  islemTarihi: "29.07.2026",
  katilimciSayisi: "549.211",
  dagitimSekli: "TAMAMEN EŞİT",
  arzFiyati: "38.60",
  guncelFiyat: "35.24",
  konsorsiyum: "TACİRLER",
} as (typeof baseHalkaArzVerileri)[number];

const metenHalkaArzVerisi = {
  hisse: "METEN",
  islemTarihi: "28.07.2026",
  katilimciSayisi: "961.387",
  dagitimSekli: "BİREYSELE %38",
  arzFiyati: "20.00",
  guncelFiyat: "22.10",
  konsorsiyum: "İNFO",
} as (typeof baseHalkaArzVerileri)[number];

const halkaArzKayitlari: TavanSerisiKaydi[] = [
  kpeksHalkaArzVerisi,
  tknkaHalkaArzVerisi,
  veyasHalkaArzVerisi,
  citasHalkaArzVerisi,
  quickHalkaArzVerisi,
  karclHalkaArzVerisi,
  masfnHalkaArzVerisi,
  albtnHalkaArzVerisi,
  metenHalkaArzVerisi,
  ...baseHalkaArzVerileri,
];

const halkaArzVerileri = halkaArzKayitlari.map((item) => {
  const guncelItem = {
    ...item,
    guncelFiyat: guncelHalkaArzKapanislari[item.hisse] ?? item.guncelFiyat,
  };
  const kapanisTarihi =
    guncelItem.kapanisTarihi ?? tavanSerisiKapanisTarihi;
  const hisseGetirisi = getHalkaArzGetirisi(guncelItem) ?? 0;
  return {
    ...guncelItem,
    kapanisTarihi,
    hisseGetirisi,
    marj: yuzdeMetni(hisseGetirisi, 0),
    bistKarsilastirmasi: getHalkaArzBistKarsilastirmasi(
      guncelItem,
      kapanisTarihi
    ),
    detayHedefi: getHisseIcerikHedefi(guncelItem.hisse),
  };
});

function performansRengi(deger?: number) {
  if (deger === undefined) return "bg-slate-100 text-slate-500";
  if (deger < 0) return "bg-rose-100 text-rose-800";
  if (deger > 0) return "bg-emerald-100 text-emerald-800";
  return "bg-slate-100 text-slate-700";
}

function isoTarihMetni(value: string) {
  return new Date(`${value}T12:00:00+03:00`).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const bistKaynak = halkaArzVerileri.find(
  (item) => item.bistKarsilastirmasi
)?.bistKarsilastirmasi;
const pozitifHalkaArzlar = halkaArzVerileri.filter((item) => item.hisseGetirisi >= 0);
const negatifHalkaArzlar = halkaArzVerileri.filter((item) => item.hisseGetirisi < 0);
const enYuksekMarjliHalkaArz = halkaArzVerileri.reduce((onceki, simdiki) =>
  simdiki.hisseGetirisi > onceki.hisseGetirisi ? simdiki : onceki
);
const enDusukMarjliHalkaArz = halkaArzVerileri.reduce((onceki, simdiki) =>
  simdiki.hisseGetirisi < onceki.hisseGetirisi ? simdiki : onceki
);

function katilimciDegeri(katilimci: string) {
  const sayi = parseInt(katilimci.replace(/[.,\s]/g, ""), 10);
  return Number.isNaN(sayi) ? 0 : sayi;
}

const ortalamaGetiri = Math.round(
  halkaArzVerileri.reduce((toplam, item) => toplam + item.hisseGetirisi, 0) /
    (halkaArzVerileri.length || 1)
);

const ortalamaKatilimci = Math.round(
  halkaArzVerileri.reduce(
    (toplam, item) => toplam + katilimciDegeri(item.katilimciSayisi),
    0
  ) / (halkaArzVerileri.length || 1)
);

const tabloOkumaNotlari = [
  {
    baslik: "İşlem tarihi",
    aciklama:
      "Halka arz edilen payların Borsa İstanbul'da işlem görmeye başladığı ilk günü gösterir. Tavan serisi yorumlanırken ilk işlem gününden sonra kaç seans geçtiği önemlidir.",
  },
  {
    baslik: "Katılımcı sayısı",
    aciklama:
      "Halka arza kaç yatırımcının katıldığını gösterir. Yüksek katılım ilgiye işaret edebilir; ancak tek başına tavan serisinin süresini garanti etmez.",
  },
  {
    baslik: "Dağıtım şekli",
    aciklama:
      "Bireysel yatırımcıya ayrılan oranı veya eşit dağıtım yapısını gösterir. Dolaşımdaki lot miktarı ve yatırımcı tabanı fiyat davranışını etkileyebilir.",
  },
  {
    baslik: "Arz fiyatı",
    aciklama:
      "Şirket paylarının halka arzda satıldığı başlangıç fiyatıdır. Marj hesabının başlangıç noktası bu fiyattır.",
  },
  {
    baslik: "Gün sonu kapanış fiyatı",
    aciklama:
      "Tablodaki fiyat anlık ekran fiyatı değildir; seans kapanışı sonrasında güncellenen kapanış değeridir.",
  },
  {
    baslik: "Marj",
    aciklama:
      "Halka arz fiyatına göre fiyatın yüzde kaç primli veya iskontolu olduğunu gösterir. Pozitif marj kâr bölgesini, negatif marj halka arz fiyatının altını ifade eder.",
  },
  {
    baslik: "BIST 100 getirisi",
    aciklama:
      "Hissenin ilk işlem gününden önceki son BIST 100 kapanışı ile güncel veri tarihindeki endeks kapanışı arasındaki değişimi gösterir.",
  },
  {
    baslik: "BIST 100'e göre fark",
    aciklama:
      "Halka arz getirisinden aynı dönemdeki BIST 100 getirisi çıkarılır. Pozitif değer hissenin endeksten daha iyi performans gösterdiğini ifade eder.",
  },
];

const tavanSerisiniEtkileyenler = [
  "Halka arz büyüklüğü ve piyasaya gelen lot miktarı",
  "Bireysel yatırımcıya ayrılan pay ve dağıtım yöntemi",
  "Şirketin finansal görünümü, büyüme hikayesi ve sektör algısı",
  "BIST genel piyasa koşulları ve halka arzlara yönelik risk iştahı",
  "İlk günlerdeki emir dengesi, tavan bekleyen lot miktarı ve işlem hacmi",
  "Kısa sürede oluşan getiri sonrası yatırımcıların kâr alma eğilimi",
];

const yorumlamaKontrolListesi = [
  "Sadece tavan sayısına değil, halka arz fiyatına göre oluşan toplam marja bakın.",
  "Tavan bozulduğunda hacmin artıp artmadığını ve fiyatın gün içinde nerede dengelendiğini izleyin.",
  "Aynı dönemde işlem gören diğer halka arzların performansıyla karşılaştırma yapın.",
  "Şirketin izahnamesindeki finansallar, halka açıklık oranı ve fon kullanım yerlerini ayrıca okuyun.",
  "Kısa vadeli tavan beklentisiyle uzun vadeli şirket değerini birbirine karıştırmayın.",
  "Tablodaki kapanış fiyatlarının anlık veri olmadığını ve seans sonrası güncellendiğini unutmayın.",
];

const faqItems = [
  {
    question: "Halka arz tavan serisi nedir?",
    answer:
      "Halka arz edilen bir hissenin borsada işlem görmeye başladıktan sonra üst fiyat limitinden kapanış yaptığı ardışık günler tavan serisi olarak adlandırılır. Bu seri, güçlü talep dönemini gösterebilir ancak kalıcı yükseliş garantisi değildir.",
  },
  {
    question: "2026 halka arzları ortalama ne kadar kazandırdı?",
    answer: `Bu sayfada listelenen ${halkaArzVerileri.length} halka arzın arz fiyatına göre ortalama getirisi yaklaşık %${ortalamaGetiri} seviyesindedir; ${pozitifHalkaArzlar.length} arz pozitif, ${negatifHalkaArzlar.length} arz negatif marja sahiptir. En yüksek getiri ${enYuksekMarjliHalkaArz.hisse} (${enYuksekMarjliHalkaArz.marj}), en düşük getiri ${enDusukMarjliHalkaArz.hisse} (${enDusukMarjliHalkaArz.marj}) hissesindedir. Geçmiş performans gelecek için garanti oluşturmaz.`,
  },
  {
    question: "Halka arzlara ortalama kaç kişi katılıyor?",
    answer: `2026 halka arzlarında katılım arza göre değişmekle birlikte, bu sayfada listelenen arzların ortalama katılımcı sayısı yaklaşık ${ortalamaKatilimci.toLocaleString("tr-TR")} kişidir.`,
  },
  {
    question: "Halka arz tavan serisi kaç gün sürer?",
    answer:
      "Sabit bir süre yoktur. Halka arz büyüklüğü, dağıtılan lot miktarı, yatırımcı talebi, şirket algısı, piyasa koşulları ve ilk günlerdeki emir dengesi tavan serisinin süresini etkiler.",
  },
  {
    question: "Tavan bozmak ne anlama gelir?",
    answer:
      "Hissenin gün içinde ulaşabileceği en yüksek fiyat seviyesinden aşağı işlem görmeye başlaması tavan bozmak olarak adlandırılır. Bu durum satış baskısının arttığını veya alış desteğinin zayıfladığını gösterebilir.",
  },
  {
    question: "Marj nasıl hesaplanır?",
    answer:
      "Marj, gün sonu kapanış fiyatı ile halka arz fiyatı arasındaki farkın halka arz fiyatına bölünmesiyle hesaplanır. Sonuç yüzde olarak gösterilir.",
  },
  {
    question: "Halka arz getirisi BIST 100 ile nasıl karşılaştırılır?",
    answer:
      "BIST 100 için başlangıç değeri olarak hissenin ilk işlem gününden önceki son seans kapanışı, bitiş değeri olarak halka arz fiyatlarıyla aynı tarihli günlük özet kapanışı kullanılır. Halka arz getirisinden BIST 100 getirisi çıkarılarak getiri farkı yüzde puan cinsinden hesaplanır.",
  },
  {
    question: "Tavan serisi bitince hisse mutlaka düşer mi?",
    answer:
      "Hayır. Tavan serisinin bitmesi oynaklığın arttığını gösterebilir; hisse yeniden toparlanabilir, yataya dönebilir veya satış baskısıyla düşebilir. Karar verirken hacim, değerleme ve piyasa koşulları birlikte değerlendirilmelidir.",
  },
  {
    question: "Bu tablo anlık fiyat verisi midir?",
    answer:
      "Hayır. Bu sayfadaki fiyatlar anlık piyasa verisi değildir; gün sonu kapanış fiyatı mantığıyla takip edilir ve yatırım kararı için tek başına kullanılmamalıdır.",
  },
];

export default function HalkaArzTavanSerisiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        url: canonical,
        description,
      },
      {
        "@type": "Dataset",
        name: "2026 Halka Arz Tavan Serisi Takip Tablosu",
        description:
          "2026 yılında işlem görmeye başlayan halka arzların arz fiyatı, kapanış fiyatı, otomatik hesaplanan marjı ve aynı dönemdeki BIST 100 karşılaştırması.",
        url: canonical,
        variableMeasured: [
          "Hisse",
          "İşlem tarihi",
          "Katılımcı sayısı",
          "Dağıtım şekli",
          "Arz fiyatı",
          "Gün sonu kapanış fiyatı",
          "Marj",
          "Aynı dönem BIST 100 getirisi",
          "BIST 100'e göre getiri farkı",
          "Konsorsiyum",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://www.hocaileborsa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Halka Arz",
            item: "https://www.hocaileborsa.com/halka-arz",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tavan Serisi Takibi",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl">
        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
            2026 Halka Arz Tavan Serisi ve Performans Takibi
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            2026 yılında halka arz olan şirketlerin gerçekleşen gün sonu kapanışları,
            arz fiyatına göre getirileri, tavan serisi görünümü ve aynı dönemdeki
            BIST 100 karşılaştırması aşağıdaki tabloda birlikte izlenebilir.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900">
            Her halka arzın kapanış veri tarihi fiyatın altında gösterilir. Marj
            otomatik hesaplanır. BIST 100 bitiş seviyesi aynı tarihli günlük borsa
            özetinden; arşiv öncesi başlangıç seviyeleri kayıtlı tarihsel
            kapanışlardan alınır.
            {bistKaynak && (
              <>
                {" "}
                <Link
                  href={`/borsa/gunluk-borsa-ozeti/${bistKaynak.bitisSlug}`}
                  prefetch={false}
                  className="font-bold underline underline-offset-2"
                >
                  Kullanılan güncel BIST 100 özetini aç
                </Link>
                .
              </>
            )}
          </div>
        </section>

        <section className="mb-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Listelenen Halka Arz
            </div>
            <div className="mt-2 text-3xl font-bold text-slate-950">
              {halkaArzVerileri.length}
            </div>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-blue-700">
              Ortalama Getiri
            </div>
            <div className="mt-2 text-3xl font-bold text-blue-900">
              %{ortalamaGetiri}
            </div>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-indigo-700">
              Ortalama Katılımcı
            </div>
            <div className="mt-2 text-3xl font-bold text-indigo-900">
              {ortalamaKatilimci.toLocaleString("tr-TR")}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Pozitif / Negatif Marj
            </div>
            <div className="mt-2 text-3xl font-bold">
              <span className="text-emerald-700">{pozitifHalkaArzlar.length}</span>
              <span className="text-slate-400"> / </span>
              <span className="text-red-700">{negatifHalkaArzlar.length}</span>
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
              En Yüksek Performans
            </div>
            <div className="mt-2 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-900 md:text-3xl">
                {enYuksekMarjliHalkaArz.hisse}
              </span>
              <span className="text-xl font-bold text-emerald-700 md:text-2xl">
                {enYuksekMarjliHalkaArz.marj}
              </span>
            </div>
            <p className="mt-1 text-xs text-emerald-800 md:text-sm">
              Arz fiyatı {enYuksekMarjliHalkaArz.arzFiyati} TL · Güncel{" "}
              {enYuksekMarjliHalkaArz.guncelFiyat} TL ·{" "}
              {enYuksekMarjliHalkaArz.islemTarihi} tarihinde işleme başladı
            </p>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-red-700">
              En Düşük Performans
            </div>
            <div className="mt-2 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-bold text-red-900 md:text-3xl">
                {enDusukMarjliHalkaArz.hisse}
              </span>
              <span className="text-xl font-bold text-red-700 md:text-2xl">
                {enDusukMarjliHalkaArz.marj}
              </span>
            </div>
            <p className="mt-1 text-xs text-red-800 md:text-sm">
              Arz fiyatı {enDusukMarjliHalkaArz.arzFiyati} TL · Güncel{" "}
              {enDusukMarjliHalkaArz.guncelFiyat} TL ·{" "}
              {enDusukMarjliHalkaArz.islemTarihi} tarihinde işleme başladı
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">
              2026 Halka Arz Tavan Serisi ve Performans Tablosu
            </h2>
            <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              2026 Yılı Halka Arzları
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white [scrollbar-width:thin] xl:overflow-x-visible">
            <table className="min-w-[1080px] w-full table-fixed border-collapse text-center text-xs font-bold text-slate-700">
              <colgroup>
                <col className="w-[8%]" />
                <col className="w-[9%]" />
                <col className="w-[9%]" />
                <col className="w-[11%]" />
                <col className="w-[7%]" />
                <col className="w-[7%]" />
                <col className="w-[6%]" />
                <col className="w-[10%]" />
                <col className="w-[11%]" />
                <col className="w-[22%]" />
              </colgroup>
              <thead>
                <tr>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    HİSSE
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    İŞLEM TARİHİ
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    KATILIMCI SAYISI
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    DAĞITIM ŞEKLİ
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    ARZ FİYATI
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-1 py-2.5 leading-tight text-white">
                    <span className="block">GÜN SONU</span>
                    <span className="block">KAPANIŞ</span>
                    <span className="block">FİYATI</span>
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    MARJ
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    BIST 100 GETİRİSİ
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    BIST 100&apos;E GÖRE FARK
                  </th>
                  <th className="sticky top-[52px] z-30 border border-slate-700 bg-slate-900 px-2 py-3 text-white">
                    KONSORSİYUM
                  </th>
                </tr>
              </thead>

              <tbody>
                {halkaArzVerileri.map((item) => (
                  <tr
                    key={item.hisse}
                    className="odd:bg-white even:bg-slate-50/80 hover:bg-blue-50/70"
                  >
                    <td className="border border-slate-200 px-2 py-2">
                      {item.detayHedefi ? (
                        <Link
                          href={item.detayHedefi.href}
                          aria-label={item.detayHedefi.etiket}
                          title={item.detayHedefi.baslik}
                          className="group inline-flex w-full max-w-[5.5rem] items-center justify-center gap-1 rounded-lg border border-blue-900 bg-blue-700 px-1.5 py-1.5 font-extrabold text-white shadow-sm ring-1 ring-white/30 transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                        >
                          {item.hisse}
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                          >
                            <path
                              d="M4 10h11m-4-4 4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      ) : (
                        item.hisse
                      )}
                    </td>
                    <td className="border border-slate-200 px-2 py-2">
                      {item.islemTarihi}
                    </td>
                    <td className="border border-slate-200 px-2 py-2">
                      {item.katilimciSayisi}
                    </td>
                    <td className="border border-slate-200 px-2 py-2">
                      {item.dagitimSekli}
                    </td>
                    <td className="border border-slate-200 bg-blue-50/70 px-2 py-2 text-blue-950">
                      {item.arzFiyati}
                    </td>
                    <td className="border border-slate-200 bg-blue-50/70 px-1 py-2 text-blue-950">
                      <span className="block">{item.guncelFiyat}</span>
                      <span className="mt-1 block text-[10px] font-semibold text-slate-500">
                        {isoTarihMetni(item.kapanisTarihi)}
                      </span>
                    </td>
                    <td
                      className={`border border-slate-200 px-2 py-2 ${performansRengi(
                        item.hisseGetirisi
                      )}`}
                    >
                      {item.marj}
                    </td>
                    <td
                      className={`border border-slate-200 px-2 py-2 ${performansRengi(
                        item.bistKarsilastirmasi?.bist100Getirisi
                      )}`}
                    >
                      {item.bistKarsilastirmasi
                        ? yuzdeMetni(item.bistKarsilastirmasi.bist100Getirisi)
                        : "Başlangıç verisi yok"}
                    </td>
                    <td
                      className={`border border-slate-200 px-2 py-2 ${performansRengi(
                        item.bistKarsilastirmasi?.getiriFarkiPuan
                      )}`}
                    >
                      {item.bistKarsilastirmasi
                        ? puanMetni(item.bistKarsilastirmasi.getiriFarkiPuan)
                        : "Hesaplanamadı"}
                    </td>
                    <td className="border border-slate-200 px-2 py-2 text-slate-700">
                      {item.konsorsiyum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Gün sonu kapanış fiyatları piyasa hareketlerine göre değişebilir. Marj,
            BIST 100 getirisi ve getiri farkı sayfa oluşturulurken otomatik hesaplanır.
            Tablo gün içinde anlık veri sunmaz ve yatırım tavsiyesi değildir.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Halka Arz Tavan Serisi Nedir?</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
            <p>
              Tavan serisi, halka arz edilen bir hissenin borsada işlem görmeye başladıktan sonra
              bir veya birden fazla seansta günlük üst fiyat limitinden kapanış yapmasıdır. Özellikle
              yeni halka arzlarda yatırımcı talebi yüksekse, satış tarafı sınırlı kalabilir ve hisse
              birkaç gün boyunca tavan fiyat seviyesinde işlem görebilir.
            </p>
            <p>
              Bu hareket kısa vadeli talebi anlamak için faydalı bir göstergedir; fakat tek başına
              şirketin gerçek değerini, uzun vadeli performansını veya gelecekteki fiyat yönünü garanti
              etmez. Tavan serisi bittiğinde fiyat artık daha normal bir alıcı-satıcı dengesine geçebilir.
              Bu nedenle tavan sayısı, halka arz fiyatına göre oluşan marj, işlem hacmi, şirket finansalları
              ve genel piyasa koşullarıyla birlikte okunmalıdır.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Tablo Nasıl Okunmalı?</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tabloOkumaNotlari.map((item) => (
              <div key={item.baslik} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-bold text-slate-900">{item.baslik}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Marj Nasıl Hesaplanır?</h2>
            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-7 text-blue-950">
              Marj = ((Gün sonu kapanış fiyatı - Halka arz fiyatı) / Halka arz fiyatı) x 100
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Örneğin 40 TL halka arz fiyatına sahip bir hisse 53,20 TL kapanış yaparsa,
              fiyat halka arz seviyesine göre yüzde 33 primli görünür. Negatif marj ise
              kapanış fiyatının halka arz fiyatının altına indiğini gösterir.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              Bu listedeki en yüksek marj <strong className="text-slate-950">{enYuksekMarjliHalkaArz.hisse}</strong> hissesinde
              {" "}
              <strong className="text-slate-950">{enYuksekMarjliHalkaArz.marj}</strong> olarak, en düşük marj ise
              {" "}
              <strong className="text-slate-950">{enDusukMarjliHalkaArz.hisse}</strong> hissesinde
              {" "}
              <strong className="text-slate-950">{enDusukMarjliHalkaArz.marj}</strong> olarak görünüyor.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Tavan Serisini Etkileyen Faktörler</h2>
            <ul className="mt-4 space-y-3">
              {tavanSerisiniEtkileyenler.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            BIST 100 Karşılaştırması Nasıl Hesaplanır?
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Halka arz getirisi arz fiyatından güncel kapanışa kadar olan dönemi
            kapsadığı için BIST 100 başlangıcı olarak hissenin ilk işlem gününden
            önceki son seans kapanışı kullanılır. Bitiş seviyesi, halka arz kapanış
            fiyatlarıyla aynı tarihli günlük borsa özetinden alınır. Günlük özet
            arşivinden eski başlangıçlar kayıtlı tarihsel kapanışlarla tamamlanır.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white p-4 text-sm leading-7 text-blue-950">
              BIST 100 getirisi = ((Bitiş endeks değeri / Başlangıç endeks değeri) - 1) x 100
            </div>
            <div className="rounded-2xl border border-blue-200 bg-white p-4 text-sm leading-7 text-blue-950">
              Getiri farkı = Halka arz getirisi - Aynı dönem BIST 100 getirisi
            </div>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            Bu yöntem fiyat performansını genel piyasa hareketinden ayırmayı
            kolaylaştırır. Başlangıç seviyesi bulunmayan bir halka arzda karşılaştırma
            gösterilmez; tahmini veri üretilmez.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Tavan Serisi Yatırımcı İçin Nasıl Yorumlanmalı?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Halka arz sonrası tavan serisi, yatırımcının ilgisini gösteren güçlü bir sinyal olabilir.
            Ancak çok hızlı primlenen hisselerde değerleme riski de artar. Bu yüzden tavan serisine
            yalnızca &quot;kaç gün tavan yaptı&quot; diye bakmak yerine, fiyatın halka arz değerlemesinden ne
            kadar uzaklaştığını ve talebin hangi hacimle sürdüğünü izlemek gerekir.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {yorumlamaKontrolListesi.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Sık Sorulan Sorular</h2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                <h3 className="text-sm font-bold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

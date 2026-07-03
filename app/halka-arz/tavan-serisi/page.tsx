import type { Metadata } from "next";

const canonical = "https://www.hocaileborsa.com/halka-arz/tavan-serisi";
const title = "2026 Halka Arz Tavan Serisi Takibi | Güncel Halka Arz Performansları";
const description =
  "2026 halka arz tavan serisi takibi: işlem tarihi, katılımcı sayısı, dağıtım şekli, arz fiyatı, gün sonu kapanış fiyatı, marj hesabı ve tavan serisi yorumlama rehberi.";

export const metadata: Metadata = {
  title,
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
  ],
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
};

const halkaArzVerileri = [
  {
    hisse: "BETAE",
    islemTarihi: "01.07.2026",
    katilimciSayisi: "1,124,953",
    dagitimSekli: "BİREYSELE %50",
    arzFiyati: "40.00",
    guncelFiyat: "53.20",
    marj: "33%",
    konsorsiyum: "TSKB & Ziraat Yatırım & Yatırım Finansman",
  },
  {
    hisse: "EKDMR",
    islemTarihi: "22.05.2026",
    katilimciSayisi: "796,542",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "45.00",
    guncelFiyat: "61.00",
    marj: "36%",
    konsorsiyum: "A1 CAPITAL",
  },
  {
    hisse: "AAGYO",
    islemTarihi: "09.04.2026",
    katilimciSayisi: "917,413",
    dagitimSekli: "BİREYSELE %63",
    arzFiyati: "21.10",
    guncelFiyat: "15.68",
    marj: "-26%",
    konsorsiyum: "VAKIF-INFO",
  },
  {
    hisse: "MCARD",
    islemTarihi: "11.03.2026",
    katilimciSayisi: "965,336",
    dagitimSekli: "BİREYSEL %48",
    arzFiyati: "80.00",
    guncelFiyat: "159.60",
    marj: "100%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "LXGYO",
    islemTarihi: "10.03.2026",
    katilimciSayisi: "890,173",
    dagitimSekli: "BİREYSELE %40",
    arzFiyati: "12.05",
    guncelFiyat: "15.21",
    marj: "26%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "GENKM",
    islemTarihi: "06.03.2026",
    katilimciSayisi: "805,312",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "11.00",
    guncelFiyat: "13.89",
    marj: "26%",
    konsorsiyum: "DENİZ",
  },
  {
    hisse: "SVGYO",
    islemTarihi: "06.03.2026",
    katilimciSayisi: "701,429",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "3.64",
    guncelFiyat: "23.44",
    marj: "544%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "EMPAE",
    islemTarihi: "26.02.2026",
    katilimciSayisi: "1,134,537",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "22.00",
    guncelFiyat: "85.55",
    marj: "289%",
    konsorsiyum: "HALK",
  },
  {
    hisse: "ATATR",
    islemTarihi: "19.02.2026",
    katilimciSayisi: "627,142",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "11.20",
    guncelFiyat: "15.91",
    marj: "42%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "BESTE",
    islemTarihi: "11.02.2026",
    katilimciSayisi: "796,578",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "14.70",
    guncelFiyat: "34.56",
    marj: "135%",
    konsorsiyum: "GLOBAL",
  },
  {
    hisse: "AKHAN",
    islemTarihi: "06.02.2026",
    katilimciSayisi: "959,375",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "21.50",
    guncelFiyat: "34.56",
    marj: "61%",
    konsorsiyum: "HALK",
  },
  {
    hisse: "NETCD",
    islemTarihi: "05.02.2026",
    katilimciSayisi: "994,998",
    dagitimSekli: "BİREYSEL %60",
    arzFiyati: "46.00",
    guncelFiyat: "156.40",
    marj: "240%",
    konsorsiyum: "INFO",
  },
  {
    hisse: "UCAYM",
    islemTarihi: "22.01.2026",
    katilimciSayisi: "796,720",
    dagitimSekli: "BİREYSELE %70",
    arzFiyati: "18.00",
    guncelFiyat: "33.64",
    marj: "87%",
    konsorsiyum: "KUVEYT TÜRK",
  },
  {
    hisse: "ZGYO",
    islemTarihi: "16.01.2026",
    katilimciSayisi: "431,380",
    dagitimSekli: "BİREYSEL %50",
    arzFiyati: "9.77",
    guncelFiyat: "37.54",
    marj: "284%",
    konsorsiyum: "VAKIF",
  },
  {
    hisse: "FRMPL",
    islemTarihi: "15.01.2026",
    katilimciSayisi: "688,564",
    dagitimSekli: "BİREYSEL %65",
    arzFiyati: "30.24",
    guncelFiyat: "36.38",
    marj: "20%",
    konsorsiyum: "İNTEGRAL-ZİRAAT",
  },
  {
    hisse: "MEYSU",
    islemTarihi: "13.01.2026",
    katilimciSayisi: "648,003",
    dagitimSekli: "BİREYSEL %45",
    arzFiyati: "7.50",
    guncelFiyat: "13.78",
    marj: "84%",
    konsorsiyum: "ALNUS",
  },
  {
    hisse: "ARFYE",
    islemTarihi: "05.01.2026",
    katilimciSayisi: "508,401",
    dagitimSekli: "BİREYSEL %50",
    arzFiyati: "19.50",
    guncelFiyat: "31.36",
    marj: "61%",
    konsorsiyum: "A1 CAPITAL-BULLS",
  },
];

function marjRengi(marj: string) {
  const sayi = marjDegeri(marj);

  return sayi < 0 ? "bg-red-500" : "bg-green-500";
}

function marjDegeri(marj: string) {
  return Number(marj.replace("%", "").replace("+", "").replace(",", ".").trim());
}

const pozitifHalkaArzlar = halkaArzVerileri.filter((item) => marjDegeri(item.marj) >= 0);
const negatifHalkaArzlar = halkaArzVerileri.filter((item) => marjDegeri(item.marj) < 0);
const enYuksekMarjliHalkaArz = halkaArzVerileri.reduce((onceki, simdiki) =>
  marjDegeri(simdiki.marj) > marjDegeri(onceki.marj) ? simdiki : onceki
);
const enDusukMarjliHalkaArz = halkaArzVerileri.reduce((onceki, simdiki) =>
  marjDegeri(simdiki.marj) < marjDegeri(onceki.marj) ? simdiki : onceki
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
          "2026 yılında işlem görmeye başlayan halka arzların arz fiyatı, kapanış fiyatı, marjı, katılımcı sayısı ve konsorsiyum bilgileri.",
        url: canonical,
        variableMeasured: [
          "Hisse",
          "İşlem tarihi",
          "Katılımcı sayısı",
          "Dağıtım şekli",
          "Arz fiyatı",
          "Gün sonu kapanış fiyatı",
          "Marj",
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
            2026 Halka Arz Tavan Serisi Takibi
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            2026 yılında halka arz olan şirketlerin işlem tarihi, katılımcı sayısı,
            dağıtım şekli, arz fiyatı, gün sonu kapanış fiyatı, halka arzdan bugüne marjı ve
            konsorsiyum bilgileri aşağıdaki tabloda yer almaktadır.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900">
            Bu sayfadaki kapanış fiyatları ve marj oranları gün içerisinde anlık olarak
            güncellenmez. Veriler, Borsa İstanbul seans kapanışı sonrasında gün sonu
            kapanış rakamlarına göre güncellenmektedir.
          </div>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Listelenen Halka Arz
            </div>
            <div className="mt-2 text-3xl font-bold text-slate-950">
              {halkaArzVerileri.length}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
              Pozitif Marj
            </div>
            <div className="mt-2 text-3xl font-bold text-emerald-800">
              {pozitifHalkaArzlar.length}
            </div>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-red-700">
              Negatif Marj
            </div>
            <div className="mt-2 text-3xl font-bold text-red-800">
              {negatifHalkaArzlar.length}
            </div>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-blue-700">
              En Yüksek Marj
            </div>
            <div className="mt-2 text-2xl font-bold text-blue-900">
              {enYuksekMarjliHalkaArz.hisse} {enYuksekMarjliHalkaArz.marj}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">
              Halka Arz Performans Tablosu
            </h2>
            <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              2026 Yılı Halka Arzları
            </div>
          </div>

          <div className="mb-4 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs font-semibold leading-6 text-sky-900 md:text-sm">
            Tablodaki “Güncel Fiyat” alanı, gün içi anlık fiyatı değil; gün sonunda
            güncellenen kapanış fiyatını ifade eder.
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-300">
            <table className="min-w-[980px] w-full border-collapse text-center text-xs font-bold md:text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    HİSSE
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    İŞLEM TARİHİ
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    KATILIMCI SAYISI
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    DAĞITIM ŞEKLİ
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    ARZ FİYATI
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    GÜN SONU KAPANIŞ FİYATI
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    MARJ
                  </th>
                  <th className="border border-slate-800 bg-slate-700 px-2 py-3 text-white">
                    KONSORSİYUM
                  </th>
                </tr>
              </thead>

              <tbody>
                {halkaArzVerileri.map((item) => (
                  <tr key={item.hisse}>
                    <td className="border border-slate-800 bg-yellow-300 px-2 py-2 text-slate-950">
                      {item.hisse}
                    </td>
                    <td className="border border-slate-800 bg-yellow-100 px-2 py-2 text-slate-950">
                      {item.islemTarihi}
                    </td>
                    <td className="border border-slate-800 bg-lime-100 px-2 py-2 text-slate-950">
                      {item.katilimciSayisi}
                    </td>
                    <td className="border border-slate-800 bg-red-300 px-2 py-2 text-slate-950">
                      {item.dagitimSekli}
                    </td>
                    <td className="border border-slate-800 bg-blue-100 px-2 py-2 text-slate-950">
                      {item.arzFiyati}
                    </td>
                    <td className="border border-slate-800 bg-blue-100 px-2 py-2 text-slate-950">
                      {item.guncelFiyat}
                    </td>
                    <td
                      className={`border border-slate-800 px-2 py-2 text-slate-950 ${marjRengi(
                        item.marj
                      )}`}
                    >
                      {item.marj}
                    </td>
                    <td className="border border-slate-800 bg-emerald-100 px-2 py-2 text-slate-950">
                      {item.konsorsiyum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Gün sonu kapanış fiyatı ve marj bilgileri piyasa hareketlerine göre değişebilir.
            Bu tablo gün içinde anlık veri sunmaz; kapanış rakamları gün sonunda güncellenir.
            Bu tablo bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
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

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Tavan Serisi Yatırımcı İçin Nasıl Yorumlanmalı?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Halka arz sonrası tavan serisi, yatırımcının ilgisini gösteren güçlü bir sinyal olabilir.
            Ancak çok hızlı primlenen hisselerde değerleme riski de artar. Bu yüzden tavan serisine
            yalnızca "kaç gün tavan yaptı" diye bakmak yerine, fiyatın halka arz değerlemesinden ne
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

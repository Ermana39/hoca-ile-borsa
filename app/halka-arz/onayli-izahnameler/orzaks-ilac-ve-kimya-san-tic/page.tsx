import type { Metadata } from "next";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzKarnesi from "@/components/HalkaArzKarnesi";
import HalkaArzSSS from "@/components/HalkaArzSSS";
import {
  bekleyenDeger,
  tahsisatMetni,
  type BilgiKarti,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const veri: HalkaArzVeri = {
  "slug": "orzaks-ilac-ve-kimya-san-tic",
  "sirketAdi": "Orzaks İlaç ve Kimya San. Tic. A.Ş.",
  "seo": {
    "canonical": "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-san-tic",
    "robots": {
      "index": true,
      "follow": true
    },
    "sitemap": true,
    "contentStatus": "onayli"
  },
  "baslikMeta": {
    "title": "Orzaks İlaç ve Kimya San. Tic. A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "Orzaks İlaç ve Kimya San. Tic. A.Ş. onaylı izahname bilgileri, 69,00 TL halka arz fiyatı, %20 iskonto oranı, 52.500.000 lot toplam pay, tahsisat, fon kullanımı ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "29-30 Haziran / 1 Temmuz 2026 (09.00-17.00)",
    "fiyatAralik": "69,00 TL - %20 İskonto",
    "dagitimYontemi": "Bireysele Eşit (T1 ve T2 bakiye kullanılamaz)",
    "pay": "52.500.000 Lot",
    "araciKurum": "İnfo Yatırım Menkul Değerler A.Ş.",
    "pazar": "Yıldız Pazar",
    "bistKodu": "ORZAX",
    "katilimEndeksi": "Katılım Endeksine Uygun Değil"
  },
  "toplamPay": "52.500.000",
  "halkaAciklikOrani": "%15,51",
  "halkaArzSekli": [
    "Sermaye Artırımı: 31.500.000 Lot",
    "Ortak Satışı: 21.000.000 Lot (Yunus Emre Alimoğlu)"
  ],
  "fonKullanim": [
    "%50 Devam eden ve yeni yatırımların finansmanında",
    "%30 Finansal borç anapara ve faiz ödemelerinde",
    "%20 İşletme sermayesi"
  ],
  "fonKullanimYorumu": "Orzaks İlaç ve Kimya halka arzında halka arz gelirinin %50’lik bölümü devam eden ve yeni yatırımların finansmanına, %30’luk bölümü finansal borç anapara ve faiz ödemelerine, %20’lik bölümü ise işletme sermayesinin güçlendirilmesine ayrılmıştır. Yatırım finansmanı; üretim kapasitesi, ürün geliştirme, kalite standartları, ambalajlama, laboratuvar süreçleri ve yeni ürün gruplarının pazara sunulması açısından önemlidir. Finansal borçlara ayrılan pay, finansman giderlerinin yönetilmesi ve bilanço yapısının desteklenmesi bakımından takip edilmelidir. İşletme sermayesi tarafı ise hammadde tedariki, stok yönetimi, eczane kanalı, dağıtım ağı, ihracat, pazarlama faaliyetleri ve tahsilat döngüsü için kritik rol oynar. Halka arzda 31.500.000 lot sermaye artırımı ve 21.000.000 lot ortak satışı bulunduğu için, şirket kasasına girecek kaynak ile ortak satışından doğacak tutar ayrı değerlendirilmelidir.",
  "finansalDonemler": [
    "2024",
    "2025",
    "2026/1Ç"
  ],
  "finansalVeriler": [
    {
      "kalem": "Dönen Varlıklar",
      "donemler": {
        "2024": "4,5 Milyar TL",
        "2025": "7,6 Milyar TL",
        "2026/1Ç": "6,5 Milyar TL"
      }
    },
    {
      "kalem": "Duran Varlıklar",
      "donemler": {
        "2024": "923 Milyon TL",
        "2025": "1,1 Milyar TL",
        "2026/1Ç": "1,3 Milyar TL"
      }
    },
    {
      "kalem": "Toplam Varlıklar",
      "donemler": {
        "2024": "5,5 Milyar TL",
        "2025": "8,8 Milyar TL",
        "2026/1Ç": "9,8 Milyar TL"
      }
    },
    {
      "kalem": "Kısa Vadeli Yükümlülükler",
      "donemler": {
        "2024": "2,4 Milyar TL",
        "2025": "4,2 Milyar TL",
        "2026/1Ç": "5,2 Milyar TL"
      }
    },
    {
      "kalem": "Uzun Vadeli Yükümlülükler",
      "donemler": {
        "2024": "217 Milyon TL",
        "2025": "693 Milyon TL",
        "2026/1Ç": "1,2 Milyar TL"
      }
    },
    {
      "kalem": "Özkaynaklar",
      "donemler": {
        "2024": "2,8 Milyar TL",
        "2025": "3,3 Milyar TL",
        "2026/1Ç": "3,3 Milyar TL"
      }
    },
    {
      "kalem": "Hasılat",
      "donemler": {
        "2024": "5,7 Milyar TL",
        "2025": "7,3 Milyar TL",
        "2026/1Ç": "2,6 Milyar TL"
      }
    },
    {
      "kalem": "Esas Faaliyet Kârı",
      "donemler": {
        "2024": "2,0 Milyar TL",
        "2025": "2,4 Milyar TL",
        "2026/1Ç": "0,8 Milyar TL"
      }
    },
    {
      "kalem": "Net Dönem Kârı",
      "donemler": {
        "2024": "725 Milyon TL",
        "2025": "1,0 Milyar TL",
        "2026/1Ç": "348 Milyon TL"
      }
    }
  ],
  "finansalYorum": "Finansal görünümde 2024, 2025 ve 2026 birinci çeyrek verileri birlikte değerlendirildiğinde Orzaks İlaç ve Kimya’nın varlık büyüklüğünde artış eğilimi öne çıkmaktadır. Toplam varlıklar 2024 yılında 5,5 milyar TL iken 2025 yılında 8,8 milyar TL’ye, 2026 birinci çeyreğinde ise 9,8 milyar TL’ye ulaşmıştır. Aynı dönemde kısa ve uzun vadeli yükümlülüklerdeki artış, şirketin borçluluk ve finansman yapısının yakından izlenmesi gerektiğini gösterir. Gelir tablosu tarafında hasılat 2024’te 5,7 milyar TL, 2025’te 7,3 milyar TL, 2026 birinci çeyreğinde 2,6 milyar TL olarak açıklanmıştır. Esas faaliyet kârı ve net dönem kârı pozitif seyrini korurken, 2026 birinci çeyrek verilerinin yalnızca ara dönemi kapsadığı unutulmamalıdır. Bu nedenle değerlendirme yapılırken büyüme, kârlılık, borçluluk, özkaynak yapısı, nakit akışı ve sektör dinamikleri birlikte takip edilmelidir.",
  "oneCikanlar": [
    {
      "title": "Talep Tarihi",
      "value": "29-30 Haziran / 1 Temmuz",
      "desc": "Talep toplama pazartesi, salı ve çarşamba günleri 09.00-17.00 saatleri arasında yapılacaktır."
    },
    {
      "title": "Halka Arz Fiyatı",
      "value": "69,00 TL - %20 İskonto",
      "desc": "1 TL nominal değerli paylar 69,00 TL fiyat ve %20 iskonto oranıyla satışa sunulacaktır."
    },
    {
      "title": "Bireysel Tahsisat",
      "value": "%57",
      "desc": "Yurt içi bireysel yatırımcıya 29.925.000 lot ayrılmıştır."
    },
    {
      "title": "Katılım Endeksi",
      "value": "Uygun Değil",
      "desc": "ORZAX halka arzı katılım endeksine uygun değildir."
    }
  ],
  "tahsisat": [
    {
      "grup": "Yurt İçi Bireysel",
      "oran": "%57",
      "lot": "29.925.000 Lot"
    },
    {
      "grup": "Grup Çalışanları",
      "oran": "%3",
      "lot": "1.575.000 Lot"
    },
    {
      "grup": "Yurt İçi Kurumsal",
      "oran": "%30",
      "lot": "15.750.000 Lot"
    },
    {
      "grup": "Yurt Dışı Kurumsal",
      "oran": "%10",
      "lot": "5.250.000 Lot"
    }
  ],
  "tahsisatNotlari": [
    "Talep toplama tarihleri 29-30 Haziran ve 1 Temmuz 2026 olarak açıklanmıştır. Talep toplama saatleri 09.00-17.00 aralığıdır.",
    "Yurt içi bireysel yatırımcı ve grup çalışanları için eşit dağıtım uygulanacaktır.",
    "ORZAX halka arzı katılım endeksine uygun değildir.",
    "T1-T2 bakiye kullanımına uygun değildir."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "İşlem görmeye başladığı gün dahil olmak üzere 5 işlem günü süreyle günlük 2.625.000 lot paydan toplam 13.125.000 lot pay için alım emri taahhüdü bulunmaktadır.",
    "satmamaTaahhudu": "1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapılmayacağı, dolaşımdaki payların artmasına sebep olacak satış veya halka arz yapılmayacağı, şirket ortakları tarafından 1 yıl boyunca halka arz fiyatının altında satış yapılmayacağı ve pay satılmayacağı taahhüt edilmiştir.",
    "halkaAciklik": "%15,51."
  },
  "sirketHakkinda": "Orzaks İlaç ve Kimya San. Tic. A.Ş., 2004 yılında eczacı, hekim ve yatırımcıların ortaklığıyla kurulmuş, Türkiye’de takviye edici gıda ve ilaç alanında faaliyet gösteren yerli firmalardan biridir. Şirketin özellikle eczanelerde yaygın olarak satılan Ocean markalı balık yağları, vitaminler ve mineraller ile tanındığı paylaşılmıştır. Kurucular arasında Selman Alimoğlu ve Yunus Emre Alimoğlu’nun yer aldığı belirtilmiştir. Mersis numarası 0648-0595-4660-0014 olarak paylaşılmıştır. Ürün grupları arasında omega 3 balık yağları, vitaminler, mineraller, kolajen, probiyotikler ve çocuklara özel takviyeler yer almaktadır. Genel müdürlük adresi Esentepe Mahallesi, Büyükdere Caddesi No:171, Metrocity İş Merkezi A Blok Kat:1, Şişli / İstanbul’dur. Üretim tesisi adresi Akçaburgaz Mahallesi 153. Sokak No:27A, Esenyurt / İstanbul olarak belirtilmiştir. Telefon numarası 0212 447 47 37’dir. Takviye edici gıda ve ilaç kimya sektöründe şirket performansı; ürün portföyü, marka bilinirliği, eczane kanalı, kalite standartları, Ar-Ge, regülasyonlara uyum, hammadde maliyetleri ve ihracat potansiyeliyle yakından ilişkilidir.",
  "eksikBilgiNotu": "Talep toplama tarihi ve tahsisat oranları gibi henüz kesinleşmeyen alanlar resmi duyurular geldikçe güncellenmelidir.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan ilk onaylı izahname verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.",
  "bistKodu": "ORZAX",
  "sermayeBilgileri": [
    {
      "label": "Mevcut Sermaye",
      "value": "307.000.000 TL"
    },
    {
      "label": "Yeni Sermaye",
      "value": "338.500.000 TL"
    },
    {
      "label": "Sermaye Artırımı",
      "value": "31.500.000 Lot"
    },
    {
      "label": "Mevcut Pay Satışı",
      "value": "21.000.000 Lot"
    },
    {
      "label": "Ek Pay Satışı",
      "value": "-"
    },
    {
      "label": "Satış Fiyatı",
      "value": "69,00 TL - %20 İskonto"
    },
    {
      "label": "Talep Toplama Tarihi",
      "value": "29-30 Haziran / 1 Temmuz 2026 (09.00-17.00)"
    },
    {
      "label": "Katılım Endeksi",
      "value": "Uygun Değil"
    }
  ],
  "satisYontemi": [
    "Sabit fiyatla talep toplama",
    "Bireysel yatırımcılar için T1 ve T2 bakiye kullanılamaz"
  ]
};

export const metadata: Metadata = {
  title: veri.baslikMeta.title,
  description: veri.baslikMeta.description,
  alternates: {
    canonical: veri.seo?.canonical || "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-san-tic",
  },
  robots: veri.seo?.robots,
};

function gorunur(item: BilgiKarti) {
  return !bekleyenDeger(item.value);
}

function InfoCard({ label, value }: BilgiKarti) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 whitespace-pre-line text-base font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function ozetSatirlari(veri: HalkaArzVeri): BilgiKarti[] {
  const o = veri.ozet;
  return [
    { label: "İşlem Kodu", value: veri.bistKodu || o.bistKodu || "" },
    { label: "Talep Toplama Tarihi", value: o.halkaArzTarihi || "" },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi || "" },
    { label: "Katılım Endeksi", value: o.katilimEndeksi || "" },
    { label: "Pazar", value: o.pazar || "" },
    { label: "Aracı Kurum", value: o.araciKurum || "" },
  ].filter(gorunur);
}

function tahsisatSatirlari(veri: HalkaArzVeri) {
  return veri.tahsisat.map(tahsisatMetni).filter((item) => !bekleyenDeger(item));
}

function sssSorulari(veri: HalkaArzVeri) {
  const kod = veri.bistKodu || veri.ozet.bistKodu || veri.sirketAdi;
  return [
    {
      soru: `${veri.sirketAdi} halka arz fiyatı kaç TL?`,
      cevap: `${veri.sirketAdi} halka arz fiyatı ${veri.ozet.fiyatAralik || "onaylı izahname/satış duyurusunda açıklanan fiyat"} olarak takip edilmektedir.`,
    },
    {
      soru: `${kod} halka arzında toplam kaç lot satışa sunulacak?`,
      cevap: `Toplam halka arz payı ${veri.ozet.pay || veri.toplamPay || "onaylı izahname verilerine göre güncellenecektir"}. Sermaye artırımı ve ortak satışı detayları sayfadaki sermaye ve satış bilgileri bölümünde yer almaktadır.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzı hangi pazarda işlem görecek?`,
      cevap: `Payların ${veri.ozet.pazar || "Borsa İstanbul tarafından açıklanacak pazarda"} işlem görmesi beklenmektedir.`,
    },
    {
      soru: `${veri.sirketAdi} halka arz fonu nerede kullanılacak?`,
      cevap:
        veri.fonKullanim.length > 0
          ? `Fon kullanım başlıkları: ${veri.fonKullanim.join("; ")}.`
          : "Fon kullanım alanları onaylı izahname ve satış duyurusu üzerinden takip edilmelidir.",
    },
  ];
}

export default function OrzaksIlacVeKimyaPage() {
  const summaryItems = ozetSatirlari(veri);
  const sermayeBilgileri = (veri.sermayeBilgileri || []).filter(
    (item) =>
      !["Satış Fiyatı", "Talep Toplama Tarihi", "Katılım Endeksi"].includes(
        item.label
      )
  );
  const tahsisat = tahsisatSatirlari(veri);
  const donemler =
    veri.finansalDonemler && veri.finansalDonemler.length > 0
      ? veri.finansalDonemler
      : Array.from(
          new Set(veri.finansalVeriler.flatMap((r) => Object.keys(r.donemler)))
        );
  const kod = veri.bistKodu || veri.ozet.bistKodu;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Onaylı İzahname
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {veri.sirketAdi} Halka Arz Detayları
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  {kod ? `#${kod} ` : ""}
                  halka arz fiyatı, sermaye ve satış bilgileri, fon kullanımı ve finansal görünüm
                </p>
              </div>

              {(veri.ozet.fiyatAralik || veri.toplamPay || veri.halkaAciklikOrani) && (
                <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                  {veri.ozet.fiyatAralik && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Arz Fiyatı</div>
                      <div className="mt-1 text-lg font-bold">{veri.ozet.fiyatAralik}</div>
                    </div>
                  )}
                  {veri.toplamPay && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Toplam Pay</div>
                      <div className="mt-1 text-lg font-bold">{veri.toplamPay}</div>
                    </div>
                  )}
                  {veri.halkaAciklikOrani && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Açıklık</div>
                      <div className="mt-1 text-lg font-bold">{veri.halkaAciklikOrani}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
            {summaryItems.map((item) => (
              <InfoCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        <HalkaArzKarnesi
          sirketAdi={veri.sirketAdi}
          kod={kod || veri.sirketAdi}
          talepTarihi={veri.ozet.halkaArzTarihi}
          halkaArzFiyati={veri.ozet.fiyatAralik}
          dagitimYontemi={veri.ozet.dagitimYontemi}
          toplamPay={veri.ozet.pay || veri.toplamPay}
          araciKurum={veri.ozet.araciKurum}
          tahsisat={veri.tahsisat}
        />

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            {veri.halkaArzSekli.length > 0 && (
              <Section title="Halka Arz Şekli">
                <div className="grid gap-3">
                  {veri.halkaArzSekli.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {sermayeBilgileri.length > 0 && (
              <Section title="Sermaye ve Satış Bilgileri">
                <div className="grid gap-4 sm:grid-cols-2">
                  {sermayeBilgileri.map((item) => (
                    <InfoCard key={item.label} {...item} />
                  ))}
                </div>
              </Section>
            )}

            {veri.satisYontemi && veri.satisYontemi.length > 0 && (
              <Section title="Satış Yöntemi">
                <div className="grid gap-3">
                  {veri.satisYontemi.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {veri.fonKullanim.length > 0 && (
              <Section title="Fon Kullanım Yeri">
                <div className="grid gap-4 md:grid-cols-2">
                  {veri.fonKullanim.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {veri.fonKullanimYorumu && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {veri.fonKullanimYorumu}
                  </p>
                )}
              </Section>
            )}

            {veri.finansalVeriler.length > 0 && (
              <Section title="Finansal Görünüm">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                          Kalem
                        </th>
                        {donemler.map((d) => (
                          <th
                            key={d}
                            className="px-4 py-3 text-left text-sm font-bold text-slate-700"
                          >
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {veri.finansalVeriler.map((row, index) => (
                        <tr
                          key={row.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                            {row.kalem}
                          </td>
                          {donemler.map((d) => (
                            <td key={d} className="px-4 py-4 text-sm text-slate-700">
                              {row.donemler[d] ?? "-"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {veri.finansalYorum && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {veri.finansalYorum}
                  </p>
                )}
              </Section>
            )}

          </div>

          <aside className="space-y-8">
            <Section title="Tahsisat Grupları">
              <div className="space-y-3">
                {tahsisat.length > 0 ? (
                  tahsisat.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    Tahsisat oranları ve lot kırılımı kesinleştiğinde bu alan güncellenecektir.
                  </div>
                )}
                {veri.tahsisatNotlari?.map((item, index) => (
                  <div
                    key={`not-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            {veri.taahhutOzeti && (
              <Section title="Taahhüt Özeti">
                <div className="space-y-4">
                  {veri.taahhutOzeti.fiyatIstikrari && (
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                      <div className="text-sm font-semibold text-blue-800">
                        Fiyat İstikrarı
                      </div>
                      <p className="mt-2 text-sm text-blue-900">
                        {veri.taahhutOzeti.fiyatIstikrari}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.satmamaTaahhudu && (
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                      <div className="text-sm font-semibold text-indigo-800">
                        Satmama Taahhüdü
                      </div>
                      <p className="mt-2 text-sm text-indigo-900">
                        {veri.taahhutOzeti.satmamaTaahhudu}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.halkaAciklik && (
                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                      <div className="text-sm font-semibold text-cyan-800">
                        Halka Açıklık
                      </div>
                      <p className="mt-2 text-sm text-cyan-900">
                        {veri.taahhutOzeti.halkaAciklik}
                      </p>
                    </div>
                  )}
                </div>
              </Section>
            )}
          </aside>
        </section>

        {veri.sirketHakkinda && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Şirket Hakkında
            </h2>
            <p className="text-sm leading-7 text-slate-600">{veri.sirketHakkinda}</p>
          </section>
        )}

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs leading-6 text-slate-500">
            {veri.yasalUyari ||
              "Bu sayfadaki bilgiler onaylı izahname/halka arz sürecine dair genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir."}
          </p>
        </section>


        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Halka Arz Talep ve Dağıtım Sonuçları
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Yatırımcı gruplarına göre planlanan tahsisat, gerçekleşen talep,
            dağıtılan pay ve oluşan talep katları.
          </p>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 xl:overflow-x-visible">
            <table className="w-full min-w-[900px] table-fixed text-xs xl:min-w-0 xl:text-[12px] 2xl:text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="w-[22%] px-2 py-3 text-left font-bold">
                    Yatırımcı Grubu
                  </th>
                  <th className="px-2 py-3 text-right font-bold">
                    Yatırımcı Sayısı
                  </th>
                  <th className="px-2 py-3 text-right font-bold">
                    Planlanan Tahsisat
                  </th>
                  <th className="px-2 py-3 text-right font-bold">
                    Gerçekleşen Talep
                  </th>
                  <th className="px-2 py-3 text-right font-bold">
                    Dağıtılan Pay
                  </th>
                  <th className="px-2 py-3 text-right font-bold">
                    Dağıtım Oranı
                  </th>
                  <th className="px-2 py-3 text-right font-bold">
                    Talep Katı
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    kategori: "Yurt İçi Bireysel Yatırımcılar",
                    yatirimciSayisi: "973.805",
                    planlananTahsisat: "29.925.000 Lot",
                    talep: "47.686.620 Lot",
                    dagitim: "29.925.000 Lot",
                    dagitimOrani: "%57,00",
                    talepKati: "1,59 kat",
                  },
                  {
                    kategori: "Grup Çalışanları",
                    yatirimciSayisi: "555",
                    planlananTahsisat: "1.575.000 Lot",
                    talep: "2.419.023 Lot",
                    dagitim: "1.575.000 Lot",
                    dagitimOrani: "%3,00",
                    talepKati: "1,54 kat",
                  },
                  {
                    kategori: "Yurt İçi Kurumsal Yatırımcılar",
                    yatirimciSayisi: "230",
                    planlananTahsisat: "15.750.000 Lot",
                    talep: "173.380.010 Lot",
                    dagitim: "15.750.000 Lot",
                    dagitimOrani: "%30,00",
                    talepKati: "11,01 kat",
                  },
                  {
                    kategori: "Yurt Dışı Kurumsal Yatırımcılar",
                    yatirimciSayisi: "7",
                    planlananTahsisat: "5.250.000 Lot",
                    talep: "16.588.200 Lot",
                    dagitim: "5.250.000 Lot",
                    dagitimOrani: "%10,00",
                    talepKati: "3,16 kat",
                  },
                  {
                    kategori: "Toplam",
                    yatirimciSayisi: "974.597",
                    planlananTahsisat: "52.500.000 Lot",
                    talep: "240.073.853 Lot",
                    dagitim: "52.500.000 Lot",
                    dagitimOrani: "%100,00",
                    talepKati: "4,57 kat",
                  },
                ].map((satir, index) => {
                  const toplamSatiri = satir.kategori === "Toplam";

                  return (
                    <tr
                      key={satir.kategori}
                      className={
                        toplamSatiri
                          ? "bg-slate-100 font-bold"
                          : index % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50"
                      }
                    >
                      <td className="border-t border-slate-200 px-2 py-3 font-semibold leading-5 text-slate-900">
                        {satir.kategori}
                      </td>
                      <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                        {satir.yatirimciSayisi}
                      </td>
                      <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                        {satir.planlananTahsisat}
                      </td>
                      <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                        {satir.talep}
                      </td>
                      <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                        {satir.dagitim}
                      </td>
                      <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                        {satir.dagitimOrani}
                      </td>
                      <td className="border-t border-slate-200 px-2 py-3 text-right font-bold leading-5 text-emerald-700">
                        {satir.talepKati}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">
              Orzaks İlaç Halka Arz Video İncelemesi
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Halka arz detaylarını video anlatımıyla izlemek için aşağıdaki
              içeriklerden yararlanabilirsiniz.
            </p>
          </div>

          <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/ZY7ciEW8EMM"
                  title="Orzaks İlaç Halka Arz Video İncelemesi"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Orzaks İlaç Halka Arz Video İncelemesi
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/0fC9_h3VfrE"
                  title="Orzaks İlaç Halka Arz Değerlendirme Videosu"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Orzaks İlaç Halka Arz Değerlendirme Videosu
                </h3>
              </div>
            </div>
          </div>
        </section>

        <HalkaArzSSS className="mt-8" items={sssSorulari(veri)} />

        <ContinueReading
          title="Halka arz gündeminde devam edin"
          className="mt-6"
          items={[
            {
              title: "Güncel halka arz takvimi",
              href: "/halka-arz",
              description: "Talep toplama tarihleri, halka arz araçları ve güncel gündem.",
              type: "Halka arz",
            },
            {
              title: "Onaylı izahnameler",
              href: "/halka-arz/onayli-izahnameler",
              description: "SPK onayından geçen halka arz şirketlerini inceleyin.",
              type: "İzahname",
            },
            {
              title: "Halka arz kaç lot verir?",
              href: "/halka-arz/talep-hesapla",
              description: "Dağıtım varsayımlarına göre olası lot hesabı yapın.",
              type: "Lot hesabı",
            },
          ]}
        />
      </div>
    </main>
  );
}
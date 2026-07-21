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
  "slug": "sa-ra-enerji-insaat-tic-ve-san",
  "sirketAdi": "Şa-Ra Enerji İnşaat Tic. ve San. A.Ş.",
  "seo": {
    "canonical": "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/sa-ra-enerji-insaat-tic-ve-san",
    "robots": {
      "index": true,
      "follow": true
    },
    "sitemap": true,
    "contentStatus": "onayli"
  },
  "baslikMeta": {
    "title": "Şa-Ra Enerji İnşaat Tic. ve San. A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "Şa-Ra Enerji İnşaat Tic. ve San. A.Ş. onaylı izahname bilgileri, 8-9-10 Temmuz talep toplama tarihleri, 70,00 TL halka arz fiyatı, %20 iskonto, 89.000.000 lot toplam halka arz payı, %20,02 halka açıklık, tahsisat kırılımı, fon kullanım planı ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "8-9-10 Temmuz 2026 (Çarşamba-Perşembe-Cuma, 09.00-17.00)",
    "fiyatAralik": "70,00 TL - %20 İskonto",
    "dagitimYontemi": "Bireysele eşit, yüksek başvurulu yatırımcıya oransal",
    "pay": "89.000.000 Lot",
    "araciKurum": "Tera Yatırım Menkul Değerler A.Ş. (Konsorsiyum Lideri)",
    "pazar": "Yıldız Pazar",
    "bistKodu": "SARAE"
  },
  "toplamPay": "89.000.000",
  "bistKodu": "SARAE",
  "halkaAciklikOrani": "%20,02",
  "halkaArzSekli": [
    "Sermaye Artırımı (Bedelli): 44.500.000 Lot",
    "Ortak Satışı: 35.600.000 Lot (Şadi Türk - C Grubu)",
    "Ortak Satışı: 8.900.000 Lot (Hilkat Mor - C Grubu)"
  ],
  "fonKullanim": [
    "%55 İşletme sermayesi finansmanı",
    "%30 Finansal borç ödemesi",
    "%15 Yatırım harcamaları"
  ],
  "fonKullanimYorumu": "Şa-Ra Enerji halka arzında fon kullanım planında en büyük pay işletme sermayesine ayrılmıştır. Enerji iletim ve dağıtım altyapısı, trafo merkezi, enerji nakil hattı ve sanayi üretimi gibi alanlarda işletme sermayesi; proje finansmanı, hammadde tedariki, sipariş ön finansmanı, müşteri vadeleri ve saha operasyonlarının sürekliliği açısından önemlidir. Finansal borç ödemesine ayrılan kaynak, faiz giderleri ve bilanço esnekliği üzerinde destekleyici olabilir. Yatırım harcamaları ise üretim kapasitesi, hat donanımları, izolatör üretimi, makine parkı ve mühendislik altyapısı açısından takip edilmelidir. Halka arzda sermaye artırımıyla birlikte Şadi Türk ve Hilkat Mor’a ait ortak satışları da bulunduğu için, şirket kasasına girecek kaynak ile ortak satışından doğacak tutar ayrı değerlendirilmelidir.",
  "finansalDonemler": [
    "2024",
    "2025",
    "2026/1Ç"
  ],
  "finansalVeriler": [
    {
      "kalem": "Dönen Varlıklar",
      "donemler": {
        "2024": "8,5 Milyar TL",
        "2025": "10,3 Milyar TL",
        "2026/1Ç": "12,3 Milyar TL"
      }
    },
    {
      "kalem": "Duran Varlıklar",
      "donemler": {
        "2024": "3,2 Milyar TL",
        "2025": "7,4 Milyar TL",
        "2026/1Ç": "6,3 Milyar TL"
      }
    },
    {
      "kalem": "Toplam Varlıklar",
      "donemler": {
        "2024": "16 Milyar TL",
        "2025": "17 Milyar TL",
        "2026/1Ç": "18 Milyar TL"
      }
    },
    {
      "kalem": "Kısa Vadeli Yükümlülükler",
      "donemler": {
        "2024": "6,2 Milyar TL",
        "2025": "7,6 Milyar TL",
        "2026/1Ç": "9,4 Milyar TL"
      }
    },
    {
      "kalem": "Uzun Vadeli Yükümlülükler",
      "donemler": {
        "2024": "4,2 Milyar TL",
        "2025": "3,5 Milyar TL",
        "2026/1Ç": "2,2 Milyar TL"
      }
    },
    {
      "kalem": "Özkaynaklar",
      "donemler": {
        "2024": "6,2 Milyar TL",
        "2025": "6,6 Milyar TL",
        "2026/1Ç": "7 Milyar TL"
      }
    },
    {
      "kalem": "Hasılat",
      "donemler": {
        "2024": "14 Milyar TL",
        "2025": "7 Milyar TL",
        "2026/1Ç": "3,3 Milyar TL"
      }
    },
    {
      "kalem": "Esas Faaliyet Kârı",
      "donemler": {
        "2024": "2,8 Milyar TL",
        "2025": "2 Milyar TL",
        "2026/1Ç": "0,9 Milyar TL"
      }
    },
    {
      "kalem": "Dönem Kârı",
      "donemler": {
        "2024": "1,8 Milyar TL",
        "2025": "363 Milyon TL",
        "2026/1Ç": "370 Milyon TL"
      }
    }
  ],
  "finansalYorum": "2024, 2025 ve 2026 ilk çeyrek verileri birlikte değerlendirildiğinde şirketin varlık büyüklüğünde artış eğilimi öne çıkarken, kısa vadeli yükümlülüklerdeki yükseliş işletme sermayesi ihtiyacının dikkatle izlenmesi gerektiğini gösteriyor. Uzun vadeli yükümlülüklerin gerilemesi ve özkaynakların artması bilanço tarafında olumlu bir unsur olarak değerlendirilebilir. Gelir tablosunda 2025 hasılatı 2024’e göre düşerken şirket kârlılığını sürdürmüştür. 2026 ilk çeyrekte açıklanan 3,3 milyar TL hasılat ve 370 milyon TL dönem kârı, yılın devamındaki proje teslimleri, tahsilat performansı, finansman giderleri ve yatırım harcamalarıyla birlikte takip edilmelidir.",
  "oneCikanlar": [
    {
      "title": "Halka Arz Fiyatı",
      "value": "70,00 TL",
      "desc": "1 TL nominal değerli paylar 70,00 TL fiyat ve %20 iskonto ile satışa sunulacaktır."
    },
    {
      "title": "Toplam Pay",
      "value": "89.000.000 Lot",
      "desc": "44.500.000 lot bedelli sermaye artırımı ve 44.500.000 lot ortak satışından oluşmaktadır."
    },
    {
      "title": "Halka Açıklık",
      "value": "%20,02",
      "desc": "Yeni sermayeye göre planlanan halka açıklık oranı %20,02 seviyesindedir."
    },
    {
      "title": "Katılım Endeksi",
      "value": "Uygun değil",
      "desc": "Paylar BIST Katılım Endeksi kriterlerine uygun değildir."
    }
  ],
  "tahsisat": [
    {
      "grup": "Yurt İçi Bireysel Yatırımcı (%38) - 115.000 lot ve altı başvurular: 33.820.000 lot"
    },
    {
      "grup": "Yüksek Başvurulu Yatırımcı (%10) - 115.001 lot ve üstü başvurular: 8.900.000 lot"
    },
    {
      "grup": "Grup Çalışanları (%2) - 1.780.000 lot"
    },
    {
      "grup": "Yurt İçi Kurumsal Yatırımcı (%25) - 22.250.000 lot"
    },
    {
      "grup": "Yurt Dışı Kurumsal Yatırımcı (%25) - 22.250.000 lot"
    }
  ],
  "tahsisatNotlari": [
    "Halka arz fiyatı 70,00 TL sabit fiyat olarak açıklanmıştır.",
    "Bireysel yatırımcı tarafında eşit dağıtım bilgisi yer almaktadır.",
    "Yüksek başvurulu yatırımcı için oransal dağıtım bilgisi yer almaktadır.",
    "Talep toplama 8-9-10 Temmuz 2026 tarihlerinde 09.00-17.00 saatleri arasında yapılacaktır.",
    "BIST Katılım Endeksi’ne uygun değildir.",
    "T1 ve T2 bakiye kullanılamaz.",
    "Fiyat istikrarı sağlayıcı işlemler planlanmamaktadır."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "Fiyat istikrarı sağlayıcı işlemler planlanmamaktadır.",
    "satmamaTaahhudu": "Şirket 1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapmayacağını; ortaklar ise halka arzdan sonra dolaşımdaki pay miktarını artıracak şekilde satış yapmayacağını, halka arz fiyatının altında satış yapmayacağını ve pay satmayacağını taahhüt etmiştir.",
    "halkaAciklik": "%20,02."
  },
  "sirketHakkinda": "Şa-Ra Enerji İnşaat Ticaret ve Sanayi A.Ş., 1985 yılında Ankara’da kurulan, enerji iletimi ve dağıtımı sektöründe uzmanlaşmış köklü bir sanayi ve mühendislik şirketidir. Ticari unvanı Şa-Ra Enerji İnşaat Ticaret ve Sanayi Anonim Şirketi olarak paylaşılmıştır. Şirketin yönetim/temsil tarafında Şadi Türk ismi yer almaktadır. MERSİS numarası 0788005159200016 olarak belirtilmiştir. Ana faaliyet alanı enerji nakil hatları, trafo merkezleri, enerji iletimi ve dağıtımıdır. Adana yerleşkesinde bulunan hırdavat fabrikasında 800 kV’a kadar izolatör ve hat donanımları üretildiği, dövme, dökme ve talaşlı imalat atölyeleriyle yıllık 12.000 ton üretim kapasitesine sahip olduğu paylaşılmıştır. Şirket ayrıca güneş, rüzgar ve hidroelektrik santrali projeleri geliştirme alanlarında da faaliyet göstermektedir. Genel merkez adresi Ümit Mahallesi, 2479. Cadde No:2/18, Çankaya / Ankara’dır. Telefon numarası +90 312 285 24 24 olarak belirtilmiştir. Enerji altyapısı ve mühendislik sektöründe şirket performansı; enerji iletim-dağıtım yatırımları, proje portföyü, kamu ve özel sektör siparişleri, metal hammadde maliyetleri, finansman giderleri, işletme sermayesi ve yenilenebilir enerji projeleriyle yakından ilişkilidir.",
  "eksikBilgiNotu": "Halka arz fiyatı, talep toplama tarihleri, tahsisat oranları, tahsisat lotları, BIST Katılım Endeksi uygunluğu, fiyat istikrarı bilgisi, taahhütler ve 2024-2025-2026 ilk çeyrek finansal verileri halka arz tablosundaki bilgilerle güncellenmiştir. Halka arzda sermaye artırımı ve ortak satışları birlikte bulunduğu için şirket kasasına yalnızca sermaye artırımı kaynaklı bölümün gireceği unutulmamalıdır.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan onaylı izahname/halka arz tablo verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir. Halka arz sürecinde güncel izahname, tasarruf sahiplerine satış duyurusu ve KAP açıklamaları kontrol edilmelidir.",
  "sermayeBilgileri": [
    {
      "label": "Mevcut Sermaye",
      "value": "400.000.000 TL"
    },
    {
      "label": "Yeni Sermaye",
      "value": "444.500.000 TL"
    },
    {
      "label": "Sermaye Artırımı (Bedelli)",
      "value": "44.500.000 Lot"
    },
    {
      "label": "Sermaye Artırımı (Bedelsiz)",
      "value": "-"
    },
    {
      "label": "Mevcut Pay Satışı",
      "value": "44.500.000 Lot"
    },
    {
      "label": "Ek Pay Satışı",
      "value": "-"
    },
    {
      "label": "Satış Fiyatı",
      "value": "70,00 TL"
    },
    {
      "label": "Halka Arz Büyüklüğü",
      "value": "6.230.000.000 TL"
    }
  ]
};

export const metadata: Metadata = {
  title: veri.baslikMeta.title,
  description: veri.baslikMeta.description,
  alternates: {
    canonical: veri.seo?.canonical || "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/sa-ra-enerji-insaat-tic-ve-san",
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
    { label: "Halka Arz Fiyatı", value: o.fiyatAralik || "" },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi || "" },
    { label: "Pazar", value: o.pazar || "" },
    { label: "Katılım Endeksi", value: "BIST Katılım Endeksi’ne uygun değil" },
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
      cevap: `Payların ${veri.ozet.pazar || "Borsa İstanbul tarafından açıklanacak pazarda"} işlem görmesi beklenmektedir. Halka arz tablosuna göre BIST Katılım Endeksi’ne uygun değildir.`,
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

export default function SaRaEnerjiPage() {
  const summaryItems = ozetSatirlari(veri);
  const sermayeBilgileri = veri.sermayeBilgileri || [];
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


        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">
              Şa-Ra Enerji Halka Arz Video İncelemesi
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Halka arz detaylarını video anlatımıyla izlemek için aşağıdaki
              içerikten yararlanabilirsiniz.
            </p>
          </div>

          <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/QSfGGhEl3uM"
                  title="Şa-Ra Enerji Halka Arz Video İncelemesi"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Şa-Ra Enerji Halka Arz Video İncelemesi
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

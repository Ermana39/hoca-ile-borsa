import type { Metadata } from "next";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzSSS from "@/components/HalkaArzSSS";
import {
  bekleyenDeger,
  tahsisatMetni,
  type BilgiKarti,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const veri: HalkaArzVeri = {
  "slug": "soho-giyim-ve-enerji",
  "sirketAdi": "Soho Giyim ve Enerji A.Ş.",
  "seo": {
    "canonical": "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji",
    "robots": {
      "index": true,
      "follow": true
    },
    "sitemap": true,
    "contentStatus": "onayli"
  },
  "baslikMeta": {
    "title": "Soho Giyim ve Enerji A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "Soho Giyim ve Enerji A.Ş. onaylı izahname bilgileri, 15,00 TL halka arz fiyatı, 100.000.000 lot sermaye artırımı, %32,6 halka açıklık, 1,5 milyar TL arz büyüklüğü, fon kullanım alanları ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "30 Haziran / 1 Temmuz 2026 (10.30-13.00)",
    "fiyatAralik": "15,00 TL - %37 iskonto",
    "dagitimYontemi": "Tamamı Eşit Dağıtım",
    "pay": "100.000.000 Lot",
    "araciKurum": "İntegral Yatırım Menkul Değerler A.Ş.",
    "pazar": "Ana Pazar",
    "bistKodu": "SOHOE",
    "katilimEndeksi": "BIST Katılım Endeksine Uygun"
  },
  "toplamPay": "100.000.000",
  "halkaAciklikOrani": "%32,6",
  "halkaArzSekli": [
    "Sermaye Artırımı: 100.000.000 Lot",
    "Ortak Satışı: Yok"
  ],
  "fonKullanim": [
    "%60 Kreasyon yatırımları",
    "%30 Mağazalaşma yatırımları",
    "%10 Markalaşma yatırımları"
  ],
  "fonKullanimYorumu": "Soho Giyim ve Enerji halka arzı tamamen sermaye artırımı şeklinde planlandığı için halka arzdan sağlanacak kaynağın şirket bünyesine girmesi beklenir. Fon kullanım planında en büyük pay kreasyon yatırımlarına ayrılmıştır. Bu başlık, koleksiyon geliştirme, ürün çeşitliliği, tasarım süreçleri ve sezonluk ürün planlaması açısından önem taşır. Mağazalaşma yatırımları, şirketin satış ağı ve müşteriyle doğrudan temas noktalarını genişletme hedefiyle ilişkilidir. Markalaşma yatırımları ise marka bilinirliği, pazarlama gücü ve ürünlerin daha geniş kitlelere ulaştırılması açısından takip edilmelidir.",
  "finansalDonemler": [
    "2024",
    "2025",
    "2026/1Ç"
  ],
  "finansalVeriler": [
    {
      "kalem": "Dönen Varlıklar",
      "donemler": {
        "2024": "2,2 Milyar TL",
        "2025": "2,6 Milyar TL",
        "2026/1Ç": "2,7 Milyar TL"
      }
    },
    {
      "kalem": "Duran Varlıklar",
      "donemler": {
        "2024": "1,8 Milyar TL",
        "2025": "2,4 Milyar TL",
        "2026/1Ç": "2,4 Milyar TL"
      }
    },
    {
      "kalem": "Toplam Varlıklar",
      "donemler": {
        "2024": "4,1 Milyar TL",
        "2025": "5,0 Milyar TL",
        "2026/1Ç": "5,2 Milyar TL"
      }
    },
    {
      "kalem": "Kısa Vadeli Yükümlülükler",
      "donemler": {
        "2024": "1,2 Milyar TL",
        "2025": "1,8 Milyar TL",
        "2026/1Ç": "1,9 Milyar TL"
      }
    },
    {
      "kalem": "Uzun Vadeli Yükümlülükler",
      "donemler": {
        "2024": "565 Milyon TL",
        "2025": "759 Milyon TL",
        "2026/1Ç": "847 Milyon TL"
      }
    },
    {
      "kalem": "Özkaynaklar",
      "donemler": {
        "2024": "2,3 Milyar TL",
        "2025": "2,4 Milyar TL",
        "2026/1Ç": "2,4 Milyar TL"
      }
    },
    {
      "kalem": "Hasılat",
      "donemler": {
        "2024": "2,6 Milyar TL",
        "2025": "3,0 Milyar TL",
        "2026/1Ç": "0,7 Milyar TL"
      }
    },
    {
      "kalem": "Esas Faaliyet Kârı",
      "donemler": {
        "2024": "488 Milyon TL",
        "2025": "904 Milyon TL",
        "2026/1Ç": "211 Milyon TL"
      }
    },
    {
      "kalem": "Dönem Kârı",
      "donemler": {
        "2024": "84 Milyon TL",
        "2025": "49 Milyon TL",
        "2026/1Ç": "4 Milyon TL"
      }
    }
  ],
  "finansalYorum": "Finansal görünümde 2025 yılında hasılatın 2024'e göre arttığı, esas faaliyet kârında ise daha belirgin bir yükseliş yaşandığı görülüyor. Buna karşılık dönem kârının 2025 yılında 2024'e göre gerilemesi, finansman giderleri, vergi etkisi, kur farkı, tek seferlik kalemler veya operasyon dışı giderler açısından ayrıca incelenmelidir. 2026/1Ç verileri üç aylık dönemi kapsadığı için tam yıl verileriyle doğrudan karşılaştırılmamalıdır. Şirket değerlendirilirken hasılat, esas faaliyet kârı ve dönem kârı birlikte ele alınmalı; mağazalaşma, kreasyon ve markalaşma yatırımlarının büyüme üzerindeki etkisi sonraki dönemlerde izlenmelidir.",
  "oneCikanlar": [
    {
      "title": "Talep Tarihi",
      "value": "30 Haziran / 1 Temmuz",
      "desc": "Talep toplama salı ve çarşamba günleri 10.30-13.00 saatleri arasında yapılacaktır."
    },
    {
      "title": "Halka Arz Fiyatı",
      "value": "15,00 TL",
      "desc": "Halka arz fiyatı 15,00 TL, iskonto oranı %37 olarak açıklanmıştır."
    },
    {
      "title": "Dağıtım Şekli",
      "value": "Tamamı Eşit",
      "desc": "Dağıtım şekli tamamı eşit dağıtım olarak açıklanmıştır."
    },
    {
      "title": "Katılım Endeksi",
      "value": "Uygun",
      "desc": "BIST Katılım Endeksine uygundur."
    }
  ],
  "tahsisat": [],
  "tahsisatNotlari": [
    "Dağıtım şekli tamamı eşit dağıtım olarak açıklanmıştır.",
    "Talep toplama 30 Haziran / 1 Temmuz 2026 tarihlerinde, salı-çarşamba günleri 10.30-13.00 saatleri arasında yapılacaktır.",
    "BIST Katılım Endeksine uygundur.",
    "Toplam dağıtılacak pay 100.000.000 lot olarak açıklanmıştır.",
    "Konsorsiyum bilgisi tüm banka ve aracı kurumlar olarak belirtilmiştir."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "Brüt halka arz gelirinin %10'u ile 30 gün boyunca fiyat istikrarı sağlayıcı işlemler planlanmaktadır.",
    "satmamaTaahhudu": "1 yıl bedelli/bedelsiz sermaye artırımı yapılmayacağı, dolaşımdaki payların artmasına sebep olacak şekilde satışa ve halka arza konu edilmeyeceği, şirket ortaklarının 1 yıl boyunca halka arz fiyatının altında satış yapmayacağı taahhüt edilmiştir.",
    "halkaAciklik": "%32,6."
  },
  "sirketHakkinda": "Soho Giyim ve Enerji A.Ş., giyim ve enerji alanlarında faaliyet gösteren bir şirkettir. Halka arz verilerine göre şirketin fon kullanım planı kreasyon, mağazalaşma ve markalaşma yatırımları üzerine yoğunlaşmaktadır. Bu yapı, şirketin büyüme stratejisinde ürün geliştirme, satış ağı ve marka bilinirliği başlıklarının öne çıktığını göstermektedir. Şirketin finansal performansı değerlendirilirken hasılat, esas faaliyet kârı, dönem kârı, özkaynak yapısı, kısa vadeli yükümlülükler ve halka arz sonrası yatırımların katkısı birlikte izlenmelidir.",
  "eksikBilgiNotu": "Bu sayfadaki bilgiler paylaşılan halka arz bilgi tablosundaki veriler esas alınarak güncellenmiştir.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan onaylı izahname/halka arz bilgi tablosu verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.",
  "bistKodu": "SOHOE",
  "sermayeBilgileri": [
    {
      "label": "Mevcut Sermaye",
      "value": "206.760.337,13 TL"
    },
    {
      "label": "Yeni Sermaye",
      "value": "306.760.337,13 TL"
    },
    {
      "label": "Sermaye Artırımı",
      "value": "100.000.000 Lot"
    },
    {
      "label": "Mevcut Pay Satışı",
      "value": "Yok"
    },
    {
      "label": "Ek Pay Satışı",
      "value": "-"
    },
    {
      "label": "Satış Fiyatı",
      "value": "15,00 TL - %37 iskonto"
    },
    {
      "label": "Talep Toplama Tarihi",
      "value": "30 Haziran / 1 Temmuz 2026 (10.30-13.00)"
    },
    {
      "label": "Katılım Endeksi",
      "value": "Uygun"
    },
    {
      "label": "Halka Arz Büyüklüğü",
      "value": "1.500.000.000 TL"
    }
  ],
  "satisYontemi": [
    "Sabit fiyatla talep toplama",
    "Tamamı eşit dağıtım"
  ]
};

export const metadata: Metadata = {
  title: veri.baslikMeta.title,
  description: veri.baslikMeta.description,
  alternates: {
    canonical: veri.seo?.canonical || "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji",
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

export default function SohoGiyimVeEnerjiPage() {
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

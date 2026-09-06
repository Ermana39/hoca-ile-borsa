import type { Metadata } from "next";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzKarnesi from "@/components/HalkaArzKarnesi";
import HalkaArzSSS from "@/components/HalkaArzSSS";
import { halkaArzSeoMetinleri } from "@/lib/halka-arz-seo";
import {
  bekleyenDeger,
  tahsisatMetni,
  type BilgiKarti,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const veri: HalkaArzVeri = {
  "slug": "ekim-turizm-tic-ve-san",
  "sirketAdi": "Ekim Turizm Ticaret ve Sanayi A.Ş.",
  "markaAdi": "Intercity",
  "seo": {
    "canonical": "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san",
    "robots": {
      "index": true,
      "follow": true
    },
    "sitemap": true,
    "contentStatus": "onayli"
  },
  "baslikMeta": {
    "title": "(Intercity) Ekim Turizm Ticaret ve Sanayi A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "Intercity markasıyla bilinen Ekim Turizm Ticaret ve Sanayi A.Ş. onaylı izahname bilgileri, 30,26 TL halka arz fiyatı, 162.000.000 lot toplam halka arz payı, tahsisat grupları, fon kullanım planı ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "1-2-3 Temmuz 2026 (Çarşamba-Perşembe-Cuma) / 09.00-17.00",
    "fiyatAralik": "30,26 TL (%20 iskonto)",
    "dagitimYontemi": "Bireysele eşit dağıtım",
    "pay": "162.000.000 Lot",
    "araciKurum": "Ak Yatırım Menkul Değerler A.Ş. / Vakıf Yatırım Menkul Değerler A.Ş.",
    "bistKodu": "EKIM",
    "katilimEndeksi": "Katılım Endeksine Uygun Değil",
    "pazar": "Yıldız Pazar"
  },
  "toplamPay": "162.000.000",
  "bistKodu": "EKIM",
  "halkaAciklikOrani": "%19,47",
  "halkaArzSekli": [
    "Sermaye Artırımı: 132.000.000 Lot",
    "Ortak Satışı: 30.000.000 Lot"
  ],
  "fonKullanim": [
    "%100 Operasyonel kiralamada kullanılacak kara araçlarının satın alınması"
  ],
  "fonKullanimYorumu": "Ekim Turizm halka arzında fon kullanım planının tamamı operasyonel kiralamada kullanılacak kara araçlarının satın alınmasına ayrılmıştır. Bu yapı, Intercity markasının ana faaliyet alanı olan filo kiralama iş modelini doğrudan büyütmeye odaklanmaktadır. Araç alımı; filo yaşı, kiralanabilir araç adedi, müşteri sözleşmeleri ve operasyonel kapasite açısından şirketin gelir üretme gücünü etkileyebilir. Ancak bu modelde araç finansmanı, ikinci el araç fiyatları, bakım ve sigorta giderleri, faiz oranları ve filo yenileme ihtiyacı da yakından izlenmelidir. Halka arzda sermaye artırımıyla birlikte ortak satışı da bulunduğu için şirket kasasına girecek kaynak ile ortak satışından doğan tutar ayrı değerlendirilmelidir.",
  "finansalDonemler": [
    "2024",
    "2025",
    "2026/1Ç"
  ],
  "finansalVeriler": [
    {
      "kalem": "Dönen Varlıklar",
      "donemler": {
        "2024": "3,2 Milyar TL",
        "2025": "5,3 Milyar TL",
        "2026/1Ç": "4,4 Milyar TL"
      }
    },
    {
      "kalem": "Duran Varlıklar",
      "donemler": {
        "2024": "39 Milyar TL",
        "2025": "34 Milyar TL",
        "2026/1Ç": "33 Milyar TL"
      }
    },
    {
      "kalem": "Toplam Varlıklar",
      "donemler": {
        "2024": "42 Milyar TL",
        "2025": "40 Milyar TL",
        "2026/1Ç": "37 Milyar TL"
      }
    },
    {
      "kalem": "Kısa Vadeli Yükümlülükler",
      "donemler": {
        "2024": "9 Milyar TL",
        "2025": "8 Milyar TL",
        "2026/1Ç": "7 Milyar TL"
      }
    },
    {
      "kalem": "Uzun Vadeli Yükümlülükler",
      "donemler": {
        "2024": "11 Milyar TL",
        "2025": "11 Milyar TL",
        "2026/1Ç": "10 Milyar TL"
      }
    },
    {
      "kalem": "Özkaynaklar",
      "donemler": {
        "2024": "21 Milyar TL",
        "2025": "20 Milyar TL",
        "2026/1Ç": "19 Milyar TL"
      }
    },
    {
      "kalem": "Hasılat",
      "donemler": {
        "2024": "15 Milyar TL",
        "2025": "15 Milyar TL",
        "2026/1Ç": "2,8 Milyar TL"
      }
    },
    {
      "kalem": "Esas Faaliyet Kârı",
      "donemler": {
        "2024": "641 Milyon TL",
        "2025": "111 Milyon TL",
        "2026/1Ç": "603 Milyon TL"
      }
    },
    {
      "kalem": "Dönem Kârı / Zararı",
      "donemler": {
        "2024": "2,3 Milyar TL Kâr",
        "2025": "2,1 Milyar TL Zarar",
        "2026/1Ç": "81 Milyon TL Kâr"
      }
    }
  ],
  "finansalYorum": "Finansal görünümde Ekim Turizm’in varlık büyüklüğünün yüksek olduğu, buna karşılık borçluluk ve dönem kârı/zararı tarafında dikkatli incelenmesi gereken bir tablo bulunduğu görülüyor. 2025 yılında hasılat 15 milyar TL seviyesinde korunurken şirketin dönem zararı yazması, faaliyet dışı giderler, finansman giderleri, amortisman, araç değerlemeleri veya sektör dinamikleri açısından ayrıca analiz edilmelidir. 2026/1Ç döneminde 81 milyon TL dönem kârı görülmesi olumlu bir sinyal olsa da bu veri yalnızca üç aylık dönemi kapsar. Filo kiralama iş modelinde araç parkının finansmanı, ikinci el araç değerleri, kredi maliyetleri, bakım-sigorta giderleri ve kurumsal sözleşmeler şirket performansını doğrudan etkiler.",
  "oneCikanlar": [
    {
      "title": "Talep Tarihi",
      "value": "1-2-3 Temmuz",
      "desc": "Talep toplama çarşamba, perşembe ve cuma günleri 09.00-17.00 saatleri arasında yapılacaktır."
    },
    {
      "title": "Halka Arz Fiyatı",
      "value": "30,26 TL",
      "desc": "Halka arz fiyatında %20 iskonto bilgisi yer almaktadır."
    },
    {
      "title": "Bireysel Tahsisat",
      "value": "%70",
      "desc": "Yurt içi bireysel yatırımcıya 113.400.000 lot ayrılmıştır."
    },
    {
      "title": "Katılım Endeksi",
      "value": "Uygun Değil",
      "desc": "Ekim Turizm halka arzı katılım endeksine uygun değildir."
    }
  ],
  "tahsisat": [
    {
      "grup": "Yurt İçi Bireysel",
      "oran": "%70",
      "lot": "113.400.000 Lot",
      "dagitim": "Bireysele eşit dağıtım",
    },
    {
      "grup": "Yüksek Başvurulu",
      "oran": "%10",
      "lot": "16.200.000 Lot",
      "dagitim": "Talebe göre paylaşım",
    },
    {
      "grup": "Yurt İçi Kurumsal",
      "oran": "%20",
      "lot": "32.400.000 Lot"
    }
  ],
  "tahsisatNotlari": [
    "Talep toplama tarihleri 1-2-3 Temmuz 2026 olarak açıklanmıştır.",
    "Talep toplama çarşamba, perşembe ve cuma günleri 09.00-17.00 saatleri arasında yapılacaktır.",
    "Ekim Turizm halka arzı katılım endeksine uygun değildir.",
    "Yurt içi bireysel yatırımcı grubunda 25.000 lot ve altı başvurular için eşit dağıtım uygulanacaktır.",
    "Yüksek başvurulu yatırımcı grubunda 25.001 lot ve üzeri başvurular için talebe göre paylaşım uygulanacaktır.",
    "T1-T2 bakiye kullanımına uygun değildir."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "Ortak satışının %85'i ile 15 gün boyunca fiyat istikrarı sağlayıcı işlemler planlanmaktadır.",
    "satmamaTaahhudu": "1 yıl ihraççı, 1 yıl ortaklar.",
    "halkaAciklik": "%19,47."
  },
  "sirketHakkinda": "Ekim Turizm Ticaret ve Sanayi A.Ş., Intercity markasıyla araç kiralama sektöründe faaliyet gösteren, operasyonel filo kiralama ve kurumsal ulaşım hizmetleri sunan bir şirkettir. Şirketin tescilli markası Intercity’dir. Ana faaliyet alanı operasyonel filo kiralamadır. Merkez adresi Cevizli Mahallesi, Tugay Yolu Caddesi, No:69A İç Kapı No:171-174, Maltepe / İstanbul’dur. Büyük Mükellefler Vergi Dairesi’ne bağlı vergi numarası 3280341070, MERSİS numarası 0328034107000019 ve İstanbul Ticaret Sicil numarası 283629 olarak paylaşılmıştır. Filo kiralama sektöründe şirket performansı; araç filosunun büyüklüğü, araç alım maliyetleri, ikinci el satış değerleri, finansman maliyetleri, kurumsal müşteri portföyü, bakım giderleri ve sözleşme vadeleriyle yakından ilişkilidir. Bu nedenle Ekim Turizm halka arzı değerlendirilirken finansal verilerin yanında araç filosu, kredi borçları, yeni araç alım planı, ikinci el araç piyasası, operasyonel kiralama talebi ve fiyat istikrarı yapısı birlikte ele alınmalıdır.",
  "eksikBilgiNotu": "Borsada işlem görmeye başlama tarihi ve kesin dağıtım sonuçları resmi açıklamalar geldikçe güncellenmelidir.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan ilk onaylı izahname verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.",
  "sermayeBilgileri": [
    {
      "label": "Mevcut Sermaye",
      "value": "700.000.000 TL"
    },
    {
      "label": "Yeni Sermaye",
      "value": "832.000.000 TL"
    },
    {
      "label": "Sermaye Artırımı",
      "value": "132.000.000 Lot"
    },
    {
      "label": "Mevcut Pay Satışı",
      "value": "30.000.000 Lot"
    },
    {
      "label": "Arz Büyüklüğü",
      "value": "4.902.120.000 TL"
    },
    {
      "label": "Satış Fiyatı",
      "value": "30,26 TL"
    },
    {
      "label": "Talep Toplama Tarihi",
      "value": "1-2-3 Temmuz 2026"
    },
    {
      "label": "Katılım Endeksi",
      "value": "Uygun Değil"
    }
  ],
  "satisYontemi": [
    "Sabit fiyatla talep toplama"
  ]
};

const canonical =
  veri.seo?.canonical ||
  "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san";
const seoMetinleri = halkaArzSeoMetinleri(veri, "onayli");

export const metadata: Metadata = {
  title: { absolute: seoMetinleri.title },
  description: seoMetinleri.description,
  alternates: {
    canonical,
  },
  robots: veri.seo?.robots,
  openGraph: {
    title: veri.baslikMeta.title,
    description: veri.baslikMeta.description,
    url: canonical,
  },
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

export default function EkimTurizmPage() {
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
                    yatirimciSayisi: "706.837",
                    planlananTahsisat: "113.400.000 Lot",
                    talep: "85.748.972 Lot",
                    dagitim: "85.677.956 Lot",
                    dagitimOrani: "%52,89",
                    talepKati: "0,76 kat",
                  },
                  {
                    kategori: "Yüksek Talepte Bulunacak Yatırımcılar",
                    yatirimciSayisi: "923",
                    planlananTahsisat: "16.200.000 Lot",
                    talep: "83.505.446 Lot",
                    dagitim: "43.922.044 Lot",
                    dagitimOrani: "%27,11",
                    talepKati: "5,15 kat",
                  },
                  {
                    kategori: "Yurt İçi Kurumsal Yatırımcılar",
                    yatirimciSayisi: "91",
                    planlananTahsisat: "32.400.000 Lot",
                    talep: "88.109.017 Lot",
                    dagitim: "32.400.000 Lot",
                    dagitimOrani: "%20,00",
                    talepKati: "2,72 kat",
                  },
                  {
                    kategori: "Toplam",
                    yatirimciSayisi: "707.851",
                    planlananTahsisat: "162.000.000 Lot",
                    talep: "257.363.435 Lot",
                    dagitim: "162.000.000 Lot",
                    dagitimOrani: "%100,00",
                    talepKati: "1,59 kat",
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

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-slate-900">YouTube Videoları</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative w-full overflow-hidden pt-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.youtube.com/embed/uIECMK5tajA"
                  title="Ekim Turizm Ticaret ve Sanayi A.Ş. Intercity YouTube Videosu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative w-full overflow-hidden pt-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.youtube.com/embed/eSLZDBkZ5tQ"
                  title="Ekim Turizm halka arz short videosu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
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

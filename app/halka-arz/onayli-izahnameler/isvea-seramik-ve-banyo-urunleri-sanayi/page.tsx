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
  "slug": "isvea-seramik-ve-banyo-urunleri-sanayi",
  "sirketAdi": "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.",
  "seo": {
    "canonical": "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi",
    "robots": {
      "index": true,
      "follow": true
    },
    "sitemap": true,
    "contentStatus": "onayli"
  },
  "baslikMeta": {
    "title": "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş. onaylı izahname bilgileri, 20,90 TL halka arz fiyatı, %27,03 iskonto oranı, 67.000.000 lot toplam pay, 1.400.300.000 TL arz büyüklüğü ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "1-2-3 Temmuz 2026",
    "fiyatAralik": "20,90 TL - %27,03 İskonto",
    "dagitimYontemi": "Bireysele Eşit Dağıtım",
    "pay": "67.000.000 Lot",
    "araciKurum": "Halk Yatırım & Ahlatcı Yatırım",
    "pazar": "Yıldız Pazar",
    "bistKodu": "ISVEA",
    "katilimEndeksi": "Katılım Endeksine Uygun Değil"
  },
  "toplamPay": "67.000.000",
  "halkaAciklikOrani": "%23,93",
  "halkaArzSekli": [
    "Sermaye Artırımı: 60.000.000 Lot",
    "Ortak Satışı: 7.000.000 Lot"
  ],
  "fonKullanim": [
    "%20-30 Sürdürülebilirlik ilkeleri çerçevesinde makine ve ekipman yatırımları",
    "%15-25 Finansal borçluluğun azaltılması",
    "%15-25 Büyümenin finansmanı / işletme sermayesi",
    "%10-15 Kiralama yoluyla elde edilen makine ve teçhizatların satın alma yatırımları",
    "%10-15 Öztüketime yönelik yenilenebilir enerji yatırımları"
  ],
  "fonKullanimYorumu": "İsvea Seramik halka arzında kaynak kullanım planı üretim altyapısını güçlendirme, borçluluğu azaltma ve büyümeyi finanse etme başlıklarında toplanmaktadır. Fonun en büyük bölümü sürdürülebilirlik ilkeleri çerçevesinde makine ve ekipman yatırımlarına ayrılırken, finansal borçların azaltılması bilanço üzerindeki faiz yükünü hafifletebilir. İşletme sermayesi şirketin hammadde, stok, üretim sürekliliği, ihracat ve tahsilat döngüsü için önem taşır. Kiralama yoluyla kullanılan makine ve teçhizatların satın alınması ile öztüketime yönelik yenilenebilir enerji yatırımları ise üretim maliyetleri ve verimlilik tarafında takip edilmesi gereken başlıklardır. Halka arzda 60.000.000 lot sermaye artırımı ve 7.000.000 lot ortak satışı bulunduğu için şirket kasasına girecek kaynak ile ortak satışından doğacak tutar ayrı değerlendirilmelidir.",
  "finansalDonemler": [
    "2024",
    "2025",
    "2026/1Ç"
  ],
  "finansalVeriler": [
    {
      "kalem": "Dönen Varlıklar",
      "donemler": {
        "2024": "4,3 Milyar TL",
        "2025": "3,3 Milyar TL",
        "2026/1Ç": "3,2 Milyar TL"
      }
    },
    {
      "kalem": "Duran Varlıklar",
      "donemler": {
        "2024": "1,1 Milyar TL",
        "2025": "1,2 Milyar TL",
        "2026/1Ç": "1,2 Milyar TL"
      }
    },
    {
      "kalem": "Toplam Varlıklar",
      "donemler": {
        "2024": "4,1 Milyar TL",
        "2025": "4,5 Milyar TL",
        "2026/1Ç": "4,4 Milyar TL"
      }
    },
    {
      "kalem": "Kısa Vadeli Yükümlülükler",
      "donemler": {
        "2024": "1,9 Milyar TL",
        "2025": "2,4 Milyar TL",
        "2026/1Ç": "2,3 Milyar TL"
      }
    },
    {
      "kalem": "Uzun Vadeli Yükümlülükler",
      "donemler": {
        "2024": "897 Milyon TL",
        "2025": "669 Milyon TL",
        "2026/1Ç": "603 Milyon TL"
      }
    },
    {
      "kalem": "Özkaynaklar",
      "donemler": {
        "2024": "1,3 Milyar TL",
        "2025": "1,4 Milyar TL",
        "2026/1Ç": "1,4 Milyar TL"
      }
    },
    {
      "kalem": "Hasılat",
      "donemler": {
        "2024": "2,7 Milyar TL",
        "2025": "2,3 Milyar TL",
        "2026/1Ç": "584 Milyon TL"
      }
    },
    {
      "kalem": "Esas Faaliyet Kârı",
      "donemler": {
        "2024": "642 Milyon TL",
        "2025": "676 Milyon TL",
        "2026/1Ç": "140 Milyon TL"
      }
    },
    {
      "kalem": "Net Dönem Kârı",
      "donemler": {
        "2024": "93 Milyon TL",
        "2025": "79 Milyon TL",
        "2026/1Ç": "32 Milyon TL"
      }
    }
  ],
  "finansalYorum": "Finansal görünümde 2024, 2025 ve 2026 birinci çeyrek verileri birlikte incelendiğinde şirketin varlık yapısı, borçluluk seviyesi ve kârlılık eğilimi ayrı ayrı takip edilmelidir. Hasılat 2025 yılında 2024’e göre gerilerken, esas faaliyet kârının artması operasyonel verimlilik ve maliyet yönetimi açısından dikkat çekmektedir. Net dönem kârı ise 2024’te 93 milyon TL, 2025’te 79 milyon TL ve 2026 birinci çeyrekte 32 milyon TL olarak açıklanmıştır. Seramik ve banyo ürünleri sektöründe enerji maliyetleri, hammadde fiyatları, kapasite kullanımı, ihracat pazarları, finansman giderleri ve kur hareketleri sonuçlar üzerinde belirleyici olabilir. Bu nedenle İsvea Seramik değerlendirilirken yalnızca halka arz büyüklüğü veya hasılat değil; özkaynak yapısı, kısa ve uzun vadeli yükümlülükler, faaliyet kârı, net kâr ve planlanan yatırımlar birlikte okunmalıdır.",
  "oneCikanlar": [
    {
      "title": "Talep Tarihi",
      "value": "1-2-3 Temmuz",
      "desc": "Talep toplama çarşamba, perşembe ve cuma günleri yapılacaktır."
    },
    {
      "title": "Halka Arz Fiyatı",
      "value": "20,90 TL",
      "desc": "1 TL nominal değerli paylar 20,90 TL sabit fiyatla, %27,03 iskonto oranıyla satışa sunulacaktır."
    },
    {
      "title": "Bireysel Tahsisat",
      "value": "%60",
      "desc": "Yurt içi bireysel yatırımcılar için 40.200.000 lot tahsis edilmiştir."
    },
    {
      "title": "Katılım Endeksi",
      "value": "Uygun Değil",
      "desc": "Katılım endeksine uygun değildir."
    }
  ],
  "tahsisat": [
    {
      "grup": "Yurt İçi Bireysel",
      "oran": "%60",
      "lot": "40.200.000 Lot",
      "dagitim": "Eşit Dağıtım"
    },
    {
      "grup": "Yurt İçi Kurumsal",
      "oran": "%40",
      "lot": "26.800.000 Lot"
    }
  ],
  "tahsisatNotlari": [
    "Talep toplama 1-2-3 Temmuz 2026 tarihlerinde, çarşamba-perşembe-cuma günleri yapılacaktır.",
    "Dağıtım şekli bireysele eşit dağıtım olarak açıklanmıştır.",
    "Katılım endeksine uygun değildir.",
    "T1-T2 bakiye kullanımına uygun değildir."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "Brüt halka arz gelirinin %20’si ile 30 gün boyunca fiyat istikrarı sağlayıcı işlemler planlanmaktadır.",
    "satmamaTaahhudu": "1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapılmayacağı, dolaşımdaki payların artmasına sebep olacak şekilde satışa ve halka arza konu edilmeyeceği; şirket ortakları tarafından 1 yıl boyunca halka arz fiyatının altında satış yapılmayacağı ve pay satılmayacağı taahhüt edilmiştir.",
    "halkaAciklik": "%23,93."
  },
  "sirketHakkinda": "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş., 1962 yılında İtalya’da Angelucci ailesi tarafından kurulan ve 2013 yılında Ece Holding bünyesine katılan, banyo ve vitrifiye seramik ürünleri alanında faaliyet gösteren bir üreticidir. Şirket; tasarım odaklı İtalyan banyo kültürü anlayışını Türkiye’deki üretim gücüyle birleştirerek küresel ölçekte hizmet vermektedir. Ana merkez ve fabrika lokasyonu Çorum Organize Sanayi Bölgesi olarak belirtilmiştir. Şirketin vitrifiye seramik banyo gereçleri ve banyo mobilyaları sektöründe faaliyet gösterdiği, dünyanın büyük vitrifiye üreticilerinden biri konumunda olduğu ve 63 ülkeye ihracat yaptığı paylaşılmıştır. Ürün grupları arasında klozetler, rezervuarlar, lavabolar, pisuvarlar, bide grupları, gömme rezervuarlar, akrilik duş tekneleri, eviyeler, klozet kapakları ve banyo dolapları yer almaktadır. Fabrika adresi Pınarçayosb Mevkii, Organize Sanayi 6. Cadde No:1-7/2 Kat:2 Merkez / Çorum’dur. Çağrı merkezi 444 9 323, e-posta adresi info@isveabagno.it olarak belirtilmiştir. Seramik sektöründe şirket performansı; ihracat pazarı çeşitliliği, enerji maliyetleri, üretim kapasitesi, marka değeri, tasarım gücü, hammadde maliyetleri ve finansal borçlulukla yakından ilişkilidir.",
  "eksikBilgiNotu": "Talep toplama tarihi ve tahsisat oranları gibi henüz kesinleşmeyen alanlar resmi duyurular geldikçe güncellenmelidir.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan ilk onaylı izahname verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.",
  "bistKodu": "ISVEA",
  "sermayeBilgileri": [
    {
      "label": "Mevcut Sermaye",
      "value": "220.000.000 TL"
    },
    {
      "label": "Yeni Sermaye",
      "value": "280.000.000 TL"
    },
    {
      "label": "Sermaye Artırımı",
      "value": "60.000.000 Lot"
    },
    {
      "label": "Mevcut Pay Satışı",
      "value": "7.000.000 Lot"
    },
    {
      "label": "Ek Pay Satışı",
      "value": "-"
    },
    {
      "label": "Satış Fiyatı",
      "value": "20,90 TL - %27,03 İskonto"
    },
    {
      "label": "Arz Büyüklüğü",
      "value": "1.400.300.000 TL"
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
    "Sabit fiyatla talep toplama",
    "Bireysele eşit dağıtım",
    "T1 ve T2 bakiye kullanılamaz"
  ]
};

export const metadata: Metadata = {
  title: veri.baslikMeta.title,
  description: veri.baslikMeta.description,
  alternates: {
    canonical: veri.seo?.canonical || "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi",
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

export default function IsveaSeramikPage() {
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


        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">
              İsvea Seramik Halka Arz Video İncelemesi
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
                  src="https://www.youtube.com/embed/OezGIgDxbwY"
                  title="İsvea Seramik Halka Arz Video İncelemesi"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  İsvea Seramik Halka Arz Video İncelemesi
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/J1SDQIbV_qE"
                  title="İsvea Seramik Halka Arz Değerlendirme Videosu"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  İsvea Seramik Halka Arz Değerlendirme Videosu
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

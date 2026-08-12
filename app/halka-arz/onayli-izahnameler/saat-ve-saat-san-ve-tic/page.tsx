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
  slug: "saat-ve-saat-san-ve-tic",
  sirketAdi: "Saat ve Saat San. ve Tic. A.Ş.",
  seo: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/saat-ve-saat-san-ve-tic",
    robots: {
      index: true,
      follow: true,
    },
    sitemap: true,
    contentStatus: "onayli",
  },
  baslikMeta: {
    title:
      "Saat ve Saat San. ve Tic. A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    description:
      "Saat ve Saat San. ve Tic. A.Ş. halka arz fiyatı, talep toplama tarihleri, dağıtım sonuçları, talep katları, toplam lot, tahsisat, fon kullanım planı ve finansal görünüm.",
  },
  ozet: {
    halkaArzTarihi:
      "6-7-8 Temmuz 2026 (Pazartesi-Salı-Çarşamba, 09.00-17.00)",
    fiyatAralik: "56,00 TL (%37,01 iskonto)",
    dagitimYontemi: "Bireysele eşit dağıtım",
    pay: "66.944.955 Lot",
    araciKurum:
      "Halk Yatırım Menkul Değerler A.Ş. / Garanti Yatırım Menkul Kıymetler A.Ş.",
    pazar: "Yıldız Pazar",
    bistKodu: "SSAAT",
  },
  toplamPay: "66.944.955 Lot",
  bistKodu: "SSAAT",
  halkaAciklikOrani: "%10,14",
  halkaArzSekli: [
    "Sermaye Artırımı: 40.166.973 Lot",
    "Ortak Satışı: 26.777.982 Lot",
    "Toplam Dağıtılan Pay: 66.944.955 Lot",
  ],
  fonKullanim: [
    "%80 İşletme sermayesi",
    "%20 Finansal borçların ödenmesi",
  ],
  fonKullanimYorumu:
    "Saat ve Saat halka arzında şirket kasasına girecek kaynak ağırlıklı olarak işletme sermayesi ihtiyacı için planlanmıştır. Bu kaynak stok yönetimi, ithalat süreçleri, mağaza operasyonları, bayi kanalı ve e-ticaret faaliyetlerinde kullanılacaktır. Finansal borçların ödenmesine ayrılan bölümün ise borçluluk ve finansman giderleri üzerinde destekleyici etki oluşturması beklenebilir.",
  finansalDonemler: ["2024", "2025", "2026/1Ç"],
  finansalVeriler: [
    {
      kalem: "Dönen Varlıklar",
      donemler: {
        "2024": "7,3 Milyar TL",
        "2025": "7,9 Milyar TL",
        "2026/1Ç": "8,0 Milyar TL",
      },
    },
    {
      kalem: "Duran Varlıklar",
      donemler: {
        "2024": "1,5 Milyar TL",
        "2025": "1,4 Milyar TL",
        "2026/1Ç": "1,4 Milyar TL",
      },
    },
    {
      kalem: "Toplam Varlıklar",
      donemler: {
        "2024": "8,8 Milyar TL",
        "2025": "9,4 Milyar TL",
        "2026/1Ç": "9,4 Milyar TL",
      },
    },
    {
      kalem: "Kısa Vadeli Yükümlülükler",
      donemler: {
        "2024": "4,8 Milyar TL",
        "2025": "5,1 Milyar TL",
        "2026/1Ç": "5,3 Milyar TL",
      },
    },
    {
      kalem: "Uzun Vadeli Yükümlülükler",
      donemler: {
        "2024": "578 Milyon TL",
        "2025": "532 Milyon TL",
        "2026/1Ç": "549 Milyon TL",
      },
    },
    {
      kalem: "Özkaynaklar",
      donemler: {
        "2024": "3,3 Milyar TL",
        "2025": "3,7 Milyar TL",
        "2026/1Ç": "3,5 Milyar TL",
      },
    },
    {
      kalem: "Hasılat",
      donemler: {
        "2024": "11,5 Milyar TL",
        "2025": "13,0 Milyar TL",
        "2026/1Ç": "3,3 Milyar TL",
      },
    },
    {
      kalem: "Esas Faaliyet Kârı",
      donemler: {
        "2024": "3,5 Milyar TL",
        "2025": "3,5 Milyar TL",
        "2026/1Ç": "763 Milyon TL",
      },
    },
    {
      kalem: "Net Dönem Kârı",
      donemler: {
        "2024": "1,2 Milyar TL",
        "2025": "1,5 Milyar TL",
        "2026/1Ç": "254 Milyon TL",
      },
    },
  ],
  finansalYorum:
    "Finansal görünümde 2024-2025 döneminde hasılatın 11,5 milyar TL'den 13,0 milyar TL'ye, net dönem kârının ise 1,2 milyar TL'den 1,5 milyar TL'ye yükseldiği görülüyor. 2026 ilk çeyrekte 3,3 milyar TL hasılat ve 254 milyon TL net dönem kârı açıklanmıştır. Kısa vadeli yükümlülüklerin yükselmesi nedeniyle işletme sermayesi, stok finansmanı, nakit akışı ve borçluluk görünümü birlikte takip edilmelidir.",
  oneCikanlar: [
    {
      title: "Halka Arz Fiyatı",
      value: "56,00 TL",
      desc: "Paylar 56,00 TL sabit fiyatla satışa sunulmuştur.",
    },
    {
      title: "Toplam Dağıtım",
      value: "66.944.955 Lot",
      desc: "Halka arzda toplam 66.944.955 lot dağıtılmıştır.",
    },
    {
      title: "Toplam Talep",
      value: "104.332.568 Lot",
      desc: "Toplam talep halka arz büyüklüğünün 1,56 katına ulaşmıştır.",
    },
    {
      title: "Yatırımcı Sayısı",
      value: "693.138",
      desc: "Dağıtım yapılan toplam yatırımcı sayısıdır.",
    },
  ],
  tahsisat: [
    {
      grup: "Yurt İçi Bireysel Yatırımcı",
      oran: "%60",
      lot: "40.166.973 Lot",
    },
    {
      grup: "Yurt İçi Kurumsal Yatırımcı",
      oran: "%40",
      lot: "26.777.982 Lot",
    },
  ],
  tahsisatNotlari: [
    "Yurt içi bireysel yatırımcılardan 71.605.578 lot talep gelmiş ve 40.166.973 lot dağıtılmıştır.",
    "Yurt içi kurumsal yatırımcılardan 32.726.990 lot talep gelmiş ve 26.777.982 lot dağıtılmıştır.",
    "Toplam 104.332.568 lot talebe karşılık 66.944.955 lot dağıtılmıştır.",
  ],
  taahhutOzeti: {
    fiyatIstikrari:
      "Brüt halka arz gelirinin %20'si ile 30 gün boyunca fiyat istikrarı sağlayıcı işlemler planlanmıştır.",
    satmamaTaahhudu:
      "Şirket ve ortaklar için izahnamede yer alan satmama taahhütleri geçerlidir.",
    halkaAciklik: "%10,14.",
  },
  sirketHakkinda:
    "Saat ve Saat San. ve Tic. A.Ş., saat ve aksesuar perakendeciliği, distribütörlüğü, toptan satışı ve e-ticaret alanlarında faaliyet göstermektedir. Şirketin performansı marka portföyü, mağaza ve bayi ağı, e-ticaret kanalları, tüketici talebi, stok yönetimi, döviz kuru ve ithalat maliyetleriyle yakından ilişkilidir.",
  eksikBilgiNotu:
    "Dağıtım sonuçları ve talep katları açıklanan sonuç tablosuna göre güncellenmiştir.",
  yasalUyari:
    "Bu sayfadaki bilgiler genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir. Güncel KAP açıklamaları ve halka arz belgeleri kontrol edilmelidir.",
  sermayeBilgileri: [
    {
      label: "Mevcut Sermaye",
      value: "620.222.018 TL",
    },
    {
      label: "Yeni Sermaye",
      value: "660.388.991 TL",
    },
    {
      label: "Sermaye Artırımı",
      value: "40.166.973 Lot",
    },
    {
      label: "Ortak Satışı",
      value: "26.777.982 Lot",
    },
    {
      label: "Halka Arz Fiyatı",
      value: "56,00 TL",
    },
    {
      label: "Halka Arz Büyüklüğü",
      value: "3.748.917.480 TL",
    },
  ],
};

const canonical =
  veri.seo?.canonical ||
  "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/saat-ve-saat-san-ve-tic";
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


type TalepSonucuSatiri = {
  kategori: string;
  yatirimciSayisi: string;
  planlananTahsisat: string;
  talep: string;
  dagitim: string;
  dagitimOrani: string;
  talepKati: string;
};

const talepSonuclari: TalepSonucuSatiri[] = [
  {
    kategori: "Yurt İçi Bireysel Yatırımcılar",
    yatirimciSayisi: "693.013",
    planlananTahsisat: "40.166.973 Lot",
    talep: "71.605.578 Lot",
    dagitim: "40.166.973 Lot",
    dagitimOrani: "%60,00",
    talepKati: "1,78 kat",
  },
  {
    kategori: "Yurt İçi Kurumsal Yatırımcılar",
    yatirimciSayisi: "125",
    planlananTahsisat: "26.777.982 Lot",
    talep: "32.726.990 Lot",
    dagitim: "26.777.982 Lot",
    dagitimOrani: "%40,00",
    talepKati: "1,22 kat",
  },
  {
    kategori: "Toplam",
    yatirimciSayisi: "693.138",
    planlananTahsisat: "66.944.955 Lot",
    talep: "104.332.568 Lot",
    dagitim: "66.944.955 Lot",
    dagitimOrani: "%100,00",
    talepKati: "1,56 kat",
  },
];

function TalepSonuclariTablosu() {
  return (
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
            {talepSonuclari.map((satir, index) => {
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
    { label: "Katılım Endeksi", value: "Uygun" },
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
      cevap: `Payların ${veri.ozet.pazar || "Borsa İstanbul tarafından açıklanacak pazarda"} işlem görmesi beklenmektedir. Payların katılım endeksine uygun olduğu açıklanmıştır.`,
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

export default function SaatVeSaatPage() {
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


        <TalepSonuclariTablosu />

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">
              Saat ve Saat Halka Arz Video İncelemesi
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
                  src="https://www.youtube.com/embed/vMJymsVk9Ys"
                  title="Saat ve Saat Halka Arz Video İncelemesi"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Saat ve Saat Halka Arz Video İncelemesi
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

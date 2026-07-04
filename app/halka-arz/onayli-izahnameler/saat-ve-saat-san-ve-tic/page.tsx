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
      "Saat ve Saat San. ve Tic. A.Ş. halka arzında talep toplama tarihleri 6-7-8 Temmuz 2026 olarak açıklandı. 56,00 TL fiyat, bireysele eşit dağıtım, %60 bireysel tahsisat, %12,16 halka açıklık ve 4,49 milyar TL arz büyüklüğü detayları.",
  },
  ozet: {
    halkaArzTarihi: "6-7-8 Temmuz 2026\nPazartesi-Salı-Çarşamba\n09.00-17.00",
    fiyatAralik: "56,00 TL (%37,01 iskonto)",
    dagitimYontemi: "Bireysele Eşit Dağıtım\nT1-T2 bakiye kullanılamaz",
    pay: "80.333.946 Lot (ek satış dahil)",
    araciKurum:
      "Halk Yatırım Menkul Değerler A.Ş.\nGaranti Yatırım Menkul Kıymetler A.Ş.",
    pazar: "Yıldız Pazar",
    bistKodu: "SSAAT",
  },
  toplamPay: "80.333.946 Lot",
  bistKodu: "SSAAT",
  halkaAciklikOrani: "%12,16",
  halkaArzSekli: [
    "Sermaye Artırımı: 40.166.973 Lot",
    "Ortak Satışı: 26.777.982 Lot",
    "Ek Satış: 13.388.991 Lot",
    "Toplam Dağıtılacak Pay: 80.333.946 Lot",
  ],
  fonKullanim: ["%80 İşletme sermayesi", "%20 Finansal borçların ödenmesi"],
  fonKullanimYorumu:
    "Saat ve Saat halka arzında şirket kasasına girecek kaynak ağırlıklı olarak işletme sermayesi ihtiyacı için planlanmıştır. Bu kalem; stok yönetimi, ithalat süreçleri, mağaza operasyonları, bayi kanalı, e-ticaret ve pazar yeri satışlarında ürün sürekliliği açısından önem taşır. Fonun kalan kısmının finansal borçların ödenmesine ayrılması ise borçluluk ve finansman giderleri üzerinde destekleyici etki yaratabilir. Halka arzda sermaye artırımı ile birlikte ortak satışı ve ek satış da bulunduğu için, şirket kasasına girecek tutar ile ortak satışından kaynaklanan tutar ayrı değerlendirilmelidir.",
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
    "Finansal görünümde 2024-2025 döneminde hasılatın 11,5 milyar TL’den 13,0 milyar TL’ye yükseldiği, net dönem kârının ise 1,2 milyar TL’den 1,5 milyar TL’ye çıktığı görülüyor. 2026 ilk çeyrekte 3,3 milyar TL hasılat ve 254 milyon TL net dönem kârı açıklanmıştır. Varlık tarafında toplam varlıkların 2025 ve 2026 ilk çeyrekte 9,4 milyar TL seviyesinde kaldığı, kısa vadeli yükümlülüklerin ise 5,3 milyar TL’ye yükseldiği izlenmektedir. Bu nedenle şirketin büyüme performansı değerlendirilirken hasılat ve kârlılıkla birlikte kısa vadeli yükümlülükler, stok finansmanı, işletme sermayesi ihtiyacı, nakit akışı ve finansal borçların seyri birlikte takip edilmelidir.",
  oneCikanlar: [
    {
      title: "Halka Arz Fiyatı",
      value: "56,00 TL",
      desc: "1 TL nominal değerli paylar 56,00 TL sabit fiyat ve %37,01 iskonto oranı ile satışa sunulacaktır.",
    },
    {
      title: "Toplam Pay",
      value: "80.333.946 Lot",
      desc: "40.166.973 lot sermaye artırımı, 26.777.982 lot ortak satışı ve 13.388.991 lot ek satıştan oluşur.",
    },
    {
      title: "Halka Açıklık",
      value: "%12,16",
      desc: "Ek satış dahil halka açıklık oranı %12,16 olarak açıklanmıştır.",
    },
    {
      title: "T1-T2 Kullanımı",
      value: "Kullanılamaz",
      desc: "T1-T2 bakiye kullanımına uygun değildir.",
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
    "Talep toplama tarihleri 6-7-8 Temmuz 2026 Pazartesi-Salı-Çarşamba, 09.00-17.00 saatleri arasında açıklanmıştır.",
    "Halka arz fiyatı 56,00 TL ve iskonto oranı %37,01 olarak açıklanmıştır.",
    "Bireysel yatırımcı tarafında bireysele eşit dağıtım yöntemi uygulanacaktır.",
    "T1-T2 bakiye kullanımına uygun değildir.",
    "Yurt içi bireysel yatırımcılara %60 oranla 40.166.973 lot tahsis edilmiştir.",
    "Yurt içi kurumsal yatırımcılara %40 oranla 26.777.982 lot tahsis edilmiştir.",
    "Ek satış tutarı 13.388.991 lot olarak açıklanmıştır.",
    "Ek satış dahil toplam dağıtılacak pay 80.333.946 lot olarak belirtilmiştir.",
    "Katılım endeksine uygun olduğu açıklanmıştır.",
  ],
  taahhutOzeti: {
    fiyatIstikrari:
      "Brüt halka arz gelirinin %20’si ile 30 gün boyunca fiyat istikrarı sağlayıcı işlemler planlanmaktadır.",
    satmamaTaahhudu:
      "1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapılmayacağı, dolaşımdaki payların artmasına sebep olacak şekilde satışa veya halka arza konu edilmeyeceği; pay sahibi ortakların da 1 yıl boyunca halka arz fiyatının altında pay satışı yapmayacağı ve pay satmayacağı taahhüt edilmiştir.",
    halkaAciklik: "%12,16.",
  },
  sirketHakkinda:
    "Saat ve Saat San. ve Tic. A.Ş., 1994 yılında kurulan ve Türkiye’de saat ile aksesuar perakendeciliği, distribütörlüğü ve toptan satışı alanında faaliyet gösteren bir şirkettir. Şirketin sektördeki kökenlerinin 1971 yılına dayandığı paylaşılmıştır. Resmi unvanı Saat ve Saat Sanayi ve Ticaret A.Ş. olarak belirtilmiştir. CEO / yönetim tarafında Ramazan Kaya ismi öne çıkmaktadır. Şirketin merkez adresi Büyükdere Caddesi, Noramin İş Merkezi No:237/D Kat:B2, Maslak, Sarıyer / İstanbul’dur. İletişim numarası +90 212 232 72 28 olarak paylaşılmıştır. Türkiye genelinde 170’ten fazla mağaza, 600’ün üzerinde bayi ve zincir mağaza satış noktası bulunduğu; Türkiye dahil 45 ülkeyi kapsayan geniş bir dağıtım ağına sahip olduğu belirtilmiştir. Şirket kendi e-ticaret platformunun yanı sıra popüler pazar yerlerinde de aktif satış yapmaktadır. Saat ve Saat’in bağlı olduğu HRK Holding’in, Aydınlı Hazır Giyim Grubu’nu satın alarak U.S. Polo Assn., Pierre Cardin ve Cacharel gibi markaları bünyesine kattığı bilgisi paylaşılmıştır. Saat, aksesuar, distribütörlük ve perakende sektöründe şirket performansı; marka portföyü, mağaza ağı, e-ticaret kanalları, tüketici talebi, stok yönetimi, döviz kuru, ithalat maliyetleri ve yeni grup yatırımlarının entegrasyonuyla yakından ilişkilidir.",
  eksikBilgiNotu:
    "Halka arz fiyatı (56,00 TL), %37,01 iskonto oranı, talep toplama saatleri, bireysele eşit dağıtım yöntemi, T1-T2 kullanılamaması, tahsisat oranları, tahsisat lotları, sermaye artırımı, ortak satışı, ek satış, fon kullanım oranları, finansal veriler ve taahhüt bilgileri görseldeki onaylı halka arz tablo verilerine göre güncellenmiştir. 2026/1Ç finansal verileri üç aylık dönemi kapsadığı için tam yıl verileriyle doğrudan kıyaslanmamalıdır. Halka arzda sermaye artırımı ve ortak satışları birlikte bulunduğu için şirket kasasına yalnızca sermaye artırımı kaynaklı bölümün gireceği unutulmamalıdır.",
  yasalUyari:
    "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan onaylı izahname/halka arz tablo verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir. Kesinleşmemiş alanlar için güncel izahname ve tasarruf sahiplerine satış duyurusu kontrol edilmelidir.",
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
      label: "Sermaye Artırımı (Bedelli)",
      value: "40.166.973 Lot",
    },
    {
      label: "Sermaye Artırımı (Bedelsiz)",
      value: "-",
    },
    {
      label: "Mevcut Pay Satışı",
      value: "26.777.982 Lot",
    },
    {
      label: "Ek Pay Satışı",
      value: "13.388.991 Lot",
    },
    {
      label: "Satış Fiyatı",
      value: "56,00 TL",
    },
    {
      label: "Katılım Endeksi",
      value: "Uygun",
    },
    {
      label: "Halka Arz Büyüklüğü",
      value: "4.498.700.976 TL",
    },
    {
      label: "Konsorsiyum Üyeleri",
      value:
        "A1 Capital, Acar, Ahlatcı, Ak Yatırım, Alnus, Alternatif, Anadolu, Ata, Bizim, Bulls, Burgan, BTC Türk, Colendi, Deniz, Destek, Dinamik, Fiba, Gedik, Global, ICBC, ING, Investaz, İntegral, İnfo, İş Yatırım, Kuveyt Türk, Marbaş, Meksa, Osmanlı, Oyak, PhillipCapital, Pusula, Piramit, QNB, Şeker, Tacirler, TEB, Tera, Turkish, Ünlü, Vakıf, Yapı Kredi, Yatırım Finansman, Ziraat Yatırım",
    },
  ],
};

export const metadata: Metadata = {
  title: veri.baslikMeta.title,
  description: veri.baslikMeta.description,
  alternates: {
    canonical:
      veri.seo?.canonical ||
      "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/saat-ve-saat-san-ve-tic",
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
    { label: "Katılım Endeksi", value: "Uygun" },
    { label: "Pazar", value: o.pazar || "" },
    { label: "Aracı Kurum", value: o.araciKurum || "" },
  ].filter(gorunur);
}

function tahsisatSatirlari(veri: HalkaArzVeri) {
  return veri.tahsisat
    .map(tahsisatMetni)
    .filter((item) => !bekleyenDeger(item));
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

export default function SaatVeSaatPage() {
  const summaryItems = ozetSatirlari(veri);
  const sermayeBilgileri = veri.sermayeBilgileri || [];
  const tahsisat = tahsisatSatirlari(veri);
  const donemler =
    veri.finansalDonemler && veri.finansalDonemler.length > 0
      ? veri.finansalDonemler
      : Array.from(
          new Set(veri.finansalVeriler.flatMap((r) => Object.keys(r.donemler))),
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
                  halka arz fiyatı, sermaye ve satış bilgileri, fon kullanımı ve
                  finansal görünüm
                </p>
              </div>

              {(veri.ozet.fiyatAralik ||
                veri.toplamPay ||
                veri.halkaAciklikOrani) && (
                <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                  {veri.ozet.fiyatAralik && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">
                        Halka Arz Fiyatı
                      </div>
                      <div className="mt-1 text-lg font-bold">
                        {veri.ozet.fiyatAralik}
                      </div>
                    </div>
                  )}
                  {veri.toplamPay && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Toplam Pay</div>
                      <div className="mt-1 text-lg font-bold">
                        {veri.toplamPay}
                      </div>
                    </div>
                  )}
                  {veri.halkaAciklikOrani && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Açıklık</div>
                      <div className="mt-1 text-lg font-bold">
                        {veri.halkaAciklikOrani}
                      </div>
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
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          }
                        >
                          <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                            {row.kalem}
                          </td>
                          {donemler.map((d) => (
                            <td
                              key={d}
                              className="px-4 py-4 text-sm text-slate-700"
                            >
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
                    Tahsisat oranları ve lot kırılımı kesinleştiğinde bu alan
                    güncellenecektir.
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
            <p className="text-sm leading-7 text-slate-600">
              {veri.sirketHakkinda}
            </p>
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
              description:
                "Talep toplama tarihleri, halka arz araçları ve güncel gündem.",
              type: "Halka arz",
            },
            {
              title: "Onaylı izahnameler",
              href: "/halka-arz/onayli-izahnameler",
              description:
                "SPK onayından geçen halka arz şirketlerini inceleyin.",
              type: "İzahname",
            },
            {
              title: "Halka arz kaç lot verir?",
              href: "/halka-arz/talep-hesapla",
              description:
                "Dağıtım varsayımlarına göre olası lot hesabı yapın.",
              type: "Lot hesabı",
            },
          ]}
        />
      </div>
    </main>
  );
}

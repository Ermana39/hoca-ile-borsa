import type { Metadata } from "next";
import HalkaArzKarnesi from "@/components/HalkaArzKarnesi";
import HalkaArzSSS from "@/components/HalkaArzSSS";

export const metadata: Metadata = {
  title:
    "Beta Enerji ve Teknoloji A.Ş. Halka Arz Detayları 2026 | Güncel Talep Toplama Tarihleri",
  description:
    "Beta Enerji ve Teknoloji A.Ş. halka arzında yeni talep toplama tarihleri belli oldu. BETAE halka arzı 23-24-25 Haziran 2026 tarihlerinde 40,00 TL sabit fiyatla talep toplayacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/beta-enerji-teknoloji-betae",
  },
};

export default function BetaEnerjiVeTeknolojiASPage() {
  const summaryItems = [
    { label: "Talep Toplama Tarihi", value: "23-24-25 Haziran 2026" },
    { label: "Saat", value: "09.00 - 17.00" },
    { label: "Halka Arz Fiyatı", value: "40,00 TL" },
    { label: "İskonto Oranı", value: "%20,45" },
    { label: "Toplam Halka Arz Payı", value: "60.750.000 Lot" },
    { label: "Halka Arz Büyüklüğü", value: "2.430.000.000 TL" },
    { label: "Katılım Endeksi", value: "BIST Katılım Endeksine Uygun" },
    { label: "Halka Açıklık Oranı", value: "%15" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 55.000.000 Lot",
    "Ortak Satışı: 1.955.000 Lot (Sabit Dağsuyu)",
    "Ortak Satışı: 1.897.500 Lot (Yusuf Cenç Dağsuyu)",
    "Ortak Satışı: 1.897.500 Lot (Hakkı Mert Dağsuyu)",
    "Toplam Ortak Satışı: 5.750.000 Lot",
  ];

  const sermayeBilgileri = [
    { label: "Mevcut Sermaye", value: "350.000.000 Lot" },
    { label: "Yeni Sermaye", value: "405.000.000 Lot" },
    { label: "Sermaye Artırımı", value: "55.000.000 Lot" },
    { label: "Mevcut Pay Satışı", value: "5.750.000 Lot nominal" },
  ];

  const fonKullanim = [
    "%45 Büyüme yatırımlarının finansmanı",
    "%55 İşletme sermayesi ihtiyacının karşılanması",
  ];

  const sirketBilgileri = [
    {
      label: "Faaliyet Alanı",
      value:
        "Güç transformatörleri, yağlı ve kuru tip dağıtım transformatörleri, özel sargılı transformatörler, YG anahtarlama ekipmanları ve beton köşk üretimi",
    },
    { label: "Tesis Alanı", value: "178.835 m²" },
    { label: "Konum", value: "Adana Hacı Sabancı Organize Sanayi Bölgesi" },
    { label: "Yönetim Kurulu Başkanı", value: "Sabit Dağsuyu" },
    { label: "Çalışan Sayısı", value: "600'den fazla" },
    { label: "Telefon", value: "444 71 01" },
    { label: "E-posta", value: "info@betaenerji.com" },
    {
      label: "Adres",
      value:
        "Hacı Sabancı Organize Sanayi Bölgesi Çanakkale Cd. No:11 / B Sarıçam / ADANA",
    },
  ];

  const tahsisat = [
    {
      grup: "Yurt İçi Bireysel Yatırımcı",
      oran: "%50",
      lot: "30.375.000 Lot",
      dagitim: "Bireysele Eşit Dağıtım",
      notlar: [
        "3.000 lot ve altı",
        "120.000 TL ve altı",
        "T1 ve T2 bakiye kullanılamaz",
      ],
    },
    {
      grup: "Yüksek Başvurulu Yatırımcı",
      oran: "%10",
      lot: "6.075.000 Lot",
      dagitim: "Oransal Dağıtım",
      notlar: [
        "3.001 lot ve üstü",
        "120.040 TL ve üstü",
        "T1 ve T2 bakiye kullanılamaz",
      ],
    },
    {
      grup: "Beta Grup Çalışanları",
      oran: "%1",
      lot: "607.500 Lot",
      dagitim: "Kurumsal Tahsisat",
      notlar: [],
    },
    {
      grup: "Yurt İçi Kurumsal Yatırımcı",
      oran: "%39",
      lot: "23.692.500 Lot",
      dagitim: "Kurumsal Tahsisat",
      notlar: [],
    },
  ];

  const finansalVeriler = [
    {
      grup: "Varlıklar",
      kalem: "Dönen Varlıklar",
      d2024: "3,5 Milyar TL",
      d2025: "4,5 Milyar TL",
      d2026_1c: "4,9 Milyar TL",
    },
    {
      grup: "Varlıklar",
      kalem: "Duran Varlıklar",
      d2024: "3,3 Milyar TL",
      d2025: "5,7 Milyar TL",
      d2026_1c: "6,2 Milyar TL",
    },
    {
      grup: "Varlıklar",
      kalem: "Toplam Varlıklar",
      d2024: "6,8 Milyar TL",
      d2025: "10,3 Milyar TL",
      d2026_1c: "11,1 Milyar TL",
    },
    {
      grup: "Yükümlülükler ve Özkaynak",
      kalem: "Kısa Vadeli Yükümlülükler",
      d2024: "3,3 Milyar TL",
      d2025: "4,5 Milyar TL",
      d2026_1c: "4,6 Milyar TL",
    },
    {
      grup: "Yükümlülükler ve Özkaynak",
      kalem: "Uzun Vadeli Yükümlülükler",
      d2024: "1,1 Milyar TL",
      d2025: "2,4 Milyar TL",
      d2026_1c: "3,1 Milyar TL",
    },
    {
      grup: "Yükümlülükler ve Özkaynak",
      kalem: "Özkaynaklar",
      d2024: "2,3 Milyar TL",
      d2025: "3,3 Milyar TL",
      d2026_1c: "3,4 Milyar TL",
    },
    {
      grup: "Gelir Tablosu",
      kalem: "Hasılat",
      d2024: "4,3 Milyar TL",
      d2025: "4,6 Milyar TL",
      d2026_1c: "0,7 Milyar TL",
    },
    {
      grup: "Gelir Tablosu",
      kalem: "Esas Faaliyet Kârı",
      d2024: "927 Milyon TL",
      d2025: "921 Milyon TL",
      d2026_1c: "21 Milyon TL",
    },
    {
      grup: "Gelir Tablosu",
      kalem: "Dönem Kârı",
      d2024: "42 Milyon TL",
      d2025: "1 Milyar TL",
      d2026_1c: "42 Milyon TL Kâr",
    },
  ];

  const konsorsiyumLiderleri = [
    "Türkiye Sınai Kalkınma Bankası",
    "Ziraat Yatırım",
    "Yatırım Finansman",
  ];

  const konsorsiyumUyeleri = [
    "A1 Capital",
    "Acar",
    "Ahlatcı",
    "Ak Yatırım",
    "Alnus",
    "Alternatif",
    "Anadolu",
    "Ata",
    "Bizim",
    "Bulls",
    "Burgan",
    "BTC Türk",
    "Deniz",
    "Dinamik",
    "Garanti",
    "Gedik",
    "Global",
    "Halk",
    "ICBC",
    "ING",
    "Investaz",
    "İnfo",
    "İntegral",
    "İş Yatırım",
    "Marbaş",
    "Meksa",
    "Osmanlı",
    "Oyak",
    "PhillipCapital",
    "Piramit",
    "Pusula",
    "QNB",
    "Şeker",
    "Tacirler",
    "TEB",
    "Tera",
    "Trive",
    "Turkish",
    "Ünlü",
    "Vakıf",
    "Yapı Kredi",
  ];

  const sssSorulari = [
    {
      soru: "Beta Enerji halka arzı kaç lot verir?",
      cevap:
        "Yurt içi bireysel yatırımcılara bireysele eşit dağıtım uygulanacağı için kesin lot sayısı, talep toplama kapandığında başvuran yatırımcı sayısına göre belli olacaktır. Bireysele ayrılan tahsisat 30.375.000 lottur (toplam payın %50'si). Kesin dağıtım sonuçları açıklandığında bu alan güncellenecektir.",
    },
    {
      soru: "Beta Enerji halka arzı katılım endeksine uygun mu?",
      cevap:
        "Evet. Güncel halka arz bilgilerine göre BETAE payları BIST Katılım Endeksi kriterlerine uygundur.",
    },
    {
      soru: "Beta Enerji halka arzı hangi bankalarda / aracı kurumlarda var?",
      cevap:
        "Konsorsiyum liderleri Türkiye Sınai Kalkınma Bankası, Ziraat Yatırım ve Yatırım Finansman'dır. Ayrıca Garanti, Yapı Kredi, İş Yatırım, QNB, TEB, Halk, Vakıf, Ak Yatırım, Deniz, ING ve Burgan dahil 40'ı aşkın aracı kurum konsorsiyum üyesi olarak talep toplamaktadır.",
    },
    {
      soru: "Beta Enerji halka arzı ne zaman işlem görecek?",
      cevap:
        "Talep toplama 23-24-25 Haziran 2026 tarihlerinde yapılacaktır. Borsada işlem görmeye başlama tarihi, dağıtım ve takas işlemleri tamamlandıktan sonra Borsa İstanbul tarafından açıklanacak; kesin tarih belli olduğunda bu alan güncellenecektir.",
    },
    {
      soru: "Beta Enerji halka arz fonu nerede kullanılacak?",
      cevap:
        "Halka arz gelirinin %45'i büyüme yatırımlarının finansmanında, %55'i ise işletme sermayesi ihtiyacının karşılanmasında kullanılacaktır.",
    },
    {
      soru: "Beta Enerji halka arzı eşit dağıtım mı, oransal dağıtım mı?",
      cevap:
        "İkisi birlikte uygulanır: Yurt içi bireysel yatırımcı grubunda (3.000 lot ve altı) bireysele eşit dağıtım, yüksek başvurulu yatırımcı grubunda (3.001 lot ve üstü) oransal dağıtım yapılacaktır.",
    },
  ];

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
                  Beta Enerji ve Teknoloji A.Ş. Halka Arz
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  #BETAE halka arz yeni talep toplama tarihleri, tahsisat
                  grupları ve dağıtım bilgileri
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Talep Toplama</div>
                  <div className="mt-1 text-lg font-bold">23-24-25 Haziran</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Fiyat</div>
                  <div className="mt-1 text-lg font-bold">40,00 TL</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white"
              >
                <div className="text-sm font-medium text-slate-500">
                  {item.label}
                </div>
                <div className="mt-2 whitespace-pre-line text-base font-semibold text-slate-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <HalkaArzKarnesi
          sirketAdi="Beta Enerji ve Teknoloji A.Ş."
          kod="BETAE"
          talepTarihi="23-24-25 Haziran 2026"
          halkaArzFiyati="40,00 TL"
          dagitimYontemi="Bireysele eşit / yüksek başvuruluya oransal"
          toplamPay="60.750.000 Lot"
          araciKurum={konsorsiyumLiderleri.join(", ")}
          tahsisat={tahsisat}
          katilimKurumlari={[
            ...konsorsiyumLiderleri,
            ...konsorsiyumUyeleri,
          ]}
          bireyselTahsisatLotu={30_375_000}
        />

        <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">
              Şirket Hakkında
            </h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Beta Enerji ve Teknoloji A.Ş.
            </span>
          </div>

          <p className="mb-5 text-sm leading-7 text-slate-600">
            Beta Enerji ve Teknoloji A.Ş., Adana Hacı Sabancı Organize Sanayi
            Bölgesi&apos;nde yer alan 178.835 m²&apos;lik tesisinde faaliyet gösteren;
            elektrifikasyon, transformatör üretimi ve enerji altyapı ekipmanları
            alanında çalışan sanayi şirketlerinden biridir. Şirketin üretim
            odağında güç transformatörleri, yağlı ve kuru tip dağıtım
            transformatörleri, özel sargılı transformatörler, yüksek gerilim
            anahtarlama ekipmanları ve beton köşk çözümleri yer almaktadır.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sirketBilgileri.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-sm font-medium text-slate-500">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              Kuruluştan Yapılan Açıklama
            </h2>
            <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Güncel Duyuru Özeti
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-bold text-slate-900">
                Yeni Talep Toplama Takvimi
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Daha önce ertelenen Beta Enerji halka arzında yeni talep toplama
                tarihleri 23-24-25 Haziran 2026 olarak açıklandı. Halka arz 3 iş
                günü sürecek.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-bold text-slate-900">
                Arz Yapısı ve Taahhütler
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Toplam 60.750.000 adet payın 55.000.000 adedi sermaye artırımı,
                5.750.000 adedi ortak satışı şeklinde sunulacak. Halka açıklık
                oranının yüzde 15 olması beklenirken, şirket Katılım Endeksi
                kriterlerine uygun olduğunu ve dağıtılabilir net dönem kârının
                asgari yüzde 30&apos;unu nakit temettü olarak dağıtmayı taahhüt
                ettiğini açıkladı.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-bold text-slate-900">
                Büyüme ve Yatırım Vizyonu
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Şirket, halka arz gelirini büyüme yatırımlarının finansmanı ve
                işletme sermayesinin güçlendirilmesinde kullanmayı planlıyor.
                Açıklamada yeni Beta Enerji ve Teknoloji Kampüsü, ihracat ağının
                genişletilmesi, Ar-Ge çalışmaları, dijitalleşme ve
                sürdürülebilir üretim hedefleri öne çıkarıldı.
              </p>
            </div>
          </div>

          <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950">
            Açıklamada ayrıca yeni kampüs yatırımının kapasite artışı, akıllı
            şebekelere yönelik ürün geliştirme, 80&apos;den fazla ülkeye ihracat
            deneyimi ve 2030 vizyonu kapsamında karbon emisyonunu azaltma
            hedefleriyle birlikte değerlendirildiği belirtildi.
          </p>
        </section>

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Halka Arz Şekli
                </h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Onaylı İzahname
                </span>
              </div>

              <div className="grid gap-3">
                {halkaArzSekli.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm leading-7 text-indigo-950">
                Halka arzın 55.000.000 lotluk bölümü sermaye artırımı yoluyla
                şirkete kaynak girişi sağlayacak, 5.750.000 lotluk kısmı ise
                mevcut ortak satışı olarak gerçekleşecektir. Bu yapı içinde
                ağırlığın sermaye artırımında olması, halka arz gelirinin büyük
                bölümünün şirket bünyesinde kalması açısından olumlu okunabilir;
                ancak yatırımcı tarafında ortak satışı kalemi de ayrıca dikkate
                alınmalıdır.
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Talep Toplama ve Dağıtım Detayları
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="text-sm font-semibold text-emerald-800">
                    Talep Toplama Tarihleri
                  </div>
                  <p className="mt-2 text-lg font-bold text-emerald-950">
                    23-24-25 Haziran 2026
                  </p>
                  <p className="mt-1 text-sm text-emerald-900">
                    Salı - Çarşamba - Perşembe
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">
                    Dağıtım Şekli
                  </div>
                  <p className="mt-2 text-lg font-bold text-blue-950">
                    Bireysele Eşit / Yüksek Başvurulu Oransal
                  </p>
                  <p className="mt-1 text-sm text-blue-900">
                    T1 ve T2 bakiye kullanılamaz.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">
                    Katılım Endeksi
                  </div>
                  <p className="mt-2 text-lg font-bold text-indigo-950">
                    Uygun
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="text-sm font-semibold text-amber-800">
                    Toplam Halka Arz Payı
                  </div>
                  <p className="mt-2 text-lg font-bold text-amber-950">
                    60.750.000 Lot
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Sermaye ve Satış Bilgileri
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {sermayeBilgileri.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-sm font-medium text-slate-500">
                      {item.label}
                    </div>
                    <div className="mt-2 text-base font-bold text-slate-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900">
                  SPK Bülteninde Yer Alan Bilgiler
                </h2>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Halka Arz Onayı
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Ortaklık
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Mevcut Sermaye
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Yeni Sermaye
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Bedelli Sermaye Artırımı
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Mevcut Pay Satışı
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Satış Fiyatı
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                        Beta Enerji ve Teknoloji A.Ş.
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        350.000.000 TL
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        405.000.000 TL
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        55.000.000 TL
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        5.750.000 TL nominal
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-slate-900">
                        40,00 TL
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                SPK bültenindeki bilgiye göre 1 TL nominal değerli payların
                satış fiyatı 40,00 TL olarak yer aldı. Mevcut ortaklardan Sabit
                Dağsuyu&apos;na ait 1.955.000 TL, Yusuf Cenç Dağsuyu&apos;na ait
                1.897.500 TL ve Hakkı Mert Dağsuyu&apos;na ait 1.897.500 TL nominal
                değerli B grubu paylar halka arza konu edilecek.
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Fon Kullanım Yeri
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-emerald-800">
                    Büyüme yatırımları
                  </div>
                  <div className="text-sm text-emerald-900">
                    {fonKullanim[0]}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-slate-800">
                    İşletme sermayesi
                  </div>
                  <div className="text-sm text-slate-700">{fonKullanim[1]}</div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-950">
                Fon kullanım planında büyüme yatırımları ve işletme sermayesi
                birlikte öne çıkıyor. Yatırım tarafına ayrılan pay, kapasite ve
                üretim kabiliyetinin güçlendirilmesi açısından izlenirken;
                işletme sermayesine ayrılan daha yüksek bölüm, şirketin üretim
                döngüsü, stok, hammadde ve ticari faaliyet finansmanını
                destekleme amacı taşıyor. Bu nedenle fonun kullanım alanları
                sadece yeni yatırım başlığıyla değil, mevcut operasyonların
                finansal esnekliğini artırma yönüyle de değerlendirilmelidir.
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Finansal Görünüm
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  2024 - 2025 - 2026 1. Çeyrek
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Grup
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Kalem
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2024
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2025
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2026 1Ç
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {finansalVeriler.map((row, index) => (
                      <tr
                        key={`${row.grup}-${row.kalem}`}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {row.grup}
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {row.kalem}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {row.d2024}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {row.d2025}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {row.d2026_1c}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950">
                Finansal tabloda toplam varlıkların 2024&apos;ten 2026 ilk çeyreğine
                kadar belirgin şekilde büyüdüğü görülüyor. Duran varlıklardaki
                artış şirketin yatırım ve kapasite tarafındaki genişlemesini
                desteklerken, yükümlülüklerdeki yükseliş borçluluk tarafının da
                yakından takip edilmesini gerektiriyor. Gelir tablosunda 2025
                yılında hasılat sınırlı artmasına rağmen dönem kârının güçlü
                toparlanması dikkat çekiyor; buna karşılık 2026 ilk çeyrekte
                esas faaliyet kârının düşük kalması, kârlılığın sonraki
                dönemlerde sürdürülebilir şekilde devam edip etmeyeceğini
                izlemeyi önemli hale getiriyor.
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Beta Enerji ve Teknoloji A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Beta Enerji ve Teknoloji A.Ş. halka arzında güncel talep
                toplama tarihleri 23-24-25 Haziran 2026 olarak açıklandı. Halka arz
                fiyatı 40,00 TL, toplam halka arz payı 60.750.000 lot ve tahmini
                halka arz büyüklüğü 2,43 milyar TL seviyesindedir. Halka açıklık
                oranının yüzde 15 olması sınırlı arz etkisini gündeme
                getirirken, yurt içi bireysel yatırımcıya ayrılan yüzde 50&apos;lik
                tahsisat ve bireysele eşit dağıtım yapısı küçük yatırımcı
                açısından takip edilecek ana başlıklardan biridir. Halka arzın
                büyük kısmının sermaye artırımı yoluyla yapılması şirket
                kasasına kaynak girişi sağlayacak; ortak satışının daha sınırlı
                kalması ise arz yapısının değerlendirilmesinde ayrıca not
                edilmelidir. Fonun yüzde 45&apos;inin büyüme yatırımlarına, yüzde
                55&apos;inin işletme sermayesine ayrılması; şirketin hem kapasite ve
                yatırım planlarını hem de günlük operasyonel finansman ihtiyacını
                desteklemeyi hedeflediğini gösteriyor. Finansal tarafta varlık
                büyümesi güçlü görünse de yükümlülüklerdeki artış, esas faaliyet
                kârının seyri ve 2026 ilk çeyrek performansı sonraki bilanço
                dönemlerinde yakından izlenmelidir.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Tahsisat Grupları
              </h2>

              <div className="space-y-3">
                {tahsisat.map((item) => (
                  <div
                    key={item.grup}
                    className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                  >
                    <div className="font-bold text-amber-950">
                      {item.grup} ({item.oran})
                    </div>
                    <div className="mt-1 font-semibold">{item.lot}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wide text-amber-800">
                      {item.dagitim}
                    </div>
                    {item.notlar.length > 0 && (
                      <div className="mt-2 space-y-1 text-xs text-amber-900">
                        {item.notlar.map((not) => (
                          <div key={not}>{not}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Taahhüt Özeti
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">
                    Fiyat İstikrarı
                  </div>
                  <p className="mt-2 text-sm text-blue-900">
                    30 gün boyunca fiyat istikrarı sağlayıcı işlemler
                    planlanmaktadır.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">
                    Satmama Taahhüdü
                  </div>
                  <p className="mt-2 text-sm text-indigo-900">
                    Hâkim ortaklar tarafından 1 yıl boyunca pay satışı
                    yapılmayacağı; şirket tarafından da dolaşımdaki pay miktarını
                    artıracak karar alınmayacağı taahhüt edilmiştir.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <div className="text-sm font-semibold text-cyan-800">
                    Halka Açıklık
                  </div>
                  <p className="mt-2 text-sm text-cyan-900">%15,00</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Konsorsiyum Lideri ve Üyeleri
              </h2>

              <div className="mb-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <div className="text-sm font-semibold text-blue-800">
                  Liderler
                </div>
                <div className="mt-2 space-y-1 text-sm font-bold text-blue-950">
                  {konsorsiyumLiderleri.map((lider) => (
                    <div key={lider}>{lider}</div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  Üyeler
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {konsorsiyumUyeleri.join(", ")}
                </p>
              </div>
            </section>
          </aside>
        </section>

        <section className="mt-8 rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Şirket Basın Açıklaması Özeti
            </h2>
            <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Kuruluştan Yapılan Açıklama
            </span>
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Beta Enerji ve Teknoloji A.Ş. halka arzında daha önce ertelenen
              talep toplama süreci için yeni tarihler açıklandı. Güncel takvime
              göre şirket payları 23-24-25 Haziran 2026 tarihlerinde, 40,00 TL
              sabit fiyatla yatırımcıların talebine sunulacak.
            </p>
            <p>
              Halka arz kapsamında toplam 60.750.000 TL nominal değerli pay
              satışa konu edilecek. Halka arz büyüklüğü 40,00 TL fiyat üzerinden
              yaklaşık 2,43 milyar TL seviyesinde hesaplanıyor.
            </p>
            <p>
              Açıklamada 55.000.000 adet payın sermaye artırımı, 5.750.000 adet
              payın ise ortak satışı yoluyla halka arza konu edileceği belirtildi.
              Halka arz sonrasında şirketin halka açıklık oranının yüzde 15
              olması öngörülüyor.
            </p>
            <p>
              Şirket, halka arzdan elde edilecek kaynağın büyüme yatırımlarının
              finansmanında ve işletme sermayesinin güçlendirilmesinde
              kullanılacağını ifade etti. Açıklamada ayrıca Katılım Endeksi
              uygunluğu, asgari yüzde 30 nakit temettü taahhüdü, 1 yıl pay
              satmama taahhüdü ve dolaşımdaki pay miktarını artıracak sermaye
              artırımı kararı alınmayacağı bilgileri öne çıktı.
            </p>
            <p>
              Beta Enerji tarafı, yeni Beta Enerji ve Teknoloji Kampüsü ile
              üretim kapasitesinin artırılmasını, ihracat yapılan ülke sayısının
              genişletilmesini, Ar-Ge, dijitalleşme, akıllı şebeke çözümleri ve
              sürdürülebilir üretim hedeflerinin güçlendirilmesini halka arz
              sonrası dönemin önemli başlıkları arasında gösterdi.
            </p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">
              Beta Enerji Halka Arz Video İncelemesi
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
                  src="https://www.youtube.com/embed/K6Vq35RbTyg"
                  title="Beta Enerji Halka Arz Video İncelemesi"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Beta Enerji Halka Arz Video İncelemesi
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/VxuGhlPj_6Y"
                  title="Beta Enerji Halka Arz Değerlendirme Videosu"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Beta Enerji Halka Arz Değerlendirme Videosu
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/XLEIRL7nim8"
                  title="Beta Enerji Halka Arz Güncel Değerlendirme Videosu"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Beta Enerji Halka Arz Güncel Değerlendirme Videosu
                </h3>
              </div>
            </div>
          </div>
        </section>

        <HalkaArzSSS className="mt-8" items={sssSorulari} />
      </div>
    </main>
  );
}

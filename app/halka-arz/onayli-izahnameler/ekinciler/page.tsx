import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
  description:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. halka arz tarihi, fiyatı, işlem kodu, lot miktarı, dağıtım yöntemi, tahsisat grupları, fon kullanım alanları, finansal veriler ve tahmini lot dağılımı.",
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "buyuk" }) {
  const alanClass =
    variant === "buyuk"
      ? "min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]"
      : "min-h-[110px] sm:min-h-[120px] lg:min-h-[140px]";

  return (
    <section aria-label="Reklam alanı" className={`w-full ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function EkincilerDemirVeCelikSanayiASPage() {
  const summaryItems = [
    { label: "İşlem Kodu", value: "EKDMR" },
    { label: "Talep Toplama Tarihi", value: "13-14-15 Mayıs 2026\n09.00 - 17.00" },
    { label: "Halka Arz Fiyatı", value: "45,00 TL" },
    { label: "İskonto Oranı", value: "%37,72" },
    { label: "Dağıtım Yöntemi", value: "Bireysele Eşit\nYüksek Başvurulu Yatırımcıya Oransal" },
    { label: "Katılım Endeksi", value: "Uygun Değil" },
    { label: "Pay", value: "52.000.000 Lot" },
    { label: "Arz Büyüklüğü", value: "2.340.000.000 TL" },
    { label: "Aracı Kurum", value: "A1 Capital Yatırım Menkul Değerler A.Ş." },
    { label: "Pazar", value: "Yıldız Pazar" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 40.000.000 Lot",
    "Ortak Satışı: 12.000.000 Lot",
    "Toplam Dağıtılacak Pay: 52.000.000 Lot",
    "Halka Açıklık Oranı: %16,25",
    "Halka Arz Büyüklüğü: 2.340.000.000 TL",
  ];

  const tahsisat = [
    "Yurt İçi Bireysel Yatırımcılar (%40): 20.800.000 Lot",
    "Yüksek Başvurulu Yatırımcı (%10): 5.200.000 Lot",
    "Yurt İçi Kurumsal Yatırımcılar (%30): 15.600.000 Lot",
    "Yurt Dışı Kurumsal Yatırımcılar (%20): 10.400.000 Lot",
  ];

  const alimSekli = [
    "Yurt İçi Bireysel Yatırımcılar: 10.000 lot ve altı başvurular için eşit dağıtım",
    "Yüksek Başvurulu Yatırımcılar: 10.001 lot ve üstü başvurular için oransal dağıtım",
    "T1 ve T2 bakiye kullanılamaz",
    "BIST Katılım Endeksi’ne uygun değildir",
  ];

  const fonKullanim = [
    "%40 Hammadde tedariki ve işletme sermayesi ihtiyacının finansmanı",
    "%25 Yenilenebilir enerji yatırımları",
    "%25 Yeşil Çelik Haddehane modernizasyonu ve mevcut üretim tesislerinin kapasite artışı yatırımları",
    "%10 Kütük kaynatma sistemi yatırımı",
  ];

  const finansalVeriler = [
    {
      kalem: "Dönen Varlıklar",
      d2023: "2,3 Milyar TL",
      d2024: "4,3 Milyar TL",
      d2025: "5,0 Milyar TL",
    },
    {
      kalem: "Duran Varlıklar",
      d2023: "10,0 Milyar TL",
      d2024: "12,0 Milyar TL",
      d2025: "16,0 Milyar TL",
    },
    {
      kalem: "Toplam Varlıklar",
      d2023: "12,0 Milyar TL",
      d2024: "16,0 Milyar TL",
      d2025: "21,0 Milyar TL",
    },
    {
      kalem: "Kısa Vadeli Yükümlülükler",
      d2023: "2,7 Milyar TL",
      d2024: "4,6 Milyar TL",
      d2025: "5,2 Milyar TL",
    },
    {
      kalem: "Uzun Vadeli Yükümlülükler",
      d2023: "475 Milyon TL",
      d2024: "911 Milyon TL",
      d2025: "1,5 Milyar TL",
    },
    {
      kalem: "Özkaynaklar",
      d2023: "9,0 Milyar TL",
      d2024: "11,0 Milyar TL",
      d2025: "14,0 Milyar TL",
    },
    {
      kalem: "Hasılat",
      d2023: "11,0 Milyar TL",
      d2024: "16,0 Milyar TL",
      d2025: "20,0 Milyar TL",
    },
    {
      kalem: "Esas Faaliyet Kârı",
      d2023: "416 Milyon TL",
      d2024: "873 Milyon TL",
      d2025: "810 Milyon TL",
    },
    {
      kalem: "Dönem Kârı",
      d2023: "272 Milyon TL",
      d2024: "621 Milyon TL",
      d2025: "446 Milyon TL",
    },
  ];

  const tahminiLotDagilimi = [
    { katilimci: "700.000", lot: "30 Lot", tutar: "1.350 TL" },
    { katilimci: "750.000", lot: "28 Lot", tutar: "1.260 TL" },
    { katilimci: "800.000", lot: "26 Lot", tutar: "1.170 TL" },
    { katilimci: "850.000", lot: "25 Lot", tutar: "1.125 TL" },
    { katilimci: "900.000", lot: "23 Lot", tutar: "1.035 TL" },
    { katilimci: "950.000", lot: "22 Lot", tutar: "990 TL" },
    { katilimci: "1.000.000", lot: "21 Lot", tutar: "945 TL" },
  ];

  const konsorsiyum = [
    "A1 Capital Yatırım",
    "Acar",
    "Ahlatcı",
    "Ak Yatırım",
    "Alnus",
    "Alternatif",
    "Ata",
    "Bizim",
    "BTC Türk",
    "Bulls",
    "Burgan",
    "Colendi",
    "Deniz",
    "Destek",
    "Dinamik",
    "Fiba",
    "Garanti",
    "Gedik",
    "Global",
    "Halk",
    "ICBC",
    "ING",
    "Investaz",
    "Info",
    "Integral",
    "İş Yatırım",
    "Kuveyt",
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
    "Yatırım Finansman",
    "Ziraat Yatırım",
  ];

  const oneCikanlar = [
    {
      title: "Halka Arz Fiyatı",
      value: "45,00 TL",
      desc: "Ekinciler Demir ve Çelik halka arz fiyatı 45,00 TL olarak açıklandı.",
    },
    {
      title: "Talep Toplama",
      value: "13-15 Mayıs",
      desc: "Talep toplama 13, 14 ve 15 Mayıs tarihlerinde yapılacak.",
    },
    {
      title: "Halka Açıklık",
      value: "%16,25",
      desc: "Şirketin halka açıklık oranı %16,25 olarak açıklandı.",
    },
    {
      title: "Arz Büyüklüğü",
      value: "2,34 Milyar TL",
      desc: "Toplam halka arz büyüklüğü 2.340.000.000 TL seviyesinde.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/halka-arz/onayli-izahnameler"
            className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Onaylı İzahname
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Ekinciler Demir ve Çelik Sanayi A.Ş.
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Onaylı izahname verilerine göre hazırlanmış halka arz detayları
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">İşlem Kodu</div>
                  <div className="mt-1 text-lg font-bold">EKDMR</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Halka Arz Fiyatı</div>
                  <div className="mt-1 text-lg font-bold">45,00 TL</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white"
              >
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 whitespace-pre-line text-base font-semibold text-slate-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Öne Çıkan Noktalar</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {oneCikanlar.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-medium text-slate-500">{item.title}</div>
                <div className="mt-2 text-2xl font-bold text-blue-700">{item.value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Halka Arz Şekli</h2>
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
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Dağıtım ve Alım Şekli
              </h2>

              <div className="grid gap-3">
                {alimSekli.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="grid gap-4 md:grid-cols-2">
                {fonKullanim.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-6 text-emerald-900"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  2023 - 2024 - 2025
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Kalem
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2023
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2024
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2025
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {finansalVeriler.map((row, index) => (
                      <tr
                        key={row.kalem}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {row.kalem}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2023}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2024}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2025}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Tahmini Lot Dağılımı
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Katılımcı Sayısı
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Lot Sayısı
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Tutar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tahminiLotDagilimi.map((row, index) => (
                      <tr
                        key={row.katilimci}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {row.katilimci}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.lot}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.tutar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">YouTube Video</h2>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative w-full overflow-hidden pt-[56.25%]">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src="https://www.youtube.com/embed/Hs__b6dgmZY"
                    title="Ekinciler Demir ve Çelik Sanayi A.Ş. YouTube Videosu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>

            <section>
              <ReklamAlani />
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Ekinciler Demir ve Çelik Sanayi A.Ş. halka arzı EKDMR işlem kodu ile
                yatırımcıların takip ettiği onaylı halka arzlar arasında yer almaktadır. Halka arz
                fiyatı 45,00 TL olarak açıklanırken toplam 52.000.000 lot payın dağıtılması
                planlanmaktadır. Halka arz büyüklüğü 2,34 milyar TL, halka açıklık oranı ise
                %16,25 seviyesindedir.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Halka arz gelirinin önemli bölümü hammadde tedariki, işletme sermayesi,
                yenilenebilir enerji yatırımları, Yeşil Çelik Haddehane modernizasyonu ve kütük
                kaynatma sistemi yatırımlarında kullanılacaktır. Sayfadaki bilgiler onaylı
                izahname verileri dikkate alınarak özetlenmiştir.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Tahsisat Grupları</h2>

              <div className="space-y-3">
                {tahsisat.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Diğer Bilgiler</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">İşlem Kodu</div>
                  <p className="mt-2 text-sm text-slate-700">EKDMR</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Aracı Kurum</div>
                  <p className="mt-2 text-sm text-slate-700">
                    A1 Capital Yatırım Menkul Değerler A.Ş.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-slate-700">Planlanmamaktadır.</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Katılım Endeksi</div>
                  <p className="mt-2 text-sm text-slate-700">BIST Katılım Endeksi’ne uygun değildir.</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-blue-900">
                    Fiyat istikrarı sağlayıcı işlemler planlanmamaktadır.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">Satmama Taahhüdü</div>
                  <p className="mt-2 text-sm text-indigo-900">
                    Şirket ve ortaklar için 1 yıl boyunca pay satışı ve halka arz fiyatının
                    altında satış yapılmayacağına ilişkin taahhüt bulunmaktadır.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <div className="text-sm font-semibold text-cyan-800">Halka Açıklık</div>
                  <p className="mt-2 text-sm text-cyan-900">%16,25.</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Konsorsiyum</h2>
              <p className="text-sm leading-7 text-slate-600">
                Konsorsiyum lideri A1 Capital Yatırım’dır. Halka arzda yer alan aracı kurumlar:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {konsorsiyum.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="buyuk" />
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Ekinciler Demir ve Çelik Sanayi A.Ş. halka arz sayfasında yatırımcıların hızlı analiz
            yapabilmesi için halka arz tarihi, halka arz fiyatı, işlem kodu, lot miktarı, halka
            açıklık oranı, tahsisat dağılımı, dağıtım yöntemi, fon kullanım alanları, finansal
            veriler, tahmini lot dağılımı ve taahhüt detayları bir arada sunulmuştur. Sayfadaki
            bilgiler onaylı izahname verilerine göre hazırlanmıştır ve yatırım tavsiyesi değildir.
          </p>
        </section>
      </div>
    </main>
  );
}
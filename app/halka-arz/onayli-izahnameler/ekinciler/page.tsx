import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Detayları 2026 | EKDMR Onaylı İzahname",
  description:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. EKDMR halka arz tarihi, fiyatı, lot miktarı, arz büyüklüğü, dağıtım yöntemi, tahmini lot dağılımı, fon kullanım alanları ve onaylı izahname bilgileri.",
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
    { label: "Talep Toplama", value: "13-14-15 Mayıs 2026" },
    { label: "Saat", value: "09.00 - 17.00" },
    { label: "Halka Arz Fiyatı", value: "45,00 TL" },
    { label: "İskonto Oranı", value: "%37,72" },
    { label: "Toplam Lot", value: "52.000.000 Lot" },
    { label: "Arz Büyüklüğü", value: "2.340.000.000 TL" },
    { label: "Halka Açıklık", value: "%16,25" },
    { label: "Katılım Endeksi", value: "Uygun Değil" },
    { label: "Pazar", value: "Yıldız Pazar" },
    { label: "Aracı Kurum", value: "A1 Capital Yatırım Menkul Değerler A.Ş." },
    { label: "T1 - T2", value: "Kullanılamaz" },
  ];

  const oneCikanlar = [
    {
      title: "Fiyat",
      value: "45,00 TL",
      desc: "Ekinciler Demir ve Çelik halka arz fiyatı.",
    },
    {
      title: "Talep Toplama",
      value: "13-15 Mayıs",
      desc: "Talep toplama 3 gün sürecek.",
    },
    {
      title: "Toplam Lot",
      value: "52 Milyon",
      desc: "Dağıtılması planlanan toplam pay miktarı.",
    },
    {
      title: "Katılım",
      value: "Uygun Değil",
      desc: "BIST Katılım Endeksi’ne uygun değildir.",
    },
  ];

  const tahsisat = [
    {
      grup: "Yurt İçi Bireysel Yatırımcılar",
      oran: "%40",
      lot: "20.800.000 Lot",
      detay: "10.000 lot ve altı başvurular için bireysele eşit dağıtım.",
    },
    {
      grup: "Yüksek Başvurulu Yatırımcı",
      oran: "%10",
      lot: "5.200.000 Lot",
      detay: "10.001 lot ve üzeri başvurular için oransal dağıtım.",
    },
    {
      grup: "Yurt İçi Kurumsal Yatırımcılar",
      oran: "%30",
      lot: "15.600.000 Lot",
      detay: "Kurumsal yatırımcı grubu için ayrılan pay.",
    },
    {
      grup: "Yurt Dışı Kurumsal Yatırımcılar",
      oran: "%20",
      lot: "10.400.000 Lot",
      detay: "Yurt dışı kurumsal yatırımcı grubu için ayrılan pay.",
    },
  ];

  const toplamLot = [
    { label: "Sermaye Artırımı", value: "40.000.000 Lot" },
    { label: "Ortak Satışı", value: "12.000.000 Lot" },
    { label: "Toplam Dağıtılacak Pay", value: "52.000.000 Lot" },
  ];

  const fonKullanim = [
    {
      oran: "%40",
      alan: "Hammadde tedariki ve işletme sermayesi ihtiyacının finansmanı",
    },
    {
      oran: "%25",
      alan: "Yenilenebilir enerji yatırımları",
    },
    {
      oran: "%25",
      alan:
        "Yeşil Çelik Haddehane modernizasyonu ve mevcut üretim tesislerinde kapasite artışı yatırımları",
    },
    {
      oran: "%10",
      alan: "Kütük kaynatma sistemi yatırımı",
    },
  ];

  const finansalOzet = [
    {
      kalem: "Dönen Varlıklar",
      d2023: "2,3 Milyar TL",
      d2024: "4,3 Milyar TL",
      d2025: "5 Milyar TL",
    },
    {
      kalem: "Duran Varlıklar",
      d2023: "10 Milyar TL",
      d2024: "12 Milyar TL",
      d2025: "16 Milyar TL",
    },
    {
      kalem: "Toplam Varlıklar",
      d2023: "12 Milyar TL",
      d2024: "16 Milyar TL",
      d2025: "21 Milyar TL",
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
      d2023: "9 Milyar TL",
      d2024: "11 Milyar TL",
      d2025: "14 Milyar TL",
    },
    {
      kalem: "Hasılat",
      d2023: "11 Milyar TL",
      d2024: "16 Milyar TL",
      d2025: "20 Milyar TL",
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

  const konsorsiyum =
    "A1 Capital Yatırım liderliğinde; Acar, Ahlatcı, Ak Yatırım, Alnus, Alternatif, Ata, Bizim, BTC Türk, Bulls, Burgan, Colendi, Deniz, Destek, Dinamik, Fiba, Garanti, Gedik, Global, Halk, ICBC, ING, Investaz, İnfo, Integral, İş Yatırım, Kuveyt, Marbaş, Meksa, Osmanlı, Oyak, PhillipCapital, Piramit, Pusula, QNB, Şeker, Tacirler, TEB, Tera, Trive, Turkish, Ünlü, Vakıf, Yapı Kredi, Yatırım Finansman ve Ziraat Yatırım yer almaktadır.";

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
          <div className="border-b border-slate-200 bg-gradient-to-r from-slate-900 to-blue-800 px-6 py-7 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Onaylı İzahname
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Ekinciler Demir ve Çelik Sanayi A.Ş.
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  EKDMR halka arz tarihi, fiyatı, lot miktarı ve temel halka arz bilgileri
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
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Öne Çıkan Bilgiler</h2>

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
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Dağıtım ve Alım Şekli
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {tahsisat.map((item) => (
                  <div
                    key={item.grup}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">{item.grup}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.detay}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-lg font-bold text-blue-700">{item.oran}</div>
                        <div className="mt-1 text-xs font-semibold text-slate-600">
                          {item.lot}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                Halka arzda bireysel yatırımcı tarafında 10.000 lot ve altı başvurular için
                eşit dağıtım uygulanacaktır. Yüksek başvurulu yatırımcı grubunda ise 10.001 lot
                ve üzeri başvurular için oransal dağıtım yapılacaktır. T1 ve T2 bakiye
                kullanılamaz.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Toplam Dağıtılacak Lot
              </h2>

              <div className="grid gap-4 sm:grid-cols-3">
                {toplamLot.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">{item.label}</div>
                    <div className="mt-2 text-xl font-bold text-blue-950">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Alanları</h2>

              <div className="grid gap-4 md:grid-cols-2">
                {fonKullanim.map((item) => (
                  <div
                    key={item.alan}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <div className="text-2xl font-bold text-emerald-700">{item.oran}</div>
                    <p className="mt-2 text-sm leading-6 text-emerald-900">{item.alan}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Finansal Görünüm</h2>

              <div className="grid gap-4">
                {finansalOzet.map((item) => (
                  <div
                    key={item.kalem}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900">{item.kalem}</h3>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                      <div className="rounded-xl bg-white p-3">
                        <div className="text-xs font-semibold text-slate-500">2023</div>
                        <div className="mt-1 font-bold text-slate-900">{item.d2023}</div>
                      </div>
                      <div className="rounded-xl bg-white p-3">
                        <div className="text-xs font-semibold text-slate-500">2024</div>
                        <div className="mt-1 font-bold text-slate-900">{item.d2024}</div>
                      </div>
                      <div className="rounded-xl bg-white p-3">
                        <div className="text-xs font-semibold text-slate-500">2025</div>
                        <div className="mt-1 font-bold text-slate-900">{item.d2025}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Tahmini Lot Dağılımı
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {tahminiLotDagilimi.map((row) => (
                  <div
                    key={row.katilimci}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-500">
                      Katılımcı Sayısı: {row.katilimci}
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-500">Tahmini Lot</div>
                        <div className="mt-1 text-lg font-bold text-slate-900">{row.lot}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-slate-500">Tutar</div>
                        <div className="mt-1 text-lg font-bold text-blue-700">{row.tutar}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Tahmini lot dağılımı, bireysel yatırımcı katılım sayısına göre yaklaşık
                hesaplanmıştır. Kesin dağıtım sonuçları resmi açıklama sonrasında netleşir.
              </p>
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
                Ekinciler Demir ve Çelik Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Ekinciler Demir ve Çelik Sanayi A.Ş. halka arzında yatırımcıların en çok
                takip ettiği başlıklar; halka arz fiyatı, talep toplama tarihi, toplam lot
                miktarı, dağıtım yöntemi, katılım endeksi durumu ve tahmini lot dağılımıdır.
                EKDMR işlem koduyla Yıldız Pazar’da işlem görmesi planlanan şirketin halka
                arz büyüklüğü 2,34 milyar TL, halka açıklık oranı ise %16,25 olarak
                açıklanmıştır.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Halka arz gelirinin %40’ının hammadde tedariki ve işletme sermayesi
                finansmanında, %25’inin yenilenebilir enerji yatırımlarında, %25’inin Yeşil
                Çelik Haddehane modernizasyonu ve kapasite artışında, %10’unun ise kütük
                kaynatma sistemi yatırımında kullanılması planlanmaktadır.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Kısa Özet</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Fiyat / İskonto</div>
                  <p className="mt-2 text-sm text-slate-700">45,00 TL / %37,72 iskonto.</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Katılım Endeksi</div>
                  <p className="mt-2 text-sm text-slate-700">
                    BIST Katılım Endeksi’ne uygun değildir.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-slate-700">
                    Fiyat istikrarı sağlayıcı işlem planlanmamaktadır.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Konsorsiyum Lideri</div>
                  <p className="mt-2 text-sm text-slate-700">A1 Capital Yatırım.</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Şirket ve Ortaklar</div>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapılmayacağı,
                    dolaşımdaki payların artmasına sebep olacak satış yapılmayacağı ve halka
                    arz fiyatının altında pay satılmayacağı taahhüt edilmiştir.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-indigo-900">
                    Fiyat istikrarı işlemi planlanmamaktadır.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Konsorsiyum</h2>
              <p className="text-sm leading-7 text-slate-600">{konsorsiyum}</p>
            </section>
          </aside>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="buyuk" />
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Bilgileri
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Ekinciler Demir ve Çelik Sanayi A.Ş. halka arz sayfasında EKDMR işlem kodu,
            halka arz tarihi, halka arz fiyatı, toplam lot miktarı, halka arz büyüklüğü,
            halka açıklık oranı, tahsisat grupları, fon kullanım alanları, tahmini lot
            dağılımı ve temel finansal veriler sade bir şekilde sunulmuştur. Bu sayfadaki
            bilgiler onaylı izahname verilerine göre hazırlanmıştır ve yatırım tavsiyesi
            değildir.
          </p>
        </section>
      </div>
    </main>
  );
}
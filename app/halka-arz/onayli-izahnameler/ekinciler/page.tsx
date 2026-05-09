import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Detayları 2026 | EKDMR Onaylı İzahname",
  description:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. EKDMR halka arz tarihi, fiyatı, lot miktarı, arz büyüklüğü, dağıtım yöntemi, tahmini lot ve fon kullanım alanları.",
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
    { label: "Halka Arz Fiyatı", value: "45,00 TL" },
    { label: "Toplam Lot", value: "52.000.000 Lot" },
    { label: "Arz Büyüklüğü", value: "2.340.000.000 TL" },
    { label: "Halka Açıklık", value: "%16,25" },
    { label: "Dağıtım Yöntemi", value: "Bireysele Eşit / Yüksek Başvuruluya Oransal" },
    { label: "Katılım Endeksi", value: "Uygun Değil" },
    { label: "Pazar", value: "Yıldız Pazar" },
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
      desc: "Talep toplama 3 işlem günü sürecek.",
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
    { grup: "Yurt İçi Bireysel Yatırımcı", oran: "%40", lot: "20.800.000 Lot" },
    { grup: "Yüksek Başvurulu Yatırımcı", oran: "%10", lot: "5.200.000 Lot" },
    { grup: "Yurt İçi Kurumsal Yatırımcı", oran: "%30", lot: "15.600.000 Lot" },
    { grup: "Yurt Dışı Kurumsal Yatırımcı", oran: "%20", lot: "10.400.000 Lot" },
  ];

  const fonKullanim = [
    { oran: "%40", alan: "Hammadde tedariki ve işletme sermayesi finansmanı" },
    { oran: "%25", alan: "Yenilenebilir enerji yatırımları" },
    {
      oran: "%25",
      alan: "Yeşil Çelik Haddehane modernizasyonu ve kapasite artışı yatırımları",
    },
    { oran: "%10", alan: "Kütük kaynatma sistemi yatırımı" },
  ];

  const finansalOzet = [
    { kalem: "Hasılat", d2023: "11 Milyar TL", d2024: "16 Milyar TL", d2025: "20 Milyar TL" },
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
    {
      kalem: "Özkaynaklar",
      d2023: "9 Milyar TL",
      d2024: "11 Milyar TL",
      d2025: "14 Milyar TL",
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
              <h2 className="mb-5 text-xl font-bold text-slate-900">Tahsisat Grupları</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Yatırımcı Grubu
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Oran
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        Lot
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tahsisat.map((row, index) => (
                      <tr
                        key={row.grup}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                          {row.grup}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.oran}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.lot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Özet</h2>
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
                    {finansalOzet.map((row, index) => (
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
                        Lot
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

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Tahmini lot dağılımı, bireysel yatırımcı katılım sayısına göre yaklaşık
                hesaplanmıştır. Kesin dağıtım sonuçları resmi açıklama sonrasında netleşir.
              </p>
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
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Alım Bilgileri</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Bireysel Yatırımcı
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    10.000 lot ve altı başvurular için eşit dağıtım.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Yüksek Başvurulu Yatırımcı
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    10.001 lot ve üstü başvurular için oransal dağıtım.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">T1 - T2</div>
                  <p className="mt-2 text-sm text-slate-700">T1 ve T2 bakiye kullanılamaz.</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Diğer Bilgiler</h2>

              <div className="space-y-4">
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
                    1 yıl boyunca pay satışı ve halka arz fiyatının altında satış yapılmayacağına
                    ilişkin taahhüt bulunmaktadır.
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
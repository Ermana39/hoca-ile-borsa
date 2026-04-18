import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Re Pie Yatırım Holding A.Ş. Halka Arz Detayları 2026 | Taslak İzahname ve Finansal Veriler",
  description:
    "Re Pie Yatırım Holding A.Ş. halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, ortak satışı, dağıtım yöntemi, pazar bilgisi, fon kullanım alanları ve finansal veriler.",
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

export default function RePieYatirimHoldingASPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor" },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "70.000.000 Lot" },
    {
      label: "Aracı Kurum",
      value:
        "Ziraat Yatırım Menkul Kıymetler A.Ş.\nTürkiye Sınai Kalkınma Bankası A.Ş.\nYatırım Finansman Menkul Değerler A.Ş.\nColendi Menkul Değerler A.Ş.",
    },
    { label: "Pazar", value: "Yıldız Pazar" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 45.500.000 Lot",
    "Ortak Satışı: 9.408.000 Lot (Caner Bingöl)",
    "Ortak Satışı: 9.408.000 Lot (Mehmet Ali Ergin)",
    "Ortak Satışı: 4.704.000 Lot (Mehmet Emre Çamlıbel)",
    "Ortak Satışı: 367.500 Lot (Alim Telci)",
    "Ortak Satışı: 612.500 Lot (Alt Capital Holding A.Ş.)",
  ];

  const fonKullanim = [
    "%90 Yeni yatırım imkanlarının finansmanı",
    "%10 İşletme sermayesi",
  ];

  const tahsisat = [
    "Yurt İçi Bireysel Yatırımcı: Açıklanmadı",
    "Yurt İçi Kurumsal Yatırımcı: Açıklanmadı",
  ];

  const finansalVeriler = [
    {
      kalem: "Hasılat",
      d2025_3: "11,3 Milyar TL",
      d2024: "1,5 Milyar TL",
      d2023: "405,1 Milyon TL",
    },
    {
      kalem: "Brüt Kâr",
      d2025_3: "11,3 Milyar TL",
      d2024: "1,5 Milyar TL",
      d2023: "405,1 Milyon TL",
    },
  ];

  const oneCikanlar = [
    {
      title: "Halka Açıklık",
      value: "%12,83",
      desc: "Planlanan halka açıklık oranı %12,83 seviyesindedir.",
    },
    {
      title: "Pazar",
      value: "Yıldız Pazar",
      desc: "Payların Yıldız Pazar'da işlem görmesi planlanmaktadır.",
    },
    {
      title: "Fiyat İstikrarı",
      value: "30 Gün",
      desc: "Halka arz sonrası 30 gün fiyat istikrarı planlanıyor.",
    },
    {
      title: "Dağıtım",
      value: "Eşit",
      desc: "Bireysel yatırımcı tarafında eşit dağıtım modeli öne çıkıyor.",
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
            href="/halka-arz/taslak-izahnameler"
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
                  Halka Arz İncelemesi
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Re Pie Yatırım Holding A.Ş.
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">70.000.000</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Halka Açıklık</div>
                  <div className="mt-1 text-lg font-bold">%12,83</div>
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
                  Taslak İzahname
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
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-emerald-800">
                    Yeni yatırımlar
                  </div>
                  <div className="text-sm text-emerald-900">{fonKullanim[0]}</div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-slate-800">
                    İşletme sermayesi
                  </div>
                  <div className="text-sm text-slate-700">{fonKullanim[1]}</div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  2025/3 - 2024 - 2023
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
                        2025/3
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2024
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2023
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
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2025_3}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2024}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2023}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Re Pie Yatırım Holding A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Re Pie Yatırım Holding A.Ş. halka arz sürecinde yatırımcıların en çok takip ettiği
                başlıklar arasında halka arz tarihi, fiyat aralığı, pay miktarı, ortak satışı,
                dağıtım yöntemi, pazar bilgisi, fon kullanım alanları ve finansal görünüm yer
                alıyor. Bu sayfada şirketin taslak izahname verileri daha sade ve analiz edilebilir
                bir yapıda sunulmuştur.
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

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                  Bireysele Eşit Dağıtım.
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                  T1-T2 Kullanılamaz.
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Diğer Bilgiler</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Dağıtılacak Pay Miktarı (Olası)
                  </div>
                  <p className="mt-2 text-sm text-slate-700 italic">
                    İlerleyen aşamalarda tamamlanacaktır.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Fiyat İstikrarı Aracısı
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    Yatırım Finansman Menkul Değerler A.Ş.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-blue-900">30 gün.</p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">Satmama Taahhüdü</div>
                  <p className="mt-2 text-sm text-indigo-900">
                    1 yıl ihraççı, 1 yıl ortaklar.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <div className="text-sm font-semibold text-cyan-800">Halka Açıklık</div>
                  <p className="mt-2 text-sm text-cyan-900">%12,83.</p>
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
            Re Pie Yatırım Holding A.Ş. Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Re Pie Yatırım Holding A.Ş. halka arz sayfasında yatırımcıların hızlı analiz
            yapabilmesi için halka arz tarihi, halka arz fiyatı, lot miktarı, ortak satışı, dağıtım
            yöntemi, pazar bilgisi, halka açıklık oranı, fon kullanım alanları, finansal veriler ve
            taahhüt detayları bir arada sunulmuştur. Sayfadaki bilgiler taslak izahnameye göre
            hazırlanmıştır ve resmi veriler açıklandıkça güncellenmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
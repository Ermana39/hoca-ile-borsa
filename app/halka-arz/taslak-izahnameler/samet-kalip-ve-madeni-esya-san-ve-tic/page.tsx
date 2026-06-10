import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Samet Kalıp ve Madeni Eşya San. ve Tic. A.Ş. Halka Arz Detayları 2026 | Taslak İzahname ve Finansal Veriler",
  description:
    "Samet Kalıp ve Madeni Eşya San. ve Tic. A.Ş. halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, dağıtım yöntemi, fon kullanım alanları ve finansal veriler.",
};

export default function SametKalipVeMadeniEsyaSanVeTicASPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor" },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "82.500.000 Lot" },
    {
      label: "Aracı Kurum",
      value:
        "Ziraat Yatırım Menkul Kıymetler A.Ş.\nİntegral Yatırım Menkul Değerler A.Ş.\nÜnlü Menkul Değerler A.Ş.",
    },
    { label: "Pazar", value: "Yıldız Pazar" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 50.000.000 Lot",
    "Ortak Satışı: 32.500.000 Lot",
  ];

  const fonKullanim = [
    "%45-55 Yatırımların finansmanı",
    "%30-35 Finansal borçluluk seviyesini düşürmek",
    "%15-20 İşletme sermayesi",
  ];

  const tahsisat = [
    "--- Lot (%---) Yurt İçi Bireysel Yatırımcı",
    "--- Lot (%---) Yüksek Başvurulu Yatırımcı",
    "--- Lot (%---) Yurt İçi Kurumsal Yatırımcı",
    "--- Lot (%---) Yurt Dışı Kurumsal Yatırımcı",
  ];

  const finansalVeriler = [
    {
      kalem: "Hasılat",
      d2025: "8,4 Milyar TL",
      d2024: "8,4 Milyar TL",
      d2023: "8,3 Milyar TL",
    },
    {
      kalem: "Brüt Kâr",
      d2025: "3,0 Milyar TL",
      d2024: "2,9 Milyar TL",
      d2023: "2,7 Milyar TL",
    },
  ];

  const oneCikanlar = [
    {
      title: "Halka Açıklık",
      value: "%27,50",
      desc: "Şirketin halka açık olması planlanan oranı.",
    },
    {
      title: "Fiyat İstikrarı",
      value: "Yok",
      desc: "Taslak izahnameye göre fiyat istikrarı planlanmamaktadır.",
    },
    {
      title: "Satmama Taahhüdü",
      value: "1 Yıl",
      desc: "İhraççı ve ortaklar için 1 yıl satmama taahhüdü bulunuyor.",
    },
    {
      title: "Dağıtım",
      value: "Eşit",
      desc: "Bireysele eşit dağıtım ve yüksek başvurulu oransal dağıtım bilgisi yer alıyor.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/halka-arz" className="hover:text-blue-600 transition">Halka Arz</Link>
          <span>/</span>
          <Link href="/halka-arz/taslak-izahnameler" className="hover:text-blue-600 transition">
            Taslak İzahnameler
          </Link>
        </nav>

        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Halka Arz İncelemesi
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Samet Kalıp ve Madeni Eşya San. ve Tic. A.Ş.
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">82.500.000</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Pazar</div>
                  <div className="mt-1 text-lg font-bold">Yıldız</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {summaryItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 whitespace-pre-line text-base font-semibold text-slate-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Öne Çıkan Noktalar</h2>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {oneCikanlar.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
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
              <h2 className="mb-5 text-xl font-bold text-slate-900">Halka Arz Şekli</h2>

              <div className="grid gap-3">
                {halkaArzSekli.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="grid gap-4 md:grid-cols-3">
                {fonKullanim.map((item) => (
                  <div key={item} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm text-emerald-900">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Finansal Görünüm</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Kalem</th>
                      <th className="px-4 py-3 text-left">2025</th>
                      <th className="px-4 py-3 text-left">2024</th>
                      <th className="px-4 py-3 text-left">2023</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finansalVeriler.map((row) => (
                      <tr key={row.kalem}>
                        <td className="px-4 py-4 font-semibold">{row.kalem}</td>
                        <td className="px-4 py-4">{row.d2025}</td>
                        <td className="px-4 py-4">{row.d2024}</td>
                        <td className="px-4 py-4">{row.d2023}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Tahsisat Grupları</h2>

              <div className="space-y-3">
                {tahsisat.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm">
                  Bireysele Eşit Dağıtım.
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm">
                  Yüksek Başvurulu Oransal Dağıtım.
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm">
                  T1-T2 Kullanılamaz.
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="font-semibold text-blue-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-blue-900">Planlanmamaktadır.</p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="font-semibold text-indigo-800">Satmama Taahhüdü</div>
                  <p className="mt-2 text-sm text-indigo-900">1 yıl ihraççı, 1 yıl ortaklar.</p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <div className="font-semibold text-cyan-800">Halka Açıklık</div>
                  <p className="mt-2 text-sm text-cyan-900">%27,50</p>
                </div>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
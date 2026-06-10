import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ankara Anonim Türk Sigorta Şirketi Halka Arz Detayları 2026 | Taslak İzahname ve Finansal Veriler",
  description:
    "Ankara Anonim Türk Sigorta Şirketi halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, dağıtım yöntemi, fon kullanım alanları ve finansal bilgiler.",
};

export default function AnkaraAnonimTurkSigortaSirketiPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor" },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "77.000.000 Lot" },
    {
      label: "Aracı Kurum",
      value:
        "İş Yatırım Menkul Değerler A.Ş.\nZiraat Yatırım Menkul Değerler A.Ş.",
    },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 24.500.000 Lot",
    "Ortak Satışı: 52.500.000 Lot (Polis Bakım ve Yardım Sandığı)",
  ];

  const fonKullanim = ["%100 Özkaynağın güçlendirilmesi"];

  const tahsisat = [
    "--- Lot (%---) Yurt İçi Bireysel Yatırımcı",
    "--- Lot (%---) Yüksek Başvurulu Yatırımcı",
    "--- Lot (%---) Yurt İçi Kurumsal Yatırımcı",
    "--- Lot (%---) Yurt Dışı Kurumsal Yatırımcı",
  ];

  const finansalVeriler = [
    {
      kalem: "Faaliyet Sonuçları",
      d2025: "-",
      d2024: "-",
      d2023: "-",
    },
  ];

  const oneCikanlar = [
    {
      title: "Halka Açıklık",
      value: "%20,56",
      desc: "Şirketin halka açık olması planlanan oranı.",
    },
    {
      title: "Fiyat İstikrarı",
      value: "--- Gün",
      desc: "Fiyat istikrarı İş Yatırım Menkul Değerler A.Ş. tarafından yürütülecektir.",
    },
    {
      title: "Satmama Taahhüdü",
      value: "1 Yıl",
      desc: "İhraççı ve ortaklar için 1 yıl satmama taahhüdü bulunuyor.",
    },
    {
      title: "Dağıtım Yöntemi",
      value: "Eşit Dağıtım",
      desc: "Bireysele eşit dağıtım ve yüksek başvurulu eşit dağıtım bilgisi yer alıyor.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <Link href="/halka-arz" className="hover:text-blue-600 transition">Halka Arz</Link>
          <span className="text-slate-300">/</span>
          <Link href="/halka-arz/taslak-izahnameler" className="hover:text-blue-600 transition">Taslak İzahnameler</Link>
        </nav>

        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Halka Arz İncelemesi
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Ankara Anonim Türk Sigorta Şirketi
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">77.000.000</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Aracı Kurum</div>
                  <div className="mt-1 text-sm font-bold">İş Yatırım</div>
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
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Öne Çıkan Noktalar</h2>
          </div>

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
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Halka Arz Şekli</h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Taslak İzahname
                </span>
              </div>

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

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="mb-2 text-sm font-semibold text-emerald-800">
                  Özkaynak güçlendirme
                </div>
                <div className="space-y-2 text-sm text-emerald-900">
                  <p>{fonKullanim[0]}</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Kalem</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">2025</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">2024</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">2023</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finansalVeriler.map((row, index) => (
                      <tr key={row.kalem} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-4 text-sm font-semibold text-slate-800">{row.kalem}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2025}</td>
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
                Ankara Anonim Türk Sigorta Şirketi Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Ankara Anonim Türk Sigorta Şirketi halka arz sürecinde yatırımcıların en çok takip
                ettiği başlıklar arasında halka arz tarihi, fiyat aralığı, pay miktarı, dağıtım
                yöntemi, satış yöntemi, fon kullanım alanları ve halka açıklık oranı yer alıyor. Bu
                sayfada şirketin taslak izahname verileri daha sade ve analiz edilebilir bir yapıda
                sunulmuştur.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Tahsisat Grupları</h2>

              <div className="space-y-3">
                {tahsisat.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                  Bireysele Eşit Dağıtım.
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                  Yüksek Başvurulu Eşit Dağıtım.
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
                  <div className="text-sm font-semibold text-slate-800">Halka Arz Satış Yöntemi</div>
                  <p className="mt-2 text-sm text-slate-700">
                    Sabit fiyatla talep toplama. En iyi gayret aracılığı.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Dağıtılacak Pay Miktarı (Olası)
                  </div>
                  <p className="mt-2 text-sm text-slate-700 italic">
                    İlerleyen aşamalarda tamamlanacaktır.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-blue-900">
                    --- gün. İş Yatırım Menkul Değerler A.Ş.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">Satmama Taahhüdü</div>
                  <p className="mt-2 text-sm text-indigo-900">
                    1 yıl ihraççı, 1 yıl ortaklar.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <div className="text-sm font-semibold text-cyan-800">Halka Açıklık</div>
                  <p className="mt-2 text-sm text-cyan-900">%20,56</p>
                </div>
              </div>
            </section>
          </aside>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            Ankara Anonim Türk Sigorta Şirketi Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Ankara Anonim Türk Sigorta Şirketi halka arz sayfasında yatırımcıların hızlı analiz
            yapabilmesi için halka arz tarihi, halka arz fiyatı, lot miktarı, dağıtım yöntemi,
            halka açıklık oranı, fon kullanım alanları ve taahhüt detayları bir arada sunulmuştur.
            Sayfadaki bilgiler taslak izahnameye göre hazırlanmıştır ve resmi veriler açıklandıkça
            güncellenmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
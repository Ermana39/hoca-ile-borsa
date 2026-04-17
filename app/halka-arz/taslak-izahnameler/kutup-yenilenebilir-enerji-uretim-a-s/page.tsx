export const metadata = {
  title: "Şirket Adı Halka Arz Detayları 2026 | Taslak İzahname ve Finansal Veriler",
  description:
    "Şirket Adı halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, dağıtım yöntemi, fon kullanım alanları ve finansal veriler.",
};

function ReklamAlani({ buyuk = false }: { buyuk?: boolean }) {
  return (
    <section
      aria-label="Reklam alanı"
      className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${
        buyuk ? "p-4 sm:p-5" : "p-3 sm:p-4"
      }`}
    >
      <div
        className={`w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 ${
          buyuk
            ? "min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]"
            : "min-h-[110px] sm:min-h-[120px] lg:min-h-[140px]"
        }`}
      />
    </section>
  );
}

export default function HalkaArzStandartSayfa() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor" },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "0 Lot" },
    { label: "Aracı Kurum", value: "Hazırlanıyor" },
    { label: "Pazar", value: "Ana Pazar" },
  ];

  const oneCikanlar = [
    {
      title: "Halka Açıklık",
      value: "%0,00",
      desc: "Şirketin halka açık olması planlanan oranı.",
    },
    {
      title: "Fiyat İstikrarı",
      value: "Hazırlanıyor",
      desc: "Fiyat istikrarı işlemleri planlanıyorsa burada yer alır.",
    },
    {
      title: "Satmama Taahhüdü",
      value: "Hazırlanıyor",
      desc: "İhraççı ve ortaklar için taahhüt süresi.",
    },
    {
      title: "Günlük Alım Emri",
      value: "Hazırlanıyor",
      desc: "Varsa günlük alım emri taahhüdü bilgisi.",
    },
  ];

  const halkaArzSekli = [
    "Sermaye artırımı: Hazırlanıyor",
    "Ortak satışı: Hazırlanıyor",
  ];

  const fonKullanim = [
    "Ana yatırım alanı: Hazırlanıyor",
    "İkinci kullanım alanı: Hazırlanıyor",
    "İşletme sermayesi: Hazırlanıyor",
  ];

  const tahsisat = [
    "Yurt İçi Bireysel Yatırımcı: Hazırlanıyor",
    "Yurt İçi Kurumsal Yatırımcı: Hazırlanıyor",
    "Yurt Dışı Kurumsal Yatırımcı: Hazırlanıyor",
  ];

  const finansalVeriler = [
    {
      kalem: "Hasılat",
      "2025/3": "-",
      "2024": "-",
      "2023": "-",
    },
    {
      kalem: "Brüt Kâr",
      "2025/3": "-",
      "2024": "-",
      "2023": "-",
    },
    {
      kalem: "Net Dönem Kârı",
      "2025/3": "-",
      "2024": "-",
      "2023": "-",
    },
    {
      kalem: "Özkaynaklar",
      "2025/3": "-",
      "2024": "-",
      "2023": "-",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Üst Başlık */}
        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Halka Arz İncelemesi
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Şirket Adı Halka Arz Detayları
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname, finansal veriler, tahsisat oranları ve halka arz detayları
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">0</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Dağıtım</div>
                  <div className="mt-1 text-lg font-bold">Eşit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hızlı Özet */}
          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white"
              >
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 text-base font-semibold text-slate-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Öne Çıkanlar Üstü Reklam */}
        <section className="mb-8">
          <ReklamAlani />
        </section>

        {/* Öne Çıkanlar */}
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

        {/* Ana İçerik */}
        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            {/* Halka Arz Şekli */}
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

              <p className="mt-4 text-xs italic text-slate-500">Kaynak: Taslak İzahname</p>
            </section>

            {/* Fon Kullanım Yeri */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-emerald-800">
                    Ana yatırım alanı
                  </div>
                  <div className="text-sm text-emerald-900">{fonKullanim[0]}</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-slate-800">
                      İkinci kullanım alanı
                    </div>
                    <div className="text-sm text-slate-700">{fonKullanim[1]}</div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-slate-800">
                      Destekleyici kullanım
                    </div>
                    <div className="text-sm text-slate-700">{fonKullanim[2]}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Finansal Tablo */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Dönemsel Veriler
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
                        <td className="px-4 py-4 text-sm text-slate-700">{row["2025/3"]}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row["2024"]}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row["2023"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SEO için ek metin alanı */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Şirket Adı Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Şirket Adı halka arz sürecinde yatırımcıların en çok takip ettiği başlıklar;
                halka arz tarihi, fiyat aralığı, lot miktarı, dağıtım yöntemi, tahsisat oranları,
                fon kullanım alanları ve finansal görünüm olmaktadır. Bu sayfada yer alan veriler
                taslak izahname ve halka açık bilgiler esas alınarak özetlenmiştir.
              </p>
            </section>
          </div>

          {/* Sağ Kolon */}
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
                  <div className="text-sm font-semibold text-slate-800">
                    Dağıtılacak Pay Miktarı
                  </div>
                  <p className="mt-2 text-sm text-slate-700">Hazırlanıyor</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Bireysel Dağıtım</div>
                  <p className="mt-2 text-sm text-slate-700">Hazırlanıyor</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">T1-T2 Kullanımı</div>
                  <p className="mt-2 text-sm text-slate-700">Hazırlanıyor</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Satmama Taahhüdü</div>
                  <p className="mt-2 text-sm text-blue-900">Hazırlanıyor</p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">
                    Günlük Alım Emri Taahhüdü
                  </div>
                  <p className="mt-2 text-sm text-indigo-900">Hazırlanıyor</p>
                </div>
              </div>
            </section>
          </aside>
        </section>

        {/* Alt Büyük Reklam */}
        <section className="mt-8">
          <ReklamAlani buyuk />
        </section>

        {/* Alt Açıklama */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            Şirket Adı Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Şirket Adı halka arz sayfasında yatırımcıların hızlı analiz yapabilmesi için halka arz
            tarihi, halka arz fiyatı, lot miktarı, dağıtım yöntemi, halka açıklık oranı, fon
            kullanım alanları, finansal veriler ve taahhüt detayları bir arada sunulmuştur.
            Sayfadaki bilgiler taslak izahname veya açıklanan resmi veriler doğrultusunda
            güncellenmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
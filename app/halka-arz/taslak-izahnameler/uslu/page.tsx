import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Uslu Çsm Demir Çelik A.Ş. Halka Arz Detayları | Taslak İzahname ve Finansal Veriler",
  description:
    "Uslu Çsm Demir Çelik A.Ş. halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, dağıtım yöntemi, fon kullanım alanları ve finansal veriler.",
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

export default function UsluCsmDemirCelikASPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor..." },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor..." },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "25.000.000 Lot" },
    {
      label: "Aracı Kurum",
      value: "Tacirler Yatırım Menkul Değerler A.Ş.",
    },
    { label: "Pazar", value: "Yıldız Pazar" },
    { label: "Halka Açıklık", value: "%20,66" },
    { label: "T1-T2 Durumu", value: "T1-T2 Uygun" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 21.000.000 Lot",
    "Ortak Satışı: 2.000.000 Lot (Selim Uslu)",
    "Ortak Satışı: 2.000.000 Lot (Ercan Uslu)",
  ];

  const fonKullanim = [
    "%10-20 Devam etmekte olan yatırımların tamamlanması.",
    "%5-10 Enerji tasarrufu amaçlı Güneş Enerjisi Santrali (GES) kurulumu.",
    "%40-60 Yeni fabrika yatırımı.",
    "%20-30 İşletme sermayesi.",
  ];

  const finansalVeriler = [
    {
      kalem: "Hasılat",
      d2023_3: "216,0 Milyon TL",
      d2022: "1,1 Milyar TL",
      d2021: "500,1 Milyon TL",
    },
    {
      kalem: "Brüt Kar",
      d2023_3: "30,2 Milyon TL",
      d2022: "87,6 Milyon TL",
      d2021: "133,2 Milyon TL",
    },
  ];

  const oneCikanlar = [
    {
      title: "Toplam Pay",
      value: "25 Mn",
      desc: "Taslak izahnamede yer alan toplam halka arz pay miktarı.",
    },
    {
      title: "Halka Açıklık",
      value: "%20,66",
      desc: "Planlanan halka açıklık oranı.",
    },
    {
      title: "Dağıtım",
      value: "Eşit",
      desc: "Tamamı eşit dağıtım yöntemi ile planlanmaktadır.",
    },
    {
      title: "Fiyat İstikrarı",
      value: "30 Gün",
      desc: "Taslak izahnameye göre 30 gün fiyat istikrarı planlanmaktadır.",
    },
  ];

  const dagitimNotlari = [
    "Tamamı Eşit Dağıtım.",
    "T1-T2 Uygun.",
    "Dağıtılacak pay miktarı ilerleyen aşamalarda güncellenecektir.",
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
                  Uslu Çsm Demir Çelik A.Ş.
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">25.000.000</div>
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

              <p className="mt-4 text-xs italic font-semibold text-slate-500">
                Taslak İzahname, Sayfa 1.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="grid gap-3">
                {fonKullanim.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs italic font-semibold text-slate-500">
                Taslak İzahname, Sayfa 216.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  2023/3 - 2022 - 2021
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
                        2023/3
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2022
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2021
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
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2023_3}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2022}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2021}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs italic font-semibold text-slate-500">
                Taslak İzahname, Sayfa 126.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Uslu Çsm Demir Çelik A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Uslu Çsm Demir Çelik A.Ş. halka arz sürecinde yatırımcıların en çok takip ettiği
                başlıklar arasında halka arz tarihi, fiyat aralığı, pay miktarı, dağıtım yöntemi,
                fon kullanım alanları, halka açıklık oranı, fiyat istikrarı, satmama taahhüdü ve
                finansal görünüm yer alıyor. Bu sayfada şirketin taslak izahname verileri daha sade
                ve analiz edilebilir bir yapıda sunulmuştur.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Dağıtım Notları</h2>

              <div className="space-y-3">
                {dagitimNotlari.map((item, index) => (
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
                    Dağıtılacak Pay Miktarı (Olası)
                  </div>
                  <p className="mt-2 text-sm italic text-slate-700">
                    İlerleyen aşamalarda güncellenecektir.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Aracı Kurum</div>
                  <p className="mt-2 text-sm text-slate-700">
                    Tacirler Yatırım Menkul Değerler A.Ş.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Pazar</div>
                  <p className="mt-2 text-sm text-slate-700">Yıldız Pazar</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Tahmini Halka Arz Takvimi
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    2023 yılının ikinci yarısında tamamlanması planlanmaktadır.
                  </p>
                  <p className="mt-2 text-xs italic font-semibold text-slate-500">
                    Taslak İzahname, Sayfa 199.
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
                  <p className="mt-2 text-xs italic font-semibold text-blue-700">
                    Taslak İzahname, Sayfa 211.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="text-sm font-semibold text-indigo-800">Satmama Taahhüdü</div>
                  <p className="mt-2 text-sm text-indigo-900">1 Yıl, İhraççı.</p>
                  <p className="mt-1 text-sm text-indigo-900">1 Yıl, Ortaklar.</p>
                  <p className="mt-2 text-xs italic font-semibold text-indigo-700">
                    Taslak İzahname, Sayfa 213.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <div className="text-sm font-semibold text-cyan-800">Halka Açıklık</div>
                  <p className="mt-2 text-sm text-cyan-900">%20,66.</p>
                  <p className="mt-2 text-xs italic font-semibold text-cyan-700">
                    Taslak İzahname, Sayfa 199.
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
            Uslu Çsm Demir Çelik A.Ş. Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Uslu Çsm Demir Çelik A.Ş. halka arz sayfasında yatırımcıların hızlı analiz yapabilmesi
            için halka arz tarihi, halka arz fiyatı, lot miktarı, dağıtım yöntemi, fon kullanım
            alanları, finansal veriler, halka açıklık oranı ve taahhüt detayları bir arada
            sunulmuştur. Sayfadaki bilgiler taslak izahnameye göre hazırlanmıştır.
          </p>
        </section>
      </div>
    </main>
  );
}
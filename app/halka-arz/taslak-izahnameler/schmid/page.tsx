import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş. Halka Arz Detayları 2026 | Taslak İzahname ve Finansal Veriler",
  description:
    "Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş. halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, dağıtım yöntemi, fon kullanım alanları ve halka açıklık bilgileri.",
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

export default function SchmidPekintasGunesEnerjiSistemleriSanVeTicASPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor" },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "160.000.000 Lot" },
    {
      label: "Aracı Kurum",
      value:
        "İş Yatırım Menkul Değerler A.Ş.\nTürkiye Sınai Kalkınma Bankası A.Ş.\nZiraat Yatırım Menkul Değerler A.Ş.",
    },
    { label: "Pazar", value: "Hazırlanıyor" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 125.000.000 Lot",
    "Ortak Satışı: 35.000.000 Lot (Özhan Olcay)",
  ];

  const oneCikanlar = [
    {
      title: "Toplam Pay",
      value: "160 Milyon",
      desc: "Toplam halka arz büyüklüğü 160.000.000 lot olarak planlanıyor.",
    },
    {
      title: "Dağıtım",
      value: "Eşit",
      desc: "Taslak bilgilerde eşit dağıtım yöntemi öne çıkıyor.",
    },
    {
      title: "Sermaye Artırımı",
      value: "125 Milyon",
      desc: "Halka arzın büyük kısmı sermaye artırımı tarafında bulunuyor.",
    },
    {
      title: "Ortak Satışı",
      value: "35 Milyon",
      desc: "Kalan bölüm ortak satışı şeklinde planlanıyor.",
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
                  Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş.
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">160.000.000</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Dağıtım</div>
                  <div className="mt-1 text-lg font-bold">Eşit</div>
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

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  Fon kullanım bilgisi
                </div>
                <p className="mt-2 text-sm text-slate-700 italic">
                  İlerleyen aşamalarda tamamlanacaktır.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Tahsisat Grupları</h2>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-800">
                  Tahsisat bilgisi
                </div>
                <p className="mt-2 text-sm text-slate-700 italic">
                  İlerleyen aşamalarda tamamlanacaktır.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş. halka arz sürecinde
                yatırımcıların en çok takip ettiği başlıklar arasında halka arz tarihi, fiyat
                aralığı, pay miktarı, dağıtım yöntemi, sermaye artırımı ve ortak satışı dengesi yer
                alıyor. Bu sayfada taslak izahname verileri daha sade ve analiz edilebilir bir
                yapıda sunulmuştur.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
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
                  <div className="text-sm font-semibold text-slate-800">Halka Açıklık</div>
                  <p className="mt-2 text-sm text-slate-700 italic">
                    İlerleyen aşamalarda tamamlanacaktır.
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
            Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş. Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Schmid Pekintaş Güneş Enerji Sistemleri San. ve Tic. A.Ş. halka arz sayfasında
            yatırımcıların hızlı analiz yapabilmesi için halka arz tarihi, halka arz fiyatı, lot
            miktarı, dağıtım yöntemi, sermaye artırımı ve ortak satışı bilgileri bir arada
            sunulmuştur. Taslak izahname verilerinde henüz netleşmeyen başlıklar açıklandıkça sayfa
            güncellenmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
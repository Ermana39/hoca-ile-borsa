import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Beta Enerji ve Teknoloji A.Ş. Halka Arz Detayları 2026 | Taslak İzahname ve SPK Bülteni Bilgileri",
  description:
    "Beta Enerji ve Teknoloji A.Ş. taslak izahname ve SPK bülteni halka arz detayları, halka arz fiyatı, pay miktarı, sermaye artırımı, ortak satışı, tahmini halka arz büyüklüğü, dağıtım yöntemi, fon kullanım alanları ve finansal veriler.",
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

export default function BetaEnerjiVeTeknolojiASPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Açıklanmadı" },
    { label: "Halka Arz Fiyatı", value: "40,00 TL" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Toplam Halka Arz Payı", value: "60.750.000 Lot" },
    {
      label: "Aracı Kurum",
      value:
        "Yatırım Finansman Menkul Değerler A.Ş.\nTürkiye Sınai Kalkınma Bankası A.Ş.",
    },
    { label: "Pazar", value: "Yıldız Pazar" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 55.000.000 Lot",
    "Ortak Satışı: 1.955.000 Lot (Sabit Dağsuyu)",
    "Ortak Satışı: 1.897.500 Lot (Yusuf Cenç Dağsuyu)",
    "Ortak Satışı: 1.897.500 Lot (Hakkı Mert Dağsuyu)",
    "Toplam Ortak Satışı: 5.750.000 Lot",
  ];

  const sermayeBilgileri = [
    { label: "Mevcut Sermaye", value: "350.000.000 TL" },
    { label: "Yeni Sermaye", value: "405.000.000 TL" },
    { label: "Sermaye Artırımı", value: "55.000.000 TL" },
    { label: "Mevcut Pay Satışı", value: "5.750.000 TL nominal" },
  ];

  const fonKullanim = [
    "%65-70 Büyüme yatırımlarının finansmanı",
    "%30-35 İşletme sermayesi",
  ];

  const tahsisat = [
    "Yurt İçi Bireysel Yatırımcı: Açıklanmadı",
    "Yurt İçi Kurumsal Yatırımcı: Açıklanmadı",
    "Şirket Çalışanları: Açıklanmadı",
  ];

  const finansalVeriler = [
    {
      kalem: "Hasılat",
      d2024_6: "1,4 Milyar TL",
      d2023: "3,1 Milyar TL",
      d2022: "2,1 Milyar TL",
    },
    {
      kalem: "Brüt Kâr",
      d2024_6: "619,1 Milyon TL",
      d2023: "1,2 Milyar TL",
      d2022: "542,3 Milyon TL",
    },
  ];

  const oneCikanlar = [
    {
      title: "Halka Arz Fiyatı",
      value: "40,00 TL",
      desc: "1 TL nominal değerli paylar 40,00 TL sabit fiyat üzerinden satışa sunulacak.",
    },
    {
      title: "Halka Açıklık",
      value: "%15,00",
      desc: "Toplam 60.750.000 lot halka arz payının yeni sermayeye oranı üzerinden hesaplanmıştır.",
    },
    {
      title: "Halka Arz Büyüklüğü",
      value: "2,43 Milyar TL",
      desc: "60.750.000 lot ve 40,00 TL halka arz fiyatı üzerinden hesaplanan tahmini büyüklük.",
    },
    {
      title: "SPK Bülteni",
      value: "Onay Aldı",
      desc: "SPK bülteninde Beta Enerji ve Teknoloji A.Ş. halka arzına ilişkin onay bilgisi yer aldı. Fiyat ve pay detayları taslak izahname verisi olarak korunmuştur.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav
          className="mb-6 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/halka-arz" className="transition hover:text-blue-600">
            Halka Arz
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/halka-arz/taslak-izahnameler"
            className="transition hover:text-blue-600"
          >
            Taslak İzahnameler
          </Link>
        </nav>

        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Taslak İzahname
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Beta Enerji ve Teknoloji A.Ş. Halka Arz
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verileri ve SPK bülteninde yer alan halka arz onay bilgilerine göre hazırlanmış özet sayfa
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">60.750.000</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Fiyat</div>
                  <div className="mt-1 text-lg font-bold">40,00 TL</div>
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
              <h2 className="mb-5 text-xl font-bold text-slate-900">Sermaye ve Satış Bilgileri</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {sermayeBilgileri.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-sm font-medium text-slate-500">{item.label}</div>
                    <div className="mt-2 text-base font-bold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900">SPK Bülteninde Yer Alan Bilgiler</h2>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Halka Arz Onayı
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Ortaklık</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Mevcut Sermaye</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Yeni Sermaye</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Bedelli Sermaye Artırımı</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Mevcut Pay Satışı</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">Satış Fiyatı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                        Beta Enerji ve Teknoloji A.Ş.
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">350.000.000 TL</td>
                      <td className="px-4 py-4 text-sm text-slate-700">405.000.000 TL</td>
                      <td className="px-4 py-4 text-sm text-slate-700">55.000.000 TL</td>
                      <td className="px-4 py-4 text-sm text-slate-700">5.750.000 TL nominal</td>
                      <td className="px-4 py-4 text-sm font-bold text-slate-900">40,00 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                SPK bültenindeki bilgiye göre 1 TL nominal değerli payların satış fiyatı
                40,00 TL olarak yer aldı. Mevcut ortaklardan Sabit Dağsuyu'na ait
                1.955.000 TL, Yusuf Cenç Dağsuyu'na ait 1.897.500 TL ve Hakkı Mert
                Dağsuyu'na ait 1.897.500 TL nominal değerli B grubu paylar halka arza
                konu edilecek.
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-emerald-800">
                    Büyüme yatırımları
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
                  2024/6 - 2023 - 2022
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
                        2024/6
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2023
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                        2022
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
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2024_6}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2023}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{row.d2022}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Beta Enerji ve Teknoloji A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Beta Enerji ve Teknoloji A.Ş. halka arzında 1 TL nominal değerli paylar
                40,00 TL sabit fiyat üzerinden satışa sunulacak. Halka arzın 55.000.000 lotluk
                bölümü sermaye artırımı, 5.750.000 lotluk bölümü ise mevcut ortak pay satışı
                yoluyla gerçekleştirilecek. Toplam 60.750.000 lot halka arz payı üzerinden
                hesaplanan tahmini halka arz büyüklüğü 2,43 milyar TL seviyesindedir.
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
                  Bireysel / Şirket Çalışanları Eşit Dağıtım.
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
                    Tahmini Halka Arz Büyüklüğü
                  </div>
                  <p className="mt-2 text-sm font-bold text-slate-900">2.430.000.000 TL</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Satış Fiyatı</div>
                  <p className="mt-2 text-sm font-bold text-slate-900">40,00 TL</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-blue-900">
                    30 gün. Yatırım Finansman Menkul Değerler A.Ş.
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
                  <p className="mt-2 text-sm text-cyan-900">%15,00</p>
                </div>
              </div>
            </section>
          </aside>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            Beta Enerji ve Teknoloji A.Ş. Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Beta Enerji ve Teknoloji A.Ş. halka arz sayfasında yatırımcıların hızlı analiz
            yapabilmesi için halka arz fiyatı, toplam pay miktarı, sermaye artırımı, ortak satışı,
            tahmini halka arz büyüklüğü, halka açıklık oranı, fon kullanım alanları, finansal
            veriler ve taahhüt detayları bir arada sunulmuştur. Sayfadaki fiyat, sermaye artırımı ve ortak satışı bilgileri taslak izahname
            verilerine göre gösterilmiştir. SPK bülteninde halka arz onayı yer almıştır; talep toplama tarihleri ve tahsisat oranları
            açıklandığında ilgili alanlar ayrıca güncellenmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}

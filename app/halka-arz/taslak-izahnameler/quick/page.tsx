import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Quick Sigorta A.Ş. Halka Arz Detayları 2026 | Taslak İzahname ve Finansal Veriler",
  description:
    "Quick Sigorta A.Ş. halka arz detayları, taslak izahname özeti, halka arz tarihi, fiyat aralığı, lot miktarı, tahsisat grupları, fon kullanım alanları ve önemli taahhüt bilgileri.",
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

export default function QuickSigortaASPage() {
  const summaryItems = [
    { label: "Halka Arz Tarihi", value: "Hazırlanıyor" },
    { label: "Halka Arz Fiyatı / Aralığı", value: "Hazırlanıyor" },
    { label: "Dağıtım Yöntemi", value: "Eşit Dağıtım" },
    { label: "Pay", value: "47.663.000 Lot" },
    { label: "Aracı Kurum", value: "Garanti Yatırım Menkul Kıymetler A.Ş." },
    { label: "Pazar", value: "Yıldız Pazar" },
  ];

  const halkaArzSekli = [
    "Sermaye Artırımı: 25.998.000 Lot",
    "Ortak Satışı: 12.703.770 Lot (Mahmut Erdemoğlu)",
    "Ortak Satışı: 1.083.250 Lot (Mine Erdemoğlu)",
    "Ortak Satışı: 1.083.250 Lot (Gökay Erdemoğlu)",
    "Ortak Satışı: 1.083.250 Lot (Türkay Erdemoğlu)",
    "Ortak Satışı: 1.083.250 Lot (Mather Yatırım Holding A.Ş.)",
    "Ortak Satışı: 649.950 Lot (Levent Ulucen)",
    "Ortak Satışı: 649.950 Lot (Ahmet Yaşar)",
    "Ortak Satışı: 649.950 Lot (Volkan Yıldız)",
    "Ortak Satışı: 433.300 Lot (İsmail Kızılbay)",
    "Ortak Satışı: 270.183 Lot (Bülent Yıldırım)",
    "Ortak Satışı: 216.650 Lot (Eyup Ozsoy)",
    "Ortak Satışı: 108.325 Lot (Halil Aleddinoğlu)",
    "Ortak Satışı: 108.325 Lot (Şenol Küni)",
    "Ortak Satışı: 108.325 Lot (Yusuf Hakan Alkan)",
    "Ortak Satışı: 108.325 Lot (Pınar Güzey)",
    "Ortak Satışı: 86.660 Lot (Mustafa Çalık)",
    "Ortak Satışı: 80.885 Lot (Zafer Emir)",
    "Ortak Satışı: 54.163 Lot (Adnan Kışla)",
    "Ortak Satışı: 54.163 Lot (Atilla Konar)",
    "Ortak Satışı: 54.163 Lot (Nurettin Karaca)",
    "Ortak Satışı: 54.163 Lot (Haluk Baltacı)",
    "Ortak Satışı: 54.163 Lot (Eyup Güneysel)",
    "Ortak Satışı: 54.163 Lot (Serdar Karayel)",
    "Ortak Satışı: 54.163 Lot (Selim Aydın)",
    "Ortak Satışı: 40.622 Lot (Müge Cantekinler)",
    "Ortak Satışı: 27.081 Lot (Sevda Kökçü)",
    "Ortak Satışı: 27.081 Lot (Selvet Sümbül)",
    "Ortak Satışı: 27.081 Lot (Ebru Çalı)",
    "Ortak Satışı: 27.081 Lot (Yasemin Ezeerden)",
    "Ortak Satışı: 21.665 Lot (Sinan Oraner)",
    "Ortak Satışı: 21.665 Lot (Eray Yalçın)",
    "Ortak Satışı: 18.054 Lot (Begüm Uysal)",
    "Ortak Satışı: 14.000 Lot (Kemal Gülmez)",
    "Ortak Satışı: 14.000 Lot (Ertan Tan)",
    "Ortak Satışı: 13.541 Lot (Fatma Nezihe Turhan)",
    "Ortak Satışı: 10.833 Lot (Şehnaz Demir)",
    "Ortak Satışı: 10.833 Lot (Serdar Yıldırım)",
    "Ortak Satışı: 10.833 Lot (Sefer Sınmaz)",
    "Ortak Satışı: 10.833 Lot (Burcu Kışla Şen)",
    "Ortak Satışı: 10.833 Lot (Songün Kaya)",
    "Ortak Satışı: 10.833 Lot (Gizem Saral)",
    "Ortak Satışı: 10.833 Lot (Erdem Aslan)",
    "Ortak Satışı: 10.833 Lot (Ali Taşkın)",
    "Ortak Satışı: 10.833 Lot (Elif Özgüler)",
    "Ortak Satışı: 10.833 Lot (Fatma Deniz Edincgil)",
    "Ortak Satışı: 10.833 Lot (Halise Sibel Doğaç)",
    "Ortak Satışı: 10.833 Lot (Medine Bur Turpan)",
    "Ortak Satışı: 10.833 Lot (Hakan Yayla)",
    "Ortak Satışı: 10.833 Lot (Alper Gürbüz)",
    "Ortak Satışı: 10.833 Lot (Esra Çallak)",
    "Ortak Satışı: 10.833 Lot (Ela Okay)",
    "Ortak Satışı: 8.750 Lot (Hülya Demirer)",
    "Ortak Satışı: 5.416 Lot (Selim Çağdatay)",
    "Ortak Satışı: 5.250 Lot (Serdar Şiraz)",
    "Ortak Satışı: 4.550 Lot (Hasan Altuğ Dönmez)",
    "Ortak Satışı: 4.333 Lot (İbrahim Ağacık)",
    "Ortak Satışı: 4.333 Lot (Julide Masak Merkey)",
    "Ortak Satışı: 4.333 Lot (Zeynep Ece Elliatoğlu)",
    "Ortak Satışı: 4.333 Lot (Gülen Gürbüz)",
    "Ortak Satışı: 3.500 Lot (Özlem Karakuş)",
    "Ortak Satışı: 3.500 Lot (İrem Aksaray)",
    "Ortak Satışı: 3.500 Lot (Nihan Alioğlu)",
    "Ortak Satışı: 3.500 Lot (Yasemin Etike Koç)",
    "Ortak Satışı: 3.250 Lot (Tuncay Tutar)",
    "Ortak Satışı: 2.625 Lot (Özge İnce)",
    "Ortak Satışı: 2.625 Lot (Hacı Ahmet Babacan)",
    "Ortak Satışı: 2.167 Lot (Abdullah Kanbur)",
    "Ortak Satışı: 2.167 Lot (Burak Karahan)",
    "Ortak Satışı: 2.167 Lot (Duygu Korkmaz)",
    "Ortak Satışı: 2.167 Lot (Tuğba Genç)",
    "Ortak Satışı: 2.167 Lot (Mustafa Ünlü)",
    "Ortak Satışı: 1.750 Lot (Firuze Süer)",
    "Ortak Satışı: 1.750 Lot (Özlem Erdoğan)",
    "Ortak Satışı: 875 Lot (Muhammet Çelik)",
    "Ortak Satışı: 875 Lot (Elvan Küçüktryaki)",
  ];

  const fonKullanim = ["%100 Özkaynağın güçlendirilmesi."];

  const tahsisat = [
    "Yurt İçi Bireysel Yatırımcı: Açıklanmadı",
    "4.776.300 Lot (%10) Yüksek Başvurulu Yatırımcı",
    "Yurt İçi Kurumsal Yatırımcı: Açıklanmadı",
  ];

  const oneCikanlar = [
    {
      title: "Halka Açıklık",
      value: "%10,38",
      desc: "Şirketin halka açık olması planlanan oranı.",
    },
    {
      title: "Fiyat İstikrarı",
      value: "30 Gün",
      desc: "Brüt halka arz gelirinin %20'si ile fiyat istikrarı planlanıyor.",
    },
    {
      title: "Satmama Taahhüdü",
      value: "1 Yıl",
      desc: "İhraççı ve ortaklar için 1 yıl satmama taahhüdü bulunuyor.",
    },
    {
      title: "Tahsisat",
      value: "YB Oransal",
      desc: "Yüksek başvurulu yatırımcı için oransal dağıtım bilgisi yer alıyor.",
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
                <h1 className="text-2xl font-bold sm:text-3xl">Quick Sigorta A.Ş.</h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="text-xs text-blue-100">Toplam Pay</div>
                  <div className="mt-1 text-lg font-bold">47.663.000</div>
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
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="mb-2 text-sm font-semibold text-emerald-800">
                  Kaynak kullanımı
                </div>
                <div className="text-sm text-emerald-900">{fonKullanim[0]}</div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Finansal tablo özeti
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm leading-7 text-slate-700">
                  Detaylı finansal tablolar için izahnameye göz atın.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Quick Sigorta A.Ş. Halka Arz Yorumu
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Quick Sigorta A.Ş. halka arz sürecinde yatırımcıların en çok takip ettiği başlıklar
                arasında halka arz tarihi, fiyat aralığı, pay miktarı, dağıtım yöntemi, tahsisat
                oranları, fon kullanım alanları ve taahhüt detayları yer alıyor. Bu sayfada
                şirketin taslak izahname verileri daha sade ve analiz edilebilir bir yapıda
                sunulmuştur.
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
                  Yüksek Başvurulu Oransal Dağıtım.
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
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">Fiyat İstikrarı</div>
                  <p className="mt-2 text-sm text-blue-900">
                    30 gün. Brüt halka arz gelirinin %20'si.
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
                  <p className="mt-2 text-sm text-cyan-900">%10,38</p>
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
            Quick Sigorta A.Ş. Halka Arz Değerlendirmesi
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Quick Sigorta A.Ş. halka arz sayfasında yatırımcıların hızlı analiz yapabilmesi için
            halka arz tarihi, halka arz fiyatı, lot miktarı, dağıtım yöntemi, halka açıklık oranı,
            fon kullanım alanları ve taahhüt detayları bir arada sunulmuştur. Sayfadaki bilgiler
            taslak izahnameye göre hazırlanmıştır ve resmi veriler açıklandıkça güncellenmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
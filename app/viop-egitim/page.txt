import Link from "next/link";

export default function ViopEgitimPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e40af_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#16a34a_0%,transparent_30%)] opacity-30" />

        <div className="relative mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                Yaşayan VİOP Eğitim Serisi
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                VİOP’u Sıfırdan Öğrenmek İsteyenler İçin Yaşayan Eğitim Serisi 📊
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Bu eğitim sadece 12 videoluk klasik bir kurs değil. Bu, zaman
                içinde büyümeye devam edecek yaşayan bir VİOP eğitim arşivi.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:destekhocaileborsa@gmail.com?subject=VİOP Eğitim Serisi Katılım Talebi"
                  className="rounded-2xl bg-emerald-500 px-6 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                >
                  Katılmak İçin Mail Gönder
                </a>

                <a
                  href="#icerik"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
                >
                  Eğitim İçeriğini Gör
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-slate-950/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Lansmana Özel
                </p>

                <div className="mt-4">
                  <p className="text-slate-400 line-through">
                    Standart fiyat: 2.950 TL
                  </p>
                  <p className="mt-2 text-5xl font-black text-emerald-400">
                    1.475 TL
                  </p>
                  <p className="mt-2 text-sm font-semibold text-orange-300">
                    %50 indirimli lansman fiyatı
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                  Erişim, YouTube gizli video oynatma listesi üzerinden mail
                  hesabınıza tanımlanacaktır.
                </div>

                <a
                  href="mailto:destekhocaileborsa@gmail.com?subject=VİOP Eğitim Serisi Katılım Talebi"
                  className="mt-6 block rounded-2xl bg-white px-5 py-4 text-center font-black text-slate-950 transition hover:bg-slate-200"
                >
                  destekhocaileborsa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="icerik" className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="text-2xl font-black sm:text-3xl">
            Sıfırdan başlayacağız:
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "VİOP nedir?",
              "Long-short mantığı",
              "Teminat ve kaldıraç",
              "Günlük uzlaşma",
              "Emir ekranı",
              "Kontrat seçimi",
              "Vade sonu",
              "Rollover",
              "Risk yönetimi",
              "Stop disiplini",
              "Spekülatif işlem mantığı",
              "En sık yapılan hatalar",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
              >
                <p className="font-bold text-slate-100">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white">
              Eğitimin Amacı
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Eğitimin amacı; VİOP’u hiç bilmeyen birinin önce sistemi
              anlaması, sonra da VİOP’u bilinçli, kontrollü ve en verimli
              şekilde kullanabilecek seviyeye gelmesi.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-emerald-300">
              En Önemli Farkı
            </h2>

            <p className="mt-5 text-lg leading-8 text-emerald-50">
              Bu seri yaşayan bir eğitim olacak. Zaman içinde ömür boyu yeni
              örnek işlem analizleri, piyasa örnekleri, işlem öncesi/sonrası
              değerlendirmeler ve risk yönetimi örnekleri aynı oynatma listesine
              eklenmeye devam edecek.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="text-2xl font-black sm:text-3xl">
            Katılım ve Erişim Bilgisi
          </h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Standart Fiyat
              </p>
              <p className="mt-2 text-3xl font-black line-through text-slate-500">
                2.950 TL
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-500 p-5 text-slate-950">
              <p className="text-sm font-black">Lansmana Özel %50 İndirim</p>
              <p className="mt-2 text-4xl font-black">1.475 TL</p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Katılım İçin
              </p>
              <a
                href="mailto:destekhocaileborsa@gmail.com?subject=VİOP Eğitim Serisi Katılım Talebi"
                className="mt-2 block break-words text-lg font-black text-emerald-400 hover:text-emerald-300"
              >
                destekhocaileborsa@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950 p-5">
            <p className="leading-7 text-slate-300">
              Erişim, YouTube gizli video oynatma listesi üzerinden mail
              hesabınıza tanımlanacaktır. Eğitime katılmak isteyenler yukarıdaki
              mail adresi üzerinden iletişime geçebilir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl border border-orange-400/20 bg-orange-400/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-orange-300">
            Önemli Bilgilendirme
          </h2>

          <p className="mt-4 leading-7 text-orange-50">
            Bu eğitim yatırım tavsiyesi değildir. Al-sat sinyali veya portföy
            yönetimi hizmeti içermez. Eğitim ve bilgilendirme amacı taşır.
          </p>
        </div>
      </section>
    </main>
  );
}
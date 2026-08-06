import Link from "@/components/NoPrefetchLink";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "VİOP Eğitim Serisi | Hoca İle Borsa",
  description:
    "VİOP’u sıfırdan öğrenmek isteyenler için yaşayan eğitim serisi. 12 bölümlük temel eğitim ve zaman içinde eklenecek örnek işlem analizleri.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/viop-egitim",
  },
};

const egitimKonulari = [
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
];

const yasayanArsivMaddeleri = [
  "Örnek işlem analizleri",
  "Piyasa içinden gerçek örneklendirmeler",
  "İşlem öncesi düşünce mantığı",
  "İşlem sonrası değerlendirmeler",
  "Risk yönetimi ve stop örnekleri",
  "Doğru ve hatalı karar noktaları",
];

const bolumler = [
  {
    number: "01",
    title: "VİOP Nedir?",
    items: ["VİOP’un mantığı", "Spot piyasadan farkı", "Ne işe yarar?"],
  },
  {
    number: "02",
    title: "Vadeli İşlem Sözleşmesi",
    items: ["Sözleşme nedir?", "Vade nedir?", "Dayanak varlık nedir?"],
  },
  {
    number: "03",
    title: "Long ve Short Mantığı",
    items: [
      "Long işlem nedir?",
      "Short işlem nedir?",
      "Yükseliş ve düşüşten kazanma mantığı",
    ],
  },
  {
    number: "04",
    title: "Teminat ve Kaldıraç",
    items: ["Teminat sistemi", "Kaldıraç nedir?", "Risk nasıl büyür?"],
  },
  {
    number: "05",
    title: "Günlük Uzlaşma",
    items: [
      "Kâr-zarar nasıl işler?",
      "Gün sonu hesap mantığı",
      "Teminata etkisi",
    ],
  },
  {
    number: "06",
    title: "Emir Sistemi ve İşlem Ekranı",
    items: [
      "VİOP ekranı nasıl okunur?",
      "Alış ve satış kademeleri",
      "Limit emir ve piyasa emir mantığı",
    ],
  },
  {
    number: "07",
    title: "Vade Sonu İşleyişi",
    items: [
      "Vade sonu günü ne olur?",
      "Endeks kontratlarında nakdi uzlaşma",
      "Son güne pozisyon taşımanın riskleri",
    ],
  },
  {
    number: "08",
    title: "Pozisyon Taşıma ve Rollover",
    items: [
      "Rollover nedir?",
      "Yeni vadeye geçiş mantığı",
      "Likiditenin yeni vadeye kayması",
    ],
  },
  {
    number: "09",
    title: "VİOP’ta Risk Yönetimi",
    items: [
      "İşlem başına risk belirleme",
      "Pozisyon boyutu ayarlama",
      "Kaldıraç kontrolü",
    ],
  },
  {
    number: "10",
    title: "Stop Mantığı ve Zarar Kes Disiplini",
    items: [
      "Stop neden gerekir?",
      "Teknik stop ve parasal stop farkı",
      "Stop kullanırken yapılan hatalar",
    ],
  },
  {
    number: "11",
    title: "Spekülatif Amaçlı VİOP Kullanımı",
    items: [
      "Yön beklentisiyle işlem açmak",
      "Trend yönünde işlem almak",
      "Haber etkisiyle işlem açmanın riski",
    ],
  },
  {
    number: "12",
    title: "VİOP’ta En Sık Yapılan Hatalar",
    items: [
      "Teminatın tamamını kullanmak",
      "Stopsuz işlem yapmak",
      "Spot mantıkla VİOP işlemeye çalışmak",
    ],
  },
];

export default function ViopEgitimPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            ← Ana Sayfa
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">
                  Yaşayan Eğitim Serisi
                </span>
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  VİOP’u Sıfırdan Öğren
                </span>
              </div>

              <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                VİOP’u Sıfırdan Öğrenmek İsteyenler İçin Yaşayan Eğitim Serisi
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                Bu eğitim sadece 12 videoluk klasik bir kurs değil. Zaman
                içinde büyümeye devam edecek, örnek işlem analizleriyle
                güçlenecek yaşayan bir VİOP eğitim arşividir.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-950">12</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Temel eğitim bölümü
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-950">Ömür Boyu</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Yeni örnek işlem içerikleri
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-950">
                    Uygulamalı
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Pratik ve anlaşılır anlatım
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">
                  Lansmana Özel Kısa Süreli Fırsat
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-slate-300">
                    Standart Fiyat
                  </p>
                  <p className="mt-1 text-3xl font-black text-white line-through md:text-4xl">
                    2.950 TL
                  </p>

                  <div className="mt-4 h-px w-full bg-white/10" />

                  <p className="mt-4 text-sm font-semibold text-emerald-300">
                    Lansmana Özel Kısa Süre %50 İndirimli Fiyat
                  </p>
                  <p className="mt-1 text-5xl font-black text-emerald-300 md:text-6xl">
                    1.475 TL
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                  <p className="text-sm leading-6 text-emerald-50">
                    Eğitim serisini satın almak için aşağıdaki formdan mesaj
                    gönderebilirsiniz. Erişim, YouTube gizli video oynatma
                    listesi üzerinden mail hesabınıza tanımlanacaktır.
                  </p>
                </div>

                <a
                  href="#basvuru-formu"
                  className="mt-6 block rounded-2xl bg-emerald-400 px-5 py-4 text-center text-base font-black text-slate-950 transition hover:bg-emerald-300"
                >
                  Mesaj Gönder
                </a>

                <p className="mt-4 break-words text-center text-sm font-semibold text-slate-300">
                  destekhocaileborsa@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">
              Eğitimin Amacı
            </span>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
              Sıfırdan başlayıp VİOP’u bilinçli kullanabilecek seviyeye gelmek
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Eğitimin amacı; VİOP’u hiç bilmeyen birinin önce sistemi
              anlaması, sonrasında ise VİOP’u bilinçli, kontrollü ve en verimli
              şekilde kullanabilecek seviyeye gelmesidir.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {egitimKonulari.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-base font-bold text-slate-900">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-black text-white">
              En Önemli Fark
            </span>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
              Bu seri yaşayan bir eğitim olacak
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Eğitim tamamlandıktan sonra da zaman içinde yeni örnek işlem
              analizleri, piyasa örnekleri, işlem öncesi/sonrası
              değerlendirmeler ve risk yönetimi örnekleri aynı oynatma listesine
              eklenmeye devam edecek.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-black text-slate-950">
              Yaşayan arşive eklenecek örnek içerikler
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {yasayanArsivMaddeleri.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="font-bold text-slate-800">📌 {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="mb-6">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
            Eğitim İçeriği
          </span>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
            12 bölümlük VİOP eğitim planı
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            Konular en temelden başlayarak, işlem ekranı, vade sonu, rollover,
            risk yönetimi ve stop disiplinine kadar adım adım ilerler.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bolumler.map((bolum) => (
            <article
              key={bolum.number}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white">
                  {bolum.number}
                </div>

                <div>
                  <h3 className="text-lg font-black leading-6 text-slate-950">
                    {bolum.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {bolum.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-0.5 text-emerald-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="basvuru-formu" className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-700">
                Katılım ve Mesaj Formu
              </span>

              <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
                Eğitim serisini satın almak için mesaj gönderin
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-700">
                Form üzerinden mesaj gönderirken mesaj kısmına şu ifadeyi
                yazabilirsiniz:
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-lg font-black text-emerald-800">
                  “VİOP eğitim serisini satın almak istiyorum.”
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-2xl font-black text-slate-950">1</p>
                  <p className="mt-2 font-bold text-slate-800">
                    Mesaj gönderin
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Formdan katılım talebinizi iletin.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-2xl font-black text-slate-950">2</p>
                  <p className="mt-2 font-bold text-slate-800">
                    Bilgilendirme alın
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Ödeme ve erişim bilgileri size iletilir.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-2xl font-black text-slate-950">3</p>
                  <p className="mt-2 font-bold text-slate-800">
                    Erişim tanımlanır
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    YouTube gizli oynatma listesi mail hesabınıza açılır.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-center">
            <div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">
                Lansman Fiyatı
              </span>

              <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
                Standart fiyat ile lansman fiyatı arasındaki avantaj
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Eğitim setinin standart fiyatı 2.950 TL’dir. Lansmana özel
                takipçiler için %50 indirimli fiyat 1.475 TL olarak
                belirlenmiştir.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold text-slate-300">
                Standart Fiyat
              </p>
              <p className="mt-1 text-3xl font-black text-white line-through md:text-4xl">
                2.950 TL
              </p>

              <p className="mt-5 text-sm font-semibold text-emerald-300">
                Lansmana özel %50 indirim
              </p>
              <p className="mt-1 text-5xl font-black text-emerald-300 md:text-6xl">
                1.475 TL
              </p>

              <a
                href="#basvuru-formu"
                className="mt-6 block rounded-2xl bg-emerald-400 px-5 py-4 text-center text-base font-black text-slate-950 transition hover:bg-emerald-300"
              >
                Mesaj Gönder
              </a>

              <p className="mt-4 break-words text-center text-sm font-semibold text-slate-300">
                destekhocaileborsa@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 md:p-8">
          <h2 className="text-xl font-black text-orange-800">
            Önemli Bilgilendirme
          </h2>

          <p className="mt-4 leading-7 text-orange-950">
            Bu eğitim yatırım tavsiyesi değildir. Al-sat sinyali veya portföy
            yönetimi hizmeti içermez. Eğitim ve bilgilendirme amacı taşır.
            Finansal piyasalarda yapılan işlemler risk içerir; işlem kararları
            kişinin kendi sorumluluğundadır.
          </p>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center md:px-6">
          <h2 className="text-2xl font-black text-white md:text-4xl">
            VİOP’u sıfırdan öğrenmek ve yaşayan eğitim arşivine dahil olmak
            ister misiniz?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Eğitim serisini satın almak için mesaj formundan katılım talebinizi
            gönderebilirsiniz.
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href="#basvuru-formu"
              className="rounded-2xl bg-emerald-400 px-7 py-4 text-base font-black text-slate-950 transition hover:bg-emerald-300"
            >
              Mesaj Gönder
            </a>
          </div>

          <Link
            href="/"
            className="mt-6 inline-block text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </section>
    </main>
  );
}

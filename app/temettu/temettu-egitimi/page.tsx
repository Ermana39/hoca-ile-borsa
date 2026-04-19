import Link from "next/link";

const egitimIcerikleri = [
  {
    title: "Temettü Nedir?",
    href: "/temettu/temettu-egitimi/temettu-nedir",
    description:
      "Temettünün ne olduğu, şirketlerin neden kâr payı dağıttığı, yatırımcı açısından ne ifade ettiği ve temettü yatırımının temel mantığı.",
    level: "Başlangıç",
  },
  {
    title: "Brüt / Net Temettü Farkı",
    href: "/temettu/temettu-egitimi/brut-net-temettu-farki",
    description:
      "Brüt temettü ile yatırımcının eline geçen net temettü arasındaki farkı, stopaj etkisini ve gerçek nakit akışını öğrenin.",
    level: "Başlangıç",
  },
  {
    title: "Hak Kullanım Tarihi Ne Demek?",
    href: "/temettu/temettu-egitimi/hak-kullanim-tarihi-ne-demek",
    description:
      "Temettü alabilmek için hangi tarihte hisseye sahip olmak gerektiğini, hak kullanım gününün fiyat ve portföy üzerindeki etkisini detaylı inceleyin.",
    level: "Orta Seviye",
  },
  {
    title: "Ödeme Tarihi Ne Demek?",
    href: "/temettu/temettu-egitimi/odeme-tarihi-ne-demek",
    description:
      "Temettü kararından sonra ödemenin yatırımcı hesabına hangi tarihte geçtiğini ve bu sürecin nasıl işlediğini öğrenin.",
    level: "Başlangıç",
  },
  {
    title: "Temettü Verimi Nasıl Hesaplanır?",
    href: "/temettu/temettu-egitimi/temettu-verimi-nasil-hesaplanir",
    description:
      "Temettü verimi formülü, hisse fiyatı ile ilişkisi, yüksek verimin her zaman avantajlı olup olmadığı ve doğru yorumlama yöntemleri.",
    level: "Orta Seviye",
  },
  {
    title: "Temettüden Sonra Fiyat Neden Düşer?",
    href: "/temettu/temettu-egitimi/temettuden-sonra-fiyat-neden-duser",
    description:
      "Hak kullanım günü sonrası fiyat düzeltmesinin mantığını, teorik fiyat değişimini ve yatırımcı psikolojisinin etkisini anlayın.",
    level: "Orta Seviye",
  },
  {
    title: "Temettü Yatırımı Stratejileri",
    href: "/temettu/temettu-egitimi/temettu-yatirimi-stratejileri",
    description:
      "Uzun vadeli temettü birikimi, düzenli nakit akışı hedefi, bileşik getirinin gücü ve temettü odaklı portföy kurma prensipleri.",
    level: "İleri Seviye",
  },
  {
    title: "Temettü Hissesi Seçerken Nelere Bakılır?",
    href: "/temettu/temettu-egitimi/temettu-hissesi-secerken-nelere-bakilir",
    description:
      "Sürdürülebilir kârlılık, ödeme geçmişi, temettü verimi, borçluluk ve büyüme dengesi gibi kritik seçim kriterleri.",
    level: "İleri Seviye",
  },
  {
    title: "Temettü Takvimi Nasıl Takip Edilir?",
    href: "/temettu/temettu-egitimi/temettu-takvimi-nasil-takip-edilir",
    description:
      "Temettü açıklama tarihleri, genel kurul süreci, hak kullanım günü ve ödeme gününü düzenli takip etmenin pratik yolları.",
    level: "Başlangıç",
  },
];

const oneCikanBasliklar = [
  {
    title: "Temel Kavramlar",
    value: "6+ Başlık",
    description:
      "Temettü yatırımına yeni başlayanlar için en kritik kavramlar sade ama kapsamlı içeriklerle anlatılır.",
  },
  {
    title: "Uygulamalı Öğrenme",
    value: "Adım Adım",
    description:
      "Hak kullanım tarihi, ödeme tarihi ve temettü verimi gibi kavramları gerçek yatırım mantığıyla öğrenebilirsiniz.",
  },
  {
    title: "Uzun Vadeli Bakış",
    value: "Stratejik",
    description:
      "Sadece temettünün ne olduğu değil, uzun vadede nasıl değerlendirileceği de detaylı biçimde ele alınır.",
  },
  {
    title: "Yatırımcı Rehberi",
    value: "Detaylı",
    description:
      "Temettü hissesi seçimi, verim analizi ve fiyat düzeltmesi gibi konular tek sayfada düzenli biçimde sunulur.",
  },
];

export default function TemettuEgitimiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/temettu"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-8 rounded-3xl bg-zinc-50 px-5 py-6 md:px-7 md:py-8">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h1 className="mb-3 text-3xl font-bold text-zinc-900 md:text-4xl">
                Temettü Eğitimi
              </h1>
              <p className="text-sm leading-7 text-zinc-600 md:text-base">
                Temettü eğitimi sayfasında, kâr payı yatırımının temel mantığını
                en baştan başlayarak detaylı şekilde öğrenebilirsiniz. Temettü
                nedir, brüt ve net temettü farkı nasıl oluşur, hak kullanım
                tarihi ne anlama gelir, ödeme tarihi nasıl işler ve temettü
                verimi nasıl hesaplanır gibi en kritik başlıkları tek merkezde
                topladık.
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                Bu içerikler, hem borsaya yeni başlayan yatırımcılar hem de
                temettü odaklı uzun vadeli portföy kurmak isteyenler için
                hazırlanmıştır. Amaç; kavramları sadece tanımlamak değil, gerçek
                yatırım kararlarında nasıl yorumlanmaları gerektiğini de
                anlaşılır biçimde sunmaktır.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm text-zinc-500">İçerik Yapısı</div>
                <div className="mt-2 text-2xl font-bold text-zinc-900">
                  Temelden İleriye
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Başlangıç seviyesinden stratejik bakış açısına kadar uzanan
                  düzenli bir eğitim akışı.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm text-zinc-500">Odak Noktası</div>
                <div className="mt-2 text-2xl font-bold text-zinc-900">
                  Temettü Mantığı
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Nakit akışı, verim, fiyat etkisi ve sürdürülebilir dağıtım
                  bakış açısı birlikte değerlendirilir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 min-h-[120px] w-full" aria-label="Reklam alanı">
          <div className="h-full min-h-[120px] w-full" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Öne Çıkan Başlıklar
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {oneCikanBasliklar.map((item) => (
              <div key={item.title} className="rounded-2xl bg-zinc-50 p-5">
                <div className="text-sm font-medium text-zinc-500">
                  {item.title}
                </div>
                <div className="mt-2 text-2xl font-bold text-zinc-900">
                  {item.value}
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-zinc-900">
                Temettü Eğitimi Konuları
              </h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600 md:text-base">
                Aşağıdaki eğitim başlıkları, temettü yatırımını yüzeysel değil
                mantığıyla kavramak isteyen yatırımcılar için daha ayrıntılı
                hale getirilmiştir. Her başlık, ayrı bir konuya derinleşmenizi
                sağlayacak şekilde hazırlanmıştır.
              </p>
            </div>

            <div className="space-y-4">
              {egitimIcerikleri.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-5 transition hover:bg-zinc-100"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-600">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="text-lg font-bold text-zinc-900">
                Temettü Eğitimi Neden Önemli?
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Temettü yatırımı yalnızca “şirket kâr dağıtıyor” bilgisinden
                ibaret değildir. Temettü verimi, ödeme sürdürülebilirliği,
                şirketin büyüme kapasitesi ve dağıtım sonrası fiyat hareketi
                birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="text-lg font-bold text-zinc-900">
                Bu Sayfada Neler Öğreneceksiniz?
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-zinc-600">
                <li>• Temettünün temel mantığını</li>
                <li>• Hak kullanım ve ödeme tarihi farkını</li>
                <li>• Temettü veriminin nasıl yorumlanacağını</li>
                <li>• Temettü sonrası fiyat düzeltmesinin nedenini</li>
                <li>• Temettü hissesi seçerken dikkat edilmesi gerekenleri</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="text-lg font-bold text-zinc-900">
                Kimler İçin Uygun?
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Temettü yatırımına yeni başlayanlar, düzenli nakit akışı arayan
                yatırımcılar, uzun vadeli hisse biriktirmek isteyenler ve
                temettü hisselerini daha bilinçli analiz etmek isteyen herkes
                için uygundur.
              </p>
            </div>
          </aside>
        </section>

        <section className="mb-8 min-h-[260px] w-full" aria-label="Reklam alanı">
          <div className="h-full min-h-[260px] w-full" />
        </section>

        <section className="rounded-3xl bg-zinc-50 px-5 py-6 md:px-7 md:py-8">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Temettü Eğitimi Hakkında
          </h2>
          <p className="text-sm leading-7 text-zinc-600 md:text-base">
            Temettü eğitimi, borsada kâr payı yatırımını anlamak isteyenler için
            hazırlanmış kapsamlı bir içerik merkezidir. Bu sayfada temettü
            nedir, brüt ve net temettü farkı, hak kullanım tarihi, ödeme tarihi,
            temettü verimi hesaplama yöntemleri, temettü sonrası fiyat düşüşü ve
            temettü odaklı yatırım stratejileri gibi konular detaylı şekilde ele
            alınır. Amaç, yatırımcıların temettü hisselerini daha bilinçli
            analiz edebilmesi ve uzun vadeli kararlarını daha sağlam bir bilgi
            temeline oturtabilmesidir.
          </p>
        </section>
      </div>
    </main>
  );
}
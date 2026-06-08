export const metadata = {
  title: "Hesaplayıcılar | Hoca İle Borsa",
  description:
    "Mevduat, kredi, temettü, borsa kâr/zarar, ortalama maliyet, sermaye artırımı, altın ve döviz getirisi gibi tüm finansal hesaplayıcılara tek sayfadan ulaşın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici" },
};

import Link from "next/link";

const hesaplayiciGruplari = [
  {
    baslik: "Borsa",
    kutular: [
      {
        title: "Kâr / Zarar Hesaplama",
        href: "/borsa/kar-zarar-hesaplama",
        description:
          "Alış-satış fiyatı, lot adedi, komisyon ve stopaj oranlarına göre brüt/net kâr-zarar ve getiri oranınızı hesaplayın.",
      },
      {
        title: "Ortalama Maliyet Hesaplama",
        href: "/borsa/ortalama-maliyet",
        description:
          "Farklı fiyatlardan yaptığınız alımları ekleyerek toplam lot, toplam maliyet ve ağırlıklı ortalama maliyetinizi bulun.",
      },
      {
        title: "Sermaye Artırımı Hesaplama",
        href: "/borsa/sermaye-artirimi",
        description:
          "Bedelli ve bedelsiz sermaye artırımı sonrası kullanım hakkınızı, yeni lot adedinizi ve yeni ortalama maliyetinizi hesaplayın.",
      },
    ],
  },
  {
    baslik: "Temettü",
    kutular: [
      {
        title: "Temettü Hesaplama Aracı",
        href: "/temettu/temettu-hesaplama-araci",
        description:
          "Lot adedi ve lot başına brüt temettüye göre toplam brüt/net temettü tutarınızı hesaplayın.",
      },
      {
        title: "Temettü Verimi Hesaplama",
        href: "/temettu/temettu-verimi-hesaplama",
        description:
          "Hisse fiyatı ve temettü tutarına göre temettü verim oranınızı hesaplayın.",
      },
    ],
  },
  {
    baslik: "Mevduat & Kredi",
    kutular: [
      {
        title: "Mevduat Faizi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
        description:
          "Ana para, faiz oranı, vade ve stopaja göre mevduat getirinizi hesaplayın.",
      },
      {
        title: "Enflasyona Karşı Reel Getiri Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
        description:
          "Nominal faiz oranınızı enflasyona göre Fisher formülü ile karşılaştırarak reel getirinizi hesaplayın.",
      },
      {
        title: "Konut Kredisi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
        description: "Kredi tutarı, faiz oranı ve vadeye göre taksit ve toplam ödeme tutarınızı hesaplayın.",
      },
      {
        title: "Tüketici Kredisi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
        description: "Tüketici kredisi taksit ve toplam geri ödeme tutarınızı hesaplayın.",
      },
      {
        title: "Taşıt Kredisi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
        description: "Taşıt kredisi taksit ve toplam geri ödeme tutarınızı hesaplayın.",
      },
    ],
  },
  {
    baslik: "Diğer",
    kutular: [
      {
        title: "Altın Hesaplama Aracı",
        href: "/hesaplayici/altin",
        description:
          "Gram altın fiyatına göre gram, çeyrek, yarım veya tam altının toplam değerini ve spread farkını hesaplayın.",
      },
      {
        title: "Döviz Getirisi Hesaplama",
        href: "/hesaplayici/doviz-getiri",
        description:
          "TL tutarınızın döviz kuru değişimine göre getirisini ve enflasyona göre reel karşılaştırmasını hesaplayın.",
      },
    ],
  },
];

export default function HesaplayiciPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Hesaplayıcılar</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Hesaplayıcılar
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-base">
            Borsa, temettü, mevduat, kredi, altın ve döviz ile ilgili tüm
            hesaplama araçlarına bu sayfa üzerinden ulaşabilirsiniz. Tüm
            hesaplamalar tarayıcınızda, sunucuya istek gönderilmeden yapılır.
          </p>
        </section>

        {hesaplayiciGruplari.map((grup) => (
          <section key={grup.baslik} className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
              {grup.baslik}
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {grup.kutular.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  prefetch={false}
                  aria-label={item.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] md:p-5"
                >
                  <h3 className="text-base font-bold text-slate-900 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                    <span>Hesapla</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Hesaplayıcılar hakkında
          </h2>
          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Bu sayfada borsa yatırımcıları ve tasarruf sahipleri için
              hazırlanmış kâr/zarar, ortalama maliyet, sermaye artırımı,
              temettü, mevduat, kredi, altın ve döviz getirisi hesaplama
              araçlarını bir arada bulabilirsiniz.
            </p>
            <p className="text-zinc-500">
              Bu araçlar yatırım tavsiyesi değildir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

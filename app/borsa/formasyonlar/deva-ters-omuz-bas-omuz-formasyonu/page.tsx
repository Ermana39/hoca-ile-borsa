import type { Metadata } from "next";

const formasyonData = {
  kod: "DEVA",
  tur: "Ters Omuz Baş Omuz Formasyonu",
  periyot: "Saatlik",
  durum: "Onaylandı",
  ilkDirenc: "78,66 TL",
  formasyonHedefi: "82,38 TL",
  bozulmaSeviyesi: "73,50 TL",
  sonGuncelleme: "20 Temmuz 2026",
};

const sayfaUrl =
  "https://hocaileborsa.com/formasyonlar/deva-ters-omuz-bas-omuz-formasyonu";

export const metadata: Metadata = {
  title: "DEVA Ters Omuz Baş Omuz Formasyonu | Saatlik Teknik Analiz",
  description:
    "DEVA saatlik grafikte ters omuz baş omuz formasyonunu onayladı. 78,66 TL ilk direnç, 82,38 TL formasyon hedefi ve 73,50 TL bozulma seviyesi olarak izleniyor.",
  alternates: {
    canonical: sayfaUrl,
  },
  openGraph: {
    title: "DEVA Ters Omuz Baş Omuz Formasyonu Onaylandı",
    description:
      "DEVA saatlik periyotta ters omuz baş omuz formasyonu ile takip ediliyor. Direnç, hedef ve bozulma seviyeleri teknik açıdan değerlendirildi.",
    url: sayfaUrl,
    type: "article",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVA Ters Omuz Baş Omuz Formasyonu",
    description:
      "DEVA saatlik grafikte ters omuz baş omuz formasyonunu onayladı.",
  },
};

const seviyeler = [
  {
    baslik: "İlk Direnç",
    deger: formasyonData.ilkDirenc,
    aciklama:
      "Formasyon onayı sonrasında fiyatın ilk etapta karşılaşabileceği direnç bölgesi olarak izlenebilir.",
  },
  {
    baslik: "Formasyon Hedefi",
    deger: formasyonData.formasyonHedefi,
    aciklama:
      "Ters omuz baş omuz yapısının çalışmaya devam etmesi halinde teknik olarak takip edilebilecek hedef bölgedir.",
  },
  {
    baslik: "Bozulma Seviyesi",
    deger: formasyonData.bozulmaSeviyesi,
    aciklama:
      "Bu seviyenin altındaki fiyatlamalarda formasyon yapısı zayıflayabilir ve teknik görünüm yeniden değerlendirilmelidir.",
  },
];

const teknikBasliklar = [
  {
    baslik: "Formasyonun Anlamı",
    metin:
      "Ters omuz baş omuz formasyonu, düşüş eğilimi sonrasında oluşabilen dönüş yapılarından biridir. Sol omuz, baş ve sağ omuz bölgelerinin ardından boyun çizgisinin aşılması, satış baskısının zayıfladığına ve alıcıların güç kazandığına işaret edebilir.",
  },
  {
    baslik: "DEVA Grafiğinde Öne Çıkan Yapı",
    metin:
      "DEVA saatlik grafikte ters omuz baş omuz formasyonunu onaylamış görünüm sergiliyor. Boyun çizgisinin aşılmasıyla teknik yapı güç kazanırken fiyatın ilk direnç alanına doğru hareket potansiyeli oluştuğu görülüyor.",
  },
  {
    baslik: "Direnç ve Hedef Bölgesi",
    metin:
      "Teknik görünümde 78,66 TL seviyesi ilk direnç olarak öne çıkıyor. Bu bölgenin aşılması ve üzerinde kalıcılık sağlanması halinde 82,38 TL seviyesindeki formasyon hedefi takip edilebilir. Hedefe yönelik hareketin güç kazanması için direnç geçişlerinde işlem hacmi ve kapanışların destekleyici olması önemlidir.",
  },
  {
    baslik: "Risk ve Bozulma Seviyesi",
    metin:
      "73,50 TL seviyesi formasyonun bozulma bölgesi olarak izlenebilir. Fiyatın bu seviyenin altına gerilemesi halinde sağ omuz yapısı zayıflayabilir ve ters omuz baş omuz formasyonuna dayalı pozitif teknik görünüm geçerliliğini kaybedebilir.",
  },
];

const senaryolar = [
  {
    baslik: "Pozitif Senaryo",
    metin:
      "DEVA fiyatı 78,66 TL direncini aşar ve bu bölge üzerinde kalıcılık sağlarsa 82,38 TL formasyon hedefi teknik olarak gündeme gelebilir.",
  },
  {
    baslik: "Nötr Senaryo",
    metin:
      "Fiyat 73,50 TL üzerinde kalmasına rağmen 78,66 TL direncini aşmakta zorlanırsa kısa vadede yatay ve dalgalı bir görünüm oluşabilir.",
  },
  {
    baslik: "Negatif Senaryo",
    metin:
      "73,50 TL seviyesinin altına inilmesi durumunda formasyon yapısı bozulabilir. Bu durumda ters omuz baş omuz formasyonuna dayalı teknik görünüm geçerliliğini kaybedebilir.",
  },
];

const faqItems = [
  {
    soru: "DEVA ters omuz baş omuz formasyonu onaylandı mı?",
    cevap:
      "Saatlik periyotta DEVA için ters omuz baş omuz formasyonu onaylanmış görünümle takip ediliyor.",
  },
  {
    soru: "DEVA için ilk direnç seviyesi nedir?",
    cevap:
      "Teknik görünümde DEVA için ilk direnç seviyesi 78,66 TL olarak izlenebilir.",
  },
  {
    soru: "DEVA formasyon hedefi kaç TL?",
    cevap:
      "Ters omuz baş omuz formasyonuna göre takip edilen teknik hedef 82,38 TL seviyesidir.",
  },
  {
    soru: "DEVA formasyonu hangi seviyede bozulur?",
    cevap:
      "73,50 TL seviyesi formasyonun bozulma bölgesi olarak izlenebilir. Bu seviyenin altındaki fiyatlamalarda teknik yapı zayıflayabilir.",
  },
];

export default function DevaTersOmuzBasOmuzFormasyonuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.soru,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.cevap,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DEVA Ters Omuz Baş Omuz Formasyonu",
    description:
      "DEVA saatlik grafikte ters omuz baş omuz formasyonu görünümü, teknik seviyeler, direnç, hedef fiyat ve bozulma seviyesiyle birlikte değerlendirildi.",
    author: {
      "@type": "Organization",
      name: "Hoca ile Borsa",
    },
    publisher: {
      "@type": "Organization",
      name: "Hoca ile Borsa",
    },
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    mainEntityOfPage: sayfaUrl,
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/15 px-4 py-1 text-sm font-semibold text-emerald-300">
              Formasyon Onaylandı
            </span>
            <span className="rounded-full bg-slate-800 px-4 py-1 text-sm text-slate-300">
              {formasyonData.periyot} Periyot
            </span>
            <span className="rounded-full bg-slate-800 px-4 py-1 text-sm text-slate-300">
              {formasyonData.sonGuncelleme}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {formasyonData.kod} Saatlik Grafikte Ters Omuz Baş Omuz Formasyonu
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {formasyonData.kod} saatlik periyotta ters omuz baş omuz
            formasyonunu onayladı. Teknik görünümde{" "}
            <strong className="text-white">{formasyonData.ilkDirenc}</strong>{" "}
            ilk direnç, {" "}
            <strong className="text-white">
              {formasyonData.formasyonHedefi}
            </strong>{" "}
            formasyon hedefi ve{" "}
            <strong className="text-white">
              {formasyonData.bozulmaSeviyesi}
            </strong>{" "}
            bozulma seviyesi olarak öne çıkıyor.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {seviyeler.map((item) => (
              <div
                key={item.baslik}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg"
              >
                <p className="text-sm text-slate-400">{item.baslik}</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {item.deger}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold text-white">
                DEVA Teknik Görünüm Özeti
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                DEVA hissesi saatlik grafikte ters omuz baş omuz formasyonu ile
                takip ediliyor. Bu yapı, düşüş sonrasında satış baskısının
                zayıfladığını ve fiyatın boyun çizgisini aşmasıyla kısa vadeli
                dönüş ihtimalinin güç kazandığını gösterebilir.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                Formasyonun onaylanmasıyla birlikte ilk takip edilecek seviye
                78,66 TL direncidir. Bu bölgenin aşılması ve üzerinde kalıcılık
                sağlanması halinde 82,38 TL formasyon hedefi izlenebilir. Buna
                karşılık 73,50 TL altındaki fiyatlamalarda formasyon yapısının
                bozulabileceği unutulmamalıdır.
              </p>
            </div>

            {teknikBasliklar.map((item) => (
              <div
                key={item.baslik}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h2 className="text-2xl font-bold text-white">{item.baslik}</h2>
                <p className="mt-4 leading-8 text-slate-300">{item.metin}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold text-white">
                DEVA İçin Teknik Senaryolar
              </h2>

              <div className="mt-6 space-y-4">
                {senaryolar.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.baslik}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.metin}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold text-white">
                Formasyonda Dikkat Edilecek Noktalar
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li className="leading-7">
                  78,66 TL seviyesi ilk direnç olarak takip edilebilir.
                </li>
                <li className="leading-7">
                  Direnç üzerinde kalıcılık sağlanmadan hedef hareketinin
                  güçlendiğini söylemek erken olabilir.
                </li>
                <li className="leading-7">
                  82,38 TL seviyesi formasyon hedefi olarak izlenebilir.
                </li>
                <li className="leading-7">
                  73,50 TL altındaki fiyatlamalar formasyon yapısını bozabilir.
                </li>
                <li className="leading-7">
                  Hacim artışı ve saatlik kapanışlar teknik teyit açısından
                  ayrıca takip edilmelidir.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold text-white">
                Sıkça Sorulan Sorular
              </h2>

              <div className="mt-6 space-y-5">
                {faqItems.map((item) => (
                  <div
                    key={item.soru}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                  >
                    <h3 className="font-semibold text-white">{item.soru}</h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.cevap}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="sticky top-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">
                Formasyon Bilgileri
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Hisse Kodu</span>
                  <strong className="text-white">{formasyonData.kod}</strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Formasyon</span>
                  <strong className="text-right text-white">
                    {formasyonData.tur}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Periyot</span>
                  <strong className="text-white">{formasyonData.periyot}</strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Durum</span>
                  <strong className="text-emerald-300">
                    {formasyonData.durum}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-400">İlk Direnç</span>
                  <strong className="text-white">
                    {formasyonData.ilkDirenc}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Hedef</span>
                  <strong className="text-white">
                    {formasyonData.formasyonHedefi}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Bozulma</span>
                  <strong className="text-rose-300">
                    {formasyonData.bozulmaSeviyesi}
                  </strong>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
              <h3 className="font-semibold text-amber-200">
                Önemli Bilgilendirme
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-100/90">
                Bu içerik teknik analiz görünümünü paylaşmak amacıyla
                hazırlanmıştır. Buradaki seviyeler alım-satım önerisi değildir.
                Yatırım kararları kişisel risk profili ve güncel piyasa koşulları
                dikkate alınarak verilmelidir.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

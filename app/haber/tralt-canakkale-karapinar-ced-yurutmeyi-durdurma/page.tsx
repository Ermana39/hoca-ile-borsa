import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: { absolute: "TRALT Karapınar ÇED Davasında Kesin Ara Karar" },
  description:
    seoAciklamasi("TRALT Karapınar Projesi için verilen ÇED olumlu kararına ilişkin davada yürütmeyi durdurma istemi kesin olarak kabul edildi. Kararın ayrıntılarını okuyun.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı",
  description:
    "Türk Altın İşletmeleri, Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi için verilen ÇED olumlu kararına karşı açılan davada yürütmeyi durdurma isteminin kesin olarak kabul edildiğini açıkladı.",
  datePublished: "2026-06-26T09:00:00+03:00",
  dateModified: "2026-06-26T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma.webp",
};

export default function TraltCanakkaleKarapinarCedYurutmeyiDurdurmaPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma.webp"
              alt="TRALT Çanakkale Karapınar Projesi için yürütmeyi durdurma kararı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                TRALT Çanakkale Karapınar Projesinde Yürütmeyi Durdurma Kararı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                26.06.2026 ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Türk Altın İşletmeleri A.Ş. (TRALT), Çanakkale ilinde planlanan
                Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi Projesiyle ilgili
                önemli bir hukuki gelişmeyi KAP üzerinden duyurdu. Şirket
                açıklamasına göre, projeye verilen ÇED olumlu kararının iptali
                istemiyle açılan davada mahkeme, yürütmenin durdurulması talebini
                kesin olarak kabul etti.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  Şirket daha önce 30 Ekim 2025 tarihli KAP açıklamasında,
                  Çanakkale Belediye Başkanlığı tarafından Çanakkale 1. İdare
                  Mahkemesi&apos;nin 2025/1054 esas sayılı dosyası üzerinden dava
                  açıldığını kamuoyuna duyurmuştu. Bu dava, Çanakkale Karapınar
                  Projesi için verilen ÇED olumlu kararının iptali talebine
                  dayanıyordu.
                </p>
                <p>
                  Yeni açıklamaya göre söz konusu dava dosyasında verilen ara karar,
                  26 Haziran 2026 tarihinde şirkete tebliğ edildi. Bu ara karar
                  uyarınca mahkeme, yürütmenin durdurulması isteminin kesin olarak
                  kabulüne hükmetti. Şirket aynı açıklamada, davanın esasına ilişkin
                  yargılamanın sürdüğünü ve henüz nihai karar verilmediğini de
                  özellikle belirtti.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Yürütmenin durdurulması kararı, idari bir işlemin davanın sonuna
                  kadar uygulanmasının geçici olarak durdurulması anlamına gelir.
                  Bu tür kararlar, mahkemenin dava konusu işlemin uygulanması halinde
                  telafisi güç veya imkânsız sonuçlar doğabileceği kanaatine
                  vardığını gösterir. Burada durdurulan işlem, Karapınar Projesi için
                  verilmiş olan ÇED olumlu kararıdır.
                </p>
                <p>
                  Bu nedenle karar, proje süreci açısından doğrudan önemlidir.
                  Çünkü maden ve enerji benzeri büyük ölçekli projelerde ÇED olumlu
                  kararı, izin ve uygulama sürecinin temel taşlarından biridir.
                  Bu kararın yürütmesinin durdurulması, proje takvimi, uygulama
                  aşamaları ve yatırım planlaması üzerinde gecikme veya belirsizlik
                  yaratabilir.
                </p>
                <p>
                  Ancak burada kritik ayrım şudur: Şirketin de belirttiği üzere
                  dosyada henüz nihai karar verilmiş değildir. Yani bu aşama,
                  projenin tamamen iptal edildiği anlamına gelmez; dava sonuçlanana
                  kadar süreci etkileyen geçici ama güçlü bir hukuki ara aşamadır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  ÇED olumlu kararı neden önemli?
                </h2>
                <p>
                  ÇED, yani Çevresel Etki Değerlendirmesi, büyük ölçekli sanayi,
                  enerji, madencilik ve altyapı projelerinde çevresel etkilerin
                  incelendiği temel izin süreçlerinden biridir. Bir proje için
                  ÇED olumlu kararı alınması, yatırımın ilerleyebilmesi açısından
                  çoğu zaman kritik önemdedir. Bu yüzden ÇED kararına karşı açılan
                  davalar, şirketler için yalnızca hukuki değil, aynı zamanda
                  operasyonel ve yatırım takvimi açısından da yüksek etki taşır.
                </p>
                <p>
                  Özellikle madencilik projelerinde ruhsat, çevre, izin ve yerel
                  idari süreçler bir arada ilerlediği için, bu başlıklardan birinde
                  yaşanan gecikme bile projenin zamanlamasını doğrudan etkileyebilir.
                  Bu haberin ayrı haber değeri taşımasının temel nedeni de budur:
                  burada rutin bir dava bilgisi değil, proje uygulamasını etkileyebilecek
                  seviyede bir ara karar söz konusu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Türk Altın İşletmeleri A.Ş., madencilik alanında faaliyet gösteren
                  ve özellikle altın ile gümüş odaklı projeleriyle öne çıkan bir
                  şirkettir. Bu tip şirketlerde değerleme ve yatırım beklentileri,
                  yalnızca mevcut üretim faaliyetlerine değil; aynı zamanda proje
                  portföyüne, rezerv gelişimine, ruhsat süreçlerine ve yeni sahaların
                  ilerleme durumuna da bağlı olarak şekillenir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  TRALT haberi, kısa vadede olumsuz algılanabilecek güçlü bir
                  hukuki gelişme niteliği taşıyor. Çünkü mahkemenin yürütmeyi
                  durdurma istemini kesin olarak kabul etmesi, Çanakkale Karapınar
                  Projesi açısından izin sürecinde ciddi bir belirsizlik doğuruyor.
                  Piyasa açısından bu tip kararlar, özellikle proje büyümesi ve yeni
                  saha beklentisi üzerinden değerlenen madencilik şirketlerinde
                  yakından izlenir.
                </p>
                <p>
                  Bununla birlikte haberi değerlendirirken aşırı kesin yargılardan
                  kaçınmak gerekir. Mahkemenin verdiği karar, nihai hüküm değildir;
                  yargılama devam etmektedir. Dolayısıyla bundan sonraki süreçte
                  şirketin savunmaları, dava dosyasındaki gelişmeler ve esas hakkında
                  verilecek nihai karar belirleyici olacaktır.
                </p>
                <p>
                  Yatırımcı açısından burada öğrenilmesi gereken ana mekanizma
                  şudur: Bir projenin ekonomik potansiyeli kadar, o projeye ilişkin
                  hukuki ve idari süreçlerin sağlıklı ilerlemesi de önemlidir.
                  Özellikle madencilik gibi izin yoğun sektörlerde, hukuki süreçler
                  zaman zaman finansal beklentiler kadar kritik hale gelebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Şirketin açıklamasına göre dosyada henüz nihai karar verilmiş
                  değil. Bundan sonraki süreçte yatırımcıların takip etmesi gereken
                  başlık, Çanakkale 1. İdare Mahkemesi&apos;nde yürüyen davanın esasına
                  ilişkin karar olacak. Şirketin bu sürece ilişkin yeni KAP
                  açıklamaları, olası itiraz veya yargı süreci gelişmeleri ve
                  projenin takvimine etkileri de ayrıca izlenecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                TRALT, Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi
                Projesi için verilen ÇED olumlu kararına karşı açılan davada,
                mahkemenin yürütmeyi durdurma istemini kesin olarak kabul ettiğini
                açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-bold text-rose-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-rose-800 md:text-base">
                Negatif — ÇED olumlu kararının yürütmesinin durdurulması, proje
                takvimi ve izin süreci üzerinde belirsizlik yaratabilecek önemli bir
                hukuki gelişme olarak öne çıkıyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Mahkeme kararı nihai hüküm değildir. Yargılama devam etmektedir ve
                dosyada henüz esas hakkında kesin karar verilmemiştir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621212"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-zinc-700 underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              27.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/tralt-canakkale-karapinar-ced-yurutmeyi-durdurma" />
</article>
</div>
    </main>
  );
}

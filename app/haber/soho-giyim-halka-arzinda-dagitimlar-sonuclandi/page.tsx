import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "SOHO Giyim Halka Arzında Dağıtımlar Sonuçlandı",
  description:
    "SOHO Giyim halka arzında dağıtımlar tamamlandı. En yüksek 390.085 lot alan yatırımcı bulunurken, gözler Golda Gıda halka arzındaki talep sayılarına çevrildi.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/soho-giyim-halka-arzinda-dagitimlar-sonuclandi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/soho-giyim-halka-arzinda-dagitimlar-sonuclandi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/soho-giyim-halka-arzinda-dagitimlar-sonuclandi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SOHO Giyim Halka Arzında Dağıtımlar Sonuçlandı",
  description:
    "SOHO Giyim halka arzında dağıtımlar tamamlandı. En yüksek 390.085 lot alan yatırımcı bulunurken, gözler Golda Gıda halka arzındaki talep sayılarına çevrildi.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/soho-giyim-halka-arzinda-dagitimlar-sonuclandi",
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
  image: "https://www.hocaileborsa.com/soho-giyim-halka-arzinda-dagitimlar-sonuclandi.webp",
};

export default function SohoGiyimHalkaArzindaDagitimlarSonuclandiPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              src="/soho-giyim-halka-arzinda-dagitimlar-sonuclandi.webp"
              alt="SOHO Giyim halka arzında dağıtımlar sonuçlandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                SOHO Giyim Halka Arzında Dağıtımlar Sonuçlandı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                <time dateTime={haberSaati}>{haberTarihi}</time> ·{" "}
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
                SOHO Giyim halka arzında dağıtım sonuçları netleşti. Tamamen eşit
                dağıtım yöntemiyle gerçekleşen halka arzda en yüksek 390.085 adet
                lot alan yatırımcı bulunması, dağıtım dinamiği açısından dikkat
                çekti.
              </p>

              <p>
                Tamamen eşit dağıtım halka arzlarda yatırımcı sayısı, kişi başına
                düşen lot miktarını doğrudan etkileyen en önemli değişkendir. Bu
                nedenle SOHO Giyim’de ortaya çıkan dağıtım tablosu, yarın talep
                sonuçları takip edilecek Golda Gıda halka arzı için de yatırımcıların
                beklentilerini yeniden gözden geçirmesine neden olabilir.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  SOHO Giyim halka arzında dağıtımlar sonuçlandı. Halka arzda en
                  yüksek 390.085 adet lot alan yatırımcı olduğu görüldü.
                </p>
                <p>
                  Bu veri, özellikle yüksek tutarlı başvuru yapan yatırımcıların
                  alabileceği maksimum lot miktarı açısından öne çıktı. Halka arzın
                  tamamen eşit dağıtım yöntemiyle yapılması nedeniyle sonuçlar,
                  yatırımcı sayısı ve başvuru büyüklüğü üzerinden ayrıca
                  değerlendiriliyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Tamamen eşit dağıtım ne anlama geliyor?
                </h2>
                <p>
                  Tamamen eşit dağıtım yönteminde lot dağıtımı, yatırımcı grupları
                  arasında oransal bir yapıdan çok başvuru yapan yatırımcı sayısı
                  üzerinden şekillenir. Bu yöntemde katılımcı sayısı arttıkça kişi
                  başına düşen lot miktarı azalabilir.
                </p>
                <p>
                  Bu nedenle halka arz yatırımcıları sadece şirketin büyüklüğüne
                  veya halka arz tutarına değil, aynı zamanda toplam talep sayısına
                  da bakar. Çünkü aynı halka arz büyüklüğünde daha fazla katılımcı
                  olması, kişi başına düşen lotun aşağı gelmesine neden olabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  390.085 lot detayı neden önemli?
                </h2>
                <p>
                  SOHO Giyim halka arzında en yüksek 390.085 lot alan yatırımcı
                  bulunması, dağıtımın üst sınır tarafında nasıl şekillendiğini
                  göstermesi açısından önemli. Bu rakam, özellikle yüksek lot
                  başvurusu yapan yatırımcıların halka arz sonucunda ne kadar pay
                  alabildiğini gösteren güçlü bir referans niteliği taşıyor.
                </p>
                <p>
                  Ancak bu veri tek başına halka arzın tamamına ilişkin kesin bir
                  yorum yapmak için yeterli değildir. Ortalama dağıtım, toplam
                  katılımcı sayısı, bireysel talep büyüklüğü ve halka arz edilen pay
                  miktarı birlikte değerlendirilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Gözler Golda Gıda halka arzına çevrildi
                </h2>
                <p>
                  SOHO Giyim dağıtım sonuçlarının ardından dikkatler Golda Gıda
                  halka arzına çevrildi. Golda Gıda halka arzının da tamamen eşit
                  dağıtım yöntemiyle yapılması nedeniyle, talep sayılarının
                  yenilenmesi ve güncel katılımcı beklentisinin tekrar hesaplanması
                  gerekecek.
                </p>
                <p>
                  Özellikle SOHO Giyim’de ortaya çıkan dağıtım tablosu, Golda Gıda
                  için yapılacak lot tahminlerinde önceki varsayımların yeniden
                  gözden geçirilmesini gerektirebilir. Çünkü aynı dağıtım yönteminde
                  yatırımcı sayısındaki her değişim, kişi başına düşebilecek lot
                  miktarını doğrudan etkiler.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Yatırımcılar hangi verileri takip etmeli?
                </h2>
                <p>
                  Golda Gıda tarafında en kritik başlık toplam talep sayısı olacak.
                  Katılımcı sayısı önceki beklentilerin üzerine çıkarsa kişi başına
                  düşen lot miktarı azalabilir. Talep beklenenden daha sınırlı kalırsa
                  dağıtım miktarı yukarı yönde değişebilir.
                </p>
                <p>
                  Bu nedenle yarın açıklanacak veya güncellenecek talep verileri,
                  Golda Gıda halka arzı için yapılacak lot tahminlerinde belirleyici
                  olacak. Özellikle tamamen eşit dağıtım halka arzlarda eski talep
                  tahminleri, yeni halka arz sonuçları geldikçe hızla güncelliğini
                  kaybedebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  SOHO Giyim halka arzında dağıtımların tamamlanması, sadece bu
                  halka arz için değil, aynı yöntemle yapılacak diğer halka arzlar
                  için de önemli bir gösterge oluşturdu. En yüksek 390.085 lot
                  dağıtımı, yüksek başvuru yapan yatırımcıların alabileceği pay
                  miktarı açısından dikkat çeken bir veri olarak öne çıktı.
                </p>
                <p>
                  Burada asıl önemli nokta, halka arz yatırımcılarının dağıtım
                  sonuçlarını artık tekil bir veri olarak değil, sonraki halka arzlar
                  için karşılaştırmalı bir referans olarak takip etmesi. SOHO Giyim
                  sonrası Golda Gıda için yapılacak tahminlerde de benzer bir bakış
                  açısı gerekecek.
                </p>
                <p>
                  Özellikle tamamen eşit dağıtım halka arzlarda “kaç lot gelir?”
                  sorusunun cevabı sabit değildir. Katılımcı sayısı, toplam talep,
                  halka arz edilen pay miktarı ve yatırımcı davranışı bu hesabı
                  doğrudan değiştirir. Bu yüzden Golda Gıda için talep sayılarının
                  güncel tutulması daha sağlıklı bir tahmin yapılmasını sağlayacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte Golda Gıda halka arzına ilişkin güncel talep
                  sayıları takip edilecek. Talep verileri netleştikçe kişi başına
                  düşebilecek olası lot miktarı ve dağıtım beklentisi yeniden
                  hesaplanabilecek.
                </p>
                <p>
                  SOHO Giyim sonucu, Golda Gıda için doğrudan birebir sonuç vermez;
                  ancak aynı dağıtım yöntemi nedeniyle yatırımcı davranışı açısından
                  önemli bir karşılaştırma zemini oluşturur.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                SOHO Giyim halka arzında dağıtımlar sonuçlandı. En yüksek 390.085
                lot alan yatırımcı bulunurken, tamamen eşit dağıtım yöntemi nedeniyle
                gözler Golda Gıda halka arzındaki güncel talep sayılarına çevrildi.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Nötr-Takip — SOHO Giyim dağıtım sonucu tamamlandı. Aynı dağıtım
                yöntemine sahip Golda Gıda için talep sayılarının güncellenmesi,
                lot tahminlerinin daha sağlıklı yapılması açısından önemli olacak.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                SOHO Giyim’de oluşan dağıtım sonucu, Golda Gıda için doğrudan aynı
                sonucu garanti etmez. Golda Gıda’da kişi başına düşecek lot miktarı,
                açıklanacak güncel talep sayısı ve toplam başvuru büyüklüğüne göre
                yeniden şekillenecektir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                SOHO Giyim halka arz dağıtım sonuçları ve yatırımcı başvuru
                verilerine ilişkin piyasa ekranı / halka arz dağıtım bilgileri.
              </p>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/soho-giyim-halka-arzinda-dagitimlar-sonuclandi" />
</article>
</div>
    </main>
  );
}
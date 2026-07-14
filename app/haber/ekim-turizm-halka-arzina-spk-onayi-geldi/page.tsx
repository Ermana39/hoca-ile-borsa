import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Ekim Turizm Halka Arzına SPK Onayı Geldi",
  description:
    "SPK, Ekim Turizm Ticaret ve Sanayi AŞ halka arzına onay verdi. Halka arz fiyatı 30,26 TL olurken toplam 162 milyon lot satışa sunulacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ekim-turizm-halka-arzina-spk-onayi-geldi",
  },
  openGraph: {
    title: "Ekim Turizm Halka Arzına SPK Onayı Geldi",
    description:
      "Ekim Turizm halka arzı SPK’dan onay aldı. Halka arz fiyatı, sermaye artırımı, ortak satışı ve izahname detayları haberimizde.",
    url: "https://www.hocaileborsa.com/haber/ekim-turizm-halka-arzina-spk-onayi-geldi",
    siteName: "Hoca ile Borsa",
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ekim-turizm-halka-arzina-spk-onayi-geldi.webp",
        width: 1200,
        height: 675,
        alt: "Ekim Turizm halka arzına SPK onayı geldi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekim Turizm Halka Arzına SPK Onayı Geldi",
    description:
      "SPK, Ekim Turizm halka arzına onay verdi. Halka arz fiyatı 30,26 TL olarak açıklandı.",
    images: [
      "https://www.hocaileborsa.com/ekim-turizm-halka-arzina-spk-onayi-geldi.webp",
    ],
  },
};

const izahnameLink = "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Ekim Turizm Halka Arzına SPK Onayı Geldi",
  description:
    "SPK, Ekim Turizm Ticaret ve Sanayi AŞ halka arzına onay verdi. Halka arz fiyatı 30,26 TL olurken toplam 162 milyon lot satışa sunulacak.",
  datePublished: "2026-06-25T09:00:00+03:00",
  dateModified: "2026-06-25T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/ekim-turizm-halka-arzina-spk-onayi-geldi",
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
  image: "https://www.hocaileborsa.com/ekim-turizm-halka-arzina-spk-onayi-geldi.webp",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/haberler" className="hover:text-blue-600">
              Haberler
            </Link>
            <span>/</span>
            <span>Halka Arz</span>
          </div>

          <span className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Halka Arz
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ekim Turizm Halka Arzına SPK Onayı Geldi
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Sermaye Piyasası Kurulu, Ekim Turizm Ticaret ve Sanayi AŞ’nin halka
            arz başvurusuna onay verdi. Halka arz fiyatı 30,26 TL olarak
            açıklanırken, şirket sermaye artırımı ve ortak satışı yoluyla
            yatırımcıların karşısına çıkacak.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>Yayınlanma: 25 Haziran 2026</span>
            <span>•</span>
            <span>Kaynak: SPK Bülteni</span>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <Image
            src="/ekim-turizm-halka-arzina-spk-onayi-geldi.webp"
            alt="Ekim Turizm halka arzına SPK onayı geldi"
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Ne oldu?</h2>

          <p className="mt-4 leading-8 text-slate-700">
            SPK’nın yayımladığı bültende Ekim Turizm Ticaret ve Sanayi AŞ’nin
            halka arzına onay verildi. Şirket payları 1 TL nominal değerli pay
            için 30,26 TL sabit fiyat üzerinden satışa sunulacak.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Halka arz fiyatı</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                30,26 TL
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Mevcut sermaye</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                700.000.000 TL
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Yeni sermaye</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                832.000.000 TL
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Toplam satışa konu pay</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                162.000.000 lot
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Başlık
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Detay
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Şirket
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    Ekim Turizm Ticaret ve Sanayi AŞ
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Halka arz fiyatı
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    30,26 TL
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Sermaye artırımı
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    132.000.000 TL nominal değerli pay
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Mevcut pay satışı
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    30.000.000 TL nominal değerli pay
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Mevcut sermaye
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    700.000.000 TL
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Yeni sermaye
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    832.000.000 TL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Bu ne anlama geliyor?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Halka arz onayı, şirketin borsada işlem görme sürecinde önemli bir
            aşamayı tamamladığını gösterir. Ancak bu aşama tek başına yatırım
            kararı anlamına gelmez. Talep toplama tarihleri, dağıtım yöntemi,
            halka arz büyüklüğü, fon kullanım alanları ve şirketin finansal
            yapısı birlikte değerlendirilmelidir.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Ekim Turizm halka arzında sermaye artırımı ve ortak satışı birlikte
            yer alıyor. Sermaye artırımıyla satılan paylardan elde edilen gelir
            şirket kasasına girerken, mevcut pay satışında gelir payını satan
            ortağa aktarılır. Bu ayrım, halka arzdan sağlanacak kaynağın ne
            kadarının doğrudan şirkete gideceğini anlamak açısından önemlidir.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Şirket hakkında
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Ekim Turizm Ticaret ve Sanayi AŞ, turizm ve hizmet alanındaki
            faaliyetleriyle halka arz sürecine giren şirketlerden biri oldu.
            Turizm sektörü dönemsel talep, operasyonel doluluk oranları,
            maliyet yapısı ve tüketici harcamalarındaki değişimlerden doğrudan
            etkilenebilen bir yapıdadır.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Bu nedenle yatırımcıların şirketi değerlendirirken yalnızca halka
            arz fiyatına değil; faaliyet modeli, gelir kaynakları, finansal
            tablolar, borçluluk durumu, büyüme planı ve halka arz gelirinin
            kullanım alanlarına birlikte bakması gerekir.
          </p>

          <div className="mt-5 rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
            <p className="leading-7 text-blue-950">
              Ekim Turizm’in onaylı izahname detaylarını incelemek için
              aşağıdaki bağlantıdan şirketin halka arz sayfasına
              ulaşabilirsiniz.
            </p>

            <Link
              href={izahnameLink}
              className="mt-3 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Ekim Turizm onaylı izahname sayfası
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Değerlendirme</h2>

          <p className="mt-4 leading-8 text-slate-700">
            Ekim Turizm halka arzında fiyat 30,26 TL olarak açıklanırken,
            toplam satışa konu pay miktarı sermaye artırımı ve mevcut pay satışı
            toplamında 162.000.000 lot seviyesinde bulunuyor. Bu yapı,
            yatırımcıların arzın yalnızca fiyat tarafına değil, kaynak yaratma
            biçimine de odaklanmasını gerektiriyor.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Sermaye artırımı tarafı şirketin büyüme, finansman veya işletme
            sermayesi ihtiyaçları için kaynak yaratma potansiyeli taşırken,
            ortak satışı şirket kasasına doğrudan nakit girişi sağlamaz. Bu
            nedenle onaylı izahnamede yer alan fon kullanım planı, finansal
            veriler ve risk faktörleri yatırımcı açısından ana inceleme
            başlıkları olacaktır.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Sırada ne var?</h2>

          <p className="mt-4 leading-8 text-slate-700">
            SPK onayının ardından Ekim Turizm için talep toplama tarihleri,
            dağıtım yöntemi, katılım endeksine uygunluk bilgisi ve işlem görmeye
            başlayacağı pazar yatırımcılar tarafından takip edilecek. Bu
            başlıklar netleştikçe halka arz sürecinin takvimi daha görünür hale
            gelecek.
          </p>

          <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900 ring-1 ring-amber-200">
            Bu haber yatırım tavsiyesi değildir. Halka arzlara katılım kararı
            verilmeden önce şirketin onaylı izahnamesi, finansal tabloları,
            risk faktörleri ve fon kullanım planı dikkatle incelenmelidir.
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Onaylı izahname bağlantısı
          </h2>

          <Link
            href={izahnameLink}
            className="mt-5 block rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <span className="block font-semibold text-slate-900">
              Ekim Turizm Ticaret ve Sanayi AŞ
            </span>
            <span className="mt-1 block text-sm text-slate-600">
              Halka arz fiyatı: 30,26 TL
            </span>
            <span className="mt-2 block text-sm font-semibold text-blue-600">
              Onaylı izahname sayfasını incele
            </span>
          </Link>
        </section>
                <HaberAltKisim href="/haber/ekim-turizm-halka-arzina-spk-onayi-geldi" />
</article>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İsvea Seramik Halka Arzına SPK Onayı Geldi",
  description:
    "SPK, İsvea Seramik ve Banyo Ürünleri Sanayi AŞ halka arzına onay verdi. Halka arz fiyatı 20,90 TL olurken toplam 67 milyon lot satışa sunulacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/isvea-seramik-halka-arzina-spk-onayi-geldi",
  },
  openGraph: {
    title: "İsvea Seramik Halka Arzına SPK Onayı Geldi",
    description:
      "İsvea Seramik halka arzı SPK’dan onay aldı. Halka arz fiyatı, sermaye artırımı, ortak satışı ve izahname detayları haberimizde.",
    url: "https://www.hocaileborsa.com/haber/isvea-seramik-halka-arzina-spk-onayi-geldi",
    siteName: "Hoca ile Borsa",
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/isvea-seramik-halka-arzina-spk-onayi-geldi.webp",
        width: 1200,
        height: 675,
        alt: "İsvea Seramik halka arzına SPK onayı geldi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İsvea Seramik Halka Arzına SPK Onayı Geldi",
    description:
      "SPK, İsvea Seramik halka arzına onay verdi. Halka arz fiyatı 20,90 TL olarak açıklandı.",
    images: [
      "https://www.hocaileborsa.com/isvea-seramik-halka-arzina-spk-onayi-geldi.webp",
    ],
  },
};

const izahnameLink =
  "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
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
            İsvea Seramik Halka Arzına SPK Onayı Geldi
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Sermaye Piyasası Kurulu, İsvea Seramik ve Banyo Ürünleri Sanayi
            AŞ’nin halka arz başvurusuna onay verdi. Halka arz fiyatı 20,90 TL
            olarak açıklanırken, şirket sermaye artırımı ve ortak satışı yoluyla
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
            src="/isvea-seramik-halka-arzina-spk-onayi-geldi.webp"
            alt="İsvea Seramik halka arzına SPK onayı geldi"
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Ne oldu?</h2>

          <p className="mt-4 leading-8 text-slate-700">
            SPK’nın yayımladığı bültende İsvea Seramik ve Banyo Ürünleri Sanayi
            AŞ’nin halka arzına onay verildi. Şirket payları 1 TL nominal
            değerli pay için 20,90 TL sabit fiyat üzerinden satışa sunulacak.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Halka arz fiyatı</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                20,90 TL
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Mevcut sermaye</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                220.000.000 TL
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Yeni sermaye</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                280.000.000 TL
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Toplam satışa konu pay</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                67.000.000 lot
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
                    İsvea Seramik ve Banyo Ürünleri Sanayi AŞ
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Halka arz fiyatı
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    20,90 TL
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Sermaye artırımı
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    60.000.000 TL nominal değerli pay
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Mevcut pay satışı
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    7.000.000 TL nominal değerli pay
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Mevcut sermaye
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    220.000.000 TL
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                    Yeni sermaye
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    280.000.000 TL
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
            aşamayı tamamladığını gösterir. Ancak bu onay, yatırımcı açısından
            tek başına yeterli bir karar kriteri değildir. Talep toplama
            tarihleri, dağıtım yöntemi, halka arz büyüklüğü, fon kullanım
            alanları ve şirketin finansal yapısı birlikte incelenmelidir.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            İsvea Seramik halka arzında sermaye artırımı ve mevcut pay satışı
            birlikte yer alıyor. Sermaye artırımıyla satılan paylardan elde
            edilen gelir şirket kasasına girerken, mevcut pay satışında gelir
            payını satan ortağa aktarılır. Bu ayrım, halka arzdan sağlanan
            kaynağın şirketin büyüme ve finansman planlarına ne ölçüde katkı
            vereceğini anlamak açısından önemlidir.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Şirket hakkında
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            İsvea Seramik ve Banyo Ürünleri Sanayi AŞ, seramik ve banyo
            ürünleri alanında faaliyet gösteren şirketlerden biri olarak halka
            arz sürecine giriyor. Sektör, inşaat, yenileme, konut ve ticari yapı
            yatırımlarındaki hareketlilikten doğrudan etkilenebilen bir yapıya
            sahiptir.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Bu nedenle yatırımcıların şirketi değerlendirirken yalnızca halka
            arz fiyatına değil; üretim kapasitesi, satış kanalları, ihracat
            potansiyeli, maliyet yapısı, finansal tablolar, borçluluk durumu ve
            halka arz gelirinin kullanım alanlarına birlikte bakması gerekir.
          </p>

          <div className="mt-5 rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
            <p className="leading-7 text-blue-950">
              İsvea Seramik’in onaylı izahname detaylarını incelemek için
              aşağıdaki bağlantıdan şirketin halka arz sayfasına
              ulaşabilirsiniz.
            </p>

            <Link
              href={izahnameLink}
              className="mt-3 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              İsvea Seramik onaylı izahname sayfası
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Değerlendirme</h2>

          <p className="mt-4 leading-8 text-slate-700">
            İsvea Seramik halka arzında fiyat 20,90 TL olarak açıklanırken,
            toplam satışa konu pay miktarı sermaye artırımı ve mevcut pay satışı
            toplamında 67.000.000 lot seviyesinde bulunuyor. Bu yapı,
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
            SPK onayının ardından İsvea Seramik için talep toplama tarihleri,
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
              İsvea Seramik ve Banyo Ürünleri Sanayi AŞ
            </span>
            <span className="mt-1 block text-sm text-slate-600">
              Halka arz fiyatı: 20,90 TL
            </span>
            <span className="mt-2 block text-sm font-semibold text-blue-600">
              Onaylı izahname sayfasını incele
            </span>
          </Link>
        </section>
      </article>
    </main>
  );
}
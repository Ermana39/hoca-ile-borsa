import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";

export const metadata: Metadata = {
  title: "MARMR'den Polisan Kansai Boya Payları İçin 93 Milyon Dolarlık Ön Mutabakat",
  description:
    "Marmara Holding, %50 iştirak ettiği Polisan Kansai Boya'daki paylarının tamamını Kansai Paint'e 93 milyon dolar bedel üzerinden satmak için bağlayıcı olmayan ön mutabakat imzaladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/marmr-polisan-kansai-boya-pay-satis-on-mutabakati",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/marmr-polisan-kansai-boya-pay-satis-on-mutabakati.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/marmr-polisan-kansai-boya-pay-satis-on-mutabakati.webp",
    ],
  },
};

export default function MarmrPolisanKansaiBoyaPaySatisPage() {
  return (
    <main className="min-h-screen bg-white">
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
              src="/marmr-polisan-kansai-boya-pay-satis-on-mutabakati.webp"
              alt="MARMR Polisan Kansai Boya pay satışı ön mutabakat haberi"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                MARMR’den Polisan Kansai Boya Payları İçin 93 Milyon Dolarlık Ön Mutabakat
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                26.06.2026 · 
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
                Marmara Holding A.Ş. (MARMR), sermayesine %50 oranında iştirak
                ettiği Polisan Kansai Boya Sanayi ve Ticaret A.Ş. paylarına
                ilişkin önemli bir KAP açıklaması yayımladı. Şirket, Polisan
                Kansai Boya’daki paylarının tamamının Japonya merkezli Kansai
                Paint Co., Ltd.’ye satılması konusunda 93 milyon ABD Doları bedel
                üzerinden bağlayıcı olmayan bir ön mutabakat mektubu imzalandığını
                duyurdu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  KAP açıklamasına göre Marmara Holding, Polisan Kansai Boya’da
                  sahip olduğu %50 oranındaki iştirak paylarının tamamını satmak
                  üzere Kansai Paint ile görüşmeler yürüttü. Bu görüşmeler
                  sonucunda taraflar, 26 Haziran 2026 tarihinde bağlayıcı olmayan
                  bir ön mutabakat mektubu imzaladı. Ön mutabakata konu edilen
                  gösterge işlem bedeli 93 milyon ABD Doları olarak açıklandı.
                </p>
                <p>
                  Polisan Kansai Boya’nın diğer %50 oranındaki ortağı Kansai
                  Paint olduğu için, işlem gerçekleşirse şirketin tamamının Kansai
                  Paint kontrolüne geçmesi anlamına gelebilecek bir yapı oluşacak.
                  Ancak mevcut aşamada bu işlem kesinleşmiş bir satış değil; nihai
                  sözleşmeler ve gerekli onay süreçleri tamamlanmadan işlem
                  kapanmış sayılmayacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Bu açıklamanın en kritik noktası, işlemin “bağlayıcı olmayan ön
                  mutabakat” aşamasında olmasıdır. Ön mutabakat, tarafların temel
                  çerçevede anlaşmaya yaklaştığını gösterir; ancak tek başına
                  satışın tamamlandığı anlamına gelmez. KAP açıklamasında da
                  işlemin durum tespit incelemesi, nihai sözleşmeler üzerinde
                  anlaşma sağlanması, sözleşmelerin imzalanması ve gerekli izin
                  ile onayların alınmasına bağlı olduğu açıkça belirtiliyor.
                </p>
                <p>
                  Bu nedenle haber yatırımcı açısından güçlü bir potansiyel
                  taşısa da, henüz koşullu bir süreçtir. Sürecin olumlu
                  tamamlanması halinde Marmara Holding’in önemli tutarda nakit
                  yaratması söz konusu olabilir. Tersi durumda, durum tespiti veya
                  nihai sözleşme görüşmeleri beklenen şekilde tamamlanmazsa işlem
                  gerçekleşmeyebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  İşlem tutarı neden önemli?
                </h2>
                <p>
                  Açıklanan 93 milyon ABD Doları bedel, MARMR açısından dikkat
                  çekici bir iştirak satış potansiyeline işaret ediyor. Holding
                  şirketlerinde iştirak satışları, şirketin nakit pozisyonunu,
                  bilanço yapısını ve ilerideki yatırım/borç ödeme esnekliğini
                  doğrudan etkileyebilir. Bu tip işlemler tamamlandığında, satıştan
                  doğacak kâr veya nakit girişi finansal tablolarda önemli bir
                  başlık haline gelebilir.
                </p>
                <p>
                  Ancak burada yatırımcıların dikkat etmesi gereken ayrım şudur:
                  KAP’ta açıklanan tutar nihai satış geliri gibi görülmemeli; bu
                  aşamada ön mutabakata konu edilen işlem bedeli olarak
                  değerlendirilmelidir. Nihai tutar ve muhasebe etkisi, anlaşmanın
                  tamamlanması ve işlem koşullarının kesinleşmesi sonrasında daha
                  net okunacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Marmara Holding, iştirakleri üzerinden farklı alanlarda varlık
                  ve yatırım yönetimi yapan bir holding yapısına sahiptir. Bu
                  haberde öne çıkan varlık, şirketin %50 oranında iştirak ettiği
                  Polisan Kansai Boya’dır. Polisan Kansai Boya, boya sektöründe
                  faaliyet gösteren ve Japonya merkezli Kansai Paint ortaklığıyla
                  kurulu bir yapı olarak bilinir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  MARMR haberi, klasik bir operasyonel satış veya sipariş
                  açıklamasından farklı olarak iştirak portföyünün yeniden
                  şekillenmesine yönelik stratejik bir işlem niteliği taşıyor.
                  Holding şirketlerinde bu tür gelişmeler, doğrudan günlük ciro
                  etkisinden çok varlık değeri, nakit yaratma kapasitesi ve
                  portföy yapısının sadeleşmesi açısından değerlendirilir.
                </p>
                <p>
                  Haberin pozitif tarafı, 93 milyon ABD Doları gibi somut bir
                  bedel üzerinden görüşmelerde ileri aşamaya geçilmiş olmasıdır.
                  Risk tarafı ise işlemin henüz bağlayıcı nihai sözleşmeye
                  dönüşmemiş olmasıdır. Bu nedenle piyasa tepkisi güçlü olabilir;
                  ancak sağlıklı değerlendirme için durum tespiti sonucunun,
                  nihai sözleşmelerin ve izin/onay süreçlerinin nasıl ilerleyeceği
                  izlenmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ertelenmiş açıklama detayı
                </h2>
                <p>
                  Şirket, görüşmelerin ilk aşamada belirsizlik taşıması nedeniyle
                  içsel bilginin daha önce kamuya açıklanmasının yatırımcıları
                  yanıltabileceği ve şirketin pazarlık gücünü olumsuz
                  etkileyebileceği gerekçesiyle açıklamanın ertelendiğini bildirdi.
                  Bu kararın 30 Mart 2026 tarihli yönetim kurulu kararıyla
                  alındığı açıklandı. Bu detay, sürecin bir süredir yürütülen
                  görüşmelere dayandığını gösteriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte üç başlık takip edilecek: Kansai Paint’in
                  Polisan Kansai Boya’ya ilişkin durum tespit incelemesini
                  tamamlaması, tarafların nihai sözleşmeler üzerinde anlaşmaya
                  varması ve gerekli izin/onay süreçlerinin tamamlanması. Şirket,
                  konuya ilişkin önemli gelişmelerin tam ve zamanında kamuya
                  açıklanacağını bildirdi.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                MARMR, Polisan Kansai Boya’daki %50 iştirak paylarının tamamını
                Kansai Paint’e satmak için 93 milyon ABD Doları bedel üzerinden
                bağlayıcı olmayan ön mutabakat imzaladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — İştirak satış potansiyeli ve 93 milyon ABD Doları
                seviyesindeki işlem bedeli, MARMR için varlık değeri ve olası
                nakit girişi açısından önemli bir gelişme olarak izlenebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                İşlem henüz kesinleşmiş satış değildir. Bağlayıcı olmayan ön
                mutabakat aşamasındadır ve durum tespiti, nihai sözleşme ile izin
                süreçlerine bağlıdır.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1620975"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-zinc-700 underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              26.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="marmr-polisan-kansai-boya-pay-satis-on-mutabakati"
            baslik="MARMR Polisan Kansai Boya pay satışı ön mutabakatı"
          />
        </div>

        <HaberNavigasyon
          href="/haber/marmr-polisan-kansai-boya-pay-satis-on-mutabakati"
          className="mt-8"
        />
      </div>
    </main>
  );
}

import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Beta Enerji Halka Arzında Talep Toplama Tarihleri Ertelendi",
  description:
    seoAciklamasi("Beta Enerji ve Teknoloji A.Ş.’nin daha önce 18-19 Haziran 2026 olarak duyurulan halka arz talep toplama tarihleri, izahnamede yapılması gereken güncelleme ihtiyacı nedeniyle ileri bir tarihe ertelendi.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-talep-toplama-tarihleri-ertelendi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/beta-erteleme.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/beta-erteleme.webp"],
  },
};

const betaEnerjiBasliklari = [
  {
    baslik: "Talep Toplama Tarihleri İleri Bir Tarihe Alındı",
    metin:
      "Beta Enerji ve Teknoloji A.Ş.’nin daha önce 18-19 Haziran 2026 olarak duyurulan halka arz talep toplama tarihleri ileri bir tarihe ertelendi. Ertelemenin, izahnamede yapılması gereken güncelleme ihtiyacı nedeniyle gündeme geldiği belirtildi.",
  },
  {
    baslik: "SPK Görüş ve Yönlendirmeleri Doğrultusunda Güncelleme Yapılacak",
    metin:
      "Açıklamada, sürecin Sermaye Piyasası Kurulu’nun görüş ve yönlendirmeleri doğrultusunda ilerlediği ifade edildi. Bu nedenle halka arz takviminin güncellenmiş izahname ve resmi duyurular sonrasında netleşmesi bekleniyor.",
  },
  {
    baslik: "Yeni Tarihler KAP Üzerinden Duyurulacak",
    metin:
      "Güncellenen talep toplama tarihlerinin Kamuyu Aydınlatma Platformu üzerinden duyurulacağı bildirildi. Bu nedenle yatırımcıların yeni takvim için KAP açıklamalarını takip etmesi önem taşıyor.",
  },
  {
    baslik: "Erteleme Halka Arzın İptal Edildiği Anlamına Gelmiyor",
    metin:
      "Mevcut açıklama, halka arz sürecinin iptal edildiği anlamına gelmiyor. Süreç, izahname tarafında yapılacak güncelleme nedeniyle ileri bir tarihe alınmış durumda. Yeni tarihler açıklandığında talep toplama süreci yeniden yatırımcıların gündemine gelecek.",
  },
  {
    baslik: "Yatırımcılar Güncellenmiş İzahnameyi Takip Etmeli",
    metin:
      "Halka arzlara katılmayı planlayan yatırımcılar açısından izahname güncellemeleri kritik öneme sahiptir. Fon kullanım alanları, halka arz şartları, finansal bilgiler veya süreç detaylarında yapılabilecek değişiklikler karar sürecini etkileyebilir.",
  },
  {
    baslik: "Eski Takvime Göre İşlem Yapılmamalı",
    metin:
      "Yeni talep toplama tarihleri resmi olarak açıklanana kadar daha önce duyurulan 18-19 Haziran takviminin geçerli kabul edilmemesi gerekiyor. Resmi takvim KAP duyurusu ile netleşecektir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Beta Enerji Halka Arzında Talep Toplama Tarihleri Ertelendi",
  description:
    "Beta Enerji ve Teknoloji A.Ş.’nin daha önce 18-19 Haziran 2026 olarak duyurulan halka arz talep toplama tarihleri, izahnamede yapılması gereken güncelleme ihtiyacı nedeniyle ileri bir tarihe ertelendi.",
  datePublished: "2026-06-17T20:00:00+03:00",
  dateModified: "2026-06-17T20:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-talep-toplama-tarihleri-ertelendi",
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
  image: "https://www.hocaileborsa.com/beta-erteleme.webp",
  inLanguage: "tr",
};

export default function HaberBetaEnerjiHalkaArzErtelendiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="w-full overflow-hidden bg-white">
            <Image
              src="/beta-erteleme.webp"
              alt="Beta Enerji halka arz talep toplama tarihleri ertelendi"
              width={1200}
              height={900}
priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzında Talep Toplama Tarihleri Ertelendi
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-17" className="text-sm text-slate-500">
                17 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Beta Enerji ve Teknoloji A.Ş.’nin daha önce 18-19 Haziran 2026
                olarak duyurulan halka arz talep toplama tarihleri ertelendi.
                Erteleme kararının, izahnamede yapılması gereken güncelleme
                ihtiyacından kaynaklandığı belirtildi.
              </p>

              <p>
                Şirketin halka arz sürecine ilişkin yapılan bilgilendirmede,
                güncellemenin Sermaye Piyasası Kurulu’nun görüş ve yönlendirmeleri
                doğrultusunda yapılacağı ifade edildi. Güncellenen talep toplama
                tarihlerinin Kamuyu Aydınlatma Platformu üzerinden duyurulacağı
                bildirildi.
              </p>

              <div className="space-y-5">
                {betaEnerjiBasliklari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Halka Arz Sürecinde Ne Değişti?
              </h2>

              <p>
                Beta Enerji halka arzında daha önce açıklanan takvimde talep
                toplama sürecinin 18-19 Haziran 2026 tarihlerinde yapılması
                bekleniyordu. Son açıklamayla birlikte bu takvim ileri bir tarihe
                alınmış oldu.
              </p>

              <p>
                Bu gelişme, yatırımcıların halka arz başvurusunda bulunacağı
                tarihlerin değişeceği anlamına geliyor. Yeni tarih açıklanana kadar
                aracı kurum ekranlarında görülebilecek eski takvim bilgilerine
                göre işlem yapılmaması ve resmi duyuruların esas alınması gerekiyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Ertelemenin Nedeni Ne?
              </h2>

              <p>
                Açıklamada ertelemenin temel nedeni olarak izahnamede yapılması
                gereken güncelleme ihtiyacı gösterildi. Halka arz izahnameleri,
                şirketin faaliyetleri, finansal bilgileri, halka arz yöntemi,
                pay satışı, fon kullanım planı ve yatırımcı açısından önemli risk
                unsurlarını içeren resmi belgeler arasında yer alıyor.
              </p>

              <p>
                Bu nedenle izahname üzerinde yapılacak güncellemeler, yatırımcıların
                halka arza ilişkin değerlendirmeleri açısından önem taşıyor.
                Güncellenmiş izahname yayımlandığında, önceki bilgiler ile yeni
                açıklanan bilgiler arasındaki farkların dikkatle incelenmesi
                gerekiyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Yeni Talep Toplama Tarihleri Ne Zaman Açıklanacak?
              </h2>

              <p>
                Beta Enerji halka arzında yeni talep toplama tarihleri henüz
                netleşmedi. Yapılan bilgilendirmeye göre güncellenen tarihler
                Kamuyu Aydınlatma Platformu üzerinden duyurulacak.
              </p>

              <p>
                Bu nedenle yatırımcıların, yeni halka arz takvimi için KAP
                bildirimlerini ve yetkili aracı kurum açıklamalarını takip etmesi
                gerekiyor. Resmi açıklama yapılmadan önce net tarih verilmesi doğru
                olmayacaktır.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Yatırımcılar Açısından Neden Önemli?
              </h2>

              <p>
                Halka arz takviminde yaşanan değişiklikler, yatırımcıların nakit
                planlamasını ve başvuru sürecini doğrudan etkileyebilir. Özellikle
                talep toplama günlerinde hesaptaki nakit durumunu, kullanılacak
                aracı kurumu ve başvuru saatlerini takip eden yatırımcılar için
                güncel takvimin netleşmesi önemlidir.
              </p>

              <p>
                Ayrıca izahname güncellemesi sonrasında halka arzın şartlarında,
                fon kullanım detaylarında veya yatırımcıların kararını etkileyebilecek
                bazı açıklamalarda değişiklik olup olmadığı kontrol edilmelidir.
                Bu nedenle sadece tarih değişikliğine değil, güncellenmiş belgelerin
                içeriğine de bakılması gerekir.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Ne İş Yapıyor?
              </h2>

              <p>
                Beta Enerji, elektrik enerjisinin dönüştürülmesi ve iletilmesi
                alanında kullanılan transformatörlerin üretimine odaklanan bir
                sanayi şirketidir. Şirket; güç transformatörleri, dağıtım trafoları,
                beton köşk ve yüksek gerilim anahtarlama sistemleri gibi ürün
                gruplarında faaliyet göstermektedir.
              </p>

              <p>
                Transformatör sektörü, elektrik altyapısı yatırımları, yenilenebilir
                enerji projeleri, sanayileşme, şehirleşme ve elektrikli araç
                dönüşümü gibi uzun vadeli eğilimlerden etkilenen stratejik alanlar
                arasında yer alıyor. Bu nedenle Beta Enerji halka arzı, enerji
                altyapısı ve sanayi teması açısından yatırımcıların yakından takip
                ettiği başlıklardan biri olmaya devam ediyor.
              </p>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Beta Enerji halka arzında en önemli güncel gelişme, daha önce
                18-19 Haziran 2026 olarak duyurulan talep toplama tarihlerinin
                izahname güncellemesi nedeniyle ileri bir tarihe ertelenmiş olmasıdır.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Yeni talep toplama tarihleri henüz açıklanmadı. Güncellenen
                takvimin Kamuyu Aydınlatma Platformu üzerinden duyurulması
                bekleniyor.
              </div>

              <HaberIlgiliBolumler
                slug="beta-enerji-halka-arz-talep-toplama-tarihleri-ertelendi"
                baslik="Beta Enerji Halka Arzında Talep Toplama Tarihleri Ertelendi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/beta-enerji-halka-arz-talep-toplama-tarihleri-ertelendi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
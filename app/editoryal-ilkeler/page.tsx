import type { Metadata } from "next";
import Link from "next/link";

const canonical = "https://www.hocaileborsa.com/editoryal-ilkeler";

export const metadata: Metadata = {
  title: "Editoryal İlkeler ve Yayın Politikası",
  description:
    "Hoca İle Borsa'nın içerik üretim süreci: kaynak politikası, doğrulama, düzeltme politikası, reklam-içerik ayrımı ve yatırım tavsiyesi çerçevesi.",
  alternates: { canonical },
};

const bolumler = [
  {
    baslik: "Amacımız ve Bağımsızlığımız",
    icerik: [
      "Hoca İle Borsa; Borsa İstanbul, halka arzlar, temettüler, yatırım fonları ve faiz piyasalarına dair gelişmeleri sade ve doğrulanabilir bir dille aktaran bağımsız bir finans içerik platformudur. Herhangi bir aracı kurum, banka veya ihraççı şirketle ortaklık ya da bağlılık ilişkimiz yoktur.",
      "İçeriklerimizde hangi hissenin alınacağına veya satılacağına dair yönlendirme yapılmaz; amaç, yatırımcının kendi kararını verebilmesi için ihtiyaç duyduğu bilgiyi düzenli ve anlaşılır biçimde sunmaktır.",
    ],
  },
  {
    baslik: "Kaynak Politikamız",
    icerik: [
      "Haber ve veri içeriklerimizin birincil kaynağı resmî platformlardır: KAP (Kamuyu Aydınlatma Platformu), SPK duyuruları, Borsa İstanbul, TCMB ve TEFAS. Şirket haberleri ilgili KAP bildirimine dayanır ve mümkün olan her haberde bildirim bağlantısı verilir.",
      "Halka arz sayfalarımız taslak ve onaylı izahnamelerdeki bilgilere dayanır; kesinleşmemiş bilgiler (tarih, fiyat, tahsisat) kesinleşene kadar 'beklemede' olarak işaretlenir ve onaylı izahname yayımlandığında güncellenir.",
      "Piyasa söylentileri, doğrulanmamış sosyal medya iddiaları ve anonim kaynaklar haber olarak yayımlanmaz.",
    ],
  },
  {
    baslik: "Veriye Dayalı Sayfalar ve Güncellik",
    icerik: [
      "Hisse profilleri, temettü geçmişleri, halka arz takvimi, tarama ve getiri tabloları gibi sayfalar resmî kaynaklardan derlenen veri setlerinden üretilir. Bu sayfalardaki veriler düzenli olarak güncellenir; fiyat içeren tablolar gün sonu kapanış verilerine dayanır ve gün içinde anlık olarak yenilenmez.",
      "Her verinin niteliği (tam yıl / ara dönem, taslak / onaylı gibi) ilgili sayfada açıkça belirtilir; ara dönem verilerinin tam yıl verileriyle doğrudan kıyaslanmaması gerektiği vurgulanır.",
    ],
  },
  {
    baslik: "Doğruluk ve Düzeltme Politikamız",
    icerik: [
      "Yayımlanan bir içerikte maddi hata tespit edilirse ya da tarafımıza bildirilirse, hata en kısa sürede düzeltilir. Okuyucularımız hata bildirimlerini iletişim sayfamızdan veya e-posta yoluyla iletebilir; her bildirim incelenir.",
      "Sayfalarımızda yayın ve güncelleme tarihleri görünür şekilde yer alır. Kesinleşmemiş bilgiler kesinmiş gibi sunulmaz; beklenen gelişmeler 'başvuru', 'onay bekliyor' gibi gerçek durumlarıyla etiketlenir.",
    ],
  },
  {
    baslik: "Yatırım Tavsiyesi Değildir",
    icerik: [
      "Bu sitedeki hiçbir içerik, SPK mevzuatı kapsamında yatırım danışmanlığı değildir. Yatırım danışmanlığı hizmeti; aracı kurumlar, portföy yönetim şirketleri ve mevduat kabul etmeyen bankalar ile müşteri arasında imzalanacak yatırım danışmanlığı sözleşmesi çerçevesinde ve yetkili kuruluşlarca sunulur.",
      "İçeriklerimizdeki yorum ve değerlendirmeler genel niteliktedir; kişisel mali durumunuza, risk ve getiri tercihlerinize uygun olmayabilir. Yatırım kararlarınızı yalnızca buradaki bilgilere dayanarak vermeniz beklentilerinize uygun sonuçlar doğurmayabilir.",
    ],
  },
  {
    baslik: "Reklam ve Gelir Şeffaflığı",
    icerik: [
      "Sitemiz, Google AdSense üzerinden yayınlanan reklamlarla gelir elde eder. Reklamlar otomatik olarak sunulur ve editoryal içeriğimizi hiçbir şekilde etkilemez; hangi şirket hakkında ne yazılacağı reklam ilişkilerinden bağımsızdır.",
      "Sponsorlu içerik yayımlanması durumunda bu içerik açıkça 'sponsorlu' olarak etiketlenir. Şirketlerden içerik karşılığı ödeme, pay veya başka bir menfaat kabul edilmez.",
    ],
  },
  {
    baslik: "Yazar ve Sorumluluk",
    icerik: [
      "İçeriklerimiz, 2002'den bu yana Borsa İstanbul'u takip eden ve 2022'den beri finans içerikleri üreten kurucumuz Erman Hoca tarafından hazırlanır ve yayımlanmadan önce gözden geçirilir. Yazarımız lisanslı bir yatırım danışmanı değildir; içerikler bağımsız piyasa takibi ve resmî kaynak okuryazarlığına dayanır.",
      "Bu şeffaflık, okuyucunun içeriği doğru bağlamda değerlendirebilmesi içindir: buradaki analizler bilgilendirme amaçlı bağımsız değerlendirmelerdir, profesyonel danışmanlık hizmeti yerine geçmez.",
    ],
  },
];

export default function EditoryalIlkelerPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-3xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700">Editoryal İlkeler</span>
        </nav>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
            Editoryal İlkeler ve Yayın Politikası
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Bu sayfa; Hoca İle Borsa&apos;daki haberlerin ve veri sayfalarının
            nasıl üretildiğini, hangi kaynaklara dayandığını, hataların nasıl
            düzeltildiğini ve gelir modelimizin içeriklerle ilişkisini açıklar.
          </p>

          {bolumler.map((b) => (
            <section key={b.baslik} className="mt-7">
              <h2 className="mb-2 text-lg font-bold text-slate-900 md:text-xl">
                {b.baslik}
              </h2>
              <div className="space-y-3">
                {b.icerik.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-7 text-slate-700 md:text-base md:leading-8"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="mb-2 text-sm font-semibold text-zinc-900 md:text-base">
              İlgili sayfalar:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/yazar/erman-hoca"
                prefetch={false}
                className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
              >
                Yazar Profili <span aria-hidden>→</span>
              </Link>
              <Link
                href="/hakkimizda"
                prefetch={false}
                className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
              >
                Hakkımızda <span aria-hidden>→</span>
              </Link>
              <Link
                href="/yasal-uyari"
                prefetch={false}
                className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
              >
                Yasal Uyarı <span aria-hidden>→</span>
              </Link>
              <Link
                href="/iletisim"
                prefetch={false}
                className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
              >
                Hata Bildirimi / İletişim <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

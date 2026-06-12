import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
  description:
    "SPK, Türkiye Sigorta ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye artırımı kapsamındaki pay ihraçlarını onayladı. TURSG ve GOODY sermaye artırımı detayları.",
  keywords: [
    "Türkiye Sigorta bedelsiz sermaye artırımı",
    "TURSG bedelsiz",
    "Goodyear bedelsiz sermaye artırımı",
    "GOODY bedelsiz",
    "SPK sermaye artırımı onayı",
    "12 Haziran 2026 borsa haberleri",
  ],
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haberler/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
  },
  openGraph: {
    title:
      "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
    description:
      "SPK 2026/36 bülteninde Türkiye Sigorta ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye artırımı kapsamındaki pay ihraçlarına onay verildi.",
    url: "https://www.hocaileborsa.com/haberler/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
    siteName: "Hoca ile Borsa",
    locale: "tr_TR",
    type: "article",
  },
};

export default function HaberPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
    description:
      "SPK, Türkiye Sigorta AŞ ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye artırımı kapsamındaki pay ihraçlarını onayladı.",
    datePublished: "2026-06-12T09:00:00+03:00",
    dateModified: "2026-06-12T09:00:00+03:00",
    author: {
      "@type": "Organization",
      name: "Hoca ile Borsa",
    },
    publisher: {
      "@type": "Organization",
      name: "Hoca ile Borsa",
    },
    mainEntityOfPage:
      "https://www.hocaileborsa.com/haberler/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-5">
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            Ana Sayfa
          </Link>
        </div>

        <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="border-b border-slate-800 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 px-5 py-8 sm:px-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-slate-950">
                SPK BÜLTENİ
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                12 Haziran 2026
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                TURSG / GOODY
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı
              Onayı
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Sermaye Piyasası Kurulu’nun 2026/36 sayılı bülteninde, Türkiye
              Sigorta AŞ ve Goodyear Lastikleri Türk AŞ’nin bedelsiz sermaye
              artırımı kapsamındaki pay ihraçlarına onay verildi.
            </p>
          </div>

          <div className="grid gap-5 px-5 py-6 sm:px-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">
                Türkiye Sigorta AŞ
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">TURSG</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>
                  <strong className="text-white">Mevcut sermaye:</strong>{" "}
                  10.000.000.000 TL
                </p>
                <p>
                  <strong className="text-white">Yeni sermaye:</strong>{" "}
                  20.000.000.000 TL
                </p>
                <p>
                  <strong className="text-white">Bedelsiz artırım:</strong>{" "}
                  10.000.000.000 TL
                </p>
                <p>
                  <strong className="text-white">Kaynak:</strong> Kâr payından
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">
                Goodyear Lastikleri Türk AŞ
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">GOODY</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>
                  <strong className="text-white">Mevcut sermaye:</strong>{" "}
                  270.000.000 TL
                </p>
                <p>
                  <strong className="text-white">Yeni sermaye:</strong>{" "}
                  1.520.000.000 TL
                </p>
                <p>
                  <strong className="text-white">Bedelsiz artırım:</strong>{" "}
                  1.250.000.000 TL
                </p>
                <p>
                  <strong className="text-white">Kaynak:</strong> İç kaynaklar
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 pb-8 sm:px-8">
            <div className="prose prose-invert max-w-none prose-p:leading-8 prose-headings:text-white prose-strong:text-white">
              <h2>SPK’dan iki şirkete bedelsiz sermaye artırımı onayı</h2>

              <p>
                Sermaye Piyasası Kurulu, 10 Haziran 2026 tarihli 2026/36 sayılı
                bülteninde halka açık ortaklıkların pay ihraçlarına ilişkin yeni
                kararları yayımladı. Bültende Türkiye Sigorta AŞ ve Goodyear
                Lastikleri Türk AŞ için bedelsiz sermaye artırımı kapsamındaki
                pay ihraçları yer aldı.
              </p>

              <p>
                Türkiye Sigorta tarafında mevcut sermayenin 10 milyar TL’den 20
                milyar TL’ye çıkarılması öngörülüyor. SPK bülteninde yer alan
                tabloya göre 10 milyar TL’lik bedelsiz sermaye artırımı kâr
                payından karşılanacak.
              </p>

              <p>
                Goodyear Lastikleri Türk AŞ tarafında ise mevcut 270 milyon TL
                sermayenin 1 milyar 520 milyon TL’ye çıkarılması planlanıyor.
                Şirketin bedelsiz sermaye artırımı tutarı 1 milyar 250 milyon TL
                olarak açıklandı. Bu artırımın iç kaynaklardan karşılanacağı
                belirtildi.
              </p>

              <h2>Bedelsiz sermaye artırımı yatırımcı için ne ifade eder?</h2>

              <p>
                Bedelsiz sermaye artırımı, şirketin iç kaynaklarını veya kâr
                payını sermayeye eklemesiyle gerçekleşir. Bu işlem sonucunda
                yatırımcının sahip olduğu lot sayısı artar; ancak teorik olarak
                şirketin toplam piyasa değeri aynı kaldığı için hisse fiyatı
                bölünme etkisiyle yeniden ayarlanır.
              </p>

              <p>
                Bu nedenle bedelsiz sermaye artırımı tek başına şirket değerinin
                arttığı anlamına gelmez. Yatırımcı açısından asıl takip edilmesi
                gereken nokta, şirketin finansal yapısı, kârlılığı, büyüme
                performansı ve sermaye artırımının bilanço üzerindeki etkisidir.
              </p>

              <h2>TURSG ve GOODY hisselerinde takip edilecek başlıklar</h2>

              <p>
                SPK onayının ardından piyasada Türkiye Sigorta ve Goodyear
                hisselerine yönelik haber akışı yakından takip edilecek. Bedelsiz
                sermaye artırımı sürecinde hak kullanım tarihi, düzeltilmiş fiyat
                ve lot değişimi gibi detaylar yatırımcıların gündeminde olacak.
              </p>

              <p>
                Özellikle kısa vadeli fiyatlamalarda haber etkisi görülebilir.
                Ancak yatırımcıların yalnızca bedelsiz sermaye artırımı haberine
                göre işlem yapmak yerine şirketlerin temel verilerini, teknik
                görünümünü ve genel piyasa koşullarını birlikte değerlendirmesi
                önem taşır.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="mt-0 text-lg font-black text-white">
                  Kısa Özet
                </h3>
                <ul className="mb-0 space-y-2 text-slate-300">
                  <li>
                    SPK, Türkiye Sigorta ve Goodyear için bedelsiz sermaye
                    artırımı kapsamındaki pay ihraçlarını onayladı.
                  </li>
                  <li>
                    Türkiye Sigorta’nın sermayesi 10 milyar TL’den 20 milyar
                    TL’ye çıkarılacak.
                  </li>
                  <li>
                    Goodyear’ın sermayesi 270 milyon TL’den 1,52 milyar TL’ye
                    yükseltilecek.
                  </li>
                  <li>
                    TURSG tarafındaki artırım kâr payından, GOODY tarafındaki
                    artırım ise iç kaynaklardan karşılanacak.
                  </li>
                </ul>
              </div>

              <p className="text-sm text-slate-400">
                Bu içerik yatırım tavsiyesi değildir. Haber, SPK bülteninde yer
                alan resmi bilgiler esas alınarak hazırlanmıştır.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
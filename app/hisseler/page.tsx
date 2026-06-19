import Link from "next/link";
import type { Metadata } from "next";
import HisseListesi from "@/components/HisseListesi";
import { getTumHisseler } from "@/lib/hisseler";
import { getHisseLogo } from "@/lib/hisse-logolar";

export const revalidate = false;

const siteUrl = "https://www.hocaileborsa.com";

export const metadata: Metadata = {
  title: "Hisse Künyeleri — BIST Şirketleri | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketleri için hisse künye sayfaları, şirket bilgileri, ortaklık yapısı, iştirakler, borsa bilgileri, temettü geçmişi ve önemli KAP gelişmeleri.",
  alternates: { canonical: `${siteUrl}/hisseler` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/hisseler`,
    title: "Hisse Künyeleri — BIST Şirketleri | Hoca İle Borsa",
    description:
      "Borsa İstanbul şirketleri için şirket profili, ortaklık yapısı, iştirakler, temettü geçmişi ve önemli KAP gelişmeleri.",
    images: [{ url: `${siteUrl}/banner.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisse Künyeleri — BIST Şirketleri | Hoca İle Borsa",
    description:
      "Borsa İstanbul şirketleri için şirket profili, ortaklık yapısı, iştirakler, temettü geçmişi ve önemli KAP gelişmeleri.",
    images: [`${siteUrl}/banner.png`],
  },
};

export default function HisselerPage() {
  const hisseler = getTumHisseler().map((h) => ({
    ...h,
    logo: getHisseLogo(h.kod),
  }));

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Hisseler</span>
        </nav>

        <header className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Hisse Künyeleri
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Hoca ile Borsa hisse künyeleri, Borsa İstanbul’da işlem gören
            şirketleri tek sayfada daha anlaşılır şekilde incelemek isteyen
            yatırımcılar için hazırlanır. Her şirket sayfasında şirket profili,
            faaliyet alanı, ortaklık yapısı, iştirak bilgileri, borsa bilgileri,
            temettü geçmişi ve öne çıkan KAP gelişmeleri birlikte sunulur.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Arama alanına hisse kodunu veya şirket adını yazarak ilgili künye
            sayfasına ulaşabilirsiniz. Bu bölüm, yatırım kararı vermeden önce
            şirketi tanımaya yardımcı olacak kalıcı ve düzenli bilgi alanı
            olarak tasarlanmıştır.
          </p>
        </header>

        <HisseListesi hisseler={hisseler} />

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              Şirket Profili
            </h2>
            <p className="text-sm leading-7 text-slate-700">
              Hisse sayfalarında şirketin ana faaliyet konusu, sektördeki yeri,
              kuruluş bilgileri ve faaliyet yapısı özetlenir.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              Ortaklık ve İştirakler
            </h2>
            <p className="text-sm leading-7 text-slate-700">
              Ortaklık yapısı, bağlı ortaklıklar ve iştirakler şirketin sermaye
              yapısını daha net görmek için ayrı başlıklar altında verilir.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              KAP ve Temettü
            </h2>
            <p className="text-sm leading-7 text-slate-700">
              Önemli KAP gelişmeleri ve temettü geçmişi, şirketin yatırımcı
              ilişkileri ve geçmiş dağıtım politikası hakkında fikir verir.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Hisse Künyeleri Nasıl Kullanılır?
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            Hisse künye sayfaları, şirketleri yalnızca fiyat hareketiyle değil,
            faaliyet yapısı ve kurumsal bilgileriyle birlikte değerlendirmek
            isteyen kullanıcılar için hazırlanmıştır. Bir hisseyi incelerken
            önce şirketin ne iş yaptığını, hangi sektörde faaliyet gösterdiğini
            ve gelirlerinin hangi alanlardan oluştuğunu anlamak önemlidir.
          </p>
          <p className="mb-4 leading-7 text-slate-700">
            Ortaklık yapısı ve iştirak bilgileri, şirketin kontrol yapısını ve
            grup içindeki konumunu görmeye yardımcı olur. Temettü geçmişi,
            şirketin geçmiş yıllarda kârını yatırımcıyla paylaşma eğilimini
            gösterirken; KAP gelişmeleri şirketle ilgili önemli kararları,
            yatırımları, sözleşmeleri ve finansal duyuruları takip etmeyi
            kolaylaştırır.
          </p>
          <p className="leading-7 text-slate-700">
            Bu sayfalardaki bilgiler genel bilgilendirme amacıyla sunulur.
            Hisse alım-satım kararı vermeden önce şirketin güncel finansal
            tabloları, riskleri, sektör koşulları ve resmi açıklamaları ayrıca
            incelenmelidir.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            <div className="border-b border-slate-200 pb-5">
              <h3 className="mb-2 font-semibold text-slate-900">
                Hisse künye sayfasında hangi bilgiler bulunur?
              </h3>
              <p className="text-sm leading-7 text-slate-700">
                Şirket hakkında genel bilgiler, ortaklık yapısı, iştirakler,
                borsa bilgileri, temettü geçmişi ve önemli KAP gelişmeleri yer
                alır.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-5">
              <h3 className="mb-2 font-semibold text-slate-900">
                Bu sayfalardaki bilgiler yatırım tavsiyesi mi?
              </h3>
              <p className="text-sm leading-7 text-slate-700">
                Hayır. Hisse künye sayfaları yalnızca genel bilgilendirme
                amacıyla hazırlanır. Alım-satım kararı kişisel risk profiline
                göre verilmelidir.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-5">
              <h3 className="mb-2 font-semibold text-slate-900">
                KAP gelişmeleri neden önemlidir?
              </h3>
              <p className="text-sm leading-7 text-slate-700">
                KAP açıklamaları şirketlerin kamuya duyurduğu resmi bildirimlerdir.
                Yeni iş ilişkileri, yatırım kararları, sermaye işlemleri ve
                finansal sonuçlar gibi önemli gelişmeler buradan takip edilir.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-slate-900">
                Hisse araması nasıl yapılır?
              </h3>
              <p className="text-sm leading-7 text-slate-700">
                Liste üzerindeki arama alanına hisse kodu veya şirket adı
                yazılarak ilgili şirketin künye sayfasına hızlıca ulaşılabilir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="mb-2 text-lg font-bold text-slate-900">
            Yasal Uyarı
          </h2>
          <p className="text-sm leading-7 text-slate-700">
            Burada yer alan bilgi, yorum ve veriler yatırım danışmanlığı
            kapsamında değildir. Yatırım kararları, yetkili kuruluşlardan alınan
            profesyonel destek ve kişisel risk tercihlerine göre verilmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}

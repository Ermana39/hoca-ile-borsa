import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "CWENE'den ABD'de 100 MW Kapasiteli Lisans Anlaşması",
  description:
    "CW Enerji, ABD'de 2 yıl süreli lisans anlaşması imzaladı. Yıllık 100 MW güneş paneli üretim kapasitesi planlanıyor.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/cwene-abd-lisans-anlasmasi",
  },
};

export default function CweneAbdLisansPage() {
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

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              CW Enerji ABD Pazarında Yeni Adım Attı: Yıllık 100 MW Üretim
              Kapasiteli Lisans Anlaşması
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              CW Enerji, yurt dışı büyüme stratejisi kapsamında Amerika Birleşik
              Devletleri'nde faaliyet gösteren bir şirketle lisans anlaşması
              imzaladığını duyurdu. Açıklanan bilgilere göre anlaşma 2 yıl süreli
              olacak ve ABD'de CW Enerji markasıyla yıllık yaklaşık 100 MW
              kapasiteli güneş paneli üretimi yapılması planlanıyor.
            </p>

            <p>
              Bu gelişme, şirketin yalnızca Türkiye pazarına bağlı kalmadan
              uluslararası marka kullanımını artırma hedefi açısından önemli
              görülüyor. ABD ve Kanada gibi pazarlarda güneş enerjisi
              ekipmanlarına yönelik talep, yenilenebilir enerji dönüşümüyle
              birlikte yakından takip ediliyor. CW Enerji'nin bu pazarda lisans
              modeliyle yer alması, doğrudan yatırım yükünü sınırlarken marka
              bilinirliğini artırabilecek bir yapı oluşturabilir.
            </p>

            <p>
              Lisans anlaşmaları şirketler açısından üretim, satış, marka
              kullanımı ve bölgesel büyüme bakımından farklı fırsatlar
              yaratabilir. Ancak bu tür anlaşmalarda finansal etkinin net şekilde
              görülebilmesi için ilerleyen dönemlerde ciroya, kârlılığa ve
              sipariş hacmine yansıması takip edilmelidir.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              CWENE için bu haberin en dikkat çekici tarafı ABD pazarında marka
              kullanımıyla büyüme potansiyeli taşımasıdır. Ancak yatırımcıların
              sadece anlaşma başlığına değil, bu anlaşmanın önümüzdeki dönem
              finansallarına ne kadar katkı sağlayacağına odaklanması gerekir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="cwene-abd-lisans-anlasmasi"
            baslik="CW Enerji ABD Döviz İhracat"
          />
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "ASTOR'dan ABD'de 71,9 Milyon Dolarlık Anlaşma",
  description:
    "ASTOR, Amerika'da yerleşik bir şirket ile 71,9 milyon ABD doları tutarında yeni bir anlaşma imzaladı. ABD pazarına yönelik büyüme adımı detayları.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/astor-abd-719-milyon-dolar-anlasma",
  },
};

export default function AstorAbdAnlasmaPage() {
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
              ASTOR'dan ABD Pazarında Yeni Hamle: 71,9 Milyon Dolarlık Anlaşma
            </h1>
            <p className="mt-2 text-sm text-zinc-500">09.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              ASTOR, yurt dışı pazarlardaki büyüme hedefleri kapsamında Amerika
              Birleşik Devletleri'nde yerleşik bir şirket ile yeni bir anlaşma
              imzaladığını duyurdu. Şirket tarafından açıklanan bilgilere göre,
              söz konusu anlaşmanın toplam tutarı 71,9 milyon ABD Doları olarak
              gerçekleşti.
            </p>

            <p>
              Anlaşmanın dolar bazlı ve yüksek tutarlı olması, ASTOR'un ihracat
              gelirleri açısından dikkat çeken bir gelişme olarak öne çıkıyor.
              Şirketin ABD pazarında yeni iş bağlantıları kurması, uluslararası
              müşteri portföyünü genişletme ve küresel pazarlarda daha güçlü bir
              konum elde etme hedefi açısından önemli görülüyor.
            </p>

            <p>
              Enerji ekipmanları ve elektrik altyapısı alanında faaliyet gösteren
              şirketler için yurt dışı siparişler yalnızca ciro katkısı açısından
              değil, aynı zamanda marka bilinirliği ve yeni pazarlarda kalıcılık
              açısından da önem taşıyor. Bu nedenle ASTOR'un ABD tarafında attığı
              bu adım, şirketin ihracat odaklı büyüme stratejisinin devamı olarak
              değerlendirilebilir.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              ASTOR haberinde en dikkat çeken nokta, anlaşmanın ABD pazarında
              gerçekleşmesi ve tutarın 71,9 milyon dolar seviyesinde olmasıdır.
              Bu büyüklükteki döviz bazlı siparişler şirketin ihracat görünümünü
              destekleyebilir. Ancak yatırımcıların bu tür haberlerde teslimat
              süreci, kârlılığa etkisi ve finansallara ne zaman yansıyacağı gibi
              detayları da takip etmesi gerekir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            09.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="astor-abd-719-milyon-dolar-anlasma"
            baslik="ASTOR ABD Anlaşma İhracat Döviz"
          />
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import HaberAltKisim from "@/components/HaberAltKisim";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "ALTNY'de Kayıtlı Sermaye Tavanı 5 Milyar TL'ye Yükseltildi",
  description:
    "Altınay Savunma Teknolojileri kayıtlı sermaye tavanını 1 milyar TL'den 5 milyar TL'ye çıkardı. Geçerlilik tarihi 31 Aralık 2030.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/altny-kayitli-sermaye-tavani-artisi",
  },
};

export default function AltnySermayeTavaniPage() {
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
              ALTNY'de Sermaye Tavanı Artışı: Şirketin Büyüme Alanı Genişliyor
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              Altınay Savunma Teknolojileri tarafında kayıtlı sermaye tavanına
              ilişkin süreç yatırımcıların gündeminde yer aldı. Şirketin kayıtlı
              sermaye tavanının 1 milyar TL'den 5 milyar TL'ye çıkarılması
              yönündeki süreç daha önce kamuoyuna duyurulmuştu. Yeni kayıtlı
              sermaye tavanı için geçerlilik tarihi 31 Aralık 2030 olarak
              açıklandı.
            </p>

            <p>
              Kayıtlı sermaye tavanı artışı, şirketlerin ilerleyen dönemlerde
              sermaye artırımı gibi işlemleri daha esnek şekilde yapabilmesine
              imkân tanıyan önemli bir kurumsal adımdır. Bu karar doğrudan bugün
              sermaye artırımı yapılacağı anlamına gelmez; ancak şirketin
              ilerleyen süreçte büyüme, yatırım, finansman veya sermaye yapısını
              güçlendirme adımları için daha geniş bir hareket alanı elde
              ettiğini gösterir.
            </p>

            <p>
              Savunma sanayi ve teknoloji alanında faaliyet gösteren şirketlerde
              sermaye yapısı, yatırım kapasitesi açısından yakından izlenir.
              ALTNY'nin kayıtlı sermaye tavanını yukarı taşıması da bu açıdan
              şirketin uzun vadeli planlamaları bakımından dikkat çeken bir
              gelişme olarak değerlendirilebilir.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              Kayıtlı sermaye tavanı artışı tek başına bedelli ya da bedelsiz
              sermaye artırımı anlamına gelmez. Ancak şirketin ilerleyen yıllarda
              sermaye tarafında daha rahat hareket edebilmesini sağlar. ALTNY
              yatırımcıları için bundan sonraki önemli başlık, bu tavanın hangi
              amaçla ve ne zaman kullanılacağı olacaktır.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="altny-kayitli-sermaye-tavani-artisi"
            baslik="ALTNY Sermaye Artırımı Bedelli Bedelsiz"
          />
        </div>
        <HaberAltKisim href="/haber/altny-kayitli-sermaye-tavani-artisi" />
      </div>
    </main>
  );
}

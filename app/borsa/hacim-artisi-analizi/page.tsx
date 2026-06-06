export const metadata = {
  title: "Hacim Artışı Analizi | Hoca İle Borsa",
  description: "İşlem hacmindeki artışı izleyerek piyasada ilginin yoğunlaştığı hisseleri fark edin.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/hacim-artisi-analizi" },
};

import Image from "next/image";
import Link from "next/link";

const hacimKutulari = [
  {
    title: "Yıllık Hacim Artışı Olanlar",
    href: "/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar",
    image: "/yillik-hacim-artisi-olanlar-yatay.png",
    alt: "Yıllık Hacim Artışı Olanlar görseli",
  },
  {
    title: "Aylık Hacim Artışı Olanlar",
    href: "/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar",
    image: "/aylik-hacim-artisi-olanlar-yatay.png",
    alt: "Aylık Hacim Artışı Olanlar görseli",
  },
  {
    title: "Haftalık Hacim Artışı Olanlar",
    href: "/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar",
    image: "/haftalik-hacim-artisi-olanlar-yatay.png",
    alt: "Haftalık Hacim Artışı Olanlar görseli",
  },
];

function HacimKutusu({
  title,
  href,
  image,
  alt,
}: {
  title: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
    >
      <div className="relative overflow-hidden bg-slate-100">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h2 className="text-xl font-semibold leading-tight text-slate-900 md:text-xl">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default function HacimArtisiAnaliziPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Hacim Artışı Analizi
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-sm">
            Hacim artışı analizlerini aşağıdaki kutulardan inceleyebilirsiniz.
          </p>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {hacimKutulari.map((item) => (
              <HacimKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <div className="rounded-2xl bg-white p-5 md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900">
              Hacim Artışı Analizi Hakkında
            </h2>

            <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
              <p>
                Hacim artışı analizi sayfası, Borsa İstanbul’da işlem hacminde dikkat
                çeken değişimler yaşayan hisseleri takip etmek isteyen yatırımcılar
                için hazırlanmıştır. Bu sayfada yıllık, aylık ve haftalık bazda hacim
                artışı gösteren hisseleri ayrı ekranlarda inceleyebilir, piyasadaki
                hareketliliği daha net değerlendirebilirsiniz.
              </p>

              <p>
                İşlem hacmi artışı, bir hissede yatırımcı ilgisinin güçlendiğini
                gösterebilen önemli teknik ve temel sinyallerden biridir. Özellikle
                fiyat hareketiyle birlikte artan hacim, yükseliş veya düşüş
                hareketlerinin daha güçlü şekilde takip edilmesine yardımcı olabilir.
              </p>

              <p>
                Haftalık hacim artışı olan hisseler kısa vadeli hareketleri izlemek
                isteyenler için öne çıkarken, aylık ve yıllık hacim artışı gösteren
                hisseler daha kalıcı ilgi gören şirketleri belirlemede faydalı olabilir.
                Bu sayede yatırımcılar farklı zaman dilimlerinde oluşan hacim
                değişimlerini karşılaştırarak daha bilinçli analiz yapabilir.
              </p>

              <p>
                Güncel hacim artışı olan hisseler, BIST işlem hacmi analizleri, hisse
                bazlı hacim karşılaştırmaları ve teknik görünümü destekleyen piyasa
                verileri için bu sayfayı düzenli olarak takip edebilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
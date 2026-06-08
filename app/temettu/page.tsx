export const metadata = {
  title: "Temettü | Hoca İle Borsa",
  description: "Temettü takvimi, aylara göre temettü veren şirketler, temettü hesaplama aracı ve temettü verimi hesaplama.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu" },
};

import Image from "next/image";
import Link from "next/link";

const temettuKutulari = [
  {
    title: "Temettü Eğitimi",
    href: "/temettu/temettu-egitimi",
    image: "/temettu-egitimi-yatay.png",
    alt: "Temettü Eğitimi görseli",
    description:
      "Temettü nedir, nasıl işler, hak kullanım tarihi ve ödeme tarihi gibi temel konuları daha anlaşılır şekilde öğrenebilirsiniz.",
  },
  {
    title: "Haziran Ayı Temettü Verenler",
    href: "/temettu/haziran-ayi-temettu-takvimi",
    image: "/haziran-ayi-temettu-verenler-yatay.png",
    alt: "Haziran Ayı Temettü Verenler görseli",
    description:
      "Haziran ayı temettü takviminde yer alan şirketleri inceleyerek hangi hisselerin ödeme yapacağını görebilirsiniz.",
  },
  {
    title: "Temmuz Ayı Temettü Verenler",
    href: "/temettu/temmuz-ayi-temettu-takvimi",
    image: "/temmuz-ayi-temettu-verenler-yatay.png",
    alt: "Temmuz Ayı Temettü Verenler görseli",
    description:
      "Temmuz ayında temettü veren şirketleri görüntüleyerek yaz dönemindeki temettü fırsatlarını takip edebilirsiniz.",
  },
  {
    title: "Ağustos Ayı Temettü Verenler",
    href: "/temettu/agustos-ayi-temettu-takvimi",
    image: "/agustos-ayi-temettu-verenler-yatay.png",
    alt: "Ağustos Ayı Temettü Verenler görseli",
    description:
      "Ağustos ayında temettü ödemesi açıklayan şirketleri tek sayfada görerek temettü takibini kolaylaştırabilirsiniz.",
  },
  {
    title: "Eylül Ayı Temettü Verenler",
    href: "/temettu/eylul-ayi-temettu-takvimi",
    image: "/eylül-ayi-temettü.png",
    alt: "Eylül Ayı Temettü Verenler görseli",
    description:
      "Eylül ayında temettü veren şirketleri toplu şekilde inceleyerek temettü takvimini daha kolay takip edebilirsiniz.",
  },
  {
    title: "Ekim Ayı Temettü Verenler",
    href: "/temettu/ekim-ayi-temettu-takvimi",
    image: "/ekim-ayi-temettü.png",
    alt: "Ekim Ayı Temettü Verenler görseli",
    description:
      "Mayıs ayında temettü ödemesi yapan şirketleri liste halinde görerek dönemsel temettü planlamasını takip edebilirsiniz.",
  },
];

function TemettuKutusu({
  title,
  href,
  image,
  alt,
  description,
}: {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={title}
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
        <h2 className="text-base font-bold text-slate-900 md:text-lg">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500 md:text-sm">
          {description}
        </p>
        <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
          <span>İncele</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function TemettuPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Temettü</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Temettü
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-sm">
            Temettü eğitimi, aylara göre temettü takvimi, temettü hesaplama aracı
            ve temettü verimi hesaplama bölümlerine bu sayfa üzerinden toplu
            şekilde ulaşabilirsiniz. Temettü yatırımını daha düzenli takip etmek
            isteyen kullanıcılar için sade ve erişilebilir bir yapı sunulmuştur.
          </p>
        </section>

        <section className="pt-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Link
              href="/temettu/temettu-hesaplama-araci"
              prefetch={false}
              className="rounded-xl bg-blue-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-blue-200"
            >
              Temettü Hesaplama Aracı
            </Link>

            <Link
              href="/temettu/temettu-verimi-hesaplama"
              prefetch={false}
              className="rounded-xl bg-purple-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-purple-200"
            >
              Temettü Verimi Hesaplama
            </Link>
          </div>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {temettuKutulari.map((item) => (
              <TemettuKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="mb-2 text-sm font-semibold text-zinc-900 md:text-base">Güncel temettü ve sermaye kararlarını takip edin:</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/borsa/dikkat-cekenler/bist-temettu-kararlari" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm">10 Şirketten Temettü Kararı <span aria-hidden>→</span></Link>
            <Link href="/borsa/dikkat-cekenler/derhl-bedelsiz-sermaye-artirimi" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm">DERHL Bedelsiz Sermaye Artırımı <span aria-hidden>→</span></Link>
            <Link href="/borsa/dikkat-cekenler" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm">Tüm Dikkat Çekenler <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Temettü sayfasında neler bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              Hoca İle Borsa Temettü sayfasında temettü takvimi, aylara göre
              temettü dağıtacak şirketler, temettü tarihleri, temettü hesaplama
              aracı ve temettü verimi hesaplama içerikleri bir arada sunulur.
            </p>

            <p>
              Borsa yatırımcıları için hazırlanan bu bölümde, hisse senetlerinin
              temettü ödeme dönemlerini daha kolay takip edebilir, temettü gelirine
              yönelik hesaplamaları pratik şekilde yapabilir ve güncel temettü
              verilerini düzenli olarak inceleyebilirsiniz.
            </p>

            <p>
              Temettü yatırımıyla ilgilenen yatırımcılar bu sayfa üzerinden
              yaklaşan temettü ödemelerini takip edebilir, hisse bazlı temettü
              verilerini inceleyebilir ve temettü gelirine yönelik temel
              hesaplamaları daha pratik şekilde yapabilir.
            </p>

            <p className="text-zinc-500">
              Bu sayfada yer alan içerikler genel bilgilendirme amacı taşır ve
              yatırım danışmanlığı kapsamında değildir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
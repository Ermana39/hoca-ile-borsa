export const metadata = {
  title: "Temettü | Hoca İle Borsa",
  description: "Temettü takvimi, aylara göre temettü veren şirketler, temettü hesaplama aracı ve temettü verimi hesaplama.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu" },
};

import Link from "@/components/NoPrefetchLink";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

const temettuKutulari = [
  {
    title: "Temettü Eğitimi",
    href: "/temettu/temettu-egitimi",
    icon: "temettu-egitimi" as CategoryIconName,
    description:
      "Temettü nedir, nasıl işler, hak kullanım tarihi ve ödeme tarihi gibi temel konuları daha anlaşılır şekilde öğrenebilirsiniz.",
  },
  {
    title: "Temettü Emekliliği Hesaplayıcı",
    href: "/temettu/temettu-emekliligi-hesaplama",
    icon: "emeklilik-fonlari" as CategoryIconName,
    description:
      "Hedef aylık temettü geliriniz için gereken portföy büyüklüğünü ve hedefe kaç yılda ulaşacağınızı hesaplayabilirsiniz.",
  },
  {
    title: "Ağustos Ayı Temettü Verenler",
    href: "/temettu/agustos-ayi-temettu-takvimi",
    icon: "temettu-takvim" as CategoryIconName,
    description:
      "Ağustos ayında temettü ödemesi açıklayan şirketleri tek sayfada görerek temettü takibini kolaylaştırabilirsiniz.",
  },
  {
    title: "Eylül Ayı Temettü Verenler",
    href: "/temettu/eylul-ayi-temettu-takvimi",
    icon: "temettu-takvim" as CategoryIconName,
    description:
      "Eylül ayında temettü veren şirketleri toplu şekilde inceleyerek temettü takvimini daha kolay takip edebilirsiniz.",
  },
  {
    title: "Ekim Ayı Temettü Verenler",
    href: "/temettu/ekim-ayi-temettu-takvimi",
    icon: "temettu-takvim" as CategoryIconName,
    description:
      "Ekim ayında temettü ödemesi yapan şirketleri liste halinde görerek dönemsel temettü planlamasını takip edebilirsiniz.",
  },
  {
    title: "Kasım Ayı Temettü Verenler",
    href: "/temettu/kasim-ayi-temettu-takvimi",
    icon: "temettu-takvim" as CategoryIconName,
    description:
      "Kasım ayında temettü veren şirketleri tek sayfada inceleyerek ödeme tarihlerini ve temettü tutarlarını takip edebilirsiniz.",
  },
  {
    title: "Aralık Ayı Temettü Verenler",
    href: "/temettu/aralik-ayi-temettu-takvimi",
    icon: "temettu-takvim" as CategoryIconName,
    description:
      "Aralık ayında temettü veren şirketleri liste halinde görerek yıl sonu temettü takibini kolaylaştırabilirsiniz.",
  },
];

function TemettuKutusu({
  title,
  href,
  icon,
  description,
}: {
  title: string;
  href: string;
  icon: CategoryIconName;
  description: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={title}
      className="group flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <IconTile
          name={icon}
          className="h-12 w-12 shrink-0 transition duration-300 group-hover:bg-blue-100"
        />
        <h2 className="text-base font-bold text-slate-900 md:text-lg">
          {title}
        </h2>
      </div>
      <p className="text-sm leading-6 text-slate-500">{description}</p>
      <div className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
        <span>İncele</span>
        <span>→</span>
      </div>
    </Link>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Temettü Takvimi ve Temettü Araçları",
  description:
    "Temettü takvimi, aylara göre temettü veren şirketler, temettü hesaplama aracı ve temettü verimi hesaplama.",
  url: "https://www.hocaileborsa.com/temettu",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: temettuKutulari.map((kutu, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: kutu.title,
      description: kutu.description,
      url: `https://www.hocaileborsa.com${kutu.href}`,
    })),
  },
};

export default function TemettuPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <Link href="/haberler" prefetch={false} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm">Tüm Haberler <span aria-hidden>→</span></Link>
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

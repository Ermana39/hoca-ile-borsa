import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

export const metadata: Metadata = {
  title: "Mevduat ve Kredi Faiz Oranları | Hoca İle Borsa",
  description:
    "Mevduat faizi oranları, tüketici faizi oranları, konut kredisi oranları ve taşıt kredisi oranları sayfası.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/mevduat-kredi-faizleri",
  },
};

const faizKutulari = [
  {
    title: "Mevduat Faizi Oranları",
    href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
    icon: "mevduat-faizi" as CategoryIconName,
    description:
      "Bankaların güncel mevduat faizi oranlarını karşılaştırarak vadeli mevduat tarafında öne çıkan seçenekleri inceleyebilirsiniz.",
  },
  {
    title: "Tüketici Faizi Oranları",
    href: "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
    icon: "tuketici-faizi" as CategoryIconName,
    description:
      "Tüketici kredisi faiz oranlarını karşılaştırarak ihtiyaç kredisi tarafındaki güncel maliyetleri daha kolay takip edebilirsiniz.",
  },
  {
    title: "Konut Kredisi Oranları",
    href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
    icon: "konut-kredisi" as CategoryIconName,
    description:
      "Konut kredisi faiz oranlarını inceleyerek bankalar arasındaki farkları ve güncel konut finansmanı maliyetlerini görebilirsiniz.",
  },
  {
    title: "Taşıt Kredisi Oranları",
    href: "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
    icon: "tasit-kredisi" as CategoryIconName,
    description:
      "Taşıt kredisi oranlarını takip ederek araç finansmanı için sunulan güncel kredi maliyetlerini karşılaştırabilirsiniz.",
  },
];

function FaizKutusu({
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

export default function MevduatKrediFaizleriPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Faiz Oranları</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Mevduat ve Kredi Faiz Oranları
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-sm">
            Mevduat faizi oranları, tüketici kredisi faiz oranları, konut kredisi
            oranları ve taşıt kredisi oranları gibi güncel finansman başlıklarına
            bu sayfa üzerinden toplu şekilde ulaşabilirsiniz.
          </p>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {faizKutulari.map((item) => (
              <FaizKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Güncel Mevduat ve Kredi Faiz Oranları Hakkında
          </h2>

          <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              Mevduat ve kredi faiz oranları, bireysel yatırım ve finansman
              kararlarında en çok takip edilen ekonomik göstergeler arasında yer
              alır. Bu sayfada bankaların güncel mevduat faizi oranları ile
              tüketici kredisi, konut kredisi ve taşıt kredisi faiz oranlarını tek
              ekranda karşılaştırabilirsiniz.
            </p>

            <p>
              Mevduat faizi oranları, birikimlerini vadeli hesapta değerlendirmek
              isteyen kullanıcılar için önemli fırsatlar sunar. En yüksek mevduat
              faizi veren bankaları takip ederek birikimlerinizi daha verimli
              şekilde değerlendirebilirsiniz.
            </p>

            <p>
              Kredi faiz oranları ise ihtiyaç kredisi, konut kredisi ve taşıt
              kredisi kullanmayı planlayan kişiler için toplam geri ödeme tutarını
              doğrudan etkiler. Güncel kredi oranlarını inceleyerek bankalar
              arasındaki farkları görebilir ve bütçenize uygun finansman seçeneğini
              belirleyebilirsiniz.
            </p>

            <p>
              Güncel mevduat faizleri, ihtiyaç kredisi faiz oranları, konut kredisi
              kampanyaları ve taşıt kredisi karşılaştırmaları için bu sayfayı
              düzenli olarak takip edebilirsiniz.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
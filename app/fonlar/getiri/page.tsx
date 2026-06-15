import Link from "next/link";
import type { Metadata } from "next";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

export const metadata: Metadata = {
  title: "Yatırım Fonu Getirileri",
  description:
    "Menkul kıymet, emeklilik ve borsa yatırım fonlarının getiri tablolarını inceleyin.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/getiri",
  },
};

const fonTipleri = [
  {
    title: "Menkul Kıymet Yatırım Fonları",
    href: "/fonlar/getiri/menkul-kiymet-yatirim-fonlari",
    icon: "menkul-kiymet-fonlari" as CategoryIconName,
  },
  {
    title: "Emeklilik Fonları",
    href: "/fonlar/getiri/emeklilik-fonlari-getiri",
    icon: "emeklilik-fonlari" as CategoryIconName,
  },
  {
    title: "Borsa Yatırım Fonları",
    href: "/fonlar/getiri/borsa-yatirim-fonlari-getiri",
    icon: "borsa-yatirim-fonlari" as CategoryIconName,
  },
];

function FonTipiKutusu({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: CategoryIconName;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={title}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
    >
      <IconTile
        name={icon}
        className="h-16 w-16 shrink-0 transition duration-300 group-hover:bg-blue-100"
      />
      <h2 className="text-xl font-semibold leading-tight text-slate-900 md:text-xl">
        {title}
      </h2>
    </Link>
  );
}

export default function FonGetiriLandingPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/fonlar"
            prefetch={false}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Fon Getiri Analizi
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Getiri analizini fon tipine göre ayırarak inceleyin.
          </p>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {fonTipleri.map((item) => (
              <FonTipiKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Fon Getiri Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Fon getiri analizi, yatırımcıların farklı fon türlerinin performansını
            karşılaştırarak daha bilinçli yatırım kararları almasına yardımcı olur.
            Bu sayfada menkul kıymet yatırım fonları, emeklilik fonları, borsa
            yatırım fonları, gayrimenkul yatırım fonları ve girişim sermayesi
            yatırım fonları gibi farklı kategorileri ayrı ayrı inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Fon türlerine göre ayrılmış getiri analizleri sayesinde hangi fon
            grubunun daha yüksek performans gösterdiğini daha kolay görebilir,
            risk ve getiri dengesini daha sağlıklı değerlendirebilirsiniz. Bu yapı,
            yatırım fonları karşılaştırması yapmak isteyen kullanıcılar için hızlı
            ve pratik bir analiz imkanı sunar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Güncel fon getirileri, geçmiş performans karşılaştırmaları ve fon
            kategorilerine göre detaylı incelemeler yatırım kararlarında önemli rol
            oynar. Özellikle uzun vadeli yatırım planı yapanlar için emeklilik
            fonları, borsa yatırım fonları ve diğer yatırım fonu türlerinin
            düzenli takibi büyük avantaj sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel fon getirileri, yatırım fonu karşılaştırmaları, fon performans
            analizi ve kategorilere göre detaylı incelemeler için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

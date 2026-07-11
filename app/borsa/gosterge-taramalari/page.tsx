export const metadata = {
  title: "Gösterge Taramaları | Hoca İle Borsa",
  description: "RSI, trend ve teknik filtrelere göre hazırlanmış hisse taramaları ile belirli kriterleri karşılayan hisseleri görün.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/gosterge-taramalari" },
};

import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

const taramalar = [
  {
    title: "Yükseliş trendinde olan hisseler",
    description: "5, 13, 21, 55, 89, 144, 233 hareketli ortalama üzerinde olanlar",
    href: "/borsa/gosterge-taramalari/yukselis-trendinde-olanlar",
    icon: "trend-yukselis" as CategoryIconName,
  },
  {
    title: "Düşüş trendinde olan hisseler",
    description: "5, 13, 21, 55, 89, 144, 233 hareketli ortalama altında olanlar",
    href: "/borsa/gosterge-taramalari/dusus-trendinde-olanlar",
    icon: "trend-dusus" as CategoryIconName,
  },
  {
    title: "RSI 40 Altı",
    description: "RSI değeri 40 seviyesinin altında olan hisseler",
    href: "/borsa/gosterge-taramalari/rsi40-alti",
    icon: "rsi-dusuk" as CategoryIconName,
  },
  {
    title: "RSI 70 Üstü",
    description: "RSI değeri 70 seviyesinin üzerinde olan hisseler",
    href: "/borsa/gosterge-taramalari/rsi70-ustu",
    icon: "rsi-yuksek" as CategoryIconName,
  },
  {
    title: "MACD Al verenler",
    description: "MACD göstergesine göre al sinyali üreten hisseler",
    href: "/borsa/gosterge-taramalari/macd-al",
    icon: "macd-al" as CategoryIconName,
  },
  {
    title: "MACD Sat verenler",
    description: "MACD göstergesine göre sat sinyali üreten hisseler",
    href: "/borsa/gosterge-taramalari/macd-sat",
    icon: "macd-sat" as CategoryIconName,
  },
  {
    title: "Güçlü Trend ve Momentum Taraması",
    description: "Hareketli ortalama dizilimi, StochRSI ve MACD göstergelerine göre güçlü yükseliş trendi ve pozitif momentum gösteren hisseler",
    href: "/borsa/gosterge-taramalari/guclu-trend-momentum",
    icon: "guclu-trend" as CategoryIconName,
  },
  {
    title: "Yükseliş Trendi + Hacim Artışı",
    description: "Hareketli ortalama dizilimi, son 3 günlük hacim ortalaması son 21 günlük hacim ortalamasının üzerinde olan hisseler",
    href: "/borsa/gosterge-taramalari/yukselis-hacim",
    icon: "hacim-artisi-analizi" as CategoryIconName,
  },
];

function TaramaKutusu({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: CategoryIconName;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <IconTile
          name={icon}
          className="h-12 w-12 shrink-0 transition duration-300 group-hover:bg-blue-100"
        />
        <h2 className="text-xl font-semibold leading-tight text-slate-900 md:text-xl">
          {title}
        </h2>
      </div>
      <p className="text-sm leading-6 text-slate-500 md:text-sm">
        {description}
      </p>
      <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
        <span>İncele</span>
        <span>→</span>
      </div>
    </Link>
  );
}

export default function GostergeTaramalariPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
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
            href="/borsa"
            prefetch={false}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
            Gösterge Taramaları
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-sm">
            Gösterge taramalarını aşağıdaki kutulardan inceleyebilirsiniz.
          </p>
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {taramalar.map((item) => (
              <TaramaKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Gösterge Taramaları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Gösterge taramaları sayfası, teknik analizde kullanılan popüler
            göstergelere göre öne çıkan hisseleri hızlı şekilde incelemek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada yükseliş trendinde olan
            hisseler, düşüş trendinde olan hisseler, RSI 30 altı hisseler, RSI 70
            üstü hisseler, MACD al veren hisseler ve MACD sat veren hisseler gibi
            farklı teknik tarama sonuçlarına kolayca ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa gösterge taramaları, yatırımcıların yüzlerce hisse arasından
            belirli teknik kriterlere uyan şirketleri daha hızlı filtrelemesine
            yardımcı olur. Hareketli ortalamalara göre trend analizi yapmak,
            aşırı satım ve aşırı alım bölgelerini tespit etmek ya da MACD sinyallerini
            takip etmek isteyen kullanıcılar için bu taramalar önemli bir avantaj
            sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            RSI 30 altı hisseler genellikle aşırı satım bölgesinde değerlendirilen
            hisseleri gösterirken, RSI 70 üstü hisseler aşırı alım bölgesine yaklaşan
            şirketleri öne çıkarabilir. Benzer şekilde yükseliş ve düşüş trendi
            taramaları teknik görünümü güçlü veya zayıf olan hisseleri tek ekranda
            karşılaştırma imkanı sunarken, MACD al ve sat taramaları da momentumu
            değişen hisseleri yakından izlemek isteyenler için faydalı bir görünüm
            sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel teknik analiz taramaları, hareketli ortalama bazlı hisse
            filtreleri, RSI taramaları, MACD sinyalleri ve trend odaklı borsa
            ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

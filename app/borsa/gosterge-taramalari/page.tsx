import Image from "next/image";
import Link from "next/link";

const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());

const taramalar = [
  {
    title: "Yükseliş trendinde olan hisseler",
    description: "5, 13, 21, 55, 89, 144, 233 hareketli ortalama üzerinde olanlar",
    href: "/borsa/gosterge-taramalari/yukselis-trendinde-olanlar",
    image: "/yukselis-trendinde-olanlar-yatay.png",
    alt: "Yükseliş trendinde olan hisseler görseli",
  },
  {
    title: "Düşüş trendinde olan hisseler",
    description: "5, 13, 21, 55, 89, 144, 233 hareketli ortalama altında olanlar",
    href: "/borsa/gosterge-taramalari/dusus-trendinde-olanlar",
    image: "/dusus-trendinde-olanlar-yatay.png",
    alt: "Düşüş trendinde olan hisseler görseli",
  },
  {
    title: "RSI 30 Altı",
    description: "RSI değeri 30 seviyesinin altında olan hisseler",
    href: "/borsa/gosterge-taramalari/rsi30-alti",
    image: "/rsi30-tarama.png",
    alt: "RSI 30 altı hisseler görseli",
  },
  {
    title: "RSI 70 Üstü",
    description: "RSI değeri 70 seviyesinin üzerinde olan hisseler",
    href: "/borsa/gosterge-taramalari/rsi70-ustu",
    image: "/rsi70-tarama.png",
    alt: "RSI 70 üstü hisseler görseli",
  },
  {
    title: "MACD Al verenler",
    description: "MACD göstergesine göre al sinyali üreten hisseler",
    href: "/borsa/gosterge-taramalari/macd-al",
    image: "/macd-al.png",
    alt: "MACD al verenler görseli",
  },
  {
    title: "MACD Sat verenler",
    description: "MACD göstergesine göre sat sinyali üreten hisseler",
    href: "/borsa/gosterge-taramalari/macd-sat",
    image: "/macd-sat.png",
    alt: "MACD sat verenler görseli",
  },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function TaramaKutusu({
  title,
  description,
  href,
  image,
  alt,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-[320px] flex-col rounded-2xl bg-white transition hover:bg-zinc-50"
    >
      <div className="p-2 pb-1 md:p-3 md:pb-1">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-50">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-start px-3 pb-3 pt-0 text-center md:px-4 md:pb-3">
        <h2 className="text-xl font-semibold leading-tight text-zinc-900 md:text-2xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function GostergeTaramalariPage() {
  return (
    <main className="min-h-screen bg-white">
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

        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Gösterge Taramaları
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Gösterge taramalarını aşağıdaki kutulardan inceleyebilirsiniz.
          </p>

          <div className="mt-4 text-sm font-semibold text-zinc-700">
            Güncelleme Tarihi: {guncellemeTarihi}
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {taramalar.map((item) => (
              <TaramaKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
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
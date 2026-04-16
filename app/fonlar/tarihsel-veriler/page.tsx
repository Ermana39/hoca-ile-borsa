import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());

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

const fonTipleri = [
  {
    title: "Menkul Kıymet Yatırım Fonları",
    href: "/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari",
    image: "/menkul-kiymet-yatirim-fonlari-tarihsel-yatay.png",
    alt: "Menkul Kıymet Yatırım Fonları tarihsel veriler görseli",
  },
  {
    title: "Emeklilik Fonları",
    href: "/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel",
    image: "/emeklilik-fonlari-tarihsel-yatay.png",
    alt: "Emeklilik Fonları tarihsel veriler görseli",
  },
  {
    title: "Borsa Yatırım Fonları",
    href: "/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel",
    image: "/borsa-yatirim-fonlari-tarihsel-yatay.png",
    alt: "Borsa Yatırım Fonları tarihsel veriler görseli",
  },
  {
    title: "Gayrimenkul Yatırım Fonları",
    href: "/fonlar/tarihsel-veriler/gayrimenkul-yatirim-fonlari-tarihsel",
    image: "/gayrimenkul-yatirim-fonlari-tarihsel-yatay.png",
    alt: "Gayrimenkul Yatırım Fonları tarihsel veriler görseli",
  },
  {
    title: "Girişim Sermayesi Yatırım Fonları",
    href: "/fonlar/tarihsel-veriler/girisim-sermayesi-yatirim-fonlari-tarihsel",
    image: "/girisim-sermayesi-yatirim-fonlari-tarihsel-yatay.png",
    alt: "Girişim Sermayesi Yatırım Fonları tarihsel veriler görseli",
  },
];

function FonTipiKutusu({
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
    <TrackedLink
      href={href}
      label={title}
      className="group flex min-h-[320px] flex-col rounded-2xl bg-white transition hover:bg-zinc-50"
      ariaLabel={title}
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
      </div>
    </TrackedLink>
  );
}

export default function FonTarihselVerilerLandingPage() {
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
            href="/fonlar"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Fon Tarihsel Veriler
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Tarihsel veri ekranını fon tipine göre ayırarak inceleyin.
          </p>
          <div className="mt-4 text-sm font-semibold text-zinc-700">
            Güncelleme Tarihi: {guncellemeTarihi}
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {fonTipleri.map((item) => (
              <FonTipiKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Fon Tarihsel Veriler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Fon tarihsel veriler sayfası, yatırım fonlarının geçmiş performansını
            detaylı şekilde incelemek isteyen kullanıcılar için hazırlanmıştır.
            Bu sayfada menkul kıymet yatırım fonları, emeklilik fonları, borsa
            yatırım fonları, gayrimenkul yatırım fonları ve girişim sermayesi
            yatırım fonları gibi farklı fon türlerinin tarihsel verilerine kolayca
            ulaşabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Tarihsel fon verileri, yatırımcıların geçmiş fiyat hareketlerini,
            performans değişimlerini ve fonların farklı dönemlerdeki seyrini analiz
            etmesine yardımcı olur. Böylece kısa vadeli dalgalanmalar ile uzun
            vadeli trendler daha net görülebilir ve yatırım kararları daha sağlam
            verilerle desteklenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Fon türlerine göre ayrılmış tarihsel veri ekranları sayesinde belirli
            bir kategoriye odaklanarak analiz yapmak daha kolay hale gelir. Bu yapı,
            özellikle fon karşılaştırması yapmak, geçmiş performansı incelemek ve
            yatırım stratejisini buna göre oluşturmak isteyen kullanıcılar için
            önemli avantaj sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel ve geçmiş fon verileri, fon performans analizi, yatırım fonu
            karşılaştırmaları ve kategori bazlı detaylı incelemeler için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
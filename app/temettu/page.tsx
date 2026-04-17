import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

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
    title: "Nisan Ayı Temettü Verenler",
    href: "/temettu/nisan-ayi-temettu-takvimi",
    image: "/nisan-ayi-temettu-verenler-yatay.png",
    alt: "Nisan Ayı Temettü Verenler görseli",
    description:
      "Nisan ayında temettü veren şirketleri toplu şekilde inceleyerek temettü takvimini daha kolay takip edebilirsiniz.",
  },
  {
    title: "Mayıs Ayı Temettü Verenler",
    href: "/temettu/mayis-ayi-temettu-takvimi",
    image: "/mayis-ayi-temettu-verenler-yatay.png",
    alt: "Mayıs Ayı Temettü Verenler görseli",
    description:
      "Mayıs ayında temettü ödemesi yapan şirketleri liste halinde görerek dönemsel temettü planlamasını takip edebilirsiniz.",
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
        <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">
          {description}
        </p>
      </div>
    </TrackedLink>
  );
}

export default function TemettuPage() {
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
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Temettü
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Temettü eğitimi, aylara göre temettü takvimi, temettü hesaplama aracı
            ve temettü verimi hesaplama bölümlerine bu sayfa üzerinden toplu
            şekilde ulaşabilirsiniz. Temettü yatırımını daha düzenli takip etmek
            isteyen kullanıcılar için sade ve erişilebilir bir yapı sunulmuştur.
          </p>
        </section>

        <section className="pt-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <TrackedLink
              href="/temettu/temettu-hesaplama-araci"
              label="Temettü Hesaplama Aracı"
              className="rounded-xl bg-blue-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-blue-200"
            >
              Temettü Hesaplama Aracı
            </TrackedLink>

            <TrackedLink
              href="/temettu/temettu-verimi-hesaplama"
              label="Temettü Verimi Hesaplama"
              className="rounded-xl bg-purple-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-purple-200"
            >
              Temettü Verimi Hesaplama
            </TrackedLink>
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {temettuKutulari.map((item) => (
              <TemettuKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Temettü sayfasında neler bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Hoca İle Borsa Temettü sayfasında temettü takvimi, aylara göre temettü dağıtacak şirketler, temettü tarihleri, temettü hesaplama aracı ve temettü verimi hesaplama içerikleri bir arada sunulur.
            </p>

            <p>
              Özellikle temettü hisseleri, temettü takvimi, temettü veren
              şirketler, temettü verimi ve temettü yatırımına dair temel bilgiler
              arayan kullanıcılar için daha düzenli ve erişilebilir bir yapı
              sunulması hedeflenmiştir. Böylece farklı temettü sayfaları arasında
              geçiş yapmak daha kolay hale gelir.
            </p>

            <p>
             Temettü yatırımıyla ilgilenen yatırımcılar bu sayfa üzerinden yaklaşan temettü ödemelerini takip edebilir, hisse bazlı temettü verilerini inceleyebilir ve temettü gelirine yönelik temel hesaplamaları daha pratik şekilde yapabilir.
            </p>

            <p className="text-zinc-500">
              Bu sayfada yer alan içerikler genel bilgilendirme amacı taşır ve
              yatırım danışmanlığı kapsamında değildir.
            </p>
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
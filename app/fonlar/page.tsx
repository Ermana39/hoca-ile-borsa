import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <div
      className={`w-full rounded-2xl ${alanClass}`}
      aria-label="Reklam alanı"
    />
  );
}

const fonKutulari = [
  {
    title: "Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler",
    desc: "Yatırım fonlarının haftalık bazda en çok tercih ettiği hisseleri inceleyin.",
    href: "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
    image: "/fonlar-haftalik-tercih.png",
    alt: "Haftalık yatırım fonlarının en çok tercih ettiği hisseler görseli",
    titleClassName: "text-[19px] md:text-[21px]",
  },
  {
    title: "Fon Getiri Analizi",
    desc: "Fon tiplerine göre ayrılmış getiri ekranlarına ulaşın.",
    href: "/fonlar/getiri",
    image: "/fonlar-getiri.png",
    alt: "Fon getiri analizi görseli",
    titleClassName: "text-[22px] md:text-[24px]",
  },
  {
    title: "Fon Tarihsel Veriler",
    desc: "Fon tiplerine göre ayrılmış tarihsel veri ekranlarına ulaşın.",
    href: "/fonlar/tarihsel-veriler",
    image: "/fonlar-tarihsel-veriler.png",
    alt: "Fon tarihsel veriler görseli",
    titleClassName: "text-[22px] md:text-[24px]",
  },
];

export default function FonlarPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Fonlar</h1>
        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Yatırım fonlarında haftalık tercihler, getiri analizi ve tarihsel veri ekranlarına buradan ulaşabilirsiniz.
        </p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fonKutulari.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              label={item.title}
              className="group flex h-[320px] flex-col rounded-2xl bg-white text-center"
              ariaLabel={item.title}
            >
              <div className="h-[110px] w-full overflow-hidden rounded-2xl bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="block h-[110px] w-full rounded-2xl object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col items-center px-4 pt-5">
                <div className="h-[78px] w-full max-w-[360px] overflow-hidden">
                  <h2
                    className={`line-clamp-2 font-semibold leading-tight text-zinc-900 ${item.titleClassName}`}
                  >
                    {item.title}
                  </h2>
                </div>

                <div className="mt-3 h-[52px] w-full max-w-[340px] overflow-hidden">
                  <p className="line-clamp-2 text-sm leading-6 text-zinc-600 md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </TrackedLink>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
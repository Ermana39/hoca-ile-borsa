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
    seoDescription:
      "Yatırım fonlarının haftalık bazda en çok yöneldiği hisseleri tek ekranda görerek fon tercihlerini daha yakından takip etmenizi sağlar.",
  },
  {
    title: "Fon Getiri Analizi",
    desc: "Fon tiplerine göre ayrılmış getiri ekranlarına ulaşın.",
    href: "/fonlar/getiri",
    image: "/fonlar-getiri.png",
    alt: "Fon getiri analizi görseli",
    titleClassName: "text-[22px] md:text-[24px]",
    seoDescription:
      "Fon türlerine göre ayrılmış getiri ekranları sayesinde yatırım fonlarının performansını daha düzenli ve karşılaştırmalı şekilde inceleyebilirsiniz.",
  },
  {
    title: "Fon Tarihsel Veriler",
    desc: "Fon tiplerine göre ayrılmış tarihsel veri ekranlarına ulaşın.",
    href: "/fonlar/tarihsel-veriler",
    image: "/fonlar-tarihsel-veriler.png",
    alt: "Fon tarihsel veriler görseli",
    titleClassName: "text-[22px] md:text-[24px]",
    seoDescription:
      "Fonların geçmiş dönem verilerini inceleyerek tarihsel performans, fiyat hareketi ve dönemsel değişimleri daha detaylı takip edebilirsiniz.",
  },
];

const videoKartlari = [
  {
    title: "TLY Tera Portföy Birinci Serbest Fonu: Dağılım ve Strateji",
    href: "https://youtu.be/S6xt7GxWWJ8",
    image: "https://img.youtube.com/vi/S6xt7GxWWJ8/hqdefault.jpg",
    alt: "TLY Tera Portföy Birinci Serbest Fonu video kapak görseli",
  },
  {
    title: "PHE Pusula Portföy Hisse Senedi Fonu Detaylı İnceleme | Strateji, Risk, Getiri",
    href: "https://youtu.be/MgVAiBFZvto",
    image: "https://img.youtube.com/vi/MgVAiBFZvto/hqdefault.jpg",
    alt: "PHE Pusula Portföy Hisse Senedi Fonu video kapak görseli",
  },
  {
    title: "DFI Atlas Portföy İkinci Serbest Fon",
    href: "https://youtu.be/flipVqvQMDA",
    image: "https://img.youtube.com/vi/flipVqvQMDA/hqdefault.jpg",
    alt: "DFI Atlas Portföy İkinci Serbest Fon video kapak görseli",
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

        <header className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900 md:text-4xl">
            Fonlar
          </h1>
          <p className="max-w-4xl text-base leading-7 text-zinc-600 md:text-lg">
            Yatırım fonları ile ilgili haftalık tercihler, fon getiri analizi,
            fon tarihsel verileri ve fonlara dair içeriklere bu sayfa üzerinden
            toplu şekilde ulaşabilirsiniz. Farklı fon başlıklarını tek sayfada
            görmek isteyen kullanıcılar için daha düzenli ve erişilebilir bir
            yapı sunulmuştur.
          </p>
        </header>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fonKutulari.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              label={item.title}
              className="group flex h-[380px] flex-col rounded-2xl bg-white text-center"
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

                <div className="mt-4 w-full max-w-[340px]">
                  <p className="text-sm leading-6 text-zinc-600 md:text-base">
                    {item.seoDescription}
                  </p>
                </div>
              </div>
            </TrackedLink>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Fonlar sayfasında neler bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Bu sayfa, yatırım fonları ile ilgili farklı başlıkları tek yerde
              toplamak amacıyla hazırlanmıştır. Kullanıcılar haftalık fon
              tercihleri, fon getiri analizi ve fon tarihsel verileri gibi ana
              başlıklara buradan hızlı şekilde ulaşabilir.
            </p>

            <p>
              Özellikle yatırım fonları, fon getirileri, fon karşılaştırmaları,
              fon performansı ve fon verileri arayan kullanıcılar için daha
              düzenli ve erişilebilir bir yapı sunulması hedeflenmiştir. Böylece
              farklı fon sayfaları arasında geçiş yapmak daha kolay hale gelir.
            </p>

            <p>
              Fonlarla ilgili içeriklerin tek merkezde toplanması hem kullanıcı
              deneyimini güçlendirir hem de sayfanın SEO açısından daha güçlü
              bir konu merkezi olmasına katkı sağlar.
            </p>

            <p className="text-zinc-500">
              Bu sayfada yer alan içerikler genel bilgilendirme amacı taşır ve
              yatırım danışmanlığı kapsamında değildir.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
              YouTube Videoları
            </h2>
            <p className="mt-2 text-sm text-zinc-600 md:text-base">
              Fonlarla ilgili hazırladığım videolara buradan ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoKartlari.map((video) => (
              <a
                key={video.href}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:bg-zinc-50"
                aria-label={video.title}
              >
                <div className="w-full">
                  <div className="overflow-hidden rounded-t-2xl bg-zinc-100">
                    <img
                      src={video.image}
                      alt={video.alt}
                      className="block aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-zinc-900">
                      {video.title}
                    </h3>

                    <div className="mt-4 inline-flex rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition group-hover:bg-red-100">
                      Videoyu Aç
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
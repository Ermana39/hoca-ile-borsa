import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

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

function FonKutusu({
  title,
  href,
  image,
  alt,
  desc,
  seoDescription,
  titleClassName,
}: {
  title: string;
  href: string;
  image: string;
  alt: string;
  desc: string;
  seoDescription: string;
  titleClassName: string;
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
            <img
              src={image}
              alt={alt}
              className="block h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-start px-3 pb-3 pt-0 text-center md:px-4 md:pb-3">
        <h2 className={`font-semibold text-zinc-900 ${titleClassName}`}>
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">
          {desc}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">
          {seoDescription}
        </p>
      </div>
    </TrackedLink>
  );
}

export default function FonlarPage() {
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
            Fonlar
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Yatırım fonları ile ilgili haftalık tercihler, fon getiri analizi,
            fon tarihsel verileri ve fonlara dair içeriklere bu sayfa üzerinden
            toplu şekilde ulaşabilirsiniz. Farklı fon başlıklarını tek sayfada
            görmek isteyen kullanıcılar için daha düzenli ve erişilebilir bir
            yapı sunulmuştur.
          </p>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {fonKutulari.map((item) => (
              <FonKutusu key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Fonlar sayfasında neler bulunur?
          </h2>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Hoca İle Borsa Fonlar sayfasında yatırım fonları, emeklilik fonları, para piyasası fonları, hisse senedi fonları, borçlanma araçları fonları ve farklı fon türlerine ait güncel içerikler bir arada sunulur.
            </p>

            <p>
              Fon yatırımına ilgi duyan kullanıcılar bu sayfa üzerinden fon kategorilerini daha kolay inceleyebilir, fon getirilerini karşılaştırabilir, risk ve dağılım yapıları hakkında genel bilgi edinebilir ve kendi yatırım tercihlerine uygun fon seçeneklerini daha pratik şekilde değerlendirebilir.

            </p>

            <p>
             Fon piyasasını takip eden kullanıcılar için hazırlanan bu bölüm, farklı fon başlıklarına tek sayfadan ulaşmayı kolaylaştırır ve güncel fon içeriklerini daha düzenli şekilde inceleme imkânı sunar.
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
                className="group flex overflow-hidden rounded-2xl bg-white transition hover:bg-zinc-50"
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
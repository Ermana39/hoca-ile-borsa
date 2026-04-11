import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section aria-label="Reklam alanı" className={`w-full overflow-hidden rounded-2xl ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

const fonTipleri = [
  { title: "Menkul Kıymet Yatırım Fonları", href: "/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari", image: "/menkul-kiymet-yatirim-fonlari-tarihsel-yatay.png", alt: "Menkul Kıymet Yatırım Fonları tarihsel veriler görseli" },
  { title: "Emeklilik Fonları", href: "/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel", image: "/emeklilik-fonlari-tarihsel-yatay.png", alt: "Emeklilik Fonları tarihsel veriler görseli" },
  { title: "Borsa Yatırım Fonları", href: "/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel", image: "/borsa-yatirim-fonlari-tarihsel-yatay.png", alt: "Borsa Yatırım Fonları tarihsel veriler görseli" },
  { title: "Gayrimenkul Yatırım Fonları", href: "/fonlar/tarihsel-veriler/gayrimenkul-yatirim-fonlari-tarihsel", image: "/gayrimenkul-yatirim-fonlari-tarihsel-yatay.png", alt: "Gayrimenkul Yatırım Fonları tarihsel veriler görseli" },
  { title: "Girişim Sermayesi Yatırım Fonları", href: "/fonlar/tarihsel-veriler/girisim-sermayesi-yatirim-fonlari-tarihsel", image: "/girisim-sermayesi-yatirim-fonlari-tarihsel-yatay.png", alt: "Girişim Sermayesi Yatırım Fonları tarihsel veriler görseli" },
];

export default function FonTarihselVerilerLandingPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/fonlar" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Fon Tarihsel Veriler</h1>
        <p className="mb-8 max-w-3xl text-base text-zinc-600">Tarihsel veri ekranını fon tipine göre ayırarak inceleyin.</p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fonTipleri.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              label={item.title}
              className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:bg-zinc-50"
              ariaLabel={item.title}
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-zinc-100">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={item.image} alt={item.alt} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
              </div>

              <div className="flex flex-1 items-center">
                <h2 className="text-2xl font-semibold leading-tight text-zinc-900">{item.title}</h2>
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
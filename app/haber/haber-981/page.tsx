import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Borsada açığa satış yasağı 12 Haziran'a uzatıldı;",
  description:
    "Borsada açığa satış yasağı 12 Haziran'a uzatıldı.;",
};

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

export default function Haber981Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber981.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Borsada açığa satış yasağı 12 Haziran'a uzatıldı
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                
              </p>
<p>A. DUYURU VE İLKE KARARLARI

Kurul Karar Organı’nın 30/05/2026 tarih ve 33/993 sayılı Kararı Uyarınca Yapılan Duyuru:

Kurulumuzun 09.05.2026 tarihli ve 2026/30 sayılı bülteni ile duyurulan Kurul Karar Organı’nın 08.05.2026 tarihli ve 30/903 sayılı Kararı’nda öngörülen;

- Borsa İstanbul AŞ pay piyasalarında açığa satış işlemlerinin yasaklanmasına,

- Kredili sermaye piyasası işlemlerinde devamı süresince öz kaynak oranının esnetilerek uygulanmasına,

ilişkin tedbir ve uygulamaların 12.06.2026 tarihli seans sonuna kadar uygulanmasının devam edilmesine karar verilmiştir.</p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </article>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
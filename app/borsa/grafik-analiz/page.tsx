import fs from "fs/promises";
import path from "path";
import Link from "next/link";

type GrafikAnalizItem = {
  baslik: string;
  href: string;
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

function titleTemizle(title: string) {
  return title
    .replace(/\|\s*Hoca İle Borsa/gi, "")
    .trim();
}

function pageIcerigindenBaslikBul(content: string, klasorAdi: string) {
  const metadataTitleMatch = content.match(/title:\s*"([^"]+)"/);

  if (metadataTitleMatch?.[1]) {
    return titleTemizle(metadataTitleMatch[1]);
  }

  const h1Match = content.match(/<h1[^>]*>\s*([\s\S]*?)\s*<\/h1>/);

  if (h1Match?.[1]) {
    return h1Match[1]
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  return klasorAdi.toUpperCase();
}

async function getGrafikAnalizleri(): Promise<GrafikAnalizItem[]> {
  const basePath = path.join(process.cwd(), "app", "borsa", "grafik-analiz");
  const entries = await fs.readdir(basePath, { withFileTypes: true });

  const klasorler = entries.filter(
    (entry) => entry.isDirectory() && entry.name !== "data"
  );

  const sonuc: GrafikAnalizItem[] = [];

  for (const klasor of klasorler) {
    const pagePath = path.join(basePath, klasor.name, "page.tsx");

    try {
      await fs.access(pagePath);
      const content = await fs.readFile(pagePath, "utf8");
      const baslik = pageIcerigindenBaslikBul(content, klasor.name);

      sonuc.push({
        baslik,
        href: `/borsa/grafik-analiz/${klasor.name}`,
      });
    } catch {
      continue;
    }
  }

  return sonuc.sort((a, b) => a.baslik.localeCompare(b.baslik, "tr"));
}

export default async function GrafikAnalizPage() {
  const hisseler = await getGrafikAnalizleri();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Grafik Analiz</h1>

        <div className="space-y-3">
          {hisseler.length > 0 ? (
            hisseler.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 text-base font-semibold text-zinc-900 transition hover:bg-blue-100"
              >
                {item.baslik}
              </Link>
            ))
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-600">
              Henüz grafik analiz eklenmedi.
            </div>
          )}
        </div>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
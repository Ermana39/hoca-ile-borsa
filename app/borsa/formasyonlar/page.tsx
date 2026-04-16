import fs from "fs/promises";
import path from "path";
import Link from "next/link";

type FormasyonItem = {
  kod: string;
  tur: string;
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

async function getFormasyonlar(): Promise<FormasyonItem[]> {
  const basePath = path.join(process.cwd(), "app", "borsa", "formasyonlar");

  const entries = await fs.readdir(basePath, { withFileTypes: true });

  const klasorler = entries
    .filter((entry) => entry.isDirectory() && /^formasyon\d+$/i.test(entry.name))
    .sort((a, b) => {
      const aNo = Number(a.name.replace("formasyon", ""));
      const bNo = Number(b.name.replace("formasyon", ""));
      return aNo - bNo;
    });

  const sonuc: FormasyonItem[] = [];

  for (const klasor of klasorler) {
    const dataPath = path.join(basePath, klasor.name, "data.ts");
    const pagePath = path.join(basePath, klasor.name, "page.tsx");

    try {
      await fs.access(pagePath);
      await fs.access(dataPath);

      const mod = await import(`./${klasor.name}/data`);

      sonuc.push({
        kod: mod.formasyonData.kod,
        tur: mod.formasyonData.tur,
        href: `/borsa/formasyonlar/${klasor.name}`,
      });
    } catch {
      continue;
    }
  }

  return sonuc;
}

export default async function FormasyonlarPage() {
  const formasyonlar = await getFormasyonlar();

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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Formasyonlar</h1>

        <div className="space-y-3">
          {formasyonlar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="grid grid-cols-2 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-base font-semibold text-zinc-900 transition hover:bg-green-100"
            >
              <div>{item.kod}</div>
              <div className="text-right">{item.tur}</div>
            </Link>
          ))}
        </div>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Borsa Formasyonları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa formasyonları sayfası, teknik analizde sık kullanılan fiyat
            formasyonlarını takip etmek isteyen yatırımcılar için hazırlanmıştır.
            Bu sayfada hisselerde oluşan teknik formasyonları tek ekranda
            inceleyebilir, grafik yapılarında öne çıkan görünüm türlerini daha
            kolay değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Teknik analiz formasyonları, yatırımcılara olası trend değişimleri,
            devam formasyonları ve önemli fiyat kırılımları hakkında fikir verebilir.
            Omuz baş omuz, çanak, flama, üçgen ve benzeri grafik yapıları piyasa
            yönünü anlamaya çalışan kullanıcılar için önemli sinyaller sunar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse bazlı formasyon takibi yapmak isteyen kullanıcılar için bu sayfa,
            farklı hisselerde görülen teknik yapıları listeleyerek analiz sürecini
            kolaylaştırır. Böylece hem kısa vadeli işlem yapanlar hem de orta vadeli
            yatırımcılar dikkat çeken teknik görünümleri daha hızlı takip edebilir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel borsa formasyonları, teknik analiz sinyalleri, hisse bazlı grafik
            görünümleri ve dikkat çeken teknik yapılar için bu sayfayı düzenli
            olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
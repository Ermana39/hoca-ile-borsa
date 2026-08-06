export const metadata = {
  title: "Grafik Formasyonları | Hoca İle Borsa",
  description: "Grafik formasyonlarına göre öne çıkan hisseleri liste halinde inceleyin.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/formasyonlar" },
};

import fs from "fs/promises";
import path from "path";
import Link from "@/components/NoPrefetchLink";

type FormasyonItem = {
  kod: string;
  tur: string;
  href: string;
};

async function getFormasyonlar(): Promise<FormasyonItem[]> {
  const basePath = path.join(process.cwd(), "app", "borsa", "formasyonlar");

  const entries = await fs.readdir(basePath, { withFileTypes: true });

  // data.ts + page.tsx içeren her klasör bir formasyon analizidir;
  // [slug] gibi dinamik route klasörleri filtrelenir, data.ts erişim
  // kontrolü aşağıdaki döngüde zaten yapılır.
  const klasorler = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("["))
    .sort((a, b) => a.name.localeCompare(b.name, "tr"));

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
    <main className="min-h-screen px-4 py-6 md:px-6">
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
          <h1 className="text-3xl font-bold text-zinc-900">Formasyonlar</h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700 md:text-base">
            Borsa İstanbul hisselerinde oluşan teknik formasyonları, hisse kodu
            ve formasyon türüyle birlikte bu sayfadan takip edebilirsiniz.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {formasyonlar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
            >
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                Teknik Formasyon
              </p>
              <h2 className="text-base font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-lg">
                {item.kod}
              </h2>
              <p className="mt-1 text-xs text-slate-500">{item.tur}</p>
              <div className="mt-auto flex items-center gap-1 pt-3 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                <span>İncele</span>
                <span>→</span>
              </div>
            </Link>
          ))}
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
            devam formasyonları ve önemli fiyat kırılımları hakkında fikir
            verebilir. Omuz baş omuz, çanak, flama, üçgen ve benzeri grafik
            yapıları piyasa yönünü anlamaya çalışan kullanıcılar için önemli
            sinyaller sunar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse bazlı formasyon takibi yapmak isteyen kullanıcılar için bu
            sayfa, farklı hisselerde görülen teknik yapıları listeleyerek analiz
            sürecini kolaylaştırır. Böylece hem kısa vadeli işlem yapanlar hem de
            orta vadeli yatırımcılar dikkat çeken teknik görünümleri daha hızlı
            takip edebilir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel borsa formasyonları, teknik analiz sinyalleri, hisse bazlı
            grafik görünümleri ve dikkat çeken teknik yapılar için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
export const metadata = {
  title: "Grafik Formasyonları | Hoca İle Borsa",
  description: "Grafik formasyonlarına göre öne çıkan hisseleri liste halinde inceleyin.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/formasyonlar" },
};

import fs from "fs/promises";
import path from "path";
import Link from "next/link";

type FormasyonItem = {
  kod: string;
  tur: string;
  href: string;
};

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

        <section className="space-y-4">
          {formasyonlar.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block overflow-hidden rounded-2xl bg-white/80 px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.13)] md:px-6 md:py-6"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-slate-900 via-blue-700 to-emerald-500" />

              <div className="flex items-center gap-4 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-[0_8px_20px_rgba(15,23,42,0.25)] md:h-16 md:w-16 md:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Teknik Formasyon
                  </p>

                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-6">
                    <h2 className="text-xl font-black leading-8 tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-2xl md:leading-9">
                      {item.kod}
                    </h2>

                    <p className="text-base font-bold leading-7 text-zinc-700 md:text-lg md:text-right">
                      {item.tur}
                    </p>
                  </div>
                </div>

                <div className="hidden shrink-0 items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition duration-300 group-hover:bg-blue-700 md:flex">
                  İncele
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
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
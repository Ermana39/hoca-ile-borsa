import type { KapEtkiAnalizi as KapEtkiAnaliziVerisi } from "@/lib/haber-kayitlari";
import {
  kapEtkiMetrigiGorunumu,
  type KapEtkiMetrigiGorunumu,
} from "@/lib/kap-etki-analizi";

export default function KapEtkiAnalizi({
  analiz,
}: {
  analiz: KapEtkiAnaliziVerisi;
}) {
  const metrikler = analiz.metrikler
    .map(kapEtkiMetrigiGorunumu)
    .filter((metrik): metrik is KapEtkiMetrigiGorunumu => metrik !== null);

  if (metrikler.length === 0) return null;

  return (
    <section className="border-y border-slate-200 py-6 md:py-8">
      <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
        Sayısal görünüm
      </p>
      <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
        Haberdeki ölçülebilir veriler
      </h2>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {metrikler.map((metrik, index) => (
          <article
            key={`${metrik.baslik}-${index}`}
            className="rounded-lg border border-blue-200 bg-blue-50/50 p-5"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              {metrik.sonucEtiketi}
            </p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {metrik.baslik}
            </h3>
            <div className="mt-3 text-3xl font-black tracking-tight text-blue-950">
              {metrik.sonuc}
            </div>
            {metrik.ikincilSonuc && (
              <p className="mt-1 text-sm font-semibold text-slate-600">
                {metrik.ikincilSonuc}
              </p>
            )}

            {metrik.detaylar.length > 0 && (
              <dl className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
                {metrik.detaylar.map((detay, detayIndex) => (
                  <div
                    key={`${detay.etiket}-${detayIndex}`}
                    className="grid gap-1 py-3 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-4"
                  >
                    <dt className="text-xs font-semibold text-slate-500">
                      {detay.etiket}
                    </dt>
                    <dd className="text-sm font-bold text-slate-800 sm:text-right">
                      {detay.deger}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {metrik.formul && (
              <p className="mt-4 text-xs leading-5 text-slate-500">
                <span className="font-bold text-slate-700">Hesap:</span>{" "}
                {metrik.formul}
              </p>
            )}
            {metrik.aciklama && (
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {metrik.aciklama}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

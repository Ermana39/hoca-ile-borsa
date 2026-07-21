import type { KapEtkiAnalizi as KapEtkiAnaliziVerisi } from "@/lib/haber-kayitlari";
import { kapEtkiMetrigiGorunumu } from "@/lib/kap-etki-analizi";

const olayTuruEtiketi: Record<KapEtkiAnaliziVerisi["olayTuru"], string> = {
  sozlesme: "Sözleşme",
  ihale: "İhale",
  yatirim: "Yatırım",
  kapasite: "Kapasite",
  bedelsiz: "Bedelsiz sermaye artırımı",
  "donemsel-satis": "Dönemsel satış",
  diger: "Şirket gelişmesi",
};

export default function KapEtkiAnalizi({
  analiz,
}: {
  analiz: KapEtkiAnaliziVerisi;
}) {
  const metrikler = analiz.metrikler.map(kapEtkiMetrigiGorunumu);

  return (
    <section className="overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm">
      <div className="border-b border-indigo-200 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 p-5 text-white md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-100 ring-1 ring-inset ring-white/20">
            KAP Etki Analizi
          </span>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-inset ring-emerald-300/30">
            {olayTuruEtiketi[analiz.olayTuru]}
          </span>
        </div>
        <h2 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">
          Açıklanan gelişme şirket ölçeğinde ne ifade ediyor?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100 md:text-base">
          {analiz.ozet}
        </p>
      </div>

      <div className="space-y-5 p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {metrikler.map((metrik, index) => {
            const hesaplanamadi = metrik.durum === "hesaplanamadi";

            return (
              <article
                key={`${metrik.baslik}-${index}`}
                className={`rounded-2xl border p-5 ${
                  hesaplanamadi
                    ? "border-amber-200 bg-amber-50/60"
                    : "border-blue-200 bg-blue-50/50"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    hesaplanamadi ? "text-amber-700" : "text-blue-700"
                  }`}
                >
                  {metrik.sonucEtiketi}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {metrik.baslik}
                </h3>
                <div
                  className={`mt-4 text-3xl font-black tracking-tight ${
                    hesaplanamadi ? "text-amber-800" : "text-blue-950"
                  }`}
                >
                  {metrik.sonuc}
                </div>
                {metrik.ikincilSonuc && (
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {metrik.ikincilSonuc}
                  </p>
                )}

                <dl className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-4">
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

                {metrik.formul && (
                  <p className="mt-4 rounded-lg bg-slate-900 px-3 py-2 text-xs leading-5 text-slate-200">
                    <span className="font-bold text-white">Hesap:</span>{" "}
                    {metrik.formul}
                  </p>
                )}
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {metrik.aciklama}
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
            <h3 className="text-base font-bold text-amber-950">
              Etkiyi sınırlayabilecek riskler
            </h3>
            <ul className="mt-3 space-y-3">
              {analiz.riskler.map((risk, index) => (
                <li
                  key={`kap-risk-${index}`}
                  className="border-l-2 border-amber-400 pl-3 text-sm leading-6 text-amber-950"
                >
                  {risk}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <h3 className="text-base font-bold text-emerald-950">
              Sonraki açıklamalarda izlenecekler
            </h3>
            <ul className="mt-3 space-y-3">
              {analiz.takipEdilecekler.map((madde, index) => (
                <li
                  key={`kap-takip-${index}`}
                  className="border-l-2 border-emerald-400 pl-3 text-sm leading-6 text-emerald-950"
                >
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-600">
          <strong className="text-slate-800">Yöntem notu:</strong>{" "}
          {analiz.metodolojiNotu ??
            "Büyüklük oranı, açıklanan tutarın seçilen karşılaştırma verisine bölünmesiyle hesaplanır. Sonuç gelir veya net kâr katkısı tahmini değildir."}
        </div>
      </div>
    </section>
  );
}

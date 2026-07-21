import type { HalkaArzVeri } from "@/lib/halka-arz";
import {
  taslakOnayKarsilastirmasiOlustur,
  type KarsilastirmaDurumu,
  type KarsilastirmaSatiri,
} from "@/lib/halka-arz-karsilastirma";

type TaslakOnayKarsilastirmasiProps = {
  slug: string;
  onayliVeri: HalkaArzVeri;
};

const durumGorunumu: Record<
  KarsilastirmaDurumu,
  { etiket: string; rozet: string; kart: string }
> = {
  degisti: {
    etiket: "Değişti",
    rozet: "bg-amber-100 text-amber-900",
    kart: "border-amber-200 bg-amber-50/40",
  },
  kesinlesti: {
    etiket: "Onayda kesinleşti",
    rozet: "bg-blue-100 text-blue-900",
    kart: "border-blue-200 bg-blue-50/40",
  },
  kaldirildi: {
    etiket: "Onayda yer almadı",
    rozet: "bg-rose-100 text-rose-900",
    kart: "border-rose-200 bg-rose-50/40",
  },
  ayni: {
    etiket: "Aynı kaldı",
    rozet: "bg-emerald-100 text-emerald-900",
    kart: "border-slate-200 bg-white",
  },
};

function tarihMetni(value?: string) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function DegerListesi({ values, empty }: { values: string[]; empty: string }) {
  if (values.length === 0) {
    return <p className="text-sm italic leading-6 text-slate-500">{empty}</p>;
  }

  if (values.length === 1) {
    return <p className="text-sm font-medium leading-6 text-slate-800">{values[0]}</p>;
  }

  return (
    <ul className="space-y-2">
      {values.map((value, index) => (
        <li
          key={`${index}-${value}`}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium leading-5 text-slate-700"
        >
          {value}
        </li>
      ))}
    </ul>
  );
}

function KarsilastirmaSatiriKarti({ item }: { item: KarsilastirmaSatiri }) {
  const gorunum = durumGorunumu[item.durum];

  return (
    <article className={`rounded-2xl border p-4 ${gorunum.kart}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-bold text-slate-900">{item.etiket}</h4>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${gorunum.rozet}`}>
          {gorunum.etiket}
        </span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Taslak İzahname
          </p>
          <DegerListesi
            values={item.taslak}
            empty="Taslak sürümde açıklanmamıştı."
          />
        </div>
        <div className="rounded-xl border border-blue-200 bg-white p-3">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-blue-700">
            Onaylı İzahname
          </p>
          <DegerListesi
            values={item.onayli}
            empty="Onaylı kayıtta yer almıyor."
          />
        </div>
      </div>
    </article>
  );
}

export default function TaslakOnayKarsilastirmasi({
  slug,
  onayliVeri,
}: TaslakOnayKarsilastirmasiProps) {
  const karsilastirma = taslakOnayKarsilastirmasiOlustur(slug, onayliVeri);
  if (!karsilastirma) return null;

  const farkSayisi =
    karsilastirma.ozet.degisti +
    karsilastirma.ozet.kesinlesti +
    karsilastirma.ozet.kaldirildi;

  return (
    <section
      id="taslak-onayli-karsilastirmasi"
      aria-labelledby="taslak-onayli-karsilastirmasi-baslik"
      className="mt-8 scroll-mt-20 overflow-hidden rounded-2xl border border-violet-200 bg-white"
    >
      <div className="bg-gradient-to-r from-violet-950 via-indigo-950 to-slate-950 px-5 py-6 text-white sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
          İzahname değişiklik analizi
        </p>
        <h3
          id="taslak-onayli-karsilastirmasi-baslik"
          className="mt-2 text-xl font-bold sm:text-2xl"
        >
          Taslakta Ne Vardı, Onaylı İzahnamede Ne Değişti?
        </h3>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
          {karsilastirma.sirketAdi} için arşivlenen taslak kayıt ile güncel
          onaylı izahname özeti alan alan karşılaştırıldı. {farkSayisi} başlıkta
          değişiklik veya yeni kesinleşen bilgi bulundu.
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Değişen", karsilastirma.ozet.degisti, "text-amber-700"],
            ["Onayda kesinleşen", karsilastirma.ozet.kesinlesti, "text-blue-700"],
            ["Aynı kalan", karsilastirma.ozet.ayni, "text-emerald-700"],
            ["Onayda yer almayan", karsilastirma.ozet.kaldirildi, "text-rose-700"],
          ].map(([label, value, color]) => (
            <div key={String(label)} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold text-slate-500">{label}</p>
              <p className={`mt-1 text-2xl font-black ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-xs leading-5 text-violet-950">
          Karşılaştırma, sitede onay öncesinde saklanan taslak veri sürümü
          {karsilastirma.taslakSurumTarihi
            ? ` (${tarihMetni(karsilastirma.taslakSurumTarihi)})`
            : ""} ile güncel onaylı kayıt üzerinden otomatik üretilir. Resmî
          izahnamelerdeki hukuki metinlerin yerine geçmez.
        </p>

        <div className="mt-6 space-y-6">
          {karsilastirma.bolumler.map((bolum) => {
            const farkliSatirlar = bolum.satirlar.filter(
              (item) => item.durum !== "ayni"
            );
            const ayniSatirlar = bolum.satirlar.filter(
              (item) => item.durum === "ayni"
            );

            return (
              <section key={bolum.id} aria-labelledby={`${bolum.id}-baslik`}>
                <h4 id={`${bolum.id}-baslik`} className="text-base font-bold text-slate-900">
                  {bolum.baslik}
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-600">{bolum.aciklama}</p>

                {farkliSatirlar.length > 0 && (
                  <div className="mt-3 space-y-3">
                    {farkliSatirlar.map((item) => (
                      <KarsilastirmaSatiriKarti key={item.id} item={item} />
                    ))}
                  </div>
                )}

                {ayniSatirlar.length > 0 && (
                  <details className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <summary className="cursor-pointer text-sm font-bold text-slate-700">
                      Aynı kalan {ayniSatirlar.length} başlığı göster
                    </summary>
                    <div className="mt-3 space-y-3">
                      {ayniSatirlar.map((item) => (
                        <KarsilastirmaSatiriKarti key={item.id} item={item} />
                      ))}
                    </div>
                  </details>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

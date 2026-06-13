import {
  getHaberKategorisi,
  getIlgiliHaberler,
  getHaberIlgiliHisseler,
} from "@/lib/haberler";
import HaberKategoriEtiketi from "@/components/HaberKategoriEtiketi";
import HaberIlgiliHaberler from "@/components/HaberIlgiliHaberler";
import HisseLink from "@/components/HisseLink";

// Haber detay sayfası alt bilgisi: kategori rozeti + ilgili hisseler + ilgili haberler.
// Kategorisi olmayan haberlerde (veride bulunmayan) hiçbir şey render etmez.
export default function HaberAltBilgi({ href }: { href: string }) {
  const slug = getHaberKategorisi(href);
  if (!slug) return null;

  const ilgiliHisseler = getHaberIlgiliHisseler(href);
  const ilgiliVar = getIlgiliHaberler(href, 4).length > 0;

  return (
    <div className="border-t border-slate-100 px-6 pt-5 pb-1 md:px-10">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <span className="font-medium">Kategori:</span>
        <HaberKategoriEtiketi kategori={slug} />
      </div>

      {ilgiliHisseler.length > 0 && (
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span className="font-medium">İlgili Hisseler:</span>
          {ilgiliHisseler.map((kod) => (
            <span
              key={kod}
              className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ring-slate-200"
            >
              <HisseLink sembol={kod} />
            </span>
          ))}
        </div>
      )}

      {ilgiliVar && <HaberIlgiliHaberler href={href} />}
    </div>
  );
}

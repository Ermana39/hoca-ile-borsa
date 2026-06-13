import { getHaberKategorisi, getIlgiliHaberler } from "@/lib/haberler";
import HaberKategoriEtiketi from "@/components/HaberKategoriEtiketi";
import HaberIlgiliHaberler from "@/components/HaberIlgiliHaberler";

// Haber detay sayfası alt bilgisi: kategori rozeti + aynı kategoriden ilgili haberler.
// Kategorisi olmayan haberlerde (veride bulunmayan) hiçbir şey render etmez.
export default function HaberAltBilgi({ href }: { href: string }) {
  const slug = getHaberKategorisi(href);
  if (!slug) return null;

  const ilgiliVar = getIlgiliHaberler(href, 4).length > 0;

  return (
    <div className="border-t border-slate-100 px-6 pt-5 pb-1 md:px-10">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <span className="font-medium">Kategori:</span>
        <HaberKategoriEtiketi kategori={slug} />
      </div>
      {ilgiliVar && <HaberIlgiliHaberler href={href} />}
    </div>
  );
}

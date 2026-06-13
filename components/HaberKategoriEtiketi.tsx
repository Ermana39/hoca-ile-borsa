import Link from "next/link";
import { getHaberKategorisi } from "@/lib/haberler";
import { getKategori, type HaberKategori } from "@/lib/haber-kategorileri";

// Haberin ait olduğu kategoriye linkli rozet.
// Kategori href üzerinden veriden bulunur; istenirse açıkça da verilebilir.
export default function HaberKategoriEtiketi({
  href,
  kategori,
  className = "",
}: {
  href?: string;
  kategori?: HaberKategori;
  className?: string;
}) {
  const slug = kategori ?? (href ? getHaberKategorisi(href) : undefined);
  if (!slug) return null;

  const bilgi = getKategori(slug);
  if (!bilgi) return null;

  return (
    <Link
      href={`/haberler/kategori/${bilgi.slug}`}
      prefetch={false}
      className={`inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20 transition hover:bg-blue-100 ${className}`}
    >
      <span aria-hidden>#</span>
      {bilgi.kisaBaslik}
    </Link>
  );
}

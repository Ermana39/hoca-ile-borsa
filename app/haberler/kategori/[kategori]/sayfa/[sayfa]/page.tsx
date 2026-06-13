import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import HaberArsiv from "@/components/HaberArsiv";
import { getNewsByCategory, getToplamSayfa } from "@/lib/haberler";
import {
  HABER_KATEGORILERI,
  getKategori,
} from "@/lib/haber-kategorileri";

export const revalidate = 86400;
export const dynamicParams = true;

const SITE = "https://www.hocaileborsa.com";

function parseSayfa(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  return Number(value);
}

export function generateStaticParams() {
  const params: { kategori: string; sayfa: string }[] = [];
  for (const k of HABER_KATEGORILERI) {
    const toplamSayfa = getToplamSayfa(getNewsByCategory(k.slug).length);
    for (let n = 2; n <= toplamSayfa; n++) {
      params.push({ kategori: k.slug, sayfa: String(n) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string; sayfa: string }>;
}): Promise<Metadata> {
  const { kategori, sayfa } = await params;
  const bilgi = getKategori(kategori);
  if (!bilgi) return {};
  const n = parseSayfa(sayfa) ?? 1;

  return {
    title: `${bilgi.baslik} - Sayfa ${n} | Hoca İle Borsa`,
    description: `${bilgi.metaDescription} (Sayfa ${n})`,
    alternates: {
      canonical: `${SITE}/haberler/kategori/${bilgi.slug}/sayfa/${n}`,
    },
  };
}

export default async function HaberKategoriSayfaPage({
  params,
}: {
  params: Promise<{ kategori: string; sayfa: string }>;
}) {
  const { kategori, sayfa } = await params;
  const bilgi = getKategori(kategori);
  if (!bilgi) notFound();

  const n = parseSayfa(sayfa);
  if (n === null) notFound();
  if (n === 1) redirect(`/haberler/kategori/${bilgi.slug}`);

  const haberler = getNewsByCategory(bilgi.slug);
  const toplamSayfa = getToplamSayfa(haberler.length);
  if (n > toplamSayfa) notFound();

  return (
    <HaberArsiv
      haberler={haberler}
      aktifSayfa={n}
      basePath={`/haberler/kategori/${bilgi.slug}`}
      baslik={bilgi.baslik}
      aciklama={bilgi.aciklama}
      aktifKategori={bilgi.slug}
    />
  );
}

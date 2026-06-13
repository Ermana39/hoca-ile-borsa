import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HaberArsiv from "@/components/HaberArsiv";
import { getNewsByCategory } from "@/lib/haberler";
import {
  HABER_KATEGORILERI,
  getKategori,
} from "@/lib/haber-kategorileri";

export const revalidate = 86400;
export const dynamicParams = false;

const SITE = "https://www.hocaileborsa.com";

export function generateStaticParams() {
  return HABER_KATEGORILERI.map((k) => ({ kategori: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori } = await params;
  const bilgi = getKategori(kategori);
  if (!bilgi) return {};

  return {
    title: bilgi.metaTitle,
    description: bilgi.metaDescription,
    alternates: {
      canonical: `${SITE}/haberler/kategori/${bilgi.slug}`,
    },
  };
}

export default async function HaberKategoriPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const bilgi = getKategori(kategori);
  if (!bilgi) notFound();

  const haberler = getNewsByCategory(bilgi.slug);

  return (
    <HaberArsiv
      haberler={haberler}
      aktifSayfa={1}
      basePath={`/haberler/kategori/${bilgi.slug}`}
      baslik={bilgi.baslik}
      aciklama={bilgi.aciklama}
      aktifKategori={bilgi.slug}
    />
  );
}

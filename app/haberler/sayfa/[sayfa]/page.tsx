import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import HaberArsiv from "@/components/HaberArsiv";
import { getAllNews, getToplamSayfa } from "@/lib/haberler";

export const revalidate = false;
export const dynamicParams = true;

const SITE = "https://www.hocaileborsa.com";

function parseSayfa(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  return Number(value);
}

export function generateStaticParams() {
  const toplamSayfa = getToplamSayfa(getAllNews().length);
  // 1. sayfa /haberler adresinde; burada 2..N üretilir.
  const params: { sayfa: string }[] = [];
  for (let n = 2; n <= toplamSayfa; n++) {
    params.push({ sayfa: String(n) });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sayfa: string }>;
}): Promise<Metadata> {
  const { sayfa } = await params;
  const n = parseSayfa(sayfa) ?? 1;

  return {
    title: `Haberler - Sayfa ${n}`,
    description: `Borsa, halka arz, temettü ve piyasa haberleri arşivi – sayfa ${n}.`,
    alternates: {
      canonical: `${SITE}/haberler/sayfa/${n}`,
    },
  };
}

export default async function HaberlerSayfaPage({
  params,
}: {
  params: Promise<{ sayfa: string }>;
}) {
  const { sayfa } = await params;
  const n = parseSayfa(sayfa);

  if (n === null) notFound();
  if (n === 1) redirect("/haberler");

  const haberler = getAllNews();
  const toplamSayfa = getToplamSayfa(haberler.length);

  if (n > toplamSayfa) notFound();

  return (
    <HaberArsiv
      haberler={haberler}
      aktifSayfa={n}
      basePath="/haberler"
      baslik="Haberler"
      aciklama="Borsa İstanbul, halka arz, temettü, KAP bildirimleri, sermaye artırımı ve küresel piyasalara dair tüm güncel haberleri tarihe göre bu arşivde bulabilirsiniz."
    />
  );
}

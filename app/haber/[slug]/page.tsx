import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OrtakHaberSayfasi from "@/components/OrtakHaberSayfasi";
import {
  getDinamikHaberSluglari,
  haberKaydiGetir,
  haberMetadata,
  statikHaberSlugVar,
} from "@/lib/haber-kayitlari";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDinamikHaberSluglari().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kayit = haberKaydiGetir(slug);
  if (!kayit || kayit.durum !== "yayinda" || statikHaberSlugVar(slug)) {
    return {};
  }
  return haberMetadata(kayit);
}

export default async function HaberDinamikSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (statikHaberSlugVar(slug)) notFound();
  const kayit = haberKaydiGetir(slug);
  if (!kayit || kayit.durum !== "yayinda") notFound();

  return <OrtakHaberSayfasi kayit={kayit} />;
}

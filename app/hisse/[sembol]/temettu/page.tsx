import { notFound, permanentRedirect } from "next/navigation";
import { getHisse, getTumHisseSembolleri } from "@/lib/hisseler";

export const dynamicParams = true;

export function generateStaticParams() {
  return getTumHisseSembolleri().map((sembol) => ({ sembol }));
}

export default async function HisseTemettuRedirectPage({
  params,
}: {
  params: Promise<{ sembol: string }>;
}) {
  const { sembol } = await params;
  const hisse = getHisse(sembol);

  if (!hisse) notFound();

  permanentRedirect(`/hisse/${hisse.kod.toLowerCase()}`);
}

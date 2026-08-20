import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RehberMakale from "../_components/RehberMakale";
import { ekRehberler, getEkRehber } from "../_data/ekRehberler";

const siteUrl = "https://www.hocaileborsa.com";

type RehberPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ekRehberler.map((guide) => ({
    slug: guide.href.replace("/rehberler/", ""),
  }));
}

export async function generateMetadata({
  params,
}: RehberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getEkRehber(slug);

  if (!guide) {
    return {};
  }

  const canonical = `${siteUrl}${guide.href}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function RehberPage({ params }: RehberPageProps) {
  const { slug } = await params;
  const guide = getEkRehber(slug);

  if (!guide) {
    notFound();
  }

  return <RehberMakale guide={guide} />;
}

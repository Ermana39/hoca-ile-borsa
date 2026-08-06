"use client";

import Link from "@/components/NoPrefetchLink";
import { usePathname } from "next/navigation";

const SITE_URL = "https://www.hocaileborsa.com";

/**
 * Bilinen route parçaları için okunabilir etiket ve gerektiğinde href override.
 * Örn. haber detayları /haber/[slug] altında olsa da liste sayfası /haberler'dir.
 */
const SEGMENT_LABELS: Record<string, { label: string; href?: string }> = {
  haber: { label: "Haberler", href: "/haberler" },
  haberler: { label: "Haberler", href: "/haberler" },
  "halka-arz": { label: "Halka Arz", href: "/halka-arz" },
  borsa: { label: "Borsa", href: "/borsa" },
  rehberler: { label: "Rehberler", href: "/rehberler" },
  temettu: { label: "Temettü", href: "/temettu" },
  "onayli-izahnameler": { label: "Onaylı İzahnameler" },
  "taslak-izahnameler": { label: "Taslak İzahnameler" },
  "gunluk-borsa-ozeti": { label: "Günlük Borsa Özeti" },
};

function prettifySlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\p{L}/gu, (c) => c.toLocaleUpperCase("tr"));
}

type Crumb = { name: string; href: string; current: boolean };

export default function Breadcrumb({
  maxWidthClass = "max-w-7xl",
  currentLabel,
  schemaOnly = false,
  className = "",
}: {
  /** Sayfa içeriğiyle hizalanması için kapsayıcı genişliği */
  maxWidthClass?: string;
  /** Son (mevcut) kırıntının etiketini override etmek için */
  currentLabel?: string;
  /** Sadece JSON-LD şeması üret, görsel breadcrumb gösterme */
  schemaOnly?: boolean;
  className?: string;
}) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  // Ana sayfada breadcrumb gösterme
  if (segments.length === 0) return null;

  const crumbs: Crumb[] = [{ name: "Ana Sayfa", href: "/", current: false }];

  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;
    const cumulative = "/" + segments.slice(0, index + 1).join("/");
    const mapped = SEGMENT_LABELS[segment];
    const name =
      isLast && currentLabel
        ? currentLabel
        : mapped?.label ?? prettifySlug(segment);
    const href = mapped?.href ?? cumulative;
    crumbs.push({ name, href, current: isLast });
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  const schema = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );

  if (schemaOnly) return schema;

  return (
    <div className={`mx-auto ${maxWidthClass} px-4 pt-5 md:px-6 ${className}`}>
      {schema}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500"
      >
        {crumbs.map((crumb, index) => (
          <span key={crumb.href} className="flex items-center gap-x-2">
            {index > 0 && <span className="text-slate-300">/</span>}
            {crumb.current ? (
              <span className="font-medium text-slate-700">{crumb.name}</span>
            ) : (
              <Link
                href={crumb.href}
                prefetch={false}
                className="transition hover:text-blue-600"
              >
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}

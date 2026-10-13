import type { ReactNode } from "react";
import Link from "@/components/NoPrefetchLink";
import { getFundBySlug } from "@/lib/fon-platform";

export default function FonDetayLink({
  href,
  className,
  fallbackElement = "span",
  children,
}: {
  href: string;
  className?: string;
  fallbackElement?: "span" | "div";
  children: ReactNode;
}) {
  const slug = href.match(/^\/fonlar\/([a-z0-9-]+)$/i)?.[1] ?? "";
  const fund = slug ? getFundBySlug(slug) : null;

  if (!fund?.aktifMi) {
    return fallbackElement === "div" ? (
      <div className={className}>{children}</div>
    ) : (
      <span className={className}>{children}</span>
    );
  }

  return (
    <Link href={`/fonlar/${fund.slug}`} prefetch={false} className={className}>
      {children}
    </Link>
  );
}

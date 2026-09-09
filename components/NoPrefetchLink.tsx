import type { AnchorHTMLAttributes } from "react";

type LinkHref =
  | string
  | {
      pathname?: string;
      query?: Record<string, string | number | boolean | null | undefined>;
      hash?: string;
    };

type NoPrefetchLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: LinkHref;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string | false;
};

function hrefToString(href: LinkHref) {
  if (typeof href === "string") return href;

  const pathname = href.pathname ?? "";
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(href.query ?? {})) {
    if (value === null || value === undefined) continue;
    query.set(key, String(value));
  }

  const search = query.size > 0 ? `?${query.toString()}` : "";
  const hash = href.hash
    ? href.hash.startsWith("#")
      ? href.hash
      : `#${href.hash}`
    : "";

  return `${pathname}${search}${hash}`;
}

/**
 * Uses plain document navigation for the static export. This keeps pages and
 * SEO output simple while avoiding the large App Router RSC payload files.
 */
export default function NoPrefetchLink({
  href,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}: NoPrefetchLinkProps) {
  void prefetch;
  void replace;
  void scroll;
  void shallow;
  void locale;

  return <a {...props} href={hrefToString(href)} />;
}

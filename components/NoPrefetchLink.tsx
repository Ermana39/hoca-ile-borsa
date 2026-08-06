import NextLink from "next/link";
import type { ComponentProps } from "react";

type NoPrefetchLinkProps = ComponentProps<typeof NextLink>;

/**
 * Keeps Next.js client-side navigation, but avoids downloading a route before
 * the visitor has shown intent by clicking it. Individual links can still opt
 * in explicitly with `prefetch={true}` when there is a measured benefit.
 */
export default function NoPrefetchLink({
  prefetch,
  ...props
}: NoPrefetchLinkProps) {
  return (
    <NextLink
      {...props}
      prefetch={prefetch === undefined ? false : prefetch}
    />
  );
}

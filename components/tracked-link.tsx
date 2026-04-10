"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export default function TrackedLink({
  href,
  label,
  className,
  children,
  ariaLabel,
}: TrackedLinkProps) {
  const pathname = usePathname();

  const handleClick = (_e: MouseEvent<HTMLAnchorElement>) => {
    fetch("/api/track-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: pathname || "/",
        target: href,
        label,
      }),
      keepalive: true,
      cache: "no-store",
    }).catch(() => {});
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
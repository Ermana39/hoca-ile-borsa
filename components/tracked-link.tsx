import Link from "next/link";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export default function TrackedLink({
  href,
  className,
  children,
  ariaLabel,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
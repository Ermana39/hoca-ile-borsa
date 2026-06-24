import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function HaberLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumb maxWidthClass="max-w-4xl" />
      {children}
    </>
  );
}

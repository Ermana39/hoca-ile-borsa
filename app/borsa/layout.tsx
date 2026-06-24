import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function BorsaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumb maxWidthClass="max-w-7xl" />
      {children}
    </>
  );
}

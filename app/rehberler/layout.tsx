import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * Rehber sayfalarında görsel breadcrumb zaten her sayfada mevcut; burada yalnızca
 * BreadcrumbList JSON-LD şeması route'a göre dinamik olarak eklenir.
 */
export default function RehberlerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumb schemaOnly />
      {children}
    </>
  );
}

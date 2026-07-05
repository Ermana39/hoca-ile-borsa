import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import SonGuncelleme from "@/components/SonGuncelleme";
import pageUpdates from "@/lib/page-updates.generated.json";

// Yalnızca rehber route'larının güncelleme tarihleri client'a taşınır
// (üretilen JSON'un tamamı değil). E-E-A-T: görünür güncellik damgası.
const rehberTarihleri: Record<string, string> = Object.fromEntries(
  (pageUpdates.pages as { route: string; updatedAt: string }[])
    .filter((p) => p.route.startsWith("/rehberler/"))
    .map((p) => [p.route, p.updatedAt])
);

/**
 * Rehber sayfalarında görsel breadcrumb zaten her sayfada mevcut; burada yalnızca
 * BreadcrumbList JSON-LD şeması route'a göre dinamik olarak eklenir.
 */
export default function RehberlerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumb schemaOnly />
      <SonGuncelleme tarihler={rehberTarihleri} />
      {children}
    </>
  );
}

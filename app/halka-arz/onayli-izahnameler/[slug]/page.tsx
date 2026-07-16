import fs from "node:fs";
import path from "node:path";
import { getOnayliIzahnameListesi } from "@/lib/halka-arz";

function statikOnayliSlugVar(slug: string): boolean {
  return fs.existsSync(
    path.join(
      process.cwd(),
      "app",
      "halka-arz",
      "onayli-izahnameler",
      slug,
      "page.tsx"
    )
  );
}

export function generateStaticParams() {
  return getOnayliIzahnameListesi()
    .filter((item) => !statikOnayliSlugVar(item.klasor))
    .map((item) => ({ slug: item.klasor }));
}

export { generateMetadata } from "../OnayliIzahnameDetay";
export { default } from "../OnayliIzahnameDetay";

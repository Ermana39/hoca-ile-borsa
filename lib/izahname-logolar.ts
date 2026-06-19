// İzahname (halka arz) logoları — scripts/generate-izahname-logolar.mjs ile
// üretilir. Logosu olmayan şirket için undefined döner; çağıran taraf şirket
// adının baş harflerinden oluşan avatar'a (SirketLogo) düşer.
import logolar from "@/data/izahname-logolar.generated.json";

const harita = logolar as Record<string, string>;

// Verilen slug için base64 logo data URI'si (yoksa undefined).
export function getIzahnameLogo(slug: string): string | undefined {
  if (!slug) return undefined;
  return harita[slug];
}

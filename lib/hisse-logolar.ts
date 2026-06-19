// Hisse logoları, scripts/generate-hisse-logolar.mjs ile şirket domaininden
// indirilip base64 data URI olarak data/hisse-logolar.generated.json'a yazılır.
// Logolar çalışma anında dış istek YAPMADAN (kenar isteği değil) sayfanın veri
// yüküne gömülür. Logosu olmayan hisseler için undefined döner; çağıran taraf
// mevcut kod kutusuna düşer.
import logolar from "@/data/hisse-logolar.generated.json";

const harita = logolar as Record<string, string>;

// Verilen hisse kodu için base64 logo data URI'si (yoksa undefined).
export function getHisseLogo(kod: string): string | undefined {
  if (!kod) return undefined;
  return harita[kod.toUpperCase()];
}

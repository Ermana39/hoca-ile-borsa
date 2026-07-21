import { getOnayliIzahnameListesi } from "@/lib/halka-arz";
import { hisseVarMi } from "@/lib/hisseler";

export type HisseIcerikHedefi = {
  href: string;
  etiket: string;
  baslik: string;
  tur: "onayli-izahname" | "hisse-kunye";
};

const onayliIzahnameYollari = new Map(
  getOnayliIzahnameListesi().flatMap((item) =>
    item.kod
      ? [
          [
            item.kod.toLocaleUpperCase("tr-TR"),
            `/halka-arz/onayli-izahnameler/${item.klasor}`,
          ] as const,
        ]
      : []
  )
);

export function getHisseIcerikHedefi(
  sembol: string
): HisseIcerikHedefi | undefined {
  const kod = sembol.trim().toLocaleUpperCase("tr-TR");
  if (!kod) return undefined;

  const onayliIzahnameYolu = onayliIzahnameYollari.get(kod);
  if (onayliIzahnameYolu) {
    return {
      href: onayliIzahnameYolu,
      etiket: `${kod} onaylı izahname sayfasını aç`,
      baslik: "Onaylı izahnameyi aç",
      tur: "onayli-izahname",
    };
  }

  if (hisseVarMi(kod)) {
    return {
      href: `/hisse/${kod.toLocaleLowerCase("tr-TR")}`,
      etiket: `${kod} hisse künye sayfasını aç`,
      baslik: "Hisse künye sayfasını aç",
      tur: "hisse-kunye",
    };
  }

  return undefined;
}

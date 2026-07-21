import { getHisseKarsilastirmaVeriSeti } from "@/lib/hisse-karsilastirma";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getHisseKarsilastirmaVeriSeti(), {
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  });
}

import { requireVerifiedMemberFromRequest } from "@/lib/member-auth";
import { jsonResponse } from "@/lib/http-api";
import { getPortfolioMarketPrices } from "@/lib/portfolio-market-prices";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    await requireVerifiedMemberFromRequest(request);
    const result = await getPortfolioMarketPrices();
    return jsonResponse({ ok: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Piyasa fiyatları alınamadı.";
    const status =
      error && typeof error === "object" && "status" in error && typeof (error as { status?: unknown }).status === "number"
        ? (error as { status: number }).status
        : 500;
    return jsonResponse({ ok: false, message }, { status });
  }
}

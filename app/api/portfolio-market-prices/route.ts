import { portfolioMarketPricesHandler } from "@/api/portfolio";

export const runtime = "nodejs";

export async function GET(request: Request) {
  return portfolioMarketPricesHandler.fetch(request);
}

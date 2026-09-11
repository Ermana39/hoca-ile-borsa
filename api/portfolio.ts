import {
  createPortfolioHolding,
  deletePortfolioHolding,
  listPortfolioHoldings,
  updatePortfolioHolding,
} from "../lib/member-portfolio.js";
import { MemberAuthError, requireVerifiedMemberFromRequest } from "../lib/member-auth.js";
import { jsonResponse } from "../lib/http-api.js";
import { getPortfolioMarketPrices } from "../lib/portfolio-market-prices.js";
import { readJsonObject, RequestBodyError } from "../lib/request-body.js";
import { isSameOriginRequest } from "../lib/request-security.js";

async function withErrors(work: () => Promise<Response>) {
  try {
    return await work();
  } catch (error) {
    const status =
      error instanceof MemberAuthError || error instanceof RequestBodyError
        ? error.status
        : 500;
    const message =
      error instanceof MemberAuthError || error instanceof RequestBodyError
        ? error.message
        : "Portföy işlemi tamamlanamadı.";
    return jsonResponse({ ok: false, message }, { status });
  }
}

function requireSameOrigin(request: Request) {
  if (!isSameOriginRequest(request)) {
    throw new MemberAuthError("Geçersiz istek kaynağı.", 403);
  }
}

function holdingInput(body: Record<string, unknown>) {
  return {
    assetType: body.assetType,
    assetCode: body.assetCode,
    fundCode: body.fundCode,
    quantity: body.quantity,
    buyPrice: body.buyPrice,
    buyDate: body.buyDate,
  };
}

export const portfolioHandler = {
  async fetch(request: Request) {
    return withErrors(async () => {
      const member = await requireVerifiedMemberFromRequest(request);

      if (request.method === "GET") {
        const holdings = await listPortfolioHoldings(member.user_id);
        return jsonResponse(
          { ok: true, holdings },
          { headers: { "Cache-Control": "private, no-store" } },
        );
      }

      requireSameOrigin(request);

      if (request.method === "POST") {
        const body = await readJsonObject(request, 8 * 1024);
        const holding = await createPortfolioHolding(member.user_id, holdingInput(body));
        return jsonResponse(
          { ok: true, holding, message: "Varlık portföyünüze eklendi." },
          { status: 201, headers: { "Cache-Control": "private, no-store" } },
        );
      }

      if (request.method === "PUT") {
        const body = await readJsonObject(request, 8 * 1024);
        if (typeof body.holdingId !== "string") {
          throw new RequestBodyError("Portföy kaydı geçersiz.");
        }
        const holding = await updatePortfolioHolding(member.user_id, body.holdingId, holdingInput(body));
        return jsonResponse(
          { ok: true, holding, message: "Varlık bilgileri güncellendi." },
          { headers: { "Cache-Control": "private, no-store" } },
        );
      }

      if (request.method === "DELETE") {
        const body = await readJsonObject(request, 4 * 1024);
        if (typeof body.holdingId !== "string") {
          throw new RequestBodyError("Portföy kaydı geçersiz.");
        }
        await deletePortfolioHolding(member.user_id, body.holdingId);
        return jsonResponse(
          { ok: true, message: "Varlık portföyünüzden kaldırıldı." },
          { headers: { "Cache-Control": "private, no-store" } },
        );
      }

      return jsonResponse(
        { ok: false, message: "Desteklenmeyen istek yöntemi." },
        { status: 405, headers: { Allow: "GET, POST, PUT, DELETE" } },
      );
    });
  },
};

export const portfolioMarketPricesHandler = {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse(
        { ok: false, message: "Desteklenmeyen istek yöntemi." },
        { status: 405, headers: { Allow: "GET" } },
      );
    }

    try {
      await requireVerifiedMemberFromRequest(request);
      const result = await getPortfolioMarketPrices();
      return jsonResponse(
        { ok: true, ...result },
        { headers: { "Cache-Control": "private, no-store" } },
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Piyasa fiyatları alınamadı.";
      const status =
        error && typeof error === "object" && "status" in error && typeof (error as { status?: unknown }).status === "number"
          ? (error as { status: number }).status
          : 500;
      return jsonResponse({ ok: false, message }, { status });
    }
  },
};

const portfolioRouter = {
  async fetch(request: Request) {
    const action = new URL(request.url).searchParams.get("hib_handler");
    return action === "market-prices"
      ? portfolioMarketPricesHandler.fetch(request)
      : portfolioHandler.fetch(request);
  },
};

export default portfolioRouter;

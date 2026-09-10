import {
  createPortfolioHolding,
  deletePortfolioHolding,
  listPortfolioHoldings,
  updatePortfolioHolding,
} from "@/lib/member-portfolio";
import { MemberAuthError, requireVerifiedMemberFromRequest } from "@/lib/member-auth";
import { jsonResponse } from "@/lib/http-api";
import { readJsonObject, RequestBodyError } from "@/lib/request-body";
import { isSameOriginRequest } from "@/lib/request-security";

export const runtime = "nodejs";

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

export async function GET(request: Request) {
  return withErrors(async () => {
    const member = await requireVerifiedMemberFromRequest(request);
    const holdings = await listPortfolioHoldings(member.user_id);
    return jsonResponse({ ok: true, holdings });
  });
}

export async function POST(request: Request) {
  return withErrors(async () => {
    requireSameOrigin(request);
    const member = await requireVerifiedMemberFromRequest(request);
    const body = await readJsonObject(request, 8 * 1024);
    const holding = await createPortfolioHolding(member.user_id, holdingInput(body));
    return jsonResponse({ ok: true, holding, message: "Varlık portföyünüze eklendi." }, { status: 201 });
  });
}

export async function PUT(request: Request) {
  return withErrors(async () => {
    requireSameOrigin(request);
    const member = await requireVerifiedMemberFromRequest(request);
    const body = await readJsonObject(request, 8 * 1024);
    if (typeof body.holdingId !== "string") throw new RequestBodyError("Portföy kaydı geçersiz.");
    const holding = await updatePortfolioHolding(member.user_id, body.holdingId, holdingInput(body));
    return jsonResponse({ ok: true, holding, message: "Varlık bilgileri güncellendi." });
  });
}

export async function DELETE(request: Request) {
  return withErrors(async () => {
    requireSameOrigin(request);
    const member = await requireVerifiedMemberFromRequest(request);
    const body = await readJsonObject(request, 4 * 1024);
    if (typeof body.holdingId !== "string") throw new RequestBodyError("Portföy kaydı geçersiz.");
    await deletePortfolioHolding(member.user_id, body.holdingId);
    return jsonResponse({ ok: true, message: "Varlık portföyünüzden kaldırıldı." });
  });
}

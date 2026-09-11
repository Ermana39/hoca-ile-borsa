import { authActionHandler, isMemberAuthAction } from "@/lib/member-auth-api";

export const runtime = "nodejs";

async function handle(
  request: Request,
  context: { params: Promise<{ action: string }> },
) {
  const { action } = await context.params;
  if (!isMemberAuthAction(action)) {
    return Response.json({ ok: false, message: "İşlem bulunamadı." }, { status: 404 });
  }
  return authActionHandler(action).fetch(request);
}

export const GET = handle;
export const POST = handle;

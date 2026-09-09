import { authActionHandler } from "@/lib/member-auth-api";

export const runtime = "nodejs";

const supportedActions = new Set([
  "register",
  "login",
  "logout",
  "session",
  "forgot-password",
  "reset-password",
  "verify-email",
  "resend-verification",
  "delete-account",
]);

async function handle(
  request: Request,
  context: { params: Promise<{ action: string }> },
) {
  const { action } = await context.params;
  if (!supportedActions.has(action)) {
    return Response.json({ ok: false, message: "İşlem bulunamadı." }, { status: 404 });
  }
  return authActionHandler(
    action as
      | "register"
      | "login"
      | "logout"
      | "session"
      | "forgot-password"
      | "reset-password"
      | "verify-email"
      | "resend-verification"
      | "delete-account",
  ).fetch(request);
}

export const GET = handle;
export const POST = handle;

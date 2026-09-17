import {
  authActionHandler,
  isMemberAuthAction,
} from "#lib/member-auth-api";
import { jsonResponse } from "#lib/http-api";

const authRouter = {
  async fetch(request: Request) {
    const action = new URL(request.url).searchParams.get("hib_handler") || "";
    if (!isMemberAuthAction(action)) {
      return jsonResponse(
        { ok: false, message: "Üyelik işlemi bulunamadı." },
        { status: 404 },
      );
    }
    return authActionHandler(action).fetch(request);
  },
};

export default authRouter;

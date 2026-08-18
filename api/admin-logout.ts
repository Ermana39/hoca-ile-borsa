import { cookieValue, jsonResponse } from "../lib/http-api";
import { isSameOriginRequest } from "../lib/request-security";

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false }, { status: 405 });
    }
    if (!isSameOriginRequest(request)) {
      return jsonResponse({ ok: false }, { status: 403 });
    }

    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      cookieValue("hib_admin_token", "", {
        maxAge: 0,
        secure: process.env.NODE_ENV === "production",
      }),
    );
    return jsonResponse({ ok: true }, { headers });
  },
};

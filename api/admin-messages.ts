import { getCookie, jsonResponse } from "../lib/http-api";
import { isValidAdminToken } from "../lib/admin-auth";

export default {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    const token = getCookie(request, "hib_admin_token");
    if (!isValidAdminToken(token)) {
      return jsonResponse({ ok: false, messages: [] }, { status: 401 });
    }

    // Iletisim formu e-posta ile teslim ediliyor; kalici mesaj veritabani yok.
    return jsonResponse(
      { ok: true, messages: [] },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  },
};

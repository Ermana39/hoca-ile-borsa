import { getCookie, jsonResponse } from "../lib/http-api";
import { isValidAdminToken } from "../lib/admin-auth";
import { getMemberCounts } from "../lib/member-auth";

const adminMessagesHandler = {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    const token = getCookie(request, "hib_admin_token");
    if (!isValidAdminToken(token)) {
      return jsonResponse({ ok: false, messages: [] }, { status: 401 });
    }

    let memberStats: { active: number; pending: number } | null = null;
    try {
      memberStats = await getMemberCounts();
    } catch {
      // Yönetim ekranı Redis geçici olarak erişilemese de mesaj bölümünü açabilsin.
    }

    // Iletisim formu e-posta ile teslim ediliyor; kalici mesaj veritabani yok.
    return jsonResponse(
      { ok: true, messages: [], memberStats },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  },
};

export default adminMessagesHandler;

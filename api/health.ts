import { jsonResponse } from "../lib/http-api";

export default {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    return jsonResponse(
      {
        ok: true,
        service: "hoca-ile-borsa",
        status: "healthy",
        timestamp: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  },
};

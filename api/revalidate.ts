import crypto from "node:crypto";
import { jsonResponse } from "../lib/http-api";

function safeEqual(a: string, b: string) {
  const first = Buffer.from(a);
  const second = Buffer.from(b);
  return first.length === second.length && crypto.timingSafeEqual(first, second);
}

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    const secret = request.headers.get("x-secret") || "";
    const expected = process.env.REVALIDATE_SECRET || "";
    if (!expected || !safeEqual(secret, expected)) {
      return jsonResponse({ message: "Yetkisiz" }, { status: 401 });
    }

    // Icerik dosyalari deploy oncesinde yenilenip tamamen statik yayinlanir.
    // ISR olmadigi icin burada pahali toplu cache invalidasyonu yapilmaz.
    return jsonResponse({
      ok: true,
      revalidated: false,
      deploymentRequired: true,
    });
  },
};

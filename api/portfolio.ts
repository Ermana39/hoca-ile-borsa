import { jsonResponse } from "../lib/http-api.js";

const removed = {
  async fetch(_request: Request) {
    void _request;
    return jsonResponse({ ok: false, message: "Üyelik ve portföy hizmeti kaldırıldı." }, { status: 410 });
  },
};
export const portfolioHandler = removed;
export const portfolioMarketPricesHandler = removed;
export default removed;

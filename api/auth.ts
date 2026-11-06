import { jsonResponse } from "../lib/http-api.js";

const removedAuth = {
  async fetch() {
    return jsonResponse({ ok: false, message: "Üyelik hizmeti kaldırıldı." }, { status: 410 });
  },
};

export default removedAuth;

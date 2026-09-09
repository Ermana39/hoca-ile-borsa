import { adminLogoutHandler } from "@/api/admin";

export async function POST(request: Request) {
  return adminLogoutHandler.fetch(request);
}

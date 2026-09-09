import { adminLoginHandler } from "@/api/admin";

export async function POST(request: Request) {
  return adminLoginHandler.fetch(request);
}

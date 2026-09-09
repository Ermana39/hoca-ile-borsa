import { adminMessagesHandler } from "@/api/admin";

export async function GET(request: Request) {
  return adminMessagesHandler.fetch(request);
}

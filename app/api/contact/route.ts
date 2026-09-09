import { contactHandler } from "@/api/misc";

export async function POST(request: Request) {
  return contactHandler.fetch(request);
}

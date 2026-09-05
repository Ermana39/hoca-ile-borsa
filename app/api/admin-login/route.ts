import handler from "@/api/admin-login";

export async function POST(request: Request) {
  return handler.fetch(request);
}

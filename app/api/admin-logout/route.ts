import handler from "@/api/admin-logout";

export async function POST(request: Request) {
  return handler.fetch(request);
}

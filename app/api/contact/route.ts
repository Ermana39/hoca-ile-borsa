import handler from "../../../api/contact";

export async function POST(request: Request) {
  return handler.fetch(request);
}

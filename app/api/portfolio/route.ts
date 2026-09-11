import { portfolioHandler } from "@/api/portfolio";

export const runtime = "nodejs";

export async function GET(request: Request) {
  return portfolioHandler.fetch(request);
}

export async function POST(request: Request) {
  return portfolioHandler.fetch(request);
}

export async function PUT(request: Request) {
  return portfolioHandler.fetch(request);
}

export async function DELETE(request: Request) {
  return portfolioHandler.fetch(request);
}

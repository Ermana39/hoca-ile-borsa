import { NextResponse } from "next/server";
import { newsItems } from "@/app/data/news";

export async function GET() {
  const sortedNews = [...newsItems].sort((a, b) => a.id - b.id);

  return NextResponse.json(sortedNews, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
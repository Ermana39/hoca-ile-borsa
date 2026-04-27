import { NextResponse } from "next/server";
import { newsItems } from "@/app/data/news";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const sortedNews = [...newsItems].sort((a, b) => a.id - b.id);

  return NextResponse.json(sortedNews, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
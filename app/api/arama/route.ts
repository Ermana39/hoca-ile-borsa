import { getSiteSearchPayload } from "@/lib/site-search-index";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getSiteSearchPayload(), {
    headers: {
      "Cache-Control":
        "public, max-age=300, s-maxage=31536000, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

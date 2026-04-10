import { NextRequest, NextResponse } from "next/server";

const hiddenAdminPath = process.env.ADMIN_STATS_PATH?.trim() || "kontrol-paneli-4827";
const ADMIN_IDLE_TIMEOUT_MS = 1000 * 60 * 30;

function buildNoIndexHeaders(response: NextResponse) {
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  return response;
}

function clearAdminCookies(response: NextResponse) {
  response.cookies.set("hib_admin_token", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set("hib_admin_seen", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/yonetim")) {
    return new NextResponse("404", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
      },
    });
  }

  if (pathname === `/${hiddenAdminPath}` || pathname.startsWith(`/${hiddenAdminPath}/`)) {
    const token = request.cookies.get("hib_admin_token")?.value;
    const seen = request.cookies.get("hib_admin_seen")?.value;
    const now = Date.now();

    if (token && seen) {
      const seenMs = Number(seen);

      if (!Number.isFinite(seenMs) || now - seenMs > ADMIN_IDLE_TIMEOUT_MS) {
        const response = NextResponse.redirect(new URL(`/${hiddenAdminPath}`, request.url));
        buildNoIndexHeaders(response);
        clearAdminCookies(response);
        return response;
      }
    }

    const response = NextResponse.next();
    buildNoIndexHeaders(response);

    if (token) {
      response.cookies.set("hib_admin_seen", String(now), {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 30,
      });
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/yonetim/:path*", "/:path*"],
};
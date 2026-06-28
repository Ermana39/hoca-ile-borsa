import crypto from "crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { newsItems } from "@/app/data/news";
import { HABER_KATEGORILERI } from "@/lib/haber-kategorileri";

// Gizli anahtarları zamanlama saldırılarına karşı sabit sürede karşılaştırır.
function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// Belirli bir veri kategorisini veya tüm siteyi yeniden oluşturur.
// Kullanım: POST /api/revalidate
//   Header: x-secret: <REVALIDATE_SECRET>
//   Body (isteğe bağlı): { "scope": "borsa" | "fonlar" | "faiz" | "haberler" | "all" }
//   Scope belirtilmezse "all" varsayılır.

const BORSA_PATHS = [
  "/borsa",
  "/borsa/dip-zirve-analizi",
  "/borsa/geri-alim-programlari",
  "/borsa/tedbirli-hisseler",
  "/borsa/yeni-is-anlasmalari",
  "/borsa/gosterge-taramalari",
  "/borsa/gosterge-taramalari/macd-al",
  "/borsa/gosterge-taramalari/macd-sat",
  "/borsa/gosterge-taramalari/rsi30-alti",
  "/borsa/gosterge-taramalari/rsi70-ustu",
  "/borsa/gosterge-taramalari/yukselis-hacim",
  "/borsa/gosterge-taramalari/yukselis-trendinde-olanlar",
  "/borsa/gosterge-taramalari/dusus-trendinde-olanlar",
  "/borsa/gosterge-taramalari/guclu-trend-momentum",
  "/borsa/oran-analizi",
  "/borsa/hacim-artisi-analizi",
];

const FON_PATHS = [
  "/fonlar",
  "/fonlar/getiri",
  "/fonlar/tarihsel-veriler",
  "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
];

const FAIZ_PATHS = [
  "/mevduat-kredi-faizleri",
  "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
  "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
  "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
  "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
];

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-secret") || "";
  const expected = process.env.REVALIDATE_SECRET || "";

  if (!expected || !safeEqual(secret, expected)) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  let scope = "all";
  try {
    const body = await request.json() as { scope?: string };
    if (body?.scope) scope = body.scope;
  } catch {
    // body yoksa veya JSON değilse "all" kullan
  }

  const revalidated: string[] = [];

  if (scope === "borsa" || scope === "all") {
    for (const p of BORSA_PATHS) {
      revalidatePath(p);
      revalidated.push(p);
    }
  }

  if (scope === "fonlar" || scope === "all") {
    for (const p of FON_PATHS) {
      revalidatePath(p);
      revalidated.push(p);
    }
    revalidateTag("fon-getiri-json-data", "max");
    revalidateTag("fon-tarihsel-json-data", "max");

  }

  if (scope === "faiz" || scope === "all") {
    for (const p of FAIZ_PATHS) {
      revalidatePath(p);
      revalidated.push(p);
    }
    revalidateTag("faiz-takip-json-data", "max");
  }

  if (scope === "haberler" || scope === "all") {
    revalidateTag("haberler", "max");
    const haberPaths = [
      "/",
      "/haberler",
      "/news-sitemap.xml",
      ...newsItems.map((item) => item.href),
      ...HABER_KATEGORILERI.map(
        (kategori) => `/haberler/kategori/${kategori.slug}`
      ),
    ];

    for (const p of haberPaths) {
      revalidatePath(p);
      revalidated.push(p);
    }
  }

  return NextResponse.json({ revalidated: true, scope, paths: revalidated });
}

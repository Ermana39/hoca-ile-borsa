import { NextResponse } from "next/server";
import { kv } from "@/lib/kv";

const STATS_KEY = "stats:pageviews:v2";

export async function POST() {
  try {
    if (!kv) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    await kv.del(STATS_KEY);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
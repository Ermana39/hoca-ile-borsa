import { NextResponse } from "next/server";
import { sonGuncellemeler } from "@/lib/son-guncellemeler";

function parseUpdatedAt(value: string) {
  const match = value.match(
    /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/
  );

  if (!match) return 0;

  const [, day, month, year, hour, minute] = match;

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  ).getTime();
}

export async function GET() {
  const sorted = [...sonGuncellemeler]
    .sort((a, b) => parseUpdatedAt(b.updatedAt) - parseUpdatedAt(a.updatedAt))
    .slice(0, 10)
    .map((item) => {
      const [, time = ""] = item.updatedAt.split(" ");
      return {
        title: item.title,
        href: item.href,
        time,
      };
    });

  return NextResponse.json(sorted);
}
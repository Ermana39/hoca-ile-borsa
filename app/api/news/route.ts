import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

function parseField(source: string, fieldName: string) {
  const regex = new RegExp(`${fieldName}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`);
  const match = source.match(regex);
  return match ? match[1].trim() : "";
}

export async function GET() {
  try {
    const haberlerDir = path.join(process.cwd(), "app", "haberler");

    if (!fs.existsSync(haberlerDir)) {
      return NextResponse.json([]);
    }

    const klasorler = fs
      .readdirSync(haberlerDir, { withFileTypes: true })
      .filter((item) => item.isDirectory() && /^haber-\d+$/.test(item.name))
      .map((item) => item.name)
      .sort((a, b) => {
        const aNo = Number(a.replace("haber-", ""));
        const bNo = Number(b.replace("haber-", ""));
        return bNo - aNo;
      });

    const newsItems: NewsItem[] = [];

    for (const klasor of klasorler) {
      const pagePath = path.join(haberlerDir, klasor, "page.tsx");

      if (!fs.existsSync(pagePath)) continue;

      const source = fs.readFileSync(pagePath, "utf8");

      const title =
        parseField(source, "title") ||
        parseField(source, "haberBasligi") ||
        parseField(source, "heading") ||
        klasor.replace("-", " ");

      const image =
        parseField(source, "image") ||
        parseField(source, "kapakGorseli") ||
        `/${klasor}v.png`;

      const alt =
        parseField(source, "alt") ||
        `${title} haber görseli`;

      newsItems.push({
        id: Number(klasor.replace("haber-", "")),
        title,
        href: `/haberler/${klasor}`,
        image,
        alt,
      });
    }

    return NextResponse.json(newsItems);
  } catch (error) {
    console.error("NEWS_API_ERROR:", error);
    return NextResponse.json([]);
  }
}
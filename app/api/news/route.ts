import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

function getTitleFromFileContent(content: string) {
  const metadataTitleMatch = content.match(/title\s*:\s*"([^"]+)"/i);
  if (metadataTitleMatch?.[1]) {
    return metadataTitleMatch[1].trim();
  }

  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match?.[1]) {
    return h1Match[1].replace(/<[^>]+>/g, "").trim();
  }

  return "";
}

function getIdFromFolderName(folderName: string) {
  const match = folderName.match(/(\d+)$/);
  return match ? Number(match[1]) : 0;
}

export async function GET() {
  try {
    const haberDir = path.join(process.cwd(), "app", "haber");

    if (!fs.existsSync(haberDir)) {
      return NextResponse.json([]);
    }

    const entries = fs.readdirSync(haberDir, { withFileTypes: true });

    const newsItems: NewsItem[] = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const folderName = entry.name;
        const id = getIdFromFolderName(folderName);

        if (!id) {
          return null;
        }

        const pageFilePath = path.join(haberDir, folderName, "page.tsx");

        if (!fs.existsSync(pageFilePath)) {
          return null;
        }

        const fileContent = fs.readFileSync(pageFilePath, "utf-8");
        const title = getTitleFromFileContent(fileContent);

        if (!title) {
          return null;
        }

        return {
          id,
          title,
          href: `/haber/${folderName}`,
          image: `/haber${id}.png`,
          alt: title,
        };
      })
      .filter((item): item is NewsItem => item !== null)
      .sort((a, b) => a.id - b.id);

    return NextResponse.json(newsItems, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error) {
    console.error("NEWS_API_ERROR:", error);

    return NextResponse.json([], {
      status: 500,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  }
}
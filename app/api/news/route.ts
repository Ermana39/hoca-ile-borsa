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
  const metadataTitleMatch = content.match(/title:\s*"([^"]+)"/);
  if (metadataTitleMatch?.[1]) {
    return metadataTitleMatch[1].trim();
  }

  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h1Match?.[1]) {
    return h1Match[1].replace(/<[^>]+>/g, "").trim();
  }

  return "";
}

function getNumericIdFromFolderName(folderName: string) {
  const match = folderName.match(/^haber(\d+)$/i);
  return match ? Number(match[1]) : 0;
}

export async function GET() {
  try {
    const appDir = path.join(process.cwd(), "app");
    const entries = fs.readdirSync(appDir, { withFileTypes: true });

    const newsItems: NewsItem[] = entries
      .filter((entry) => entry.isDirectory() && /^haber\d+$/i.test(entry.name))
      .map((entry) => {
        const folderName = entry.name;
        const id = getNumericIdFromFolderName(folderName);
        const pageFilePath = path.join(appDir, folderName, "page.tsx");

        if (!fs.existsSync(pageFilePath) || id <= 0) {
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
          href: `/${folderName}`,
          image: `/${folderName}.png`,
          alt: title,
        };
      })
      .filter((item): item is NewsItem => item !== null)
      .sort((a, b) => b.id - a.id);

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
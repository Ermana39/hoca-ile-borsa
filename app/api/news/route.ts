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

function getIdFromFolderName(folderName: string) {
  const match = folderName.match(/^haber-(\d+)$/i);
  return match ? Number(match[1]) : 0;
}

function cleanText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function getTitleFromFileContent(content: string) {
  const doubleQuoteMatch = content.match(/title\s*:\s*"([^"]+)"/i);
  if (doubleQuoteMatch?.[1]) {
    return cleanText(doubleQuoteMatch[1]);
  }

  const singleQuoteMatch = content.match(/title\s*:\s*'([^']+)'/i);
  if (singleQuoteMatch?.[1]) {
    return cleanText(singleQuoteMatch[1]);
  }

  const backtickMatch = content.match(/title\s*:\s*`([^`]+)`/i);
  if (backtickMatch?.[1]) {
    return cleanText(backtickMatch[1]);
  }

  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match?.[1]) {
    return cleanText(h1Match[1].replace(/<[^>]+>/g, ""));
  }

  return "";
}

function getPageFilePath(folderPath: string) {
  const candidates = ["page.tsx", "page.jsx", "page.ts", "page.js"];

  for (const fileName of candidates) {
    const fullPath = path.join(folderPath, fileName);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}

export async function GET() {
  try {
    const haberDir = path.join(process.cwd(), "app", "haber");

    if (!fs.existsSync(haberDir)) {
      return NextResponse.json([], {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      });
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

        const folderPath = path.join(haberDir, folderName);
        const pageFilePath = getPageFilePath(folderPath);

        if (!pageFilePath) {
          return null;
        }

        let title = `Haber ${id}`;

        try {
          const fileContent = fs.readFileSync(pageFilePath, "utf-8");
          const extractedTitle = getTitleFromFileContent(fileContent);
          if (extractedTitle) {
            title = extractedTitle;
          }
        } catch {
          title = `Haber ${id}`;
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
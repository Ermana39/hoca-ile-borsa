import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type UpdateItem = {
  title: string;
  href: string;
  time: string;
  updatedAt: number;
};

function klasorAdiniBasligaCevir(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toLocaleUpperCase("tr-TR"));
}

function titleTemizle(title: string) {
  return title
    .replace(/\|\s*Hoca İle Borsa/gi, "")
    .replace(/\|\s*Hoca ile Borsa/gi, "")
    .trim();
}

function pageIcerigindenBaslikBul(content: string, folderName: string) {
  const metadataTitleMatch =
    content.match(/title:\s*"([^"]+)"/) ||
    content.match(/title:\s*'([^']+)'/);

  if (metadataTitleMatch?.[1]) {
    return titleTemizle(metadataTitleMatch[1]);
  }

  const h1Match = content.match(/<h1[^>]*>\s*([\s\S]*?)\s*<\/h1>/);

  if (h1Match?.[1]) {
    return h1Match[1]
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  return klasorAdiniBasligaCevir(folderName);
}

function saatFormatla(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function sayfaYoluHrefeCevir(relativePath: string) {
  const temiz = relativePath.replace(/\\/g, "/");
  const parcalar = temiz.split("/").filter(Boolean);

  if (parcalar[parcalar.length - 1] === "page.tsx") {
    parcalar.pop();
  }

  if (parcalar[0] === "app") {
    parcalar.shift();
  }

  return "/" + parcalar.join("/");
}

function pageDosyalariniTopla(dirPath: string, list: string[] = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === "api" ||
        entry.name === "components" ||
        entry.name.startsWith("(") ||
        entry.name.startsWith("_")
      ) {
        continue;
      }

      pageDosyalariniTopla(fullPath, list);
      continue;
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      list.push(fullPath);
    }
  }

  return list;
}

export async function GET() {
  try {
    const appPath = path.join(process.cwd(), "app");

    if (!fs.existsSync(appPath)) {
      return NextResponse.json([]);
    }

    const pageFiles = pageDosyalariniTopla(appPath);

    const updates: UpdateItem[] = pageFiles
      .map((filePath) => {
        try {
          const relativePath = path.relative(process.cwd(), filePath);
          const href = sayfaYoluHrefeCevir(relativePath);

          if (href === "/") return null;

          const stats = fs.statSync(filePath);
          const content = fs.readFileSync(filePath, "utf8");
          const folderName = path.basename(path.dirname(filePath));

          return {
            title: pageIcerigindenBaslikBul(content, folderName),
            href,
            time: saatFormatla(stats.mtime),
            updatedAt: stats.mtime.getTime(),
          };
        } catch {
          return null;
        }
      })
      .filter((item): item is UpdateItem => item !== null)
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .slice(0, 30);

    return NextResponse.json(
      updates.map((item) => ({
        title: item.title,
        href: item.href,
        time: item.time,
      }))
    );
  } catch {
    return NextResponse.json([]);
  }
}
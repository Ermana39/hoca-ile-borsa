import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

type UpdateItem = {
  title: string;
  href: string;
  filePath: string;
  updatedAt: number;
  time: string;
};

const takipEdilenSayfalar = [
  {
    title: "Günlük Borsa Özeti",
    href: "/borsa/gunluk-borsa-ozeti",
    filePath: path.join(process.cwd(), "app", "borsa", "gunluk-borsa-ozeti", "page.tsx"),
  },
  {
    title: "Pivot Analizi",
    href: "/borsa/pivot-analizi",
    filePath: path.join(process.cwd(), "app", "borsa", "pivot-analizi", "page.tsx"),
  },
  {
    title: "Grafik Analiz",
    href: "/borsa/grafik-analiz",
    filePath: path.join(process.cwd(), "app", "borsa", "grafik-analiz", "page.tsx"),
  },
  {
    title: "RSI 30 Altı",
    href: "/borsa/gosterge-taramalari/rsi30-alti",
    filePath: path.join(
      process.cwd(),
      "app",
      "borsa",
      "gosterge-taramalari",
      "rsi30-alti",
      "page.tsx"
    ),
  },
  {
    title: "RSI 70 Üstü",
    href: "/borsa/gosterge-taramalari/rsi70-ustu",
    filePath: path.join(
      process.cwd(),
      "app",
      "borsa",
      "gosterge-taramalari",
      "rsi70-ustu",
      "page.tsx"
    ),
  },
  {
    title: "Yükseliş Trendinde Olanlar",
    href: "/borsa/gosterge-taramalari/yukselis-trendinde-olanlar",
    filePath: path.join(
      process.cwd(),
      "app",
      "borsa",
      "gosterge-taramalari",
      "yukselis-trendinde-olanlar",
      "page.tsx"
    ),
  },
  {
    title: "Düşüş Trendinde Olanlar",
    href: "/borsa/gosterge-taramalari/dusus-trendinde-olanlar",
    filePath: path.join(
      process.cwd(),
      "app",
      "borsa",
      "gosterge-taramalari",
      "dusus-trendinde-olanlar",
      "page.tsx"
    ),
  },
  {
    title: "Halka Arz",
    href: "/halka-arz",
    filePath: path.join(process.cwd(), "app", "halka-arz", "page.tsx"),
  },
  {
    title: "Fonlar",
    href: "/fonlar",
    filePath: path.join(process.cwd(), "app", "fonlar", "page.tsx"),
  },
  {
    title: "Temettü",
    href: "/temettu",
    filePath: path.join(process.cwd(), "app", "temettu", "page.tsx"),
  },
  {
    title: "Faiz Oranları",
    href: "/mevduat-kredi-faizleri",
    filePath: path.join(process.cwd(), "app", "mevduat-kredi-faizleri", "page.tsx"),
  },
];

function saatFormatla(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export async function GET() {
  try {
    const updates: UpdateItem[] = takipEdilenSayfalar
      .map((item) => {
        try {
          const stats = fs.statSync(item.filePath);
          const updatedAt = stats.mtime.getTime();

          return {
            title: item.title,
            href: item.href,
            filePath: item.filePath,
            updatedAt,
            time: saatFormatla(stats.mtime),
          };
        } catch {
          return null;
        }
      })
      .filter((item): item is UpdateItem => item !== null)
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .slice(0, 10);

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
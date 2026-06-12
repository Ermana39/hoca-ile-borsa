import { newsItems as tumHaberler } from "@/app/data/news";

export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image?: string;
  alt?: string;
  publishedAt?: string;
};

function getIdFromHref(href: string) {
  const match = href.match(/(\d+)(?!.*\d)/);
  return match ? Number(match[1]) : 0;
}

export function normalizeNewsItems(data: unknown): NewsItem[] {
  if (!Array.isArray(data)) return [];

  return data
    .map((item: Partial<NewsItem>) => {
      const href = item.href || "/";
      const id =
        typeof item.id === "number" && item.id > 0
          ? item.id
          : getIdFromHref(href);

      return {
        id,
        title: item.title || "",
        href,
        image:
          item.image && item.image.trim() !== ""
            ? item.image
            : id
              ? `/haber${id}.png`
              : "/placeholder.png",
        alt: item.alt || item.title || "",
        publishedAt: item.publishedAt || "",
      };
    })
    .filter(
      (item: NewsItem) =>
        item.id > 0 && item.title.trim() !== "" && item.href.trim() !== ""
    )
    .sort((a: NewsItem, b: NewsItem) => {
      const aTime = new Date(a.publishedAt || "").getTime();
      const bTime = new Date(b.publishedAt || "").getTime();
      const aValid = !Number.isNaN(aTime);
      const bValid = !Number.isNaN(bTime);
      if (aValid && bValid && bTime !== aTime) return bTime - aTime;
      if (aValid && !bValid) return -1;
      if (!aValid && bValid) return 1;
      return b.id - a.id;
    });
}

export function getAllNews(): NewsItem[] {
  return normalizeNewsItems(tumHaberler);
}

export const ANA_SAYFA_HABER_LIMIT = 12;

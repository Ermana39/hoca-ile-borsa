import { newsItems as tumHaberler } from "@/app/data/news";
import { getGunlukOzetHaberKayitlari } from "@/lib/gunluk-ozet";
import {
  HABER_SAYFA_BOYUTU,
  isHaberKategori,
  type HaberKategori,
} from "@/lib/haber-kategorileri";

export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image?: string;
  alt?: string;
  publishedAt?: string;
  category?: HaberKategori;
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
        category:
          item.category && isHaberKategori(item.category)
            ? item.category
            : undefined,
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
  // Elle girilen haberler + günlük borsa özetleri (otomatik). Böylece her yeni
  // günlük özet, ayrıca bir şey yapmadan haber akışına ve /haberler arşivine
  // tarihe göre doğru sırada düşer. normalizeNewsItems hepsini birlikte sıralar.
  return normalizeNewsItems([...tumHaberler, ...getGunlukOzetHaberKayitlari()]);
}

export const ANA_SAYFA_HABER_LIMIT = 12;

// --- Kategori & sayfalama yardımcıları ---

export function getNewsByCategory(kategori: HaberKategori): NewsItem[] {
  return getAllNews().filter((item) => item.category === kategori);
}

export function getToplamSayfa(toplamHaber: number): number {
  return Math.max(1, Math.ceil(toplamHaber / HABER_SAYFA_BOYUTU));
}

// 1 tabanlı sayfa numarasına göre ilgili haber dilimini döndürür.
export function getSayfaHaberleri(
  haberler: NewsItem[],
  sayfa: number
): NewsItem[] {
  const guvenliSayfa = Math.max(1, Math.floor(sayfa));
  const baslangic = (guvenliSayfa - 1) * HABER_SAYFA_BOYUTU;
  return haberler.slice(baslangic, baslangic + HABER_SAYFA_BOYUTU);
}

// Aynı kategoriden, mevcut haberi hariç tutan en güncel ilgili haberler.
export function getIlgiliHaberler(
  href: string,
  limit = 6
): NewsItem[] {
  const mevcut = getAllNews().find((item) => item.href === href);
  if (!mevcut?.category) return [];

  return getAllNews()
    .filter((item) => item.category === mevcut.category && item.href !== href)
    .slice(0, limit);
}

// Bir haberin etiketli ilgili hisse kodlarını href üzerinden bulur.
export function getHaberIlgiliHisseler(href: string): string[] {
  return tumHaberler.find((item) => item.href === href)?.ilgiliHisseler ?? [];
}

// Bir haberin kategorisini href üzerinden bulur.
export function getHaberKategorisi(href: string): HaberKategori | undefined {
  return getAllNews().find((item) => item.href === href)?.category;
}

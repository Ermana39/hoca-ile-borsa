import type { MetadataRoute } from "next";
import { newsItems } from "@/app/data/news";
import {
  getNewsByCategory,
  getToplamSayfa,
  getAllNews,
} from "@/lib/haberler";
import { HABER_KATEGORILERI } from "@/lib/haber-kategorileri";
import { getSitemapHisseSembolleri } from "@/lib/hisseler";
import { getTumGunlukOzetSluglari } from "@/lib/gunluk-ozet";

const siteUrl = "https://www.hocaileborsa.com";

function createEntry(
  url: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${url}`,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/borsa",
    "/borsa/dikkat-cekenler",
    "/borsa/egitim-videolari",
    "/borsa/formasyonlar",
    "/borsa/geri-alim-programlari",
    "/borsa/gosterge-taramalari",
    "/borsa/grafik-analiz",
    "/borsa/hacim-artisi-analizi",
    "/borsa/yeni-is-anlasmalari",
    "/borsa/pivot-analizi",
    "/borsa/oran-analizi",
    "/borsa/tedbirli-hisseler",

    "/halka-arz",
    "/halka-arz/kazanc-hesapla",
    "/halka-arz/talep-hesapla",
    "/halka-arz/onayli-izahnameler",
    "/halka-arz/taslak-izahnameler",

    "/temettu",
    "/temettu/temettu-egitimi",
    "/temettu/nisan-ayi-temettu-takvimi",
    "/temettu/mayis-ayi-temettu-takvimi",
    "/temettu/haziran-ayi-temettu-takvimi",
    "/temettu/temmuz-ayi-temettu-takvimi",
    "/temettu/agustos-ayi-temettu-takvimi",
    "/temettu/temettu-hesaplama-araci",
    "/temettu/temettu-verimi-hesaplama",

    "/fonlar",
    "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
    "/fonlar/getiri",
    "/fonlar/tarihsel-veriler",

    "/mevduat-kredi-faizleri",
    "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
    "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
    "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
    "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",

    "/yazar/erman-hoca",
    "/haberler",
    "/hisseler",
  ];

  // Hisse kunye sayfalari (data/hisseler/*.json'dan otomatik)
  const hisseRoutes = getSitemapHisseSembolleri().map(
    (sembol) => `/hisse/${sembol.toLowerCase()}`
  );

  const haberRoutes = newsItems.map((item) => item.href);

  // Gunluk borsa ozetlerinin kalici tarihli URL'leri (data/gunluk-ozet/*.json).
  const gunlukOzetRoutes = getTumGunlukOzetSluglari().map(
    (slug) => `/borsa/gunluk-borsa-ozeti/${slug}`
  );

  // Haber arsivi sayfalama route'lari: /haberler/sayfa/2 ... N
  const arsivSayfaRoutes: string[] = [];
  const toplamArsivSayfa = getToplamSayfa(getAllNews().length);
  for (let n = 2; n <= toplamArsivSayfa; n++) {
    arsivSayfaRoutes.push(`/haberler/sayfa/${n}`);
  }

  // Kategori arsiv sayfalari + kategori sayfalama route'lari
  const kategoriRoutes: string[] = [];
  for (const kategori of HABER_KATEGORILERI) {
    kategoriRoutes.push(`/haberler/kategori/${kategori.slug}`);
    const toplamKategoriSayfa = getToplamSayfa(
      getNewsByCategory(kategori.slug).length
    );
    for (let n = 2; n <= toplamKategoriSayfa; n++) {
      kategoriRoutes.push(`/haberler/kategori/${kategori.slug}/sayfa/${n}`);
    }
  }

  const tumUrller = Array.from(
    new Set([
      ...staticRoutes,
      ...hisseRoutes,
      ...haberRoutes,
      ...gunlukOzetRoutes,
      ...arsivSayfaRoutes,
      ...kategoriRoutes,
    ])
  );

  return tumUrller.map((route) => {
    if (route === "/") return createEntry(route, 1, "daily");
    if (
      route === "/borsa" ||
      route === "/halka-arz" ||
      route === "/temettu" ||
      route === "/fonlar" ||
      route === "/mevduat-kredi-faizleri"
    ) {
      return createEntry(route, 0.95, "daily");
    }

    if (route === "/hisseler") {
      return createEntry(route, 0.9, "daily");
    }

    if (route.startsWith("/hisse/")) {
      return createEntry(route, 0.8, "weekly");
    }

    if (route === "/haberler") {
      return createEntry(route, 0.9, "daily");
    }

    if (route.startsWith("/haberler/kategori/")) {
      return createEntry(route, 0.75, "daily");
    }

    if (route.startsWith("/haberler/sayfa/")) {
      return createEntry(route, 0.6, "daily");
    }

    if (route.startsWith("/haber/")) {
      return createEntry(route, 0.9, "monthly");
    }

    if (route.startsWith("/borsa/gunluk-borsa-ozeti/")) {
      return createEntry(route, 0.7, "monthly");
    }

    return createEntry(route, 0.85, "weekly");
  });
}

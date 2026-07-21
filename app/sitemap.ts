import type { MetadataRoute } from "next";
import pageUpdates from "@/lib/page-updates.generated.json";
import {
  getNewsByCategory,
  getToplamSayfa,
  getAllNews,
} from "@/lib/haberler";
import { HABER_KATEGORILERI } from "@/lib/haber-kategorileri";
import { getSitemapHisseSembolleri } from "@/lib/hisseler";
import { getHisseProfilMetadata } from "@/lib/hisse-kunye-kaynaklari";
import { ozgunTerimler, terimGuncellemeTarihi } from "@/data/sozluk";
import { getTumGunlukOzetler } from "@/lib/gunluk-ozet";
import {
  getSitemapOnayliIzahnameSluglari,
  getSitemapTaslakIzahnameSluglari,
} from "@/lib/halka-arz";
import { rehberler } from "@/lib/rehberler";
import {
  fonEtkiOzetleri,
  fonEtkiSonGuncelleme,
} from "@/app/fonlar/etki-analizi/_data/fonEtkiOzetleri";

const siteUrl = "https://www.hocaileborsa.com";

type PageUpdate = {
  route: string;
  updatedAt: string;
};

const updateMap = new Map(
  (pageUpdates.pages as PageUpdate[]).map((page) => [
    page.route,
    page.updatedAt,
  ])
);

const excludedRoutePatterns = [
  /\[/,
  /^\/yonetim(?:\/|$)/,
  /^\/kontrol-paneli-4827(?:\/|$)/,
  /^\/(?:giris|uye|profil|mesajlar|istatistik|guvenlik-kayitlari)(?:\/|$)/,
];

function isIndexableRoute(route: string) {
  return !excludedRoutePatterns.some((pattern) => pattern.test(route));
}

function getLastModified(route: string, fallbackRoute = "/") {
  return (
    updateMap.get(route) ??
    updateMap.get(fallbackRoute) ??
    pageUpdates.generatedAt
  );
}

function getRouteSettings(route: string): {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
} {
  if (route === "/") {
    return { priority: 1, changeFrequency: "daily" };
  }

  if (
    route === "/borsa" ||
    route === "/halka-arz" ||
    route === "/temettu" ||
    route === "/fonlar" ||
    route === "/mevduat-kredi-faizleri"
  ) {
    return { priority: 0.95, changeFrequency: "daily" };
  }

  if (route === "/hisseler" || route === "/haberler") {
    return { priority: 0.9, changeFrequency: "daily" };
  }

  if (route.startsWith("/haber/")) {
    return { priority: 0.9, changeFrequency: "monthly" };
  }

  if (route.startsWith("/hisse/")) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  if (route.startsWith("/fonlar/etki-analizi")) {
    return { priority: 0.9, changeFrequency: "daily" };
  }

  if (route.startsWith("/haberler/kategori/")) {
    return { priority: 0.75, changeFrequency: "daily" };
  }

  if (route.startsWith("/haberler/sayfa/")) {
    return { priority: 0.6, changeFrequency: "daily" };
  }

  if (route.startsWith("/borsa/gunluk-borsa-ozeti/")) {
    return { priority: 0.7, changeFrequency: "monthly" };
  }

  return { priority: 0.85, changeFrequency: "weekly" };
}

function createEntry(
  route: string,
  lastModified = getLastModified(route)
): MetadataRoute.Sitemap[number] {
  const settings = getRouteSettings(route);

  return {
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: settings.changeFrequency,
    priority: settings.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Statik App Router sayfaları build öncesinde üretilen güncelleme
  // kayıtlarından otomatik alınır. Dinamik route şablonları ve noindex
  // sayfalar sitemap'e eklenmez.
  const staticRoutes = (pageUpdates.pages as PageUpdate[])
    .map((page) => page.route)
    .filter(isIndexableRoute);

  const hisseEntries = getSitemapHisseSembolleri().map((sembol) => ({
    route: `/hisse/${sembol.toLowerCase()}`,
    lastModified: getHisseProfilMetadata(sembol)?.verifiedAt,
  }));

  // Sözlükte kendi sayfası olan terimler (işaretçi kayıtlar hariç).
  const sozlukEntries = ozgunTerimler().map((terim) => ({
    route: `/sozluk/${terim.slug}`,
    lastModified: terimGuncellemeTarihi(terim),
  }));

  const haberEntries = getAllNews().map((item) => ({
    route: item.href,
    lastModified: item.updatedAt ?? item.publishedAt,
  }));

  const fonEtkiEntries = [
    { route: "/fonlar/etki-analizi", lastModified: fonEtkiSonGuncelleme.iso },
    ...fonEtkiOzetleri.map((fon) => ({
      route: `/fonlar/etki-analizi/${fon.slug}`,
      lastModified: fonEtkiSonGuncelleme.iso,
    })),
  ];

  // JSON'a taşınmış halka arz detay sayfaları (dinamik [slug] şablonuyla
  // servis edilir; pageUpdates'te yer almadıkları için burada eklenir).
  const halkaArzRoutes = getSitemapTaslakIzahnameSluglari().map(
    (slug) => `/halka-arz/taslak-izahnameler/${slug}`
  );
  const onayliHalkaArzRoutes = getSitemapOnayliIzahnameSluglari().map(
    (slug) => `/halka-arz/onayli-izahnameler/${slug}`
  );

  const gunlukOzetEntries = getTumGunlukOzetler().map((ozet) => ({
    route: `/borsa/gunluk-borsa-ozeti/${ozet.slug}`,
    lastModified: ozet.isoTarih,
  }));

  const arsivSayfaRoutes: string[] = [];
  const toplamArsivSayfa = getToplamSayfa(getAllNews().length);
  for (let n = 2; n <= toplamArsivSayfa; n++) {
    arsivSayfaRoutes.push(`/haberler/sayfa/${n}`);
  }

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

  const routeEntries = new Map<string, string | undefined>();

  for (const route of [
    "/rehberler",
    ...rehberler.map((rehber) => rehber.href),
    ...staticRoutes,
    ...hisseEntries.map((entry) => entry.route),
    ...sozlukEntries.map((entry) => entry.route),
    ...haberEntries.map((entry) => entry.route),
    ...halkaArzRoutes,
    ...onayliHalkaArzRoutes,
    ...arsivSayfaRoutes,
    ...kategoriRoutes,
  ]) {
    if (isIndexableRoute(route)) {
      routeEntries.set(route, getLastModified(route));
    }
  }

  for (const entry of gunlukOzetEntries) {
    routeEntries.set(entry.route, entry.lastModified);
  }

  // JSON haber sayfaları pageUpdates listesinde yer almaz. Yayın/güncelleme
  // tarihini doğrudan içerikten kullanmak her deploy'da sahte tazelik sinyali
  // oluşmasını önler.
  for (const entry of haberEntries) {
    routeEntries.set(entry.route, entry.lastModified);
  }

  // Dinamik sözlük route'ları pageUpdates içinde yer almaz. Ana sayfanın
  // güncelleme tarihini miras almaları, her deploy'da yanlış tazelik sinyali
  // üretirdi; içerik tarihlerini açıkça kullan.
  for (const entry of sozlukEntries) {
    routeEntries.set(entry.route, entry.lastModified);
  }

  // Her şirket künyesi kendi veri dosyasının gerçek sürüm tarihini kullanır.
  // Böylece ilgisiz bir deploy tüm hisse sayfalarını yapay biçimde yenilemez.
  for (const entry of hisseEntries) {
    routeEntries.set(
      entry.route,
      entry.lastModified ?? getLastModified(entry.route)
    );
  }

  // Fon etki sayfalarının içerik tarihi günlük analiz verisinden gelir.
  // Statik route kayıtlarındaki eski dosya tarihi güncelliği gölgelememeli.
  for (const entry of fonEtkiEntries) {
    routeEntries.set(entry.route, entry.lastModified);
  }

  return Array.from(routeEntries.entries())
    .sort(([routeA], [routeB]) => routeA.localeCompare(routeB, "tr"))
    .map(([route, lastModified]) => createEntry(route, lastModified));
}

import "server-only";

import { getAllNews } from "@/lib/haberler";
import { KATEGORI_HARITASI } from "@/lib/haber-kategorileri";
import {
  getOnayliIzahnameListesi,
  getTaslakIzahnameListesi,
  halkaArzGetir,
} from "@/lib/halka-arz";
import { getTumHisseler } from "@/lib/hisseler";
import { rehberler } from "@/lib/rehberler";
import type {
  SiteSearchItem,
  SiteSearchPayload,
} from "@/lib/site-search-types";

const MAX_DESCRIPTION_LENGTH = 180;

function cleanText(value?: string): string | undefined {
  if (!value) return undefined;
  const cleaned = value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return undefined;
  if (cleaned.length <= MAX_DESCRIPTION_LENGTH) return cleaned;

  const shortened = cleaned.slice(0, MAX_DESCRIPTION_LENGTH + 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 120 ? lastSpace : MAX_DESCRIPTION_LENGTH).trim()}...`;
}

function uniqueKeywords(values: Array<string | undefined>): string[] | undefined {
  const keywords = Array.from(
    new Set(
      values
        .flatMap((value) => value?.split(",") ?? [])
        .map((value) => value.trim())
        .filter(Boolean)
    )
  );

  return keywords.length > 0 ? keywords : undefined;
}

function getCompanyItems(): SiteSearchItem[] {
  return getTumHisseler().map((hisse) => {
    const code = hisse.kod.toLocaleUpperCase("tr-TR");
    return {
      id: `sirket:${code}`,
      type: "sirket",
      title: hisse.sirketAdi,
      href: `/hisse/${hisse.kod.toLocaleLowerCase("tr-TR")}`,
      eyebrow: code,
      code,
      description: `${code} hisse künyesi, şirket bilgileri, KAP haberleri ve sermaye geçmişi.`,
      keywords: [code, hisse.sirketAdi, "hisse", "şirket"],
    };
  });
}

function getNewsItems(): SiteSearchItem[] {
  return getAllNews().map((haber) => {
    const category = haber.category
      ? KATEGORI_HARITASI[haber.category]?.kisaBaslik
      : undefined;
    const slugKeywords = haber.href
      .split("/")
      .filter(Boolean)
      .at(-1)
      ?.replaceAll("-", " ");

    return {
      id: `haber:${haber.href}`,
      type: "haber",
      title: haber.title,
      href: haber.href,
      eyebrow: category || "Haber",
      description: cleanText(haber.description),
      keywords: uniqueKeywords([
        slugKeywords,
        haber.category?.replaceAll("-", " "),
        ...(haber.ilgiliHisseler ?? []),
      ]),
      publishedAt: haber.publishedAt || undefined,
    };
  });
}

function getIpoItems(): SiteSearchItem[] {
  const drafts: SiteSearchItem[] = getTaslakIzahnameListesi().map((item) => {
    const data = halkaArzGetir(item.klasor);
    const code = data?.bistKodu || data?.ozet.bistKodu;

    return {
      id: `halka-arz:taslak:${item.klasor}`,
      type: "halka-arz",
      title: item.label,
      href: `/halka-arz/taslak-izahnameler/${item.klasor}`,
      eyebrow: "Taslak İzahname",
      code: code?.toLocaleUpperCase("tr-TR"),
      description:
        cleanText(data?.baslikMeta.description) ||
        "Taslak izahname, halka arz bilgileri ve şirket özeti.",
      keywords: uniqueKeywords([
        item.klasor.replaceAll("-", " "),
        code,
        "taslak izahname",
        "halka arz",
      ]),
    };
  });

  const approved: SiteSearchItem[] = getOnayliIzahnameListesi().map((item) => {
    const data = halkaArzGetir(item.klasor);
    const code = item.kod || data?.bistKodu || data?.ozet.bistKodu;

    return {
      id: `halka-arz:onayli:${item.klasor}`,
      type: "halka-arz",
      title: item.label,
      href: `/halka-arz/onayli-izahnameler/${item.klasor}`,
      eyebrow: "Onaylı İzahname",
      code: code?.toLocaleUpperCase("tr-TR"),
      description:
        cleanText(data?.baslikMeta.description) ||
        "Onaylı izahname, talep bilgileri ve halka arz karnesi.",
      keywords: uniqueKeywords([
        item.klasor.replaceAll("-", " "),
        code,
        "onaylı izahname",
        "halka arz",
      ]),
    };
  });

  return [...approved, ...drafts];
}

function getGuideItems(): SiteSearchItem[] {
  return rehberler.map((guide) => ({
    id: `rehber:${guide.href}`,
    type: "rehber",
    title: guide.title,
    href: guide.href,
    eyebrow: "Rehber",
    description: cleanText(guide.description),
    keywords: uniqueKeywords([
      guide.href.split("/").filter(Boolean).at(-1)?.replaceAll("-", " "),
      "rehber",
    ]),
  }));
}

export function getSiteSearchPayload(): SiteSearchPayload {
  const uniqueItems = new Map<string, SiteSearchItem>();

  for (const item of [
    ...getCompanyItems(),
    ...getNewsItems(),
    ...getIpoItems(),
    ...getGuideItems(),
  ]) {
    if (!uniqueItems.has(item.href)) uniqueItems.set(item.href, item);
  }

  return {
    version: 1,
    items: Array.from(uniqueItems.values()),
  };
}

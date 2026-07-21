export type SiteSearchItemType =
  | "sirket"
  | "haber"
  | "halka-arz"
  | "rehber";

export type SiteSearchItem = {
  id: string;
  type: SiteSearchItemType;
  title: string;
  href: string;
  eyebrow: string;
  description?: string;
  code?: string;
  keywords?: string[];
  publishedAt?: string;
};

export type SiteSearchPayload = {
  version: 1;
  items: SiteSearchItem[];
};

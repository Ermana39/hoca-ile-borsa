export type SiteSearchItemType =
  | "sirket"
  | "fon"
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
  version: 2;
  items: SiteSearchItem[];
};

import RelatedContent, { type RelatedContentItem } from "@/components/RelatedContent";

export default function RelatedNews({
  title = "Güncel örnek haberler",
  items,
  className = "",
}: {
  title?: string;
  items: RelatedContentItem[];
  className?: string;
}) {
  return <RelatedContent title={title} items={items} className={className} />;
}

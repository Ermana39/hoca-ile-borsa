import RelatedContent, { type RelatedContentItem } from "@/components/RelatedContent";

export default function ContinueReading({
  title = "Okumaya devam edin",
  items,
  className = "",
}: {
  title?: string;
  items: RelatedContentItem[];
  className?: string;
}) {
  return <RelatedContent title={title} items={items} className={className} />;
}

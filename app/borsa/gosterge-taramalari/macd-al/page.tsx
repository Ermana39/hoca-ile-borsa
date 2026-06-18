import GostergeTaramaDetayPage, {
  generateMetadata as generateGostergeTaramaMetadata,
} from "../[slug]/page";

const params = Promise.resolve({ slug: "macd-al" });

export const revalidate = false;

export function generateMetadata() {
  return generateGostergeTaramaMetadata({ params });
}

export default function MacdAlPage() {
  return <GostergeTaramaDetayPage params={params} />;
}

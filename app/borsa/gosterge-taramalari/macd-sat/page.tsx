import GostergeTaramaDetayPage, {
  generateMetadata as generateGostergeTaramaMetadata,
} from "../[slug]/page";

const params = Promise.resolve({ slug: "macd-sat" });

export const revalidate = false;

export function generateMetadata() {
  return generateGostergeTaramaMetadata({ params });
}

export default function MacdSatPage() {
  return <GostergeTaramaDetayPage params={params} />;
}

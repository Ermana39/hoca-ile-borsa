import GostergeTaramaDetayPage, {
  generateMetadata as generateGostergeTaramaMetadata,
} from "../[slug]/page";

const params = Promise.resolve({ slug: "dusus-trendinde-olanlar" });

export const revalidate = false;

export function generateMetadata() {
  return generateGostergeTaramaMetadata({ params });
}

export default function DususTrendindeOlanlarPage() {
  return <GostergeTaramaDetayPage params={params} />;
}

import GostergeTaramaDetayPage, {
  generateMetadata as generateGostergeTaramaMetadata,
} from "../[slug]/page";

const params = Promise.resolve({ slug: "yukselis-trendinde-olanlar" });

export const revalidate = false;

export function generateMetadata() {
  return generateGostergeTaramaMetadata({ params });
}

export default function YukselisTrendindeOlanlarPage() {
  return <GostergeTaramaDetayPage params={params} />;
}

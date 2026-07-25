import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "albayrak-hazir-beton-san-ve-tic";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function AlbayrakHazirBetonPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

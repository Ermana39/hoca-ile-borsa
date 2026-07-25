import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "metgun-enerji-yatirimlari";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function MetgunEnerjiYatirimlariPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

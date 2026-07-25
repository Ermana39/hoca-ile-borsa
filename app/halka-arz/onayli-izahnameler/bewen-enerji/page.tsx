import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "bewen-enerji";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function BewenEnerjiPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

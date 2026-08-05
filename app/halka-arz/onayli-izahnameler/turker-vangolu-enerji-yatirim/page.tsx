import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "turker-vangolu-enerji-yatirim";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function TurkerVangoluEnerjiPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

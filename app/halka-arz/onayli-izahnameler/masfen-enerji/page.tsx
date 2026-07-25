import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "masfen-enerji";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function MasfenEnerjiPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

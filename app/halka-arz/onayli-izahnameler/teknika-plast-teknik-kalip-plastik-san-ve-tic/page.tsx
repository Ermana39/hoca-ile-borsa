import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "teknika-plast-teknik-kalip-plastik-san-ve-tic";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function TeknikaPlastPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

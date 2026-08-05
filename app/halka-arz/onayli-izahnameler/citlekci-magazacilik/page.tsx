import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "citlekci-magazacilik";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function CitlekciMagazacilikPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

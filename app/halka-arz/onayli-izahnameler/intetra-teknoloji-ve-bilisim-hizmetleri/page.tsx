import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "intetra-teknoloji-ve-bilisim-hizmetleri";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function IntetraTeknolojiVeBilisimHizmetleriPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}

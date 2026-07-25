import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "kardemir-celik-sanayi";

export function generateMetadata() {
  return detayMetadata({
    params: Promise.resolve({ slug }),
  });
}

export default function KardemirCelikSanayiPage() {
  return (
    <OnayliIzahnameDetayPage
      params={Promise.resolve({
        slug,
      })}
    />
  );
}
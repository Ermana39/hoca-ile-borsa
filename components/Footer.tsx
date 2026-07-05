import Link from "next/link";
import type { ReactNode } from "react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M18.244 2H21l-6.46 7.383L22.136 22H16.19l-4.657-6.104L6.19 22H3.43l6.908-7.894L2 2h6.097l4.21 5.564L18.244 2Zm-1.043 18h1.527L7.268 3.895H5.63L17.2 20Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.875 1.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M21.944 4.507a1.5 1.5 0 0 0-1.746-.184L3.68 12.35a1.5 1.5 0 0 0 .176 2.764l3.63 1.34 1.34 3.63a1.5 1.5 0 0 0 2.764.176l8.026-16.52a1.5 1.5 0 0 0-.672-2.033ZM9.24 15.94l-.924 2.505-.924-2.505 7.622-6.28L9.24 15.94Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 8 8 6 8-6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" strokeWidth="1.8" />
    </svg>
  );
}

function SosyalIkon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition hover:bg-slate-700"
    >
      {children}
    </a>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              prefetch={false}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div>
            <h3 className="mb-4 text-xl font-semibold leading-snug text-white">
              Hoca İle Borsa – Borsa, Halka Arz ve Finans İçerikleri
            </h3>
            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-400">
              Borsa, halka arz, temettü, fonlar ve finans içeriklerini tek
              yerde takip edebileceğiniz güncel bilgi platformu.
            </p>

            <div className="flex gap-3">
              <SosyalIkon href="https://x.com/HocaileBorsa" label="X">
                <XIcon />
              </SosyalIkon>
              <SosyalIkon
                href="https://www.instagram.com/hocaileborsa/"
                label="Instagram"
              >
                <InstagramIcon />
              </SosyalIkon>
              <SosyalIkon href="https://t.me/halkaarz_0" label="Telegram">
                <TelegramIcon />
              </SosyalIkon>
            </div>
          </div>

          <FooterLinkColumn
            title="Kategoriler"
            links={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Halka Arz", href: "/halka-arz" },
              { label: "Fonlar", href: "/fonlar" },
              { label: "Temettü", href: "/temettu" },
              { label: "Borsa Analiz", href: "/borsa" },
              { label: "Faiz Oranları", href: "/mevduat-kredi-faizleri" },
              { label: "Rehberler", href: "/rehberler" },
            ]}
          />

          <FooterLinkColumn
            title="Hesaplayıcılar"
            links={[
              { label: "Tüm Hesaplayıcılar", href: "/hesaplayici" },
              {
                label: "Mevduat Faizi Hesapla",
                href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
              },
              {
                label: "Konut Kredisi Hesapla",
                href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
              },
              {
                label: "Temettü Hesaplama",
                href: "/temettu/temettu-hesaplama-araci",
              },
              { label: "Hisse Kâr / Zarar", href: "/borsa/kar-zarar-hesaplama" },
              { label: "Kira Artış Hesapla", href: "/hesaplayici/kira-artis" },
            ]}
          />

          <FooterLinkColumn
            title="Kurumsal"
            links={[
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Künye", href: "/kunye" },
              { label: "Yazarımız - Erman Hoca", href: "/yazar/erman-hoca" },
              { label: "Editoryal İlkeler", href: "/editoryal-ilkeler" },
              { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
              { label: "Çerez Politikası", href: "/cerez-politikasi" },
              { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
              { label: "Yasal Uyarı", href: "/yasal-uyari" },
              { label: "İletişim", href: "/iletisim" },
              { label: "Reklam", href: "/reklam" },
            ]}
          />

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">İletişim</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MailIcon />
                <span>destekhocaileborsa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span>Kırklareli, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Hoca İle Borsa. Tüm hakları saklıdır.</p>
          <p>Sitede yer alan içerikler izinsiz kullanılamaz.</p>
        </div>
      </div>
    </footer>
  );
}

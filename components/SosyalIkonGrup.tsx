import type { ReactNode } from "react";

type SosyalLinkler = {
  x: string;
  instagram: string;
  telegram: string;
  youtube: string;
  youtubeGlobal: string;
};

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

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M23.5 6.507a3.02 3.02 0 0 0-2.124-2.136C19.505 3.866 12 3.866 12 3.866s-7.505 0-9.376.505A3.02 3.02 0 0 0 .5 6.507C0 8.39 0 12.32 0 12.32s0 3.93.5 5.813a3.02 3.02 0 0 0 2.124 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.02 3.02 0 0 0 2.124-2.136c.5-1.883.5-5.813.5-5.813s0-3.93-.5-5.813ZM9.6 15.873V8.766l6.273 3.554L9.6 15.873Z" />
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

function IkonButon({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

// Yeniden kullanılabilir sosyal medya + iletişim ikon grubu.
// İleride footer'da da kullanılabilir.
export default function SosyalIkonGrup({
  sosyal,
  email,
  className = "",
}: {
  sosyal: SosyalLinkler;
  email: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <IkonButon href={sosyal.x} label="X (Twitter)">
        <XIcon />
      </IkonButon>
      <IkonButon href={sosyal.instagram} label="Instagram">
        <InstagramIcon />
      </IkonButon>
      <IkonButon href={sosyal.telegram} label="Telegram">
        <TelegramIcon />
      </IkonButon>
      <IkonButon href={sosyal.youtube} label="YouTube - Yurt İçi Piyasalar">
        <YouTubeIcon />
      </IkonButon>
      <IkonButon
        href={sosyal.youtubeGlobal}
        label="YouTube - Yurt Dışı Piyasalar"
      >
        <YouTubeIcon />
      </IkonButon>
      <IkonButon href={`mailto:${email}`} label={`E-posta: ${email}`} external={false}>
        <MailIcon />
      </IkonButon>
    </div>
  );
}

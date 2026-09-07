import type { ReactElement } from "react";

type SocialIconProps = {
  className?: string;
  branded?: boolean;
};

type SocialLink = {
  key: "x" | "youtube" | "instagram" | "tiktok" | "telegram";
  label: string;
  href: string;
  description: string;
  cta: string;
  Icon: ({ className }: SocialIconProps) => ReactElement;
};

function XIcon({ className = "h-5 w-5", branded = false }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={branded ? "#111111" : "currentColor"}
        d="M18.244 2H21l-6.46 7.383L22.136 22H16.19l-4.657-6.104L6.19 22H3.43l6.908-7.894L2 2h6.097l4.21 5.564L18.244 2Zm-1.043 18h1.527L7.268 3.895H5.63L17.2 20Z"
      />
    </svg>
  );
}

function YouTubeIcon({
  className = "h-5 w-5",
  branded = false,
}: SocialIconProps) {
  if (branded) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#FF0000"
          d="M21.58 7.16a3 3 0 0 0-2.11-2.11C17.61 4.56 12 4.56 12 4.56s-5.61 0-7.47.49a3 3 0 0 0-2.11 2.11A31.5 31.5 0 0 0 1.93 12a31.5 31.5 0 0 0 .49 4.84 3 3 0 0 0 2.11 2.11c1.86.49 7.47.49 7.47.49s5.61 0 7.47-.49a3 3 0 0 0 2.11-2.11A31.5 31.5 0 0 0 22.07 12a31.5 31.5 0 0 0-.49-4.84Z"
        />
        <path fill="#FFFFFF" d="M9.99 15.53V8.47L16.1 12l-6.11 3.53Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.58 7.16a3 3 0 0 0-2.11-2.11C17.61 4.56 12 4.56 12 4.56s-5.61 0-7.47.49a3 3 0 0 0-2.11 2.11A31.5 31.5 0 0 0 1.93 12a31.5 31.5 0 0 0 .49 4.84 3 3 0 0 0 2.11 2.11c1.86.49 7.47.49 7.47.49s5.61 0 7.47-.49a3 3 0 0 0 2.11-2.11A31.5 31.5 0 0 0 22.07 12a31.5 31.5 0 0 0-.49-4.84ZM9.99 15.53V8.47L16.1 12l-6.11 3.53Z"
      />
    </svg>
  );
}

function InstagramIcon({
  className = "h-5 w-5",
  branded = false,
}: SocialIconProps) {
  if (branded) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#FDF497" />
            <stop offset="5%" stopColor="#FDF497" />
            <stop offset="45%" stopColor="#FD5949" />
            <stop offset="60%" stopColor="#D6249F" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="22" height="22" x="1" y="1" rx="5.5" fill="url(#instagramGradient)" />
        <circle cx="12" cy="12" r="4.25" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="17.25" cy="6.75" r="1.2" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.875 1.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z"
      />
    </svg>
  );
}

function TikTokIcon({
  className = "h-5 w-5",
  branded = false,
}: SocialIconProps) {
  if (branded) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#25F4EE"
          d="M15.72 2.5c.27 2.1 1.42 3.45 3.47 3.75v2.74a6.54 6.54 0 0 1-2.68-.62v6.47c0 3.55-2.16 5.68-5.42 5.68-2.99 0-4.95-1.93-4.95-4.63 0-2.91 2.19-4.81 5.3-4.81.26 0 .54.02.83.07v2.87a2.83 2.83 0 0 0-.72-.09c-1.23 0-2.01.65-2.01 1.61 0 .93.72 1.58 1.75 1.58 1.23 0 1.96-.74 1.96-2.36V2.5h2.47Z"
        />
        <path
          fill="#FE2C55"
          d="M17.24 3.65c.52 1.71 1.74 2.72 3.56 2.85v3.53a7.6 7.6 0 0 1-4.03-1.2v6.36c0 3.93-2.43 6.31-6.03 6.31-2.15 0-3.83-.89-4.76-2.3.96.78 2.23 1.22 3.75 1.22 3.6 0 6.03-2.38 6.03-6.31V7.75a7.6 7.6 0 0 0 4.03 1.2V6.72c-1.23-.09-2.23-.55-2.98-1.35a6.04 6.04 0 0 1-.94-1.72h1.37Z"
        />
        <path
          fill="#111111"
          d="M16.68 2.5c.32 2.45 1.69 4.02 4.12 4.19v3.34a7.6 7.6 0 0 1-4.03-1.2v6.36c0 3.93-2.43 6.31-6.03 6.31-3.35 0-5.54-2.15-5.54-5.15 0-3.23 2.44-5.33 5.91-5.33.38 0 .78.04 1.2.13v3.42a3.78 3.78 0 0 0-1.15-.18c-1.46 0-2.39.78-2.39 1.92 0 1.1.86 1.87 2.08 1.87 1.45 0 2.32-.88 2.32-2.79V2.5h3.51Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.68 2.5c.32 2.45 1.69 4.02 4.12 4.19v3.34a7.6 7.6 0 0 1-4.03-1.2v6.36c0 3.93-2.43 6.31-6.03 6.31-3.35 0-5.54-2.15-5.54-5.15 0-3.23 2.44-5.33 5.91-5.33.38 0 .78.04 1.2.13v3.42a3.78 3.78 0 0 0-1.15-.18c-1.46 0-2.39.78-2.39 1.92 0 1.1.86 1.87 2.08 1.87 1.45 0 2.32-.88 2.32-2.79V2.5h3.51Z"
      />
    </svg>
  );
}

function TelegramIcon({
  className = "h-5 w-5",
  branded = false,
}: SocialIconProps) {
  if (branded) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10.5" fill="#26A5E4" />
        <path
          fill="#FFFFFF"
          d="M17.92 7.06 5.64 11.79c-.84.34-.83.81-.15 1.02l3.15.98 1.2 3.68c.15.41.08.57.5.57.39 0 .56-.18.78-.39l1.87-1.82 3.89 2.87c.72.4 1.24.19 1.42-.67l2.57-12.12c.26-1.05-.4-1.53-1.15-1.2Z"
        />
        <path
          fill="#D2F0FF"
          d="M8.76 13.57 16 9c.36-.22.69-.1.42.14l-5.86 5.29-.23 2.49-1.57-3.35Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.62 4.18a1.42 1.42 0 0 0-1.45-.25L3.2 10.48c-1.16.45-1.14 2.1.04 2.5l4.15 1.41 1.6 5.02a1.44 1.44 0 0 0 2.44.57l2.31-2.35 4.07 3.01a1.44 1.44 0 0 0 2.27-.87l2.04-14.2a1.42 1.42 0 0 0-.5-1.39ZM18.46 7.3l-7.69 6.84-.31 3.35-1.07-3.37 7.8-5.04-9.67 3.74-3.1-1.06 14.04-4.46Z"
      />
    </svg>
  );
}

export const sosyalMedyaHesaplari: SocialLink[] = [
  {
    key: "x",
    label: "X",
    href: "https://x.com/HocaileBorsa",
    description: "Piyasa gündemi, KAP haberleri ve kısa notlar.",
    cta: "X'te takip et",
    Icon: XIcon,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@hocaileborsa",
    description: "Halka arz, fon ve borsa gündemi videoları.",
    cta: "Kanala git",
    Icon: YouTubeIcon,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/hocaileborsa/",
    description: "Kısa piyasa özetleri ve görsel içerikler.",
    cta: "Instagram'da takip et",
    Icon: InstagramIcon,
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@hocaileborsa",
    description: "Kısa video içerikleri ve pratik piyasa notları.",
    cta: "TikTok'ta takip et",
    Icon: TikTokIcon,
  },
  {
    key: "telegram",
    label: "Telegram",
    href: "https://t.me/halkaarz_0",
    description: "Halka arz ve piyasa gelişmeleri için hızlı duyurular.",
    cta: "Telegram'a katıl",
    Icon: TelegramIcon,
  },
];

export function SocialIconLinks({
  className = "",
  linkClassName = "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
  iconClassName = "h-4 w-4",
}: {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {sosyalMedyaHesaplari.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}

export function SocialPlatformCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {sosyalMedyaHesaplari.map(({ href, label, description, cta, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-40 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition group-hover:border-blue-200 group-hover:bg-blue-50">
            <Icon className="h-7 w-7" branded />
          </span>
          <span className="mt-4 text-base font-bold text-slate-900">{label}</span>
          <span className="mt-2 flex-1 text-sm leading-6 text-slate-600">
            {description}
          </span>
          <span className="mt-4 text-sm font-bold text-blue-700">
            {cta} <span aria-hidden="true">→</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export function SocialFollowMini({ className = "" }: { className?: string }) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm ${className}`}
      aria-labelledby="sosyal-medya-takip"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="sosyal-medya-takip" className="text-sm font-bold text-slate-900">
            Bizi sosyal medyada takip edin
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Haber, halka arz ve fon içeriklerini sosyal hesaplarımızdan da takip edebilirsiniz.
          </p>
        </div>
        <SocialIconLinks className="shrink-0" />
      </div>
    </section>
  );
}

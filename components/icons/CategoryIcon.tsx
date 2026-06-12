export type CategoryIconName =
  // Ana sayfa kategorileri
  | "borsa-analiz"
  | "halka-arz"
  | "fonlar"
  | "temettu"
  | "faiz-oranlari"
  // Borsa Analiz alt kategorileri
  | "gunluk-borsa-ozeti"
  | "dikkat-cekenler"
  | "dip-zirve-analizi"
  | "egitim-videolari"
  | "formasyonlar"
  | "geri-alim-programlari"
  | "gosterge-taramalari"
  | "grafik-analiz"
  | "hacim-artisi-analizi"
  | "yeni-is-anlasmalari"
  | "pivot-analizi"
  | "oran-analizi"
  | "tedbirli-hisseler"
  // Halka Arz
  | "onayli-izahnameler"
  | "taslak-izahnameler"
  // Temettü
  | "temettu-egitimi"
  | "temettu-takvim"
  // Fonlar
  | "menkul-kiymet-fonlari"
  | "emeklilik-fonlari"
  | "borsa-yatirim-fonlari"
  | "fon-haftalik-tercih"
  | "fon-getiri"
  | "fon-tarihsel"
  | "fon-etki-analizi"
  // Faiz Oranları
  | "mevduat-faizi"
  | "tuketici-faizi"
  | "konut-kredisi"
  | "tasit-kredisi"
  // Hesaplayıcılar
  | "bilesik-faiz"
  | "enflasyon"
  | "kar-zarar"
  | "ortalama-maliyet"
  | "sermaye-artirimi"
  | "tahvil-eurobond"
  | "kira-artis"
  | "vergi"
  | "kidem-tazminati"
  | "altin"
  | "doviz";

/*
  Katmanlı illüstrasyon ikon seti (48x48).
  Palet sabittir; ikonlar dolu renk bloklarıyla çizilir:
  - Lacivert  #1e3a8a  (zemin/gövde)
  - Mavi      #1d4ed8 / #3b82f6 / #60a5fa (ana renk tonları)
  - Açık      #eff6ff / #93c5fd (vurgu yüzeyleri)
  - Altın     #fbbf24 / #f59e0b / #78350f (sıcak vurgu)
  - Yeşil     #34d399, Kırmızı #f87171 (yükseliş/düşüş)
*/

const NAVY = "#1e3a8a";
const BLUE = "#1d4ed8";
const BLUE_MID = "#3b82f6";
const BLUE_SOFT = "#60a5fa";
const BLUE_PALE = "#93c5fd";
const LIGHT = "#eff6ff";
const AMBER = "#fbbf24";
const AMBER_DEEP = "#f59e0b";
const AMBER_DARK = "#78350f";
const GREEN = "#34d399";
const RED = "#f87171";

const icons: Record<CategoryIconName, React.ReactNode> = {
  // --- Ana sayfa kategorileri ---
  "borsa-analiz": (
    <>
      <rect x="5" y="7" width="38" height="32" rx="5" fill={NAVY} />
      <path d="M5 12a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v4H5v-4z" fill={BLUE} />
      <circle cx="10.5" cy="11.5" r="1.6" fill={BLUE_PALE} />
      <circle cx="15.5" cy="11.5" r="1.6" fill={BLUE_SOFT} />
      <rect x="11" y="24" width="4" height="10" rx="1.2" fill={GREEN} />
      <rect x="12.4" y="21.5" width="1.2" height="15" rx="0.6" fill={GREEN} />
      <rect x="18.5" y="20" width="4" height="9" rx="1.2" fill={RED} />
      <rect x="19.9" y="17.5" width="1.2" height="14.5" rx="0.6" fill={RED} />
      <rect x="26" y="22" width="4" height="12" rx="1.2" fill={GREEN} />
      <rect x="27.4" y="19" width="1.2" height="17" rx="0.6" fill={GREEN} />
      <rect x="33.5" y="18" width="4" height="9" rx="1.2" fill={GREEN} />
      <rect x="34.9" y="15.5" width="1.2" height="13.5" rx="0.6" fill={GREEN} />
      <path
        d="M10 30c5-2 8-7 13-7s7 3 14-6"
        stroke={AMBER}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "halka-arz": (
    <>
      <path d="M14 36c-2.5 3-2 7-2 7s4 .5 7-2l-5-5z" fill={AMBER} />
      <path d="M34 36c2.5 3 2 7 2 7s-4 .5-7-2l5-5z" fill={AMBER} />
      <path
        d="M24 4c7 3 11 10 11 18 0 4.5-1.5 8.5-3.5 11.5h-15C14.5 30.5 13 26.5 13 22 13 14 17 7 24 4z"
        fill={BLUE}
      />
      <path
        d="M24 4c7 3 11 10 11 18 0 4.5-1.5 8.5-3.5 11.5H24V4z"
        fill={NAVY}
      />
      <circle cx="24" cy="18" r="5" fill={LIGHT} />
      <circle cx="24" cy="18" r="2.6" fill={BLUE_SOFT} />
      <path
        d="M16.5 33.5L12 41M31.5 33.5L36 41"
        stroke={NAVY}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20.5 38.5h7"
        stroke={AMBER}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
  fonlar: (
    <>
      <circle cx="24" cy="24" r="19" fill={NAVY} />
      <path d="M24 5a19 19 0 0 1 19 19H24V5z" fill={AMBER} />
      <path d="M24 24l13.4 13.4A19 19 0 0 1 24 43V24z" fill={BLUE_MID} />
      <circle cx="24" cy="24" r="8.5" fill={LIGHT} />
      <path
        d="M24 19.5v9M21 21.7h4.6a2 2 0 1 1 0 4H22.4a2 2 0 1 0 0 4H27"
        stroke={BLUE}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  temettu: (
    <>
      <circle cx="18" cy="18" r="12.5" fill={BLUE} />
      <circle cx="18" cy="18" r="8.5" fill={BLUE_MID} />
      <path
        d="M18 13.5v9M15.5 15.2h3.6a1.8 1.8 0 1 1 0 3.6h-2.2a1.8 1.8 0 1 0 0 3.6h4.1"
        stroke={LIGHT}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="31" cy="31" r="12.5" fill={AMBER_DEEP} />
      <circle cx="31" cy="31" r="8.5" fill={AMBER} />
      <path
        d="M31 26.5v9M28.5 28.2h3.6a1.8 1.8 0 1 1 0 3.6h-2.2a1.8 1.8 0 1 0 0 3.6h4.1"
        stroke={AMBER_DARK}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "faiz-oranlari": (
    <>
      <path d="M24 5L43 16H5L24 5z" fill={BLUE} />
      <rect x="8" y="18" width="5" height="17" rx="1" fill={BLUE_MID} />
      <rect x="17" y="18" width="5" height="17" rx="1" fill={BLUE_MID} />
      <rect x="26" y="18" width="5" height="17" rx="1" fill={BLUE_MID} />
      <rect x="35" y="18" width="5" height="17" rx="1" fill={BLUE_MID} />
      <rect x="5" y="37" width="38" height="6" rx="2" fill={NAVY} />
      <circle cx="33" cy="13" r="8.5" fill={AMBER} />
      <path
        d="M30 16l6-6M30.6 10.6h.01M35.4 15.4h.01"
        stroke={AMBER_DARK}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),

  // --- Borsa Analiz alt kategorileri ---
  "gunluk-borsa-ozeti": (
    <>
      <rect x="6" y="8" width="36" height="34" rx="5" fill={LIGHT} />
      <path d="M6 13a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v6H6v-6z" fill={BLUE} />
      <rect x="13" y="4" width="3.6" height="8" rx="1.8" fill={NAVY} />
      <rect x="31.4" y="4" width="3.6" height="8" rx="1.8" fill={NAVY} />
      <path
        d="M12 33l6.5-7 5 4 7-9 5.5 4"
        stroke={BLUE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="36" cy="25" r="2.4" fill={AMBER} />
    </>
  ),
  "dikkat-cekenler": (
    <>
      <path
        d="M24 4l5 10.2 11.2 1.6-8.1 7.9 1.9 11.2L24 29.6l-10 5.3 1.9-11.2-8.1-7.9L19 14.2 24 4z"
        fill={AMBER}
      />
      <path
        d="M24 4l5 10.2 11.2 1.6-8.1 7.9 1.9 11.2L24 29.6V4z"
        fill={AMBER_DEEP}
      />
      <circle cx="9" cy="40" r="2.2" fill={BLUE_MID} />
      <circle cx="40" cy="39" r="2.8" fill={BLUE} />
      <circle cx="42" cy="8" r="2" fill={BLUE_SOFT} />
    </>
  ),
  "dip-zirve-analizi": (
    <>
      <path
        d="M5 28c4 0 5.5-12 9.5-12s4 16 8.5 16 4.5-14 9.5-14 5 7 10.5 7v18H5V28z"
        fill={BLUE_MID}
        opacity="0.35"
      />
      <path
        d="M5 28c4 0 5.5-12 9.5-12s4 16 8.5 16 4.5-14 9.5-14 5 7 10.5 7"
        stroke={BLUE}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14.5" cy="16" r="3.4" fill={GREEN} />
      <circle cx="14.5" cy="16" r="1.5" fill={LIGHT} />
      <circle cx="23" cy="32" r="3.4" fill={RED} />
      <circle cx="23" cy="32" r="1.5" fill={LIGHT} />
      <circle cx="32.5" cy="18" r="3.4" fill={AMBER} />
      <circle cx="32.5" cy="18" r="1.5" fill={LIGHT} />
    </>
  ),
  "egitim-videolari": (
    <>
      <rect x="5" y="8" width="38" height="26" rx="5" fill={NAVY} />
      <rect x="8" y="11" width="32" height="20" rx="3" fill={BLUE} />
      <circle cx="24" cy="21" r="7.5" fill={LIGHT} />
      <path d="M22 17.5l5.5 3.5-5.5 3.5v-7z" fill={AMBER_DEEP} />
      <path
        d="M18 38h12M24 34v4"
        stroke={NAVY}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="14" y="40" width="20" height="3.5" rx="1.75" fill={BLUE_MID} />
    </>
  ),
  formasyonlar: (
    <>
      <path
        d="M4 38l6.5-12 5.5 7 8-19 8 19 5.5-7L44 38v6H4v-6z"
        fill={BLUE_MID}
        opacity="0.35"
      />
      <path
        d="M4 38l6.5-12 5.5 7 8-19 8 19 5.5-7L44 38"
        stroke={BLUE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6 31h36"
        stroke={AMBER_DEEP}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <circle cx="24" cy="14" r="3" fill={AMBER} />
    </>
  ),
  "geri-alim-programlari": (
    <>
      <path
        d="M24 6a18 18 0 0 1 17 12h-5.2A13 13 0 0 0 24 11V6z"
        fill={BLUE_MID}
      />
      <path
        d="M24 42A18 18 0 0 1 7 30h5.2A13 13 0 0 0 24 37v5z"
        fill={BLUE_MID}
      />
      <path d="M41 10v8h-8l8-8z" fill={BLUE} />
      <path d="M7 38v-8h8l-8 8z" fill={BLUE} />
      <circle cx="24" cy="24" r="9.5" fill={AMBER} />
      <circle cx="24" cy="24" r="6.5" fill={AMBER_DEEP} />
      <path
        d="M24 20.5v7M22 22h2.8a1.6 1.6 0 1 1 0 3.2h-1.6a1.6 1.6 0 1 0 0 3.2h3.2"
        stroke={AMBER_DARK}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "gosterge-taramalari": (
    <>
      <path d="M6 7h36l-13 14v12l-10 6V21L6 7z" fill={BLUE} />
      <path d="M6 7h36l-6.5 7h-23L6 7z" fill={NAVY} />
      <circle cx="36" cy="34" r="8" fill={AMBER} />
      <path
        d="M32.5 34l2.5 2.5 4.5-4.5"
        stroke={AMBER_DARK}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  "grafik-analiz": (
    <>
      <rect x="5" y="6" width="38" height="34" rx="5" fill={NAVY} />
      <rect x="11" y="22" width="5" height="11" rx="1.4" fill={GREEN} />
      <rect x="12.8" y="19" width="1.4" height="17" rx="0.7" fill={GREEN} />
      <rect x="21.5" y="16" width="5" height="10" rx="1.4" fill={RED} />
      <rect x="23.3" y="13" width="1.4" height="16" rx="0.7" fill={RED} />
      <rect x="32" y="18" width="5" height="13" rx="1.4" fill={GREEN} />
      <rect x="33.8" y="14.5" width="1.4" height="20" rx="0.7" fill={GREEN} />
      <path
        d="M9 35c6-3 10-11 15.5-11S32 27 39 17"
        stroke={AMBER}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M35.5 16l4-1 .5 4" stroke={AMBER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  "hacim-artisi-analizi": (
    <>
      <rect x="6" y="28" width="7" height="13" rx="1.6" fill={BLUE_SOFT} />
      <rect x="16" y="22" width="7" height="19" rx="1.6" fill={BLUE_MID} />
      <rect x="26" y="15" width="7" height="26" rx="1.6" fill={BLUE} />
      <rect x="36" y="8" width="7" height="33" rx="1.6" fill={NAVY} />
      <path
        d="M8 16l9-4.5 8-1.5 9-5"
        stroke={AMBER_DEEP}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M29.5 4.5l4.5.5-1 4.5"
        stroke={AMBER_DEEP}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  "yeni-is-anlasmalari": (
    <>
      <path d="M10 4h20l8 8v32H10V4z" fill={LIGHT} />
      <path d="M30 4l8 8h-8V4z" fill={BLUE_PALE} />
      <rect x="15" y="18" width="18" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="15" y="24" width="18" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="15" y="30" width="11" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <path
        d="M15 38.5c2.5-2.5 4 1.5 6.5-1"
        stroke={NAVY}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M41 26L29.5 37.5l-1.4 4.9 4.9-1.4L44.5 29.5 41 26z" fill={AMBER} />
      <path d="M41 26l3.5 3.5 1.8-1.8a2.5 2.5 0 0 0-3.5-3.5L41 26z" fill={AMBER_DEEP} />
    </>
  ),
  "pivot-analizi": (
    <>
      <rect x="5" y="6" width="38" height="36" rx="5" fill={NAVY} />
      <path d="M9 14h30" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path d="M9 24h30" stroke={BLUE_PALE} strokeWidth="2" strokeLinecap="round" />
      <path d="M9 34h30" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path
        d="M10 24h7l3.5-6 4 12 3.5-6h10"
        stroke={AMBER}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24.5" cy="24" r="2.6" fill={AMBER} />
    </>
  ),
  "oran-analizi": (
    <>
      <circle cx="24" cy="24" r="19" fill={BLUE} />
      <circle cx="24" cy="24" r="14.5" fill={BLUE_MID} />
      <circle cx="17.5" cy="17.5" r="4.2" fill={LIGHT} />
      <circle cx="30.5" cy="30.5" r="4.2" fill={AMBER} />
      <path
        d="M15 33L33 15"
        stroke={LIGHT}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </>
  ),
  "tedbirli-hisseler": (
    <>
      <path
        d="M24 4l16 6.5v9.8c0 9.6-6.8 15.4-16 18.7-9.2-3.3-16-9.1-16-18.7v-9.8L24 4z"
        fill={BLUE}
      />
      <path
        d="M24 4l16 6.5v9.8c0 9.6-6.8 15.4-16 18.7V4z"
        fill={NAVY}
      />
      <circle cx="24" cy="21" r="8" fill={AMBER} />
      <path
        d="M24 16.5v5.5M24 25.6h.01"
        stroke={AMBER_DARK}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </>
  ),

  // --- Halka Arz ---
  "onayli-izahnameler": (
    <>
      <path d="M9 4h22l8 8v32H9V4z" fill={LIGHT} />
      <path d="M31 4l8 8h-8V4z" fill={BLUE_PALE} />
      <rect x="14" y="17" width="19" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="14" y="23" width="19" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="14" y="29" width="12" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <circle cx="33" cy="36" r="8.5" fill={GREEN} />
      <path
        d="M29 36l3 3 5-5.5"
        stroke={LIGHT}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  "taslak-izahnameler": (
    <>
      <path d="M9 4h22l8 8v32H9V4z" fill={LIGHT} />
      <path d="M31 4l8 8h-8V4z" fill={BLUE_PALE} />
      <path
        d="M14 18.3h19M14 24.3h19M14 30.3h11"
        stroke={BLUE_SOFT}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="4.5 3.5"
      />
      <path d="M42 27L31 38l-1.5 5 5-1.5 11-11-3.5-3.5z" fill={AMBER} />
      <path d="M42 27l3.5 3.5 1.6-1.6a2.5 2.5 0 0 0-3.5-3.5L42 27z" fill={AMBER_DEEP} />
    </>
  ),

  // --- Temettü ---
  "temettu-egitimi": (
    <>
      <circle cx="24" cy="11" r="7" fill={AMBER} />
      <path
        d="M24 7.5v7M22 9h2.8a1.6 1.6 0 1 1 0 3.2h-1.6a1.6 1.6 0 1 0 0 3.2h3.2"
        stroke={AMBER_DARK}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M6 21c5-2.5 11-2.5 16 0v21c-5-2.5-11-2.5-16 0V21z" fill={BLUE} />
      <path d="M42 21c-5-2.5-11-2.5-16 0v21c5-2.5 11-2.5 16 0V21z" fill={BLUE_MID} />
      <path d="M24 21v21" stroke={NAVY} strokeWidth="2" />
      <path
        d="M10 26.5c2.8-.9 5.6-1.1 8-.6M10 31.5c2.8-.9 5.6-1.1 8-.6"
        stroke={LIGHT}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "temettu-takvim": (
    <>
      <rect x="5" y="9" width="33" height="31" rx="5" fill={LIGHT} />
      <path d="M5 14a5 5 0 0 1 5-5h23a5 5 0 0 1 5 5v6H5v-6z" fill={BLUE} />
      <rect x="12" y="5" width="3.6" height="8" rx="1.8" fill={NAVY} />
      <rect x="27.4" y="5" width="3.6" height="8" rx="1.8" fill={NAVY} />
      <rect x="11" y="25" width="5" height="5" rx="1.4" fill={BLUE_PALE} />
      <rect x="19" y="25" width="5" height="5" rx="1.4" fill={BLUE_SOFT} />
      <rect x="11" y="33" width="5" height="5" rx="1.4" fill={BLUE_PALE} />
      <circle cx="35" cy="34" r="9" fill={AMBER} />
      <path
        d="M35 29.5v9M32.5 31.3h3.6a1.8 1.8 0 1 1 0 3.6h-2.2a1.8 1.8 0 1 0 0 3.6h4.1"
        stroke={AMBER_DARK}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),

  // --- Fonlar ---
  "menkul-kiymet-fonlari": (
    <>
      <rect x="5" y="14" width="38" height="28" rx="5" fill={BLUE} />
      <path d="M5 19a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v5H5v-5z" fill={NAVY} />
      <path d="M18 14v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3h-4v-2.5h-4V14h-4z" fill={NAVY} />
      <rect x="20" y="21" width="8" height="6" rx="2" fill={AMBER} />
      <path
        d="M11 35.5l5-5 4.5 3 6-7 5.5 4 5-5.5"
        stroke={LIGHT}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  "emeklilik-fonlari": (
    <>
      <path d="M24 5C13 5 5 13 5 23h38C43 13 35 5 24 5z" fill={BLUE} />
      <path d="M24 5c11 0 19 8 19 18H24V5z" fill={NAVY} />
      <path d="M12 23c0-6 5-10 12-10s12 4 12 10" fill={BLUE_MID} />
      <path d="M24 23v13a4 4 0 0 1-8 0" stroke={NAVY} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <circle cx="33" cy="37" r="7.5" fill={AMBER} />
      <path
        d="M33 33.5v7M31 35h2.8a1.6 1.6 0 1 1 0 3.2h-1.6a1.6 1.6 0 1 0 0 3.2h3.2"
        stroke={AMBER_DARK}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "borsa-yatirim-fonlari": (
    <>
      <rect x="12" y="6" width="4.6" height="9" rx="1.4" fill={GREEN} />
      <rect x="13.7" y="3.5" width="1.2" height="14" rx="0.6" fill={GREEN} />
      <rect x="21.5" y="8" width="4.6" height="8" rx="1.4" fill={RED} />
      <rect x="23.2" y="5.5" width="1.2" height="13" rx="0.6" fill={RED} />
      <rect x="31" y="5" width="4.6" height="10" rx="1.4" fill={GREEN} />
      <rect x="32.7" y="2.5" width="1.2" height="15" rx="0.6" fill={GREEN} />
      <path d="M7 20h34l-3.5 22h-27L7 20z" fill={BLUE} />
      <path d="M24 20h17l-3.5 22H24V20z" fill={NAVY} />
      <rect x="5" y="17" width="38" height="6" rx="3" fill={BLUE_MID} />
      <path
        d="M17 29v6M24 29v6M31 29v6"
        stroke={LIGHT}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </>
  ),
  "fon-haftalik-tercih": (
    <>
      <rect x="6" y="5" width="30" height="38" rx="5" fill={LIGHT} />
      <rect x="6" y="5" width="30" height="8" rx="4" fill={BLUE} />
      <circle cx="13" cy="20" r="2.2" fill={NAVY} />
      <rect x="18" y="18.6" width="13" height="2.8" rx="1.4" fill={BLUE_SOFT} />
      <circle cx="13" cy="28" r="2.2" fill={NAVY} />
      <rect x="18" y="26.6" width="13" height="2.8" rx="1.4" fill={BLUE_SOFT} />
      <circle cx="13" cy="36" r="2.2" fill={NAVY} />
      <rect x="18" y="34.6" width="10" height="2.8" rx="1.4" fill={BLUE_SOFT} />
      <path
        d="M36 22l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L36 22z"
        fill={AMBER}
      />
    </>
  ),
  "fon-getiri": (
    <>
      <circle cx="17" cy="29" r="13" fill={NAVY} />
      <path d="M17 16a13 13 0 0 1 13 13H17V16z" fill={BLUE_MID} />
      <path d="M17 29l9.2 9.2A13 13 0 0 1 17 42V29z" fill={BLUE_SOFT} />
      <path
        d="M27 17L41 7"
        stroke={GREEN}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M35.5 6l5.5-.5.5 5.5"
        stroke={GREEN}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="38" cy="33" r="8" fill={AMBER} />
      <path
        d="M35 36l6-6M35.6 30.6h.01M40.4 35.4h.01"
        stroke={AMBER_DARK}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  "fon-tarihsel": (
    <>
      <rect x="6" y="26" width="6" height="15" rx="1.6" fill={BLUE_SOFT} />
      <rect x="15" y="20" width="6" height="21" rx="1.6" fill={BLUE_MID} />
      <rect x="24" y="14" width="6" height="27" rx="1.6" fill={BLUE} />
      <circle cx="35" cy="14" r="10" fill={NAVY} />
      <circle cx="35" cy="14" r="7" fill={LIGHT} />
      <path
        d="M35 10v4l3 2"
        stroke={NAVY}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  "fon-etki-analizi": (
    <>
      <circle cx="24" cy="26" r="12" fill={AMBER} />
      <circle cx="24" cy="26" r="8.5" fill={AMBER_DEEP} />
      <path
        d="M24 21.5v9M21.5 23.3h3.6a1.8 1.8 0 1 1 0 3.6h-2.2a1.8 1.8 0 1 0 0 3.6h4.1"
        stroke={AMBER_DARK}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M8 16l5-9M13 7l-5.5.8M13 7l.8 5.5" stroke={GREEN} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M40 32l-5 9M35 41l5.5-.8M35 41l-.8-5.5" stroke={RED} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),

  // --- Faiz Oranları ---
  "mevduat-faizi": (
    <>
      <rect x="6" y="6" width="36" height="34" rx="6" fill={NAVY} />
      <rect x="10" y="10" width="28" height="26" rx="4" fill={BLUE} />
      <circle cx="24" cy="23" r="9" fill={LIGHT} />
      <circle cx="24" cy="23" r="3.2" fill={AMBER} />
      <path
        d="M24 14.5v3M24 28.5v3M15.5 23h3M29.5 23h3M18 17l2.1 2.1M30 29l-2.1-2.1M30 17l-2.1 2.1M18 29l2.1-2.1"
        stroke={BLUE}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="14" y="42" width="8" height="3" rx="1.5" fill={NAVY} />
      <rect x="26" y="42" width="8" height="3" rx="1.5" fill={NAVY} />
    </>
  ),
  "tuketici-faizi": (
    <>
      <rect x="5" y="10" width="36" height="30" rx="5" fill={BLUE} />
      <path d="M5 15a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v3H5v-3z" fill={NAVY} />
      <path d="M41 22h-12a4 4 0 0 0 0 8h12v-8z" fill={NAVY} />
      <circle cx="30" cy="26" r="2.2" fill={AMBER} />
      <circle cx="13" cy="34" r="4.5" fill={AMBER} />
      <path
        d="M13 31.8v4.4M11.7 32.9h1.8a1 1 0 1 1 0 2h-1.1a1 1 0 1 0 0 2h2"
        stroke={AMBER_DARK}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "konut-kredisi": (
    <>
      <path d="M24 5L44 21h-6v19H10V21H4L24 5z" fill={BLUE} />
      <path d="M24 5l20 16h-6v19H24V5z" fill={NAVY} />
      <rect x="19" y="28" width="10" height="12" rx="1.5" fill={LIGHT} />
      <circle cx="36" cy="12" r="8.5" fill={AMBER} />
      <path
        d="M33 15l6-6M33.6 9.6h.01M38.4 14.4h.01"
        stroke={AMBER_DARK}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  "tasit-kredisi": (
    <>
      <path d="M8 26l4-9a4 4 0 0 1 3.7-2.5h16.6A4 4 0 0 1 36 17l4 9v10a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2H15v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V26z" fill={BLUE} />
      <path d="M24 14.5h8.3A4 4 0 0 1 36 17l4 9v10a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2h-9V14.5z" fill={NAVY} />
      <path d="M13 17.5l-2.5 6h27l-2.5-6a2 2 0 0 0-1.9-1.3H14.9a2 2 0 0 0-1.9 1.3z" fill={BLUE_PALE} />
      <circle cx="15" cy="29.5" r="2.6" fill={LIGHT} />
      <circle cx="33" cy="29.5" r="2.6" fill={LIGHT} />
      <circle cx="37" cy="10" r="8" fill={AMBER} />
      <path
        d="M34.2 12.8l5.6-5.6M34.8 8h.01M39.2 12.4h.01"
        stroke={AMBER_DARK}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),

  // --- Hesaplayıcılar ---
  "bilesik-faiz": (
    <>
      <rect x="6" y="32" width="9" height="9" rx="1.5" fill={AMBER_DEEP} />
      <rect x="6" y="28" width="9" height="3" rx="1.5" fill={AMBER} />
      <rect x="19" y="26" width="9" height="15" rx="1.5" fill={AMBER_DEEP} />
      <rect x="19" y="22" width="9" height="3" rx="1.5" fill={AMBER} />
      <rect x="32" y="18" width="9" height="23" rx="1.5" fill={AMBER_DEEP} />
      <rect x="32" y="14" width="9" height="3" rx="1.5" fill={AMBER} />
      <path
        d="M7 18C14 16 22 12 30 6"
        stroke={GREEN}
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M25 5.5l5.5-.5 0 5.5"
        stroke={GREEN}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  enflasyon: (
    <>
      <path d="M8 14l10-8 22 22-10 10L8 16v-2z" fill={BLUE} />
      <path d="M18 6l22 22-5 5L13 11l5-5z" fill={NAVY} />
      <circle cx="16" cy="14" r="2.5" fill={LIGHT} />
      <path
        d="M28 40c4-1 7-1 12 0M40 36l3 4-4 3"
        stroke={RED}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M36 14l4-8 4 8a4.5 4.5 0 1 1-8 0z" fill={AMBER} />
    </>
  ),
  "kar-zarar": (
    <>
      <rect x="8" y="4" width="32" height="40" rx="5" fill={NAVY} />
      <rect x="12" y="8" width="24" height="9" rx="2" fill={LIGHT} />
      <rect x="12" y="21" width="10" height="8" rx="2" fill={GREEN} />
      <path d="M17 23v4M15 25h4" stroke={LIGHT} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="26" y="21" width="10" height="8" rx="2" fill={RED} />
      <path d="M29 25h4" stroke={LIGHT} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="12" y="32" width="10" height="8" rx="2" fill={BLUE_MID} />
      <rect x="26" y="32" width="10" height="8" rx="2" fill={AMBER} />
      <path d="M29 34.8h4M29 37.2h4" stroke={AMBER_DARK} strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  "ortalama-maliyet": (
    <>
      <rect x="8" y="4" width="32" height="40" rx="5" fill={BLUE} />
      <rect x="12" y="8" width="24" height="9" rx="2" fill={LIGHT} />
      <path
        d="M15 13.5l3-3 2.5 2 3.5-4"
        stroke={BLUE}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="12" y="21" width="6.6" height="9" rx="1.8" fill={BLUE_PALE} />
      <rect x="20.7" y="21" width="6.6" height="14" rx="1.8" fill={LIGHT} />
      <rect x="29.4" y="21" width="6.6" height="6" rx="1.8" fill={BLUE_PALE} />
      <path
        d="M11 31h26"
        stroke={AMBER}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="4 3.5"
      />
    </>
  ),
  "sermaye-artirimi": (
    <>
      <rect x="16" y="5" width="16" height="14" rx="3" fill={NAVY} />
      <path
        d="M24 22v4M24 26l-9 5M24 26l9 5"
        stroke={BLUE_MID}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect x="5" y="32" width="14" height="11" rx="3" fill={BLUE} />
      <rect x="29" y="32" width="14" height="11" rx="3" fill={BLUE} />
      <path d="M22 9.5h4M24 7.5v4" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  "tahvil-eurobond": (
    <>
      <rect x="6" y="7" width="36" height="28" rx="4" fill={LIGHT} />
      <rect x="6" y="7" width="36" height="28" rx="4" stroke={BLUE_PALE} strokeWidth="2" fill="none" />
      <rect x="12" y="14" width="15" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="12" y="20" width="15" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="12" y="26" width="9" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <circle cx="34" cy="31" r="7.5" fill={AMBER} />
      <circle cx="34" cy="31" r="4.8" fill={AMBER_DEEP} />
      <path d="M31 36.5l-2.5 7 5.5-3 5.5 3-2.5-7" fill={BLUE} />
    </>
  ),
  "kira-artis": (
    <>
      <path d="M19 13L5 24h4v16h20V24h4L19 13z" fill={BLUE} />
      <rect x="15" y="29" width="8" height="11" rx="1.5" fill={LIGHT} />
      <path
        d="M31 30c4-3 6-7 7-13"
        stroke={GREEN}
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M33.5 17.5l4.5-1.5 1.5 4.5"
        stroke={GREEN}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="40" cy="36" r="6.5" fill={AMBER} />
      <path
        d="M40 33v6M38.3 34.5h2.4a1.4 1.4 0 1 1 0 2.8h-1.5a1.4 1.4 0 1 0 0 2.8h2.7"
        stroke={AMBER_DARK}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  vergi: (
    <>
      <path d="M9 4h22l8 8v32H9V4z" fill={LIGHT} />
      <path d="M31 4l8 8h-8V4z" fill={BLUE_PALE} />
      <rect x="14" y="18" width="19" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="14" y="24" width="19" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <rect x="14" y="30" width="11" height="2.6" rx="1.3" fill={BLUE_SOFT} />
      <circle cx="33" cy="36" r="8.5" fill={AMBER} />
      <path
        d="M30 39l6-6M30.6 33.6h.01M35.4 38.4h.01"
        stroke={AMBER_DARK}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  "kidem-tazminati": (
    <>
      <rect x="5" y="14" width="38" height="28" rx="5" fill={BLUE} />
      <path d="M5 19a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v5H5v-5z" fill={NAVY} />
      <path d="M18 14v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3h-4v-2.5h-4V14h-4z" fill={NAVY} />
      <rect x="20" y="21" width="8" height="6" rx="2" fill={BLUE_MID} />
      <circle cx="33" cy="34" r="8" fill={AMBER} />
      <path
        d="M33 30v8M30.8 31.7h3.2a1.7 1.7 0 1 1 0 3.4h-2a1.7 1.7 0 1 0 0 3.4h3.7"
        stroke={AMBER_DARK}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  altin: (
    <>
      <path d="M14 30h12l3 10H11l3-10z" fill={AMBER_DEEP} />
      <path d="M26 30h-6l3 10h6l-3-10z" fill={AMBER} />
      <path d="M28 30h12l3 10H25l3-10z" fill={AMBER_DEEP} />
      <path d="M40 30h-6l3 10h6l-3-10z" fill={AMBER} />
      <path d="M21 17h12l3 10H18l3-10z" fill={AMBER_DEEP} />
      <path d="M33 17h-6l3 10h6l-3-10z" fill={AMBER} />
      <path
        d="M10 12l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3z"
        fill={BLUE_MID}
      />
      <path
        d="M40 5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z"
        fill={BLUE_SOFT}
      />
    </>
  ),
  doviz: (
    <>
      <path d="M24 5a19 19 0 0 1 18 13h-5.5A14 14 0 0 0 24 10.5V5z" fill={BLUE_MID} />
      <path d="M24 43A19 19 0 0 1 6 30h5.5A14 14 0 0 0 24 37.5V43z" fill={BLUE_MID} />
      <path d="M42 7v9h-9l9-9z" fill={BLUE} />
      <path d="M6 41v-9h9l-9 9z" fill={BLUE} />
      <circle cx="17" cy="20" r="9" fill={AMBER} />
      <path
        d="M17 15.5v9M14.7 17.3h3.4a1.7 1.7 0 1 1 0 3.4h-2.1a1.7 1.7 0 1 0 0 3.4h3.9"
        stroke={AMBER_DARK}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="31" cy="29" r="9" fill={NAVY} />
      <path
        d="M33.5 25.5a4 4 0 0 0-5.5 1c-1.2 1.8-1 4.5.5 6a4 4 0 0 0 5 .5M27 28h4.5M27 30.5h4.5"
        stroke={LIGHT}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
};

export function CategoryIcon({
  name,
  className,
}: {
  name: CategoryIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

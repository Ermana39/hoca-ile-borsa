const AD_BLOCKING_RECOVERY_SCRIPT_SRC =
  "https://fundingchoicesmessages.google.com/i/pub-9613627671991162?ers=1";

// AdSense > Privacy & messaging > Ad blocking recovery > Tagging çıktısı.
const GOOGLE_FC_PRESENT_SCRIPT =
  "(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();";

/**
 * Google AdSense Privacy & messaging tarafından kullanılan resmi reklam
 * engelleyici kurtarma etiketi. Mesajın metni, görünümü ve yayın durumu
 * AdSense panelinden yönetilir; burada ikinci bir tespit sistemi çalıştırılmaz.
 */
export default function AdBlockingRecoveryTag() {
  return (
    <>
      <script async src={AD_BLOCKING_RECOVERY_SCRIPT_SRC} />
      <script dangerouslySetInnerHTML={{ __html: GOOGLE_FC_PRESENT_SCRIPT }} />
    </>
  );
}

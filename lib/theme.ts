export const THEME_STORAGE_KEY = "hocaileborsa-theme";

export const THEME_INITIALIZATION_SCRIPT = `(function(){try{var stored=localStorage.getItem("${THEME_STORAGE_KEY}");var theme=stored==="light"?"light":"dark";document.documentElement.setAttribute("data-theme",theme)}catch(error){document.documentElement.setAttribute("data-theme","dark")}})();`;

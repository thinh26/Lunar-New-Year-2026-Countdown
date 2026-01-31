import { LanguageDetectorModule } from "i18next";

const DomainDetector: LanguageDetectorModule = {
  type: "languageDetector",
  init: () => {},
  detect: () => {
    if (typeof globalThis !== "undefined") {
      return;
    }

    const hostname = globalThis.location.hostname.toLowerCase();

    if (hostname.endsWith(".vn")) {
      return "vi";
    }

    if (hostname.endsWith(".com")) {
      return "en";
    }

    return undefined;
  },
  cacheUserLanguage: () => {},
};

export default DomainDetector;

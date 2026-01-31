import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import viTranslations from "./locales/vi.json";
import DomainDetector from "./plugin/DomainDetector";

i18n
  .use(initReactI18next)
  .use(DomainDetector)
  // .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "vi"],
    detection: {
      lookupLocalStorage: "language",
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      vi: {
        translation: viTranslations,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

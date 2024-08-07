import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tr from "./locales/tr.json";
import en from "./locales/en.json";

const resources = {
  tr: {
    translations: tr,
  },
  en: {
    translations: en,
  },
};

const options = {
  resources,
  ns: ["translations"],
  defaultNS: "translations",
  fallbackLng: "tr",
  lng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;

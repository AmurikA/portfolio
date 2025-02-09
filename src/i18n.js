import i18n from "i18next";
import translationEN from './locales/en/translation.json';
import translationUK from "./locales/ua/translation.json";
import { initReactI18next } from "react-i18next";

const getLanguageFromURL = () => {
  const lang = window.location.pathname.split("/")[1];
  return ["en", "uk"].includes(lang) ? lang : "en"; // Перевіряємо, чи є мова в URL
};

const resources = {
  en: { translation: translationEN },
  uk: { translation: translationUK }
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageFromURL(),
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;

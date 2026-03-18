import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend) // Load translations from public/locales
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        fallbackLng: "en", // Default language
        debug: false,

        interpolation: {
            escapeValue: false, // React already escapes
        },

        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
    });

export default i18n;

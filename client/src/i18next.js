import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "";
const loadPath = ``;

i18next.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en",
    debug: true,

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","hi","af","id"],
    
    backend: {
      loadPath: loadPath
    }
  })

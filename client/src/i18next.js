import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "ty9f2OtSRbRitb5p2Gd6Aw";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

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
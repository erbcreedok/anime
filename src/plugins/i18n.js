import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '../locale/ru'
import kk from '../locale/kk'
import en from '../locale/en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
      ru,
      kk,
      en,
    },
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n;

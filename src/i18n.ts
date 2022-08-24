import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './translations/en.json'
import esTranslations from './translations/es.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: 'en',
  fallbackLng: ['es', 'en'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

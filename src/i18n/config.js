import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./locates/en/translation.json')
    },
    es: {
      translations: require('./locates/es/translation.json')
    },
    fr: {
      translations: require('./locates/fr/translation.json')
    },
    it: {
      translations: require('./locates/it/translation.json')
    },
    de: {
      translations: require('./locates/de/translation.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'es', 'fr', 'it','de'];

export default i18n;
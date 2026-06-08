import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  defaultLanguage,
  detectDefaultLanguage,
  supportedLanguages,
} from './language';
import { resources } from './resources';

void i18n.use(initReactI18next).init({
  resources,
  lng: detectDefaultLanguage(),
  fallbackLng: defaultLanguage,
  supportedLngs: [...supportedLanguages],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export { i18n };

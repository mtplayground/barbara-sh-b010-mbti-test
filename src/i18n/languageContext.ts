import { createContext } from 'react';
import type { Language } from './language';

export interface LanguageContextValue {
  language: Language;
  supportedLanguages: readonly Language[];
  setLanguage: (language: Language) => Promise<void>;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { i18n } from './setup';
import { LanguageContext } from './languageContext';
import {
  defaultLanguage,
  normalizeLanguage,
  supportedLanguages,
} from './language';
import type { Language } from './language';

interface LanguageProviderProps {
  children: ReactNode;
}

function getActiveLanguage(): Language {
  return (
    normalizeLanguage(i18n.resolvedLanguage) ??
    normalizeLanguage(i18n.language) ??
    defaultLanguage
  );
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() =>
    getActiveLanguage(),
  );

  useEffect(() => {
    const handleLanguageChanged = (nextLanguage: string) => {
      setLanguageState(normalizeLanguage(nextLanguage) ?? defaultLanguage);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback(async (nextLanguage: Language) => {
    await i18n.changeLanguage(nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      supportedLanguages,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

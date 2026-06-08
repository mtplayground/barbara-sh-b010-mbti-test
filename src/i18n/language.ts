export const supportedLanguages = ['en', 'zh-CN'] as const;

export type Language = (typeof supportedLanguages)[number];

export const defaultLanguage: Language = 'en';
export const languageStorageKey = 'mbti-test.language';

export function normalizeLanguage(language: string | null | undefined) {
  if (!language) {
    return undefined;
  }

  const normalized = language.toLowerCase();

  if (normalized === 'zh-cn' || normalized.startsWith('zh')) {
    return 'zh-CN';
  }

  if (normalized.startsWith('en')) {
    return 'en';
  }

  return undefined;
}

function getLocalStorage() {
  if (typeof window === 'undefined') {
    return undefined;
  }

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

export function readLanguagePreference() {
  const storage = getLocalStorage();

  if (!storage) {
    return undefined;
  }

  try {
    return normalizeLanguage(storage.getItem(languageStorageKey));
  } catch {
    return undefined;
  }
}

export function saveLanguagePreference(language: Language) {
  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(languageStorageKey, language);
  } catch {
    return;
  }
}

export function detectDefaultLanguage(): Language {
  const storedLanguage = readLanguagePreference();

  if (storedLanguage) {
    return storedLanguage;
  }

  const browserLanguages =
    typeof navigator === 'undefined'
      ? []
      : [navigator.language, ...navigator.languages];

  const documentLanguage =
    typeof document === 'undefined' ? undefined : document.documentElement.lang;

  const detectedLanguage = [documentLanguage, ...browserLanguages]
    .map((language) => normalizeLanguage(language))
    .find((language) => language !== undefined);

  return detectedLanguage ?? defaultLanguage;
}

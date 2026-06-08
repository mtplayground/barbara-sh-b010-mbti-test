export const supportedLanguages = ['en', 'zh-CN'] as const;

export type Language = (typeof supportedLanguages)[number];

export const defaultLanguage: Language = 'en';

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

export function detectDefaultLanguage(): Language {
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

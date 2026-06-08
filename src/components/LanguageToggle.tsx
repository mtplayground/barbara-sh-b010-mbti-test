import { useTranslation } from 'react-i18next';
import { useLanguage } from '../i18n';
import type { Language } from '../i18n';

const languageOptions = [
  { language: 'en', labelKey: 'languageToggle.en', shortLabel: 'EN' },
  { language: 'zh-CN', labelKey: 'languageToggle.zhCN', shortLabel: '中文' },
] as const satisfies readonly {
  language: Language;
  labelKey: string;
  shortLabel: string;
}[];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageSelect = (nextLanguage: Language) => {
    if (nextLanguage !== language) {
      void setLanguage(nextLanguage);
    }
  };

  return (
    <div
      className="inline-flex w-fit shrink-0 rounded-full border border-indigo-100 bg-white/70 p-1"
      role="group"
      aria-label={t('languageToggle.label')}
    >
      {languageOptions.map((option) => {
        const isActive = option.language === language;

        return (
          <button
            key={option.language}
            type="button"
            className={[
              'inline-flex min-w-14 justify-center rounded-full px-3 py-2 text-sm font-semibold transition focus-visible:ring-3 focus-visible:ring-indigo-300 focus-visible:outline-none',
              isActive
                ? 'bg-sky-600 text-white shadow-[var(--shadow-accent)]'
                : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700',
            ].join(' ')}
            aria-label={t(option.labelKey)}
            aria-pressed={isActive}
            onClick={() => {
              handleLanguageSelect(option.language);
            }}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

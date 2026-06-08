import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
        {t('about.eyebrow')}
      </p>
      <h1>{t('about.title')}</h1>
      <p className="mt-6 max-w-2xl text-balance">{t('about.description')}</p>
      <section
        className="mt-8 max-w-2xl rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur"
        aria-labelledby="disclaimer-title"
      >
        <h2
          id="disclaimer-title"
          className="text-xl font-bold text-slate-950 sm:text-2xl"
        >
          {t('disclaimer.title')}
        </h2>
        <p className="mt-3">{t('disclaimer.full')}</p>
      </section>
    </section>
  );
}

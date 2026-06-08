import { useTranslation } from 'react-i18next';

const aboutSectionKeys = [
  {
    titleKey: 'about.informalTitle',
    bodyKey: 'about.informalBody',
  },
  {
    titleKey: 'about.notOfficialTitle',
    bodyKey: 'about.notOfficialBody',
  },
] as const;

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 py-10 md:py-16">
      <section>
        <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
          {t('about.eyebrow')}
        </p>
        <h1>{t('about.title')}</h1>
        <p className="mt-6 max-w-3xl text-balance text-slate-700">
          {t('about.description')}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {aboutSectionKeys.map((section) => (
          <article
            key={section.titleKey}
            className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-7"
          >
            <h2 className="text-2xl font-black text-slate-950">
              {t(section.titleKey)}
            </h2>
            <p className="mt-4 text-slate-700">{t(section.bodyKey)}</p>
          </article>
        ))}
      </section>

      <section
        className="rounded-3xl border border-amber-200 bg-amber-50/90 p-5 text-amber-950 shadow-[var(--shadow-soft)] sm:p-7"
        aria-labelledby="disclaimer-title"
      >
        <h2
          id="disclaimer-title"
          className="text-2xl font-black text-amber-950"
        >
          {t('disclaimer.title')}
        </h2>
        <p className="mt-4 text-amber-950">{t('disclaimer.full')}</p>
      </section>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { dimensionDefinitions, totalQuestionCount } from '../data';
import { useLanguage } from '../i18n';

export function HomePage() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 py-10 md:py-16">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
            {t('home.eyebrow')}
          </p>
          <h1 id="app-title">{t('app.title')}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-balance text-slate-700">
            {t('home.subtitle')}
          </p>
          <p className="mt-5 max-w-2xl text-balance text-slate-600">
            {t('home.description', {
              count: totalQuestionCount,
            })}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/test"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-indigo-600 px-7 text-base font-bold text-white shadow-[var(--shadow-accent)] transition hover:bg-indigo-700 focus-visible:ring-3 focus-visible:ring-indigo-300 focus-visible:outline-none"
            >
              {t('actions.startTest')}
            </Link>
          </div>
        </div>

        <aside
          className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7"
          aria-label={t('home.summaryLabel')}
        >
          <dl className="grid gap-5">
            <div>
              <dt className="text-sm font-semibold text-slate-500">
                {t('home.questionCountLabel')}
              </dt>
              <dd className="mt-1 text-4xl font-black text-slate-950">
                {totalQuestionCount}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">
                {t('home.formatLabel')}
              </dt>
              <dd className="mt-1 text-xl font-semibold text-slate-950">
                {t('home.formatValue')}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">
                {t('home.languageLabel')}
              </dt>
              <dd className="mt-1 text-xl font-semibold text-slate-950">
                {t('home.languageValue')}
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section aria-labelledby="dimensions-title">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
            {t('home.dimensionsEyebrow')}
          </p>
          <h2
            id="dimensions-title"
            className="mt-3 text-3xl leading-tight font-black text-slate-950 sm:text-4xl"
          >
            {t('home.dimensionsTitle')}
          </h2>
          <p className="mt-4 text-slate-600">{t('home.dimensionsIntro')}</p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {dimensionDefinitions.map((definition) => (
            <article
              key={definition.dimension}
              className="rounded-3xl border border-indigo-100 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <p className="text-sm font-black tracking-[0.18em] text-indigo-700">
                {definition.poles.join(' / ')}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">
                {definition.label[language]}
              </h3>
              <p className="mt-3 text-slate-600">
                {definition.description[language]}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

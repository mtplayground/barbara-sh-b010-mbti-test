import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
          {t('home.eyebrow')}
        </p>
        <h1 id="app-title">{t('app.title')}</h1>
        <p className="mt-6 max-w-2xl text-balance">{t('home.description')}</p>
      </div>

      <aside
        className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur"
        aria-label={t('home.designDirection')}
      >
        <dl className="grid gap-5">
          <div>
            <dt className="text-sm font-semibold text-slate-500">
              {t('home.visualToneLabel')}
            </dt>
            <dd className="mt-1 text-xl font-semibold text-slate-950">
              {t('home.visualToneValue')}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500">
              {t('home.layoutLabel')}
            </dt>
            <dd className="mt-1 text-xl font-semibold text-slate-950">
              {t('home.layoutValue')}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500">
              {t('home.accentsLabel')}
            </dt>
            <dd className="mt-1 text-xl font-semibold text-slate-950">
              {t('home.accentsValue')}
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}

import { useTranslation } from 'react-i18next';

export function ResultPage() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
        {t('result.eyebrow')}
      </p>
      <h1>{t('result.title')}</h1>
      <p className="mt-6 max-w-2xl text-balance">{t('result.description')}</p>
    </section>
  );
}

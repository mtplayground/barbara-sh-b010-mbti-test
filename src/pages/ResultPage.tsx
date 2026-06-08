import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { dimensionDefinitions, typeProfileMap } from '../data';
import { useLanguage } from '../i18n';
import { readTestProgress, scoreAnswers } from '../lib';
import type { DimensionScore } from '../lib';

function getDimensionDefinition(score: DimensionScore) {
  return dimensionDefinitions.find(
    (definition) => definition.dimension === score.dimension,
  );
}

export function ResultPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const result = useMemo(() => {
    const progress = readTestProgress();

    return scoreAnswers(progress.answers);
  }, []);

  const isComplete = result.answeredCount === result.totalQuestionCount;
  const profile = typeProfileMap[result.typeCode];

  if (!isComplete) {
    return (
      <section className="mx-auto w-full max-w-4xl py-12 md:py-20">
        <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
          {t('result.eyebrow')}
        </p>
        <h1>{t('result.title')}</h1>
        <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50/90 p-5 text-amber-950 shadow-sm">
          <p className="text-lg font-bold">
            {t('validation.resultUnavailable')}
          </p>
          <p className="mt-2 text-sm">
            {t('labels.completed')}: {result.answeredCount}/
            {result.totalQuestionCount}
          </p>
        </div>
        <Link
          to="/test"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-600 px-6 text-sm font-bold text-white shadow-[var(--shadow-accent)] transition hover:bg-indigo-700 focus-visible:ring-3 focus-visible:ring-indigo-300 focus-visible:outline-none"
        >
          {t('actions.continueTest')}
        </Link>
      </section>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-10 md:py-16">
      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
            {t('result.eyebrow')}
          </p>
          <p className="text-sm font-bold text-slate-500">
            {t('labels.personalityType')}
          </p>
          <h1 className="mt-2 text-6xl leading-none font-black tracking-normal text-slate-950 sm:text-7xl">
            {result.typeCode}
          </h1>
          <p className="mt-4 text-3xl font-bold text-indigo-700">
            {profile.title[language]}
          </p>
        </div>

        <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7">
          <h2 className="text-2xl font-black text-slate-950">
            {t('result.interpretationTitle')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {profile.summary[language]}
          </p>
        </div>
      </section>

      <section
        className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7"
        aria-labelledby="score-breakdown-title"
      >
        <div className="max-w-3xl">
          <h2
            id="score-breakdown-title"
            className="text-2xl font-black text-slate-950"
          >
            {t('labels.scoreBreakdown')}
          </h2>
          <p className="mt-3 text-slate-600">{t('result.breakdownIntro')}</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {result.dimensionScores.map((dimensionScore) => {
            const definition = getDimensionDefinition(dimensionScore);
            const scoreTotal = dimensionScore.scores.reduce(
              (total, score) => total + score.score,
              0,
            );

            return (
              <article
                key={dimensionScore.dimension}
                className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black tracking-[0.18em] text-indigo-700">
                      {dimensionScore.dimension}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-slate-950">
                      {definition?.label[language] ?? dimensionScore.dimension}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-indigo-700">
                    {dimensionScore.selectedPole}
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {dimensionScore.scores.map((score) => {
                    const width =
                      scoreTotal > 0
                        ? Math.round((score.score / scoreTotal) * 100)
                        : 0;

                    return (
                      <div key={score.pole}>
                        <div className="mb-1 flex items-center justify-between gap-3 text-sm font-bold text-slate-700">
                          <span>{score.pole}</span>
                          <span>{score.score}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white">
                          <div
                            className={[
                              'h-full rounded-full transition-[width] duration-500 ease-out',
                              score.pole === dimensionScore.selectedPole
                                ? 'bg-indigo-600'
                                : 'bg-sky-300',
                            ].join(' ')}
                            style={{ width: `${String(width)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <ResultListSection
          title={t('labels.strengths')}
          items={profile.strengths[language]}
        />
        <ResultListSection
          title={t('labels.challenges')}
          items={profile.challenges[language]}
        />
        <ResultTextSection
          title={t('labels.workStyle')}
          text={profile.workStyle[language]}
        />
        <ResultListSection
          title={t('labels.communicationTips')}
          items={profile.communicationTips[language]}
        />
      </section>
    </div>
  );
}

interface ResultListSectionProps {
  title: string;
  items: readonly string[];
}

function ResultListSection({ title, items }: ResultListSectionProps) {
  return (
    <article className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-7">
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-indigo-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

interface ResultTextSectionProps {
  title: string;
  text: string;
}

function ResultTextSection({ title, text }: ResultTextSectionProps) {
  return (
    <article className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-7">
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <p className="mt-4 leading-7 text-slate-700">{text}</p>
    </article>
  );
}

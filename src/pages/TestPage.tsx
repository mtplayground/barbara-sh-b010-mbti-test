import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QuestionCard } from '../components';
import { questionBank, totalQuestionCount } from '../data';
import type { LikertValue } from '../lib';

export function TestPage() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, LikertValue>>({});
  const currentQuestion = questionBank[currentIndex];

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const unansweredCount = totalQuestionCount - answeredCount;
  const completionPercent = Math.round(
    (answeredCount / totalQuestionCount) * 100,
  );
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestionCount - 1;

  const handleAnswerChange = (questionId: string, value: LikertValue) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: value,
    }));
  };

  const goToPreviousQuestion = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const goToNextQuestion = () => {
    setCurrentIndex((index) => Math.min(index + 1, totalQuestionCount - 1));
  };

  if (!currentQuestion) {
    return (
      <section className="mx-auto w-full max-w-4xl py-12 md:py-20">
        <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
          {t('test.eyebrow')}
        </p>
        <h1>{t('test.title')}</h1>
        <p className="mt-6 max-w-2xl text-balance text-slate-700">
          {t('status.loading')}
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 py-10 md:py-16">
      <div>
        <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
          {t('test.eyebrow')}
        </p>
        <h1>{t('test.title')}</h1>
        <p className="mt-5 max-w-2xl text-balance text-slate-700">
          {t('test.description')}
        </p>
      </div>

      <div className="space-y-3" aria-label={t('labels.progress')}>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-slate-700">
          <span>{t('labels.progress')}</span>
          <span>
            {t('labels.completed')}: {answeredCount}/{totalQuestionCount}
          </span>
        </div>
        <div
          className="h-3 overflow-hidden rounded-full bg-indigo-100"
          role="progressbar"
          aria-label={t('labels.progress')}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={completionPercent}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 transition-[width] duration-500 ease-out"
            style={{ width: `${String(completionPercent)}%` }}
          />
        </div>
        <p className="text-sm text-slate-600">
          {t('labels.unanswered')}: {unansweredCount}
        </p>
      </div>

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={totalQuestionCount}
        value={answers[currentQuestion.id]}
        onAnswerChange={handleAnswerChange}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="min-h-12 rounded-full border border-indigo-200 bg-white/85 px-6 text-sm font-bold text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={goToPreviousQuestion}
          disabled={isFirstQuestion}
        >
          {t('actions.previous')}
        </button>
        <p className="order-first text-center text-sm font-bold text-slate-600 sm:order-none">
          {t('labels.questionCount', {
            current: currentIndex + 1,
            total: totalQuestionCount,
          })}
        </p>
        <button
          type="button"
          className="min-h-12 rounded-full bg-indigo-600 px-6 text-sm font-bold text-white shadow-[var(--shadow-accent)] transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={goToNextQuestion}
          disabled={isLastQuestion}
        >
          {t('actions.next')}
        </button>
      </div>
    </section>
  );
}

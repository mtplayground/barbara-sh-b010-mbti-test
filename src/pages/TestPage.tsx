import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { QuestionCard } from '../components';
import { questionBank, totalQuestionCount } from '../data';
import { readTestProgress, saveTestProgress } from '../lib';
import type { LikertValue } from '../lib';

const validationMessageId = 'test-submit-validation';

export function TestPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(
    () => readTestProgress().currentIndex,
  );
  const [answers, setAnswers] = useState<Record<string, LikertValue>>(
    () => readTestProgress().answers,
  );
  const [showValidation, setShowValidation] = useState(false);
  const currentQuestion = questionBank[currentIndex];

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const missingQuestionIndexes = useMemo(
    () =>
      questionBank.reduce<number[]>((missingIndexes, question, index) => {
        if (answers[question.id] === undefined) {
          missingIndexes.push(index);
        }

        return missingIndexes;
      }, []),
    [answers],
  );
  const unansweredCount = totalQuestionCount - answeredCount;
  const completionPercent = Math.round(
    (answeredCount / totalQuestionCount) * 100,
  );
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestionCount - 1;
  const hasUnansweredQuestions = missingQuestionIndexes.length > 0;

  useEffect(() => {
    saveTestProgress({
      currentIndex,
      answers,
    });
  }, [answers, currentIndex]);

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

  const handleSubmit = () => {
    if (hasUnansweredQuestions) {
      const firstMissingQuestionIndex = missingQuestionIndexes[0];

      setShowValidation(true);

      if (firstMissingQuestionIndex !== undefined) {
        setCurrentIndex(firstMissingQuestionIndex);
      }

      return;
    }

    setShowValidation(false);
    void navigate('/result');
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

      {showValidation && hasUnansweredQuestions ? (
        <div
          id={validationMessageId}
          className="rounded-3xl border border-amber-200 bg-amber-50/90 p-5 text-amber-950 shadow-sm"
          role="alert"
        >
          <p className="text-base font-bold">
            {t('validation.allQuestionsRequired')}
          </p>
          <p className="mt-2 text-sm">{t('validation.missingAnswers')}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {missingQuestionIndexes.map((questionIndex) => (
              <li key={questionBank[questionIndex]?.id ?? questionIndex}>
                <button
                  type="button"
                  className="rounded-full border border-amber-300 bg-white/80 px-3 py-2 text-sm font-bold text-amber-900 transition hover:border-amber-400 hover:bg-white"
                  onClick={() => {
                    setCurrentIndex(questionIndex);
                  }}
                >
                  {t('labels.question')} {questionIndex + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

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
          onClick={isLastQuestion ? handleSubmit : goToNextQuestion}
          aria-describedby={
            showValidation && hasUnansweredQuestions
              ? validationMessageId
              : undefined
          }
        >
          {isLastQuestion ? t('actions.submit') : t('actions.next')}
        </button>
      </div>
    </section>
  );
}

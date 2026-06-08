import { useTranslation } from 'react-i18next';
import type { Question } from '../data';
import { useLanguage } from '../i18n';
import type { LikertValue } from '../lib';
import { LikertScale } from './LikertScale';

export interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  value: LikertValue | undefined;
  onAnswerChange: (questionId: string, value: LikertValue) => void;
  disabled?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  value,
  onAnswerChange,
  disabled = false,
}: QuestionCardProps) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const questionLabel = t('labels.questionCount', {
    current: questionNumber,
    total: totalQuestions,
  });
  const titleId = `${question.id}-title`;

  return (
    <article
      className="mx-auto w-full max-w-4xl rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[var(--shadow-soft)] backdrop-blur sm:p-8"
      aria-labelledby={titleId}
    >
      <p className="mb-4 text-sm font-bold tracking-[0.16em] text-indigo-700 uppercase">
        {questionLabel}
      </p>
      <h2
        id={titleId}
        className="text-2xl leading-tight font-bold text-slate-950 sm:text-3xl"
      >
        {question.text[language]}
      </h2>
      <div className="mt-8">
        <LikertScale
          name={`answer-${question.id}`}
          value={value}
          onChange={(nextValue) => {
            onAnswerChange(question.id, nextValue);
          }}
          ariaLabel={t('labels.selectedAnswer')}
          disabled={disabled}
        />
      </div>
    </article>
  );
}

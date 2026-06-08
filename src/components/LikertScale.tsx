import { useTranslation } from 'react-i18next';
import type { LikertValue } from '../lib';

const likertOptions = [
  { value: 1, labelKey: 'likert.stronglyDisagree' },
  { value: 2, labelKey: 'likert.disagree' },
  { value: 3, labelKey: 'likert.neutral' },
  { value: 4, labelKey: 'likert.agree' },
  { value: 5, labelKey: 'likert.stronglyAgree' },
] as const satisfies readonly {
  value: LikertValue;
  labelKey: string;
}[];

export interface LikertScaleProps {
  name: string;
  value: LikertValue | undefined;
  onChange: (value: LikertValue) => void;
  ariaLabel: string;
  disabled?: boolean;
}

export function LikertScale({
  name,
  value,
  onChange,
  ariaLabel,
  disabled = false,
}: LikertScaleProps) {
  const { t } = useTranslation();

  return (
    <div
      className="grid gap-3 sm:grid-cols-5"
      role="radiogroup"
      aria-label={ariaLabel}
    >
      {likertOptions.map((option) => {
        const label = t(option.labelKey);
        const isSelected = value === option.value;

        return (
          <label
            key={option.value}
            className={[
              'relative grid min-h-24 cursor-pointer place-items-center rounded-2xl border p-3 text-center text-sm font-semibold transition',
              disabled ? 'cursor-not-allowed opacity-60' : '',
              isSelected
                ? 'border-indigo-500 bg-indigo-600 text-white shadow-[var(--shadow-accent)]'
                : 'border-indigo-100 bg-white/80 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50',
            ].join(' ')}
          >
            <input
              className="size-4 accent-indigo-600"
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              disabled={disabled}
              onChange={() => {
                onChange(option.value);
              }}
            />
            <span className="text-lg font-black">{option.value}</span>
            <span className="mt-1 leading-snug">{label}</span>
          </label>
        );
      })}
    </div>
  );
}

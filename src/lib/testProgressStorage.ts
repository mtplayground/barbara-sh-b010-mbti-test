import { questionBank, totalQuestionCount } from '../data';
import { isLikertValue } from './scoring';
import type { LikertValue } from './scoring';

export const testProgressStorageKey = 'mbti-test.progress.v1';

export interface TestProgressState {
  currentIndex: number;
  answers: Record<string, LikertValue>;
}

const emptyTestProgress: TestProgressState = {
  currentIndex: 0,
  answers: {},
};

const questionIds = new Set<string>(
  questionBank.map((question) => question.id),
);

function getLocalStorage() {
  if (typeof window === 'undefined') {
    return undefined;
  }

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normalizeCurrentIndex(value: unknown) {
  if (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= 0 &&
    value < totalQuestionCount
  ) {
    return value;
  }

  return emptyTestProgress.currentIndex;
}

function normalizeAnswers(value: unknown) {
  if (!isRecord(value)) {
    return emptyTestProgress.answers;
  }

  return Object.entries(value).reduce<Record<string, LikertValue>>(
    (answers, [questionId, answer]) => {
      if (questionIds.has(questionId) && isLikertValue(answer)) {
        answers[questionId] = answer;
      }

      return answers;
    },
    {},
  );
}

export function readTestProgress(): TestProgressState {
  const storage = getLocalStorage();

  if (!storage) {
    return emptyTestProgress;
  }

  try {
    const storedProgress = storage.getItem(testProgressStorageKey);

    if (!storedProgress) {
      return emptyTestProgress;
    }

    const parsedProgress: unknown = JSON.parse(storedProgress);

    if (!isRecord(parsedProgress)) {
      return emptyTestProgress;
    }

    return {
      currentIndex: normalizeCurrentIndex(parsedProgress.currentIndex),
      answers: normalizeAnswers(parsedProgress.answers),
    };
  } catch {
    return emptyTestProgress;
  }
}

export function saveTestProgress(progress: TestProgressState) {
  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(
      testProgressStorageKey,
      JSON.stringify({
        currentIndex: normalizeCurrentIndex(progress.currentIndex),
        answers: normalizeAnswers(progress.answers),
      }),
    );
  } catch {
    return;
  }
}

export function clearTestProgress() {
  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  try {
    storage.removeItem(testProgressStorageKey);
  } catch {
    return;
  }
}

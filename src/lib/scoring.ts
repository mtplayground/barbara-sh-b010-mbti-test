import { dimensionDefinitions, questionBank, questionPoles } from '../data';
import type {
  MbtiTypeCode,
  Question,
  QuestionDimension,
  QuestionPole,
} from '../data';

export const likertValues = [1, 2, 3, 4, 5] as const;

export type LikertValue = (typeof likertValues)[number];
export type AnswerMap = Readonly<Partial<Record<string, LikertValue>>>;

export interface PoleScore {
  pole: QuestionPole;
  score: number;
}

export interface DimensionScore {
  dimension: QuestionDimension;
  scores: readonly [PoleScore, PoleScore];
  selectedPole: QuestionPole;
  tieBreakApplied: boolean;
}

export interface ScoringResult {
  typeCode: MbtiTypeCode;
  dimensionScores: readonly DimensionScore[];
  answeredCount: number;
  totalQuestionCount: number;
}

export const dimensionTieBreakPoles = {
  EI: 'E',
  SN: 'S',
  TF: 'T',
  JP: 'J',
} as const satisfies Readonly<Record<QuestionDimension, QuestionPole>>;

export function isLikertValue(value: unknown): value is LikertValue {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    likertValues.includes(value as LikertValue)
  );
}

function createEmptyPoleTotals() {
  return Object.fromEntries(questionPoles.map((pole) => [pole, 0])) as Record<
    QuestionPole,
    number
  >;
}

function selectPole(
  dimension: QuestionDimension,
  firstPole: QuestionPole,
  firstScore: number,
  secondPole: QuestionPole,
  secondScore: number,
) {
  if (firstScore > secondScore) {
    return {
      selectedPole: firstPole,
      tieBreakApplied: false,
    };
  }

  if (secondScore > firstScore) {
    return {
      selectedPole: secondPole,
      tieBreakApplied: false,
    };
  }

  return {
    selectedPole: dimensionTieBreakPoles[dimension],
    tieBreakApplied: true,
  };
}

export function scoreAnswers(
  answers: AnswerMap,
  questions: readonly Question[] = questionBank,
): ScoringResult {
  const poleTotals = createEmptyPoleTotals();
  let answeredCount = 0;

  for (const question of questions) {
    const answer = answers[question.id];

    if (answer === undefined) {
      continue;
    }

    poleTotals[question.pole] += answer;
    answeredCount += 1;
  }

  const dimensionScores = dimensionDefinitions.map((definition) => {
    const [firstPole, secondPole] = definition.poles;
    const firstScore = poleTotals[firstPole];
    const secondScore = poleTotals[secondPole];
    const selected = selectPole(
      definition.dimension,
      firstPole,
      firstScore,
      secondPole,
      secondScore,
    );
    const scores: [PoleScore, PoleScore] = [
      { pole: firstPole, score: firstScore },
      { pole: secondPole, score: secondScore },
    ];

    return {
      dimension: definition.dimension,
      scores,
      selectedPole: selected.selectedPole,
      tieBreakApplied: selected.tieBreakApplied,
    };
  });

  return {
    typeCode: dimensionScores
      .map((dimensionScore) => dimensionScore.selectedPole)
      .join('') as MbtiTypeCode,
    dimensionScores,
    answeredCount,
    totalQuestionCount: questions.length,
  };
}

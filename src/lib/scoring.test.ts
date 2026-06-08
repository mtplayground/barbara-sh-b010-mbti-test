import { describe, expect, it } from 'vitest';
import type { Question, QuestionDimension, QuestionPole } from '../data';
import type { DimensionScore, ScoringResult } from './scoring';
import { isLikertValue, scoreAnswers } from './scoring';

const text = {
  en: 'Test statement',
  'zh-CN': '测试陈述',
};

function makeQuestion(
  id: string,
  dimension: QuestionDimension,
  pole: QuestionPole,
): Question {
  return {
    id,
    dimension,
    pole,
    text,
  };
}

function getDimensionScore(
  result: ScoringResult,
  dimension: QuestionDimension,
): DimensionScore {
  const dimensionScore = result.dimensionScores.find(
    (score) => score.dimension === dimension,
  );

  if (!dimensionScore) {
    throw new Error(`Missing dimension score for ${dimension}.`);
  }

  return dimensionScore;
}

function getPoleScore(score: DimensionScore, pole: QuestionPole) {
  const poleScore = score.scores.find((item) => item.pole === pole);

  if (!poleScore) {
    throw new Error(`Missing pole score for ${pole}.`);
  }

  return poleScore.score;
}

describe('scoring engine', () => {
  it('recognizes only supported 5-point Likert values', () => {
    expect(isLikertValue(1)).toBe(true);
    expect(isLikertValue(3)).toBe(true);
    expect(isLikertValue(5)).toBe(true);
    expect(isLikertValue(0)).toBe(false);
    expect(isLikertValue(6)).toBe(false);
    expect(isLikertValue('5')).toBe(false);
  });

  it('aggregates answer values into the tagged pole totals', () => {
    const questions = [
      makeQuestion('q-e-1', 'EI', 'E'),
      makeQuestion('q-e-2', 'EI', 'E'),
      makeQuestion('q-i-1', 'EI', 'I'),
    ];
    const result = scoreAnswers(
      {
        'q-e-1': 5,
        'q-e-2': 4,
        'q-i-1': 2,
      },
      questions,
    );
    const energyScore = getDimensionScore(result, 'EI');

    expect(getPoleScore(energyScore, 'E')).toBe(9);
    expect(getPoleScore(energyScore, 'I')).toBe(2);
    expect(energyScore.selectedPole).toBe('E');
    expect(energyScore.tieBreakApplied).toBe(false);
    expect(result.answeredCount).toBe(3);
    expect(result.totalQuestionCount).toBe(3);
  });

  it('selects the higher scoring pole for each dimension', () => {
    const questions = [
      makeQuestion('q-e', 'EI', 'E'),
      makeQuestion('q-i', 'EI', 'I'),
      makeQuestion('q-s', 'SN', 'S'),
      makeQuestion('q-n', 'SN', 'N'),
      makeQuestion('q-t', 'TF', 'T'),
      makeQuestion('q-f', 'TF', 'F'),
      makeQuestion('q-j', 'JP', 'J'),
      makeQuestion('q-p', 'JP', 'P'),
    ];
    const result = scoreAnswers(
      {
        'q-e': 1,
        'q-i': 5,
        'q-s': 2,
        'q-n': 5,
        'q-t': 1,
        'q-f': 4,
        'q-j': 2,
        'q-p': 5,
      },
      questions,
    );

    expect(getDimensionScore(result, 'EI').selectedPole).toBe('I');
    expect(getDimensionScore(result, 'SN').selectedPole).toBe('N');
    expect(getDimensionScore(result, 'TF').selectedPole).toBe('F');
    expect(getDimensionScore(result, 'JP').selectedPole).toBe('P');
    expect(result.typeCode).toBe('INFP');
  });

  it('uses deterministic tie-breaks when dimension scores are equal', () => {
    const questions = [
      makeQuestion('q-e', 'EI', 'E'),
      makeQuestion('q-i', 'EI', 'I'),
      makeQuestion('q-s', 'SN', 'S'),
      makeQuestion('q-n', 'SN', 'N'),
      makeQuestion('q-t', 'TF', 'T'),
      makeQuestion('q-f', 'TF', 'F'),
      makeQuestion('q-j', 'JP', 'J'),
      makeQuestion('q-p', 'JP', 'P'),
    ];
    const result = scoreAnswers(
      {
        'q-e': 3,
        'q-i': 3,
        'q-s': 4,
        'q-n': 4,
        'q-t': 2,
        'q-f': 2,
        'q-j': 5,
        'q-p': 5,
      },
      questions,
    );

    expect(result.typeCode).toBe('ESTJ');
    expect(result.dimensionScores.every((score) => score.tieBreakApplied)).toBe(
      true,
    );
  });

  it('assembles a full type code across representative answer sets', () => {
    const questions = [
      makeQuestion('q-e', 'EI', 'E'),
      makeQuestion('q-i', 'EI', 'I'),
      makeQuestion('q-s', 'SN', 'S'),
      makeQuestion('q-n', 'SN', 'N'),
      makeQuestion('q-t', 'TF', 'T'),
      makeQuestion('q-f', 'TF', 'F'),
      makeQuestion('q-j', 'JP', 'J'),
      makeQuestion('q-p', 'JP', 'P'),
    ];

    expect(
      scoreAnswers(
        {
          'q-e': 5,
          'q-i': 1,
          'q-s': 5,
          'q-n': 1,
          'q-t': 5,
          'q-f': 1,
          'q-j': 5,
          'q-p': 1,
        },
        questions,
      ).typeCode,
    ).toBe('ESTJ');

    expect(
      scoreAnswers(
        {
          'q-e': 1,
          'q-i': 5,
          'q-s': 1,
          'q-n': 5,
          'q-t': 1,
          'q-f': 5,
          'q-j': 1,
          'q-p': 5,
        },
        questions,
      ).typeCode,
    ).toBe('INFP');
  });
});

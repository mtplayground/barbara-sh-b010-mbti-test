import { expect, test } from '@playwright/test';

const totalQuestionCount = 32;
const validTypeCodePattern = /^[EI][SN][TF][JP]$/;

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.clear();
    window.localStorage.setItem('mbti-test.language', 'en');
  });
});

test('starts the test, answers every question, submits, and shows a valid MBTI result', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: 'Discover Your MBTI Personality Type',
    }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Start Test' }).click();
  await expect(page).toHaveURL(/#\/test$/);

  for (let index = 0; index < totalQuestionCount; index += 1) {
    await expect(
      page
        .getByText(
          `Question ${String(index + 1)} of ${String(totalQuestionCount)}`,
        )
        .first(),
    ).toBeVisible();

    await page.locator('input[type="radio"][value="4"]').check();

    await page
      .getByRole('button', {
        name: index === totalQuestionCount - 1 ? 'Submit' : 'Next',
      })
      .click();
  }

  await expect(page).toHaveURL(/#\/result$/);
  await expect(
    page.getByRole('heading', { name: validTypeCodePattern }),
  ).toBeVisible();
});

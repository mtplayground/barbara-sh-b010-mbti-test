import { expect, test } from '@playwright/test';

const mobileViewport = { width: 390, height: 844 };

const zhPages = [
  { path: '/', heading: '发现你的 MBTI 人格类型' },
  { path: '/#/test', heading: '测试' },
  { path: '/#/result', heading: '结果' },
  { path: '/#/about', heading: '关于 / 免责声明' },
] as const;

async function expectNoHorizontalOverflow(page: {
  evaluate: <T>(pageFunction: () => T | Promise<T>) => Promise<T>;
}) {
  const hasOverflow = await page.evaluate(() => {
    const documentElement = document.documentElement;

    return documentElement.scrollWidth > documentElement.clientWidth + 1;
  });

  expect(hasOverflow).toBe(false);
}

test('skip link is keyboard accessible', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.clear();
    window.localStorage.setItem('mbti-test.language', 'en');
  });

  await page.goto('/');
  await page.keyboard.press('Tab');

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });

  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
});

for (const pageInfo of zhPages) {
  test(`renders ${pageInfo.path} in zh-CN on mobile without horizontal overflow`, async ({
    page,
  }) => {
    await page.setViewportSize(mobileViewport);
    await page.addInitScript(() => {
      window.localStorage.clear();
      window.localStorage.setItem('mbti-test.language', 'zh-CN');
    });

    await page.goto(pageInfo.path);

    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
    await expect(
      page.getByRole('heading', { name: pageInfo.heading }).first(),
    ).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });
}

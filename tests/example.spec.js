import { test, expect } from '@playwright/test';

// Define your 34+ cases here
const testData = [
  { id: 'Pos_01', input: 'mama', expected: 'මම' },
  { id: 'Pos_02', input: 'gedhara', expected: 'ගෙදර' },
  { id: 'Neg_01', input: 'mama gedra yanawa', expected: 'මම ගෙදර යණවා' }, 
  { id: "Pos_UI_0001", name: "Greeting phrase", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" }
  // etc...
];

for (const data of testData) {
  test(`Test ${data.id}: Convert "${data.input}"`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    await inputArea.fill(data.input);

    // Dynamic assertion based on the data
    await expect(outputBox).toContainText(data.expected);

     if (data.id === 'Pos_UI_0001') {
      await inputArea.fill(data.input);

      const clearBtn = page.getByRole('button', { name: /clear/i }).first();
      await clearBtn.click();

      await expect(inputArea).toHaveValue('');
    }
  });
}
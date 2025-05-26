import { test, expect } from '@playwright/test';

test('Keyboard actions test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    await page.locator('[id="target"]').press('Backspace');
    await expect(await page.locator('[id="result"]')).toContainText('BACK_SPACE');
    await page.locator('[id="target"]').fill('abcde');
    await page.locator('[id="target"]').press('Control+A');
    await page.locator('[id="target"]').press('Delete');
    await expect(await page.locator('[id="result"]')).toContainText('DELETE');
});

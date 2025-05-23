import { test, expect } from '@playwright/test';

test('First playwright recorder script', async ({ page }) => {
    await test.step('Element Screenshot', async () => {
        await page.goto('https://demo.automationtesting.in/Register.html');
        await page.getByRole('textbox', { name: 'First Name' }).screenshot({path: 'screenshots/elementScreenshot.png'});
        await page.screenshot({path: 'screenshots/pageScreenshot.png'});
        await page.screenshot({path: 'screenshots/fullPageScreenshot.png', fullPage: true});
    });
});
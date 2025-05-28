import { test, expect } from '@playwright/test';

test('Environment management', async ({ page }) => {
    await page.goto(`${process.env.demoAutomationtestingUrl}`);
    await page.getByRole('textbox', { name: 'First Name' }).fill('tester1');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
    await page.locator('textarea').fill('Tester 1 adderess');
    await page.locator('input[type="email"]').fill('tester@email.co');
    await page.locator('input[type="tel"]').fill('1234567890');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.locator('//input[@value="Hockey"]').check();
    await page.locator('//input[@value="Movies"]').check();
});
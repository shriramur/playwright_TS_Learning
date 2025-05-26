import { test, expect } from '@playwright/test';

test('First playwright recorder script', async ({ page }) => {
    let name = 'tester1';
    console.log(name);
    await test.step('Step 1', async () => {
        await page.goto('https://demo.automationtesting.in/Register.html');
        await page.getByRole('textbox', { name: 'First Name' }).fill('tester1');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
        await page.locator('textarea').fill('Tester 1 adderess');
        await page.locator('input[type="email"]').fill('tester@email.co');
    });
    await test.step('Step 2', async () => {
        await page.locator('input[type="tel"]').fill('1234567890');
        await page.getByRole('radio', { name: 'Male', exact: true }).check();
        await page.locator('//input[@value="Hockey"]').check();
        await page.locator('//input[@value="Movies"]').check();
    });
});
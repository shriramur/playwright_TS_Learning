import { test, expect } from '@playwright/test';

test('Test level Timeouts ', async ({ page }) => {
    test.setTimeout(2000); // this timeout is specific to this test. If this test take more than 2000 sec, this will fail.
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill('tester1');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
    await page.locator('textarea').fill('Tester 1 adderess');
    await page.locator('input[type="email"]').fill('tester@email.co');
    await page.locator('input[type="tel"]').fill('1234567890');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.locator('//input[@value="Hockey"]').check({ timeout: 1000 }); // this will overwrite the global timeout for this action only
    await page.locator('//input[@value="Movies"]').check();
});

test('Expect Timeouts and Action timeout ', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill('tester1',{timeout: 2000}); // this will overwrite the global timeout for this action only
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
    await page.locator('textarea').fill('Tester 1 adderess');
    await page.locator('input[type="email"]').fill('tester@email.co');
    await page.locator('input[type="tel"]').fill('1234567890');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.locator('//input[@value="Hockey"]').check();
    await page.locator('//input[@value="Movies"]').check();
    await expect(await page.locator('input[type="email"]')).toHaveText('tester@email.co',{timeout:2000});// this will overwrite the global timeout for this assertion only
});
import { test, expect } from '@playwright/test';

// Skip the test
test.skip('Test 1 skipped as I have used skipped tag', async ({ page }) => {
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
//Skip the test based on some condition. In this case we are skipping the tests if the browser is chrome
test('Test 1 - Safari-only test', async ({ page, browserName }) => {
  test.skip(browserName !== 'Webkit', 'This feature is Safari-only');
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
test('Test 2', async ({ page }) => {
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
// Run only this test and dont run other
// test.only('Test 3- This test will only run because I gave only method in this test', async ({ page }) => {
//     await test.step('Step 1', async () => {
//         await page.goto('https://demo.automationtesting.in/Register.html');
//         await page.getByRole('textbox', { name: 'First Name' }).fill('tester1');
//         await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
//         await page.locator('textarea').fill('Tester 1 adderess');
//         await page.locator('input[type="email"]').fill('tester@email.co');
//     });
//     await test.step('Step 2', async () => {
//         await page.locator('input[type="tel"]').fill('1234567890');
//         await page.getByRole('radio', { name: 'Male', exact: true }).check();
//         await page.locator('//input[@value="Hockey"]').check();
//         await page.locator('//input[@value="Movies"]').check();
//     });
// });
// Group tests using Describe
test.describe('Smoke tests', () => {
test('Test 4', async ({ page }) => {
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
test('Test 5', async ({ page }) => {
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
});
test.describe('Regression tests', () => {
test('Test 4', async ({ page }) => {
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
test('Test 5', async ({ page }) => {
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
});

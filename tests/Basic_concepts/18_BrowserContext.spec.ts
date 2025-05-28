import { test, expect } from '@playwright/test';

test('Browser context in playwright', async ({ page, browser }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill('tester1');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
    await page.locator('textarea').fill('Tester 1 adderess');
    await page.locator('input[type="email"]').fill('tester@email.co');
    await page.locator('input[type="tel"]').fill('1234567890');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    //Creating a new tab for the same browser instance
    const newtab1 = await page.context().newPage();
    await newtab1.goto('https://demo.automationtesting.in/Register.html');
    await newtab1.getByRole('textbox', { name: 'First Name' }).fill('tester1');
    await newtab1.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
    await newtab1.locator('textarea').fill('Tester 1 adderess');
    await newtab1.locator('input[type="email"]').fill('tester@email.co');

// Creating a new browser window all together 
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://demo.automationtesting.in/Register.html');
    await page2.getByRole('textbox', { name: 'First Name' }).fill('tester2');
    await page2.getByRole('textbox', { name: 'Last Name' }).fill('Tester2');
    await page2.locator('textarea').fill('Tester 2 adderess');
    await page2.locator('input[type="email"]').fill('email@emial.com');
//creating a new tab in the context2 browser window
    const newtab2 = await context2.newPage();
    await newtab2.goto('https://demo.automationtesting.in/Register.html');
    await newtab2.getByRole('textbox', { name: 'First Name' }).fill('tester2');
    await newtab2.getByRole('textbox', { name: 'Last Name' }).fill('Tester2');
    await newtab2.locator('textarea').fill('Tester 2 adderess');
    await newtab2.locator('input[type="email"]').fill('email@emial.com');
    //Closing the newtab1
    newtab1.close();
    // Doing operations in the first opened browser tab
        await page.locator('//input[@value="Hockey"]').check();
    await page.locator('//input[@value="Movies"]').check();
    // Closing the context2 browser window
    context2.close();
});
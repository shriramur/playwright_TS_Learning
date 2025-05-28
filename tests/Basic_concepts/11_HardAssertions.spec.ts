import { test, expect } from '@playwright/test';
import '../../utils/custom-matchers';

test('Hard assertions test', async ({ page }) => {
    // More assertion can be found in https://playwright.dev/docs/test-assertions
    //element assertion
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect(await page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
    await expect(await page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();
    await expect(await page.getByRole('textbox', { name: 'First Name' })).toBeEnabled();
    await expect(await page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    await expect(await page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('placeholder', "First Name");

    //page assertions
    await expect(await page).toHaveTitle('Register');
    await expect(await page).toHaveURL('https://demo.automationtesting.in/Register.html');
    await expect(await page).toHaveTitle('Register');

    //Generic assertion
    const value = [1, 2, 3];
    expect(value).toContain(2);
    expect(new Set(value)).toContain(2);

    // soft assertions in another file

    //negation
     await expect(await page).not.toHaveTitle('Register sadasdda');

     //custom messages
    await expect(await page.getByRole('textbox', { name: 'First Name' }),'this is the custom message').toBeEditable();
});

test('Custom assertions test', async ({ page }) => {
// Custom assertions ==> this is coming from custom-matchers.js
await page.goto('https://example.com');

  const heading = page.locator('h1');
  //await expect(heading).toBeVisibleWithText('Example Domain');

  const link = page.locator('a');
  //await expect(link).toHaveExactAttribute('href', 'https://www.iana.org/domains/example');


});
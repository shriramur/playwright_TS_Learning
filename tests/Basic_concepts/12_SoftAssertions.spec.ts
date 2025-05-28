import { test, expect } from '@playwright/test';

test('Hard assertions test', async ({ page }) => {
    // More assertion can be found in https://playwright.dev/docs/test-assertions
    //element assertion
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect.soft(await page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
    await expect.soft(await page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();
    await expect.soft(await page.getByRole('textbox', { name: 'First Name' })).toBeEnabled();
    await expect.soft(await page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    await expect.soft(await page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('placeholder', "First Name");

    //page assertions
    await expect.soft(await page).toHaveTitle('Register');
    await expect.soft(await page).toHaveURL('https://demo.automationtesting.in/Register.html');
    await expect.soft(await page).toHaveTitle('Register');

    //Generic assertion
    const value = [1, 2, 3];
    expect(value).toContain(2);
    expect(new Set(value)).toContain(2);
});

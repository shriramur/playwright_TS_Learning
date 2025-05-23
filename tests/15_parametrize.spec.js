import { test, expect } from '@playwright/test';

const credentials = [
  { username: 'admin', password: 'admin' }, // valid
  { username: 'user', password: 'wrongpass' }, // invalid
  { username: '', password: 'nopass' }, // missing username
];

test.describe('Login scenarios - parameterized', () => {
  for (const { username, password } of credentials) {
    test(`Login with username="${username}" and password="${password}"`, async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');

      await page.fill('#username', username);
      await page.fill('#password', password);
      await page.click('button[type="submit"]');

      if (username === 'admin' && password === 'admin') {
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
        await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
      } else {
        await expect(page.locator('.flash.error')).toBeVisible();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
      }
    });
  }
});

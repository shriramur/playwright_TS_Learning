import { test, expect } from '@playwright/test';

//First we will capture ss of the application and it will be added in folder after 1st run. 
// From second run it will take the SS from the folder and compare with the current run and try to find diff
test('Full page image comparision', async ({ page }) => {
        await page.goto("https://www.google.co.in/");
    await expect(await page).toHaveScreenshot('google.png');
    await page.locator('[title="Search"]').fill("google");
    //await expect(await page).toHaveScreenshot('google.png');
});

test('Object image comparision', async ({ page }) => {
        await page.goto("https://www.google.co.in/");
  const element = await page.locator('[class="lnXdpd"]');
  await expect(await element).toHaveScreenshot('googleLogo.png');
});

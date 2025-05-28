import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/homepage';
import { BasketPage } from '../../src/pages/basketpage';

test('basic POM setup without fixtures', async ({ page }) => {
    const homepage = new HomePage(page);
    const basketPage = new BasketPage(page);
    await homepage.goToURL();
    await homepage.verifyNewArrivalHeaderIsDisplayed();
    await homepage.clickAddToCartButtonByProductName('Selenium Ruby');
    await homepage.clickAddToCartButtonByProductName('Thinking in HTML');
    await homepage.clickGoToCartButton();
    await expect(page).toHaveURL('https://practice.automationtesting.in/basket/');
    await basketPage.verifyCartColumnsAreDisplayed();
    await basketPage.clickProceedToCheckoutButton();
});
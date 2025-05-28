import {test, expect} from '../../src/fixtures/testFixtures';

test('basic POM setup without fixtures', async ({ page,homePage,basketPage }) => {
    await homePage.goToURL();
    await homePage.verifyNewArrivalHeaderIsDisplayed();
    await homePage.clickAddToCartButtonByProductName('Selenium Ruby');
    await homePage.clickAddToCartButtonByProductName('Thinking in HTML');
    await homePage.clickGoToCartButton();
    await expect(page).toHaveURL('https://practice.automationtesting.in/basket/');
    await basketPage.verifyCartColumnsAreDisplayed();
    await basketPage.clickProceedToCheckoutButton();
});
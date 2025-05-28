import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { BasketPage } from '../pages/basketpage';


export const test = base.extend<{
    saveLogs: void;
    homePage: HomePage;
    basketPage: BasketPage;
}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    basketPage: async ({ page }, use) => {
        const basketPage = new BasketPage(page);
        await use(basketPage);
    },

});

export { expect } from '@playwright/test';
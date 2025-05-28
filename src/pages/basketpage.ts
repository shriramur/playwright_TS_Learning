import { Locator, Page, expect } from "@playwright/test";

export class BasketPage {
    readonly page: Page;
    readonly productColumnHeader: Locator;
    readonly subtotalColumnHeader: Locator;
    readonly priceColumnHeader: Locator;
    readonly quantityColumnHeader: Locator;
    readonly proceedToCheckoutButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        // Elements
        this.productColumnHeader = page.locator("th[class='product-name']");
        this.subtotalColumnHeader = page.locator('th[class="product-subtotal"]');
        this.priceColumnHeader = page.locator('th[class="product-price"]');
        this.quantityColumnHeader = page.locator('th[class="product-quantity"]');
        this.proceedToCheckoutButtonLocator = page.locator('[class="wc-proceed-to-checkout"] a');
    }
    

    // Methods

    async verifyCartColumnsAreDisplayed() {
        await expect(await this.productColumnHeader).toBeVisible();
        await expect(await this.subtotalColumnHeader).toBeVisible();
        await expect(await this.priceColumnHeader).toBeVisible();
        await expect(await this.quantityColumnHeader).toBeVisible();
    }
    async clickProceedToCheckoutButton() {
        await this.proceedToCheckoutButtonLocator.click();
    }
}


import { Locator, Page, expect } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly newArrivalheader: Locator;
    readonly addToCartButton: (product: string) => Locator;
    readonly gotoCartButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        // Elements
        this.newArrivalheader = page.locator("//h2[text()='new arrivals']");
        this.addToCartButton = (product: string) => page.locator(`//h3[text()='${product}']/../following-sibling::a`);
        this.gotoCartButtonLocator = page.locator('[class="cartcontents"]');
    }

    // Methods
    async goToURL() {
        await this.page.goto(`${process.env.practicAutomationTestingURL}`);
    }
    async verifyNewArrivalHeaderIsDisplayed() {
        await expect(await this.newArrivalheader).toBeVisible();
    }
    async clickAddToCartButtonByProductName(productName: string) {
        await this.addToCartButton(productName).click();
    }
    async clickGoToCartButton() {
        await this.gotoCartButtonLocator.click();
    }
}


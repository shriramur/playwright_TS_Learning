// custom-matchers.js
import { expect } from '@playwright/test';

expect.extend({
  async toBeVisibleWithText(locator, expectedText) {
    const isVisible = await locator.isVisible();
    const actualText = await locator.textContent();

    const pass = isVisible && actualText?.trim() === expectedText;

    return {
      pass,
      message: () =>
        pass
          ? `Expected element not to be visible with text "${expectedText}"`
          : `Expected element to be visible with text "${expectedText}", but got "${actualText?.trim()}"`,
    };
  },

  async toHaveExactAttribute(locator, attrName, expectedValue) {
    const actualValue = await locator.getAttribute(attrName);
    const pass = actualValue === expectedValue;

    return {
      pass,
      message: () =>
        pass
          ? `Expected element not to have attribute [${attrName}="${expectedValue}"]`
          : `Expected [${attrName}="${expectedValue}"], but got "${actualValue}"`,
    };
  },
});

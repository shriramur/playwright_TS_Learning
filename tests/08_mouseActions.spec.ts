import { test, expect } from '@playwright/test';

test('Mouse actions test', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('[id="doubleClickBtn"]').dblclick();
    console.log('double click msg:' + page.locator('id="doubleClickMessage"').isVisible());
    await page.locator('[id="rightClickBtn"]').click({ button: 'right' });
    console.log('rightClick msg:' + page.locator('id="rightClickMessage"').isVisible());
    await page.locator(`//button[text()='Click Me']`).click({ button: 'left' });
    console.log('left Click/ Normal msg:' + page.locator('id="dynamicClickMessage"').isVisible());
    await page.locator('//div[text()="Widgets"]/span').click();
    await page.locator('//span[text()="Tool Tips"]').click();
    await page.locator('[id="toolTipButton"]').hover();
    expect(page.locator('[class="tooltip-inner"]')).toBeVisible();
    expect(page.locator('[class="tooltip-inner"]')).toHaveText('You hovered over the Button');

    
});

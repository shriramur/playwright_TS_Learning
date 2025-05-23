import {test, expect} from '@playwright/test';

test('Iframes and Drag Drop test', async ({page}) => {
    await page.goto('https://jqueryui.com/droppable/');
    const frame = await page.frameLocator('[class="demo-frame"]');
    const drag = await frame.locator('[id="draggable"]');
    const drop = await frame.locator('[id="droppable"]');
    await drag.dragTo(drop);
    await page.getByRole('link', {name:'Accept'}).click();
});
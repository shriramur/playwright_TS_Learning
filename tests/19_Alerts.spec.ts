import { test, expect } from '@playwright/test';

test('Simple Alert', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
        await page.on('dialog', dialog => {
        dialog.accept();
        console.log('basic Alert text:', dialog.message());
        console.log('basic Alert type:', dialog.type());
    })
    await page.getByText('click the button to display an  alert box').click();
})

test('Alert with Okay and Cancel buttons', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    page.locator('[href="#CancelTab"]').click();
    //href="#Textbox"
        await page.on('dialog', dialog => {
        //dialog.accept();
        dialog.dismiss(); // This will click the Cancel button
        console.log('Alert with Okay and Cancel buttons text:', dialog.message());
        console.log('Alert with Okay and Cancel buttons type:', dialog.type());
    })
    await page.getByText('click the button to display a confirm box').click();
})

test('Alert with textbox', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    page.locator('[href="#CancelTab"]').click();
    //href="#Textbox"
        await page.on('dialog', dialog => {
        dialog.accept('ellow world from Playwright'); // This will click the OK button and send the text to the textbox
        //dialog.dismiss(); // This will click the Cancel button
        console.log('Alert with textbox:', dialog.message());
        console.log('Alert with textbox:', dialog.type());
    })
    await page.getByText('click the button to display a confirm box').click();
})
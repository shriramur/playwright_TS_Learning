import {test, expect} from '@playwright/test';

test('Locator test', async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill('ramar');
    console.log(await page.getByAltText('image not displaying').isVisible());
    //console.log(await page.getByLabel('Advertisement').isVisible());
    await page.getByPlaceholder('Last Name').fill('LN');
    await page.getByText('Submit').click();
    console.log(await page.getByTitle('Sakinalium Demo Site').innerText());
    //await page.getByTestId('EmailAdress').fill('shri@gmail.com');
});
import { test, expect } from '@playwright/test';

test('Dropdown tests', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill('tester1');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Tester1');
    await page.locator('textarea').fill('Tester 1 adderess');
    await page.locator('input[type="email"]').fill('tester@email.co');
    await page.locator('input[type="tel"]').fill('1234567890');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.locator('//input[@value="Hockey"]').check();
    await page.locator('//input[@value="Movies"]').check();
    //Seclect by value
    await page.locator('//select[@id="Skills"]').selectOption('CSS');
    //select by visible text
   await page.locator('//select[@id="Skills"]').selectOption('C++');
   //get all values and print
   let values1 = await page.locator('//select[@id="Skills"]/option').all();
   console.log(values1.length)
   for(let val of values1){
        console.log(await val.getAttribute('value'))
   }
   expect(await page.locator('//select[@id="Skills"]/option')).toContainText(['C','C++']);
});